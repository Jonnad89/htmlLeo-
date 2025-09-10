/*
Repaso breve de funciones
*/
// Declaración
function saludar() {
    console.log("Hola")
}

// Expresión

const despedir = function() {
    console.log("Chau")
}


// Arrow function

const sumar = (a, b) => a + b;

/* Parámetros y valores por defecto */

function saludo( nombre= "invitado") {
    console.log(`Hola ${nombre}`)
}

saludo("Ana")
saludo()