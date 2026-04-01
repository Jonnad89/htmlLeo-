function esPalindromo(texto) {
    // pasamos a minúsculas y quitamos espacios
    const limpio = texto.toLowerCase().replace(/\s/g, "");
    // intertimos el string
    const invertido = limpio.split("").reverse().join("");
    // comparamos original con invertido
    return limpio === invertido;
}

console.log(esPalindromo("AniTa lAva la tIna"))
console.log(esPalindromo("hoLa mUndo"))

/*
explicación:
.toLowerCase() -> asegura que no afecten mayúsculas/minúsculas
.replace(/\s/g, "") -> elimina todos los espacios
.split("").reverse().join("") -> invierte el string
se compara el original con el invertido
*/

// Creamos una función que reciba una cadena de texto y devuelva un objeto con la frecuencia de cada letra

function contarLetras(texto) {
    const resultado = {};
    for(let letra of texto.toLowerCase()) {
        if(letra === " ") continue; // ignoramos espacios
        if (resultado[letra]) {
            resultado[letra]++;
        } else {
            resultado[letra] = 1;
        }
    }

    return resultado
}

console.log(contarLetras("Hola Mundo"))