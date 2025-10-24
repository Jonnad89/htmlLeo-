/**
 * Calcula el monto total de la bonificación para cada empleado según su asistencia y cargo.
 *
 * @param {object[]} empleados Array de objetos de empleados ({ nombre, sueldo, asistencia, cargo }).
 * @returns {object[]} Un nuevo array de objetos que incluye la propiedad 'bonoTotal'.
 */
function calcularBonificacion(empleados) {
    // Usamos .map() para iterar sobre el array original y devolver un nuevo array
    return empleados.map(empleado => {
        let porcentajeBono = 0.10; // Regla 1: Bono básico del 10% (0.10)

        // Aplicamos las reglas desde la más alta/restrictiva (Regla 3)
        // hasta la más general (Regla 1).

        // Regla 3: Gerente AND 100% de asistencia (10% extra + 10% base = 20%)
        if (empleado.cargo === 'gerente' && empleado.asistencia === 100) {
            porcentajeBono = 0.20; // 20% total (10% base + 10% extra)
        } 
        // Regla 2: Asistencia igual o superior a 90% (5% extra + 10% base = 15%)
        else if (empleado.asistencia >= 90) {
            porcentajeBono = 0.15; // 15% total (10% base + 5% extra)
        }
        // Si no cumple ninguna condición extra, queda el 10% básico.

        // Calcular el monto total del bono
        const bonoTotal = empleado.sueldo * porcentajeBono;

        // Devolver un nuevo objeto (inmutabilidad) con el bono calculado
        return {
            ...empleado, // Copia todas las propiedades originales
            bonoTotal: parseFloat(bonoTotal.toFixed(2)) // Añade la nueva propiedad
        };
    });
}

// --- Estructura de Entrada ---
const empleados = [
    { nombre: 'Ana', sueldo: 50000, asistencia: 95, cargo: 'desarrollador' },  // 15%
    { nombre: 'Luis', sueldo: 80000, asistencia: 100, cargo: 'gerente' },     // 20%
    { nombre: 'Marta', sueldo: 30000, asistencia: 70, cargo: 'asistente' },    // 10%
    { nombre: 'Pedro', sueldo: 60000, asistencia: 100, cargo: 'analista' }     // 15%
];

const empleadosConBono = calcularBonificacion(empleados);

console.log('--- Empleados con Bonificación ---');
console.log(empleadosConBono);

// --- Resultados Detallados ---
/*
Ana (95%, Desarrollador): 50000 * 0.15 = 7500
Luis (100%, Gerente): 80000 * 0.20 = 16000
Marta (70%, Asistente): 30000 * 0.10 = 3000
Pedro (100%, Analista): 60000 * 0.15 = 9000
*/