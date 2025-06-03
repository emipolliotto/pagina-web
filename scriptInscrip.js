let inscripciones = []

// Obtener el contenedor de las inscripciones
const misInscripcionesDiv = document.getElementById('mis-inscripciones');
const aca = document.getElementById('aca')

// Función para mostrar las inscripciones en la página
function mostrarInscripciones() {
  const inscripciones = JSON.parse(localStorage.getItem('inscripciones')) || [];
  misInscripcionesDiv.innerHTML = ''; // Limpiar cualquier contenido previo
  let texto = document.createElement('h2')
  texto.textContent = 'Mis Inscripciones'
  aca.appendChild(texto)

  inscripciones.forEach((inscripcion, index) => {
    // Crear la card de la inscripción
    const card = document.createElement('div');
    card.classList.add('card');
    card.classList.add('mb-3');
    card.innerHTML = `
      <div class="card-body">
        <h5 class="card-title">${inscripcion.nombre} ${inscripcion.apellido}</h5>
        <p class="card-text">Email: ${inscripcion.email}</p>
        <p class="card-text">Teléfono: ${inscripcion.telefono}</p>
        <p class="card-text">Idioma: ${inscripcion.idioma}</p>
        <p class="card-text">Nivel: ${inscripcion.nivel}</p>
        <p class="card-text">Modalidad: ${inscripcion.modalidad}</p>
        <p class="card-text">Horario: ${inscripcion.horario}</p>
        <button class="btn btn-warning" onclick="editarInscripcion(${index})">Editar</button>
        <button class="btn btn-danger" onclick="eliminarInscripcion(${index})">Eliminar</button>
      </div>
    `;

    // Agregar la card al contenedor de inscripciones
    misInscripcionesDiv.appendChild(card);
  });
}

// Función para editar la inscripción
function editarInscripcion(index) {
  const inscripciones = JSON.parse(localStorage.getItem('inscripciones')) || [];
  const inscripcion = inscripciones[index];

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

  // Mostrar el formulario y ocultar la lista de inscripciones
  const formularioDiv = document.getElementById('formulario-inscripcion');
  formularioDiv.classList.remove('d-none');
  misInscripcionesDiv.classList.add('d-none');
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
