const formulario = document.getElementById("formulario");
const input = document.getElementById("tareaInput");
const lista = document.getElementById("listaTareas");

// Cargar tareas guardadas al iniciar

let tareas = JSON.parse(localStorage.getItem("tareas")) || [];
tareas.forEach((tarea) => crearElemento(tarea));

// Evento para agregar tareas nuevas

formulario.addEventListener("submit", function (e) {
  e.preventDefault();

  const texto = input.value.trim();
  if (texto === "") return;
  tareas.push(texto);
  guardarTareas();
  crearElemento(texto);
  input.value = "";
});
  // Función para crear un <li> con botón de elminar

  function crearElemento(texto) {
    const li = document.createElement("li");
    li.textContent = texto;
    const btnEliminar = document.createElement("button");
    btnEliminar.textContent = "Eliminar";
    btnEliminar.className = "eliminar";

    btnEliminar.addEventListener("click", () => {
      li.remove();
      tareas = tareas.filter(t => t !== texto);
      guardarTareas();
    });

    li.appendChild(btnEliminar);
    lista.appendChild(li);
  }

  // Guardar en localStorage
function guardarTareas() {
    localStorage.setItem("tareas", JSON.stringify(tareas))
}
  

