// Contar vocales

function contarVocales(texto) {
    const vocales = "aeiouAEIOU";
    let contador = 0;
    for (let letra of texto) {
        if (vocales.includes(letra)) contador++;
    }
    return contador;
}

console.log(contarVocales("Hola Mundo"))

// Palíndromo

function esPalindromo(palabra) {
    const invertida = palabra.split("").reverse().join("");
    return palabra === invertida;
}

console.log(esPalindromo("oso"))
console.log(esPalindromo("hola"))

// Eliminar duplicados

function eliminarDuplicados(arr) {
    return [... new Set(arr)];
}

console.log(eliminarDuplicados([1, 2, 2, 3, 3, 4]))

// Invertimos una palabra

function invertir(str) {
    return str.split("").reverse().join("");
}

console.log(invertir("javaScript"))

// Buscamos el número más grande

function maximo(arr) {
    let mayor = arr[0];
    for (let num of arr) {
        if (num > mayor) mayor = num;
    }
    return mayor;
}

console.log(maximo([1, 5, 10, 3])) 

// resolvemos una suma acumulada

function sumaAcumulada(arr) {
    let suma = 0;
    return arr.map(num => suma += num);
}

console.log(sumaAcumulada([1, 2, 3, 4]));


// Fibonacci 

function fibonacci(n) {
    const serie = [0,1];
    for (let i = 2; i < n; i++) {
        serie.push(serie[i - 1] + serie[i - 2]);
    }
    return serie.slice(0 ,n);
}

console.log(fibonacci(6))

// contamos letras repetidas

function contarLetras(palabra) {
    const contador = {};
    for (let letra of palabra) {
        contador[letra] = (contador[letra] || 0) + 1; 
    }
    return contador;
}

console.log(contarLetras("banana"))