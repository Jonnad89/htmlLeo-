// 1. ESTADO DEL JUEGO (Memoria viva)
let bytes = 0;
let bytesPorClic = 1;
let bytesPorSegundo = 0;

let costoServidor = 15;
let cantidadServidores = 0;

// 2. CAPTURA DEL DOM
const txtBytes = document.getElementById("contadorBytes");
const txtBps = document.getElementById("txtBps");
const btnHackear = document.getElementById("btnHackear");

const cardServidor = document.getElementById("cardServidor");
const btnComprarServidor = document.getElementById("btnComprarServidor");
const txtCostoServidor = document.getElementById("txtCostoServidor");
const txtCantServidores = document.getElementById("cantServidores");

// 3. ACTUALIZADOR VISUAL (Renderizador constante)
function actualizarInterfaz() {
    txtBytes.innerText = Math.floor(bytes);
    txtBps.innerText = bytesPorSegundo;
    txtCostoServidor.innerText = Math.floor(costoServidor);
    txtCantServidores.innerText = cantidadServidores;

    // Manejo dinámico de clases CSS según la plata que tenga el usuario
    if (bytes >= costoServidor) {
        cardServidor.classList.add("disponible");
        cardServidor.classList.remove("bloqueado");
        btnComprarServidor.disabled = false;
    } else {
        cardServidor.classList.remove("disponible");
        cardServidor.classList.add("bloqueado");
        btnComprarServidor.disabled = true;
    }
}

// 4. ACCIÓN: CLIC MANUAL
btnHackear.addEventListener("click", () => {
    bytes += bytesPorClic;
    actualizarInterfaz(); // Redibujamos la pantalla inmediatamente
});

// 5. ACCIÓN: COMPRAR MEJORA
btnComprarServidor.addEventListener("click", () => {
    // Freno de mano: si no le alcanza, frena
    if (bytes < costoServidor) return;

    // Intercambio
    bytes -= costoServidor;
    cantidadServidores++;
    bytesPorSegundo += 2; // Cada servidor da +2 bytes/seg
    
    // Subimos el costo un 20% para la próxima compra
    costoServidor = costoServidor * 1.20;

    actualizarInterfaz();
});

// 6. MOTOR AUTOMÁTICO (El bucle de tiempo continuo)
// Ejecuta esta función CADA 1 segundo de forma infinita
setInterval(() => {
    bytes += bytesPorSegundo;
    actualizarInterfaz();
}, 1000);

// Primera ejecución para configurar la tienda en gris al arrancar
actualizarInterfaz();