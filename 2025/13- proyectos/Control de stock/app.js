const form = document.getElementById('prodcutForm');
const productTable = document.getElementById('productTable');

form.addEventListener('submit', function(e) {
    e.preventDefault();

    const nombre = document.getElementById('nombre').value;
    const cantidad = parseInt(document.getElementById('cantidad').value);
    const precio = parseFloat(document.getElementById('precio').value);

    // Crear fila
    const fila = document.createElement('tr');

    const total = cantidad * precio;

    fila.innerHTML = `
    <td>${nombre}</td>
    <td>${cantidad}</td>
    <td>${precio.toFixed(2)}</td>
    <td>${total.toFixed(2)}</td>
    `;

    productTable.appendChild(fila)

    form.reset();

});