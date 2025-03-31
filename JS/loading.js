// Esperar a que termine la animación del texto antes de aplicar el cambio
setTimeout(function() {
    document.body.classList.add("loaded"); // Añadir la clase .loaded para activar la animación
  
    // Redirigir a un archivo dentro del servidor después de que termine el loading
    setTimeout(function() {
      window.location.href = "./blog.html"; // Ajusta esta ruta con el archivo dentro del servidor
    }, 1000); // Un segundo después de que termine la animación
  }, 4000); // Tiempo igual al de la animación del loading (4 segundos)