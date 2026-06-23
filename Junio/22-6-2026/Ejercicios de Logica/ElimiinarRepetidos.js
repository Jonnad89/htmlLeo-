function eliminarRepetidos(listaNombres) {
    let listaLimpia = [];

    listaNombres.forEach(nombre => {
        // El signo "!" significa NO. Traducido: "Si la lista limpia NO incluye este nombre..."
        if (!listaLimpia.includes(nombre)) {
            listaLimpia.push(nombre);
        }
    });

    return listaLimpia;
}

// Prueba:
let nombres = ["Juan", "Pedro", "Leo", "Juan", "María", "Leo"];
console.log(eliminarRepetidos(nombres));