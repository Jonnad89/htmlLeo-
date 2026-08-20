function contarCanciones(lista) {
    return lista.reduce((acumulador, cancion) => {
        // Si la canción ya existe en el objeto le suma 1, si no la inicializa en 1
        acumulador[cancion] = (acumulador[cancion] || 0) + 1;
        return acumulador;
    }, {});
}

// Prueba:
const entrada1 = ["Canción A", "Canción B", "Canción A", "Canción C", "Canción B", "Canción A"];
console.log(contarCanciones(entrada1));
// Resultado: { "Canción A": 3, "Canción B": 2, "Canción C": 1 }

function formatearTiempo(segundos) {
    const min = Math.floor(segundos / 60);
    const seg = segundos % 60;
    return `${min}:${seg < 10 ? "0" : ""}${seg}`;
}

function agruparPorArtista(temas) {
    const agrupado = {};

    temas.forEach(item => {
        // Inicializa el registro del artista si es la primera vez que aparece
        if (!agrupado[item.artista]) {
            agrupado[item.artista] = { cantidad: 0, segundosTotales: 0 };
        }
        
        agrupado[item.artista].cantidad += 1;
        agrupado[item.artista].segundosTotales += item.duracion;
    });

    // Convierte los segundos acumulados al formato MM:SS
    const resultado = {};
    for (const artista in agrupado) {
        resultado[artista] = {
            cantidad: agrupado[artista].cantidad,
            tiempoTotal: formatearTiempo(agrupado[artista].segundosTotales)
        };
    }

    return resultado;
}

// Prueba:
const temasPrueba = [
    { artista: "Charly", duracion: 180 },
    { artista: "Spinetta", duracion: 200 },
    { artista: "Charly", duracion: 150 }
];
console.log(agruparPorArtista(temasPrueba));
// Resultado: { Charly: { cantidad: 2, tiempoTotal: "5:30" }, Spinetta: { cantidad: 1, tiempoTotal: "3:20" } }

function armarPlaylist(listaCanciones, maxSegundos) {
    let tiempoRestante = maxSegundos;
    const playlistElegida = [];

    for (const cancion of listaCanciones) {
        if (cancion.duracion <= tiempoRestante) {
            playlistElegida.push(cancion);
            tiempoRestante -= cancion.duracion;
        }
    }

    return {
        playlist: playlistElegida,
        segundosSobrantes: tiempoRestante
    };
}

// Prueba:
const listaTemas = [
    { titulo: "Tema 1", duracion: 200 },
    { titulo: "Tema 2", duracion: 150 },
    { titulo: "Tema 3", duracion: 80 }
];
console.log(armarPlaylist(listaTemas, 300));
// Resultado: Agrega solo "Tema 1" y devuelves sobrantes: 100

function mezclarInteligente(listaCanciones) {
    let disponibles = [...listaCanciones];
    const resultado = [];

    while (disponibles.length > 0) {
        const ultimoArtista = resultado.length > 0 ? resultado[resultado.length - 1].artista : null;

        // Filtra canciones cuyo artista sea diferente al último agregado
        let opcionesValidas = disponibles.filter(cancion => cancion.artista !== ultimoArtista);

        // Si no quedan canciones de artistas diferentes, toma lo que queda
        if (opcionesValidas.length === 0) {
            opcionesValidas = disponibles;
        }

        // Selección aleatoria
        const indiceAzar = Math.floor(Math.random() * opcionesValidas.length);
        const cancionElegida = opcionesValidas[indiceAzar];

        resultado.push(cancionElegida);

        // Remueve la canción seleccionada del array de disponibles
        const indiceEnDisponibles = disponibles.indexOf(cancionElegida);
        disponibles.splice(indiceEnDisponibles, 1);
    }

    return resultado;
}

// Prueba:
const playlistOriginal = [
    { titulo: "De Mí", artista: "Charly García" },
    { titulo: "Rezo por Vos", artista: "Charly García" },
    { titulo: "Barro Tal Vez", artista: "Spinetta" },
    { titulo: "Goteo", artista: "Duki" },
    { titulo: "Hablando a tu Corazón", artista: "Charly García" }
];
console.log(mezclarInteligente(playlistOriginal));