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

let u = new Usuario("Jonatan", "joni@gmail.com")

u.mostrar()
u.actualizarCorreo("nuevoCorreo@gmail.com")
u.mostrar()
u.eliminarCorreo()
u.mostrar()