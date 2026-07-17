// 1. Selección de elementos (usando querySelector y getElementById)
const clubCard = document.querySelector("#clubCard");
const cardTitle = document.getElementById("cardTitle");
const statusText = document.getElementById("statusText");

const inputClub = document.getElementById("inputClub");
const colorContainer = document.getElementById("colorContainer"); // Contenedor para delegación

const btnGuardar = document.getElementById("btnGuardar");
const btnBorrar = document.getElementById("btnBorrar");

// Variable temporal en memoria para rastrear el color elegido
let colorSeleccionado = "#bdc7c7";


//2. Manipulación del DOM en tiempo real
// Escuchamos lo que el usuario escribe y lo reflejamos al instante en la tarjeta
inputClub.addEventListener("input", (evento) => {
    // Si el input está vacío, volvemos al texto por defecto
    cardTitle.innerText = evento.target.value || "Tu Club Acá";
});

// 3. Delegación de eventos (Técnica avanzada de optimmización)
// En vez de ponerle addEventListener a cada uno de los botones de colores
// le ponemos uno solo al contenedor padre
colorContainer.addEventListener("click", (evento)=> {
    //Verificamos si el elemento clickeado realmente es un boton con la clase .color-btn
    if (evento.target.classList.contains("color-btn")) {
        //Obtenemos el color desde el atributo personalizado "data-color" del HTML
        colorSeleccionado = evento.target.getAttribute("data-color");

        // Manipulamos el estilo dinámicamente aplicando el color
        clubCard.style.backgroundColor = colorSeleccionado;
    }
});

//4. Almacenamiento: LocalStorage (Persistencia)
// Guardamos las preferencias del usuario para que no se pierdan al recargar
btnGuardar.addEventListener("click", () => {
    const club = inputClub.value;

    if(!club) {
        alert("¡Escribí el nombre de tu club primero");
        return
    }

    // Creamos un objeto de preferencias
    const preferencias = {
        clubFavorito: club,
        colorTarjeta: colorSeleccionado
    };

    // Ojo! LocalStorage solo guarda TEXTO (strings)
    // Usamos JSON.stringify para transformar nuestro objeto JS en texto plano
    localStorage.setItem("userClubData", JSON.stringify(preferencias));

    statusText.innerText = "¡Guardado en LocalStorage";
    statusText.style.color = "#27ae60";
});

// 5. Borrar la memoria
btnBorrar.addEventListener("click", () => {
    //Eliminamos la clave del almacenamiento
    localStorage.removeItem("userClubData");

    // Reseteamos visualente a los valores iniciales
    inputClub.value = "";
    cardTitle.innerText = "Tu Club Acá";
    clubCard.style.backgroundColor = "#bdc3c7";
    colorSeleccionado = "#bdc3c7";
    statusText.innerText = "Memoria limpia";
    statusText.style.color = "#e74c3c";
});

// Flujo de Arranque: Recuperar datos guardados
// Esta función corre sola apenas se abre o se carga la página
function cargarPreferenciaPrevia() {
    const datosGuardados = localStorage.getItem("userClubData");

    if(datosGuardados) {
        //Transformar el texto plano de vuelta a un objeto JS usando JSON.parse
        const preferencias = JSON.parse(datosGuardados);

        //Actualizamos el DOM con lo que el usuario guardó en el pasado
        inputClub.value = preferencias.clubFavorito;
        cardTitle.innerText = preferencias.clubFavorito;
        clubCard.style.backgroundColor = preferencias.colorTarjeta;
        colorSeleccionado = preferencias.colorTarjeta;

        statusText.innerText = "Recuperado de la memoria";
        statusText.style.color = "#2980b9";
    }
}

// Ejecutamos la carga inicial
cargarPreferenciaPrevia();


/*
Usar JSON.stringify y JSON.parse se llama "Serializar objetos"
*/