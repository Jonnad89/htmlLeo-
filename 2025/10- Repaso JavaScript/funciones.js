// funcon declarada
function saludar() {
    console.log("Hola, Bienvenido")
}

saludar(); // llamada a la función

// funcion con parametros
function sumar(num1, num2) {
    let resultado = num1 + num2;
    console.log("El resultado de la suma es:", resultado)
}

sumar(25, 50)

// función que retorna valores
function multiplicar(num1, num2) {
    return num1 * num2;
}

let resultado = multiplicar(5,2);
console.log("El resultado de la multiplicación es: " + resultado)

// función flecha

const saludo = () => {
    console.log("Hola desde función flecha")
};

saludo();

// función flecha con parametros

const resta = (a, b) => {
    return a - b
}

console.log(resta(10, 3))

// sintaxis reducida 

const cuadrado = x => x * x;
console.log(cuadrado(3))

// función que reciba un nombre y devuelva un saludo

function hola(nombre) {
    return `Hola ${nombre}`
}

console.log(hola("Leo"))

// función que nos devuelva el mayor de dos numeros

function mayor(a, b) {
    return a > b ? a : b;
}

console.log(mayor(10, 5))

// funciones dentro de funciones

function operacion( a, b ) {
    function sumar( x, y ) {
        return x + y;
    }

    return sumar(a, b);
}

console.log(operacion(3, 9))