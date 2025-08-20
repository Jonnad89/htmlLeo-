const toggleBtn = document.getElementById("toggleMode");
const body = document.body;

toggleBtn.addEventListener("click", () => {
    body.classList.toggle("dark-mode");

    if(body.classList.contains("dark-mode")) {
        toggleBtn.textContent = "🌞 Modo Claro"
    } else {
        toggleBtn.textContent = " 🌙 Modo Oscuro "
    }
})