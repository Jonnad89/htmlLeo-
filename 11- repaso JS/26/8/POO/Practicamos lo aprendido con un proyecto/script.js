const formulario = document.getElementById("formulario");
const input = document.getElementById("tareaInput");
const lista = document.getElementById("listaTareas");

formulario.addEventListener("submit",function (e) {
    e.preventDefault();

    const texto = input.value.trim();
    if (texto === "") return;

    const li = document.createElement("li");
    li.textContent = texto;

    const btnEliminar = document.createElement("button");
    btnEliminar.textContent = "Eliminar";
    btnEliminar.className = "eliminar";

    btnEliminar.addEventListener("click", () =>{
        li.remove();
    });

    li.appendChild(btnEliminar);
    lista.appendChild(li);

    input.value = "";
})