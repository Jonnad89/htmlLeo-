class Persona {
    constructor(nombre) {
        this.nombre = nombre;
    }
}

// Agregar un método a TODAS las instancias ( prototipo )

Persona.prototype.saludar = function () {
    console.log(`Hola, soy ${this.nombre}`)
}

let p1 = new Persona("Ana");
p1.saludar()

// console.log(Persona) -> De esta manera te devuelve [class Persona]