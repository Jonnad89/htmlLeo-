// --- 1. SIMULACIÓN DE BACKEND
const DB_KEY = "inventario_almacen"; // clave para localStorage
let inventario = [];

/*
Carga los datos del inventario desde el LocalStorage (la 'base de datos')
*/

function cargarInventario() {
  const dataJSON = localStorage.getItem(DB_KEY);
  // Si hay datos, los parsearemos (convertimos de string a array JS)
  // Si no hay, inicializamos un array vacío
  inventario = dataJSON ? JSON.parse(dataJSON) : [];
}

/*
    Guarda el array 'inventario' en el localStorage
    Esto simula una escritura en la base de datos
*/

function guardarInventario() {
  // Convertimos el array JS a string JSON para guardarlo
  localStorage.setItem(DB_KEY, JSON.stringify(inventario));
}

// --- 2. SELECTORES Y EVENTOS ---
const nombreInput = document.getElementById("nombre-input");
const cantidadInput = document.getElementById("cantidad-input");
const precioInput = document.getElementById("precio-input");
const agregarBtn = document.getElementById("agregar-btn");
const listaInventario = document.getElementById("lista-inventario");
const valorTotalIventarioTD = document.getElementById("valor-total-inventario");

// --- 3. LÓGICA DEL INVENTARIO ---
/*
    agrega un nuevo producto al array y actualiza el almacenamiento
*/

function agregarProducto() {
  // 1. Obtener y sanitizar valores
  const nombre = nombreInput.value.trim();
  const cantidad = parseInt(cantidadInput.value) || 0;
  const precio = parseInt(precioInput.value) || 0.0;

  if (!nombre || cantidad <= 0 || precio <= 0) {
    alert("Por favor, introduce datos válidos para el producto.");
    return;
  }
  // 2. Crear objeto (simulando un registro)
  const nuevoProducto = {
    id: Date.now(), // ID único (simulación de IDde base de datos)
    nombre: nombre,
    cantidad: cantidad,
    precio: precio,
  };

  // 3. Añadir el array (escribir en 'base de datos')
  inventario.push(nuevoProducto);

  //4. Guardar en LocalStorage (persistencia simulada)
  guardarInventario();

  //5. Actualizar la interfaz}
  renderizarInventario();

  // 6. Limpiar formulario
  nombreInput.value = "";
  cantidadInput.value = "1";
  precioInput.value = "0.00";
}
 
/* 
    Eliminaun producto por su ID
*/

function eliminarProducto(id) {
    // Filtramos el array, dejando solo los productos cuyo ID no coincide 
    inventario = inventario.filter(producto => producto.id !== id);

    guardarInventario()
    renderizarInventario();
}

/*
    Calcula y muestra el valor total de todo el inventario
*/

function calcularValorTotal() {
    let total = 0;

    inventario.forEach(producto => {
        total += producto.cantidad * producto.precio;
    });

    valorTotalIventarioTD.textContent = `$${total.toFixed(2)}`;
}

// --- 4. MANIPULACIÓN DEL DOM (RENDERIZADO) ---

/*
    Redibuja la tabla de inventario completa a partir del array
*/

function renderizarInventario() {
    listaInventario.innerHTML = ''; // Limpia la tabla

  inventario.forEach(producto => {
    const valorTotalProducto = producto.cantidad * producto.precio;

      const row = document.createElement('tr');
    row.innerHTML = `
    
        <td> ${producto.nombre} </td>
        <td> ${producto.cantidad} </td>
        <td> ${producto.precio.toFixed(2)} </td>
        <td> ${valorTotalProducto.toFixed(2)} </td>

        <td>
            <button
                class="btn-eliminar"
                data-id="${producto.id}">🗑</button>
        </td>
    `;
    listaInventario.appendChild(row)
  });

  // Asignar listeners a los nuevos botones de eliminar

  asisnarListenersEliminar();

  // Recalcular el total cada vez que se actualiza la lista
  calcularValorTotal();
}

/*
    Asigna el evento click a todos los botones de eliminar creados
*/

function asisnarListenersEliminar() {
    document.querySelectorAll('.btn-eliminar').forEach(btn => {
        btn.addEventListener('click', (e) => {
            // Obtenemos el ID del producto a eliminar
            const productoId = parseInt(e.target.dataset.id);
            eliminarProducto(productoId);
        });
    });
}

//--- 5. INICIALIZACIÓN ---

document.addEventListener('DOMContentLoaded', () => {
    cargarInventario(); // Cargar los datos al inicio 
    renderizarInventario(); // Mostrar los datos cargados

    agregarBtn.addEventListener("click", agregarProducto)
})