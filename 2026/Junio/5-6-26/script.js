// ==========================================
// 1. MEMORIA DEL JUEGO (ESTADO)
// ==========================================
let stockPociones = 10;
let oroTotal = 0;

// Constantes de la economía del juego
const PRECIO_VENTA = 50;  // Oro que nos pagan por cada poción vendida
const COSTO_COMPRA = 30;   // Oro que nos cuesta reponer cada poción

// ==========================================
// 2. ELEMENTOS DEL DOM
// ==========================================
const pantallaStock = document.getElementById('pantalla-stock');
const pantallaOro = document.getElementById('pantalla-oro');
const cantidadInput = document.getElementById('cantidad-input');
const btnVender = document.getElementById('btn-vender');
const btnAbastecer = document.getElementById('btn-abastecer');

// ==========================================
// 3. LISTENERS / ACCIONES
// ==========================================

// --- BOTÓN: VENDER POCIONES 💵 ---
btnVender.addEventListener('click', () => {
    const cantidad = Number(cantidadInput.value);

    // Validación de número correcto
    if (isNaN(cantidad) || cantidad <= 0) {
        alert("🧙‍♂️ ¡Por favor, ingresá una cantidad válida de pociones!");
        return;
    }

    // CONTROL DE SEGURIDAD: ¿Tenemos suficientes pociones para vender?
    if (cantidad > stockPociones) {
        alert(`❌ ¡No podés vender esa cantidad! Solo te quedan ${stockPociones} pociones en stock.`);
        cantidadInput.value = "";
        
        // Destello rojo de error en el fondo
        document.body.style.backgroundColor = "#4c1d15";
        setTimeout(() => { document.body.style.backgroundColor = "#0b0f19"; }, 300);
        return;
    }

    // Lógica matemática: Restamos stock y sumamos oro ganado
    stockPociones -= cantidad;
    oroTotal += (cantidad * PRECIO_VENTA);

    // Actualizamos las pantallas en el HTML
    pantallaStock.innerText = stockPociones;
    pantallaOro.innerText = oroTotal;

    // Destello verde de éxito por la venta
    document.body.style.backgroundColor = "#064e3b";
    setTimeout(() => { document.body.style.backgroundColor = "#0b0f19"; }, 300);

    alert(`💰 ¡Venta exitosa! Vendiste ${cantidad} pociones por $${cantidad * PRECIO_VENTA} monedas de oro.`);
    cantidadInput.value = "";
});


// --- BOTÓN: ABASTECER STOCK 📦 ---
btnAbastecer.addEventListener('click', () => {
    const cantidad = Number(cantidadInput.value);

    if (isNaN(cantidad) || cantidad <= 0) {
        alert("🧙‍♂️ ¡Por favor, ingresá una cantidad válida para reponer!");
        return;
    }

    // Calculamos cuánto oro nos va a costar reponer estas pociones
    const costoTotal = cantidad * COSTO_COMPRA;

    // CONTROL DE SEGURIDAD: ¿Tenemos oro suficiente para comprar stock?
    if (costoTotal > oroTotal) {
        alert(`❌ ¡No tenés suficiente oro! Comprar ${cantidad} pociones te cuesta $${costoTotal} de oro, y solo tenés $${oroTotal}.`);
        cantidadInput.value = "";
        
        document.body.style.backgroundColor = "#4c1d15";
        setTimeout(() => { document.body.style.backgroundColor = "#0b0f19"; }, 300);
        return;
    }

    // Lógica matemática: Sumamos stock y restamos el oro que gastamos
    stockPociones += cantidad;
    oroTotal -= costoTotal;

    // Actualizamos las pantallas en el HTML
    pantallaStock.innerText = stockPociones;
    pantallaOro.innerText = oroTotal;

    // Destello azul de carga/reposición exitosa
    document.body.style.backgroundColor = "#1e3a8a";
    setTimeout(() => { document.body.style.backgroundColor = "#0b0f19"; }, 300);

    alert(`📦 ¡Stock repuesto! Compraste ${cantidad} pociones por $${costoTotal} monedas de oro.`);
    cantidadInput.value = "";
});