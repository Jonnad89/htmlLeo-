// Mostramos los números pares del 1 al 20

for (let i = 1; i <= 20; i++) {
    if (i %2 === 0) {
        console.log(i)
    }
}

// sumamos números hasta que la suma supere 200

let suma = 0; 
let i = 1;

while (suma <= 100) {
    suma += i;
    i++;
}

console.log("La suma final fue:" , suma)

// let opcion;

// do {
//     opcion = prompt("MENÚ\n1. Saludar\n2. Ver hora\n3. Salir");
//     if(opcion === "1") {
//         console.log("Hola!")
//     } else if (opcion === "2") {
//         console.log("Son las", new Date().toLocaleTimeString());
//     }
// } while (opcion !== "3");

// console.log("Programa finalizado")

// sumar solo los números impares entre el 1 y el 200

let suma2 = 0;

for (let i = 1; i <= 200; i++) {
    if (i % 2 !== 0) {
        suma2 += i;
    }
}

console.log("Suma total de los impares:", suma2)

// detectar numeros primos

let numero = 29;
let esPrimo = true;

if (numero <= 1) {
    esPrimo = false;
} else {
    for (let i = 2; i < numero; i++) {
        if (numero % i === 0) {
            esPrimo = false;
            break;
        }
    }
}

console.log( esPrimo ? "es primo" : "No es primo")

// Mostrar tabla de multiplicar del 1 al 20 

for (let i = 1; i <= 20; i++) {
    console.log(`\nTabla del ${i}`);
    for (let j = 1; j <= 20; j++) {
        console.log(`${i} x ${j} = ${i * j}`);
    }
}


// contar cuántas vocales tiene un string

let texto = "Hola JavaScript";
let contador = 0;

for (let i = 0; i < texto.length; i++) {
    let letra = texto[i].toLocaleLowerCase();
    if ("aeiou".includes(letra)) {
        contador++;
    }
}

console.log("Cantidad de vocales:", contador)


//Palabra al revés

let palabra = "palabra";
let invertida = "";

for (let i = palabra.length - 1; i >= 0; i--) {
    invertida += palabra[i]
}

console.log("Palabra invertida:", invertida)