// 1. URL de la API Pública de Películas
const API_URL = "https://api.sampleapis.com/movies/animation";

// Imagen de respaldo por si alguna película falla
const POSTER_DEFAULT = "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?w=500";

// 2. ESTADO GLOBAL DE LA APP
let listaPeliculas = [];
let favoritos = JSON.parse(localStorage.getItem("cineflix_favs")) || [];
let vistaActual = "todas"; // 'todas' o 'favoritas'

// 3. SELECCIÓN DE ELEMENTOS
const gridPeliculas = document.getElementById("gridPeliculas");
const btnTodas = document.getElementById("btnTodas");
const btnFavoritas = document.getElementById("btnFavoritas");
const countFavs = document.getElementById("countFavs");
const toast = document.getElementById("toast");

// ==========================================
// 4. FUNCIONES PRINCIPALES
// ==========================================

// A. Consulta a la API
async function obtenerPeliculas() {
    try {
        const res = await fetch(API_URL);
        if (!res.ok) throw new Error("Error en la petición");
        
        listaPeliculas = await res.json();
        actualizarVista();

    } catch (error) {
        console.error(error);
        gridPeliculas.innerHTML = `<p class="loading">❌ No se pudieron cargar las películas.</p>`;
    }
}

// B. Renderizar tarjetas en pantalla
function renderizarPeliculas(coleccion) {
    gridPeliculas.innerHTML = "";
    actualizarContadorFavs();

    if (coleccion.length === 0) {
        gridPeliculas.innerHTML = `<p class="loading">No hay películas para mostrar aquí.</p>`;
        return;
    }

    coleccion.forEach(pelicula => {
        const esFavorito = favoritos.some(f => f.id === pelicula.id);

        const card = document.createElement("div");
        card.classList.add("movie-card");

        card.innerHTML = `
            <img class="movie-poster" src="${pelicula.posterURL}" alt="${pelicula.title}" onerror="this.src='${POSTER_DEFAULT}'">
            <div class="movie-info">
                <h2 class="movie-title">${pelicula.title}</h2>
                
                <div class="actions-row">
                    <!-- Botón Favorito -->
                    <button class="btn-action btn-fav ${esFavorito ? 'active' : ''}">
                        ${esFavorito ? '❤️ Guardado' : '🤍 Favorito'}
                    </button>
                    
                    <!-- Botón Compartir -->
                    <button class="btn-action btn-share">
                        🔗 Compartir
                    </button>
                </div>
            </div>
        `;

        // Evento Favorito
        const btnFav = card.querySelector(".btn-fav");
        btnFav.addEventListener("click", () => toggleFavorito(pelicula));

        // Evento Compartir
        const btnShare = card.querySelector(".btn-share");
        btnShare.addEventListener("click", () => compartirPelicula(pelicula));

        gridPeliculas.appendChild(card);
    });
}

// C. Lógica de Favoritos (LocalStorage)
function toggleFavorito(pelicula) {
    const existeIndex = favoritos.findIndex(f => f.id === pelicula.id);

    if (existeIndex >= 0) {
        favoritos.splice(existeIndex, 1); // Quitar
        mostrarToast("Removido de favoritos 💔");
    } else {
        favoritos.push(pelicula); // Agregar
        mostrarToast("¡Agregado a tus favoritos! ❤️");
    }

    // Persistir en LocalStorage
    localStorage.setItem("cineflix_favs", JSON.stringify(favoritos));
    actualizarVista();
}

// D. Lógica de Compartir (API Web Native + Fallback a Clipboard)
async function compartirPelicula(pelicula) {
    const textoCompartir = `¡Te recomiendo ver "${pelicula.title}" en CineFlix! 🍿`;

    if (navigator.share) {
        try {
            await navigator.share({
                title: pelicula.title,
                text: textoCompartir,
                url: window.location.href
            });
        } catch (e) {
            // Usuario canceló el compartir
        }
    } else {
        // Si el navegador no soporta Web Share, copiamos al portapapeles
        navigator.clipboard.writeText(`${textoCompartir} - ${pelicula.posterURL}`);
        mostrarToast("¡Enlace copiado al portapapeles! 📋");
    }
}

// E. Helpers de Interfaz
function actualizarVista() {
    if (vistaActual === "todas") {
        renderizarPeliculas(listaPeliculas);
    } else {
        renderizarPeliculas(favoritos);
    }
}

function actualizarContadorFavs() {
    countFavs.innerText = favoritos.length;
}

function mostrarToast(mensaje) {
    toast.innerText = mensaje;
    toast.classList.remove("hidden");

    setTimeout(() => {
        toast.classList.add("hidden");
    }, 2500);
}

// ==========================================
// 5. EVENTOS DE PESTAÑAS
// ==========================================
btnTodas.addEventListener("click", () => {
    vistaActual = "todas";
    btnTodas.classList.add("active");
    btnFavoritas.classList.remove("active");
    actualizarVista();
});

btnFavoritas.addEventListener("click", () => {
    vistaActual = "favoritas";
    btnFavoritas.classList.add("active");
    btnTodas.classList.remove("active");
    actualizarVista();
});

// Carga Inicial
obtenerPeliculas();