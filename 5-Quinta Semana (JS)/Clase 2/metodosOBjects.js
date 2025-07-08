// Métodos : Object.keys, Object.values, Object.entries

// Object.keys -> Devuelve un array con todas las claves ( propedades ) del objecto

let persona = {
    nombre : "Ana",
    edad : 30,
    profesion : "Contadora"
};

console.log(Object.keys(persona))

// Object.values(obj) -> Devuelve un array con todos los valores del objeto

console.log(Object.values(persona))

// Object.entries(obj) -> Devuelve un array de arrays: cada subarray contiende [clave, valor]

console.log(Object.entries(persona))




