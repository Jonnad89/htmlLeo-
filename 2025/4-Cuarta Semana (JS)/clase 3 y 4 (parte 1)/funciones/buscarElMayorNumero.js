let numeros = [34, 12, 89, 45, 2, 101];
let mayor = numeros[0];

for ( let i = 1; i < numeros.length; i++ ) {
    if (numeros[i] > mayor) {
        mayor = numeros[i]
    }
}

console.log("El mayor número es:", mayor)