/* 
¿Qué es un objeto?
Es una colección de datos relacionados entre si
propiedades (clave : valor) y métodos (funciones internas)
*/

let persona = {
    nombre : "Juan",
    edad : 30,
    profesion : "Jardinero"
}
// Accedemos con punto (.)
console.log(persona.nombre); // Juan

// Notación con corchetes ([])
console.log(persona["edad"]) //30
/* 
Usamos los corchetes cuando el nombre de la propiedad viene como string o variable.
El bnombre tiene espacios o caracteres especiales.
*/

// Agregamos nuevas propiedades

persona.nacionalidad = "Polaca";
persona["altura"] = 1.88;

console.log(persona.nacionalidad)
console.log(persona["altura"])

// Modificamos propiedades

persona.edad = 38;
persona["nombre"] = "Juan Rodriguez"

console.log(persona.edad)
console.log(persona["nombre"])

// Eliminamos propiedades

delete persona.profesion
console.log(persona)

// Métodos en objetos (funciones dentro del objeto)

let gato = {
    nombre : "Mishifuss",
    maullar : function() {
        console.log("Miauuuu");
    }
};

gato.maullar(); 

/* 
Sintaxis moderna con función flecha (this se comporta diferente)
*/

let perro = {
    nombre : "Toby",
    saludar() {
        console.log(`Hola, soy ${this.nombre}`)
    }
};

perro.saludar()

// Iteramos propiedades con for...in

let auto = {
    marca : "Ferrari",
    modelo : "F50",
    anio : 2005
};

for (let propiedad in auto) {
    console.log(propiedad + ": " + auto[propiedad])
}

/*======== Ejercicio ======== */
// Vamos a agregar una propiedad y un método 
let alumno = {
    nombre : "Pedro", 
    edad : 15,
    curso : "JavaScript"
}

alumno.aprobado = true;

alumno.saludar = function() {
    console.log(`Hola, soy ${this.nombre} y tengo ${this.edad} años`)
}

alumno.saludar();

// Creamos un objeto "calculadora" con métodos de sumar y restar

let calculadora = {
    suma : function(a, b){
        return a + b; 
    },
    restar : function(a, b) {
        return a - b;
    }
};

console.log(calculadora.suma(10, 5))
console.log(calculadora.restar(10, 5))
