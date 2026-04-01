// Creamos un array de objetos con productos

const productos = [
    { nombre : "Laptop", precio: 1200, imagen : "Assets/laptop.jpg"},
    { nombre : "Teléfono", precio: 800, imagen :"Assets/telefono.png"},
    { nombre : "Auriculares", precio: 200, imagen :"Assets/auriculares.jpg"},
    { nombre : "Mouse", precio: 50, imagen :"Assets/mouse.jpg"}
];

// Seleccionamos el contenedor donde irán los productos

const lista = document.getElementById("product-list");

// Usamos un bucle for para recorrer los productos
for (let i = 0; i < productos.length; i++) {
    const producto = productos[i];

    // Creamos un div para cada tarjeta

    const card = document.createElement("div");
    card.classList.add("card")

    // Insertamos el contenido

    card.innerHTML = `
    <img src="${producto.imagen}" alt="${producto.nombre}">
    <h3>${producto.nombre}</h3>
    <p>${producto.precio}</p>
    `;

    // Agregamos la tarjeta al contenedor
    lista.appendChild(card)
}
