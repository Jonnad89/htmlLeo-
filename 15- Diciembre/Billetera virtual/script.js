// --- CONFIGURACIÓN INICIAL (BACKEND SIMULADO) ---
let datosApp = JSON.parse(localStorage.getItem('finanza_pro')) || {
    saldo: 5000,
    movimientos: []
};

const balanceDisplay = document.getElementById('balance-display');
const listaMovimientos = document.getElementById('lista-movimientos');
const loader = document.getElementById('loader-overlay');

// --- FUNCIONES CORE ---

function actualizarUI() {
    balanceDisplay.textContent = `$${datosApp.saldo.toFixed(2)}`;
    listaMovimientos.innerHTML = '';

    // Renderizamos los movimientos (Usamos .reverse para ver los últimos primero)
    [...datosApp.movimientos].reverse().forEach(mov => {
        const li = document.createElement('li');
        li.className = 'movimiento-item';
        li.innerHTML = `
            <span><strong>${mov.destinatario}</strong><br><small>${mov.fecha}</small></span>
            <span class="negativo">-$${mov.monto}</span>
        `;
        listaMovimientos.appendChild(li);
    });

    localStorage.setItem('finanza_pro', JSON.stringify(datosApp));
}

async function procesarTransferencia() {
    const dest = document.getElementById('destinatario').value;
    const monto = parseFloat(document.getElementById('monto').value);

    // Validaciones
    if (!dest || isNaN(monto) || monto <= 0) {
        alert("Datos incorrectos");
        return;
    }

    if (monto > datosApp.saldo) {
        alert("Saldo insuficiente");
        return;
    }

    // Inicio de proceso asíncrono
    loader.classList.remove('oculto');

    await new Promise(res => setTimeout(res, 2000)); // Espera de red

    // Actualización de datos
    datosApp.saldo -= monto;
    datosApp.movimientos.push({
        destinatario: dest,
        monto: monto,
        fecha: new Date().toLocaleString()
    });

    actualizarUI();
    loader.classList.add('oculto');
    
    // Limpiar campos
    document.getElementById('destinatario').value = "";
    document.getElementById('monto').value = "";
}

// --- EVENTOS ---
document.getElementById('btn-enviar').addEventListener('click', procesarTransferencia);

document.getElementById('btn-borrar-todo').addEventListener('click', () => {
    if(confirm("¿Borrar historial?")) {
        datosApp.movimientos = [];
        actualizarUI();
    }
});

// Inicialización
actualizarUI();