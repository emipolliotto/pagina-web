document.querySelector('.btn-warning').addEventListener('click', function(event) {
    event.preventDefault();  // Previene el comportamiento por defecto del enlace
    const target = document.querySelector('#miPlanner');  // Selecciona la sección destino
    target.scrollIntoView({
        behavior: 'smooth',  // Desplazamiento suave
        block: 'start'  // Asegura que el bloque esté al inicio
    });
});