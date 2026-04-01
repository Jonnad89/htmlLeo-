/*
¿Qué es un array?
un array o arreglo es una lista de elementos, puede contener
números, strings, booleanos, objetos, o incluso otros arrays
*/

let frutas = ["manzana", "banana", "naranja"];
console.log(frutas)

console.log(frutas[0]) // manzana
console.log(frutas[2]) // naranaja

frutas[1] = "pera"; // cambia "banana" por "pera"
console.log(frutas); // ["manzana", "pera", "naranja"]

// propiedad length

let numeros = [10, 20, 30];
console.log(numeros.length)

// Métodos básicos de arrays

// push() -> Agrega un elemento al final

numeros.push(40)
console.log(numeros)

// pop() -> saca el últmo elemento
numeros.pop();
console.log(numeros)

// unshift() -> Agrega un elemento al principio
numeros.unshift(0)
console.log(numeros)

// shift() -> Saca el primer elemento

numeros.shift();
console.log(numeros);

// indexOf() -> Busca un valor y ddevuelve su posición

console.log(numeros.indexOf(20)) // 1
console.log(numeros.indexOf(40)) // -1 (no está)

// includes() -> ¿Está ese valor?
console.log(numeros.includes(20)); //true 
console.log(numeros.includes(40)); // false

for (let i = 0; i < numeros.length; i++) {
    console.log("Elemento:", numeros[i])
}

// forEach() -> Para recorrer de forma sencilla

let colores = ["rojo", "verde", "azul"];

colores.forEach(function(color, indice) {
    console.log(`${indice}: ${color}`)
})

// map() -> Transforma todos los elementos y crea un nuevo array (arreglo)

let dobles = numeros.map(function(num) {
    return num * 2;
});

console.log(dobles)

// filter -> filtra elementos que cumplan una condición

let edades = [ 10, 15, 21, 25, 30, 14];

let mayores = edades.filter(function(edad) {
    return edad >= 18;
})

console.log(mayores); // 21, 25, 

// find() -> nos devuelve el primer elemento que cumple una condición. En caso de que no exista coincidencia arrojará "undefined"

let nombres = [ "Padro", "José", "Leo", "Jona", "Leo"];

let encontrado = nombres.find(function(nombre) {
    return nombre === "Leo";
})

console.log(encontrado)

// invertir sin reverse() -> invierte un array

let original = [ 1, 2, 3, 4, 5 ];
let invertido = [];

for (let i = original.length -1; i >= 0; i--) {
    invertido.push(original[i])
}

console.log(invertido)