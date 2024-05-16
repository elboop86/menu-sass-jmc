const triggerMenu = document.getElementById('triggerMenu');
const mainNav = document.getElementById('mainNav');

/* const triggerMenu = document.getElementById('triggerMenu');:

Esta línea obtiene el elemento del DOM con el ID triggerMenu y lo asigna a la constante triggerMenu. Este elemento es probablemente el botón de menú tipo "hamburguesa".
const mainNav = document.getElementById('mainNav');:

Esta línea obtiene el elemento del DOM con el ID mainNav y lo asigna a la constante mainNav. Este elemento es probablemente el contenedor del menú de navegación principal.
*/

triggerMenu.addEventListener('click', function() {
    triggerMenu.classList.toggle('toggled')
    mainNav.classList.toggle('active')

});

/**triggerMenu.addEventListener('click', function() { ... });:

Esta línea añade un evento de escucha al elemento triggerMenu que se activa cuando el usuario hace clic en él.
La función dentro de este evento se ejecuta cada vez que se hace clic en triggerMenu.
triggerMenu.classList.toggle('toggled');:

Esta línea añade o quita la clase toggled del elemento triggerMenu cada vez que se hace clic. La clase toggled se utiliza para aplicar estilos específicos, como animaciones o cambios de apariencia, al botón de menú tipo "hamburguesa".
mainNav.classList.toggle('active');:

Esta línea añade o quita la clase active del elemento mainNav cada vez que se hace clic en triggerMenu. La clase active se utiliza para mostrar u ocultar el menú de navegación principal, aplicando estilos específicos definidos en el CSS, como visibilidad, opacidad, y animaciones.
Resumen de funcionalidad
Este código añade interactividad al botón de menú tipo "hamburguesa" (triggerMenu) y al menú de navegación principal (mainNav). Cuando el usuario hace clic en el botón de menú:

La clase toggled se alterna (añade o quita) en el botón de menú, cambiando su apariencia y probablemente su animación (como la rotación de las líneas para formar una "X").
La clase active se alterna (añade o quita) en el menú de navegación, mostrando u ocultando el menú con animaciones definidas en el CSS.
Esto permite una experiencia de usuario interactiva y dinámica, donde el menú de navegación puede ser desplegado y ocultado mediante el botón de menú tipo "hamburguesa".

*/
