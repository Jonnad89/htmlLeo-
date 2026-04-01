// Estado global y persistencia

const META_DIARIA = 100;
const TIEMPO_DESCANSO_SEGS = 30 * 60; // 30 minutos en segundos
const TIEMPO_MAXIMO_PRODUCCION = 3600; // 1 hora de producción simulada

let totalProducido = 0; 
let tiempoProduccionSegs = 0;
let tiempoDescansoSegs = TIEMPO_DESCANSO_SEGS;
let cicloActivo = false;
let cronometroProduccion = null;
let cronometroDescanso = null;

// Estructura de RR.HH (Persistencia con localStorage)

let empleados = JSON.parse(localStorage.getItem("kfactorEmpleados")) || [

    {id: 1, nombre: "Marta R.", activo: false, horaEntrada: null},
    {id: 2, nombre: "Carlos G.", activo: false, horaEntrada: null},
    {id: 3, nombre: "Luisa P.", activo: false, horaEntrada: null}
];

// Selectores del DOM

const totalProducidoDisplay = document.getElementById("total-producido");
const reqBotellasDisplay = document.getElementById("req-botellas");
const reqTapitasDisplay = document.getElementById("req-tapitas");
const estadoItemDisplay = document.getElementById("estado-item");
const visorCalidad = document.getElementById("visor-calidad")
const tiempoTranscurridoDisplay = document.getElementById("tiempo-transcurrido");
const tiempoDescansoDisplay = document.getElementById("tiempo-descanso");
const listaEmpleadosUL = document.getElementById("lista-empleados");

const simularBtn = document.getElementById("simular-produccion-btn");
const iniciarCicloBtn = document.getElementById("iniciar-ciclo-btn");
const pausarCicloBtn = document.getElementById("pausar-ciclo-btn");
const salidaGeneralBtn = document.getElementById("marcar-salida-general-btn");

// Funciones Auxiliares

function guardarEmpleados() {
    localStorage.setItem('kfactorEmpleados', JSON.stringify(empleados));
}

function formatearTiempo(totalSegundos) {
    const horas = String(Math.floor(totalSegundos / 3600)).padStart(2, '0');
    const minutos = String(Math.floor((totalSegundos % 3600) / 60)).padStart(2, '0');
    const segundos = String(totalSegundos % 60).padStart(2, '0');
    return `${horas}:${minutos}:${segundos}`
}

// MODULO 1: Producción y Calidad

function actualizarInventario(){
    // Conteo de botellas y tapitas 
    reqBotellasDisplay.textContent = totalProducido;
    reqTapitasDisplay.textContent = totalProducido;
}

function simularProduccion() {
    if(!cicloActivo) {
        alert("La máquina está pausada o en descanso. ¡Inicia el ciclo primero!")
        return;
    }

    // Contador de items
    totalProducido++;
    totalProducidoDisplay.textContent = totalProducido;

    // Control de Calidad (Fallo aleatorio del 10%)
    const falloCalidad = Math.random() < 0.10;

    if (falloCalidad) {
        estadoItemDisplay.textContent = "FALLO (DESCARTADO)"
        estadoItemDisplay.classList.remove("estado-ok");
        estadoItemDisplay.classList.add("estado-fail");
        visorCalidad.style.border = "2px solid var(--color-fail)";
    } else {
        estadoItemDisplay.textContent ='OK';
        estadoItemDisplay.classList.remove('estado-fail');
        estadoItemDisplay.classList.add('estado-ok');
        visorCalidad.style.border = '1px solid #ddd'
    }

    // Actualizar los requerimientos de inventario
    actualizarInventario();

    // Comprobar si se alcanzó la meta
    if( totalProducido >= META_DIARIA ) {
        alert('🎉¡META DIARIA ALCANZADA!')
        detenerCiclo();
    }
}

// MÓDULO 2: TIEMPOS DE MÁQUINA (Cronómetros) 

function tickProduccion() {
    tiempoProduccionSegs++;
    tiempoTranscurridoDisplay.textContent = formatearTiempo(tiempoProduccionSegs)

    // Lógica de tiempo máximo de producción (ej. 1 hora)
    if(tiempoProduccionSegs >= TIEMPO_MAXIMO_PRODUCCION) {
        alert('🚨TIEMPO MÁXIMO DE PRODUCCIÓN ALCANZADO. Iniciando descanso.')
        detenerCiclo();
        iniciarDescanso();
    }
}

function tickDescanso() {
    tiempoDescansoSegs--;
    tiempoDescansoDisplay.textContent = formatearTiempo(tiempoDescansoSegs);

    if(tiempoDescansoSegs <= 0) {
        clearInterval(cronometroDescanso);
        tiempoDescansoDisplay.textContent = "¡LISTO PARA PRODUCIR!";
        tiempoDescansoDisplay.classList.remove('descanso-activo');
        iniciarCicloBtn.disable = false; // Habilitar inicio
    }
}

function iniciarCiclo() {
    // Resetear el descanso si estaba activo
    if(cronometroDescanso) {
        clearInterval(cronometroDescanso);
        tiempoDescansoSegs = 0;
        tiempoDescansoDisplay.textContent = '00:00:00';
    }

    cicloActivo = true; 
    iniciarCicloBtn.disabled = true; 
    pausarCicloBtn.disabled = false; 
    simularBtn.disabled = false;

    // Iniciar cronómetro de producción 
    cronometroProduccion = setInterval(tickProduccion, 1000)
}

function detenerCiclo() {
    cicloActivo = false; 
    clearInterval(cronometroProduccion);
    iniciarCicloBtn.disabled = false;
    pausarCicloBtn.disabled = true;
    simularBtn.disabled = true; // No se puede producir si está detenido
}

function iniciarDescanso() {
    detenerCiclo(); // Asegurar que la producción está parada
    tiempoDescansoSegs = TIEMPO_DESCANSO_SEGS; // Resetear tiempo de descanso
    tiempoDescansoDisplay.classList.add('descanso-activo');
    iniciarCicloBtn.disabled = true; // Blooquear inicio durante el descanso

    cronometroDescanso = setInterval(tickDescanso, 1000)
}

// MÓDULO 3: RECURSOS HUMANOS

function renderizarEmpleados() {
    listaEmpleadosUL.innerHTML = '';

    empleados.forEach(emp => {
        const li = document.createElement('li');
        li.classList.add('empleado-item');

        const estadoClase = emp.activo ? 'estado-activo' : 'estado-inactivo';
        const estadoTexto = emp.activo ? 'ACTIVO' : 'FUERA';
        const horaTexto = emp.horaEntrada ? new Date(emp.horaEntrada).toLocaleTimeString() : '---';

        li.innerHTML = `
        
            <span> ${emp.nombre} </span>
            <span class="estado-laboral ${estadoClase}"> ${estadoTexto} </span>
            <small>Entrada: ${horaTexto} </small>
            <button class="btn-marcar" data-id="${emp.id}" data-action="${emp.activo ? 'salida' : 'entrada'}">
                ${emp.activo ? 'Salida' : "Inicio"}
            </button>
        `;

        listaEmpleadosUL.appendChild(li);
    });

    asignarListenersRRHH();
}

function manejarMarcaje(id, action) {
    const empIndex = empleados.findIndex(e => e.id === id);
    if(empIndex === -1) return; 

    if(action === "entrada") {
        empleados[empIndex].activo = true;
        empleados[empIndex].horaEntrada = Date.now();
    } else if (action === 'salida') {
        empleados[empIndex].activo = false;
        empleados[empIndex].horaEntrada = null;
    }

    guardarEmpleados();
    renderizarEmpleados();
}

function marcarSalidaGeneral() {
    empleados = empleados.map(emp => ({
        ...emp,
        activo: false,
        horaEntrada: null
    }));
    guardarEmpleados();
    renderizarEmpleados();
}

function asignarListenersRRHH() {
    document.querySelectorAll('.btn-marcar').forEach(btn => {
        btn.onclick = (e) => {
            const id = parseInt(e.target.dataset.id);
            const action = e.target.dataset.action;
            manejarMarcaje(id, action)
        };
    });
}

// Inicialización

document.addEventListener("DOMContentLoaded", () => {
    // Iniciar Displays
    tiempoTranscurridoDisplay.textContent = formatearTiempo(tiempoProduccionSegs);
    tiempoDescansoDisplay.textContent = formatearTiempo(tiempoDescansoSegs);
    totalProducidoDisplay.textContent = totalProducido;

    // Asignar listeners
    simularBtn.addEventListener("click", simularProduccion);
    iniciarCicloBtn.addEventListener("click", iniciarCiclo);
    pausarCicloBtn.addEventListener("click", detenerCiclo);
    salidaGeneralBtn.addEventListener("click", marcarSalidaGeneral);

    // Renderizar empleados
    renderizarEmpleados();

    // Deshabilitar botones de producción al inicio
    pausarCicloBtn.disabled = true; 
    simularBtn.disabled = true;
});