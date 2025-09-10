// métodos útiles para trabajar con objetos

const producto = {id : 1, nombre : "laptop", precio : 1000};

console.log(Object.keys(producto))
console.log(Object.values(producto))
console.log(Object.entries(producto))

// Recorrer un objeto

for (const [clave, valor] of Object.entries(producto)) {
    console.log(`${clave}: ${valor}`)
}