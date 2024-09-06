function toggleMenu() { 
    // Define una función llamada toggleMenu, que se encargará de mostrar u ocultar un menú.

    var menuContainer = document.querySelector('.nav__li-container'); 
    // Busca el primer elemento del DOM que tenga la clase 'nav__li-container' y lo almacena en la variable 'menuContainer'.

    menuContainer.classList.toggle('visible'); 
    // Alterna la clase 'visible' en el elemento 'menuContainer'. Si la clase 'visible' está presente, la elimina; si no, la agrega.
}

function toggleRedes() { 
    // Define una función llamada toggleRedes, que se encargará de mostrar u ocultar una sección de redes sociales.

    var redes = document.getElementById("redes"); 
    // Busca el elemento del DOM con el ID 'redes' y lo almacena en la variable 'redes'.

    if (redes.style.display === "block") { 
        // Comprueba si el estilo de display del elemento 'redes' es igual a 'block', lo que indica que está visible.

        redes.style.display = "none"; 
        // Si 'redes' está visible, cambia el estilo de display a 'none', ocultándolo.
    } else { 
        // Si 'redes' no está visible (display no es 'block').

        redes.style.display = "block"; 
        // Cambia el estilo de display a 'block', mostrando el elemento 'redes'.
    }
}


document.addEventListener('DOMContentLoaded', () => {
  const suggestions = {
      'Inyección con Sqlmap': '/Articles/Sqlmap.htmlhttps://bl4ck44.github.io/Articles/Sqlmap.html',
      'Análisis con Bettercap': 'https://bl4ck44.github.io/Articles/Bettercap.html',
      'Análisis con dirsearch': 'https://bl4ck44.github.io/Articles/dirsearch.html',
      'Herramientas para escaneo de vulnerabilidades': 'https://bl4ck44.github.io/Articles/pentesting.html',
  };

  const searchBar = document.getElementById('search-bar');
  const suggestionsList = document.getElementById('suggestions');

  searchBar.addEventListener('input', function() {
      const query = searchBar.value.toLowerCase();
      suggestionsList.innerHTML = ''; // Limpia las sugerencias anteriores

      if (query) {
          const filteredSuggestions = Object.keys(suggestions).filter(item => item.toLowerCase().includes(query));

          if (filteredSuggestions.length > 0) {
              suggestionsList.style.display = 'block';
              filteredSuggestions.forEach(suggestion => {
                  const listItem = document.createElement('li');
                  listItem.textContent = suggestion;
                  listItem.addEventListener('click', () => {
                      // Redirigir a la URL correspondiente
                      window.location.href = suggestions[suggestion];
                      suggestionsList.innerHTML = '';
                      searchBar.value = '';
                  });
                  suggestionsList.appendChild(listItem);
              });
          } else {
              suggestionsList.style.display = 'none';
          }
      } else {
          suggestionsList.style.display = 'none';
      }
  });

  document.addEventListener('click', function(event) {
      if (!searchBar.contains(event.target) && !suggestionsList.contains(event.target)) {
          suggestionsList.style.display = 'none';
      }
  });
});





  