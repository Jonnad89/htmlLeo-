let producto = {
    nombre : "Notebook",
    precio : 250000,
    stock : 5
};

for (let [clave, valor] of Object.entries(producto)) {
    console.log(`${clave}: ${valor}`)
}