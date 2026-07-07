// 1. VARIABLES DE ESTADO (La memoria del juego)
let bytes = 0;
let bytesPorClic = 1;
let bytesPorSegundo = 0;

let precioServidor = 15;
let servidoresComprados = 0;

// 2. CAPTURA DE ELEMENTOS DEL DOM (Conectamos con los IDs de Leo)
const txtDineroActual = document.getElementById("dinero-actual");
const btnGenerarBytes = document.getElementById("generar-bytes-btn");

const txtBytesPorClick = document.getElementById("bytes-por-click");
const txtBytesPorSegundo = document.getElementById("bytes-por-segundo");

const cardServidor = document.getElementById("card-servidor");
// Capturamos el botón que está adentro de la tarjeta del servidor
const btnComprarServidor = cardServidor.querySelector("button"); 
const txtPrecioServidor = document.getElementById("precio-servidor");
const txtServidoresComprados = document.getElementById("servidores-comprados");

// 3. FUNCIÓN DE ACTUALIZACIÓN VISUAL (Dibuja los cambios en la pantalla)
function actualizarInterfaz() {
    // Mostramos los valores redondeados para evitar decimales locos
    txtDineroActual.innerText = Math.floor(bytes);
    txtBytesPorClick.innerText = bytesPorClic;
    txtBytesPorSegundo.innerText = bytesPorSegundo;
    txtPrecioServidor.innerText = Math.floor(precioServidor);
    txtServidoresComprados.innerText = servidoresComprados;

    // Lógica visual: si le alcanza para el servidor, el botón se activa. Si no, se bloquea.
    if (bytes >= precioServidor) {
        btnComprarServidor.disabled = false;
        cardServidor.style.opacity = "1"; // Se ve brillante
        cardServidor.style.borderColor = "#00ff88"; // (Opcional) Cambia el borde a verde si usás CSS
    } else {
        btnComprarServidor.disabled = true;
        cardServidor.style.opacity = "0.5"; // Se pone opaco si no le alcanza
    }
}

// 4. EVENTO: CLIC MANUAL (El botón principal de hackeo)
btnGenerarBytes.addEventListener("click", () => {
    bytes += bytesPorClic;
    actualizarInterfaz(); // Refrescamos la pantalla al instante
});

// 5. EVENTO: COMPRAR SERVIDOR (Mejora automática)
btnComprarServidor.addEventListener("click", () => {
    // Freno de mano: si hace clic pero no tiene suficientes bytes, la función se frena
    if (bytes < precioServidor) return;

    // Hacemos el intercambio de recursos
    bytes -= precioServidor;
    servidoresComprados++;
    bytesPorSegundo += 2; // Cada servidor nos da +2 bytes automáticos por segundo

    // Aumentamos el precio un 20% para el próximo servidor (Inflación del juego)
    precioServidor = precioServidor * 1.20;

    actualizarInterfaz(); // Refrescamos la pantalla con los nuevos datos
});

// 6. MOTOR DEL JUEGO (Bucle de tiempo automático)
// Suma los bytes por segundo de forma infinita CADA 1 segundo (1000 milisegundos)
setInterval(() => {
    bytes += bytesPorSegundo;
    actualizarInterfaz();
}, 1000);

// Ejecutamos la función una vez al principio para que el botón arranque bloqueado hasta tener 15 bytes
actualizarInterfaz();