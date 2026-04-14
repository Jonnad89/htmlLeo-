//1. Los datos (simmulamos una base de datos)

const productos = [
    { id: 1, nombre: "Auriculares Pro", precio: 5000 },
    { id: 2, nombre: "Mouse Gamer", precio: 3500 },
    { id: 3, nombre: "Teclado Mecánico", precio: 8000 },
    { id: 4, nombre: "Monitor 24'", precio: 4500 },
];

//2. El carrito empieza vacío 
 
let carrito = [];

//3. Referencia al DOM

const contenedorProductos = document.getElementById("lista-productos");
const cantidadCarrito = document.getElementById("cantidad-carrito");
const totalCarrito = document.getElementById("total-carrito");

//4. Función para mostrar los productos en HTML
function mostrarProductos() {
    productos.forEach(producto => {
        const div = document.createElement("div");
        div.classList.add("producto-card");

        div.innerHTML = `
        
            <h3>${producto.nombre}</h3>
            <p>Precio: ${producto.precio}</p>
            <button class="btn-comprar" onclick="agregarCarrito(${producto.id})">
                Agregar al carrito
            </button>
        `;
        contenedorProductos.appendChild(div)
    });
}

//5. Lógica del carrito
function agregarCarrito(id) {
    // Buscamos el producto en nuestra "base de datos"
    const productoEncontrado = productos.find(p => p.id === id);

    // Lo agregamos al array del carrito
    carrito.push(productoEncontrado);

    actualizarInterfaz();
}

// 6. Actualizar la info de arriba (Header)
function actualizarInterfaz() {
    // Actualizar cantidad
    cantidadCarrito.innerText = carrito.length;

    // Calcular el total usando reduce 
    const total = carrito.reduce((acc, p) => acc + p.precio, 0);
    totalCarrito.innerText = total;
}

// Iniciamos la tienda

mostrarProductos()