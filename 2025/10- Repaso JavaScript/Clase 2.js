// document.querySelector("h1").addEventListener("click", ()=> {
//     alert("Hola, hiciste click en el título")
// })

// Variables 
// let puede cambiar su valor
// Const no puede cambiar su valor
// var es más antigua y no se recomienda usarla


/*
Tipos de datos:
strings - Números - Boolanos - Null- Undefined - NaN 
*/

// strings
let nombre = "Leonardo";

// Números
let edad = 27;

// Booleanos (verdadero o falso)
let esMayor = true;

// null -> es un valor intencionalmente vacío
let resultado = null;
// console.log(resultado)

//  undefined -> significa que aún no se le asignó un valor

let usuario;
// console.log(usuario)

// NaN (Not a Number) -> ocurre  cuando una operación que espera un número falla.
let resultado2 = "hola" *2;
// console.log(resultado2)

/*
Operaores 
+ suma
- resta
* multiplicación 
/ división
% módulo -> resto de la división
*/

let total = 10 % 4;
console.log(total)

/*
operadores de comparación -> devuelven un booleano true o false

==      igual (sin tipo)
===     igual (estrictamente)
!=      distinto (in tipo)
!==     ditinto (estricto)
>       mayor que
<       mennor que
>=      mayor o igual
<=      menor o igual
*/

let igualEstricto = 5 === "5";
let igualSinTipo = 5 == "5";
console.log(igualEstricto)
console.log(igualSinTipo)

/*
Operadores Lógicos
se usan para combinar condiciones

&&      Y(AND)
!       NO(NOT, negación)
||      O(OR)
*/

let falso = true && false
let verdadero = true || false
let invertido = !true
console.log(falso)
console.log(verdadero)
console.log(invertido)

// Concatenación -> unir textos o texto + número

let saludo = "Hola " + "Mundo."
console.log(saludo)
let mensaje = "Tengo " + 3 + " años"
console.log(mensaje)

/*
Estructuras de control
Son herramientas que nos permiten ejecutar ciertas
instrucciones solo si se cumplen ciertas condiciones.

por ejemplo -> if, else, else if
¿cómo funciona?
El programa evalúa una condición. Si es verdadera
se ejecuta un bloque de código.
Si no, puede ejecutar otro bloque alternativo (else)
o probar otra condición (else if)

ej:
if (condición) {
    // Código si la condición es verdadera
} else {
    // Código si la condición es falsa    
} 
*/


let edad1 = 27;

if (edad >= 18) {
    console.log("Podés entrar al club")
} else {
    console.log("Sos menor de edad")
}

// Condición con una nota para un exámen
let nota = 8;

if(nota >= 9) {
    console.log("Excelente")
} else if (nota >= 6) {
    console.log("Aprobado")
} else {
    console.log("Desaprobado")
}

// 🔥 Tip útil
// Pueden anidar condicionales o hacer condiciones más complejas con && u OR

let años = 27;
let tieneEntrada = true;

if (años >= 18 && tieneEntrada) {
    console.log("Bienvenido al evento")
} else {
    console.log("No podés ingresar")
}

/*
Condicional switch

¿Para qué sirve?

Cuando tenés muchas opciones posibles basadas en el mismo valor
switch es más limpio que varios if else.

Sintaxis:
switch (valor) {
case opcion1:
    codigo si valor === opcion1
    break;
case opcion2:
    código si valor === opcion2
    break;
default;
    código si no coincide ningún caso
}
*/