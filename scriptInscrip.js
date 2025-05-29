let inscripciones = [];


// window.addEventListener('DOMContentLoaded', () => {
//     const infoJSON = localStorage.getItem('infoCurso');
//     if (!infoJSON) return;

//     const info = JSON.parse(infoJSON);

//     // Mostrar idioma y nivel
//     const aca = document.getElementById('aca')
//     const titulo = document.createElement('h3');
//     titulo.textContent = `Inscripción a ${info.idioma} - ${info.nivel}`;
//     aca.append(titulo); // o insertalo donde prefieras

//     // Modalidad
//     const modalidadSelect = document.getElementById('modalidad');
//     info.modalidades.forEach(m => {
//       const option = document.createElement('option');
//       option.value = m;
//       option.textContent = m;
//       modalidadSelect.appendChild(option);
//     });

//     // Horario
//     const horarioSelect = document.getElementById('horario');
//     info.horarios.forEach(h => {
//       const option = document.createElement('option');
//       option.value = h;
//       option.textContent = h;
//       horarioSelect.appendChild(option);
//     });
//   });