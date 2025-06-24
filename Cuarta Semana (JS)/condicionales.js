/* 
if (condicion) {
    Código si la condición es verdadera o se cumple
} else {
    Código s la condición es falsa o no cumple la primera
}

*/

let edad = 17;

if (edad >= 18) {
    console.log("Podés entrar al club")
} else {
    console.log("Sos menor de edad")
}


let nota = 1;

if (nota >= 9) {
    console.log("Excelente");
} else if (nota >= 6) {
    console.log("Aprobado")
} else {
    console.log("Desaprobado")
}

let anios = 15;
let tieneEntrada = false;

if (anios >= 18 && tieneEntrada){
    console.log("Bienvenido al evento")
}
 

// Ejemplos
let contraseña = "1234";

if (contraseña === "1234") {
    console.log("Acceso concedido")
} else {
    console.log("Contraseña incorrecta")
}

let clima = "lluvioso";
if (clima === "soleado") {
    console.log("llevá anteojos de sol")
} else if ( clima === "lluvioso") {
    console.log("Llevá paraguas")
} else if (clima === "nublado") {
    console.log("Podés salir sin problemas")
} else {
    console.log("No reconozco el clima")
}

let numero = -1;

if (numero > 0) {
    console.log("El númmero es positivo")
} else if (numero < 0) {
    console.log("El número es negativo")
} else {
    console.log("El número es cero")
}

let nummeroPar = 7;

if (numero % 2 === 0) {
    console.log("El número es par")
} else {
    console.log("El númmero es impar")
}

let usuario = "admin";
let clave = 1234;

if (usuario === "admin" && clave === "secreta") {
    console.log("Ingreso exitoso")
} else {
    console.log("Datos incorrectos")
}

let tienePermiso = true ;

if (tienePermiso) {
    console.log("Acceso permitido")
} else {
    console.log("Acceso denegado")
}

let persona = "";
let contrasena = "12345"

if(persona === "admin" || contrasena === "") {
    console.log("Faltan completar campos")
} else if ( persona === "" && contrasena === "12345"){
    console.log("Login exitoso")
} else {
    console.log("Usuario o contraseña incorrectos")
}

let nota2 = 9;

if (nota2 < 0 || nota2 > 10) {
    console.log("Nota inválida");
} else if (nota2 >= 9) {
    console.log("Excelente");
} else if (nota2 >= 7) {
    console.log("Muy bien")
} else if (nota2 >= 4) {
    console.log("Regular")
} else {
    console.log("Desaprobado")
}


let password = "clave123";

if(password.length < 8) {
    console.log("La contraseña es muy corta")
} else if(!password.includes("1") && !password.includes("2") && password.includes("3")){
    console.log("La contraseña debe tener al menos un número")
} else {
    console.log("Contraseña segura")
}