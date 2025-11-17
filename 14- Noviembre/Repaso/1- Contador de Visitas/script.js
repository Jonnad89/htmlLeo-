const contadorDisplay = document.getElementById("contador");
const incrementarBtn = document.getElementById("incrementar-btn");
const resetBtn = document.getElementById("reset-btn");
const STORAGE_KEY = "conteoGuardado";

let contador = 0;

// 1. Cargar el valor de localStorage al iniciar
function cargarConteo() {
    //localStorage siempre devuelve una cadena (string) o null
    const guardado = localStorage.getItem(STORAGE_KEY);
    if (guardado !== null) {
        // Debemos convertir la cadena a número (parseInt)
        contador = parseInt(guardado)
    }
    contadorDisplay.textContent = contador
}

function actualizarConteo() {
    //2. Guardar el valor como cadena antes de actualiar el DOM
    localStorage.setItem(STORAGE_KEY, contador)
    contadorDisplay.textContent = contador
}

// Eventos de usuario
function incrementar() {
    contador++;
    actualizarConteo()
}

function resetear() {
    contador = 0;
    actualizarConteo();
}

// Inicialización
document.addEventListener("DOMContentLoaded", () => {
    cargarConteo();
    incrementarBtn.addEventListener('click', incrementar);
    resetBtn.addEventListener('click', resetear)
})