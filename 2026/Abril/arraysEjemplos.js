// 1- Radar de seguridad 

const sensores = [
    { id: "A1", temp: 25 },
    { id: "B2", temp: 85 },
    { id: "C3", temp: 30 },
    { id: "D4", temp: 90 },
];

// El filtro busca solo los "Peligrosos"

const alertas = sensores.filter(s => s.temp > 80);
console.log("--- SENSORES EN CRÍTICO ---");
console.log(alertas);

// Conversor de Moneda 

const preciosUSD = [10, 50, 100, 5];

// map transforma cada número: multiplica por 1000

const preciosARS = preciosUSD.map(precio => {
    return precio * 1000;
});

console.log(preciosARS);

// Carrito de descuento

const carrito = [
    { nombre : "Pan", precio: 100, esencial: true },
    { nombre : "Vino", precio: 500, esencial: false },
    { nombre : "Leche", precio: 200, esencial: true },
];

const totalPagar = carrito.reduce((acumulador, producto) => {
    if (producto.esencial){
        return acumulador + (producto.precio * 0.9); // Aplicamos descuento
    } else {
        return acumulador + producto.precio; // suma normal
    }
}, 0); 

console.log(`Total con descuentos aplicados: ${totalPagar}`);


// Velocidades Normal o exceso

const velocidades = [60, 120, 80, 140];

const reporte = velocidades.map(v => {
    // Si la velocidad es mayor a 100, devolvemos "EXCESO", s no "NORMAL"
    if( v > 100 ) {
        return "EXCESO";
    } else {
        return "NORMAL"
    }
});

console.log(reporte);


// Simular sistema de control de aeropuerto

const pasajeros = [
    { nombre : "Marcos", pasaporte: "Válido", maleta: 15 },
    { nombre : "Julieta", pasaporte: "Vencido", maleta: 20 },
    { nombre : "Roberto", pasaporte: "Válido", maleta: 25 },
    { nombre : "Lucía", pasaporte: "Válido", maleta: 10 },
    { nombre : "Damián", pasaporte: "Vencido", maleta: 30 },
]


const puedenViajar = pasajeros.filter(p => p.pasaporte === "Válido");
// console.log(puedenViajar);

const listaEmbarque = puedenViajar.map(p => {
    return `Pasajero ${p.nombre} - Maleta de ${p.maleta}kg`
});

const pesoTotal = puedenViajar.reduce((acumulador, p) => {
    return acumulador + p.maleta;
}, 0)

console.log("Lista de embarque");

console.log("-------------------------------------");
listaEmbarque.forEach(linea => console.log(linea));

console.log("-------------------------------------");
console.log(`PESO TOTAL EN BODEGA: ${pesoTotal}kg`);


