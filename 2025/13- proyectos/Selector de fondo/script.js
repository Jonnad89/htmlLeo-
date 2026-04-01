// --- SELECTORES DEL DOM ---
const body = document.body;
const colorSelector = document.getElementById('color-selector');
const reiniciarBtn = document.getElementById('reiniciar-btn');

// Definir el color original (debe coincidir con la variable CSS --color-fondo-default)
const COLOR_DEFAULT = '#f4f6f9'; 

/**
 * 3. Lógica del Cambio: Obtiene el valor y cambia el estilo del body.
 */
function cambiarFondo() {
    // 1. Obtener el valor de la opción seleccionada
    const colorSeleccionado = colorSelector.value;

    // 4. Manipulación del DOM: Cambiar el fondo del <body>
    if (colorSeleccionado !== 'default') {
        body.style.backgroundColor = colorSeleccionado;
    } else {
        // Si selecciona la opción por defecto, lo reiniciamos
        reiniciarFondo();
    }
}

/**
 * 5. Botón de Reinicio: Resetea el color del fondo.
 */
function reiniciarFondo() {
    body.style.backgroundColor = COLOR_DEFAULT;
    // Opcional: Revertir la lista desplegable a la opción inicial
    colorSelector.value = 'default'; 
}


// --- INICIALIZACIÓN Y EVENTOS ---
document.addEventListener('DOMContentLoaded', () => {
    // 3. Asignar Evento 'change' a la lista desplegable
    // El evento 'change' se dispara cuando se selecciona una nueva opción.
    colorSelector.addEventListener('change', cambiarFondo);

    // 5. Asignar Evento 'click' al botón de reinicio
    reiniciarBtn.addEventListener('click', reiniciarFondo);
});