function aplicarDescuentos(productos, cupones) {
    return productos.map(producto => {
        const porcentajeDescuento = cupones[producto.categoria] || 0;
        const descuento = (producto.precio * porcentajeDescuento) / 100;
        const precioFinal = producto.precio - descuento;

        return {
            ...producto,
            precioFinal: precioFinal
        };
    });
}

// Prueba:
const productos = [
    { nombre: "Remera", precio: 10000, categoria: "ropa" },
    { nombre: "Lavarropas", precio: 250000, categoria: "electro" },
    { nombre: "Pantalón", precio: 20000, categoria: "ropa" }
];
const cupones = { ropa: 20, electro: 10 };

console.log(aplicarDescuentos(productos, cupones));


// ==================================================

function detectarAnomalias(lecturas, limite) {
    const indicesAnomalos = [];

    lecturas.forEach((valor, i) => {
        const superaLimite = valor > limite;
        
        // Verificamos el salto respecto a la lectura anterior (si existe)
        let saltoBrusco = false;
        if (i > 0) {
            const diferencia = Math.abs(valor - lecturas[i - 1]);
            if (diferencia > 15) saltoBrusco = true;
        }

        if (superaLimite || saltoBrusco) {
            indicesAnomalos.push(i);
        }
    });

    return indicesAnomalos;
}

// Prueba:
const lecturas = [22, 23, 24, 45, 25, 26, 10];
console.log(detectarAnomalias(lecturas, 40)); 
// Resultado: [3, 6]

// ==========================================================================

function obtenerTopUsuarios(eventos) {
    const acumulado = {};

    // 1. Sumar minutos por usuario
    eventos.forEach(ev => {
        acumulado[ev.usuario] = (acumulado[ev.usuario] || 0) + ev.minutos;
    });

    // 2. Calcular puntos (10 pts por cada 60 min completos)
    const ranking = Object.keys(acumulado).map(usuario => {
        const minutosTotales = acumulado[usuario];
        const horasCompletas = Math.floor(minutosTotales / 60);
        
        return {
            usuario: usuario,
            puntos: horasCompletas * 10
        };
    });

    // 3. Ordenar de mayor a menor por puntos
    return ranking.sort((a, b) => b.puntos - a.puntos);
}

// Prueba:
const eventos = [
    { usuario: "Leo", minutos: 120 },
    { usuario: "Roma", minutos: 45 },
    { usuario: "Leo", minutos: 70 },
    { usuario: "Roma", minutos: 80 }
];

console.log(obtenerTopUsuarios(eventos));
// Resultado: [{ usuario: "Leo", puntos: 30 }, { usuario: "Roma", puntos: 20 }]

// ==========================================================================

function procesarMovimientos(saldoInicial, movimientos) {
    let saldoActual = saldoInicial;
    const rechazados = [];

    movimientos.forEach(transaccion => {
        if (transaccion.tipo === "ingreso") {
            saldoActual += transaccion.monto;
        } else if (transaccion.tipo === "egreso") {
            // Validar que el egreso no supere el saldo disponible
            if (transaccion.monto <= saldoActual) {
                saldoActual -= transaccion.monto;
            } else {
                rechazados.push(transaccion);
            }
        }
    });

    return {
        saldoFinal: saldoActual,
        rechazados: rechazados
    };
}

// Prueba:
const saldoInicial = 5000;
const movimientos = [
    { tipo: "egreso", monto: 3000 },
    { tipo: "egreso", monto: 4000 },
    { tipo: "ingreso", monto: 2000 }
];

console.log(procesarMovimientos(saldoInicial, movimientos));
// Resultado: { saldoFinal: 4000, rechazados: [{ tipo: "egreso", monto: 4000 }] }