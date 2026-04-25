/* 
Calular el valor total de todo el inventario
Conta cuántos productos son de la categoría "Lácteos"
Encontrar el nombre del producto más caro
*/

const inventario = [
    {nombre: "Leche", precio: 1200, categoria:"Lácteos"},
    {nombre: "Pan", precio: 800, categoria:"Panadería"},
    {nombre: "Queso", precio: 3500, categoria:"Lácteos"},
    {nombre: "Mermelada", precio: 1500, categoria:"Almacén"},
    {nombre: "Yogurt", precio: 900, categoria:"Lácteos"},
];

const generarInforme = (productos) => {
    let valorTotal = 0;
    let contadorLacteos = 0;
    let productoMasCaro = productos[0];

    // Lógica acá abajo
    /* 
    1. recorrer el array 'productos'
    2. sumar los precios al 'valorTotal'
    3.Si la categorita es 'Lácteos', suar 1 al 'contadorLactoes'
    4. Si el precio del producto actual es mayor al de 
    'productoMasCaro' actualizar 'productoMasCaro' con el actual
    */

    console.log(`Valor total del inventario: $${valorTotal}`);
    console.log(`Cantidad de lácteos: $${contadorLacteos}`);
    console.log(`El producto máscaro es: $${productoMasCaro.nombre}`);
    
};

generarInforme(inventario)