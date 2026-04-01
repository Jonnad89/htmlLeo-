/* 
- Acceso dinámico: No solo usar punto (objeto.propiedad), sino también corchetes
(objeto['propiedad']), que es vital cuando la propiedad viene de una variable

- Shorthand properties: Si el nombre de la variable es igual al de la propiedad, no hace falta repetirlo
*/

const nombre = "Monitor";
const precio = 300;

// En lugar de {nombre: nombre, precio: precio}

const producto = {nombre, precio}
console.log(producto)

/*
=== Clases ===
Las classes en JS son "maquetas" para crear objetos. Aunque por debajo JS use prototipos, la sintaxis
de clase es la estandar de hoy.

** conceptos**

Constructor: El método que se ejecuta apenas haces new. Sirve para inicializar las propiedades.

Métodos: Las "acciones" que el objeto puede hacer.

Getters y Setters: Para obtener o modificar valores con lógica extra (ej: validar que un precio no sea
 negativo)

*/

class Producto {
    constructor(nombre, precio, stock) {
        this.nombre = nombre;
        this.precio = precio;
        this.stock = stock;
    }

    // Un método para aplicar un descuento
    aplicarDescuento(porcentaje) {
        this.precio -= (this.precio * porcentaje) / 100; 
        return `Nuevo precio de ${this.nombre}: $${this.precio}`
    }
}

// Insstanciando (Creando el objeto real)
const miLaptop = new Producto("Laptop Pro", 1000, true);
console.log(miLaptop.aplicarDescuento(10))

// Herencia
// Un ProductoElectronico que hereda de Producto pero agrega garantia

class ProductoElectronico extends Producto {
    constructor(nombre, precio, stock, mesesGarantia) {
        super(nombre, precio, stock); // Llama al constructor del padre
        this.mesesGarantia = mesesGarantia
    }
}

const miCelular = new ProductoElectronico("S24", 800, true, 12)
console.log(miCelular.aplicarDescuento(10))