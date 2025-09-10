const persona = {
    nombre : "Ana",
    edad : 25,
    saludar() {
        console.log(`Hola, soy ${this.nombre}`)
    }
}

// console.log(persona.saludar())

// Creación dinámica y propiedades computadas

const propiedad = "color";
const coche = {
    marca : "Toyota",
    [propiedad] : "Rojo"
};

console.log(coche.color)

// this en objetos
// this hace referencia al objeto que llama al método

const perro = {
    nombre : "Firu",
    ladrar() {
        console.log(`${this.nombre} dice guau`)
    }
};

perro.ladrar()
// Peeeero cuidado con funciones flecha

const gato = {
    nombre : "Michi",
    maullar : () => {
        console.log(`${this.nombre} dice miau`)
    }
};

gato.maullar(); // undefined dice miau

// Object.assing() y el spread operator
// copiar objetos

const base = {a :1, b: 2};
const extra = {b: 3, c: 4};

const combinado = {...base,...extra};
console.log(combinado)

// Clon profundo (shallow vs deep copy)

const original = {x: 1, y: {z: 2} };
// const copia = {...original};
const copia = JSON.parse(JSON.stringify(original))
copia.y.z = 99;
console.log(original.y.z)

/*
Resumen corto:
- spread(...) copia solo la superficie (primer nivel)
- Para copiar objetos anidados sin romper el original, necesitas una deeo copy
*/


