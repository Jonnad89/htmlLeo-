Objetivo: Crear una función aplicarDescuentos(productos, cupones) que reciba un array de productos y un objeto con porcentajes de descuento por categoría. Debe devolver una nueva lista con los precios finales calculados.

Entrada de prueba:

JavaScript
const productos = [
  { nombre: "Remera", precio: 10000, categoria: "ropa" },
  { nombre: "Lavarropas", precio: 250000, categoria: "electro" },
  { nombre: "Pantalón", precio: 20000, categoria: "ropa" }
];
const cupones = { ropa: 20, electro: 10 }; // 20% en ropa, 10% en electro
Resultado esperado: Retornar los productos con la propiedad precioFinal agregada (ej: Remera a 8000).

=====================================================================================================

Ejercicio 2: Detector de Picos e Incoherencias (Análisis de Datos)

Objetivo: Crear una función detectarAnomalias(lecturas, limite) que reciba un array de números (temperaturas o métricas) y devuelva los índices de las lecturas que superen el límite o que hayan tenido un salto brusco (más de 15 unidades de diferencia con la lectura anterior).

Entrada de prueba: [22, 23, 24, 45, 25, 26, 10] con límite 40.

Resultado esperado: [3, 6] (índice 3 supera 40 y salta de 24 a 45; índice 6 cae bruscamente de 26 a 10).

=====================================================================================================

Ejercicio 3: Historial de Reproducción y Puntos (Streaming / Gamificación)

Objetivo: Dada una lista de eventos de usuarios viendo contenido, crear una función obtenerTopUsuarios(eventos) que agrupe los minutos consumidos por usuario, calcule 10 puntos por cada hora completa reproducida y devuelva un array ordenado de mayor a menor por puntos.

Entrada de prueba:

JavaScript
const eventos = [
  { usuario: "Leo", minutos: 120 },
  { usuario: "Roma", minutos: 45 },
  { usuario: "Leo", minutos: 70 },
  { usuario: "Roma", minutos: 80 }
];
Resultado esperado:
[{ usuario: "Leo", puntos: 30 }, { usuario: "Roma", puntos: 20 }] (Leo sumó 190 min = 3 horas completas = 30 pts; Roma sumó 125 min = 2 horas completas = 20 pts).

=====================================================================================================

Ejercicio 4: Balance de Cuenta con Control de Transacciones (Finanzas)

Objetivo: Crear una función procesarMovimientos(saldoInicial, movimientos) que reciba el saldo inicial y una lista de transacciones ({ tipo: "ingreso" | "egreso", monto: X }). La función debe procesar las transacciones en orden, pero rechazar los egresos que dejen la cuenta en negativo, devolviendo el saldo final y la lista de movimientos rechazados.

Entrada de prueba:
saldoInicial = 5000
movimientos = [{ tipo: "egreso", monto: 3000 }, { tipo: "egreso", monto: 4000 }, { tipo: "ingreso", monto: 2000 }]

Resultado esperado:

JavaScript
{
  saldoFinal: 4000, // 5000 - 3000 = 2000; el de 4000 se rebota; + 2000 = 4000
  rechazados: [{ tipo: "egreso", monto: 4000 }]
}
=====================================================================================================