// Mostrar los elementos de un array uno por uno


let dias = ["Lunes", "Martes", "Miércoles", "Jueves", "Viernes"];

for ( let i = 0; i < dias.length; i++ ) {
    console.log(dias[i])
}

// Contar cuantos elementos tiene un array

let animales = ["gato", "perro", "loro"];

console.log("Cantidad:", animales.length)

// Sumar todos los números  de un array

let numeros = [10, 20, 30, 40];
let suma = 0;

for ( let i = 0; i < numeros.length; i++ ) {
    suma += numeros[i]
}

console.log("Summa total:", suma)

// Encontrar el número más grande de un array

let nums = [3, 7, 2, 9, 5];
let mayor = nums[0];

for ( let i = 1; i < nums.length; i++ ) {
    if (nums[i] > mayor) {
        mayor = nums[i]
    }
}

console.log("Mayor:", mayor)


// Contar cuántos elementos son mayores a 10

let valores = [5, 12, 8, 20, 33];
let contador = 0;

for (let i = 0; i < valores.length; i++) {
    if (valores[i] > 10) {
        contador++;  // contador +1
    }
}

console.log("Mayores a 10:", contador)

// Invertir un array sin usar .reverse()

let original = [1, 2, 3, 4, 5];
let invertido = [];

for ( let i = original.length -1; i >= 0; i-- ) {
    invertido.push(original[i])
}

console.log(invertido)


// Crear un nuevo array solo con los números pares
let numbers = [4, 7, 10, 13, 16];
let pares = [];

for ( let i = 0; i < numbers.length; i++ ) {
    if (numbers[i] % 2 === 0){
        pares.push(numbers[i])
    }
}

console.log(pares)

// Concatenar los strings de un array en una sola frase

let palabras = ["Hola,", "¿cómo", "estás?"];
let frase = "";

for ( let i = 0; i < palabras.length; i++ ) {
    frase += palabras[i] + " ";
}

console.log(frase.trim())

// Eliminar los elementos duplicados de un array

let numerosDuplicados = [1, 2, 2, 3, 4, 4, 5];;
let sinDuplicados = [];

for ( let i = 0; i < numerosDuplicados.length; i++ ) {
    if(!sinDuplicados.includes(numerosDuplicados[i])) {
        sinDuplicados.push(numerosDuplicados[i])
    }
}

console.log(sinDuplicados)