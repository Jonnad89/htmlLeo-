// 1. Sumador de un rango
function sumarRango(inicio, fin) {
    let suma = 0;
    for (let i = inicio; i <= fin; i++) {
        suma += i;
    }
    return suma;
}

// 2. Filtro de palabras largas
function filtrarPalabrasLargas(listaPalabras, limite) {
    let filtradas = [];
    for (let i = 0; i < listaPalabras.length; i++) {
        if (listaPalabras[i].length > limite) {
            filtradas.push(listaPalabras[i]);
        }
    }
    return filtradas;
    // Opcional con método moderno: return listaPalabras.filter(p => p.length > limite);
}

// 3. Validador de emails simple
function validarEmail(correo) {
    if (correo.includes(" ")) return false; // No debe tener espacios
    
    let posicionArroba = correo.indexOf("@");
    if (posicionArroba === -1) return false; // Debe tener arroba
    
    // Verificamos si hay un punto después de la arroba
    let parteFinal = correo.slice(posicionArroba);
    return parteFinal.includes(".");
}

// 4. Buscador de goleadores
function obtenerGoleador(jugadores) {
    if (jugadores.length === 0) return null;
    
    let maxGoleador = jugadores[0];
    
    for (let i = 1; i < jugadores.length; i++) {
        if (jugadores[i].goles > maxGoleador.goles) {
            maxGoleador = jugadores[i];
        }
    }
    return maxGoleador.nombre;
}

// 5. Formateador de precios
function formatearCarrito(productos) {
    let formateados = [];
    for (let i = 0; i < productos.length; i++) {
        formateados.push(`${productos[i].articulo} - $${productos[i].precio}`);
    }
    return formateados;
    // Opcional con método moderno: return productos.map(p => `${p.articulo} - $${p.precio}`);
}

// 6. Contador de vocales
function contarVocales(texto) {
    let textoLimpio = texto.toLowerCase();
    let contador = 0;
    const vocales = "aeiouáéíóú"; // Agregamos acentos por las dudas

    for (let i = 0; i < textoLimpio.length; i++) {
        if (vocales.includes(textoLimpio[i])) {
            contador++;
        }
    }
    return contador;
}