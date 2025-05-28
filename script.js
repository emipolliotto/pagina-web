
// CAMBIO DE SECCIONES
const links = document.querySelectorAll('[data-section]');
  const secciones = document.querySelectorAll('.seccion');

  links.forEach(link => {
    link.addEventListener('click', e => {
      e.preventDefault();
      const target = link.getAttribute('data-section');

      secciones.forEach(sec => sec.classList.add('d-none'));
      document.getElementById(target).classList.remove('d-none');
    });
  });


// DETALLES INGLES
document.getElementById('ver-mas1').addEventListener('click',mostrarDetalle1)
document.getElementById('volver1').addEventListener('click',volver1)

  function mostrarDetalle1() {
    document.getElementById('cursos').classList.add('d-none');
    document.getElementById('cardDetalle1').classList.remove('d-none');
    document.getElementById('cardDetalle1').style.display='inline'
  }

  function volver1() {
    document.getElementById('cardDetalle1').classList.add('d-none');
    document.getElementById('cursos').classList.remove('d-none');
  }


// DETALLES ALEMAN
document.getElementById('ver-mas2').addEventListener('click',mostrarDetalle2)
document.getElementById('volver2').addEventListener('click',volver2)
  
    function mostrarDetalle2() {
      document.getElementById('cursos').classList.add('d-none');
      document.getElementById('cardDetalle2').classList.remove('d-none');
      document.getElementById('cardDetalle2').style.display='inline'
    }
  
    function volver2() {
      document.getElementById('cardDetalle2').classList.add('d-none');
      document.getElementById('cursos').classList.remove('d-none');
    }


// DETALLES FRANCES
document.getElementById('ver-mas3').addEventListener('click',mostrarDetalle3)
document.getElementById('volver3').addEventListener('click',volver3)
    
      function mostrarDetalle3() {
        document.getElementById('cursos').classList.add('d-none');
        document.getElementById('cardDetalle3').classList.remove('d-none');
        document.getElementById('cardDetalle3').style.display='inline'
      }
    
      function volver3() {
        document.getElementById('cardDetalle3').classList.add('d-none');
        document.getElementById('cursos').classList.remove('d-none');
      }


// DETALLES ITALIANO
document.getElementById('ver-mas4').addEventListener('click',mostrarDetalle4)
document.getElementById('volver4').addEventListener('click',volver4)
      
        function mostrarDetalle4() {
          document.getElementById('cursos').classList.add('d-none');
          document.getElementById('cardDetalle4').classList.remove('d-none');
          document.getElementById('cardDetalle4').style.display='inline'
        }
      
        function volver4() {
          document.getElementById('cardDetalle4').classList.add('d-none');
          document.getElementById('cursos').classList.remove('d-none');
        }
