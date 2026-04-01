// Destructuring -> Extraer propiedades de un objeto de forma limpia

const user = { nombre: "Roma", edad: 25, ciudad: "CABA" };

// En lugar de: const nombre = user.nombre
const { nombre, ciudad } = user;

console.log(`${nombre} vive en ${ciudad}`)

// Spread Operator (...)

// Sirve para "esparcir" los elementos. Es vital para no mutar arrays.

const frutas = ["manzana", "pera"];
const masFrutas = [...frutas, "banana"];

console.log(masFrutas)

// Mini-E-commerce
const ventas = [
    { art: "Laptop", precio: 1000, stock: true },
    { art: "Mouse", precio: 25, stock: false },
    { art: "Teclado", precio: 50, stock: true },
    { art: "Monitor", precio: 300, stock: true}
];
// filter
const productosConStock = ventas.filter(producto => producto.stock);
// console.log(productosConStock)

// Array solo con nombres

/* 
Sobre el resultado anterior (o el original), vamos a usar .map() para transformar los objetos
 en simples strings con el nombre del artículo.
*/

const nombresConStock = productosConStock.map(producto => producto.art);
// console.log(nombresConStock)

// Calcular el costo total
/*
Usamos .reduce() para sumar los precios. Acá es vital pasarle el 0 como valor inicial para que empiece
la cuenta correctamente
*/

const costoTotal = ventas.reduce((acumulador, producto) => acumulador + producto.precio, 0)
console.log(costoTotal)

const nombresDisponibles = ventas
    .filter(p => p.stock)
    .map(p => p.art)

console.log(`Los productos disponibles son: ${nombresDisponibles.join(", ")}`)