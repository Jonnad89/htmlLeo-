const inputNumeros = document.getElementById("numeros-input");
const clasificarBtn = document.getElementById("clasificar-btn");
const paresDisplay = document.getElementById("pares-display")
const imparesDisplay = document.getElementById("impares-display")

/**
 * @function clasificarNumeros
 * @description 
 */

function clasificarNumeros() {
    //1. Array y Bucles: procesar el input
    // Tomar el texto del input, quitar espacios y dividir por comas
    const textoEntrada = inputNumeros.value.trim();
    if(textoEntrada === "") {
        paresDisplay.textContent = "Ninguno";
        imparesDisplay.textContent = "Ninguno";
        return;
    }

    // Array para los números, usando .map() para convertirlos a números
    const numeros = textoEntrada
        .split(',')
        .map(str => parseInt(str.trim()))
        .filter(num => !isNaN(num)) // Limpia cualquier cosa que no sea un número

    // Varables para los resultados (Arrays vacios)

    let pares = [];
    let impares = [];

    // 2. Arrays y Bucles: Recerrer el array
    for (let i = 0; i < numeros.length; i++) {
        const num = numeros[i]

        // 3. Condicionales: Lógica Par/Impar
        if (num % 2 === 0) {
            // Es PAR
            pares.push(num)
        } else {
            // Es Impar
            impares.push(num)
        }
    }

    // 4. Manipulación del DOM: Mostrar resultados
    paresDisplay.textContent = pares.join(',')
    imparesDisplay.textContent = impares.join(',')
}

// 5. Eventos: Inicialización
document.addEventListener("DOMContentLoaded", () => {
    // Asignar el listener al botón para que ejecute la función
    clasificarBtn.addEventListener('click', clasificarNumeros)
})