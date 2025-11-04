// --- CONSTANTE DE JUEGO Y ESTADO INICIAL

const MAX_INTENTOS = 10;

let numeroSecreto; // 1. Variable para almacenar el número generado
let intentosRestantes = MAX_INTENTOS; // 2. Intentos restantes

// --- Selectores del DOM ---
const adivinanzaInput = document.getElementById('adivinanza-input');
const comprobarBtn = document.getElementById('comprobar-btn');
const reniciarBtn = document.getElementById('reiniciar-btn');
const pistaMensaje = document.getElementById('pista-mensaje');
const intentosDisplay = document.getElementById('intentos-display');

/*
1. Genera un número aleatorio y reseta el juego.
*/

function inicilizarJuego() {
    //Genera un número entero entre 1 y 100
    numeroSecreto = Math.floor(Math.random() * 100) + 1;

    // Resetear el estado
    intentosRestantes = MAX_INTENTOS;
    intentosDisplay.textContent = MAX_INTENTOS;
    pistaMensaje.textContent = "¡Juego reiniciado! Adivina el número."

    // Habilitar controles y ocultar botón de reinicio
    adivinanzaInput.disabled = false;
    comprobarBtn.disabled = false;
    reniciarBtn.style.display = "none";
    pistaMensaje.classList.remove('pista-ganador', 'pista-perdedor')
    adivinanzaInput.value = "";
}

/*
  Lógica de adivinanza y Retroalimentación dinámica
*/

function comprobarAdivinanza() {
    const intentoUsuario = parseInt(adivinanzaInput.value);

    // Validación básica
    if(isNaN(intentoUsuario) || intentoUsuario < 1 || intentoUsuario > 100) {
        pistaMensaje.textContent = "¡Error! por favor, ingresa un número válido entre 1 y 100."
        return;
    }

    intentosRestantes--;

    // Lógica condicional if/else /if/else
        if(intentoUsuario === numeroSecreto) {
            // Gana el juego
            pistaMensaje.textContent = `¡Felicidadaes! ¡Adivinaste el número sectreto (${numeroSecreto})!`
            pistaMensaje.classList.add('pista-ganador');
            terminarJuego();
        } else if (intentoUsuario < numeroSecreto) {
            // Demasiado bajo
            pistaMensaje.textContent = "El número secreto es MAYOR. ¡Segui intentando!"
        } else {
            // Demasiado alto
            pistaMensaje.textContent = "El número secreto es MENOR. ¡Segui intentado!"
        }
        // Actualizar el display de intentos
        intentosDisplay.textContent = intentosRestantes;

        // Verificar si se acabaron los intentos
        if(intentosRestantes === 0 && intentosRestantes !== numeroSecreto){
            pistaMensaje.textContent = `¡Se acabaron los intentos! ¡El número secreto era (${numeroSecreto})!`
            pistaMensaje.classList.add('pista-perdedor')
            terminarJuego()
        }
}

// Función auxiliar para finalizar el juego

function terminarJuego() {
    comprobarBtn.disabled = true;
    adivinanzaInput.disabled = true;
    reniciarBtn.style.display = "block"
}

// Inicialización y eventos

document.addEventListener("DOMContentLoaded", () => {
    inicilizarJuego();

    comprobarBtn.addEventListener("click", comprobarAdivinanza)
    reniciarBtn.addEventListener("click", inicilizarJuego)
})