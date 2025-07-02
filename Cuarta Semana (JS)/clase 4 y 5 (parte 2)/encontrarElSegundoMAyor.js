// Encontrar el segundo  número más grande

let numeros = [ 10, 5, 8, 20, 20, 3 ];
let primero = -Infinity;
let segundo = -Infinity;

for ( let i = 0; i < numeros.length; i++ ) {
    let num = numeros[i];
    if ( num > primero ) {
        segundo = primero;
        primero = num;
    } else if ( num > segundo && num !== primero) {
        segundo = num;
    }
}

console.log("Segundo más grande:", segundo)