/*
Dado un array de objetos que representan a tus repartidores y un nuevo paquete con una zona de entrega, tenes que escribir una función que encuentreal repartidor que ya se dirige a esa misma zona o una zona vecina
*/

const ZONAS_VECNAS = {
    'A': ['B', 'D'],
    'B': ['A', 'C'],
    'C': ['B', 'E'],
    'D': ['A', 'E', 'F'],
    'E': ['C', 'D', 'G'],
    'F': ['D', 'G'],
    'G': ['E', 'F'],
}

const REPARTIDORES = [
    { nombre: "Carlos", zonaActual: 'C' },
    { nombre: "Luisa", zonaActual: 'F' },
    { nombre: "Pedro", zonaActual: 'A' },
    { nombre: "Marta", zonaActual: 'G' },
]

function encontrarRepartidor(zonaDestino) {
    // verificamos si la zona de destino exste en la red
    if(!ZONAS_VECNAS[zonaDestino]) {
        return null;
    }

    // buscamos si algun repartidor esta en la zona exacta
    let repartidorDirecto = REPARTIDORES.find(repartidor => {
        return repartidor.zonaActual === zonaDestino
    });

    if(repartidorDirecto) {
        return repartidorDirecto.nombre;
    }
// obtener todas las zonas vecinas a la zona de destino
const vecinas = ZONAS_VECNAS[zonaDestino];

// buscamos si algun repartidor esta en cualquiera de esas zoznas vecinas

let repartidorVecino = REPARTIDORES.find(repartidor => {
    return vecinas.includes(repartidor.zonaActual)
});

if(repartidorVecino) {
    return repartidorVecino.nombre;
}

return "No se encontró un repartidor óptimo."
}

console.log(`Pauete para A: ${encontrarRepartidor('A')}`)
console.log(`Pauete para B: ${encontrarRepartidor('B')}`)
console.log(`Pauete para E: ${encontrarRepartidor('E')}`)
console.log(`Pauete para H: ${encontrarRepartidor('H')}`)
console.log(`Pauete para X: ${encontrarRepartidor('X')}`)