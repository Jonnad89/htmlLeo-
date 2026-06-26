// 1. Capturamos los elementos interactivos
const buscarBtn = document.getElementById("buscadorBtn");
const filtrador = document.getElementById("buscador");

// Capturamos todas las tarjetas de proyectos
const tarjetas = document.querySelectorAll(".card");

// 2. Definimos la función de filtrado
function filtrarProyectos() {
    // Convertimos lo que escribió el usuario a minúsculas para evitar problemas con las mayúsculas
    const textoBusqueda = filtrador.value.toLowerCase().trim();

    // Recorremos tarjeta por tarjeta
    tarjetas.forEach(tarjeta => {
        // Buscamos el texto de las tecnologías dentro de ESTA tarjeta específica
        const textoTecnologias = tarjeta.querySelector(".tecnologias").innerText.toLowerCase();

        // Si lo que buscamos está adentro de las tecnologías de la tarjeta...
        if (textoTecnologias.includes(textoBusqueda)) {
            tarjeta.style.display = "block"; // Se muestra la tarjeta
        } else {
            tarjeta.style.display = "none";  // Se oculta la tarjeta
        }
    });
}

// 3. Conectamos la acción al botón de buscar
buscarBtn.addEventListener("click", filtrarProyectos);

// EXTRA PRO: Si el usuario presiona "Enter" en el input, también filtra sin clickear el botón
filtrador.addEventListener("keyup", (evento) => {
    if (evento.key === "Enter") {
        filtrarProyectos();
    }
});