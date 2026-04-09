const auto = {
    marca : "Toyota",
    modelo : "Corolla",
    año : 2024,
    encendido : false
};

console.log(Object.keys(auto));
console.log(Object.values(auto));


// Acceder a los datos (notación de punto)
console.log(auto.marca);

// Un método es simplemente una función guardada dentro de una propiedad de un objeto

// el uso de this.

const perro = {
    nombre : "Burbuja",
    raza : "Labrador",
    saludar : function() {
        // Usamos 'this' para acceder al nobre del mismo objeto
        return `¡Guau! Me llamo ${this.nombre}`
    }
};

console.log(perro.saludar());

// Objetos dentro de objetos (Anidación)

const usuario = {
    id : 1,
    datosPersonales : {
        ciudad : "Berisso",
        provincia : "Buenos Aires"
    },
    hobbies : ["Programar", "Correr", "Cocinar"]
};

console.log(usuario.datosPersonales.ciudad);
console.log(usuario.hobbies[0]);


// Constructores (La fábrica de objetos)

class Producto {
    constructor(nombre, precio) {
        this.nombre = nombre;
        this.precio = precio;
    }
    aplicarDescuento(porcentaje) {
        this.precio = this.precio - (this.precio * porcentaje / 100);
        return `Nuevo precio de ${this.nombre}: $${this.precio}`;
    }
}

//Creamos "instancias" (objetos reales a partir del molde)

const tv = new Producto("Smart TV", 50000)
const cel = new Producto("Celular", 30000)

console.log(tv.aplicarDescuento(10));

// Métodos útiles: Object.keys y Object.values

const persona = {nombre: "Roma", edad : 25}

console.log(Object.keys(persona));
console.log(Object.values(persona));
