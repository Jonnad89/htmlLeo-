let persona = {
    nombre: "Lucía",
    edad: 28,
    profesion: "Diseñadora"
}

console.log(persona.nombre)
console.log(persona["profesion"])

// Agregar nuevas propiedades

persona.nacionalidad = "Argentina"

console.log(persona.nacionalidad)

persona["altura"] = 1.65;

console.log(persona.altura)

// Modificar propiedades

persona.edad = 29;

console.log(persona.edad)

persona["nombre"] = "Lucía Fernández"

console.log(persona.nombre)

console.log(persona)

// Eliminar propiedades

delete persona.profesion;

console.log(persona)