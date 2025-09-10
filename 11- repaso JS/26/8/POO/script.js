const boton = document.getElementById("boton");
const titulo = document.getElementById("titulo")

boton.addEventListener("click", () =>{
    titulo.textContent = "Texto cambiado desde JavaScript"
})

/*
Repaso rápido
Acción                              Código
Obtener elemento por ID             document.getElementById("id")
Cambiar texto                       element.textContent = "nuevo texto"
Agregar clase                       element.classList.add("clase")
Escuchar evento                     element.addEventListenner("click", fn)
*/

function mostrarHTML() {
    const contenedor = document.querySelector(".contenedor");
    contenedor.innerHTML = "<p><strong>Hola en negrita</strong></p>"
}

function cambiarColor() {
    const caja = document.getElementById("caja");
    caja.style.backgroundColor = "lightblue";
    caja.style.color = "darkblue";
}

// Eventos

const btn = document.getElementById("btn");

btn.addEventListener("click", function() {
    alert("Hola desde el evento click")
});

// evento input
const input = document.getElementById("nombre");
const salida = document.getElementById("salida")

input.addEventListener("input", function() {
    salida.textContent = "Hola " + input.value; 
})

// evento submit con preventDefault()

const form = document.getElementById("formulario");

form.addEventListener("submit", function (e) {
    e.preventDefault(); // evita que se recargue
    const usuario = document.getElementById("usuario").value;
    alert("Formulario enviado: " + usuario)
})

// Crear elementos dinámicamente

function crearParrafo() {
    const nuevo = document.createElement("p");
    nuevo.textContent = "Soy un párrafo nuevo";
    document.body.appendChild(nuevo)
}

// Eliminar un elemento del DOM

function eliminar() {
    const mensaje = document.getElementById("mensaje");
    mensaje.remove();
}