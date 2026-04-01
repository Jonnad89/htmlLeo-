/* 
==== for ==== 
for (inicio, condición, incremento) {
    código que se repite
}
*/

for (let i = 1; i <= 5; i++) {
    console.log("Número:", i)
}

// sumar con el bucle for

let suma = 0;

for (let i = 1; i <= 15; i++) {
    suma += i;
}
console.log("Resultado:", suma);

// Recorrer un array

let frutas = ["manzana", "banana", "uva", "pera"]; 
for (let i = 0; i < frutas.length; i++) {
    console.log(frutas[i])
}

/*
==== while ====
while (condición) {
    código que se repite
}
*/

// contar del 1 al 10

let i = 1;

while (i <= 10) {
    console.log("Número:", i);
    i++;
}

/*
==== do...whle ===
do {
    código que se ejecuta al menos una vez
} while (condición)
*/

let opcion;

// do {
//     opcion = prompt("Elegí una opción:\n1. Ver perfil\n2. Salir")
// } while (opcion !== "2");

// break -> corta el bucle totalmente

for (let i = 1; i <= 15; i++) {
    if ( i === 10) break;
    console.log(i)
}

// continue -> alta esa vuelta del bucle
for (let i = 1; i <= 5; i++) {
    if ( i === 3) continue;
    console.log(i)
}