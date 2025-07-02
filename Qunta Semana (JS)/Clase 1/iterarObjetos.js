// Bucle for...in

let auto = {
    marca : "Toyoya",
    modelo : "Corolla",
    año : 2020
};

for (let propiedad in auto) {
    console.log(propiedad + "; " + auto[propiedad])
}

