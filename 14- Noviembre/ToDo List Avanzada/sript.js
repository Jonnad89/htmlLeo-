// --- 1. ESTRUCTURA DE DATOS (Array de Objetos) ---
let tareas = [];


// --- SELECTORES DEL DOM ---
const tareaInput = document.getElementById('nueva-tarea-input');
const agregarBtn = document.getElementById('agregar-btn');
const listaTareasUL = document.getElementById('lista-tareas');


// --- FUNCIONES LÓGICAS DE GESTIÓN DEL ARRAY ---

/**
 * 3. Agrega una nueva tarea al array.
 */
function agregarTarea() {
    const texto = tareaInput.value.trim();
    if (texto === "") return; // No agregar tareas vacías

    const nuevaTarea = {
        // Genera un ID único basado en la hora actual
        id: Date.now(), 
        texto: texto,
        completada: false
    };

    tareas.push(nuevaTarea);
    tareaInput.value = ''; // Limpiar el input
    renderizarTareas(); // Volver a dibujar la lista
}


/**
 * 4. Cambia el estado 'completada' de una tarea.
 * @param {number} idTarea - El ID de la tarea a alternar.
 */
function alternarCompletada(idTarea) {
    // Buscar la tarea por ID y cambiar su estado
    const tarea = tareas.find(t => t.id === idTarea);
    if (tarea) {
        tarea.completada = !tarea.completada; // Alternar true/false
        renderizarTareas(); // Volver a dibujar
    }
}


/**
 * 5. Elimina una tarea del array.
 * @param {number} idTarea - El ID de la tarea a eliminar.
 */
function eliminarTarea(idTarea) {
    // Usar filter para crear un nuevo array SIN la tarea con ese ID
    tareas = tareas.filter(t => t.id !== idTarea);
    renderizarTareas(); // Volver a dibujar
}


// --- 2. FUNCIÓN DE RENDERIZADO (Dibuja el DOM a partir del Array) ---
function renderizarTareas() {
    // Limpiar el contenedor HTML
    listaTareasUL.innerHTML = ''; 

    // Recorrer el array y crear el HTML para cada tarea
    tareas.forEach(tarea => {
        const li = document.createElement('li');
        li.classList.add('tarea-item');
        // Si está completada, añadir la clase CSS
        if (tarea.completada) {
            li.classList.add('completada');
        }

        // Usar un dataset para almacenar el ID en el HTML
        li.dataset.id = tarea.id; 

        li.innerHTML = `
            <input type="checkbox" 
                   ${tarea.completada ? 'checked' : ''} 
                   data-id="${tarea.id}" 
                   class="completar-checkbox">
            
            <span class="tarea-texto">${tarea.texto}</span>
            
            <button class="eliminar-btn" data-id="${tarea.id}">X</button>
        `;
        
        listaTareasUL.appendChild(li);
    });

    // ¡Importante! Reasignar los listeners después de renderizar
    asignarListenersLista(); 
}


// --- GESTIÓN DE EVENTOS DINÁMICOS ---
function asignarListenersLista() {
    // 1. Asignar listener para el botón de ELIMINAR
    document.querySelectorAll('.eliminar-btn').forEach(button => {
        button.onclick = (e) => {
            // Convertir el ID del dataset a número
            const id = parseInt(e.target.dataset.id);
            eliminarTarea(id);
        };
    });

    // 2. Asignar listener para el checkbox de COMPLETADO
    document.querySelectorAll('.completar-checkbox').forEach(checkbox => {
        checkbox.onchange = (e) => {
            const id = parseInt(e.target.dataset.id);
            alternarCompletada(id);
        };
    });
}


// --- INICIALIZACIÓN ---
document.addEventListener('DOMContentLoaded', () => {
    // 3. Asignar listener al botón AGREGAR
    agregarBtn.addEventListener('click', agregarTarea);

    // Permitir agregar también con la tecla Enter en el input
    tareaInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            agregarTarea();
        }
    });
    
    // Renderizar la lista inicialmente (estará vacía)
    renderizarTareas(); 
});