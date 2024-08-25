function toggleMenu() {
    var menuContainer = document.querySelector('.nav__li-container');
    menuContainer.classList.toggle('visible');
}

function toggleRedes() {
    var redes = document.getElementById("redes");
    if (redes.style.display === "block") {
        redes.style.display = "none";
    } else {
        redes.style.display = "block";
    }
}
