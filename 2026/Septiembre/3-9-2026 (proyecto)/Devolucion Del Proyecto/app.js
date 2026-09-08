// ============================================================================
// 1. CAPTURA DE ELEMENTOS DEL DOM
// ============================================================================
const inputAgregarTarea = document.getElementById("input-agregar-tarea");
const btnAgregarTarea = document.getElementById("btn-agregar-tarea");
const listaPendientes = document.getElementById("pendientes");
const listaCompletadas = document.getElementById("completadas");
const btnLimpiarListas = document.getElementById("btn-borrar-listas");

// ============================================================================
// 2. ESTADO INICIAL Y PERSISTENCIA (LOCALSTORAGE)
// CORRECCIÓN: Usamos un array de objetos para mantener los datos sincronizados.
// ============================================================================
let tareas = JSON.parse(localStorage.getItem("mis_tareas_leo")) || [];

// ============================================================================
// 3. FUNCIÓN DE RENDERIZADO (El Estado manda)
// ============================================================================
function renderizarTareas() {
    // Limpiamos ambas listas antes de volver a dibujar
    listaPendientes.innerHTML = "";
    listaCompletadas.innerHTML = "";

    // Recorremos el array de tareas
    tareas.forEach((tarea) => {
        const li = document.createElement("li");

        if (!tarea.completada) {
            // Tarea Pendiente: Botón '👉' para pasar a completada
            li.innerHTML = `
                <span>${tarea.texto}</span>
                <button class="btn-accion" onclick="completarTarea(${tarea.id})">👉</button>
            `;
            listaPendientes.appendChild(li);
        } else {
            // Tarea Completada: Botón '🗑️' para eliminar
            li.innerHTML = `
                <span>${tarea.texto}</span>
                <button class="btn-accion" onclick="eliminarTarea(${tarea.id})">🗑️</button>
            `;
            listaCompletadas.appendChild(li);
        }
    });
}

function guardarEnStorage() {
    localStorage.setItem("mis_tareas_leo", JSON.stringify(tareas));
}

// ============================================================================
// 4. FUNCIONALIDADES
// ============================================================================

function cargarTarea() {
    // CORRECCIÓN: Accedemos a .value y usamos .trim() para quitar espacios vacíos
    const texto = inputAgregarTarea.value.trim();

    // CORRECCIÓN: Validamos que el String NO esté vacío
    if (texto === "") {
        alert("¡Por favor, escribí una tarea!");
        return;
    }

    // Creamos el objeto de la tarea
    const nuevaTarea = {
        id: Date.now(),
        texto: texto,
        completada: false
    };

    // Modificamos estado, guardamos en storage y renderizamos
    tareas.push(nuevaTarea);
    guardarEnStorage();
    renderizarTareas();

    // Limpiamos el input
    inputAgregarTarea.value = "";
    inputAgregarTarea.focus();
}

// Función para cambiar el estado de pendiente a completada
function completarTarea(id) {
    tareas = tareas.map(t => {
        if (t.id === id) t.completada = true;
        return t;
    });

    guardarEnStorage();
    renderizarTareas();
}

// Función para borrar una tarea individual
function eliminarTarea(id) {
    tareas = tareas.filter(t => t.id !== id);
    guardarEnStorage();
    renderizarTareas();
}

// Función para vaciar las dos listas
function borrarTodo() {
    if (confirm("¿Querés borrar todas las listas?")) {
        tareas = [];
        localStorage.removeItem("mis_tareas_leo");
        renderizarTareas();
    }
}

// ============================================================================
// 5. EVENTOS E INICIALIZACIÓN
// ============================================================================
btnAgregarTarea.addEventListener("click", cargarTarea);

// Permitir presionar 'Enter' en el input
inputAgregarTarea.addEventListener("keypress", (e) => {
    if (e.key === "Enter") cargarTarea();
});

btnLimpiarListas.addEventListener("click", borrarTodo);

// Dibujar las tareas guardadas al iniciar la app
renderizarTareas();