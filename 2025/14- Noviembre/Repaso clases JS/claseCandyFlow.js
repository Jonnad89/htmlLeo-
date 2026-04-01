class MateriaPrima {
    //El constructor define las PROPIEDADES esenciales al crear el objeto
    constructor(nombre, unidad, stockInicial, costoUnitario) {
        this.nombre = nombre;
        this.unidad = unidad;
        this.stock = stockInicial;
        this.costo = costoUnitario;
    }

    // Método 1: Acción para sumar stock (reposición)
    reponer(cantidad){
        this.stock += cantidad;
        console.log(`Stock de ${this.nombre} actualizado. Nuevo stock: ${this.stock}`)
    }

    // Método 2: Acción para restar stock (consumo en producción)
    consumir(cantidad) {
        if(this.stock >= cantidad) {
            this.stock -= cantidad;
            console.log(`Consumidos ${cantidad} ${this.unidad} de ${this.nombre}`)
            return true
        } else {
            console.error(`ERROR: Stock insuficiente de ${this.nombre}`)
            return false
        }
    }

    // Método 3: Cálculo (lógica especifica de la clase)
    calcularValorTotal() {
        return this.stock * this.costo
    }
}

// Creamos DOS instancias (objetos) de MateriaPrima:

const stockAzuar = new MateriaPrima("Azúcar", "KG", 50, 0.80)
const stockEnvoltorios = new MateriaPrima("Envoltorios", "unidades", 200, 0.05);

console.log("---Inventario Inicial---")
console.log(`El valor de ${stockAzuar.nombre} es: $$${stockAzuar.calcularValorTotal().toFixed(2)}`)
console.log(`El stock actual de ${stockEnvoltorios.nombre} es: ${stockEnvoltorios.stock}`)

// Uso de métodos
console.log("\n--- Consumo de Producción ---")
//1. Intentamos consumir más de lo que tenemos
stockAzuar.consumir(60) // Salida: ERROR
console.log(`Stock Azúcar después del intento: ${stockAzuar.stock} Kg`)
//2. reponemos stock
stockEnvoltorios.reponer(500); // stock aumenta de 200 a 700
console.log(`Stock Envoltorios después de reponer: ${stockEnvoltorios.stock} unidades.`)

// 3. Consumimos correctamente
stockAzuar.consumir(10) // Ahora si consume
console.log(`Stock Azúcar final: ${stockAzuar.stock} Kg`) // Queda en 40
