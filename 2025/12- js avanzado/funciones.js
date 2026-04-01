/*
En Js, las funciones son valores:
- Se pueden guardar en variables
- Se pueden pasar como argumentos
- Se pueden retornar desde otras funciones
*/

function operar(a, b, callback) {
    return callback(a, b)
}

const suma = (x,y) => x + y;
const resta = (x,y) => x - y;

console.log(operar(5, 3, suma))
console.log(operar(5, 3, resta))