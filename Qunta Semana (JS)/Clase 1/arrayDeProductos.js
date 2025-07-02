// Crear un array de productos con nombre y precio. Crear una función que devuelva el total

let productos = [
    { nombre : "Teclado", precio : 8000 },
    { nombre : "Mouse", precio : 6000 },
    { nombre : "Monitor", precio : 50000 }
];

function calcularTotal(lista) {
    let total = 0;
    for (let i = 0; i < lista.length; i++) {
        total += lista[i].precio;
    }
    return total;
}

console.log("Total: ", calcularTotal(productos))