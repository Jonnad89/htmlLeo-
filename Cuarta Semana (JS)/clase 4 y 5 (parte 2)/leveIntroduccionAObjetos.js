// contar palabras en un array

let palabras = ["hola", "chau", "hola", "hola", "chau", "saludo"];
let contador = {};

for ( let i = 0; i < palabras.length; i++ ) {
    let palabra = palabras[i];
    contador[palabra] = (contador[palabra] || 0) + 1;
}

console.log(contador)

// Contar númmeros en un array 

let numeros = [1, 2, 3, 2, 1, 1, 3, 4];
let frecuencia = {};

for ( let i = 0; i < numeros.length; i++ ) {
    let numero = numeros[i];
    frecuencia[numero] = (frecuencia[numero] || 0) +1;
}

console.log(frecuencia)

// Contar cuántas veces aparece cada vocal en una frase

let frase = "JavaScript es divertido";
let vocales = "aeiou";
let counter = {};

for ( let i = 0; i < frase.length; i++ ) {
    let letra = frase[i].toLowerCase();
    if ( vocales.includes(letra)) {
        counter[letra] = (counter[letra] || 0) +1;
    }
}

console.log(counter)

// Contar cuántos valores booleanos hay en un array

let respuestas = [true, false, true, true, false, false];
let resultado = {};

for ( let i = 0; i < respuestas.length; i++ ) {
    let valor = respuestas[i];
    resultado[valor] = (resultado[valor] || 0) +1;
}

console.log(resultado)

// Contar cantidad de letras en una palabra

let word = "banana";
let letters = {};

for ( let i = 0; i < respuestas.length; i++ ) {
    let letter = word[i];
    letters[letter] = (letters[letter] || 0) +1;
}

console.log(letters)

// Contar la cantidad de veces que aparecen los primeros dígitos de un array

let codigos = [101, 102, 201, 202, 203, 301, 101];
let primerDigito = {};

for ( let i = 0; i < codigos.length; i++ ) {
    let grupo = Math.floor(codigos[i] / 100); // ejemplo 101 ->1, 203-> 2
    primerDigito[grupo] = (primerDigito[grupo] || 0) +1;
}

console.log(primerDigito)

