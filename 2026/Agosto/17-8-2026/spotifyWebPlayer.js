// Captura de elementos del DOM
const caratulaImg = document.getElementById("caratula-img");
const cancionTitulo = document.getElementById("cancionActual");
const artistaTitulo = document.getElementById("artistaActual");

const barraProgreso = document.getElementById("barra-progreso");
const timerCancion = document.getElementById("timer-cancion");

const btnAnterior = document.getElementById("btn-anterior");
const btnPlayStop = document.getElementById("btn-play-stop");
const btnSiguiente = document.getElementById("btn-siguiente");
const volumenBar = document.getElementById("volumen");

const listaDeCanciones = document.getElementById("canciones");

// Reproductor nativo de Audio
const audio = new Audio();

let playlist = [];
let cancionActualIndex = 0;
let estasReproduciendo = false;

document.addEventListener("DOMContentLoaded", () => {
    audio.volume = volumenBar.value / 100;
    buscarCancionesEnApi("rock argentino");
});

// Petición Fetch usando la API pública de iTunes
async function buscarCancionesEnApi(termino) {
    const url = `https://itunes.apple.com/search?term=${encodeURIComponent(termino)}&entity=song&limit=10`;

    try {
        const respuesta = await fetch(url);
        if (!respuesta.ok) throw new Error("Error en la petición a la API");

        const datos = await respuesta.json();

        // Mapeo de datos
        playlist = datos.results.map((item, index) => ({
            id: index,
            titulo: item.trackName,
            artista: item.artistName,
            album: item.collectionName,
            cover: item.artworkUrl100.replace("100x100bb", "300x300bb"), // Imagen de mayor calidad
            src: item.previewUrl
        }));

        if (playlist.length > 0) {
            renderizarPlaylist();
            cargarCancion(0);
        } else {
            cancionTitulo.innerText = "No se encontraron canciones";
        }
    } catch (error) {
        console.error("Error al conectar con la API:", error);
        cancionTitulo.innerText = "Error al cargar la música";
    }
}

function renderizarPlaylist() {
    listaDeCanciones.innerHTML = "";

    playlist.forEach((cancion, index) => {
        const fila = document.createElement("tr");
        fila.classList.add("track-row");
        if (index === cancionActualIndex) fila.classList.add("playing");

        fila.innerHTML = `
            <td>${index + 1}</td>
            <td><strong>${cancion.titulo}</strong><br><small style="color:#a7a7a7">${cancion.artista}</small></td>
            <td>${cancion.album}</td>
            <td>0:30 🎵</td>
        `;

        fila.addEventListener("click", () => {
            cancionActualIndex = index;
            cargarCancion(cancionActualIndex);
            reproducir();
        });

        listaDeCanciones.appendChild(fila);
    });
}

function cargarCancion(index) {
    const track = playlist[index];
    if (!track) return;

    audio.src = track.src;
    caratulaImg.src = track.cover;
    cancionTitulo.innerText = track.titulo;
    artistaTitulo.innerText = track.artista;

    renderizarPlaylist();
}

async function reproducir() {
    try {
        await audio.play();
        estasReproduciendo = true;
        btnPlayStop.innerText = "⏸️";
    } catch (error) {
        console.log("Reproducción interrumpida:", error);
    }
}

function pausar() {
    audio.pause();
    estasReproduciendo = false;
    btnPlayStop.innerText = "▶️";
}

btnPlayStop.addEventListener("click", () => {
    if (estasReproduciendo) {
        pausar();
    } else {
        reproducir();
    }
});

btnSiguiente.addEventListener("click", () => {
    if (playlist.length === 0) return;
    cancionActualIndex = (cancionActualIndex + 1) % playlist.length;
    cargarCancion(cancionActualIndex);
    reproducir();
});

btnAnterior.addEventListener("click", () => {
    if (playlist.length === 0) return;
    cancionActualIndex = (cancionActualIndex - 1 + playlist.length) % playlist.length;
    cargarCancion(cancionActualIndex);
    reproducir();
});

// Sincronización del tiempo
audio.addEventListener("timeupdate", () => {
    if (audio.duration) {
        const porcentaje = (audio.currentTime / audio.duration) * 100;
        barraProgreso.value = porcentaje;
        timerCancion.innerText = formatearTiempo(audio.currentTime);
    }
});

barraProgreso.addEventListener("input", () => {
    if (audio.duration) {
        const nuevoTiempo = (barraProgreso.value / 100) * audio.duration;
        audio.currentTime = nuevoTiempo;
    }
});

volumenBar.addEventListener("input", () => {
    audio.volume = volumenBar.value / 100;
});

audio.addEventListener("ended", () => {
    btnSiguiente.click();
});

function formatearTiempo(segundos) {
    const min = Math.floor(segundos / 60);
    const seg = Math.floor(segundos % 60);
    return `${min}:${seg < 10 ? "0" : ""}${seg}`;
}