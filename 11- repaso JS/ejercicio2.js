/* 
Eliminamos los elementos duplicados de un array
*/

let numeros = [1, 2, 2, 3, 4, 4, 5];
let sinDuplicados = [];

for (let i = 0; i < numeros.length; i++) {
    if (!sinDuplicados.includes(numeros[i])) {
        sinDuplicados.push(numeros[i])
    }
}

console.log(sinDuplicados)

/*
Contamos cuántas veces aparece cada elemento
*/

let letras = ["a", "b", "a", "c", "b", "a"];

let contador = {};

for (let i = 0; i < letras.length; i++) {
    let letra = letras[i];
    contador[letra] = (contador[letra] || 0) +1
}

console.log(contador)