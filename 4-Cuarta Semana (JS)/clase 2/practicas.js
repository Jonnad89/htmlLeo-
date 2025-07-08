// Mostrar los números pares del 1 al 20

for(let i = 1; i <= 20; i++) {
    if( i % 2 === 0 ) {
        console.log(i)
    }
}

// Sumar númmeros hasta que la suma supere 100

let suma = 0;
let i = 1; 

while ( suma <= 100 ) {
    suma +=i;
    i++;
}

console.log("La summa final es:", suma)


// Mostrar solo múltiplos de 3 entre 1 y 50

for (let i = 1; i <= 50; i++) {
    if ( i % 3 === 0 ) {
        console.log(i);
    }
}

// Sumar solo los números impares entre 1 y 100

let incremento = 0;
for ( let i= 1; i <= 100; i++) {
    if ( i % 2 !== 0 ) {
        incremento += i;
    }
}

console.log("Suma total de impares:", incremento)


// Detectar si un número es primo (con for)

let numero = 29;
let esPrimo = true;

if ( numero <= 1 ) {
    esPrimo = false;
} else {
    for ( let i = 2; i < numero; i++) {
        if ( numero % i === 0 ) {
            esPrimo= false;
            break;
        }
    }
}

console.log( esPrimo ? "Es primo" : "No es primo")

// Mostrar la tabla de multiplicar del 1 al 10 (tablas completas)

for (let i = 1; i <= 10; i++) {
    console.log(`\nTabla del ${i}`);
    for( let j = 1; j <= 10; j++ ) {
        console.log(`${i} x ${j} = ${i * j}`);
    }
}

// Contar cuántas vocales tiene un string

let texto = "Hola JavaScrip";
let contador = 0;

for ( let i = 0; i < texto.length; i++) {
    let letra = texto[i].toLowerCase();
    if("aeiou".includes(letra)) {
        contador ++;
    }
}

console.log("Cantidad de vocales:", contador)