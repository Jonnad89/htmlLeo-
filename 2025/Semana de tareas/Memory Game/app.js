const iconos = [
    '🍎', '🍌', '🍇', '🍉', '🍍', '🥝', '🍋', '🍑'
];

let cartas = [];
let cartasVolteadas = [];
let bloquearTablero = false;
let paresEncontrados = 0;
let intentos = 0;

// Selectores del DOM

const tableroMEmoria = document.getElementById("tablero-memoria");
const intentosDisplay = document.getElementById("intentos");
const mensajeFinal = document.getElementById("mensaje-final");
const intentosFinalSpan = document.getElementById("intentos-final");
const reiniciarBtn = document.getElementById("reiniciar-btn");

// Funciones de lógica del juego

// Inicializa las cartas y las baraja
function inicializarJuego() {
    // duplicar los iconos para crear pares
    cartas = [...iconos, ...iconos]

    // barajar las cartas
    for (let i = cartas.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i +1));
        [cartas[i], cartas[j]] = [cartas[j], cartas[i]];
    }

    renderizarCartas()
}

// Dibuja las cartas en el DOM

function renderizarCartas() {
    tableroMEmoria.innerHTML = ''; // Limpia el tablero

    cartas.forEach((icono, index) => {
        const carta = document.createElement("div")
        carta.classList.add("carta")
        carta.dataset.icono = icono
        carta.dataset.index = index

        // Estructura interna de la carta (frente y reverso)
        carta.innerHTML = `
            <div class="cara-frente">?</div>
            <div class="cara-atras">${icono}</div>
        `;

        carta.addEventListener("click", manejarVolteoCarta);
        tableroMEmoria.appendChild(carta)
    });
}

// Maneja el evento de click en una carta
function manejarVolteoCarta(e) {
    // Si el tablero está bloqueado o ya se voltearon 2 cartas, no hacer nada
    if(bloquearTablero) return;

    const cartaClickeada = e.currentTarget;

    // Si ya está volteada o emparejada, no hacer nada
    if(cartaClickeada.classList.contains('volteada') || cartaClickeada.classList.contains('emparejada')) return;

    // Voltear la carta
    cartaClickeada.classList.add('volteada');
    cartasVolteadas.push(cartaClickeada);

    // Si ya hay dos cartas volteadas, hay que comprobar el par
    if(cartasVolteadas.length === 2) {
        incrementarIntentos();
        comprobarPar();
    }
}

function incrementarIntentos(){
    intentos++;
    intentosDisplay.textContent = intentos;
}

// Comprobamos si las dos cartas volteadas son iguales
function comprobarPar() {
    bloquearTablero = true; // bloquea el tablero para evitar clicks
    const [carta1, carta2] = cartasVolteadas;

    if(carta1.dataset.icono === carta2.dataset.icono) {
        // coinciden
        manejarCoincidencia(carta1, carta2);
    } else {
        // no coinciden
        manejarNoCoincidencia(carta1, carta2)
    }
}

function manejarCoincidencia(carta1, carta2) {
    // Marcar como emparejadas y remover el listener de click
    setTimeout(() => {
        carta1.classList.add('emparejada');
        carta2.classList.add('emparejada');
        carta1.removeEventListener("click", manejarVolteoCarta)
        carta2.removeEventListener("click", manejarVolteoCarta)

        cartasVolteadas = [];
        bloquearTablero = false;

        paresEncontrados++;
        comprobarVictoria();
    }, 500) // pequeño retraso para ver las cartas
}

function manejarNoCoincidencia(carta1, carta2) {
    // Volteamos las cartas de nuevo
    setTimeout(()=> {
        carta1.classList.remove("volteada")
        carta2.classList.remove("volteada")

        cartasVolteadas = [];
        bloquearTablero = false;
    }, 1200) // Retraso mayor para dar tiempo a memorizar
}

// Comprobar si se encontraron todos los pares
function comprobarVictoria() {
    if(paresEncontrados === iconos.length) {
        // Mostrar el mensaje de victoria
        intentosFinalSpan.textContent = intentos;
        mensajeFinal.classList.remove("oculto");
    }
}

// Reinicia el juego

function reiniciarJuego() {
    cartasVolteadas = [];
    bloquearTablero = false;
    paresEncontrados = 0;
    intentos = 0;
    intentosDisplay.textContent = 0;
    mensajeFinal.classList.add("oculto")

    inicializarJuego(); //Vuelve a inicializar y renderizar
}

// Inicio de la aplicación y eventos

document.addEventListener("DOMContentLoaded", inicializarJuego);
reiniciarBtn.addEventListener("click", reiniciarJuego)