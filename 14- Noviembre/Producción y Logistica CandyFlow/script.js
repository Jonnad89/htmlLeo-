// --- 1. ESTADO GLOBAL, PERSISTENCIA Y CONFIGURACIÓN ---
const STORAGE_KEY = 'candyFlowState';
const COSTO_LOTE_AZUCAR = 10; // Kg
const CARAMELOS_POR_LOTE = 50; // Unidades sin empacar
const ENVOLTORIOS_POR_LOTE = 50; // Unidades para empacar
const CARAMELOS_POR_ENTREGA = 100; // Unidades vendidas por cada entrega
const INGRESO_POR_ENTREGA = 500; // Ingreso por cada entrega (moneda)

// Estado por defecto
const DEFAULT_STATE = {
    azucar: 50,
    envoltorios: 200,
    caramelosCrudos: 0,
    caramelosTerminados: 0,
    ingresos: 0
};

// Cargar estado guardado o usar el estado por defecto
let estado = JSON.parse(localStorage.getItem(STORAGE_KEY)) || DEFAULT_STATE;


// --- 2. SELECTORES DEL DOM ---
const stockAzucarDisplay = document.getElementById('stock-azucar');
const stockEnvoltoriosDisplay = document.getElementById('stock-envoltorios');
const stockCrudoDisplay = document.getElementById('stock-crudo');
const stockTerminadoDisplay = document.getElementById('stock-terminado');
const ingresosTotalesDisplay = document.getElementById('ingresos-totales');

const reponerAzucarBtn = document.getElementById('reponer-azucar-btn');
const reponerEnvoltoriosBtn = document.getElementById('reponer-envoltorios-btn');
const crearLoteBtn = document.getElementById('crear-lote-btn');
const empacarBtn = document.getElementById('empacar-btn');
const entregarBtn = document.getElementById('entregar-btn');
const resetBtn = document.getElementById('reset-btn');


// --- 3. FUNCIONES DE ESTADO Y PERSISTENCIA ---

function guardarEstado() {
    // Persistencia: Guardar el objeto de estado completo
    localStorage.setItem(STORAGE_KEY, JSON.stringify(estado));
}

function renderizarEstado() {
    // Actualizar todos los displays con el estado actual del objeto 'estado'
    stockAzucarDisplay.textContent = estado.azucar;
    stockEnvoltoriosDisplay.textContent = estado.envoltorios;
    stockCrudoDisplay.textContent = estado.caramelosCrudos;
    stockTerminadoDisplay.textContent = estado.caramelosTerminados;
    
    // Formatear la moneda
    ingresosTotalesDisplay.textContent = `$${estado.ingresos.toFixed(2)}`;
    
    guardarEstado();
}

// ----------------------------------------------------------------------
// MÓDULO 1: INVENTARIO (REPOSICIÓN)
// ----------------------------------------------------------------------

function reponerAzucar() {
    estado.azucar += 50;
    renderizarEstado();
}

function reponerEnvoltorios() {
    estado.envoltorios += 200;
    renderizarEstado();
}

// ----------------------------------------------------------------------
// MÓDULO 2: PRODUCCIÓN (CREAR Y EMPACAR)
// ----------------------------------------------------------------------

function crearLote() {
    // Lógica Condicional: Verificar Materia Prima
    if (estado.azucar >= COSTO_LOTE_AZUCAR) {
        estado.azucar -= COSTO_LOTE_AZUCAR;
        estado.caramelosCrudos += CARAMELOS_POR_LOTE;
        renderizarEstado();
    } else {
        alert(`🚨 ERROR: Necesitas ${COSTO_LOTE_AZUCAR} Kg de azúcar para crear un lote.`);
    }
}

function empacar() {
    // Lógica Condicional Anidada: Verificar Crudos y Envoltorios
    
    if (estado.caramelosCrudos >= CARAMELOS_POR_LOTE) {
        if (estado.envoltorios >= ENVOLTORIOS_POR_LOTE) {
            
            estado.caramelosCrudos -= CARAMELOS_POR_LOTE;
            estado.envoltorios -= ENVOLTORIOS_POR_LOTE;
            estado.caramelosTerminados += CARAMELOS_POR_LOTE;
            renderizarEstado();
            
        } else {
            alert(`🚨 ERROR: Faltan envoltorios. Necesitas ${ENVOLTORIOS_POR_LOTE} unidades.`);
        }
    } else {
        alert(`🚨 ERROR: No hay suficientes caramelos crudos. Necesitas ${CARAMELOS_POR_LOTE} unidades.`);
    }
}

// ----------------------------------------------------------------------
// MÓDULO 3: LOGÍSTICA Y VENTAS
// ----------------------------------------------------------------------

function entregarPedido() {
    // Lógica Condicional: Verificar Stock Terminado
    if (estado.caramelosTerminados >= CARAMELOS_POR_ENTREGA) {
        
        estado.caramelosTerminados -= CARAMELOS_POR_ENTREGA;
        estado.ingresos += INGRESO_POR_ENTREGA;
        
        alert(`🎉 PEDIDO ENTREGADO! Ganancia: $${INGRESO_POR_ENTREGA.toFixed(2)}`);
        renderizarEstado();
        
    } else {
        alert(`🚨 ERROR: Stock insuficiente. Necesitas ${CARAMELOS_POR_ENTREGA} caramelos terminados.`);
    }
}

function resetearFabrica() {
    if (confirm("¿Estás seguro de que quieres REINICIAR todos los contadores de la fábrica?")) {
        estado = DEFAULT_STATE; // Revertir al estado por defecto
        localStorage.removeItem(STORAGE_KEY); // Limpiar localStorage
        renderizarEstado(); // Redibujar
    }
}

// --- 4. INICIALIZACIÓN ---

document.addEventListener('DOMContentLoaded', () => {
    // 1. Renderizar el estado cargado al inicio
    renderizarEstado();

    // 2. Asignar Event Listeners
    reponerAzucarBtn.addEventListener('click', reponerAzucar);
    reponerEnvoltoriosBtn.addEventListener('click', reponerEnvoltorios);
    crearLoteBtn.addEventListener('click', crearLote);
    empacarBtn.addEventListener('click', empacar);
    entregarBtn.addEventListener('click', entregarPedido);
    resetBtn.addEventListener('click', resetearFabrica);
});