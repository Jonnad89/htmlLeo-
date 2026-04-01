/* 
Para ejecutar un archivo de js en la consola usamos:
node "nombre del archivo" por ejemplo para ejecutar este mismo seria:
node .\main.js 
*/ 

// Esto es un comentario de una sola línea


/*
Esto es un comnetario
que ocupa más de una línea
*/

// No usar var NUNCA
// var pais = "Argentina";
// console.log(pais)

// var pais = 45
// console.log(pais)

// var pais = true
// console.log(pais)

let nombre = "Jonatan"; // Let puede cambiar su valor después
const edad = 36;        // No puede cambiar su valor
console.log(nombre)
console.log(edad)
nombre = "Nícolas";
console.log(nombre)

let precio = 19.99;
let esMayor = true;
let tienePermiso = false;

// null -> Es un valor intencionalmente vacío

let resultado = null;
console.log(null)
// undefined -> Significa que aún no se le asignó un valor
let usuario;
console.log(usuario)

let result = "hola" * 2;
console.log(result)

// Operadores 

/* 
+ Suma
- Resta
* Multiplicación
/ División
% módulo (resto)
*/

let total = 10 + 5;
console.log(total)

// Operadores de comparación devuelve true o false

/*
==          -> igual(sin tipo)

===         -> igual (estrictamente)

!=          -> Distinto (sin tipo)

!==         -> Distinto (estricto)

>           -> Mayor que

<           -> Menor que

>=          -> Mayor o igual

<=          -> Menor o igual

*/


console.log(5 == "5")

console.log(5 === "5")

// Lógicos

/*
&&          -> Y (AND)
||          -> O (OR)
!           -> No (NOT, negación)
*/

console.log(true && false)
console.log(true || false)
console.log(!true)

let anios = edad +1;
anios += 1; // igual a edad = edad +1
anios -= 2; // igual a edad = edad -2
console.log(anios)

let saludo = "Hola " + "Mundo"
console.log(saludo)

let mensaje = "Tengo " + 36 + " años"
console.log(mensaje)