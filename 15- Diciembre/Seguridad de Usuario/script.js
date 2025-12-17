// Variiables de Control de Seguridad
let intentosFallidos = 0;
const MAX_INTENTOS = 3;
let bloqueoActivo = false;

//1. Simulación de Base de Datos
const usuarioDB = {
  nombre: "Juan",
  rango: "Administrador",
  // token: "ABC-123-XYZ"
  password: "1234admin", // La clave que debe coincidir
};

// 2. Selectores
const btnLogin = document.getElementById("btn-login");
const btnLogout = document.getElementById("btn-logout");
const loader = document.getElementById("loader");
const userName = document.getElementById("user-name");
const statusText = document.getElementById("status-text");
const accessLevel = document.getElementById("access-level");

// Nuevos selectores para input, error y login
const passInput = document.getElementById("password-input");
const errorMsg = document.getElementById("error-msg");
const loginForm = document.getElementById("login-form");

// 3. Dunción asíncrona que simula el Backend

async function autenticarUsuario() {
  if (bloqueoActivo) return;
  const passwordIngresada = passInput.value;

  // Limpiamos errores previos
  errorMsg.classList.add("oculto");
  passInput.style.borderColor = "#ddd";
  // Mostramos el loader y ocultamos el botón
  btnLogin.classList.add("oculto");
  loader.classList.remove("oculto");

  // Creamos una promesa que tarda 2 segundos
  await new Promise((resolve) => setTimeout(resolve, 1200));

  loader.classList.add("oculto");
  // Validación real
  if (passwordIngresada === usuarioDB.password) {
    // Cambiamos el estado de la interfaz (Éxito)
    intentosFallidos = 0; // Resetear intentos al acertar
    userName.textContent = usuarioDB.nombre;
    statusText.textContent = "Estado: 🟢 Conectado";
    accessLevel.textContent = usuarioDB.rango;

    loginForm.classList.add("oculto");
    btnLogout.classList.remove("oculto");
  } else {
    // Error
    intentosFallidos++;
    if (intentosFallidos >= MAX_INTENTOS){
        activarBloqueo();
    } else {

        btnLogin.classList.remove("oculto");
        errorMsg.textContent = `❌ Incorrecto. Intentos restantes ${MAX_INTENTOS}`
        errorMsg.classList.remove("oculto");
        passInput.value = ""; // Limpiamos el campo
    }
    // passInput.style.borderColor("#e74c3c");
  }
}

function activarBloqueo() {
    bloqueoActivo = true;
    passInput.disabled =true;
    errorMsg.textContent = "🚫 Demasiados intentos. Bloquado por 30 segundos."
    errorMsg.classList.remove("oculto")

    let segundosRestantes = 30;

    const intervalo = setInterval(()=> {
        segundosRestantes--;
        errorMsg.textContent = `🚫 Bloqueado. Reintenta en ${segundosRestantes} segundos.`

        if(segundosRestantes <= 0) {
            clearInterval(intervalo)
            desbloquearSistema();
        }
    }, 1000)
}

function desbloquearSistema() {
    bloqueoActivo = false;
    intentosFallidos = 0;
    passInput.disabled = false;
    passInput.value = "";
    errorMsg.classList.add('oculto')
    btnLogin.classList.remove('oculto')
}
// 4. Eventos
btnLogin.addEventListener("click", () => {
  autenticarUsuario();
});

btnLogout.addEventListener("click", () => {
  // Resetear todo
  userName.textContent = "Invitado";
  statusText.textContent = "Estado: 🔴 Desconectado";
  accessLevel.textContent = "Nulo";
  passInput.value = "";

  loginForm.classList.remove("oculto");
  btnLogout.classList.add("oculto");
  btnLogin.classList.remove("oculto");
});
