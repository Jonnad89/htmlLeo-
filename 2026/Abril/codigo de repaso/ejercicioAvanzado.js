/**
 * EJERCICIO AVANZADO: SISTEMA DE TELEPASE
 * Conceptos: POO, Búsqueda, Filtrado y Acumuladores
 */

class Vehiculo {
    constructor(patente, tipo, saldo) {
        this.patente = patente;  
        this.tipo = tipo;   // Moto, Auto, Camión
        this.saldo = saldo;
    }

    cargarSaldo(monto) {
        this.saldo += monto;
        console.log(`Carga exitosa. Nuevo saldo de ${this.patente}: $${this.saldo}`)
    }
}

const PeajeHudson = {
    tarifas: {"Moto" : 200, "Auto" : 500, "Camión" : 1200},
    historialTransitos: [],
    recaudacionTotal: 0,

    cobrar(vehiculo){
        const costo = this.tarifas[vehiculo.tipo];

        // 1. VALIDACIÓN DE SALDO
        if (vehiculo.saldo >= costo) {
            vehiculo.saldo -= costo;
            this.recaudacionTotal += costo;


            //Registramos el tránsito como un objeto
            this.historialTransitos.push({
                patente: vehiculo.patente,
                tipo: vehiculo.tipo,
                fecha: new Date().toLocaleString(),
                costo: costo
            });
            console.log(`PASO AUTORIZADO: ${vehiculo.patente}. Buen viaje!`);
        } else {
            console.log(`SALDO INSUFICIENTE: ${vehiculo.patente} debe $${costo - vehiculo.saldo} para pasar.`);
        }
    },
    // MÉTODOS DE FILTRADO AVANZADO
    verTransitoPorTipo(tipo) {
        console.log(`--- Reporte de ${tipo}s ----`);
        const filtrados = this.historialTransitos.filter(t => t.tipo === tipo);
        console.table(filtrados);        
    },
    obtenerTotalPotTipo(tipo){
        const total = this.historialTransitos
            .filter(t => t.tipo === tipo)
            .reduce((acc, t) => acc + t.costo, 0);

        return `Total recaudado por $${tipo}s $${total}`;
    }
};

// --- SIMULACIÓN DE USO ---

const auto1 = new Vehiculo("ABC-123", "Auto", 2000);
const camion1 = new Vehiculo("TTT-999", "Camión", 1000) // Saldo bajo paraun camión
const moto1 = new Vehiculo("MOT-001", "Moto", 500)

PeajeHudson.cobrar(auto1)
PeajeHudson.cobrar(camion1) // Deberia fallar
PeajeHudson.cobrar(moto1)
PeajeHudson.cobrar(auto1)   // Pasa de nuevo

console.log(`Recaudación total del peaje: $${PeajeHudson.recaudacionTotal}`);

// Ver solo los autos que pasaron
PeajeHudson.verTransitoPorTipo("Auto")

// Ver cuanto dinero dejaron los autos
console.log(PeajeHudson.obtenerTotalPotTipo("Auto"));


/*

Agregar un método llamado litarPatentesUnicas(). Tiene que devolver un array que contenga las patentes que pasaron por el peaje,
pero sin repetirse (si el auto1 pasó dos veces, su patente debe aparecer una sola vez)

punto 2 resuelto:
const setSinRepetidos = new Set(todasLasPatentes)

*/ 