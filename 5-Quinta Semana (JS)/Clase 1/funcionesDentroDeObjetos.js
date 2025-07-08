let perro = {
    nombre : "Toby",
    ladrar : function() {
        console.log("¡Guau!")
    }
};

perro.ladrar()

let gato = {
    nombre : "Mishi",
    saludar() {
        console.log(`Hola, soy ${this.nombre}`) // podés usar gato.nombre en lugar de this.nombre
    }
}

gato.saludar()