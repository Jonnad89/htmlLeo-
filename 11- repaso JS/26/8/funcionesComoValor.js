function saludar(nombre) {
    console.log("Hola, " + nombre);
}

const otraFuncion = saludar;

otraFuncion("Jonatan")
otraFuncion("Leo")
otraFuncion("Juan")

// Callback -> es una función que se pasa como argumento a otra función para que se ejecute más tarde

function procesarUsuario(nombre, callback) {
    callback(nombre);
}

function mostrarSaludo(nombre) {
    console.log("Hola, " + nombre);
}

procesarUsuario("Leo", mostrarSaludo)

procesarUsuario("María", function(nombre) {
    console.log("Hola desde una función anónima, " + nombre)
})

// función flecha

procesarUsuario("Lucas", (nombre) => {
    console.log("Hola desde función flecha, " + nombre)
})

