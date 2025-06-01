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
    ]
  };

  const verMasBtns = document.querySelectorAll('.ver-mas');
  const idiomasSection = document.getElementById('idiomas');
  const detalleSection = document.getElementById('detalle-idioma');
  const nivelesContainer = document.getElementById('niveles-container');
  const tituloIdioma = document.getElementById('titulo-idioma');
  const volverBtn = document.getElementById('volver');
  const heroSection = document.querySelector('.hero-cursos'); // agregá esta línea arriba con los otros selects


  verMasBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const idioma = btn.dataset.idioma;
      mostrarDetalle(idioma);
    });
  });

  volverBtn.addEventListener('click', () => {
    detalleSection.classList.add('d-none');
    idiomasSection.classList.remove('d-none');
    heroSection.classList.remove('d-none');
  });

  function mostrarDetalle(idioma) {
    // Cambiamos títulos
    tituloIdioma.textContent = `Niveles de ${idioma.charAt(0).toUpperCase() + idioma.slice(1)}`;

    // Limpiamos contenedor y ocultamos herosection
    nivelesContainer.innerHTML = "";
    heroSection.classList.add('d-none');


    // Agregamos las cards de niveles
    nivelesPorIdioma[idioma].forEach(nivel => {
      const col = document.createElement('div');
      col.className = 'col-md-3 mb-4';
      col.innerHTML = `
        <div class="card h-100 shadow-sm">
          <div class="card-body">
            <h5 class="card-title">${nivel.nombre}</h5>
            <p class="card-text">Contenido del ${nivel.nombre}. Aprendé con material exclusivo.</p>
            <button class="btn btn-outline-primary inscribirme-btn"
                  data-idioma="${idioma}"
                  data-nivel="${nivel.nombre}"
                  data-modalidades='${JSON.stringify(nivel.modalidades)}'
                  data-horarios='${JSON.stringify(nivel.horarios)}'>
                Inscribirme
          </div>
        </div>
      `;
      nivelesContainer.appendChild(col);
    });

    // Esperamos a que se rendericen los botones y les agregamos funcionalidad
    setTimeout(() => {
        const botones = document.querySelectorAll('.inscribirme-btn');
        botones.forEach(btn => {
          btn.addEventListener('click', () => {
            const idioma = btn.dataset.idioma;
            const nivel = btn.dataset.nivel;
            const modalidades = JSON.parse(btn.dataset.modalidades);
            const horarios = JSON.parse(btn.dataset.horarios);
            const formularioDiv = document.getElementById('formulario-inscripcion');
            const tituloInscripcion = document.getElementById('titulo-inscripcion');
            const formulario = document.getElementById('formulario');
            const modalidadSelect = document.getElementById('modalidad');
            const horarioSelect = document.getElementById('horario');
            document.getElementById('detalle-idioma').classList.add('d-none');
            

            const infoCurso = {
            idioma,
            nivel,
            modalidades,
            horarios
            };

            localStorage.setItem('infoCurso', JSON.stringify(infoCurso));

            // formulario
            tituloInscripcion.textContent = `Inscripción a ${idioma} - Nivel ${nivel}`;

            // Limpiar y rellenar selects
            modalidadSelect.innerHTML = '';
            modalidades.forEach(m => {
              const option = document.createElement('option');
              option.value = m;
              option.textContent = m;
              modalidadSelect.appendChild(option);
            });
  
            horarioSelect.innerHTML = '';
            horarios.forEach(h => {
              const option = document.createElement('option');
              option.value = h;
              option.textContent = h;
              horarioSelect.appendChild(option);
            });

            // mostrar formulario
            formularioDiv.classList.remove('d-none');        
            
            
           });
  }, 50);

    // Cambiamos la vista
    idiomasSection.classList.add('d-none');
    detalleSection.classList.remove('d-none');
})
} 



// Obtener los elementos
const formulario = document.getElementById('formulario');
const formularioDiv = document.getElementById('formulario-inscripcion');

document.getElementById('enviar').addEventListener('click',function(){

  let inscripcion = {
    nombre : document.getElementById('nombre').value,
    apellido : document.getElementById('apellido').value,
    telefono : document.getElementById('telefono').value,
    email : document.getElementById('email').value,
    idioma : formulario.dataset.idioma,
    nivel : formulario.dataset.nivel,
    modalidad : document.getElementById('modalidad').value,
    horario : document.getElementById('horario').value,
  }

  // Recuperar las inscripciones guardadas y añadir la nueva
  const inscripciones = JSON.parse(localStorage.getItem('inscripciones')) || [];
  inscripciones.push(inscripcion);
  localStorage.setItem('inscripciones', JSON.stringify(inscripciones));

  alert("Inscripción realizada con éxito ✨");

  // Reiniciar y ocultar formulario
  formulario.reset();
  formularioDiv.classList.add('d-none');
})