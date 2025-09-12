const form = document.getElementById("notaForm");
const tituloInput = document.getElementById("titulo");
const contenidoInput = document.getElementById("contenido");
const listaNotas = document.getElementById("listaNotas");
const buscador = document.getElementById("buscador");

// Cargamos notas desde localStorage al iniciar
let notas = JSON.parse(localStorage.getItem("notas")) || [];

// Renderizar notas en pantalla
function renderNotas(filtro = ""){
    listaNotas.innerHTML = "";
    notas
       .filter(nota =>
        nota.titulo.toLowerCase().includes(filtro) || 
        nota.contenido.toLowerCase().includes(filtro)
       )
       .forEach((nota, index) => {
        const div = document.createElement("div");
        div.className = "nota";
        div.innerHTML = `
        <h3> ${nota.titulo} </h3>
        <p>${nota.contenido}</p>
        <button onclick="eliminarNota(${index})">Eliminar</button>
        `;
        listaNotas.appendChild(div);
       });
}

// Agregamos nueva nota

form.addEventListener("submit", e => {
    e.preventDefault();
    const titulo = tituloInput.value.trim();
    const contenido = contenidoInput.value.trim();

    if (titulo === "" || contenido === ""){
        alert("Completá ambos campos");
        return;
    }

    notas.push({ titulo, contenido});
    localStorage.setItem("notas", JSON.stringify(notas));
    renderNotas();
    form.reset();
});

// Eliminamos nota (usamos window para poder llamarla en el onclick)

window.eliminarNota = function (index) {
    notas.splice(index, 1);
    localStorage.setItem("notas", JSON.stringify(notas));
    renderNotas(buscador.value.toLowerCase());
};

// Filtramos notas
buscador.addEventListener("input", e => {
    renderNotas(e.target.value.toLowerCase());
});

// Inicial
renderNotas();