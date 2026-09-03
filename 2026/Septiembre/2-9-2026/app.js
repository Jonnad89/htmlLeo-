const inputNota = document.getElementById("input-nota");
const btnGuardar = document.getElementById("btn-guardar");
const listaNotas = document.getElementById("lista-notas");
const btnLimpiar = document.getElementById("btn-limpiar");

let notas = JSON.parse(localStorage.getItem("mis_notas")) || [];

function renderizarNotas() {
    listaNotas.innerHTML = "";

    if(notas.length === 0) {
        listaNotas.innerHTML = "<li style='color: #888'>No hay nootas guardadas.</li>";
        return;
    }
    notas.forEach((nota, index) => {
        const li = document.createElement("li");

        li.innerHTML = `
            <span>${nota}</span>
            <button class="btn-borrar-item" onclick="eliminarNota(${index})">x</button>
        `;
        listaNotas.appendChild(li)
    });
}

function agregarNota() {
    const texto = inputNota.value.trim();

    if(texto === "") {
        alert("¡Por favor, escribí algo antes de guardar!");
        return;
    }

    notas.push(texto);

    localStorage.setItem("mis_notas", JSON.stringify(notas));

    renderizarNotas();

    inputNota.value = "";
    inputNota.focus()
}

function eliminarNota(indiceAEliminar){
    notas.splice(indiceAEliminar, 1);

    localStorage.setItem("mis_notas", JSON.stringify(notas));

    renderizarNotas();
}

function borrarTodo(){
    const confirmar = confirm("¿Estás seguro de que querés borrar TODAS las notas?");

    if(confirmar){
        notas = [];

        localStorage.removeItem("mis_notas");

        renderizarNotas();
    }
}

btnGuardar.addEventListener("click", agregarNota);

inputNota.addEventListener("keypress", (e) => {
    if (e.key === "Enter") {
        agregarNota();
    }
});

btnLimpiar.addEventListener("click", borrarTodo);

renderizarNotas()