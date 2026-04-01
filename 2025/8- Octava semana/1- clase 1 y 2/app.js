const boton = document.getElementById("toggleModo");
const body = document.body;

boton.addEventListener("click", () => {
    body.classList.toggle("modo-oscuro");
    body.classList.toggle("modo-claro");
    boton.textContent = body.classList.contains("modo-oscuro") ? "☀️ Modo Claro" : "🌙 Modo Oscuro"
})

document.addEventListener("DOMContentLoaded", () => {
    const sections = document.querySelectorAll(".section-hidden");

    const observer = new IntersectionObserver((entries, obs) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("section-visible", "section-animate");
                obs.unobserve(entry.target); // Evita que se repita
            }
        });
    }, { threshold : 0.1 });

    sections.forEach(sec => observer.observe(sec))
});