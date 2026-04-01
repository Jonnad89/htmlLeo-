/*
var: Forma antigua de declarar variables, su uso está en desuso en favor de let y const 
debido a problemas de alcance (scope)

let: Se usa para declarar variables que pueden cambiar su valor

const: Se usa para declarar variables constantes, es decir, variables cuyo valor no cambiará
*/

let nombre = "Ana" // Se puede cambiar su valor
const PI = 3.14159 // Su valor no se puede cambiar

// Operadores básicos

let suma = 5+3;
let resta  = 9-3;
let multiplicacion = 4*3;
let division = 9/3;

console.log(suma)
console.log(resta)
console.log(multiplicacion)
console.log(division)

/* operadores de asignacion -> asignan valores a variables. = es el más común pero 
también exiten otros como: 
+=
-= 
*=
/=
*/

let numero = 10;
numero += 5; // numero ahora es 15
console.log(numero)

// Operadores de comparación -> comparan dos valores y devuelven true o false

let esIgual = ( 5 == "5" ); // true (compara solo el valor)
let esEstrictamenteIgual = ( 5 === "5" ) // false (compara el valor y el tipo)
let esMAyor = (5 > 3); //true

console.log(esIgual)
console.log(esEstrictamenteIgual)
console.log(esMAyor)

// Operadores lógicos -> Permiten combinar condiciones
    /* 
        - AND ( && ): Devuelve true si ambas condiciones son verdaderas
        - OR ( || ): Delvuelve true si al menos una de las condiciones es verdadera
        - NOT  ( ! ): Invierte el valor de una condición    
    */

let esMayorDeEdad = true;
let tienePermiso = false;
console.log(esMayorDeEdad && tienePermiso); //false
console.log(esMayorDeEdad || tienePermiso); //true
console.log(!esMayorDeEdad); // false

// Ejemplo de Arrays
// array de números
let numeros = [1,2,3,4,5];

// array de strings
let frutas =["manzana","banana","naranja"];

// array de diferentes tipos de datos
let mixto = [1, "hola", true, null];
console.log(numeros)
console.log(frutas)
console.log(mixto)


// Accedemos a los elementos de un array utilizando su indice (la posición)

console.log(frutas[0]); // manzana
console.log(frutas[2]); // naranja

// modificar un elemento del array, se usa su indice:

frutas[1] = "frutilla"; // cambia banana por frutilla
console.log(frutas)

// métodos

/*
push -> agrega uno o más elementos al final del array
pop -> elimina el último elemento del array y lo devuelve
shift -> Elimina el primer elemento del array y lo devuelve
unshift -> Agrega uno o más elementos al inicio del array
slice -> Crea un nuevo array con una porción del array original, sin modificarlo
splice -> Cambia el contenido de un array eliminando o reemplando elementos y/o agregando nuevos elementos en una posición especifica
concat -> Combina dos o más arrays y devuelve uno nuevo
join -> Combina todos los elementos del array en una cadena de texto, con un separador opcional
forEach -> Ejecuta una función para cada elemento de array, útil para realizar operaciones con cada elemento
map ->Crea un nuevo arry con los resultados de ejecutar una función en cada elemento del array original
*/

// push
frutas.push("uva")
console.log(frutas)

//pop
let ultimaFruta = frutas.pop();
console.log(ultimaFruta)
console.log(frutas)

//shift
let primeraFruta = frutas.shift();
console.log(primeraFruta)
console.log(frutas)

// unshift

frutas.unshift("limón");
console.log(frutas)

// slice

let algunasFruta = frutas.slice(0,2);
console.log(algunasFruta); // ["limon", "frutilla"]

// splice

frutas.splice(1,1, "sandia"); // elimina 1 elemento en el indice 1 y lo reemplaza con "sandia"
console.log(frutas)

// concat

let otrasFrutas = ["pera", "mango"];
let todasLasFrutas = frutas.concat(otrasFrutas);
console.log(todasLasFrutas); // ["limón", "sandía", "naranja", "pera", "mango"]

//join

let cadenaFrutas = frutas.join(" - ");
console.log(cadenaFrutas)

// forEach

frutas.forEach(function(fruta) {
    console.log("Me gusta la " + fruta)
})

// map

let frutasEnMayuscula = frutas.map(function(fruta){
    return fruta.toUpperCase();
});
console.log(frutasEnMayuscula);


// Bucles

// for -> Permite iterar sobre los elementos utilizando el incdice
for (let i = 0; i < frutas.length; i++) {
    console.log(frutas[i])
}

// for...of -> Una forma más directa de recorrer los elementos de un array
for ( let fruta of frutas ) {
    console.log(fruta)
}

// forEach -> recorre el array y aplica una función a cada elemento
frutas.forEach((fruta) =>console.log(fruta))

// map -> permite transformar cada elemento del array y crear un  nuevo array con esos resultados
let frutasPlural = frutas.map((fruta) => fruta + "s");
console.log(frutasPlural)

// ========== Objetos ==========

/* Creación y uso de objetos

Podés crear un objeto de varias formas, pero la más común es usando notación literal */

let persona = {
    nombre : "Juan",
    edad: 25,
    profesion: "Desarrollador"
}

// Acceso a propiedades
//podés acceder a las propiedades de un objeto usando dos métodos

console.log(persona.nombre)

console.log(persona["edad"])

// Propiedades y métodos de objetos

// Las propiedades son las característicasdel objeto. Podés agregar propiedades nuevas dinámicamente

persona.nacionalidad = "Argentina"
console.log(persona.nacionalidad)

/*
Métodos:
Los métodos son funciones asociadas a un objeto. Podés definirlos directamente dentro del objeto
*/

let calculadora = {
    sumar: function(a,b) {
        return a + b
    },
    restar: function(a,b) {
        return a - b
    }
}

// usamos los métodos
console.log(calculadora.sumar(10, 15))
console.log(calculadora.restar(20,5))

// Acceso y modificación de propiedades

// Podés modificar una propiedad existente asignándole un nuevo valor

persona.nombre = "Carlos";
console.log(persona.nombre)
console.log(persona)

// Eliminar propiedades

// Para eliminar una propiedad de un objeto usa el operador delete:

delete persona.edad;
console.log(persona.edad)
console.log(persona)

/*
Introducción a los conceptos de Prototipos

En JavaScript, los objetos tienen una propiedad oculta llamada [[Prototype]] (o __proto__), que les permite heredar propiedadess y métodos de otro objeto
*/

let animal = {
    especie: "mamífero",
    comer : function() {
        console.log("Este animal está comiiendo.")
    }
};

let perro = {
    nombre :"Fido",
    ladrar : function() {
        console.log("¡Guau, guau!")
    }
};

// Configuramos "animal" como prototipo de "perro"
Object.setPrototypeOf(perro, animal)

// Ahora "perro" puede usar propiedades y métodos de animal
console.log(perro.especie); // "mamífero"
perro.comer(); // "Este animal esstá comiendo"
perro.ladrar();

/*
Prototipos en Clases

Los prototipos son fundamentales en el sistema de clases de javaSccript, porque nos permiten heredar métodos y propiedades entre objetos
*/

// Ejemplo completo
/* 
Imaginá que estás modelando un sistema para gestionar personas. Acá combinamos propiedades métodos y prototipos
*/

// Objeto base:

let persona1 = {
    saludar : function() {
        console.log(`Hola, soy ${this.nombre}`)
    }
};

// Crear un nuevo objeto que herede de 'persona'

let empleado = Object.create(persona1);
empleado.nombre = "Laura";
empleado.trabajo = "Ingeniera";

// Usar métodos heredados
empleado.saludar(); 
console.log(empleado.trabajo);

/*
Prácticas recomendadas
    - utilizar Objecct.create() para crear objetos con un prototipo explicito
    - Usa hasOwnProperty para verificar si una propiedad pertenece directamente a un objeto o fue heredada
*/

console.log(empleado.hasOwnProperty("trabajo"))
console.log(empleado.hasOwnProperty("saludar")) 

// Selección de elementos del DOM

let titulo = document.getElementById("titulo");
console.log(titulo) 

// querySelector -> selecciona el primer elemento que coincida con un selector css

// selector por clase
let boton = document.querySelector(".btn");
// selector por ID
let encabezado = document.querySelector("#titulo")

console.log(boton)
console.log(encabezado)

// querySelectorAll -> Seleccionar todos los elementos que coincidan con un selector CSS y devuelve una lista de nodos

let items = document.querySelectorAll(".item");
items.forEach(item => console.log(item))

// modificación de elementos
// cambiar texto

titulo.innerText = "Nuevo título"

// Cambiar HTML

// usa innerHTML para cambiar o agregar contendido HTML dentro de un elemento

let contenedor = document.getElementById("contenedor");
contenedor.innerHTML = "<p>Este es un párrafo nuevo</p>"

// Cambia los estilos de un elemento a través de la propiedad style
boton.style.backgroundColor = "blue";
boton.style.color ="white"

// Creación y elminación de Nodos

// crear un nodo

// usá document.createElement para crear un nuevo nodo

let nuevoParrafo = document.createElement("p");
nuevoParrafo.innerText = "Este es un párrafo creado dinánicamente";

document.body.appendChild(nuevoParrafo)
