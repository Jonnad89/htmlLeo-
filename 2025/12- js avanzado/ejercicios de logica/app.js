/*
Escribir una función agruparAnagramas(palabras) que reciba un array de 
palabras y devuelva un objeto donde cada clave es la palabra ordenada
alfabéticamente y su valor es un array con las palabras que son anagramas entre si
*/

function agruparAnagramas(palabras) {
    return palabras.reduce((acc, palabra) => {
        const clave = palabra.split("").sort().join("");
        if(!acc[clave]) acc[[clave]] = [];
        acc[clave].push(palabra);
        return acc;
    }, {});
}

console.log(agruparAnagramas(["roma", "amor", "omar", "perro", "roper"]))

/* 
Tenemos un array de puntos en forma de objetos {x, y}. Escribamos puntosMasCercanos(puntos) que devuelva
el punto más cercano al origen (0,0) usando la distancia euclidiana.
*/

function puntosMasCercanos(puntos) {
    return puntos.reduce((masCercano, actual) => {
        const dist = Math.hypot(actual.x, actual.y);
        const distMC = Math.hypot(masCercano.x, masCercano.y);
        return dist < distMC ? actual : masCercano; 
    });
}

console.log(puntosMasCercanos([{x:3,y:4},{x:1,y:1},{x:0,y:5}]))