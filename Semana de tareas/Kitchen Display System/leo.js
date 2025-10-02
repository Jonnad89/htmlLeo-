const STORAGE_KEY = "kds_pedidos"

const ELEMENTOS_MENU = [
    "Big Mac", "McNuggets x6", "Papas Grandes", "McFlurry", "Coca Cola"
];

let pedidos = []
let cronometros = {}

const columnas = {
    // CORRECCIÓN CLAVE: La llave ahora es 'listo' para coincidir con el estado
    pending: document.querySelector("#pending .lista-pedidos"),
    preparing: document.querySelector("#preparing .lista-pedidos"),
    listo: document.querySelector("#listo .lista-pedidos") 
}

// CORRECCIÓN: Usar plural para consistencia
const añadirOrden = document.getElementById("añadir-orden-btn") 

// CORRECCIÓN: Usar plural para consistencia
function cargarPedidos(){ 
    const storedPedidos = localStorage.getItem(STORAGE_KEY)
    
    if(storedPedidos){
        pedidos = JSON.parse(storedPedidos)
    }
}

function guardarPedidos(){
    localStorage.setItem(STORAGE_KEY, JSON.stringify(pedidos))
}

function generarId(){
    return "p" + (pedidos.length > 0 ? Math.max(... pedidos.map(p => parseInt(p.id.substring(1)))) +1 : 1)
}

function crearPedidoDeEjemplo(){
    const items = [] // El array que vamos a llenar

    const numItems = Math.floor(Math.random()*3) +2

    for(let i = 0 ; i < numItems; i++){
        // CORRECCIÓN LÓGICA: Usamos 'itemSeleccionado' para evitar conflicto
        const itemSeleccionado = ELEMENTOS_MENU[Math.floor(Math.random()*ELEMENTOS_MENU.length)]

        // Hacemos push en el ARRAY 'items'
        items.push(itemSeleccionado)
    }

    const nuevoPedido = {
        id: generarId(),
        items: items,
        estado: "pending",
        timestamp_inicio: null
    }

    pedidos.push(nuevoPedido)
    guardarPedidos()
    renderizarTodo()
}

function obtenerTiempoTranscurrido(timestamp){
    if(! timestamp)return "00:00"
    
    const diffMs = new Date().getTime()-timestamp
    const totalSegundos = Math.floor(diffMs/1000)

    const minutos = Math.floor(totalSegundos/60)
    const segundos = totalSegundos%60

    return `${String(minutos).padStart(2,"0")}:${String(segundos).padStart(2,"0")}`
}

function actualizarCronometros(){
    pedidos.forEach(pedido => {
        if(pedido.estado === "preparing"){
            const cronoElement = document.querySelector(`.pedido-card[data-id="${pedido.id}"] .crono`);
            if(cronoElement){
                const tiempoStr = obtenerTiempoTranscurrido(pedido.timestamp_inicio)
                cronoElement.textContent = tiempoStr

                const diffMs = new Date().getTime()-pedido.timestamp_inicio
                const totalSegundos = Math.floor(diffMs/1000)
                const card = document.querySelector(`.pedido-card[data-id="${pedido.id}"]`)

                if(totalSegundos > 300){
                    card.classList.add("urgente")
                }else{
                    card.classList.remove("urgente")
                }
            }
        }
    })
}

function renderizarPedido(pedido){
    const card = document.createElement("div")
    card.classList.add("pedido-card")
    card.dataset.id = pedido.id
    card.dataset.estado = pedido.estado

    // CORRECCIÓN: Sintaxis de template literal corregida
    let htmlContenido = `<h3>Pedido ${pedido.id}</h3><ul>`

    pedido.items.forEach(item =>{
        // CORRECCIÓN: Usar 'item' y comillas invertidas
        htmlContenido += `<li>${item}</li>`
    })

    htmlContenido += `</ul>`
    
    if(pedido.estado === "preparing"){
        const tiempo = obtenerTiempoTranscurrido(pedido.timestamp_inicio)
        // CORRECCIÓN: Usar comillas invertidas
        htmlContenido += `<p class="crono"> ${tiempo} </p>`
    }
    
    let textBoton = ""

    if(pedido.estado === "pending"){
        textBoton = "Comenzar Preparación"
    }else if(pedido.estado === "preparing"){
        textBoton = "¡Listo!"
    }else if(pedido.estado === "listo"){
        textBoton = "Entregado (Eliminar)"
    }

    // CORRECCIÓN: Usar comillas invertidas
    htmlContenido += `<button class="btn-accion"> ${textBoton} </button>`

    card.innerHTML = htmlContenido

    card.querySelector(".btn-accion").addEventListener("click", (e)=>{
        e.stopPropagation()
        cambiarEstadoPedido(pedido.id, pedido.estado)
    })
    
    // Ahora, columnas[pedido.estado] funcionará bien si pedido.estado es 'listo'
    columnas[pedido.estado].appendChild(card)
}

function renderizarTodo(){
    // ESTA ES LA LÍNEA 173 (anteriormente): Ahora debería funcionar
    Object.values(columnas).forEach(col => col.innerHTML = "") 

    Object.values(cronometros).forEach(clearInterval)
    cronometros = {}

    pedidos.forEach(pedido =>{
        renderizarPedido(pedido)
    })

    if(pedidos.some(p => p.estado === "preparing")){
        cronometros.global = setInterval(actualizarCronometros, 1000)
    }
}


function cambiarEstadoPedido(id, estadoActual){
    const pedidoIndex = pedidos.findIndex(p => p.id === id)
    if(pedidoIndex === -1)return

    let nuevoEstado = ""

    switch(estadoActual){
        case "pending":
        nuevoEstado = "preparing"
        pedidos [pedidoIndex].timestamp_inicio = new Date().getTime()
        break
        case "preparing":
        nuevoEstado = "listo"
        break
        case "listo":
        pedidos.splice(pedidoIndex, 1)
        guardarPedidos()
        renderizarTodo()
        return
        default:
        return
    }

    pedidos [pedidoIndex].estado = nuevoEstado
    guardarPedidos()
    renderizarTodo()
}


document.addEventListener("DOMContentLoaded", ()=> {
    cargarPedidos() // CORRECCIÓN: Usar 'cargarPedidos'
    renderizarTodo()
    añadirOrden.addEventListener("click", crearPedidoDeEjemplo)
})