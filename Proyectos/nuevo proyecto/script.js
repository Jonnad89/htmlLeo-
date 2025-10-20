// --- 1. SIMULACIÓN DE DATOS (API) ---
// Nota: Deberás tener una carpeta 'covers' con imágenes (ej. 1.jpg, 2.jpg, etc.)
const CATALOGO_COMPLETO = [
    // Género: Acción
    { id: 101, titulo: "Misión Imposible: Caída", genero: "Acción", anio: 2018, descripcion: "Una misión sale mal, y Ethan Hunt y su equipo deben recuperarse a contrarreloj." },
    { id: 102, titulo: "Mad Max: Furia en el Camino", genero: "Acción", anio: 2015, descripcion: "En un futuro post-apocalíptico, una mujer rebelde y un vagabundo luchan por sobrevivir." },
    { id: 103, titulo: "El Origen", genero: "Acción", anio: 2010, descripcion: "Ladrones que se especializan en entrar en los sueños de la gente." },
    
    // Género: Comedia
    { id: 201, titulo: "Superbad (Súper Salidos)", genero: "Comedia", anio: 2007, descripcion: "Dos amigos inadaptados intentan tener una gran fiesta antes de la universidad." },
    { id: 202, titulo: "La La Land", genero: "Comedia", anio: 2016, descripcion: "Un músico y una actriz navegan sus carreras y romance en Los Ángeles." },
    { id: 203, titulo: "El Gran Lebowski", genero: "Comedia", anio: 1998, descripcion: "Un vago es confundido con un millonario y termina involucrado en un secuestro." },
    
    // Género: Terror
    { id: 301, titulo: "Hereditary (El Legado del Diablo)", genero: "Terror", anio: 2018, descripcion: "Tras la muerte de su abuela, una familia descubre secretos terroríficos sobre su linaje." },
    { id: 302, titulo: "Get Out (¡Huye!)", genero: "Terror", anio: 2017, descripcion: "Un joven afroamericano visita a la familia de su novia blanca, con consecuencias perturbadoras." },
    { id: 303, titulo: "Psicosis", genero: "Terror", anio: 1960, descripcion: "Una secretaria que roba dinero se detiene en un motel dirigido por un hombre extraño." }
];

// Estructura para organizar el catálogo en filas (simulando API endpoints)
const CATEGORIAS = [
    { titulo: "Acción que Engancha", genero: "Acción" },
    { titulo: "Risas Garantizadas", genero: "Comedia" },
    { titulo: "Para No Dormir", genero: "Terror" }
];

// --- 2. SELECTORES DEL DOM ---
const contenedorPrincipal = document.getElementById('contenedor-principal');
const inputBusqueda = document.getElementById('input-busqueda');
const modalDetalle = document.getElementById('modal-detalle');
const modalInfo = document.getElementById('modal-info');
const cerrarModalBtn = document.querySelector('.cerrar-modal');

// --- 3. FUNCIONES DE RENDERIZADO Y LÓGICA ---

/**
 * Crea el HTML para una tarjeta de película.
 * @param {object} pelicula 
 * @returns {string} HTML de la tarjeta
 */
function crearTarjetaHTML(pelicula) {
    // Usamos el ID para identificar la película al hacer clic
    // Asumimos que las imágenes están en covers/id.jpg
    return `
        <div class="tarjeta-pelicula" data-id="${pelicula.id}">
            <img src="covers/${pelicula.id}.jpg" alt="${pelicula.titulo}">
        </div>
    `;
}

/**
 * Renderiza el catálogo completo o filtrado.
 * @param {string} terminoBusqueda 
 */
function renderizarCatalogo(terminoBusqueda = '') {
    contenedorPrincipal.innerHTML = '';
    const terminoLower = terminoBusqueda.toLowerCase().trim();

    CATEGORIAS.forEach(categoria => {
        // 1. Filtrar las películas para esta categoría
        let peliculasFiltradas = CATALOGO_COMPLETO.filter(p => 
            p.genero === categoria.genero && 
            p.titulo.toLowerCase().includes(terminoLower)
        );

        // Si no hay películas para mostrar en esta fila (ni por género ni por búsqueda), omitimos.
        if (peliculasFiltradas.length === 0) {
            return; 
        }

        // 2. Crear la fila (contenedor de la categoría)
        const filaDiv = document.createElement('div');
        filaDiv.classList.add('fila-categoria');
        
        filaDiv.innerHTML = `<h2>${categoria.titulo}</h2>`;
        
        const carruselDiv = document.createElement('div');
        carruselDiv.classList.add('carrusel-peliculas');

        // 3. Crear las tarjetas y agregarlas al carrusel
        peliculasFiltradas.forEach(pelicula => {
            carruselDiv.innerHTML += crearTarjetaHTML(pelicula);
        });

        filaDiv.appendChild(carruselDiv);
        contenedorPrincipal.appendChild(filaDiv);
    });
    
    if (contenedorPrincipal.innerHTML === '' && terminoBusqueda.length > 0) {
        contenedorPrincipal.innerHTML = '<p style="text-align: center; font-size: 1.5em; margin-top: 50px;">No se encontraron resultados para su búsqueda.</p>';
    }
}

/**
 * Muestra el modal con la información de la película.
 * @param {number} id 
 */
function mostrarDetallePelicula(id) {
    const pelicula = CATALOGO_COMPLETO.find(p => p.id === id);
    if (!pelicula) return;

    modalInfo.innerHTML = `
        <img src="covers/${pelicula.id}.jpg" alt="${pelicula.titulo}" style="width: 100%; max-height: 250px; object-fit: cover; border-radius: 8px;">
        <h2 style="color: var(--color-primario); margin-top: 15px;">${pelicula.titulo} (${pelicula.anio})</h2>
        <p><strong>Género:</strong> ${pelicula.genero}</p>
        <p><strong>Sinopsis:</strong> ${pelicula.descripcion}</p>
    `;
    
    modalDetalle.style.display = 'block';
}


// --- 4. MANEJO DE EVENTOS ---

// Evento de Búsqueda en tiempo real
inputBusqueda.addEventListener('input', (e) => {
    // Renderiza el catálogo cada vez que se escribe una letra
    renderizarCatalogo(e.target.value);
});

// Evento para Abrir el Modal al hacer clic en cualquier tarjeta
contenedorPrincipal.addEventListener('click', (e) => {
    // Usamos .closest() para asegurarnos de que el clic fue en la tarjeta o dentro de ella
    const tarjeta = e.target.closest('.tarjeta-pelicula');
    
    if (tarjeta) {
        const id = parseInt(tarjeta.dataset.id);
        mostrarDetallePelicula(id);
    }
});

// Eventos para Cerrar el Modal
cerrarModalBtn.addEventListener('click', () => {
    modalDetalle.style.display = 'none';
});

// Cerrar si se hace clic fuera del modal
window.addEventListener('click', (e) => {
    if (e.target === modalDetalle) {
        modalDetalle.style.display = 'none';
    }
});


// --- 5. INICIO DE LA APLICACIÓN ---
document.addEventListener('DOMContentLoaded', () => {
    renderizarCatalogo();
});

const contenedorPrincipal = document.getElementById("contenedor-principal");
const inputBusqueda = document.getElementById("input-busqueda"); // Usado 'input-busqueda' como en el HTML original
const modalDetalle = document.getElementById("modal-detalle");
const modalInfo = document.getElementById("modal-info");
const cerrarModalBtn = document.querySelector(".cerrar-modal");

// --- 3. FUNCIONES DE RENDERIZADO Y LÓGICA ---

/**
 * Crea el HTML para una tarjeta de película.
 * @param {object} pelicula El objeto de la película.
 * @returns {string} */