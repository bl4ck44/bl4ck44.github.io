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