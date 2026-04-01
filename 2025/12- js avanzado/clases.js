// syntactic sugarde prototipos

class Persona {
    constructor(nombre) {
        this.nombre = nombre;
    }
    saludar() {
        console.log(`Hola, soy ${this.nombre}`)
    }
}

const juan = new Persona("Juan");
juan.saludar()

// subclases con extends

class Estudiante extends Persona {
    constructor(nombre, curso) {
        super(nombre);
        this.curso = curso;
    }
}