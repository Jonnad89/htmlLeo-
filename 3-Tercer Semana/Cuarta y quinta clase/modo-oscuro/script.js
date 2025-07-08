const btnToggle = document.getElementById("toggle-theme");
const body  = document.body;

btnToggle.addEventListener("click", () => {
    const modoOscuroActivo = body.classList.toggle("dark-mode")

    // Cambiar ícono del botón

btnToggle.textContent = modoOscuroActivo ? "🌞" : "🌙";
})

