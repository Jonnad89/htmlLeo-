/* 
Creamos un array con 5 nombres y los mostramos cada uno en consola
*/

let personas = ["Lucía", "Juan", "Marta", "Leo", "Pedro"];

for (let i = 0; i < personas.length; i++) {
    console.log(personas[i])
}

/*
Creamos un array de números y devolvemos uno nuevo con los números al cuadrado usando map()
*/

let numeros = [2, 3, 4];

let cuadrados = numeros.map(n => n * n);

console.log(cuadrados); //  [4, 9, 16]

/*
Filtramos un array de edades para obtener solo mayores de edad
*/

let edades = [13, 16, 19, 22, 15];

let mayores = edades.filter(e => e >= 18);

console.log(mayores)

/*
Verificamos si un array contiene cierto valor usando includes
*/

let lenguajes = ["HTML", "CSS", "Python"];
console.log(lenguajes.includes("Python"));
// console.log(lenguajes.includes("python"));

/* 
Mostramos los elementos de un array uno por uno
*/

let dias = ["Lunes", "Martes", "Miércoles", "Jueves", "Viernes"];

for (let i = 0; i < dias.length; i++) {
    console.log(dias[i])
}

/* 
Vamos a contar cuandos elementos tiene un array
*/

let animales = ["gato", "perro", "loro"];
console.log("Cantidad:", animales.length);

/*
Sumar todos los números de un array
*/

let nums = [ 10, 20, 30, 40];

let suma = 0;

for (let i = 0; i < nums.length; i++) {
    suma += nums[i];
}

console.log("Suma total:", suma)

/*
Encontramos el números más grande de un array
(usamos el arreglo nums)
*/

let mayor = nums[0];

for (let i = 1; i < nums.length; i++) {
    if (nums[i] > mayor) {
        mayor = nums[i];
    }
}

console.log("Mayor:", mayor)

/*
Contamos cuántos elementos son mayores a 10
*/

let valores = [6, 12, 9, 23, 58]; 
let contador = 0;

for (let i = 0; i < valores.length; i++) {
    if (valores[i] > 10) {
        contador++;
    }
}

console.log("Mayores a 10:", contador)

/*
Creamos un array solo con los números pares
*/

let valorNum = [4, 7, 12, 13, 18];

let pares = [];

for (let i = 0; i < valorNum.length; i++) {
    if (valorNum[i] % 2 === 0) {
        pares.push(valorNum[i])
    }
}

console.log(pares)

/*
Concatenar los strings de un array en una sola frase
*/

let palabras = ["Hola", "¿Cómo", "estás?"];
let frase = "";

for (let i = 0; i < palabras.length; i++) {
    frase += palabras[i] + " ";
}

console.log(frase.trim());