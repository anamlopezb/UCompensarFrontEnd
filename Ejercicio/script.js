// Escucha el evento 'click' en el botón de cambiar color
document.getElementById('cambiarColorBtn').addEventListener('click', function() {
    // Alterna entre agregar o quitar las clases de color de fondo
    document.body.classList.toggle('bg-blue');
    document.body.classList.toggle('bg-green');
  });
  