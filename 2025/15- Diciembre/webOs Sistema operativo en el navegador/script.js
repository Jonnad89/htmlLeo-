// --- 0. VARIABLES GLOBALES DE LA APLICACIÓN ---
// Variable para rastrear la operación en la calculadora
let operacionActual = ''; 


// --- 1. SELECTORES ---
const escritorio = document.getElementById('escritorio');
const menuBtn = document.getElementById('menu-btn');
const menuInicio = document.getElementById('menu-inicio');
const appIconos = document.querySelectorAll('.app-icono');
const horaActualSpan = document.getElementById('hora-actual');

// --- 2. LÓGICA DE VENTANAS ---

/**
 * Función que maneja la lógica simple de la calculadora (sumar, restar, etc.)
 */
function manejarClickCalculadora(valor, displayElement) {
    if (valor === 'C') {
        // Limpiar
        operacionActual = '0';
    } else if (valor === '=') {
        try {
            // Evalúa la expresión matemática (Cuidado: eval() no es seguro en producción real)
            operacionActual = eval(operacionActual).toString();
        } catch (e) {
            operacionActual = 'Error';
        }
    } else {
        // Concatenar números y operadores
        if (operacionActual === '0' || operacionActual === 'Error') {
             // Si el valor actual es 0 o Error, lo reemplazamos si es un número, si no, lo dejamos
             operacionActual = (/[0-9]/.test(valor)) ? valor : operacionActual; 
        } else {
             operacionActual += valor;
        }
    }
    
    // Actualiza la pantalla de la calculadora
    displayElement.value = operacionActual;
}


/**
 * Crea una nueva ventana de aplicación y la añade al escritorio.
 */
function crearVentana(titulo) {
    // Generar un ID único para la ventana
    const ventanaId = 'win-' + Date.now();
    
    // Crear el elemento DIV principal
    const ventana = document.createElement('div');
    ventana.classList.add('ventana');
    ventana.id = ventanaId;
    
    // Inyectar la estructura básica de la ventana (Barra de Título y Contenido)
    ventana.innerHTML = `
        <div class="barra-titulo">
            <span>${titulo}</span>
            <div>
                <button class="ventana-btn" data-action="minimizar" data-id="${ventanaId}">_</button>
                <button class="ventana-btn" data-action="cerrar" data-id="${ventanaId}">X</button>
            </div>
        </div>
        <div class="ventana-contenido ${titulo.toLowerCase().replace(/\s/g, '-')}-app">
            </div>
    `;

    // ----------------------------------------------------
    // Lógica de Contenido Específico (CORREGIDO Y AÑADIDO)
    // ----------------------------------------------------
    const contenidoDiv = ventana.querySelector('.ventana-contenido');

    if (titulo === 'Notas') {
        contenidoDiv.innerHTML = `<textarea placeholder="Escribe tus notas aquí..."></textarea>`;
    
    } else if (titulo === 'Calculadora') {
        // CORRECCIÓN: Quitamos 'readonly' y añadimos la estructura de botones
        contenidoDiv.innerHTML = `
            <input type="text" id="calc-display-${ventanaId}" value="0" readonly>
            <div class="botones-calculadora">
                <button data-valor="7">7</button>
                <button data-valor="8">8</button>
                <button data-valor="9">9</button>
                <button data-valor="/">/</button>
                
                <button data-valor="4">4</button>
                <button data-valor="5">5</button>
                <button data-valor="6">6</button>
                <button data-valor="*">X</button>
                
                <button data-valor="1">1</button>
                <button data-valor="2">2</button>
                <button data-valor="3">3</button>
                <button data-valor="-">-</button>
                
                <button data-valor="0">0</button>
                <button data-valor=".">.</button>
                <button data-valor="=">=</button>
                <button data-valor="+">+</button>
                
                <button data-valor="C" style="grid-column: span 4; background-color: #e74c3c; color: white;">Limpiar (C)</button>
            </div>
        `;
        
        // Asignar listeners a los botones de esta calculadora
        const display = ventana.querySelector(`#calc-display-${ventanaId}`);
        ventana.querySelectorAll('.botones-calculadora button').forEach(btn => {
            btn.addEventListener('click', () => {
                // Llamamos a la lógica de cálculo
                manejarClickCalculadora(btn.dataset.valor, display);
            });
        });
        
    } else if (titulo === 'Configuracion') {
        contenidoDiv.innerHTML = `<p>Configuración de WebOS. ¡Añade controles aquí!</p>`;
    }
    
    // Añadir al escritorio en una posición aleatoria para evitar solapamiento total
    ventana.style.left = `${Math.floor(Math.random() * 200) + 50}px`;
    ventana.style.top = `${Math.floor(Math.random() * 100) + 50}px`;

    escritorio.appendChild(ventana);

    // Asignar listeners a los botones internos de la ventana
    asignarListenersVentana(ventana);
    
    // Ocultar el menú de inicio
    menuInicio.classList.add('oculto'); 
}

/**
 * Maneja los eventos de minimizar/cerrar de una ventana específica.
 */
function manejarAccionVentana(action, id) {
    const ventana = document.getElementById(id);
    if (!ventana) return;

    if (action === 'cerrar') {
        ventana.remove(); // Elimina la ventana del DOM
    } else if (action === 'minimizar') {
        ventana.classList.toggle('oculto'); // Simplemente la oculta
    }
}

/**
 * Asigna los listeners de acción a los botones dentro de la ventana.
 */
function asignarListenersVentana(ventana) {
    ventana.querySelectorAll('.ventana-btn').forEach(btn => {
        btn.onclick = (e) => {
            const action = e.target.dataset.action;
            const id = e.target.dataset.id;
            manejarAccionVentana(action, id);
        };
    });
}


// --- 3. FUNCIONES DE INTERFAZ Y UTILIDAD ---

/**
 * Muestra/Oculta el menú de inicio.
 */
function toggleMenu() {
    menuInicio.classList.toggle('oculto');
}

/**
 * Maneja el clic en un icono de aplicación.
 */
function lanzarAplicacion(appName) {
    // Verificar si la app ya está abierta (opcional, para evitar múltiples instancias)
    // if (!document.querySelector(`[data-app="${appName}"]`)) { 
    crearVentana(appName);
    // }
}

/**
 * Actualiza la hora en la barra de tareas.
 */
function actualizarHora() {
    const ahora = new Date();
    // Ejemplo de formato simple HH:MM:SS
    horaActualSpan.textContent = ahora.toLocaleTimeString([], {hour: '2-digit', minute:'2-digit', second:'2-digit'});
}


// --- 4. INICIALIZACIÓN ---

document.addEventListener('DOMContentLoaded', () => {
    // 1. Listeners para el Menú
    menuBtn.addEventListener('click', toggleMenu);

    appIconos.forEach(icono => {
        icono.addEventListener('click', (e) => {
            const appName = e.target.dataset.app;
            lanzarAplicacion(appName);
        });
    });

    // 2. Reloj
    actualizarHora(); // Mostrar la hora inmediatamente
    setInterval(actualizarHora, 1000); // Actualizar cada segundo
});