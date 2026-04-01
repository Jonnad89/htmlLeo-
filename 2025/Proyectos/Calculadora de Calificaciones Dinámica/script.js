// --- ESTADO GLOBAL ---
// Array para almacenar todas las notas ingresadas
let notas = [];

// Nota mínima para aprobar, para facilitar el cambio si fuera necesario
const NOTA_APROBACION = 7;

// --- SELECTORES DEL DOM ---
const notaInput = document.getElementById('nota-input');
const agregarBtn = document.getElementById('agregar-btn');
const listaNotas = document.getElementById('lista-notas');
const promedioValor = document.getElementById('promedio-valor');
const estadoAprobacion = document.getElementById('estado-aprobacion');

// ----------------------------------------------------------------------
// 3. FUNCIÓN PRINCIPAL DE CÁLCULO
// ----------------------------------------------------------------------

/**
 * Recorre el array 'notas', calcula el promedio y devuelve el valor.
 * @returns {number} El promedio de las notas.
 */
function calcularPromedio() {
    if (notas.length === 0) {
        return 0;
    }

    let sumaTotal = 0;
    
    // Usamos un bucle forEach para recorrer todas las notas
    notas.forEach(nota => {
        sumaTotal += nota;
    });

    return sumaTotal / notas.length;
}

// ----------------------------------------------------------------------
// 4. FUNCIÓN DE RENDERIZADO Y CONDICIÓN DE APROBACIÓN
// ----------------------------------------------------------------------

/**
 * 2. Muestra la lista de notas, calcula el promedio y actualiza el estado.
 */
function renderizarNotas() {
    // Limpiar la lista antes de volver a dibujar
    listaNotas.innerHTML = '';

    // Mostrar cada nota en el HTML
    notas.forEach(nota => {
        const li = document.createElement('li');
        li.textContent = nota.toFixed(1); // Muestra la nota con un decimal
        listaNotas.appendChild(li);
    });

    // Calcular el promedio y actualizar el valor
    const promedio = calcularPromedio();
    promedioValor.textContent = promedio.toFixed(2); // Muestra el promedio con dos decimales

    // Condición de Aprobación (Consigna 4)
    if (notas.length === 0) {
        estadoAprobacion.textContent = "Esperando notas...";
        estadoAprobacion.style.color = "#333";
        estadoAprobacion.style.backgroundColor = "#f8f9fa";
    } else if (promedio >= NOTA_APROBACION) {
        estadoAprobacion.textContent = "¡APROBADO!";
        estadoAprobacion.style.color = "white";
        estadoAprobacion.style.backgroundColor = "#28a745"; // Fondo Verde
    } else {
        estadoAprobacion.textContent = "REPROBADO";
        estadoAprobacion.style.color = "white";
        estadoAprobacion.style.backgroundColor = "#dc3545"; // Fondo Rojo
    }
}

// ----------------------------------------------------------------------
// 1. FUNCIÓN DE INGRESO Y VALIDACIÓN
// ----------------------------------------------------------------------

/**
 * 1. Añade la nota al array si es válida (Consigna 5 - Validación).
 */
function agregarNota() {
    // Obtener y convertir el valor del input a número (float)
    const nota = parseFloat(notaInput.value);
    
    // Validación (Consigna 5: 0 a 10)
    // El bucle while no es necesario aquí porque el botón se pulsa una sola vez.
    // Usamos if/else para la validación al hacer clic.
    if (isNaN(nota) || nota < 0 || nota > 10) {
        alert("⚠️ Por favor, ingresa una nota válida entre 0 y 10.");
        notaInput.value = ''; // Limpiar input
        return; // Detiene la ejecución si la nota no es válida
    }

    // Si la nota es válida:
    notas.push(nota); // Añadir al array (Consigna 1)
    notaInput.value = ''; // Limpiar el input

    // Renderizar la interfaz para mostrar el nuevo estado
    renderizarNotas();
}


// ----------------------------------------------------------------------
// INICIO Y EVENT LISTENERS
// ----------------------------------------------------------------------

document.addEventListener('DOMContentLoaded', () => {
    // Inicializar la vista al cargar la página (mostrar Promedio 0.0)
    renderizarNotas(); 

    // Asignar el evento al botón de agregar
    agregarBtn.addEventListener('click', agregarNota);

    // Opcional: Permitir agregar con la tecla Enter
    notaInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            agregarNota();
        }
    });
});