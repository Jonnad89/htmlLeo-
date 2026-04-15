// --- Lógica de datos ---
let balanceGlobal = 50000;
let movimientos = [];

const balanceHTML = document.getElementById("balance-display");
const listaHTML = document.getElementById("lista-movimientos");
const loadingHTML = document.getElementById("loading");

// Simulador de demora de red
const conectarServidor = () => {
    return new Promise((resolve) => {
        loadingHTML.classList.remove("hidden"); // Mostrar "Cargando..."
        setTimeout(()=> {
            loadingHTML.classList.add("hidden"); //Ocultar
            resolve();
        }, 1500);
    });
};

// Función principal
async function procesarOperacion(tipo) {
    const monto = parseFloat(document.getElementById('monto').value);
    const categoria = document.getElementById('categoria'). value;

    if(isNaN(monto) || monto <= 0 ) {
        alert("Por favor, ingresa un monto válido.")
        return;
    }

    if (tipo === "Egreso" && monto > balanceGlobal){
        alert("Fondos insuficientes ❌")
        return;
    }

    //Espera asincrónica
    await conectarServidor();

    // Actualizar la lógica
    if (tipo === "Ingreso") {
        balanceGlobal += monto;
    } else {
        balanceGlobal -= monto;
    }

    const nuevaTransaccion = {
        tipo,
        monto,
        categoria,
        fecha: new Date().toLocaleTimeString()
    };

    movimientos.unshift(nuevaTransaccion) // Agregar al principio

    actualizarInterfaz();
}

function actualizarInterfaz() {
    // 1. Actualizar Saldo
    balanceHTML.innerText = `$${balanceGlobal.toLocaleString("es-AR")}`;

    // 2. Limpiar input
    document.getElementById('monto').value = "";

    // 3. Dibujar lista
    listaHTML.innerHTML = "";
    movimientos.forEach(m => {
        const item = document.createElement('li');
        item.classList.add(m.tipo === "Ingreso" ? "tipo-ingreso" : "tipo-egreso")
        item.innerHTML = `
        
        <span> <trong>${m.categoria}</trong> <br> <small>${m.fecha}</small> </span>
        <span>${m.tipo === "Ingreso" ? "+" : "-"}$${m.monto}</span>
        `;
        listaHTML.appendChild(item);
    });
}

//Eventos
document.getElementById("btn-ingreso").addEventListener("click", () => procesarOperacion("Ingreso"))
document.getElementById("btn-egreso").addEventListener("click", () => procesarOperacion("Egreso"))