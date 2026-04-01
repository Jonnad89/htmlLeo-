// --- 1. ESTRUCTURA DE DATOS (Rutas de Imágenes) ---
// Nota: Tu alumno debe usar rutas a imágenes reales para que esto funcione.
// Pueden ser imágenes guardadas en el mismo proyecto (ej. 'img/foto1.jpg') 
// o URLs externas (aunque estas últimas requieren internet).
const RUTAS_IMAGENES = [
    'https://picsum.photos/500/350?random=1', // Imagen 0
    'https://picsum.photos/500/350?random=2', // Imagen 1
    'https://picsum.photos/500/350?random=3', // Imagen 2
    'https://picsum.photos/500/350?random=4', // Imagen 3
];

// --- 2. GESTIÓN DE ESTADO ---
let indiceActual = 0; // Índice de la imagen que se está mostrando

// --- SELECTORES DEL DOM ---
const visorImg = document.getElementById('visor-img');
const anteriorBtn = document.getElementById('anterior-btn');
const siguienteBtn = document.getElementById('siguiente-btn');


/**
 * 3. Manipulación del DOM: Actualiza el atributo 'src' de la imagen.
 */
function cambiarImagen() {
    // Obtiene la ruta del array usando el índice actual
    const nuevaRuta = RUTAS_IMAGENES[indiceActual];
    
    // Actualiza el atributo 'src' de la etiqueta <img> (Requisito 3)
    visorImg.setAttribute('src', nuevaRuta);
}

/**
 * Lógica para avanzar a la siguiente imagen.
 */
function irSiguiente() {
    // 4. Lógica de Navegación Circular
    // Incrementa el índice y usa el operador módulo (%) para volver a 0 
    // cuando se alcanza el final del array.
    indiceActual = (indiceActual + 1) % RUTAS_IMAGENES.length;
    cambiarImagen();
}

/**
 * Lógica para retroceder a la imagen anterior.
 */
function irAnterior() {
    // 4. Lógica de Navegación Circular (Retroceso)
    // Si el índice es 0, salta al final del array (RUTAS_IMAGENES.length - 1).
    if (indiceActual === 0) {
        indiceActual = RUTAS_IMAGENES.length - 1;
    } else {
        indiceActual--;
    }
    cambiarImagen();
}


// --- INICIALIZACIÓN Y EVENTOS ---
document.addEventListener('DOMContentLoaded', () => {
    // 1. Mostrar la primera imagen al cargar la página
    cambiarImagen(); 

    // 5. Asignar Event Listeners
    siguienteBtn.addEventListener('click', irSiguiente);
    anteriorBtn.addEventListener('click', irAnterior);
});