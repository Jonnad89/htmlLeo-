const botonToggle = document.getElementById("tema-toggle");
const body = document.body;

botonToggle.addEventListener("click", ()=> {
    body.classList.toggle("dark-mode");
    botonToggle.textContent = body.classList.contains("dark-mode") ? "🌞" : "🌙"
})