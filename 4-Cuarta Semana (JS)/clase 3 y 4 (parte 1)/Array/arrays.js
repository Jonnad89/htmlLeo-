// Métodos
// push() -> Agrega al final
let nombres = ["Ana", "Luis"];
console.log(nombres)
nombres.push("Carlos")
console.log(nombres)

// pop() -> Quita el último
nombres.pop()
console.log(nombres)

// unshift() -> Agrega al principio
nombres.unshift("Carlos")
console.log(nombres)

// shift() -> Quita el primero
nombres.shift();
console.log(nombres)


let frutas = ["manzana", "banana", "naranja"];

console.log(frutas)
console.log(frutas[0])
console.log(frutas[2])

// cambiar un valor

frutas[1] = "pera";
console.log(frutas)

// Propiedad length -> Te dice cuántos elementos hay en el array

console.log(frutas.length)

// indexOf() -> Busca un valor y devuelve su posición

console.log(frutas.indexOf("pera"))
console.log(frutas.indexOf("uva"))

// includes() -> ¿Está ese valor?
console.log(frutas.includes("naranja"))
console.log(frutas.includes("sandía"))

// Recorrer arrays con bucle for

let numeros = [5, 10, 15];

for(let i = 0; i < numeros.length; i++) {
    console.log("Elemento:", numeros[i])
}

// Métodos avanzados 
// forEach() -> recorrer de forma sencilla

let colores = ["rojo", "verde", "azul"];

colores.forEach(function(color, indice) {
    console.log(`${indice}: ${color}`)
})

// map() -> Transforma todos los elementos (crea un nuevo array)

let nummerosChicos = [1,2,3];
let dobles = nummerosChicos.map(function(num) {
    return num *2
})

console.log(dobles)

// filter() -> filtra elementos que cumplan una condición

let edades = [10, 18, 25, 35, 14];
let mayores = edades.filter(function(edad) {
    return edad >= 18
})

console.log(mayores)

// find() -> Devuelve el primer elemento que cumple una condición

let names = ["Ana", "Juan", "Pedro", "Ana"];
let encontrado = nombres.find(function(nombre){
    return nombre === "Ana";
})

console.log(encontrado)