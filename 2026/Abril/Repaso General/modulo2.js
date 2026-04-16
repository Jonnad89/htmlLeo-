/**
 * MÓDULO 2: ESTRUCTURAS DE DATOS (OBJETOS Y ARRAYS)
 * El objetivo es aprender a agrupar infomacion relacionada
 */

// --- 1. OBJETOS (Ficha técnica) ---
// Un objeto agrupa propiedades de una sola cosa.

const usuario = {
    nombre: "Jonatan",
    apellido : "Perez",
    edad: 30,
    esPremium: true,
    hobbies: ["Programar", "Gimnasio"], // Un objeto puede tener arrays dentro
    direccion: {                        // Y también otros objetos
        ciudad: "Berisso",
        provincia: "Buenos Aires"
    }
};

// ¿Cómo accedemos a los datos? (Notación de punto)
console.log(`Nombre completo: ${usuario.nombre} ${usuario.apellido}`);
console.log(`Vive en: ${usuario.direccion.ciudad}`);

// --- 2. ARRAYS (listas de elementos) --- 

const frutas = ["Manzana", "Banana", "Naranja"];

// Acceder por índice (Empezando siempre desde 0)
console.log("Primera fruta:", frutas[0]); // Manzana

// ---3. MÉTODOS BÁSICOS DE ARRAYS (Modificar la lista) ---

frutas.push("Uva"); // Aregar al final
console.log(frutas);
frutas.unshift("Pera"); //Agrega al principio
console.log(frutas);
frutas.pop(); // Saca el último
console.log(frutas);
frutas.shift(); // Saca el primero
console.log(frutas);

// --- 4. RECORRIENDO LISTAS (El método .forEach) ---
// Es la forma más usada para pasar por cada elemento de un array

const alumnos = ["Roma", "Leo", "Jona", "Mayra", "Lucas"];

console.log("--- Lista de Alumnos ---");
alumnos.forEach((alumno, indice) => {
    console.log(`${indice + 1}. ${alumno}`);    
});

// --- 5. ARRAY DE OBJETOS (El estándar de la industria) ---
// Así es como vienen los datos en cualquier aplicación real

const productos = [
    {id : 1, nombre: "Mouse", precio: 2500},
    {id : 2, nombre: "Teclado", precio: 5000},
    {id : 3, nombre: "Monitor", precio: 45000},
];

// Ejemplo de cómo mostrar los precios:
productos.forEach(p => {
    console.log(`Producto: ${p.nombre} | Precio ${p.precio}`);  
});

// --- Ejercicio de práctica
// El gestor de inventario

const inventario = [
    {nombre : "Laptop", stock: 5},
    {nombre : "Celular", stock: 0},
    {nombre : "Tablet", stock: 12},
];

console.log("\n --- REPORTE DE STOCK ---");

inventario.forEach(item => {
    if ( item.stock > 0 ) {
        console.log(`${item.nombre}: Hay ${item.stock} unidades.`);
    } else {
        console.log(`${item.nombre}: AGOTADO`);        
    }
})
