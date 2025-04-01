function toggleMenu() {
    let menu = document.querySelector(".nav__responsive-ul");
    menu.style.display = (menu.style.display === "block") ? "none" : "block";
}



// Espera a que el contenido del DOM se haya cargado completamente antes de ejecutar el código.
document.addEventListener('DOMContentLoaded', () => {
  // Define un objeto con sugerencias y sus URLs correspondientes.
  // La clave es el texto de la sugerencia y el valor es la URL a la que se redirige.
  const suggestions = {
      'Inyección con Sqlmap': './Articles/Sqlmap.html', // URL para la sugerencia 'Inyección con Sqlmap'
      'Análisis con Bettercap': './Articles/Bettercap.html', // URL para la sugerencia 'Análisis con Bettercap'
      'Análisis con dirsearch': './Articles/dirsearch.html', // URL para la sugerencia 'Análisis con dirsearch'
      'Herramientas para escaneo de vulnerabilidades': './Articles/pentesting.html', // URL para la sugerencia 'Herramientas para escaneo de vulnerabilidades'
  };

  // Obtiene el elemento de la barra de búsqueda del DOM por su ID.
  const searchBar = document.getElementById('search-bar');
  
  // Obtiene el elemento de la lista de sugerencias del DOM por su ID.
  const suggestionsList = document.getElementById('suggestions');

  // Añade un listener de evento para detectar cambios en el campo de búsqueda.
  searchBar.addEventListener('input', function() {
      // Obtiene el valor actual del campo de búsqueda y lo convierte a minúsculas.
      const query = searchBar.value.toLowerCase();
      
      // Limpia la lista de sugerencias anterior para mostrar las nuevas sugerencias.
      suggestionsList.innerHTML = '';

      // Verifica si el campo de búsqueda no está vacío.
      if (query) {
          // Filtra las sugerencias basadas en si el texto de la sugerencia incluye la consulta.
          const filteredSuggestions = Object.keys(suggestions).filter(item => item.toLowerCase().includes(query));

          // Verifica si hay sugerencias filtradas.
          if (filteredSuggestions.length > 0) {
              // Muestra la lista de sugerencias.
              suggestionsList.style.display = 'block';

              // Recorre cada sugerencia filtrada y crea un elemento de lista para cada una.
              filteredSuggestions.forEach(suggestion => {
                  // Crea un nuevo elemento de lista.
                  const listItem = document.createElement('li');
                  
                  // Establece el texto del elemento de lista con la sugerencia.
                  listItem.textContent = suggestion;
                  
                  // Añade un listener de evento para manejar el clic en la sugerencia.
                  listItem.addEventListener('click', () => {
                      // Redirige al usuario a la URL correspondiente a la sugerencia seleccionada.
                      window.location.href = suggestions[suggestion];
                      
                      // Limpia la lista de sugerencias después del clic.
                      suggestionsList.innerHTML = '';
                      
                      // Limpia el campo de búsqueda.
                      searchBar.value = '';
                  });

                  // Añade el elemento de lista a la lista de sugerencias.
                  suggestionsList.appendChild(listItem);
              });
          } else {
              // Oculta la lista de sugerencias si no hay coincidencias.
              suggestionsList.style.display = 'none';
          }
      } else {
          // Oculta la lista de sugerencias si el campo de búsqueda está vacío.
          suggestionsList.style.display = 'none';
      }
  });

  // Añade un listener de evento para cerrar la lista de sugerencias al hacer clic fuera de ella.
  document.addEventListener('click', function(event) {
      // Verifica si el clic ocurrió fuera del campo de búsqueda y la lista de sugerencias.
      if (!searchBar.contains(event.target) && !suggestionsList.contains(event.target)) {
          // Oculta la lista de sugerencias si se hace clic fuera de ella.
          suggestionsList.style.display = 'none';
      }
  });
});



document.getElementById("contact-form").addEventListener("submit", async function(event) {
    event.preventDefault(); // Evita el comportamiento predeterminado del formulario

    const form = event.target;
    const formData = new FormData(form);
    const messageDiv = document.getElementById("form-message");

    try {
      const response = await fetch(form.action, {
        method: form.method,
        body: formData,
        headers: { 'Accept': 'application/json' }
      });

      if (response.ok) {
        messageDiv.textContent = "Mensaje enviado exitosamente.";
        messageDiv.className = "success";
        form.reset(); // Limpia el formulario
      } else {
        throw new Error("Hubo un problema al enviar el mensaje.");
      }
    } catch (error) {
      messageDiv.textContent = "Error al enviar el mensaje. Inténtalo de nuevo.";
      messageDiv.className = "error";
    }

    messageDiv.style.display = "block"; // Muestra el mensaje
    setTimeout(() => { messageDiv.style.display = "none"; }, 5000); // Oculta el mensaje después de 5s
  });





  