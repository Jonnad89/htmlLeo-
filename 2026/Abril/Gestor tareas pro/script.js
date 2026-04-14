//1. Estado de la aplicación

let tareas = [];
let filtroActual = 'todas';

const taskInput = document.getElementById("task-input");
const addBtn = document.getElementById("add-btn");
const taskList = document.getElementById("task-list");
const counterDisplay = document.getElementById("counter")

//2. Fución para agregar tarea
addBtn.addEventListener("click", () => {
    if (taskInput.value.trim() === "") return;

    const nuevaTarea = {
        id: Date.now(), // Genera un ID único basado en el tiempo
        texto: taskInput.value,
        completada: false
    };

    tareas.push(nuevaTarea);
    taskInput.value = "";
    render();
});

//3. función para cambiar estado (Completar/descompletada)
function toggleTarea(id) {
    tareas = tareas.map(t => {
        if(t.id === id) {
            return { ...t, completada: !t.completada};
        }
        return t;
    });
    render();
}

//4. Función para eliminar
function eliminarTarea(id) {
    tareas = tareas.filter(t => t.id !== id);
    render();
}

//5. Lógica de filtrado
function filtrarTareas(filtro) {
    filtroActual = filtro;
    render();
}

//6. Función de renderizado (pinta todo en el html)
function render() {
    taskList.innerHTML = "";

    // Aplicamos el filtro antes de mostrar
    let tareasAMostrar = tareas;
    if (filtroActual === "pendientes") tareasAMostrar = tareas.filter(t => !t.completada);
    if (filtroActual === "completadas") tareasAMostrar = tareas.filter(t => t.completada);    

    tareasAMostrar.forEach(t => {
        const li = document.createElement('li');
        li.innerHTML = `
        
        <span class="${t.completada ? 'completed' : ''}" style="cursor:pointer" onclick="toggleTarea(${t.id})">
        ${t.texto}
        </span>

        <button onclick='eliminarTarea(${t.id})' style="background:red">X</button>
        
        `;

        taskList.appendChild(li);

        // Lógica del contador 
        //filtramos las que NO están completadas y miramos el largo del array
        // const pendientes = tareas.find(t => !t.completada).length;

        //Actualizamos el texto en el HTML
        // counterDisplay.innerText = `Tenés ${pendientes} tareas pendientes`

        const totalPendientes = tareas.filter(t => t.completada === false).length;


        if (counterDisplay) {
            counterDisplay.innerText = `Tenes ${totalPendientes} tareas pendientes`
        } else {
            console.error("No se encontro el elmento con ID 'counter' en el html")
        }
    });
}