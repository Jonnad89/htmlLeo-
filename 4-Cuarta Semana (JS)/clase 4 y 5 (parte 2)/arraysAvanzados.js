// Contar cuántas veces aparece cada elemento

let letras = ["a","b","a","c","b","a"];
let contador = [];

for (let i = 0; i < letras.length; i++) {
    let letra = letras[i];
    contador[letra] = (contador[letra] || 0) +1;
}

console.log(contador)

// Eliminar los elementos impares de un array (modificar el mismo)

let numeros = [ 1, 2, 3, 4, 5, 6 ];

for( let i = numeros.length -1; i >=0; i-- ) {
    if ( numeros[i] % 2 !== 0 ) {
        numeros.splice(i, 1)
    }
}

console.log(numeros)

// Comprobar si dos arrays tienen los mismos elementos (sin importar el orden)

let a = [ 1, 2, 3 ];
let b = [ 3, 2, 1 ];

function sonIguales(arr1, arr2) {
    if(arr1.length !== arr2.length) return false;

    let ordenado1 = [...arr1].sort()
    let ordenado2 = [...arr2].sort()
    // console.log(ordenado1)
    // console.log(ordenado2)
    for ( let i = 0; i < ordenado1.length; i++) {
        if ( ordenado1[i] !== ordenado2[i] ) return false;
    }

    return true;
}

console.log(sonIguales(a, b))

// Agrupar números en pares e impares

let lista = [1, 4, 7, 8, 9, 12];
let pares = [];
let impares = [];

for ( let i = 0; i < lista.length; i++ ) {
    if (lista[i] % 2 === 0) {
        pares.push(lista[i])
    } else {
        impares.push(lista[i])
    }
}

console.log("Pares:", pares)
console.log("Impares:", impares)

