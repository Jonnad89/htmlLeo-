const form = document.getElementById("formulario");
const errores = document.getElementById("errores");

form.addEventListener("submit", function (e) {
  e.preventDefault(); // prevenir comportamiento por defecto

  const nombre = document.getElementById("nombre").value;
  const email = document.getElementById("email").value;
  const mensaje = document.getElementById("mensaje").value.trim();

    const mensajesError = [];
    if(nombre === "") {
        mensajesError.push("El campo nombre está vacío");
    }

    if(email === "") {
        mensajesError.push("El campo email está vacío")
    } else if (!email.includes("@") || !email.includes(".")) {
        mensajesError.push("El email no tiene un formato válido")
    }

    if (mensaje === "") {
        mensajesError.push("El campo mensaje está vacío")
    }

    errores.innerHTML = "";

    if(mensajesError.length > 0) {
        const ul = document.createElement("ul")
        ul.style.color = "red"

        mensajesError.forEach(msg => {
            const li = document.createElement("li");
            li.textContent = msg;
            ul.appendChild(li);
        });

        errores.appendChild(ul);
        return;
    }

    // Guardar datos en loalStorage
    const datos = {
        nombre,
        email,
        mensaje,
        fecha : new Date().toLocaleString()
    };

    // Convertmos el objeto a string y lo guardamos
    localStorage.setItem("formulario", JSON.stringify(datos))

    //Si no hay errores
    const success = document.createElement("p");
    success.style.color = "green";
    success.textContent = "Mensaje enviado correctamente";
    errores.appendChild(success);

    // limpiar el formulario
  form.reset();
//   errores.style.color = "red";
//   errores.textContent = "";

//   if (!nombre || !email || !mensaje) {
//     errores.textContent = "Todos los campos son obligatorios";
//     return;
//   }

//   if (!email.includes("@") || !email.includes(".")) {
//     errores.textContent = "El email no es válido";
//     return;
//   }
//   errores.style.color = "green";
//   errores.textContent = "Mensaje enviado correctamente";


});
