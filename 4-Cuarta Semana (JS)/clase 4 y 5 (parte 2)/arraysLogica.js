// Crear un array con 5 nombres y mostrar cada uno en la consola

let personas = ["Lucía", "Andrés", "Marta", "Nico", "Luz"];

for ( let i = 0; i < personas.length; i++ ) {
    console.log(personas[i])
}

// Crear un array de números y devolver uno nuevo con los números al cuadrado usando map()

let numeros = [2, 3, 4];
let cuadrados = numeros.map(n => n * n);

console.log(cuadrados)

// Filtrar un array de edades para obetener solo mayores de edad

let edades = [12, 17, 19, 22, 15];
let mayores = edades.filter(e => e >= 18);

console.log(mayores)

// Verificar si un array contiene cierto valor usando "includes"

let lenguajes = ["HTML", "CSS", "JavaScript"];
console.log(lenguajes.includes("JavaScript"));