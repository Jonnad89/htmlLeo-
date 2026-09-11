const inputNombre = document.getElementById("prod-nombre");
const inputPrecio = document.getElementById("prod-precio");
const btnAgregar = document.getElementById("btn-agregar");
const listaCarrito = document.getElementById("lista-carrito");
const montoTotal = document.getElementById("monto-total");
const btnVaciar = document.getElementById("btn-vaciar");

// 1. Estado + LocalStorage
let carrito = JSON.parse(localStorage.getItem("mi_carrito")) || [];

// 2. Guardar en Storage
function guardar() {
    localStorage.setItem("mi_carrito", JSON.stringify(carrito));
}

// 3. Renderizado (Estado manda)
function renderizar() {
    listaCarrito.innerHTML = "";
    let total = 0;

    carrito.forEach(prod => {
        total += prod.precio; // Suma acumulativa

        const li = document.createElement("li");
        li.innerHTML = `
            ${prod.nombre} - $${prod.precio}
            <button class="btn-del" onclick="eliminarProducto(${prod.id})">X</button>
        `;
        listaCarrito.appendChild(li);
    });

    montoTotal.textContent = total;
}

// 4. Agregar
function agregarProducto() {
    const nombre = inputNombre.value.trim();
    const precio = Number(inputPrecio.value);

    if (nombre === "" || precio <= 0 || isNaN(precio)) {
        alert("Ingresá un nombre y un precio válido.");
        return;
    }

    const nuevoProd = {
        id: Date.now(),
        nombre: nombre,
        precio: precio
    };

    carrito.push(nuevoProd);
    guardar();
    renderizar();

    inputNombre.value = "";
    inputPrecio.value = "";
    inputNombre.focus();
}

// 5. Eliminar
function eliminarProducto(id) {
    carrito = carrito.filter(prod => prod.id !== id);
    guardar();
    renderizar();
}

// 6. Vaciar
btnVaciar.addEventListener("click", () => {
    carrito = [];
    localStorage.removeItem("mi_carrito");
    renderizar();
});

btnAgregar.addEventListener("click", agregarProducto);

// Inicialización
renderizar();