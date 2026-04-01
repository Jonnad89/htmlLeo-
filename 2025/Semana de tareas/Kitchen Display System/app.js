// --- 1. CONFIGURACIÓN Y ESTADO INICIAL ---
const STORAGE_KEY = 'kds_pedidos';
const ELEMENTOS_MENU = [
    "Big Mac", "McNuggets x6", "Papas Grandes", "McFlurry", "Coca Cola"
];
let pedidos = [];
let cronometros = {}; // Almacena las referencias a setInterval

// --- 2. SELECTORES DEL DOM ---
const columnas = {
    pending: document.querySelector('#pending .pedidos-list'),
    preparing: document.querySelector('#preparing .pedidos-list'),
    ready: document.querySelector('#ready .pedidos-list')
};
const addOrderBtn = document.getElementById('add-order-btn');

// --- 3. GESTIÓN DE DATOS Y PERSISTENCIA ---

function cargarPedidos() {
    const storedPedidos = localStorage.getItem(STORAGE_KEY);
    if (storedPedidos) {
        pedidos = JSON.parse(storedPedidos);
    }
}

function guardarPedidos() {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(pedidos));
}

// Genera un ID simple y único
function generarID() {
    return 'P' + (pedidos.length > 0 ? Math.max(...pedidos.map(p => parseInt(p.id.substring(1)))) + 1 : 1);
}

// Simula la creación de un pedido aleatorio
function crearPedidoDeEjemplo() {
    const items = [];
    const numItems = Math.floor(Math.random() * 3) + 2; // 2 a 4 ítems

    for (let i = 0; i < numItems; i++) {
        const item = ELEMENTOS_MENU[Math.floor(Math.random() * ELEMENTOS_MENU.length)];
        items.push(item);
    }

    const nuevoPedido = {
        id: generarID(),
        items: items,
        estado: 'pending',
        timestamp_inicio: null // Solo se usa cuando pasa a 'preparing'
    };

    pedidos.push(nuevoPedido);
    guardarPedidos();
    renderizarTodo();
}

// --- 4. RENDERIZADO Y CRONÓMETRO ---

function obtenerTiempoTranscurrido(timestamp) {
    if (!timestamp) return '00:00';
    
    const diffMs = new Date().getTime() - timestamp;
    const totalSegundos = Math.floor(diffMs / 1000);
    
    const minutos = Math.floor(totalSegundos / 60);
    const segundos = totalSegundos % 60;

    return `${String(minutos).padStart(2, '0')}:${String(segundos).padStart(2, '0')}`;
}

function actualizarCronometros() {
    pedidos.forEach(pedido => {
        if (pedido.estado === 'preparing') {
            const cronoElement = document.querySelector(`.pedido-card[data-id="${pedido.id}"] .crono`);
            if (cronoElement) {
                const tiempoStr = obtenerTiempoTranscurrido(pedido.timestamp_inicio);
                cronoElement.textContent = tiempoStr;

                // Lógica de Urgencia (ej. más de 5 minutos = 300 segundos)
                const diffMs = new Date().getTime() - pedido.timestamp_inicio;
                const totalSegundos = Math.floor(diffMs / 1000);
                const card = document.querySelector(`.pedido-card[data-id="${pedido.id}"]`);
                
                if (totalSegundos > 300) { 
                    card.classList.add('urgente');
                } else {
                    card.classList.remove('urgente');
                }
            }
        }
    });
}

function renderizarPedido(pedido) {
    const card = document.createElement('div');
    card.classList.add('pedido-card');
    card.dataset.id = pedido.id;
    card.dataset.estado = pedido.estado;
    
    // Contenido de la tarjeta
    let htmlContenido = `<h3>Pedido ${pedido.id}</h3><ul>`;
    pedido.items.forEach(item => {
        htmlContenido += `<li>${item}</li>`;
    });
    htmlContenido += `</ul>`;

    // Añadir cronómetro si está en preparación
    if (pedido.estado === 'preparing') {
        const tiempo = obtenerTiempoTranscurrido(pedido.timestamp_inicio);
        htmlContenido += `<p class="crono">${tiempo}</p>`;
    }
    
    // Añadir botón de acción según el estado
    let textoBoton = '';
    if (pedido.estado === 'pending') {
        textoBoton = 'Comenzar Preparación';
    } else if (pedido.estado === 'preparing') {
        textoBoton = '¡Listo!';
    } else if (pedido.estado === 'ready') {
        textoBoton = 'Entregado (Eliminar)';
    }
    htmlContenido += `<button class="btn-accion">${textoBoton}</button>`;

    card.innerHTML = htmlContenido;
    
    // Añadir evento al botón de acción de la tarjeta
    card.querySelector('.btn-accion').addEventListener('click', (e) => {
        e.stopPropagation(); // Evita que el click se propague a la card si tiene otro evento
        cambiarEstadoPedido(pedido.id, pedido.estado);
    });

    columnas[pedido.estado].appendChild(card);
}

function renderizarTodo() {
    // Limpiar todas las columnas
    Object.values(columnas).forEach(col => col.innerHTML = '');
    
    // Detener y limpiar cronómetros
    Object.values(cronometros).forEach(clearInterval);
    cronometros = {};
    
    // Dibujar cada pedido
    pedidos.forEach(pedido => {
        renderizarPedido(pedido);
    });

    // Iniciar el cronómetro global si hay pedidos en preparación
    if (pedidos.some(p => p.estado === 'preparing')) {
        cronometros.global = setInterval(actualizarCronometros, 1000);
    }
}

// --- 5. LÓGICA DE TRANSICIÓN DE ESTADOS ---

function cambiarEstadoPedido(id, estadoActual) {
    const pedidoIndex = pedidos.findIndex(p => p.id === id);
    if (pedidoIndex === -1) return;
    
    let nuevoEstado = '';
    
    switch(estadoActual) {
        case 'pending':
            nuevoEstado = 'preparing';
            pedidos[pedidoIndex].timestamp_inicio = new Date().getTime(); // Registrar inicio
            break;
        case 'preparing':
            nuevoEstado = 'ready';
            break;
        case 'ready':
            // Simular entrega: Eliminar el pedido del array
            pedidos.splice(pedidoIndex, 1);
            guardarPedidos();
            renderizarTodo();
            return;
        default:
            return;
    }

    pedidos[pedidoIndex].estado = nuevoEstado;
    guardarPedidos();
    renderizarTodo();
}

// --- 6. INICIO DE LA APLICACIÓN ---
document.addEventListener('DOMContentLoaded', () => {
    cargarPedidos();
    renderizarTodo();
    
    // Evento para añadir pedidos de ejemplo
    addOrderBtn.addEventListener('click', crearPedidoDeEjemplo);
});