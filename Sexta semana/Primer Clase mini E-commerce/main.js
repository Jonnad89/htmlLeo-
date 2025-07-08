// 1- Lista de productos 
const productos = [
    {id: 1, nombre: "Camiseta", precio : 2500},
    {id: 2, nombre: "Pantalon", precio : 4200},    
    {id: 3, nombre: "Zapatillas", precio : 7500},    
    {id: 4, nombre: "Gorra", precio : 1800},    
];

// 2 - Carrito (array vacío al principio) 
let carrito = JSON.parse(localStorage.getItem("carrito")) || [];

// 3 - Renderizar productos en pantalla

const contenedorProoductos = document.getElementById("lista-productos")
productos.forEach(producto => {
    const div = document.createElement("div");
    div.className = "producto";
    div.innerHTML = `
    <h3>${producto.nombre}</h3>
    <p>Precio: $${producto.precio}</p>
    <button>Agregar</button>
    `;

    const boton = div.querySelector("button")
    boton.addEventListener("click", () => agregarAlCarrito(producto.id));
    

    contenedorProoductos.appendChild(div);
});

// 4 - Agregar productos al carrito

function agregarAlCarrito(id) {
    const producto = productos.find(p => p.id === id);
    carrito.push(producto);
    guardarCarrito()
    renderCarrito();
}

// 5 - Función para renderizar el carrito completo
function renderCarrito() {
    const lista = document.getElementById("items-carrito");
    const totalSpan = document.getElementById("total");
    lista.innerHTML = "";
    let total = 0;

    carrito.forEach((item, index) => {
        const li = document.createElement("li");
        li.innerHTML = `
        ${item.nombre} - $${item.precio}
        <button onclick="eliminarDelCarrito(${index})">Eliminar</button>
        `;
        lista.appendChild(li);
        total += item.precio;
    });
    totalSpan.textContent = `Total: $${total}`;
}

// 6 - Elimnar un item del carrito 
function eliminarDelCarrito(index){
    carrito.splice(index, 1);
    guardarCarrito();
    renderCarrito();
}

// 7 - Guardar carrito en localStorage
function guardarCarrito() {
    localStorage.setItem("carrito", JSON.stringify(carrito));
}

// 8 - Renderizar al iniciar (si había algo en el localStorage)
function vaciarCarrito() {
    carrito = [];
    guardarCarrito();
    renderCarrito(); 
}

// 9 - Escuchar envento del botón de vacíar carrito
const btnVaciar = document.getElementById("vaciar-carrito");
if (btnVaciar) {
    btnVaciar.addEventListener("click", vaciarCarrito);
}

// 10 - Renderizar al iniciar
renderCarrito()