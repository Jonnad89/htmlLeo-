// 1. BASE DE DATOS MOCK DE PRODUCTOS (CATÁLOGO)
const catalogo = [
    { codigo: "101", descripcion: "MEMORIA RAM 8GB DDR4", precio: 25000 },
    { codigo: "102", descripcion: "DISCO SOLIDO SSD 480GB", precio: 38000 },
    { codigo: "103", descripcion: "TECLADO MECANICO RGB", precio: 18500 },
    { codigo: "104", descripcion: "MOUSE OPTICO USB", precio: 6200 },
    { codigo: "105", descripcion: "MONITOR 24 FHDR 75HZ", precio: 120000 }
];

// 2. ESTADO DE LA VENTA ACTUAL
let carrito = [];
let totalVenta = 0;