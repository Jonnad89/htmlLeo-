// 1. La clase: Define qué es un Producto

class Producto {
    constructor(id, nombre, precio, imagen) {
        this.id = id;
        this.nombre = nombre;
        this.precio = precio;
        this.imagen = imagen;
    }
}

const Shop = {
    // Datos de la tienda (Podrían venir de una base de datos)
    catalogo: [
        new Producto(1, "Smartphone X", 800, "📱"),
        new Producto(2, "Laptop Pro", 1500, "💻"),
        new Producto(3, "Auriculares BT", 200, "🎧"),
        new Producto(4, "Smartwatch", 350, "⌚"),
    ],
    carrito: [],

    init() {
        this.gridProductos = document.getElementById("product-grid");
        this.listaCarrito = document.getElementById("cart-list");
        this.totalUI = document.getElementById("cart-total");
        this.countUI = document.getElementById("cart-count");
        this.btnCheckout = document.getElementById("checkout-btn");

        this.renderCatalogo();

        //  Listener para el botón de finalizar
        this.btnCheckout.addEventListener("click", () => {
            if(this.carrito.length > 0) {
                alert(`¡Gracias por tu compra! Pagaste $${this.calcularTotal()}`);
                this.carrito = [];
                this.renderCarrito();
            } else {
                alert("El carrito está vaío.")
            }
        });
    },

    renderCatalogo() {
        this.catalogo.forEach(prod => {
            const card = document.createElement("div");
            card.className = "product-card";
            card.innerHTML = `
                <div class="img">${prod.imagen}</div>
                <h3>${prod.nombre}</h3>
                <p>$${prod.precio}</p>
                <button class="add-btn" data-id="${prod.id}">Agregar al Carrito</button>
            `;

            // El secreto: El Listener se agregar acá mismo al crear el botón
            card.querySelector(".add-btn").addEventListener("click", () => {
                this.agregarAlCarrito(prod.id);
            });

            this.gridProductos.appendChild(card);
        });
    },
    agregarAlCarrito(id) {
        const producto = this.catalogo.find(p => p.id === id);
        this.carrito.push(producto);
        this.renderCarrito();
    },

    calcularTotal() {
        return this.carrito.reduce((sum, p) => sum + p.precio, 0);
    },

    renderCarrito() {
        this.listaCarrito.innerHTML = "";

        this.carrito.forEach((prod, index) => {
            const item = document.createElement("div");
            item.className = "cart-item";
            item.innerHTML = `
            
            <span>${prod.nombre} - $${prod.precio}</span>
            <button class="remove-btn">✖</button>
            `;

            item.querySelector(".remove-btn").addEventListener("click", () => {
                this.carrito.splice(index, 1); // Saca el elemento de su posición
                this.renderCarrito();
            });

            this.listaCarrito.appendChild(item)
        });

        this.totalUI.innerText = this.calcularTotal();
        this.countUI.innerText = this.carrito.length;
    }
};

document.addEventListener("DOMContentLoaded", () => Shop.init())