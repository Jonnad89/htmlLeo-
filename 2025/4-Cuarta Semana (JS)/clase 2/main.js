for (let i = 1; i <= 5; i++){
    console.log("Número:", i)
}

/*
inicio: let i = 1 -> Empieza en 1
Condición: i <= 5 -> Se repite mientras sea verdadera
Incremento: i++ -> Suma 1 en cada vuelta
*/

// Summar los númmeros del 1 al 10

let suma = 0;
for(let i = 1; i <= 10; i++) {
    suma += i;
}

console.log("Resultado:", suma)

let frutas = ["manzana", "banana", "uva"];

for(let i = 0; i < frutas.length; i++){
    console.log(frutas[i])
}

// While
let i = 1;
while (i <= 5) {
    console.log("Número:", i);
    i++;
}

// While ejemplo con prompt, probar si o si con un index.html

// let entrada = "";
// let intentos = 0;

// while (entrada !== "salir" && intentos < 5){
//     entrada = prompt("Escribi 'salir' para terminar: ");
//     intentos++
// }

// let opcion;

// do {
//     opcion = prompt("elegí una opción: \n1. Ver perfil\n2. Salir")
// } while (opcion !== "2")

// Palabras claves, break:

for(let i = 1; i <= 10; i++) {
    if (i === 5) break;
    console.log(i)
}

// continue: salta esa vuelta del bucle

for(let i = 1; i <= 5; i++) {
    if (i === 3) continue;
    console.log(i)
}