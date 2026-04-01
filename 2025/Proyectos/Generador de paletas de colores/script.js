// --- 1. ESTADO GLOBAL ---
const NUM_COLORES = 5;
let paleta = []; // Array que contendrá los objetos de color

// --- 2. SELECTORES DEL DOM ---
const paletaContenedor = document.getElementById('paleta-contenedor');
const generarBtn = document.getElementById('generar-btn');

// --- 3. LÓGICA DE COLORES ---

/**
 * Genera un color hexadecimal aleatorio (ej: #A3C9F8).
 * @returns {string} El código de color HEX.
 */
function generarColorHex() {
    // Genera un número aleatorio de 6 dígitos en base 16 (hexadecimal)
    const randomColor = Math.floor(Math.random() * 16777215).toString(16);
    
    // Rellena con ceros a la izquierda si es necesario (ej: si sale 'fff', debe ser '000fff')
    return '#' + randomColor.padStart(6, '0').toUpperCase();
}

/**
 * Renderiza el HTML de una tarjeta de color.
 * @param {object} colorObj El objeto de color { color, bloqueado, id }.
 * @returns {string} HTML de la tarjeta.
 */
function crearTarjetaHTML(colorObj) {
    const candadoIcono = colorObj.bloqueado ? '🔒' : '🔓';
    
    // Usamos data-bloqueado para CSS y data-id para identificar el color al hacer clic
    return `
        <div class="color-tarjeta" 
             data-id="${colorObj.id}" 
             data-bloqueado="${colorObj.bloqueado}" 
             style="background-color: ${colorObj.color};">
            
            <span class="codigo-hex" data-id="${colorObj.id}">${colorObj.color}</span>
            
            <button class="bloquear-btn" data-action="bloquear" data-id="${colorObj.id}">
                ${candadoIcono}
            </button>
        </div>
    `;
}

/**
 * Recorre la paleta y actualiza el DOM completo.
 */
function renderizarPaleta() {
    paletaContenedor.innerHTML = paleta.map(crearTarjetaHTML).join('');
}

/**
 * Inicializa la paleta o genera nuevos colores.
 */
function generarNuevaPaleta() {
    // Si la paleta está vacía, la inicializamos
    if (paleta.length === 0) {
        for (let i = 1; i <= NUM_COLORES; i++) {
            paleta.push({
                id: i,
                color: generarColorHex(),
                bloqueado: false
            });
        }
    } else {
        // Si ya hay una paleta, solo cambiamos los colores NO BLOQUEADOS
        paleta = paleta.map(colorObj => {
            if (colorObj.bloqueado) {
                return colorObj; // Mantiene el color bloqueado
            } else {
                return {
                    ...colorObj, // Mantiene el ID y estado de bloqueo
                    color: generarColorHex() // Nuevo color
                };
            }
        });
    }

    renderizarPaleta();
}

/**
 * Alterna el estado de bloqueo de un color.
 * @param {number} id El ID de la tarjeta.
 */
function alternarBloqueo(id) {
    paleta = paleta.map(colorObj => {
        if (colorObj.id === id) {
            // Alterna el estado booleano
            return {
                ...colorObj,
                bloqueado: !colorObj.bloqueado
            };
        }
        return colorObj;
    });

    renderizarPaleta();
}

// --- 4. MANEJO DE EVENTOS (Delegación) ---

function manejarClicPaleta(e) {
    const target = e.target;
    const action = target.dataset.action;
    const id = parseInt(target.dataset.id); // Convertir ID a número

    if (action === 'bloquear') {
        alternarBloqueo(id);
    }
    // Opcional: Agregar lógica para copiar el código HEX al hacer clic en el texto
    else if (target.classList.contains('codigo-hex')) {
        navigator.clipboard.writeText(target.textContent);
        alert(`Copiado: ${target.textContent}`);
    }
}


// --- 5. INICIO DE LA APLICACIÓN ---
document.addEventListener('DOMContentLoaded', () => {
    // 1. Carga la primera paleta al iniciar
    generarNuevaPaleta();

    // 2. Asigna listeners
    generarBtn.addEventListener('click', generarNuevaPaleta);
    
    // Usamos DELEGACIÓN DE EVENTOS en el contenedor principal
    // para manejar los clics de todos los botones de bloqueo
    paletaContenedor.addEventListener('click', manejarClicPaleta);
});