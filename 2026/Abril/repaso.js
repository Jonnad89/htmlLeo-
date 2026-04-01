/* 
var -> Tiene scope de función. Si declaras un var dentro de un if, sigue siendo accesible 
fuera de ese bloque. Esto suele causar errores lógicos

let y const -> Tienen scope de bloque ({...}). Solo existen dentro de las llaves donde fueron 
creadas (ya sea un if, for o función)


Hoisting (Elevación)

Es el comportamiento de JS de "subir" la declaraciones al inicio del script.

- Con var, la variable se eleva y se inicializa como undefined. Podes usarla antes de declararla
 (aunque esté vacía)

- Con let y **const**, al declaración se eleva pero no se inicializa. Entran en la "Temporal Dead Zone"
(TDZ). Si intentamos usaras antes, JS lanza un error de referencia.


====== Reasignación vs mutación ====== 
- const -> no permite reasignar el valor (no podes shacer miConst = 2).
- Ojo porque acá si const es un objeto o array, si podes mutarlo (agregar elementos o cabiar propiedades)
porque la referencia en memoria sigue siendo la misma


===== Backticks o Template Literals `` (comillas invertidas) =====

- Sintaxis: Se usan las comillas invertidas y ${} para inyectar lógica.
- Multilínea: Los Template Literals respetan los saltos de línea sin necesidad de usar \n.
- Lógica embebida: Podes ejecutar funciones o ternarios dentro de la llaves 
*/

// Ejemplo comparativo

const nombre = "Roma";
const curso = "JS Junior";
// Dos formas de concatenar
// Forma antigua
console.log("Hola, soy " + nombre + "\ny estoy en el curso: " + curso);

// Método moderno (Template literals) 
console.log(`Hola, soy ${nombre}
y estoy en el curso: ${curso.toUpperCase()}`)

/*
==== Funciones flecha (Arrow Function) ====

Sintaxis compacta
- Si tienen un solo parámetro, podes omitir los paréntesis: p => ...
- Si solo retornan una línea, podés omitir las llaves {} y el return: (a,b) => a + b (esto se llama retorno implicito)

El contexto de this (La gran diferencia)

- Funciones tradicionales: Tienen su propio this. El valor de this depende de quién llame a la función.
- Arrow Functions: No tienen su propio this. Heredan el this del contexto donde fueron creadas (su entorno léxico)

- Uso commún: Son ideales para métodos dentro de clases o dentro de un setTimeuot donde
no quereos que el this cambie al objeto global

*/

{
    var a = "Soy var";
    let b = "Soy let";
}

console.log(a)
// console.log(b)

/*

Atanatomía de "function" a"=>"

*/
// simple

// function sumar(a,b) {
//     return a + b
// };
// arrow function

// const sumar = (a,b) => {
//     return a +b
// };

// retorno implicito (El "superpoder")

const sumar = (a,b) => a + b;

console.log(sumar(5,17))


/* === Mezclando todo === */ 


// Código Viejo a Transformar

var name = "Roma";
var edad = 25;

var saludar = function(n, e) {
    return "Hola, soy " + n + " y tengo " + e + " años.";
};

console.log(saludar(nombre, edad))

const name2 = "Roma";
const edad2 = 25;

const saludar2 = (n, e) => `Hola, soy ${n} y tengo ${e} años`

console.log(saludar2(name2, edad2))