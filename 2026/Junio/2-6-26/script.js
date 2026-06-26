const MarketApp = {
    // Inventario general de la tienda
    inventario: [
        { id: 101, nombre : "Yerba Mate 1kg", precioo : 1200, stock : 15 },
        { id :102, nombre : "Leche Entera 1L", precio : 450, stock : 24  },
        { id : 103, nombre : "Pan Lactal", precio : 980, stock : 8 },
        { id : 104, nombre : "Galletitas Dulces", precio : 350, stock : 40 },
    ],

    // Carrito del cliente actual

    carrito: [],

    init() {
        // Elementos del DOM
        this.gondoBody = document.getElementById("gondola-body");
        this.cartList = document.getElementById("cart-list");
        this.ticketOutput = document.getElementById("ticket-output");

        this.inputName = document.getElementById("prod-name")
        this.inputPrice = document.getElementById("prod-price")
        this.inputStock = document.getElementById("prod-stock")
        this.btnAddStock = document.getElementById("btn-add-stock")

        this.btnClearCart = document.getElementById("btn-clear-cart")
        this.btnProcess = document.getElementById("btn-process-sale")

        // Eventos
        this.btnAddStock.addEventListener("click", () => this.crearProducto())
        this.btnClearCart.addEventListener("click", () => this.vaciarCarrito())
        this.btnProcess.addEventListener("click", () => this.procesarFactura())

        //  Carga incial de datos
        this.renderGondola();
    },

    // Bucle 1: For...of (para dibujar la tabla de productos)
    renderGondola() {
        this.gondoBody.innerHTML = "";

        for(let producto of this.inventario) {
            this.gondoBody.innerHTML += `

                <tr>
                    <td><strong>#${producto.id}</strong></td>
                    <td>${producto.nombre}</td>
                    <td>${producto.precio}</td>
                    <td>${producto.stock > 0 ? producto.stock : '<span style="color:red">Sin Stock</span>'}</td>
                    <td>
                        <button class="btn-add-cart" onclick="MarketApp.agregarAlCarrito(${producto.id})" ${producto.stock <= 0 ? 'disabled style="background:#cbd5e1"' : ""}>
                        🛒 Añadir
                        </button>
                    </td>
                </tr>
            
            `;
        }
    }, 

    // Bucle 2: for clásico (para buscar y manejar stock del carrito)
    agregarAlCarrito(idProducto) {
        let prodInventario = null;

        // Buscamos el producto en el inventario
        for (let i = 0; i < this.inventario.length; i++) {
            if(this.inventario[i].id === idProducto) {
                prodInventario = this.inventario[i];
                break;
            }
        }

        if (!prodInventario || prodInventario.stock <= 0) return;

        // Descontamos 1 de stock fisico de la gondola
        prodInventario.stock--;

        // Bucamos si ya estaba en el carrito para sumarle cantidad
        let yaEnCarrito = false;
        for (let j = 0; j < this.carrito.length; j++) {
            if(this.carrito[j].id === idProducto) {
                this.carrito[j].cantidad++;
                yaEnCarrito = true;
                break;
            }
        }

        // Si es un producto nuevo en el carrito, le empujamos
        if(!yaEnCarrito) {
            this.carrito.push({
                id: prodInventario.id,
                nombre: prodInventario.nombre,
                precio: prodInventario.precio,
                cantidad : 1
            });
        }

        this.renderGondola();
        this.renderCarrito();
    },

    // Bucle 3: For... of (para renderizar el minilistado del carrito)
    renderCarrito() {
        this.cartList.innerHTML = "";
        if (this.carrito.length === 0) {
            this.cartList.innerHTML = `<p style="color: #94a3b8; font-size:0.9rem;">El carrito está vacio.</p>`;
            return;
        }

        for (let item of this.carrito) {
            this.cartList.innerHTML += `
            
            <div class="cart-item">
                <span>${item.nombre} (x${item.cantidad})</span>
                <strong>$${item.precio * item.cantidad}</strong>
            </div>
            `;
        }
    },

    // Bucle 4: for...of +totales (generación de factura comercial)

    procesarFactura() {
        if(this.carrito.length === 0) {
            alert("No hay item en el carrito para facturar.")
            return;
        }

        let subtotal = 0;
        let desgloseLineas = "";

        // Calculaos el subtotal acumulado con un bucle
        for(let item of this.carrito) {
            let itemTotal = item.precio * item.cantidad;
            subtotal += itemTotal;
            desgloseLineas += `${item.nombre.padEnd(20, ' ')} x${item.cantidad}     $${itemTotal}\n`
        }

        const iva = Math.floor(subtotal * 0.21);
        const totalNeto = subtotal + iva;

        // Creación del cuerpo del ticket simulando ipresora de matriz de puntos
        let ticketHTML = `
        
        <pre>
        ====================================
                SMART MARKET S.A
            La Plata, Buenos Aires
        ====================================
        Detalle de Compra:
        ${desgloseLineas}
        -------------------------------------
        SUBTOTAL:                $${subtotal}
        IVA (21%):                $${iva}
        -------------------------------------
        TOTAL A ABONAR           $${totalNeto}
        =====================================
        ¡Gracias por elegirnos en 2026!
        </pre>
        `;

            this.ticketOutput.innerHTML = ticketHTML
            this.carrito = []; //Limpiamos el carrito del cliente atendido
            this.renderCarrito();
    },

    // Bucle 5: for...in (para registrar un nuevo producto desde administración)
    crearProducto() {
        const name = this.inputName.value.trim();
        const price = parseInt(this.inputPrice.value);
        const stock = parseInt(this.inputStock.value);

        if (!name || isNaN(price) || isNaN(stock)) {
            alert("Por favor, completa todos los campos correctamente")
            return;
        }

        // Estructura base del nuevo producto
        const nuevoProducto = {
            id: Math.floor(Math.random() * 900) + 200, // IDs entre 200 y 1100
            nombre : name,
            precio : price,
            stock : stock
        };

        // Simulación: usamos un for...in para validar que el objeto no tenga propiedades vacias antes de inyectar
        let formularioValido = true; 
        for (let propiedad in nuevoProducto) {
            if (nuevoProducto[propiedad] === undefined || nuevoProducto[propiedad === ""]){
                formularioValido = false;
            }
        }

        if (formularioValido) {
            this.inventario.push(nuevoProducto);
            // Limpiamos todos los inputs
            this.inputName.value = "";
            this.inputPrice.value = "";
            this.inputStock.value = "";

            this.renderGondola();
        }
    },

    // Devolución de stock si el cliente se arrepiente y vacia la caja
    vaciarCarrito() {
        if(this.carrito.length === 0) return;

        // Devolvemos las cantidades al inventario general
        for (let itemCart of this.carrito) {
            for (let itemInv of this.inventario) {
                if (itemInv.id === itemCart.id) {
                    itemInv.stock += itemCart.cantidad;
                }
            }
        }

        this.carrito = [];
        this.renderGondola();
        this.renderCarrito();
        this.ticketOutput.innerHTML = `<p class="empty-ticket">Ninguna Venta procesada en este turno.</p>`
    }
};

// Encendido independiente de la aplicación
document.addEventListener("DOMContentLoaded", () => {
    MarketApp.init()
})