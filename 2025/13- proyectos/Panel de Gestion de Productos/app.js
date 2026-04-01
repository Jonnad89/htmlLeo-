const form = document.getElementById('productForm');
const productTable = document.getElementById('productTable');
const buscarInput = document.getElementById('buscar');

let productos = [];

form.addEventListener('submit', function (e) {
    e.preventDefault();

    const nombre = document.getElementById('nombre').value.trim();
    const categoria = document.getElementById('categoria').value.trim();
    const cantidad = parseInt(document.getElementById('cantidad').value);
    const precio = parseFloat(document.getElementById('precio').value);

  productos.push({nombre, categoria, cantidad, precio});
    renderProductos(productos);
    form.reset();
});

buscarInput.addEventListener('input', function () {
    const texto = buscarInput.value.toLowerCase();
    const filtrados = productos.filter(p => p.nombre.toLowerCase().includes(texto));
    renderProductos(filtrados)
});

function renderProductos(lista) {
    productTable.innerHTML = '';
    lista.forEach((p, index) => {
        const fila = document.createElement('tr');
        const total = p.cantidad * p.precio;
        fila.innerHTML = `
        <td>${p.nombre}</td>
        <td>${p.categoria}</td>
        <td>${p.cantidad}</td>
        <td>${p.precio.toFixed(2)}</td>
        <td>$${total.toFixed(2)}</td>
        <td class="actions">
            <button type="button" onclick="eliminarProducto(${index})">Eliminar</button>
        </td>
        `;
        productTable.appendChild(fila)
    });
}

function eliminarProducto(index) {
    productos.splice(index, 1);
    renderProductos(productos)
}