class Persona {
    constructor(nombre, edad) {
        this.nombre = nombre;
        this.edad = edad;
    }

    saludar() {
        console.log(`Hola soy ${this.nombre} y  tengo ${this.edad} años`);
    }
}

let persona1 = new Persona("Carla", 20);
let persona2 = new Persona("Julián", 22);

persona1.saludar();
persona2.saludar();