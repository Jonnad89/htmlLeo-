// 1. Estado de la Mascota
let pet = {
    hambre : 100,
    felicidad : 100,
    vivo : true
};

// 2. Selectores 

const barHambre = document.getElementById('bar-hambre');
const barFelicidad = document.getElementById('bar-felicidad');
const petEmoji = document.getElementById('pet-emoji');
const petContainer = document.getElementById('pet-container');
const msjConsola = document.getElementById('mensaje-consola');
const btnReiniciar = document.getElementById('btn-reiniciar');

/*
* Función principal: Actualiza la interfaz según los puntos del objeto 'pet'
*/ 

function actualizarInterfaz() {
    // Actualizar barras
    barHambre.style.width = pet.hambre + '%';
    barFelicidad.style.width = pet.felicidad + '%';

    // Cambiar color de barras según nivel
    barHambre.style.background = pet.hambre < 30 ? "#e74c3c" : "#2ecc71";

    // Cambiar Emojis según estado
    if (!pet.vivo){
        petEmoji.textContent = "💀";
        msjConsola.textContent = "Tu mascota ha pasado a mejor vida...";
        petContainer.classList.add('pet-muerto');
        btnReiniciar.classList.remove('oculto');
    } else if (pet.hambre < 40){
        petEmoji.textContent = "🤤";
        msjConsola.textContent = "¡Tengo mucha hambre!"
    } else {
        petEmoji.textContent = "😊"
    }
}

/* 
    * Bucle del juego: El tiempo pasa y la mascota se desgasta
*/

const bucle = setInterval(()=> {
    if (pet.vivo) {
        pet.hambre -= 5;
        pet.felicidad -= 3;

        // ¿Qué hariamos ahora para verificar si la mascota murió?
        if (pet.hambre < 0 || pet.felicidad <= 0) {
            pet.vivo = false;
            clearInterval(bucle); // Detenemos el reloj
        }
        actualizarInterfaz();
    }
}, 2000); // Cada 2 segundos baja el estado

// 3. Acciones de los botones
document.getElementById('btn-alimentar').addEventListener("click", ()=> {
    if(!pet.vivo) return;
    pet.hambre = Math.min(pet.hambre + 15, 100); // No pasar de 100
    msjConsola.textContent = "¡Ñam ñam! ¡Gracias!";
    actualizarInterfaz()
});

document.getElementById("btn-jugar").addEventListener('click', ()=> {
    if(!pet.vivo) return;
    pet.felicidad = Math.min(pet.felicidad + 20, 100);
    pet.hambre -= 5; // Jugar da hambre
    msjConsola.textContent = "¡Que divertido es programar!";
    actualizarInterfaz();
});

btnReiniciar.addEventListener('click', () => {
    location.reload(); // La forma más fácil de "revivir" reiniciando todo
});

actualizarInterfaz()