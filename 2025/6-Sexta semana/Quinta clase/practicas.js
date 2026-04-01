/*
contar vocales
escribir una función que reciba un string y 
devuelva cuantas vocales contiene
*/

function contarVocales(texto){
    const vocales = "aeiouAEIOU";
    let contador = 0;
    for (let letra of texto){
        if(vocales.includes(letra))
            contador++;
    }
    return contador;
}

console.log(contarVocales("Hola, mundo"))

// Palindromo
/*
 escribi una función que determine si }
 una palabra es un palindromo (se lee igual al reves)
*/
function esPalindromo(palabra) {
    const invertida = 
    palabra.split("").reverse().join("");
    return palabra === invertida;
}

console.log(esPalindromo("oso"))
console.log(esPalindromo("hola")) 
console.log(esPalindromo("menem")) 
console.log(esPalindromo("milei")) 