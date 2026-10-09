const PELICULAS_DB = [
    {
        id: "m1",
        titulo: "The Matrix",
        anio: "1999",
        tipo: "movie",
        categoria: "Ciencia Ficción",
        poster: "https://m.media-amazon.com/images/M/MV5BNzQzOTk3OTAtNDQ0Zi00ZTVkLWI0MTEtMDllZjNkYzNjNTc4XkEyXkFqcGc@._V1_SX300.jpg"
    },
    {
        id: "m2",
        titulo: "Inception",
        anio: "2010",
        tipo: "movie",
        categoria: "Ciencia Ficción",
        poster: "https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_SX300.jpg"
    },
    {
        id: "m3",
        titulo: "Interstellar",
        anio: "2014",
        tipo: "movie",
        categoria: "Ciencia Ficción",
        poster: "https://m.media-amazon.com/images/M/MV5BYzdjMDAxZGItMjI2My00ODA1LTlkNzItOWFjMDU5ZDJlYWY3XkEyXkFqcGc@._V1_SX300.jpg"
    },
    {
        id: "s1",
        titulo: "Breaking Bad",
        anio: "2008",
        tipo: "series",
        categoria: "Drama",
        poster: "https://m.media-amazon.com/images/M/MV5BYmQ4YWMxYjUtNjZmYi00MDlhLThjMjUtZDk5ZDgwOGJhNmU2XkEyXkFqcGc@._V1_SX300.jpg"
    },
    {
        id: "s2",
        titulo: "Stranger Things",
        anio: "2016",
        tipo: "series",
        categoria: "Ciencia Ficción",
        poster: "https://m.media-amazon.com/images/M/MV5BMjg2M2QyNzgtMGVmYy00ZjFlLWE4NzUtY2RjMDhkMzA0Nzg0XkEyXkFqcGc@._V1_SX300.jpg"
    },
    {
        id: "m4",
        titulo: "The Dark Knight",
        anio: "2008",
        tipo: "movie",
        categoria: "Acción",
        poster: "https://m.media-amazon.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_SX300.jpg"
    },
    {
        id: "m5",
        titulo: "Pulp Fiction",
        anio: "1994",
        tipo: "movie",
        categoria: "Crimen",
        poster: "https://m.media-amazon.com/images/M/MV5BYTViYTE3ZGQtNDBlMC00MzA5LTkyMDgtZGIxMGE5MS1bN2IxXkEyXkFqcGc@._V1_SX300.jpg"
    },
    {
        id: "s3",
        titulo: "The Office",
        anio: "2005",
        tipo: "series",
        categoria: "Comedia",
        poster: "https://m.media-amazon.com/images/M/MV5BZjRjOTI1MDUtZTA4NC00YjgwLTM5ebd0LWY4ZjM0M2I0OGE1XkEyXkFqcGc@._V1_SX300.jpg"
    },
    {
        id: "m6",
        titulo: "Avatar",
        anio: "2009",
        tipo: "movie",
        categoria: "Acción",
        poster: "https://m.media-amazon.com/images/M/MV5BMDEzMmQwZjctZWU1Ni00NWExLTg5MjItZDY3NjM2NDI0NWFlXkEyXkFqcGc@._V1_SX300.jpg"
    },
    {
        id: "s4",
        titulo: "The Mandalorian",
        anio: "2019",
        tipo: "series",
        categoria: "Acción",
        poster: "https://m.media-amazon.com/images/M/MV5BN2M3NjI0NWYtN2U3NC00Y2IzLTkzZjItOWI2ODY4NDU4OTBmXkEyXkFqcGc@._V1_SX300.jpg"
    }
];

// 1. CAPTURA DE ELEMENTOS DEL DOM
const searchForm = document.getElementById("search-form");
const searchInput = document.getElementById("search-input");
const typeSelect = document.getElementById("type-select");
const moviesGrid = document.getElementById("movies-grid");
const favCountSpan = document.getElementById("fav-count");

const tabSearch = document.getElementById("tab-search");
const tabFavs = document.getElementById("tab-favs");

// 2. ESTADO
let favoritos = JSON.parse(localStorage.getItem("mis_favoritos")) || [];
let resultadosActuales = [...PELICULAS_DB]; // Al inicio mostramos todas
let vistaActual = "buscar"; // 'buscar' | 'favoritos'

// 3. BUSCADOR LOCAL
function filtrarPeliculas() {
    const query = searchInput.value.trim().toLowerCase();
    const tipo = typeSelect.value;

    resultadosActuales = PELICULAS_DB.filter(peli => {
        const coincideTitulo = peli.titulo.toLowerCase().includes(query);
        const coincideTipo = tipo === "" || peli.tipo === tipo;
        return coincideTitulo && coincideTipo;
    });

    renderizarPeliculas(resultadosActuales);
}

// 4. EVENTOS DE BÚSQUEDA Y NAVEGACIÓN
searchForm.addEventListener("submit", (e) => {
    e.preventDefault();
    vistaActual = "buscar";
    activarTab(tabSearch, tabFavs);
    filtrarPeliculas();
});

// Búsqueda en tiempo real al escribir
searchInput.addEventListener("input", () => {
    if (vistaActual === "buscar") filtrarPeliculas();
});

typeSelect.addEventListener("change", () => {
    if (vistaActual === "buscar") filtrarPeliculas();
});

tabSearch.addEventListener("click", () => {
    vistaActual = "buscar";
    activarTab(tabSearch, tabFavs);
    renderizarPeliculas(resultadosActuales);
});

tabFavs.addEventListener("click", () => {
    vistaActual = "favoritos";
    activarTab(tabFavs, tabSearch);
    renderizarPeliculas(favoritos);
});

// 5. RENDERIZADO EN PANTALLA
function renderizarPeliculas(lista) {
    moviesGrid.innerHTML = "";
    actualizarContador();

    if (lista.length === 0) {
        moviesGrid.innerHTML = vistaActual === "favoritos" 
            ? `<p class="placeholder-text">No tenés películas en favoritos todavía.</p>`
            : `<p class="placeholder-text">No se encontraron películas con ese filtro.</p>`;
        return;
    }

    lista.forEach(peli => {
        const esFav = favoritos.some(f => f.id === peli.id);

        const card = document.createElement("article");
        card.className = "movie-card";

        card.innerHTML = `
            <img src="${peli.poster}" alt="${peli.titulo}">
            <div class="movie-info">
                <div>
                    <h3>${peli.titulo}</h3>
                    <p>${peli.anio} • ${peli.tipo.toUpperCase()} • ${peli.categoria}</p>
                </div>
                ${
                    esFav 
                        ? `<button class="btn-remove" onclick="quitarFavorito('${peli.id}')">💔 Quitar</button>`
                        : `<button class="btn-fav" onclick="guardarFavorito('${peli.id}')">❤ Favorito</button>`
                }
            </div>
        `;

        moviesGrid.appendChild(card);
    });
}

// 6. GESTIÓN DE FAVORITOS (LOCALSTORAGE)
function guardarFavorito(id) {
    const peliAGuardar = PELICULAS_DB.find(p => p.id === id);
    if (!peliAGuardar) return;

    if (!favoritos.some(f => f.id === id)) {
        favoritos.push(peliAGuardar);
        guardarStorage();
        renderizarPeliculas(vistaActual === "buscar" ? resultadosActuales : favoritos);
    }
}

function quitarFavorito(id) {
    favoritos = favoritos.filter(f => f.id !== id);
    guardarStorage();
    renderizarPeliculas(vistaActual === "buscar" ? resultadosActuales : favoritos);
}

function guardarStorage() {
    localStorage.setItem("mis_favoritos", JSON.stringify(favoritos));
}

function actualizarContador() {
    favCountSpan.textContent = favoritos.length;
}

function activarTab(activa, inactiva) {
    activa.classList.add("active");
    inactiva.classList.remove("active");
}

// Carga Inicial
renderizarPeliculas(PELICULAS_DB);