// scripts.js

// Variables globales para el carrusel
let currentSlide = 0;

// Función para mover el carrusel
function moveCarousel(direction) {
    const carousel = document.querySelector('.carousel-container');
    const slides = document.querySelectorAll('.carousel img');
    const totalSlides = slides.length;
    currentSlide = (currentSlide + direction + totalSlides) % totalSlides;
    const offset = -currentSlide * 100;
    carousel.style.transform = `translateX(${offset}%)`;
}

// Validación del formulario de publicación
document.getElementById('form-publicacion').addEventListener('submit', function(event) {
    event.preventDefault(); // Evitar el envío del formulario

    // Obtener los valores de los campos del formulario
    const titulo = document.getElementById('titulo').value;
    const artista = document.getElementById('artista').value;
    const descripcion = document.getElementById('descripcion').value;
    const imagen = document.getElementById('imagen').files[0];

    // Validar los campos
    if (!titulo || !artista || !descripcion || !imagen) {
        alert('Por favor, complete todos los campos.');
        return;
    }

    // Validación de reglas de negocio (ejemplo)
    if (titulo.length < 3) {
        alert('El título debe tener al menos 3 caracteres.');
        return;
    }

    if (descripcion.length < 10) {
        alert('La descripción debe tener al menos 10 caracteres.');
        return;
    }

    // Si la validación es exitosa, proceder con el envío del formulario (ejemplo)
    alert('Obra publicada exitosamente.');
    // Aquí puedes agregar el código para enviar el formulario a un servidor
});

document.getElementById('form-publicacion').addEventListener('submit', function(event) {
  event.preventDefault();
  alert('Obra publicada exitosamente.');
});
