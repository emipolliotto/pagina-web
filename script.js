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

