// getElementById

// let titulo = document.getElementById("titulo");
// titulo.textContent = "Texto cambiado con JavaScript"

function cambiarTexto() {
    const titulo = document.getElementById("titulo");
    titulo.textContent = "Texto cambiado con JavaScript"
}

// querySelector + innerHTML 

function mostrarHTML(){
    const contenedor = document.querySelector(".contenedor");
    contenedor.innerHTML = "<p><strong>Hola en negrita</strong></p>"
}

// Ejemplo con getElementById para cambiar color
 function cambiarColor() {
    const caja = document.getElementById("caja");
    caja.style.backgroundColor = "lightblue";
    caja.style.color = "darkblue"
 }

 // Eventos

 const btn = document.getElementById("btn");
 btn.addEventListener("click", function(){
    alert("Hola desde el evento click")
 })

 // Ejemplo con input

 const input = document.getElementById("nombre");
 const salida = document.getElementById("salida");

 input.addEventListener("input", function(){
    salida.textContent = "Hola " + input.value;
 })

 // Ejemplo submit con preventDefault

 const form = document.getElementById("formulario");
 form.addEventListener("submit", function(e){
    e.preventDefault() // evita que  se recargue
    const usuario = document.getElementById("usuario").value;
        alert("Formularo enviado " + usuario)

 })

 // Crear elementos dinámicamente

 function crearParrafo() {
    const nuevo = document.createElement("p");
    nuevo.textContent = "Soy un párrafo nuevo";

    document.body.appendChild(nuevo)
 }

 // Elimnar un elemento del DOM

 function eliminar() {
    const mensaje = document.getElementById("mensaje");
    mensaje.remove();
 }