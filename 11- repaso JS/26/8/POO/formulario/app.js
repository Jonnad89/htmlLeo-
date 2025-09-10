const form = document.getElementById("formulario-contacto");

form.addEventListener("submit", function (e) {
    e.preventDefault();

    const nombre = document.getElementById("nombre").value;
    const email = document.getElementById("email").value;

    // validación básica

    // if (nombre.trim() === "" || email.trim() === "") {
    //     alert("Todos los campos son obligatorios");
    //     return;
    // }

    // if(!email.includes("@")) {
    //     alert("Email inválido");
    //     return
    // }

    const errores = document.getElementById("errores");
    errores.textContent = ""; // limpiamos los errores anteriores

    if (nombre.trim() === "") {
        errores.textContent = "Por favor ingresá tu nombre";
        return;
    }

    console.log("Nombre:", nombre)
    console.log("Email:", email)
})