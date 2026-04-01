// --- 1. ESTRUCTURA DE DATOS ---
let listaTareas = []; 

// --- SELECTORES DEL DOM ---
const tareaInput = document.getElementById('tarea-input');
const agregarBtn = document.getElementById('agregar-btn');
const listaContenedor = document.getElementById('lista-tareas');


/**
 * 2. Lógica de Clasificación: Determina la prioridad de una tarea.
 * @param {string} texto La descripción de la tarea.
 * @returns {object} Un objeto con { prioridad: string, color: string }.
 */
function clasificarPrioridad(texto) {
    const tarea = texto.toUpperCase(); // Convertir a mayúsculas para simplificar la búsqueda (case-insensitive)
    
    // 4. Lógica de Prioridad (if/else if/else y ||)
    if (tarea.includes("URGENTE") || tarea.includes("HOY")) {
        return { prioridad: "ALTA", color: "var(--color-alta)" }; // Rojo
    } else if (tarea.includes("MAÑANA") || tarea.includes("SEMANA")) {
        return { prioridad: "MEDIA", color: "var(--color-media)" }; // Azul
    } else {
        return { prioridad: "BAJA", color: "blue" }; // Gris
    }
}


/**
 * 5. Salida Dinámica: Recorre el array y actualiza el HTML.
 */
function renderizarTareas() {
    listaContenedor.innerHTML = ''; // Limpiar el contenedor
    
    // Bucle para recorrer el array de tareas
    listaTareas.forEach((tareaTexto) => {
        const clasificacion = clasificarPrioridad(tareaTexto);
        
        // Crear el elemento de la lista
        const tareaItem = document.createElement('div');
        tareaItem.classList.add('tarea-item');
        
        // Aplicar el estilo condicional
        tareaItem.style.backgroundColor = clasificacion.color;
        
        // Definir el contenido
        tareaItem.innerHTML = `
            <span class="prioridad">${clasificacion.prioridad}</span>
            <span class="texto">${tareaTexto}</span>
        `;
        
        listaContenedor.appendChild(tareaItem);
    });
}


/**
 * 3. Función de Agregado: Captura la entrada y modifica el array.
 */
function agregarTarea() {
    const texto = tareaInput.value.trim();
    
    if (texto === "") {
        alert("Por favor, ingresa una tarea.");
        return;
    }
    
    listaTareas.push(texto); // Agrega la tarea al array
    tareaInput.value = ''; // Limpiar input
    
    renderizarTareas(); // Actualizar la lista en pantalla
}


// --- INICIALIZACIÓN Y EVENTOS ---
document.addEventListener('DOMContentLoaded', () => {
    // Inicializar la lista vacía
    renderizarTareas();
    
    // Asignar el evento al botón
    agregarBtn.addEventListener('click', agregarTarea);
    
    // Opcional: Agregar con la tecla Enter
    tareaInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            agregarTarea();
        }
    });
});