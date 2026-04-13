class Paciente {
    constructor(nombre, edad, historial = []) {
        this.nombre = nombre; 
        this.edad = edad;
        this.historial = historial; // Array de string (enfermedades previas)
        this.ingresado = false
    }

    // Un nmétodo que cambia el estado interno
    cambiarEstadoInterno() {
        this.ingresado = !this.ingresado;
        return `Estado de ${this.nombre}: ${this.ingresado ? "INGRESADO" : "ALTA"}`
    }

    agregarCondicion(condicion) {
        this.historial.push(condicion.toLowerCase());
        console.log(`Hitorial actualizado para: ${this.nombre}: ${condicion}`);
        
    }

    // agregarHistorial(condicion) {
    //     if (typeof condicion === "string") {
    //         this.historial.push(condicion)
    //     }
    // }
}

const ClinicaDB = {
    pacientes: [],

    // Método para agregar con validación
    nuevoPaciente: function(paciente) {
        if (paciente instanceof Paciente) {
            this.pacientes.push(paciente);
            console.log(`✅ ${paciente.nombre} agregado a la base de datos.`);
        } else {
            console.error("❌ Error: Lo que intentas agregar no es un objeto Paciente");            
        }
    },

    // BUSCAR: Usamos .find()
    buscarPorNombre: function(nombre) {
        return this.pacientes.find(p => p.nombre.toLowerCase() === nombre.toLowerCase())
    },

    // FILTRAR: Usamos .filter()
    obtenerMenores: function() {
        return this.pacientes.filter(p => p.edad < 18);
    },

    // TRANSFORMAR: Usamos .map()
    obtenerResummen: function(){
        return this.pacientes.map(p => {
            return {
                nombre: p.nombre,
                condiciones: p.historial.length,
                esMAyor: p.edad >= 18
            };
        });
    }
};

// Lógica de Negocio (procesamiento)

const procesarPrioridad = (paciente) => {
    let prioridad = "Baja";

    // Si tiene más de 65 años o historial de riesgo, es prioridad alta
    const condicionesRiesgo = ["diabetes", "hipertension", "corazon"];

    // El método .some() devuelve true si al menos un elemento cumple la condición
    const tieneRiesgo = paciente.historial.some(h => condicionesRiesgo.includes(h.toLowerCase()));

    if(paciente.edad > 65 || tieneRiesgo) {
       return prioridad = "ALTA (Urgente, atención inmediata) ";
    } else if (paciente.eda > 40) {
       return prioridad = "Media";
    } else {
        return "Prioridad baja"
    }

    // return `El paciente ${paciente.nombre} tiene prioridad: ${prioridad}`
};

// EJECUCIÓN DEL FLUJO (Simulación de Clase)

console.log("--- INICIANDO SISTEMA MÉDICO ---");

// A. Creamos los pacientes

const p1 = new Paciente("Santi", 22);
const p2 = new Paciente("Marta", 70, ["hipertension"]);
const p3 = new Paciente("Lucas", 19, ["diabetes"]);

// B. Agregamos datos extra
p1.agregarCondicion("Gripe");
p3.cambiarEstadoInterno(); 

// C. Los guardamos en nuestra base de datos
ClinicaDB.nuevoPaciente(p1)
ClinicaDB.nuevoPaciente(p2)
ClinicaDB.nuevoPaciente(p3)

// D. Analizamos prioridades

console.log("\n --- ANÁLISIS DE PRIORIDADES ---");
console.log(`${p1.nombre}: ${procesarPrioridad(p1)}`);
console.log(`${p2.nombre}: ${procesarPrioridad(p2)}`);
console.log(`${p3.nombre}: ${procesarPrioridad(p3)}`);

// E. Vemos el resumen de la clinica
console.log("\n --- ESTADO GENERAL DE LA CLÍNICA ---");
console.table(ClinicaDB.obtenerResummen());

// F. Intentar buscar un paciente
console.log("\n --- BUSQUEDA ---");
console.log(ClinicaDB.buscarPorNombre("Marta"));




