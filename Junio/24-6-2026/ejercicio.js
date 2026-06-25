function aplicarInflacion(listaPrecios) {
    for (let i = 0; i < listaPrecios.length; i++) {
        let precioConInflacion = listaPrecios[i] * 1.10;
        
        // Math.round los transforma en 110, 220, etc.
        listaPrecios[i] = Math.round(precioConInflacion);
    }
    return listaPrecios;
}

// Prueba:
let preciosViejos = [100, 200, 300, 500];
console.log("Precios nuevos:", aplicarInflacion(preciosViejos)); 
// Devuelve: [110, 220, 330, 550]

function contarVocales(palabra) {
    let palabraMinuscula = palabra.toLowerCase();
    let cantidadVocales = 0;

    for (let i = 0; i < palabraMinuscula.length; i++) {
        let letra = palabraMinuscula[i];

        // Usamos || (OR) para que entre al IF si la letra es cualquiera de las 5 vocales
        if (letra === 'a' || letra === 'e' || letra === 'i' || letra === 'o' || letra === 'u') {
            cantidadVocales++; // Encontró una, suma al contador
        }
    }
    return cantidadVocales;
}

// Prueba:
console.log("Vocales en 'Leonardo':", contarVocales("Leonardo"));