// 1. Estado y persistencia
const STORAGE_KEY = "customConfig";

// Objeto por defecto que se usará si no hay nada guardado
const DEFAULT_CONFIG = {
    fondo: "#ecf0f1",
    bordeColor: "#3498db",
    bordeGrosor: 5,
    texto: "¡Configuración cargada!"
};

// Se inicializa con lo guardado, o con la configuración por defecto

let configuracion = JSON.parse(localStorage.getItem(STORAGE_KEY)) || DEFAULT_CONFIG;

// 2. Selectores del DOM
const cajaEstilos = document.getElementById("caja-estilos");
const colorFondoInput = document.getElementById('color-fondo');
const colorBordeInput = document.getElementById("color-borde");
const grosorBordeInput = document.getElementById("grosor-borde");
const textoInput = document.getElementById('texto-input');

// Funciones principales
/* Aplica los estilos y el texto actuales del objeto 'configuracion' al DOM */

function aplicarEstilos(){
    //1. Aplicación de Estilos Directos (elemento.style.propiedad)
    cajaEstilos.style.backgroundColor = configuracion.fondo;
    cajaEstilos.style.borderColor = configuracion.bordeColor;
    cajaEstilos.style.borderWidth = `${configuracion.bordeGrosor}px`;
    cajaEstilos.style.borderStyle = (configuracion.bordeGrosor > 0) ? 'solid' : 'none'

    //2. Aplicación de contenido
    cajaEstilos.querySelector('p').textContent = configuracion.texto;

    //3. Sincronizar los Inputs con el estado actual
    colorFondoInput.value = configuracion.fondo;
    colorBordeInput.value = configuracion.bordeColor;
    grosorBordeInput.value = configuracion.bordeGrosor;
    textoInput.value = configuracion.texto;
}

// Actualiza el objeto 'configuración' y guarda el estado en localStorage

function actualizarYGuardar() {
    //1. Actualizar el objeto con los valores actuales de los inputs
    configuracion.fondo = colorFondoInput.value;
    configuracion.bordeColor = colorBordeInput.value;
    configuracion.bordeGrosor = grosorBordeInput.value;
    configuracion.texto = textoInput.value;

    //2. Guardar persistencia (Objeto -> Texto JSON)
    localStorage.setItem(STORAGE_KEY, JSON.stringify(configuracion));

    //3. Aplicar los cambios al DOM inmediatamente
    aplicarEstilos();
}

//4. Inicialización
document.addEventListener('DOMContentLoaded', () => {
    // Al iniciar, aplicamos los estilos que cargamos de localStorage
    aplicarEstilos();

    // Asignar Listeners de Eventos (usando el evento 'input' para feedback en tiempo real )

    // El evento 'input' se dispara inmediatamente cuando el valor cambia
    colorFondoInput.addEventListener('input', actualizarYGuardar);
    colorBordeInput.addEventListener('input', actualizarYGuardar);
    grosorBordeInput.addEventListener('input' ,actualizarYGuardar)


    // El Evento 'input' también funciona bien para texto
    textoInput.addEventListener('input', actualizarYGuardar)
})