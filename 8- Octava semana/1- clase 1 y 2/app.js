const boton = document.getElementById("toggleModo");
const body = document.body;

boton.addEventListener("click", () => {
    body.classList.toggle("modo-oscuro");
    body.classList.toggle("modo-claro");
    boton.textContent = body.classList.contains("modo-oscuro") ? "☀️ Modo Claro" : "🌙 Modo Oscuro"
})