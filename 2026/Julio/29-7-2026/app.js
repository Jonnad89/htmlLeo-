// 1. URL de la API de Radio Browser (Top radios de Argentina)
const API_URL = "https://de1.api.radio-browser.info/json/stations/bycountry/argentina?limit=15&order=clickcount&reverse=true";

// Logo por defecto en caso de que la radio no tenga imagen en la API
const LOGO_DEFAULT = "https://cdn-icons-png.flaticon.com/512/3083/3083226.png";

// 2. Selección de elementos del DOM
const listaRadios = document.getElementById("listaRadios");
const reproductorAudio = document.getElementById("reproductorAudio");
const tituloRadio = document.getElementById("tituloRadio");

// 3. Función Async para consultar la API con fetch()
async function obtenerRadios() {
    try {
        const respuesta = await fetch(API_URL);
        
        if (!respuesta.ok) {
            throw new Error("No se pudo obtener la lista de radios");
        }

        const radios = await respuesta.json();
        renderizarRadios(radios);

    } catch (error) {
        console.error("Error al cargar la radio:", error);
        listaRadios.innerHTML = `<p class="loading">❌ Error al cargar las estaciones.</p>`;
    }
}

// 4. Dibujar la lista de radios en el HTML
function renderizarRadios(radios) {
    listaRadios.innerHTML = ""; // Limpiamos el texto de carga

    radios.forEach((radio) => {
        const item = document.createElement("div");
        item.classList.add("station-item");

        // Usamos el logo de la API o la imagen por defecto si viene vacío
        const logoUrl = radio.favicon ? radio.favicon : LOGO_DEFAULT;

        item.innerHTML = `
            <img class="station-logo" src="${logoUrl}" alt="${radio.name}" onerror="this.src='${LOGO_DEFAULT}'">
            <span class="station-name">${radio.name}</span>
        `;

        // Evento de Selección y Reproducción
        item.addEventListener("click", () => {
            sintonizarRadio(radio, item);
        });

        listaRadios.appendChild(item);
    });
}

// 5. Cambiar de radio activa y reproducir
function sintonizarRadio(radio, elementoHTML) {
    // A. Actualizamos el título de la radio sonando
    tituloRadio.innerText = radio.name;

    // B. Le pasamos la URL del streaming al reproductor
    reproductorAudio.src = radio.url_resolved;
    reproductorAudio.play();

    // C. Marcamos visualmente la radio activa en la lista
    document.querySelectorAll(".station-item").forEach(el => el.classList.remove("active"));
    elementoHTML.classList.add("active");
}

// Carga Inicial
obtenerRadios();