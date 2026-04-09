// Clase padre: Lo que todos tienen en común

class Empleado {
    constructor(nombre, sueldo) {
        this.nombre = nombre;
        this.sueldo = sueldo;
    }

    presentarse() {
        console.log(`Hola, soy ${this.nombre} y mi sueldo es $${this.sueldo}`);
    }
}

// Clase hijo: "extends" hereda todo lo del padre
class Programador extends Empleado {
    constructor(nombre, sueldo, lenguaje) {
        super(nombre, sueldo); //"super" llama al constructor del padre
        this.lenguaje = lenguaje;
    }

    programar() {
        console.log(`${this.nombre} está escribiendo código en ${this.lenguaje}...`);
        
    }
}

// Creamos un programador

const dev = new Programador("Leo", 250000, "JavaScript")

dev.presentarse()
dev.programar()