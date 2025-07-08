// Agrupar por longitud de palabras

let palabras = ["sol", "luz", "mar", "playa", "cielo", "nube"];
let agrupadas ={};

for ( let i = 0; i < palabras.length; i++ ) {
    let palabra = palabras[i];
    let longitud = palabra.length;

    if( !agrupadas[longitud] ) {
        agrupadas[longitud] = [];
    }
    agrupadas[longitud].push(palabra)
}

console.log(agrupadas)