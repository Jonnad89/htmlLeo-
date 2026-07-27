const selectGrupo = document.getElementById("selectGrupo");
const btnCargar = document.getElementById("btnCargar");
const txtCarga = document.getElementById("txtCarga");
const tablaBox = document.getElementById("tablaBox");
const cuerpoTabla = document.getElementById("cuerpoTabla");
const txtClasificados = document.getElementById("txtClasificados");

btnCargar.addEventListener("click", async () => {
    // 1. Estados iniciales
    txtCarga.classList.remove("oculto");
    tablaBox.classList.add("oculto");
    cuerpoTabla.innerHTML = ""; // Limpiamos filas anteriores

    // 2. Traemos los datos del archivo JSON local (Simula internet a la perfección)
    let respuesta = await fetch("./grupomundial.json");
    let baseDeDatos = await respuesta.json();

    // 3. Agarramos el grupo que el usuario seleccionó
    let grupoSeleccionado = selectGrupo.value;
    let equipos = baseDeDatos[grupoSeleccionado];

    // 4. ALGORITMO SEMI-SENIOR: Ordenamiento Avanzado (.sort)
    // Ordenamos de mayor a menor por puntos. Si empatan, restamos GF - GC (Diferencia de gol)
    equipos.sort((a, b) => {
        if (b.puntos !== a.puntos) {
            return b.puntos - a.puntos; // Mayor puntaje va arriba
        } else {
            let difGolB = b.gf - b.gc;
            let difGolA = a.gf - a.gc;
            return difGolB - difGolA; // Desempate por diferencia de gol
        }
    });

    // 5. RENDERIZADO DINÁMICO DE LA TABLA
    equipos.forEach((item, indice) => {
        let fila = document.createElement("tr");
        fila.innerHTML = `
            <td>${indice + 1}</td>
            <td><strong>${item.equipo}</strong></td>
            <td>${item.puntos}</td>
            <td>${item.gf}</td>
            <td>${item.gc}</td>
        `;
        cuerpoTabla.appendChild(fila);
    });

    // 6. DETECTAR CLASIFICADOS (Los dos primeros del array ya ordenado)
    txtClasificados.innerText = `🥇 ${equipos[0].equipo} y 🥈 ${equipos[1].equipo}`;

    // 7. Mostrar resultados y ocultar carga
    txtCarga.classList.add("oculto");
    tablaBox.classList.remove("oculto");
});