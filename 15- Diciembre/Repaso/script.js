// Fundamentos esenciales de JavaScript

/* 
Este grupo define como creamos y representamos entidades complejas en nuestro código
*/

/*
En JavaScript moderno, usamos la palabra clave "class" para crear un plano o plantilla y el constructor es el método esencial dentro de ese plano
*/

/* clase: Es la plantilla (ej: molde de galletas) que lo que hace es definiar cómo debe ser un objeto
*/

/* 
constructor: Es la función especial que se ejecuta automaticamente cuando creamos un nuevo objeto usando la palabra clave "new". Su trabajo es construir y dar valores iniciales a las propiedades del nuevo objeto
*/

/*
this: Dentro del constructor, "this" se refiere al nuevo objeto que se está creando en ese momento
*/

// Ejemplo:
class Vehiculo {
    // El constructor se ejecta al hacer "new Vehiculo(...)"
    constructor(patente, marca) {
        this.patente = patente; // "this" se refiere al nuevo Vehiculo
        this.marca = marca;
        this.combustible = 50; // Valor inicial por defecto
    }
    //Método (es una función dentro de las clases)
    repostar(litros) {
        this.combustible += litros;
    }
}

// Instancia: Creamos un objeto real a partir del plano (Clase)
const miCoche = new Vehiculo("ABC123", "Toyota");
console.log(miCoche.combustible)
miCoche.repostar(20)
console.log(miCoche.combustible)

// Objetos Literales
/*
Un objeto literal es una colección de datos desordenada, ideal para describir una única entidad o un conjunto de configuraciones. Los datos se organizan en pares clave:valor

clave: También llamada propiedad (ej. nombre, precio)
valor: El dato asociado a la clave(ej. "camiseta", 25.99)
*/

const producto = {
    nombre : "Camiseta",
    precio : 25.99,
    disponible : true
};

console.log(producto.precio); // acceso por punto
console.log(producto["nombre"]); // acceso por corchetes

// Arrays (Arreglos)

/*
Un array es una lista ordenada de valores. Es la estructura de datos fundamental para manejar colecciones de items (como la lista de películas)

- Ordenado: Los elementos mantienen el orden en que fueron agregados
- Índice: Se accede a los elementos por su posición, que siempre comienza en cero (0)
*/

let listaTareas = ["Comprar pan", "Estudiar JS", "Llamar a Pedro"];

// Acceder a elementos:
console.log(listaTareas[0]); // Salida :"Comprar pan" (primer elemento)

// Obetener el número de elementos:
console.log(listaTareas.length);

// Agregar un elemento (al final):
listaTareas.push("Pagar luz")
console.log(listaTareas.length);

console.log(listaTareas[3]);


// El Objeto Global math

/*
El objeto math es una utilidad de JavaScript que proporciona funciones y constantes matemáticas. No se puede crear una instancia de Math (nunca se usa new Math() ).

Funciones más usadas:

Math.random() -> devuelve un número decimal aleatorio entre 0 (incluido) y 1 (excluido) 

Math.floor(x) -> Redondea un número hacia el entero más cercano hacia abajo 
ej. Math.floor(4.9) -> 4

Math.ceil(x) -> Redondea un número hacia el entero más cercano pero hacia arriba 
ej. Math.ceil(4.1) -> 5
*/
// Henerar un número aleatorio entre 0 y 9
let num = Math.floor(Math.random() * 10)
console.log(num);


/*
El método eval()
Este método tiene la capacidad de ejecutar código JavaScript que está almacenado como una cadena de texto (string)

Sintaxis: eval("código como string")
*/

let expresion = "5 * 10 + 2";
console.log(expresion);
let resultado = eval(expresion)
console.log(resultado);
