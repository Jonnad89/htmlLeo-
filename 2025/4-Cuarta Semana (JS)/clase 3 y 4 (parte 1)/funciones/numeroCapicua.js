let numero = 1331;
let numeroStr = numero.toString();
let invertido = "";

for ( let i = numeroStr.length - 1; i >= 0; i-- ){
    invertido += numeroStr[i];
}

console.log(numeroStr === invertido ? "Es capicúa" : "No es capicúa")