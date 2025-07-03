class Producto {
    constructor(nombre, precio) {
        this.nombre = nombre;
        this.precio = precio;
    }

    mostrar() {
        console.log(`Producto: ${this.nombre}, Precio: ${this.precio}`);
    }
}

let p1 = new Producto("Teclado", 8000)
let p2 = new Producto("Mouse", 6000)

p1.mostrar()
p2.mostrar()