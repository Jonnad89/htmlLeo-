// Crear un animal con nombre y especie, y un método para presentarse

class Animal {
    constructor(nombre, especie) {
        this.nombre = nombre;
        this.especie = especie;
    }

    hablar() {
        console.log(`${this.nombre} hace sonido`)
    }
}

let perro = new Animal ("Toby");

// sobrescribir métodos en una instancia
perro.hablar = function () {
    console.log(`${this.nombre} dice : ¡Guau!`)
}

perro.hablar()

// Agregar métodos a una instancia

perro.saludar = function() {
    console.log(`Hola, soy ${this.nombre}`)
}

perro.saludar()

// const perro = new Animal ("Toby", "perro")

// perro.desparacitado = true

// perro.presentarse()

// console.log(perro)

// delete perro.desparacitado
// console.log(perro)

// perro.nombre = "Mishi"
// perro.especie = "gato"

// console.log(perro)

