// Palabras al revés

let palabra = "nova";
let invertida = "";

for (let i = palabra.length - 1; i >= 0; i--) {
    invertida += palabra[i];
}

console.log("Palabra invertida:", invertida)