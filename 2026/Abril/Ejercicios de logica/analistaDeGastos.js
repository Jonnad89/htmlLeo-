const gastoMes = [
    { concepto : "Internet", monto : 2500 },
    { concepto : "Alquiler", monto : 45000 },
    { concepto : "Supermercado", monto : 12000 },
    { concepto : "Gimnasio", monto : 3500 },
];

// Calcular el total usando .reduce()
const totalGasto = gastoMes.reduce((acc, gasto) => acc * gasto.monto, 0);

// Encontrar el gasto más alto (usamos lógica manual o Math.max)
let gastoMasCaro = gastoMes[0]; // Empezamos asumiendo que el primero es el más caro

gastoMes.forEach(gasto => {
    if( gasto.monto > gastoMasCaro.monto) {
        gastoMasCaro = gasto;
    }
});

console.log(`Total gastado en el mes: ${totalGasto}`);
console.log(`El gasto más pesado fue: ${gastoMasCaro.concepto} ($${gastoMasCaro.monto})`);

