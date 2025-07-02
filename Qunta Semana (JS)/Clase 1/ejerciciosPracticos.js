let alumno = {
    edad : 26,
    nombre : "Leonardo",
    curso : "JavaScript"
};

console.log(alumno.nombre)
console.log(alumno.edad)
console.log(alumno.curso)

alumno.aprobado = true;

alumno.saludar = function() {
    console.log(`Hola, soy ${this.nombre} y tengo ${this.edad} años`)
}

alumno.saludar()

let calculadora = {
    sumar : function(a, b) {
        return a + b
    },
    restar : function(a, b) {
        return a - b 
    }
}; 

console.log(calculadora.sumar(10,5))
console.log(calculadora.restar(10,5))

// Recorrer las propiedades de un objeto 

let libro = {
    titulo : "El principito",
    autor : "Antoine de Saint-Exupery",
    paginas : 90
};

for (let clave in libro ) {
    console.log(`${clave}: ${libro[clave]}`)
}