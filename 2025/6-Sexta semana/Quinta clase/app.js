/*
Ejercicio práctico de ejecución personalizada
*/

function ejecutarOperacion(a,b, operacion) {
    return operacion(a,b)
}
// Estás también son funciones
const sumar = (x, y) => x + y;
const restar = (x, y) => x - y;

console.log(ejecutarOperacion(5,3, sumar))
console.log(ejecutarOperacion(5,3, restar))

