// Seleccionamos los elementos
const form = document.getElementById("form-contacto");
const listaContactos = document.getElementById("lista-contactos");

// input de búsqueda
const inputBuscar = document.getElementById("buscar")

// Cargamos contactos desde localStorage o inicializamos array vacío

let contactos = JSON.parse(localStorage.getItem("contactos")) || [];

// Creamos función para renderizar la lista de contactos
function renderizarContactos( filtro = "" ) {
    listaContactos.innerHTML = ""; // Limpiar
    contactos
    .filter(c => 
        c.nombre.toLowerCase().includes(filtro) || 
        c.telefono.includes(filtro) ||
        c.email.toLowerCase().includes(filtro)
    )      
    .forEach((c, index) => {
        const div = document.createElement("div");
        div.classList.add("contacto");
        div.innerHTML = `
        <span>${c.nombre} - ${c.telefono} - ${c.email} </span>
        <button data-index="${index}">Eliminar</button>
        `;
        listaContactos.appendChild(div)
    });
}

// Escuchamos cambios en el input de búsqueda
inputBuscar.addEventListener("input", (e) => {
    const filtro = e.target.value.toLowerCase();
    renderizarContactos(filtro)
})

// Guardamos en localStorage
function guardarLocalStorage() {
    localStorage.setItem("contactos", JSON.stringify(contactos))
}

// Manejamos envío del formulario
form.addEventListener("submit", (e) => {
    e.preventDefault();
    const nombre = document.getElementById("nombre").value.trim();
    const telefono = document.getElementById("telefono").value.trim();
    const email = document.getElementById("email").value.trim();

    if(!nombre || !telefono || !email) return; // simple validación

    // Creamos objeto contacto
    const nuevoContacto = {nombre, telefono, email};
    contactos.push(nuevoContacto);

    guardarLocalStorage();
    renderizarContactos();
    form.reset();
});

// Manejamos eliminación (delegación de eventos)
listaContactos.addEventListener("click", (e) => {
    if (e.target.tagName === "BUTTON") {
        const index = e.target.getAttribute("data-index");
        contactos.splice(index, 1);
        guardarLocalStorage();
        renderizarContactos();
    }
});

// Renderizamos al cargar la página
renderizarContactos();