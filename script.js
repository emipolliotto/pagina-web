  // Idiomas y niveles que querés mostrar
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


// Obtener los elementos
const formulario = document.getElementById('formulario');
const formularioDiv = document.getElementById('formulario-inscripcion');
const formInscripcion = document.getElementById('formInscripcion')

// --- NUEVO CÓDIGO PARA MANEJAR LA EDICIÓN ---
document.addEventListener('DOMContentLoaded', () => {
  const inscripcionEnEdicion = JSON.parse(localStorage.getItem('inscripcionEnEdicion'));
  const indiceEnEdicion = localStorage.getItem('indiceInscripcionEnEdicion');

  if (inscripcionEnEdicion && indiceEnEdicion !== null) {
      // Rellenar el formulario con los datos de la inscripción en edición
      document.getElementById('nombre').value = inscripcionEnEdicion.nombre;
      document.getElementById('apellido').value = inscripcionEnEdicion.apellido;
      document.getElementById('telefono').value = inscripcionEnEdicion.telefono;
      document.getElementById('email').value = inscripcionEnEdicion.email;
      document.getElementById('idioma').value = inscripcionEnEdicion.idioma;
      document.getElementById('nivel').value = inscripcionEnEdicion.nivel;
      document.getElementById('modalidad').value = inscripcionEnEdicion.modalidad;
      document.getElementById('horario').value = inscripcionEnEdicion.horario;

      // Cambiar el texto del botón si estás en modo edición (opcional, pero buena UX)
      document.getElementById('enviar').textContent = 'Guardar Cambios';

      // Limpiar los elementos temporales de localStorage para evitar recargas automáticas en edición
      localStorage.removeItem('inscripcionEnEdicion');
      localStorage.removeItem('indiceInscripcionEnEdicion');
  }
});

document.getElementById('enviar').addEventListener('click',function(){
  // const infoCursoGuardado = JSON.parse(localStorage.getItem('infoCurso'));

  let inscripcion = {
    nombre : document.getElementById('nombre').value,
    apellido : document.getElementById('apellido').value,
    telefono : document.getElementById('telefono').value,
    email : document.getElementById('email').value,
    idioma : document.getElementById('idioma').value,
    nivel : document.getElementById('nivel').value,
    modalidad : document.getElementById('modalidad').value,
    horario : document.getElementById('horario').value,
  }

  // Recuperar las inscripciones guardadas y añadir la nueva
  const inscripciones = JSON.parse(localStorage.getItem('inscripciones')) || [];
  inscripciones.push(inscripcion);
  localStorage.setItem('inscripciones', JSON.stringify(inscripciones));
  // Ahora verificamos si estamos en modo edición o creando una nueva
  const indiceParaActualizar = localStorage.getItem('indiceInscripcionEnEdicion'); // Volvemos a leerlo por si acaso

  if (indiceParaActualizar !== null && indiceParaActualizar !== undefined) {
      // Modo edición: actualizamos la inscripción existente
      inscripciones[parseInt(indiceParaActualizar)] = inscripcionActual;
      localStorage.removeItem('indiceInscripcionEnEdicion'); // Limpiar el índice de edición después de usarlo
      document.getElementById('enviar').textContent = 'Enviar Inscripción'; // Volver el texto original
  } else {
      // Modo nueva inscripción: agregamos una nueva
      inscripciones.push(inscripcionActual);
  }

  localStorage.setItem('inscripciones', JSON.stringify(inscripciones));

  // Redirigir a la página de inscripciones después de guardar
  window.location.href = 'inscripcion.html';

  // Limpiar el formulario DESPUÉS de guardar y redirigir
  // Aunque la redirección ya lo "limpiará" al cargar la nueva página,
  // es buena práctica si el usuario no redirigiera inmediatamente.
  document.getElementById('nombre').value = '';
  document.getElementById('apellido').value = '';
  document.getElementById('telefono').value = '';
  document.getElementById('email').value = '';
  document.getElementById('idioma').selectedIndex = 0;
  document.getElementById('nivel').selectedIndex = 0;
  document.getElementById('modalidad').selectedIndex = 0;
  document.getElementById('horario').selectedIndex = 0;

  // alert("Inscripción realizada con éxito ✨");
});
