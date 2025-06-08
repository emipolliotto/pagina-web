
// Objeto que mapea idiomas a URLs de banderas
const banderas = {
  'Ingles': 'https://flagcdn.com/w640/gb.png',
  'Aleman': 'https://flagcdn.com/w640/de.png',
  'Italiano': 'https://flagcdn.com/w640/it.png',
  'Frances': 'https://flagcdn.com/w640/fr.png',
  'Chino': 'https://flagcdn.com/w640/cn.png',
  'Japones': 'https://flagcdn.com/w640/jp.png',
  'Portugues': 'https://flagcdn.com/w640/pt.png',
  'Español':'https://flagcdn.com/w640/es.png'
};

// Obtener el contenedor de las inscripciones
const misInscripcionesDiv = document.getElementById('mis-inscripciones');

// Función para mostrar las inscripciones en la página
function mostrarInscripciones() {
  const inscripciones = JSON.parse(localStorage.getItem('inscripciones')) || [];
  misInscripcionesDiv.innerHTML = ''; // Limpiar cualquier contenido previo

  if (inscripciones.length === 0) {
      misInscripcionesDiv.innerHTML = '<p class="text-center mt-5">No hay inscripciones realizadas aún.</p>';
      return;
  }

  inscripciones.forEach((inscripcion, index) => {
      const card = document.createElement('div');
      card.classList.add('card-idioma');
      card.classList.add('mb-3');
      card.style.width = '23rem'; // Para que la card tenga un ancho fijo
      
      const urlBandera = banderas[inscripcion.idioma] || 'http://placehold.co/640x360?text=Bandera+No+Encontrada';

      card.innerHTML = `
          <img src="${urlBandera}" class="card-img-top" alt="Bandera de ${inscripcion.idioma}">
          <div class="card-body">
              <h5 class="card-title">Idioma: ${inscripcion.idioma}</h5>
              <p class="card-text">Nivel: ${inscripcion.nivel}</p>
              <p class="card-text">Modalidad: ${inscripcion.modalidad}</p>
              <p class="card-text">Horario: ${inscripcion.horario}</p>
              <button class="btn btn-warning" onclick="editarInscripcion(${index})">Editar</button>
              <button class="btn btn-danger" onclick="eliminarInscripcion(${index})">Eliminar</button>
          </div>
      `;

      misInscripcionesDiv.appendChild(card);
  });
}

// Función para editar la inscripción (prepara el localStorage y redirige)
function editarInscripcion(index) {
  const inscripciones = JSON.parse(localStorage.getItem('inscripciones')) || [];
  const inscripcionAEditar = inscripciones[index]; // <-- Nombre de variable consistente

  if (inscripcionAEditar) {
      // Guardar la inscripción y su índice en localStorage para que main.js los lea
      localStorage.setItem('inscripcionEnEdicion', JSON.stringify(inscripcionAEditar));
      localStorage.setItem('indiceInscripcionEnEdicion', index);

      // Redirigir a la página del formulario (index.html)
      window.location.href = 'index.html#formulario'; // No necesitas #formulario si el script de main.js ya maneja el DOMContentLoaded
  } else {
      console.error("Error: No se encontró la inscripción para editar en el índice:", index);
      alert("Lo sentimos, no se pudo cargar la información para editar.");
  }
}

// Función para eliminar la inscripción
function eliminarInscripcion(index) {
  // Pedir confirmación al usuario antes de eliminar
  if (confirm("¿Estás seguro de que quieres eliminar esta inscripción?")) {
      const inscripciones = JSON.parse(localStorage.getItem('inscripciones')) || [];
      inscripciones.splice(index, 1); // Elimina 1 elemento en la posición 'index'
      localStorage.setItem('inscripciones', JSON.stringify(inscripciones)); // Guarda el array actualizado

      mostrarInscripciones(); // Vuelve a renderizar las cards
  }
}

// Al cargar la página de inscripciones, mostrar todas las cards
window.onload = mostrarInscripciones;