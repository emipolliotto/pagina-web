let inscripciones = []

// Objeto que mapea idiomas a URLs de banderas
const banderas = {
  'Ingles': 'https://flagcdn.com/w640/gb.png', // Reino Unido para Inglés
  'Aleman': 'https://flagcdn.com/w640/de.png', // Alemania
  'Italiano': 'https://flagcdn.com/w640/it.png', // Italia
  'Frances': 'https://flagcdn.com/w640/fr.png', // Francia
  'Chino': 'https://flagcdn.com/w640/cn.png', // China
  'Japones': 'https://flagcdn.com/w640/jp.png', // Japón
  'Portugues': 'https://flagcdn.com/w640/pt.png' // Portugal
  // Agrega más idiomas y sus URLs de bandera según necesites
};

// Obtener el contenedor de las inscripciones
const misInscripcionesDiv = document.getElementById('mis-inscripciones');

// Función para mostrar las inscripciones en la página
function mostrarInscripciones() {
  const inscripciones = JSON.parse(localStorage.getItem('inscripciones')) || [];
  misInscripcionesDiv.innerHTML = ''; // Limpiar cualquier contenido previo

  inscripciones.forEach((inscripcion, index) => {
    // Crear la card de la inscripción
    const card = document.createElement('div');
    card.classList.add('card');
    card.classList.add('mb-3');
    const urlBandera = banderas[inscripcion.idioma] || 'http://placehold.co/640x360?text=Bandera+No+Encontrada';
    card.innerHTML = `

      <div class="card-idioma" style="width: 23rem;">
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

    // Agregar la card al contenedor de inscripciones
    misInscripcionesDiv.appendChild(card);
    // inscripciones.push(card)
  });
}




// Función para editar la inscripción
function editarInscripcion(index) {
  const inscripciones = JSON.parse(localStorage.getItem('inscripciones')) || [];
  const inscripcion = inscripciones[index];

  // 1. Guardar la inscripción que se va a editar en localStorage con una clave temporal
  localStorage.setItem('inscripcion', JSON.stringify(inscripcionAEditar));
  localStorage.setItem('indiceInscripcionEnEdicion', index); // También guarda el índice para saber cuál actualizar

  // 2. Redirigir a la página del formulario
  window.location.href = 'index.html#formulario';

  // Rellenar el formulario con los datos actuales de la inscripción
  const formulario = document.getElementById('formulario');
  formulario.nombre.value = inscripcion.nombre;
  formulario.apellido.value = inscripcion.apellido;
  formulario.telefono.value = inscripcion.telefono;
  formulario.email.value = inscripcion.email;
  formulario.modalidad.value = inscripcion.modalidad;
  formulario.horario.value = inscripcion.horario;

  // Eliminar la inscripción antigua
  inscripciones.splice(index, 1);
  localStorage.setItem('inscripciones', JSON.stringify(inscripciones));

}

// Función para eliminar la inscripción
function eliminarInscripcion(index) {
  const inscripciones = JSON.parse(localStorage.getItem('inscripciones')) || [];
  inscripciones.splice(index, 1);
  localStorage.setItem('inscripciones', JSON.stringify(inscripciones));

  // Volver a cargar las inscripciones
  mostrarInscripciones();
}

// Al cargar la página, mostrar las inscripciones guardadas
window.onload = mostrarInscripciones;
