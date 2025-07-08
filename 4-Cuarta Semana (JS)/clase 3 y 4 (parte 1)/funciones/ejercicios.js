// Crear una función que reciba un nombre y devuelva un saludo personalizado

function saludar (nombre) {
    return `Hola, ${nombre}`// El signo $ y las llave {  } nos permite agregar JavaScript en una cadena de texto
}

console.log(saludar("Jonatan"))

// Función que determine si un númmero es par o immpar

function EsPar(numero) {
    return numero % 2 === 0;
}

console.log(EsPar(4))
console.log(EsPar(7))

// Función que devuelva el mayor de dos números

function mayor(a, b) {
    return a > b ? a : b;
    // if (a > b) {
    //     a
    // } else {
    //     b
    // }
}

console.log(mayor(10,5))

// Función que calcule el factorial de un número

function factorial(n) {
    let resultado = 1;
    for (let i = 1; i <= n; i++) {
        resultado *= i;
    }
    return resultado
}

console.log(factorial(5)) // esto es: 5! = 5 * 4 * 3 * 2 * 1 = 120

//funciones dentro de funciones 

function operacion(a , b) {
    function sumar(x, y) {
        return x + y;
    }

    return sumar(a ,b)
}

console.log(operacion(3,4))


// ¿Qué pasa si no uso return? - La función no devuelve ningún valor. Si intentamos guardar su resultado, será undefined
// function decirHola(nombre) {
//     console.log("Hola " + nombre)
// }

// let resultado = decirHola("Jonatan");
// console.log(resultado)