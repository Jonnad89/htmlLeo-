
// --- GUARDAR DATOS ---

const configuracion = {modoOscuro: true, idioma: "es"};
// Convertimos el objeto a un string (texto)
localStorage.setItem("user_prefs", JSON.stringify(configuracion))

// --- RECUPERAR DATOS ---
const datosGuardados = localStorage.getItem("user_prefs");
if (datosGuardados) {
    const objetoLimpio = JSON.parse(datosGuardados);
    console.log("Configuración recuperada:", objetoLimpio);   
}