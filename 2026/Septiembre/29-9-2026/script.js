// 1. CAPTURA DE ELEMENTOS DOM
const productosForm = document.getElementById("productos-form");
const inputNombre = document.getElementById("input-nombre");
const inputPrecio = document.getElementById("input-precio");
const selectCategoria = document.getElementById("select-categoria");
const inputImagen = document.getElementById("input-imagen");

const buscarNombre = document.getElementById("buscar-nombre");
const filtrarCategoria = document.getElementById("filtrar-categoria");
const catalogoProductos = document.getElementById("catalogo-productos");

// 2. ESTADO INICIAL
let misProductos = JSON.parse(localStorage.getItem("mis_productos")) || [];

// 3. PERSISTENCIA
function guardarEnStorage() {
    localStorage.setItem("mis_productos", JSON.stringify(misProductos));
}

// 4. FUNCIÓN RENDERIZAR
function renderizarProductos() {
    catalogoProductos.innerHTML = "";

    const textoBusqueda = buscarNombre.value.trim().toLowerCase();
    const categoriaSeleccionada = filtrarCategoria.value;

    // Filtrar por nombre y por categoría en tiempo real
    const productosFiltrados = misProductos.filter((prod) => {
        const coincideNombre = prod.nombre.toLowerCase().includes(textoBusqueda);
        const coincideCategoria = categoriaSeleccionada === "todas" || prod.categoria === categoriaSeleccionada;
        return coincideNombre && coincideCategoria;
    });

    if (productosFiltrados.length === 0) {
        catalogoProductos.innerHTML = "<p>No hay productos que coincidan.</p>";
        return;
    }

    productosFiltrados.forEach((prod) => {
        const card = document.createElement("div");
        card.classList.add("producto-card");

        card.innerHTML = `
            <img src="${prod.imagen}" alt="${prod.nombre}" onerror="this.src='https://via.placeholder.com/150'">
            <h3>${prod.nombre}</h3>
            <span class="badge">${prod.categoria}</span>
            <p><strong>$${prod.precio.toFixed(2)}</strong></p>
            <button class="btn-eliminar" onclick="eliminarProducto(${prod.id})">Eliminar</button>
        `;

        catalogoProductos.appendChild(card);
    });
}

// 5. AGREGAR PRODUCTO
productosForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const nuevoProducto = {
        id: Date.now(),
        nombre: inputNombre.value.trim(),
        precio: parseFloat(inputPrecio.value),
        categoria: selectCategoria.value,
        imagen: inputImagen.value.trim()
    };

    misProductos.push(nuevoProducto);
    guardarEnStorage();
    renderizarProductos();

    productosForm.reset();
    inputNombre.focus();
});

// 6. ELIMINAR PRODUCTO
function eliminarProducto(id) {
    misProductos = misProductos.filter((prod) => prod.id !== id);
    guardarEnStorage();
    renderizarProductos();
}

// 7. EVENTOS DE FILTRADO
buscarNombre.addEventListener("input", renderizarProductos);
filtrarCategoria.addEventListener("change", renderizarProductos);

// Carga Inicial
renderizarProductos();