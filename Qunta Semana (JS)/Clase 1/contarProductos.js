// Contar cuántos productos hay en stock mayor a 0

let inventario = [
    { nombre : "Laptop", stock : 5 },
    { nombre : "Tablet", stock : 0 },
    { nombre : "Smartphone", stock : 10 },
];

let enStock = 0;

for (let i = 0; i < inventario.length; i++) {
    if (inventario[i].stock > 0) {
        enStock++;
    }
}

console.log("Productos disponibles:", enStock)