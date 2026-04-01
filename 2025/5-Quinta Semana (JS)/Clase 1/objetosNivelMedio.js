// Crear un objeto "auto" con propiedades: marca, modelo y año. Agregar un método que diga "mostrarInfo"

let auto = {
    marca : "Ford",
    modelo : "Fiesta",
    año : 2018,
    mostrarInfo : function() {
        console.log(`Auto: ${this.marca} ${this.modelo} (modelo: ${this.año})`)
    }
}

auto.mostrarInfo()

// Recorrer un objeto "producto" con for...in y mostrar claves y valores

let producto = {
    nombre : "Celular",
    precio : 150000,
    stock : 20
};

for ( let clave in producto ) {
    console.log(`${clave}: ${producto[clave]}`)
}

// Crear un objeto "usuario" y una función que diga si está activo (usando una propiedad booleana)

let usuario = {
    nombre : "Pedro",
    activo : true
};

function verificarEstado(u) {
    if (u.activo) {
        console.log(`${u.nombre} está activo`)
    } else {
        console.log(`${u.nombre} está inactivo`)
    }
}

verificarEstado(usuario)

// usuario.activo = false;

// verificarEstado(usuario)