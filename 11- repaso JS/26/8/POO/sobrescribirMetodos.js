class Animal {
    constructor(nombre) {
        this.nombre = nombre;
    }

    hablar() {
        console.log(`${this.nombre} hace un sonido.`)
    }
}

let perro = new Animal("Toby");

// Sobrescribimos el método solo para "perro"
perro.hablar = function() {
    console.log(`${this.nombre} dice guau!`)
}

perro.hablar()

// Agregamos métodos a una instancia
perro.saludar = function() {
    console.log(`Hola, soy ${this.nombre}`)
}

perro.saludar()

class Persona {
    constructor(nombre) {
        this.nombre = nombre;
    }
}

// Agregamos un método a TODAS las instancias (prototipo)

Persona.prototype.saludar = function() {
    console.log(`Hola, soy ${this.nombre}`);
};

let p1 = new Persona("Juan");
p1.saludar()

/*
Recomendación para buenas prácticas:
- Modificar instancias es común y válido.
- Evitar eliminar propiedades que tu clase espera usar internamente
- Si necesitamos actualizar con reglas, mejor hacerlo con métoos "set" o funciones dentro de la clase
Por ejemplo...
*/

class Usuario {
    constructor(nombre, correo) {
        this.nombre = nombre;
        this.correo = correo;
    }

    actualizarCorreo(nuevoCorreo) {
        this.correo = nuevoCorreo;
    }

    eliminarCorreo() {
        delete this.correo;
    }

    mostrar() {
        console.log(`Usuario: ${this.nombre}, Correo: ${this.correo || "No definido"}`)
    }
}

let u = new Usuario("jonatan", "joni@gmail.com");

u.mostrar();
u.actualizarCorreo("jonna@hotmail.com")
u.mostrar();
u.eliminarCorreo();
u.mostrar();