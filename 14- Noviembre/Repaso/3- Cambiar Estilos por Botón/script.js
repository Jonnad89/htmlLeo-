const caja = document.getElementById('caja');
const activarBtn = document.getElementById('activar-btn');
const desactivarBtn = document.getElementById('desactivar-btn');

function activarAlerta() {
    // Añadir la clase que tiene los estilos de alerta
    caja.classList.add('alerta-activa');
    caja.textContent = 'Estado: ¡ALERTA ACTIVADA!'
}

function desactivarAlerta() {
    // Remover la clase para volver al estilo base
    caja.classList.remove('alerta-activa');
    caja.textContent = "Estado: Normal";
}

// Inicialización
document.addEventListener('DOMContentLoaded', () => {
    activarBtn.addEventListener('click', activarAlerta);
    desactivarBtn.addEventListener('click', desactivarAlerta)
})