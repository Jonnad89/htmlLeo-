// Ejemplo práctico: Clase Producto

class Producto {
    //1. El constructor: se ejecuta al crear una nueva instancia
    constructor(nombre, precio, stock) {
        // 'this' se refiere a la instancia (el objeto) que estamos creando
        this.nombre = nombre;
        this.precio = precio;
        this.stock = stock;
        this.id = Date.now(); // Propiedad auto-generada
    }

    // 2. Método: Una acción que el objeto puede realizar
    vender(cantidad){
        if(this.stock >= cantidad){
            this.stock -= cantidad;
            console.log(`Vendidos ${cantidad} de ${this.nombre}. Stoy restante ${this.stock}`)
            return true
        } else {
            console.error(`ERROR: No hay suficiente stock de ${this.nombre}`)
            return false
        }
    }
}

//3. Creación de instancias (objetos) usando 'new'

const cafe = new Producto("Café en Grano", 15.50, 100);
const te = new Producto("Té Verde", 8.80, 50);

console.log(cafe) // Producto {nombre: "café en Grano", preco: 15.50,...}

//4. Uso del método
cafe.vender(10);
te.vender(60)// esto dará error