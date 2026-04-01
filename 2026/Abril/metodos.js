/*
Métodos de Arrays (map, filter, reduce)

1- .map() El transformador
Se usa cuando queres que cada eleento del array pase por una "fábrica" y se convierta
en algo nuevo, pero manteniendo la misma cantidad de elementos.
*/

// convertir una lista de precios a precios con IVA

const precios = [100, 200, 300];
const conIVA = precios.map(p => p * 1.21)

console.log(conIVA)

/*

.filter() El guardia de seguridad
Crea un nuevo array solo con los elementos que cumplen una condición (la cual debe devolver true o false)
*/

const productos = [
    {nombre: "Mouse", precio: 20},
    {nombre: "Monitor", precio: 200},
    {nombre: "Teclado", precio: 50}
];

const caros = productos.filter(prod => prod.precio > 100)
console.log(caros)

/*

.reduce() El acumulador
Es el más commplejo para un Junio, pero el más potente. Sirve para reducir todo el array a un solo valor
*/

const carrito = [10, 20, 30];
const total = carrito.reduce((acumulador, actual) => acumulador + actual, 0);
console.log(total)