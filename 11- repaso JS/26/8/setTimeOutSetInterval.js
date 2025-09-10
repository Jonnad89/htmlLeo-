setTimeout(() => {
    console.log("Esto se va a ejecutar después de 2 segundos")
}, 2000)

let contador = 0;
const intervalo = setInterval(()=> {
    contador++;
    console.log("Contador: ", contador);
    if (contador === 5) clearInterval(intervalo)
}, 1000)

// Funciones dentro de métodos de Arrays

const frutas = ["manzana", "banana", "pera"];

frutas.forEach((fruta) => {
    console.log("Fruta:", fruta)
})

// map 
const numeros = [1, 2, 3];
const dobles = numeros.map(n => n * 2);
console.log(dobles)

// filter
const edades = [12, 18, 22, 15];
const mayores = edades.filter(edad => edad >= 18);
console.log(mayores)