// --- BASE DE DATOS INICIAL ---
let stock = JSON.parse(localStorage.getItem("market_stock")) || [
    {id: 1, nombre: "Arroz 1kg", precio: 120, cantidad: 50},
    {id: 2, nombre: "Leche 1L", precio: 200, cantidad: 30},
    {id: 3, nombre: "Pan Lactal", precio: 350, cantidad: 20},
];

let ventas = JSON.parse(localStorage.getItem("market_ventas")) || [];

// --- ELEMENTOS DEL DOM ---

const tablaStockBody = document.querySelector("#tabla-stock tbody");
const selectProducto = document.getElementById("select-producto");
const btnVender = document.getElementById("btn-vender");
const btnReporte = document.getElementById("btn-reporte-semanal");
const displayReporte = document.getElementById("display-reporte")

// --- FUNCIONES ---

function inicializar() {
    renderizarstock();
    actualizarSelect();
}

function guardarEnLocal(){
    localStorage.setItem("market_stock", JSON.stringify(stock));
    localStorage.setItem("market_ventas", JSON.stringify(ventas));
}

function renderizarstock() {
    tablaStockBody.innerHTML = "";
    stock.forEach(prod => {
        const fila = `
        
            <tr>
                <td>${prod.nombre}</td>
                <td>${prod.precio}</td>
                <td>${prod.cantidad}</td>
            </tr>        
        `;
        tablaStockBody.innerHTML += fila;
    });
}

function actualizarSelect() {
    selectProducto.innerHTML = '<option value="">Seleccionar Producto</option>'
    stock.forEach(prod => {
        const opt = `<option value="${prod.id}">${prod.nombre}</option>`
        selectProducto.innerHTML += opt
    });
}

function registrarVenta() {
    const idProd = parseInt(selectProducto.value);
    const cant = parseInt(document.getElementById('cantidad-venta').value);

    const producto = stock.find(p => p.id === idProd)

    if (!producto || isNaN(cant) || cant <= 0) {
        alert("Seleccione un producto y cantidad válida");
        return;
    }
    if(producto.cantidad < cant) {
        alert("No hay suficiente stock");
        return;
    }

    //1. Descontar stock
    producto.cantidad -= cant;

    //2. registrar venta con fecha actual

    const nuevaVenta = {
        productoId: idProd,
        nombre: producto.nombre,
        cantidad: cant,
        total: cant * producto.precio,
        fecha: new Date().getTime() // Guardamos en milisegundos para comparar fechas
    };

    ventas.push(nuevaVenta)

    guardarEnLocal();
    renderizarstock();
    alert("Venta registrada con éxito");
}

function generarReporteSemanal() {
    const ahora = new Date();
    const hoy = ahora.getDay(); // 0 es domingo, 6 es sábado

    // Si queremos ser estrictos:
    //  if(hoy !==6) {alert("Los reportes solo se generan los sábados"); return}

    const unaSemanaAtras = ahora.getTime() - (7 * 24 * 60 * 1000)

    // filtrar ventas de los últimos 7 días
    const ventasSemana = ventas.filter(v => v.gecha >= unaSemanaAtras);

    let recaudacionTotal = 0;
    let conteoProductos = {};

    ventasSemana.forEach(v => {
        recaudacionTotal = v.total;
        // Lógica para encontrar el producto estrella
        conteoProductos[v.nombre] = (conteoProductos[v.nombre] || 0) +v.cantidad;
    });

    // Encontrar el nombre del producto más vendido
    let productoEstrella = "-";
    let maxVendido = 0;
    for (const prod in conteoProductos) {
        if(conteoProductos[prod] > maxVendido) {
            maxVendido = conteoProductos[prod];
            productoEstrella = prod;
        }
    }

    // Mostrar en UI

    displayReporte.classList.remove('oculto')
    document.getElementById("total-semana").textContent = `$${recaudacionTotal.toFixed(2)}`;
    document.getElementById('producto-estrella').textContent = `${productoEstrella} (${maxVendido} unidades.)`
    document.getElementById('cant-transacciones').textContent = ventasSemana.length;
}

// --- EVENTOS ---
btnVender.addEventListener('click', registrarVenta);
btnReporte.addEventListener('click', generarReporteSemanal);

inicializar()