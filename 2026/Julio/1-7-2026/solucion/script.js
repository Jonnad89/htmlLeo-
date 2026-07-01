// 1. CAPTURA DE ELEMENTOS DEL DOM
const inputTotal = document.getElementById("totalCuenta");
const inputPersonas = document.getElementById("cantidadPersonas");
const selectPropina = document.getElementById("porcentajePropina");
const btnCalcular = document.getElementById("btnCalcular");

const errorMensaje = document.getElementById("errorMensaje");
const resumenBox = document.getElementById("resumenBox");
const resPropina = document.getElementById("resPropina");
const resTotalConPropina = document.getElementById("resTotalConPropina");
const resPorPersona = document.getElementById("resPorPersona");

// 2. EVENTO CLIC DEL BOTÓN
btnCalcular.addEventListener("click", () => {
    // Convertimos los inputs a números
    let total = Number(inputTotal.value);
    let personas = Number(inputPersonas.value);
    let porcPropina = Number(selectPropina.value);

    // 3. VALIDACIÓN (Frenos de mano)
    if (total <= 0 || personas < 1) {
        errorMensaje.innerText = "⚠️ Por favor, ingresá montos y personas válidas.";
        resumenBox.classList.add("oculto"); // Ocultamos el resumen si sale error
        return; // Corta la ejecución de la función
    }

    // Si pasa la validación, borramos el mensaje de error anterior
    errorMensaje.innerText = "";

    // 4. LÓGICA MATEMÁTICA
    let dineroPropina = total * (porcPropina / 100);
    let cuentaMasPropina = total + dineroPropina;
    let cuotaPorPersona = cuentaMasPropina / personas;

    // 5. INYECCIÓN EN EL HTML CON DECIMALES LIMPIOS (.toFixed)
    resPropina.innerText = `$${dineroPropina.toFixed(2)}`;
    resTotalConPropina.innerText = `$${cuentaMasPropina.toFixed(2)}`;
    resPorPersona.innerText = `$${cuotaPorPersona.toFixed(2)}`;

    // Mostramos el cuadro de resultados quitando la clase que lo ocultaba
    resumenBox.classList.remove("oculto");
});