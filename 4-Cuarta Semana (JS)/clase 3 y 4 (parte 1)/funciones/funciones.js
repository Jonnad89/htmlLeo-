// Sitaxis básica

function saludar(nombre, edad) {
    console.log("Hola " + nombre + edad)
}

saludar(); // llamada a la función
saludar(nombre="Jonatan") 
saludar("Lucía ", 34) // reconoce el orden en cual están colocados los parámetros

// Funciones que retornar valores

function sumar(a, b) {
    return a + b
}

let resultado = sumar( 5, 3 );
console.log("Resultado:",resultado )

function mostrar() {
    console.log("Hola")
}

mostrar; // Esto NO ejecuta la función
mostrar(); // Eso SI ejecuta la función

// Funciones flecha (arrow function)

const saludo = () => {
    console.log("Hola desde función flecha")
}

saludo()

// función flecha con parámetros

const multiplicar = ( a, b ) => {
    return a * b; 
};

console.log(multiplicar(4,5));

// Sintaxis aún más reducida (cuando retorna en una línea)

const cuadrado = x => x *x;
console.log(cuadrado(3))

// Scope local

function ejemplo() {
    let mensaje = "Hola"
    console.log(mensaje)
}

ejemplo();
// console.log(mensaje) Error: mensaje no está definido fuera de la función

// Scope global

let saludo2 = "Hola, global";

function mostrarSaludo() {
    console.log(saludo2); // Accede porque es global
}

mostrarSaludo();