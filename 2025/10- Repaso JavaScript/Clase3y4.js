// Switch 

let dia = "míercoles";

switch (dia) {
    case "lunes":
        console.log("Comienza la semana");
        break;
    case "míercoles":
        console.log("mitad de semana");
        break;
    case "viernes":
        console.log("último día de la semana");
        break;
    default: 
    console.log("Día no reconocido")
}

/*
¿Cuándo usar if / else o switch?

if / else ccuando hay una o pocas condiciones a evaluar
switch cuando hay muchas opciones de un mismo valor
*/

// ejemplo con if / else

let clima = "nublado";

if (clima === "tormentoso") {
    console.log("no salgas")
} else if (clima === "lluvioso") {
    console.log("Usá paraguas")
} else if (clima === "nublado") {
    console.log("podes salir tranquilamente") 
} else {
    console.log("No reconozco el clima")
}


let numero = 8;

if (numero % 2 === 0) {
    console.log("el número es par");
} else {
    console.log("el número es impar")
}


let usuario = "Leo";
let clave = "1234";

if (usuario === "Leo" && clave === "1234") {
    console.log("Ingreso exitoso")
} else {
    console.log("Datos incorrectos")
}

// Validación multiple (edad + entrada + aprobación)

let edad = 20;
let entrada = true;
let aprobacion = false; 

if((edad >= 18 && aprobacion) || (edad >= 13 && aprobacion && entrada)) {
    console.log("Puede entrar al evento")
} else {
    console.log("No puede entrar")
}

// Verificación de contraseña segura

let contrasena = "segura123";

if(contrasena.length < 8) {
    console.log("la contraseña es muy corta")
} else if (!contrasena.includes("1") && !contrasena.includes("2") && !contrasena.includes("3")){
    console.log("La contraseña debe tener al menos un número")
} else {
    console.log("Contraseña segura")
}