// ============================================================================
// COMPUTACIÓN PLUS WEB - SISTEMA COMPLETO DE PUNTO DE VENTA
// ============================================================================

// 1. BASE DE DATOS MOCK DE PRODUCTOS (CATÁLOGO)
const catalogo = [
    { codigo: "101", descripcion: "MEMORIA RAM 8GB DDR4", precio: 25000 },
    { codigo: "102", descripcion: "DISCO SOLIDO SSD 480GB", precio: 38000 },
    { codigo: "103", descripcion: "TECLADO MECANICO RGB", precio: 18500 },
    { codigo: "104", descripcion: "MOUSE OPTICO USB", precio: 6200 },
    { codigo: "105", descripcion: "MONITOR 24 FHDR 75HZ", precio: 120000 }
];

// 2. ESTADO DE LA VENTA ACTUAL
let carrito = [];
let totalVenta = 0;

// 3. CAPTURA DE ELEMENTOS DEL DOM
const inputCodigo = document.getElementById("input-codigo");
const inputCant = document.getElementById("input-cant");
const btnAgregar = document.getElementById("btn-agregar");
const tablaBody = document.getElementById("tabla-body");
const displayTotal = document.getElementById("display-total");
const fechaActualEl = document.getElementById("fecha-actual");

// Elementos del Modal de Cobro
const btnCobrar = document.getElementById("btn-cobrar");
const modalCobro = document.getElementById("modal-cobro");
const btnCerrarModal = document.getElementById("btn-cerrar-modal");
const modalTotal = document.getElementById("modal-total");
const inputAbona = document.getElementById("input-abona");
const modalVuelto = document.getElementById("modal-vuelto");
const btnFinalizar = document.getElementById("btn-finalizar");

// Elementos del Menú Lateral
const btnArticulos = document.querySelector('.menu-btn:nth-child(1)'); // F1
const btnClientes = document.querySelector('.menu-btn:nth-child(2)');  // F2
const btnVentas = document.querySelector('.menu-btn:nth-child(3)');    // F4
const btnConsultar = document.querySelector('.menu-btn:nth-child(4)'); // F5
const btnSalir = document.querySelector('.menu-btn.danger');

// ----------------------------------------------------------------------------
// INICIALIZACIÓN
// ----------------------------------------------------------------------------
document.addEventListener("DOMContentLoaded", () => {
    const hoy = new Date();
    fechaActualEl.value = hoy.toLocaleDateString("es-AR");
});

// ----------------------------------------------------------------------------
// AGREGAR PRODUCTOS
// ----------------------------------------------------------------------------
function agregarItem() {
    const busqueda = inputCodigo.value.trim().toLowerCase();
    const cantidad = parseInt(inputCant.value) || 1;

    if (!busqueda) return;

    // Buscar por código exacto o coincidencia en la descripción
    const producto = catalogo.find(p => 
        p.codigo === busqueda || p.descripcion.toLowerCase().includes(busqueda)
    );

    if (producto) {
        const existe = carrito.find(item => item.codigo === producto.codigo);

        if (existe) {
            existe.cantidad += cantidad;
            existe.subtotal = existe.cantidad * existe.precio;
        } else {
            carrito.push({
                codigo: producto.codigo,
                descripcion: producto.descripcion,
                precio: producto.precio,
                cantidad: cantidad,
                subtotal: cantidad * producto.precio
            });
        }

        renderizarTabla();
        inputCodigo.value = "";
        inputCant.value = "1";
        inputCodigo.focus();
    } else {
        alert("⚠️ Producto no encontrado en el catálogo.");
    }
}

// ----------------------------------------------------------------------------
// RENDERIZADO Y CÁLCULOS
// ----------------------------------------------------------------------------
function renderizarTabla() {
    tablaBody.innerHTML = "";
    totalVenta = 0;

    carrito.forEach((item, index) => {
        totalVenta += item.subtotal;

        const fila = document.createElement("tr");
        fila.innerHTML = `
            <td><strong>${item.cantidad}</strong></td>
            <td>${item.codigo}</td>
            <td>${item.descripcion}</td>
            <td>$${item.precio.toLocaleString()}</td>
            <td>$${item.subtotal.toLocaleString()}</td>
            <td><button class="btn-del" onclick="eliminarItem(${index})">✕</button></td>
        `;
        tablaBody.appendChild(fila);
    });

    displayTotal.innerText = `$${totalVenta.toLocaleString()}`;
}

function eliminarItem(index) {
    carrito.splice(index, 1);
    renderizarTabla();
}

// ----------------------------------------------------------------------------
// MODAL DE COBRO Y VUELTO REACTIVO
// ----------------------------------------------------------------------------
btnCobrar.addEventListener("click", () => {
    if (carrito.length === 0) {
        alert("El ticket está vacío.");
        return;
    }
    modalTotal.innerText = `$${totalVenta.toLocaleString()}`;
    inputAbona.value = "";
    modalVuelto.innerText = "$0,00";
    modalCobro.classList.remove("hidden");
    inputAbona.focus();
});

btnCerrarModal.addEventListener("click", () => modalCobro.classList.add("hidden"));

inputAbona.addEventListener("input", () => {
    const abonaCon = parseFloat(inputAbona.value) || 0;
    const vuelto = abonaCon - totalVenta;

    if (vuelto >= 0) {
        modalVuelto.innerText = `$${vuelto.toLocaleString()}`;
        modalVuelto.style.color = "#4ade80";
    } else {
        modalVuelto.innerText = "Falta dinero";
        modalVuelto.style.color = "#f87171";
    }
});

btnFinalizar.addEventListener("click", () => {
    const abonaCon = parseFloat(inputAbona.value) || 0;

    if (abonaCon < totalVenta) {
        alert("El monto ingresado es menor al total.");
        return;
    }

    alert("✅ Venta completada con éxito. Imprimiendo ticket...");
    carrito = [];
    renderizarTabla();
    modalCobro.classList.add("hidden");
});

// ----------------------------------------------------------------------------
// LÓGICA DEL MENÚ LATERAL
// ----------------------------------------------------------------------------
function cambiarBotonActivo(botonSeleccionado) {
    document.querySelectorAll('.shortcut-menu .menu-btn').forEach(btn => btn.classList.remove('active'));
    botonSeleccionado.classList.add('active');
}

function abrirModuloArticulos() {
    cambiarBotonActivo(btnArticulos);
    let lista = "📦 CATÁLOGO DE ARTÍCULOS:\n\n";
    catalogo.forEach(p => {
        lista += `• [${p.codigo}] ${p.descripcion} - $${p.precio.toLocaleString()}\n`;
    });
    alert(lista);
}

function abrirModuloClientes() {
    cambiarBotonActivo(btnClientes);
    const clienteSelect = document.getElementById("cliente-select");
    clienteSelect.focus();
    alert("👤 Módulo Clientes: Seleccioná el cliente en la barra superior.");
}

function abrirModuloVentas() {
    cambiarBotonActivo(btnVentas);
    inputCodigo.focus();
}

function abrirModuloConsultar() {
    cambiarBotonActivo(btnConsultar);
    inputCodigo.focus();
    inputCodigo.placeholder = "🔍 Escribí el nombre para consultar...";
}

function salirSistema() {
    if (confirm("¿Estás seguro de que querés salir del punto de venta?")) {
        carrito = [];
        renderizarTabla();
        location.reload();
    }
}

// Listeners de la barra lateral
btnArticulos.addEventListener("click", abrirModuloArticulos);
btnClientes.addEventListener("click", abrirModuloClientes);
btnVentas.addEventListener("click", abrirModuloVentas);
btnConsultar.addEventListener("click", abrirModuloConsultar);
btnSalir.addEventListener("click", salirSistema);

// ----------------------------------------------------------------------------
// EVENTOS DE TECLADO Y ATAJOS (ENTER, F1-F5, F9)
// ----------------------------------------------------------------------------
btnAgregar.addEventListener("click", agregarItem);

inputCodigo.addEventListener("keypress", (e) => {
    if (e.key === "Enter") agregarItem();
});

document.addEventListener("keydown", (e) => {
    switch (e.key) {
        case "F1":
            e.preventDefault();
            abrirModuloArticulos();
            break;
        case "F2":
            e.preventDefault();
            abrirModuloClientes();
            break;
        case "F4":
            e.preventDefault();
            abrirModuloVentas();
            break;
        case "F5":
            e.preventDefault();
            abrirModuloConsultar();
            break;
        case "F9":
            e.preventDefault();
            btnCobrar.click();
            break;
    }
});