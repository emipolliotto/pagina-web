
// Objeto con la estructura de idiomas, niveles, modalidades y horarios
const nivelesPorIdioma = {
  ingles: [
      {
          nombre: "A1",
          modalidades: ["Virtual", "Presencial"],
          horarios: ["Lunes y Miercoles 18:00", "Miercoles y Viernes 10:00"]
      },
      {
          nombre: "A2",
          modalidades: ["Virtual", "Presencial"],
          horarios: ["Martes y Jueves 17:00", "Lunes y Miercoles 12:00"]
      },
      {
          nombre: "B1",
          modalidades: ["Virtual"],
          horarios: ["Martes de 17:00 a 19:00", "Jueves de 10:00 a 12:00"]
      },
      {
          nombre: "B2",
          modalidades: ["Virtual", 'Presencial'],
          horarios: ["Martes y Viernes 19:00", "Jueves y Viernes 11:00"]
      }
  ],
  aleman: [
      {
          nombre: "A1",
          modalidades: ["Presencial"],
          horarios: ["Lunes y Jueves 9:00", "Miércoles y Viernes 13:00"]
      },
      {
          nombre: "A2",
          modalidades: ["Virtual"],
          horarios: ["Martes y Jueves 16:00", "Sábado 10:00"]
      },
      {
          nombre: "B1",
          modalidades: ["Presencial"],
          horarios: ["Miércoles y Viernes 18:30", "Lunes 11:00"]
      },
      {
          nombre: "B2",
          modalidades: ["Virtual", "Presencial"],
          horarios: ["Martes y Jueves 19:00", "Viernes 14:00"]
      }
  ],
  frances: [
      {
          nombre: "A1",
          modalidades: ["Virtual"],
          horarios: ["Martes y Jueves 8:00", "Sábado 10:30"]
      },
      {
          nombre: "A2",
          modalidades: ["Presencial"],
          horarios: ["Lunes y Miércoles 15:00", "Viernes 10:00"]
      },
      {
          nombre: "B1",
          modalidades: ["Virtual", "Presencial"],
          horarios: ["Martes 18:00", "Jueves 12:00"]
      },
      {
          nombre: "B2",
          modalidades: ["Virtual"],
          horarios: ["Lunes y Miércoles 20:00", "Sábado 11:30"]
      }
  ],
  italiano: [
      {
          nombre: "A1",
          modalidades: ["Presencial"],
          horarios: ["Martes y Jueves 10:00", "Viernes 9:30"]
      },
      {
          nombre: "A2",
          modalidades: ["Virtual", "Presencial"],
          horarios: ["Lunes y Miércoles 16:00", "Martes y Jueves 14:00"]
      },
      {
          nombre: "B1",
          modalidades: ["Virtual"],
          horarios: ["Miércoles 17:00", "Viernes 12:00"]
      },
      {
          nombre: "B2",
          modalidades: ["Virtual", "Presencial"],
          horarios: ["Martes y Viernes 18:00", "Sábado 9:00"]
      }
  ],
  portugues: [
      {
          nombre: "A1",
          modalidades: ["Virtual", "Presencial"],
          horarios: ["Lunes y Miercoles 18:00", "Miercoles y Viernes 10:00"]
      },
      {
          nombre: "A2",
          modalidades: ["Virtual", "Presencial"],
          horarios: ["Martes y Jueves 17:00", "Lunes y Miercoles 12:00"]
      },
      {
          nombre: "B1",
          modalidades: ["Virtual"],
          horarios: ["Martes de 17:00 a 19:00", "Jueves de 10:00 a 12:00"]
      },
      {
          nombre: "B2",
          modalidades: ["Virtual", 'Presencial'],
          horarios: ["Martes y Viernes 19:00", "Jueves y Viernes 11:00"]
      }
  ],
  japones: [
      {
          nombre: "A1",
          modalidades: ["Virtual", "Presencial"],
          horarios: ["Lunes y Miercoles 18:00", "Miercoles y Viernes 10:00"]
      },
      {
          nombre: "A2",
          modalidades: ["Virtual", "Presencial"],
          horarios: ["Martes y Jueves 17:00", "Lunes y Miercoles 12:00"]
      },
      {
          nombre: "B1",
          modalidades: ["Virtual"],
          horarios: ["Martes de 17:00 a 19:00", "Jueves de 10:00 a 12:00"]
      },
      {
          nombre: "B2",
          modalidades: ["Virtual", 'Presencial'],
          horarios: ["Martes y Viernes 19:00", "Jueves y Viernes 11:00"]
      }
  ],
  chino: [
      {
          nombre: "A1",
          modalidades: ["Virtual", "Presencial"],
          horarios: ["Lunes y Miercoles 18:00", "Miercoles y Viernes 10:00"]
      },
      {
          nombre: "A2",
          modalidades: ["Virtual", "Presencial"],
          horarios: ["Martes y Jueves 17:00", "Lunes y Miercoles 12:00"]
      },
      {
          nombre: "B1",
          modalidades: ["Virtual"],
          horarios: ["Martes de 17:00 a 19:00", "Jueves de 10:00 a 12:00"]
      },
      {
          nombre: "B2",
          modalidades: ["Virtual", 'Presencial'],
          horarios: ["Martes y Viernes 19:00", "Jueves y Viernes 11:00"]
      }
  ]
};

// Obtener referencias a los elementos del formulario
const idiomaSelect = document.getElementById('idioma');
const nivelSelect = document.getElementById('nivel');
const modalidadSelect = document.getElementById('modalidad');
const horarioSelect = document.getElementById('horario');
const enviarButton = document.getElementById('enviar'); // El botón de enviar/guardar
const formInscripcion = document.getElementById('formInscripcion'); // El elemento <form>
const tituloFormulario = document.getElementById('titulo-formulario'); // Asumiendo que tienes un h2 o h1 con este id para cambiar el título

// Función para actualizar los niveles basado en el idioma seleccionado
function actualizarNiveles() {
  const idiomaSeleccionado = idiomaSelect.value.toLowerCase();
  const niveles = nivelesPorIdioma[idiomaSeleccionado] || [];

  nivelSelect.innerHTML = '<option value="">Seleccione un nivel</option>'; // Limpiar y añadir opción por defecto
  modalidadSelect.innerHTML = '<option value="">Seleccione una modalidad</option>';
  horarioSelect.innerHTML = '<option value="">Seleccione un horario</option>';

  nivelSelect.disabled = true;
  modalidadSelect.disabled = true;
  horarioSelect.disabled = true;

  if (niveles.length > 0) {
      niveles.forEach(nivel => {
          const option = document.createElement('option');
          option.value = nivel.nombre;
          option.textContent = nivel.nombre;
          nivelSelect.appendChild(option);
      });
      nivelSelect.disabled = false;
  }
}

// Función para actualizar las modalidades basado en el nivel seleccionado
function actualizarModalidades() {
  const idiomaSeleccionado = idiomaSelect.value.toLowerCase();
  const nivelSeleccionado = nivelSelect.value;
  const niveles = nivelesPorIdioma[idiomaSeleccionado] || [];
  const nivelEncontrado = niveles.find(n => n.nombre === nivelSeleccionado);

  modalidadSelect.innerHTML = '<option value="">Seleccione una modalidad</option>';
  horarioSelect.innerHTML = '<option value="">Seleccione un horario</option>';

  modalidadSelect.disabled = true;
  horarioSelect.disabled = true;

  if (nivelEncontrado && nivelEncontrado.modalidades.length > 0) {
      nivelEncontrado.modalidades.forEach(modalidad => {
          const option = document.createElement('option');
          option.value = modalidad;
          option.textContent = modalidad;
          modalidadSelect.appendChild(option);
      });
      modalidadSelect.disabled = false;
  }
}

// Función para actualizar los horarios basado en la modalidad y nivel seleccionados
function actualizarHorarios() {
  const idiomaSeleccionado = idiomaSelect.value.toLowerCase();
  const nivelSeleccionado = nivelSelect.value;
  const modalidadSeleccionada = modalidadSelect.value;

  const niveles = nivelesPorIdioma[idiomaSeleccionado] || [];
  const nivelEncontrado = niveles.find(n => n.nombre === nivelSeleccionado);

  horarioSelect.innerHTML = '<option value="">Seleccione un horario</option>';
  horarioSelect.disabled = true;

  if (nivelEncontrado && nivelEncontrado.modalidades.includes(modalidadSeleccionada)) {
      // Asume que los horarios son globales para el nivel, o tendrías que anidarlos más
      nivelEncontrado.horarios.forEach(horario => {
          const option = document.createElement('option');
          option.value = horario;
          option.textContent = horario;
          horarioSelect.appendChild(option);
      });
      horarioSelect.disabled = false;
  }
}

// Escuchadores de eventos para los selects
idiomaSelect.addEventListener('change', actualizarNiveles);
nivelSelect.addEventListener('change', actualizarModalidades);
modalidadSelect.addEventListener('change', actualizarHorarios);


// --- LÓGICA DE CARGA Y EDICIÓN DEL FORMULARIO ---
document.addEventListener('DOMContentLoaded', () => {
  // Recuperar la inscripción y el índice de edición de localStorage
  const inscripcionEnEdicion = JSON.parse(localStorage.getItem('inscripcionEnEdicion'));
  const indiceEnEdicion = localStorage.getItem('indiceInscripcionEnEdicion');

  if (inscripcionEnEdicion && indiceEnEdicion !== null) {
      // Modo Edición: Rellenar el formulario
      document.getElementById('nombre').value = inscripcionEnEdicion.nombre;
      document.getElementById('apellido').value = inscripcionEnEdicion.apellido;
      document.getElementById('telefono').value = inscripcionEnEdicion.telefono;
      document.getElementById('email').value = inscripcionEnEdicion.email;

      // Para los selects, primero rellenar los datos de cascada
      idiomaSelect.value = inscripcionEnEdicion.idioma;
      actualizarNiveles(); // Llama a la función para cargar los niveles del idioma seleccionado
      nivelSelect.value = inscripcionEnEdicion.nivel;
      actualizarModalidades(); // Carga las modalidades del nivel seleccionado
      modalidadSelect.value = inscripcionEnEdicion.modalidad;
      actualizarHorarios(); // Carga los horarios de la modalidad y nivel seleccionados
      horarioSelect.value = inscripcionEnEdicion.horario;

      // Cambiar el texto del botón y el título del formulario
      enviarButton.textContent = 'Guardar Cambios';
      if(tituloFormulario) tituloFormulario.textContent = 'Editar Inscripción';

  } else {
      // Modo Nueva Inscripción: Limpiar el formulario y resetear estados
      formInscripcion.reset(); // Limpia todos los inputs
      idiomaSelect.selectedIndex = 0; // Asegura que el select de idioma esté en la primera opción
      actualizarNiveles(); // Esto limpiará y deshabilitará los selects dependientes
      
      // Resetear el texto del botón y el título
      enviarButton.textContent = 'Enviar Inscripción';
      if(tituloFormulario) tituloFormulario.textContent = 'Formulario de Inscripción';
  }
});


// --- LÓGICA DEL BOTÓN ENVIAR/GUARDAR CAMBIOS ---
enviarButton.addEventListener('click', function(event) {
  event.preventDefault(); // Evita que el formulario se envíe y recargue la página.

  // 1. VALIDACIÓN
  const nombreInput = document.getElementById('nombre');
  const apellidoInput = document.getElementById('apellido');
  const telefonoInput = document.getElementById('telefono');
  const emailInput = document.getElementById('email');

  if (!nombreInput.value || !apellidoInput.value || !emailInput.value ||
      !idiomaSelect.value || !nivelSelect.value || !modalidadSelect.value || !horarioSelect.value) {
      alert("Por favor, complete todos los campos obligatorios.");
      // Opcional: Resaltar campos vacíos con un borde rojo
      [nombreInput, apellidoInput, emailInput, idiomaSelect, nivelSelect, modalidadSelect, horarioSelect].forEach(input => {
          if (!input.value) {
              input.style.borderColor = 'red';
          } else {
              input.style.borderColor = ''; // Restablecer a normal
          }
      });
      return;
  } else {
      // Limpiar bordes rojos si todo está bien
      [nombreInput, apellidoInput, emailInput, idiomaSelect, nivelSelect, modalidadSelect, horarioSelect].forEach(input => {
          input.style.borderColor = '';
      });
  }

  // 2. CREAR EL OBJETO DE INSCRIPCIÓN CON LOS DATOS ACTUALES DEL FORMULARIO
  let inscripcionActual = {
      nombre: nombreInput.value,
      apellido: apellidoInput.value,
      telefono: telefonoInput.value,
      email: emailInput.value,
      idioma: idiomaSelect.value,
      nivel: nivelSelect.value,
      modalidad: modalidadSelect.value,
      horario: horarioSelect.value,
  };

  // 3. RECUPERAR TODAS LAS INSCRIPCIONES GUARDADAS
  let inscripciones = JSON.parse(localStorage.getItem('inscripciones')) || [];

  // 4. DETERMINAR MODO: EDICIÓN O NUEVA INSCRIPCIÓN
  const indiceEnEdicion = localStorage.getItem('indiceInscripcionEnEdicion');

  if (indiceEnEdicion !== null) { // Si hay un índice, estamos editando
      // MODO EDICIÓN: ACTUALIZAR LA INSCRIPCIÓN EXISTENTE
      inscripciones[parseInt(indiceEnEdicion)] = inscripcionActual; // Reemplazar la inscripción antigua
      
      // Limpiar las claves temporales de edición DESPUÉS de usar el índice
      localStorage.removeItem('inscripcionEnEdicion');
      localStorage.removeItem('indiceInscripcionEnEdicion');
      
      alert("¡Inscripción actualizada con éxito! ✨");
  } else {
      // MODO NUEVA INSCRIPCIÓN: AGREGAR LA NUEVA INSCRIPCIÓN
      inscripciones.push(inscripcionActual);
      alert("¡Inscripción realizada con éxito! ✨");
  }

  // 5. GUARDAR EL ARRAY COMPLETO DE INSCRIPCIONES EN LOCALSTORAGE
  localStorage.setItem('inscripciones', JSON.stringify(inscripciones));

  // 6. LIMPIAR EL FORMULARIO Y REDIRIGIR A LA PÁGINA DE INSCRIPCIONES
  formInscripcion.reset();
  idiomaSelect.selectedIndex = 0; // Restablecer el select de idioma
  actualizarNiveles(); // Esto limpia y deshabilita los selects dependientes
  enviarButton.textContent = 'Enviar Inscripción'; // Volver al texto original del botón
  if(tituloFormulario) tituloFormulario.textContent = 'Formulario de Inscripción'; // Volver al título original

  window.location.href = 'inscripcion.html'; // Redirigir a la página de cards
});


