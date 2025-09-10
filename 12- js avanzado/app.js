// function contador() {
//     let num = 0;
//     return function() {
//         num++;
//         return num;
//     }
// }

// const contar = contador()
// console.log(contar())
// console.log(contar())

// métodos de arrays avanzados

const numeros = [1,2,3,4,5];

const cuadrados = numeros.map(n => n * n);
const pares = numeros.filter(n => n % 2 === 0);
const suma = numeros.reduce((acc, n) => acc + n, 0)

console.log(cuadrados, pares, suma)

/*
Objetos y destructuring
*/

const persona = { nombre : "Ana", edad : 25, pais : "AR" };
const {nombre , edad} = persona;
console.log(nombre, edad)

const arr = [1, 2, 3];
const [primero, ...resto] = arr;
console.log(primero, resto)

/* Asincronía */

function obtenerDatos() {
    return new Promise(resolve => {
        setTimeout(()=> resolve("Datos recibidos"), 2000)
    });
}

async function ejecutar() {
    console.log("Esperando...")
    const datos = await obtenerDatos()
    console.log(datos)
}

ejecutar()


