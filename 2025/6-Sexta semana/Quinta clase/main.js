/*
¿Qué es una función como valor'
las funciones se pueden guardar en variables, pasar como argumentos o retornar desde otras funciones
*/

function saludar(nombre) {
    console.log("Hola, " + nombre)
}

const otraFuncion =  saludar;

otraFuncion("Jonatan")

/* 
¿Qué es un callback?
Un callback es una función que se pasa como argumento a otra función para que se ejecute más tarde
*/

function procesarUsuario(nombre, callback) {
    callback(nombre)
}

function mostrarSaludo(nombre) {
    console.log("Hola, " + nombre)
}

procesarUsuario("Ana", mostrarSaludo)

// Funciones anónimas y funciones flecha

procesarUsuario("Maria", 
    function(nombre) {
        console.log("Hola desde una función anónima, " + nombre)
    }
)

/* 
setTimeOut() y setInterval() como ejemplos reales de callbacks
*/

setTimeout(()=> {
    console.log("Esto se ejecuta después de 2 segundos")
}, 2000)

let contador = 0;
const intervalo = setInterval(()=> {
    contador++;
    console.log("Contador:", contador);
    if (contador === 5)clearInterval(intervalo)
}, 1000);

/*
Funciones dentro de métodos de Arrays
*/

// forEach


const frutas = ["manzana", "banana", "pera"];
frutas.forEach((fruta) => {
    console.log("Fruta:", fruta)
})

// map

const numeross = [1,2,3];
const dobles = numeross.map(n => n * 2)
console.log(dobles)

// filter

const edades = [12, 18, 32, 19];
const mayores = edades.filter(edad => edad >= 18)
console.log(mayores)
