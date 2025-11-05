// --- Selectores del DOM ---
const selectorLuz = document.getElementById('selector-luz');
const luzRoja = document.getElementById('luz-roja');
const luzAmarilla = document.getElementById('luz-amarilla');
const luzVerde = document.getElementById('luz-verde');

// Array de todas las luces (para apagarlas fácilmente)
const luces = [luzRoja, luzAmarilla, luzVerde];

/* Función auxiliar para apagar todas las luces. */

function apagarLuces() {
    for(let i = 0; i < luces.length; i++) {

        luces[i].style.opacity = 0.2;
    }
}


/* Función principal: Cambia el estado del semáforo */

function cambiarLuz() {
    // Apagar todas las luces primero (limpiar estado anterior)
    apagarLuces();
    //Obtenemos el valor seleccionado del dropdown
    const estadoSeleccionado = selectorLuz.value;

    // Lógica condicional: Encender solo la luz seleccionada
    if(estadoSeleccionado === 'rojo') {
        luzRoja.style.opacity = 1; // Enciende la luz roja
    } else if (estadoSeleccionado === 'amarillo') {
        luzAmarilla.style.opacity = 1; // Enciende la luz amarilla
    } else if (estadoSeleccionado === 'verde') {
        luzVerde.style.opacity = 1; // Enciende la luz verde
    }
    // Si el valor es 'apagado', solo se ejecutan las funciones de apagarLuces
}

// --- Inicialización y eventos

document.addEventListener('DOMContentLoaded', () => {
    // Asiganamos Evento 'change' al selector
    // 'change' se dispara cuando el valor de la lista desplegable cambia.
    selectorLuz.addEventListener('change', cambiarLuz)

    // Inicializamos en apagado
    apagarLuces()
})