// Catálogo inicial de mangas (Base de Datos)
let CATALOGO_MANGA = [
    { id: 1, titulo: "One Piece", genero: "Aventura", puntuacion: 9.5, estado: "En emisión" },
    { id: 2, titulo: "Attack on Titan", genero: "Acción", puntuacion: 9.2, estado: "Finalizado" },
    { id: 3, titulo: "Death Note", genero: "Misterio", puntuacion: 8.8, estado: "Finalizado" },
    { id: 4, titulo: "Spy x Family", genero: "Comedia", puntuacion: 8.0, estado: "En emisión" },
    { id: 5, titulo: "Jujutsu Kaisen", genero: "Acción", puntuacion: 7.5, estado: "En emisión" },
];

// Categorías (Usado para el filtro, como lo mencionó el alumno)
const CATEGORIAS = [
    { titulo: "Aventura Épica", genero: "Aventura" },
    { titulo: "Lucha y Adrenalina", genero: "Acción" },
    { titulo: "Misterios", genero: "Misterio" },
    { titulo: "Risas y Slice of Life", genero: "Comedia" }
];

// Contador simple para asignar IDs únicos
let proximoId = CATALOGO_MANGA.length + 1;

// --- SELECTORES DEL DOM ---
const listaManga = document.getElementById('lista-manga');
const tituloInput = document.getElementById('titulo-input');
const generoInput = document.getElementById('genero-input');
const puntuacionInput = document.getElementById('puntuacion-input');
const agregarBtn = document.getElementById('agregar-btn');
const filtroSelect = document.getElementById('filtro-genero');
const promedioDisplay = document.getElementById('promedio-display');

/**
 * Lógica Condicional: Determina el color y texto de recomendación.
 * @param {number} puntuacion
 * @returns {object} { texto, color }
 */
function clasificarManga(puntuacion) {
    // Requisito 2: Lógica condicional (if/else if/else)
    if (puntuacion >= 9.0) {
        return { texto: "Obra Maestra", color: "blue" };
    } else if (puntuacion >= 8.0) {
        return { texto: "Recomendado", color: "green" }; // Ejemplo: >= 8, verde
    } else if (puntuacion >= 7.0) {
        return { texto: "Normal", color: "orange" };    // Ejemplo: < 8, amarillo/naranja
    } else {
        return { texto: "Opcional", color: "red" };
    }
}

/**
 * Salida Dinámica: Recorre el array y actualiza el HTML.
 * @param {object[]} listaMangaAMostrar El array de manga a renderizar (puede ser el filtrado).
 */
function renderizarCatalogo(listaMangaAMostrar = CATALOGO_MANGA) {
    // Requisito 2: Recorrer el array usando bucle (o map)
    const contenidoHTML = listaMangaAMostrar.map(manga => {
        const clasificacion = clasificarManga(manga.puntuacion);
        
        return `
            <li class="manga-item">
                <span class="manga-titulo">${manga.titulo}</span>
                <span class="manga-genero">${manga.genero}</span>
                <span class="manga-puntuacion">${manga.puntuacion.toFixed(1)}</span>
                <span class="manga-estado" style="color: ${clasificacion.color};">
                    ${clasificacion.texto}
                </span>
            </li>
        `;
    }).join(''); // Unir el array de strings en una sola cadena HTML

    listaManga.innerHTML = contenidoHTML; // Actualización del DOM (Requisito 3)
    actualizarPromedio(); // Actualiza el promedio cada vez que se renderiza
}

/**
 * 3. Entrada de Datos: Agrega un nuevo manga al catálogo.
 */
function agregarManga() {
    const titulo = tituloInput.value.trim();
    const genero = generoInput.value;
    // Convierte la puntuación a número, usa 0 si no es válido
    const puntuacion = parseFloat(puntuacionInput.value) || 0;

    // Validación básica para evitar entradas vacías
    if (!titulo || puntuacion < 0 || puntuacion > 10) {
        alert("Por favor, revisa Título y Puntuación (de 0 a 10).");
        return;
    }

    const nuevoManga = {
        id: proximoId++,
        titulo: titulo,
        genero: genero,
        puntuacion: puntuacion,
        estado: "Añadido por usuario"
    };

    CATALOGO_MANGA.push(nuevoManga);

    // Limpiar inputs
    tituloInput.value = '';
    puntuacionInput.value = '';

    // Re-renderizar todo el catálogo (mostrar el nuevo elemento)
    renderizarCatalogo(); 
}

/**
 * 4. Función Avanzada: Utiliza el método .reduce() para calcular el promedio.
 */
function actualizarPromedio() {
    if (CATALOGO_MANGA.length === 0) {
        promedioDisplay.textContent = '0.0';
        return;
    }

    // Calcular la suma total de las puntuaciones usando .reduce()
    const sumaTotal = CATALOGO_MANGA.reduce((acumulador, manga) => {
        return acumulador + manga.puntuacion;
    }, 0); // El 0 es el valor inicial del acumulador

    const promedio = sumaTotal / CATALOGO_MANGA.length;
    promedioDisplay.textContent = promedio.toFixed(2);
}

/**
 *Función Avanzada: Utiliza el método .filter() para filtrar por género.
 */
function filtrarManga() {
    const generoSeleccionado = filtroSelect.value;

    if (generoSeleccionado === 'todos') {
        renderizarCatalogo(CATALOGO_MANGA); // Muestra el catálogo completo
    } else {
        // Usa .filter() para obtener solo los mangas del género seleccionado
        const catalogoFiltrado = CATALOGO_MANGA.filter(manga => {
            return manga.genero === generoSeleccionado;
        });
        
        renderizarCatalogo(catalogoFiltrado); // Renderiza solo el resultado del filtro
    }
}

// --- INICIALIZACIÓN Y EVENT LISTENERS ---

document.addEventListener('DOMContentLoaded', () => {
    //  Inicializa el selector de filtros con las CATEGORIAS
    CATEGORIAS.forEach(cat => {
        const option = document.createElement('option');
        option.value = cat.genero;
        option.textContent = cat.titulo;
        filtroSelect.appendChild(option);
    });

    //  Carga la lista inicial de mangas
    renderizarCatalogo();

    //  Asigna eventos
    agregarBtn.addEventListener('click', agregarManga);
    filtroSelect.addEventListener('change', filtrarManga);
    
    // Asigna Enter al input de puntuación para agregar
    puntuacionInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            agregarManga();
        }
    });
});