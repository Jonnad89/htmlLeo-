/**
 * EJERCICIO: EL DIAMANTE DE ASTERISCOS
 * Conceptos: Reutilización de funciones, bucles incrementales y decrementales.
 */

const dibujarDiamante = (alturaMitad) => {

    // --- Parte 1: La punta de arriba (Pirámide normal)---
    // Va de 1 hasta la alturaMitad (ej 1,2,3)
    for (let i = 1; i <= alturaMitad; i++) {
        // Espacios: alturaMitad - nivel actual (ej, 3-1 = 2)
        const espacios = " ".repeat(alturaMitad - i);
        // Asteriscos: (2 * nivel) - 1 (ej. (2 * i) -1 = 1)
        const asteriscos = "*".repeat((2 * i) -1);

        console.log(espacios + asteriscos + espacios);
    }

    // ---PARTE 2: La punta de abajo (Pirámide Invertida)---
    // Empezamos un nivel abajo (alturaMitad - 1) para no repetir la fila del medio
    // Va de (alturaMitad - 1) bajando hasta 1 (ej. 2,1)

    for (let i = alturaMitad -1; i >=1; i --) {
        // Usamos la misma lógica de espacios y asteriscos
        const espacios = " ".repeat(alturaMitad - i);
        const asteriscos = "*".repeat((2 * i) - 1);

        console.log(espacios + asteriscos + espacios);
    }
};

// --- Prueba Del Diamante ---
console.log("Diamante de 5 niveles (de ancho máximo");
dibujarDiamante(5)
console.log("\n Diamante de 8 niveles:");
dibujarDiamante(8)

