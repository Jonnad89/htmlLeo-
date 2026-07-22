// ==========================================
// 1. BASE DE DATOS SIMULADA (Módulo de Estado)
// ==========================================
// Simulamos turnos del mes para 2 médicos.
// Horarios de atención fija: 9:00 a 17:00 hs (8 turnos por día).
const medicosData = {
    "1": {
        nombre: "Dr. Mateo Rossi",
        // Días con sus turnos ocupados (los que no están acá, están libres)
        ocupacion: {
            "10": ["09:00", "10:00", "11:00", "12:00", "13:00", "14:00", "15:00", "16:00"], // Día completo (ROJO)
            "15": ["10:00", "14:00"], // Días con turnos mixtos
            "16": ["09:00", "11:00", "15:00"],
            "20": ["09:00", "10:00", "11:00", "12:00", "13:00", "14:00", "15:00", "16:00"]  // Día completo (ROJO)
        }
    },
    "2": {
        nombre: "Dra. Sofía Benítez",
        ocupacion: {
            "12": ["09:00", "10:00", "11:00", "12:00", "13:00", "14:00", "15:00", "16:00"],
            "15": ["09:00", "13:00", "16:00"]
        }
    }
};

const HORARIOS_BASE = ["09:00", "10:00", "11:00", "12:00", "13:00", "14:00", "15:00", "16:00"];

// Variables de estado de la app
let medicoSeleccionadoId = "1";
let diaSeleccionado = "15";
let horaSeleccionada = null;

// ==========================================
// 2. SELECCIÓN DE ELEMENTOS DEL DOM
// ==========================================
const selectMedico = document.getElementById("selectMedico");
const gridDias = document.getElementById("gridDias");
const gridHorarios = document.getElementById("gridHorarios");
const diaSeleccionadoTexto = document.getElementById("diaSeleccionadoTexto");
const btnReservar = document.getElementById("btnReservar");
const toastMensaje = document.getElementById("toastMensaje");

// ==========================================
// 3. FUNCIONES DE LÓGICA Y RENDERIZADO
// ==========================================

// A. Dibujar los días del mes (del día 10 al 20 para simplificar la vista)
function renderizarDias() {
    gridDias.innerHTML = "";
    const ocupacionMedico = medicosData[medicoSeleccionadoId].ocupacion;

    for (let dia = 10; dia <= 19; dia++) {
        const diaStr = dia.toString();
        const ocupados = ocupacionMedico[diaStr] || [];
        const estaLleno = ocupados.length === HORARIOS_BASE.length;

        const btnDia = document.createElement("button");
        btnDia.classList.add("day-btn");
        
        // Marcamos si tiene turnos libres (verde) o si está lleno (rojo)
        if (estaLleno) {
            btnDia.classList.add("full");
        } else {
            btnDia.classList.add("has-slots");
        }

        // Si es el día seleccionado actualmente
        if (diaStr === diaSeleccionado) {
            btnDia.classList.add("selected");
        }

        btnDia.innerHTML = `
            <span>${dia}</span>
            <span class="status-dot"></span>
        `;

        // Evento al hacer click en un día
        btnDia.addEventListener("click", () => {
            diaSeleccionado = diaStr;
            horaSeleccionada = null; // Reseteamos la hora al cambiar de día
            actualizarEstadoBoton();
            renderizarDias();
            renderizarHorarios();
        });

        gridDias.appendChild(btnDia);
    }
}

// B. Dibujar los horarios del día seleccionado (9 a 17 hs)
function renderizarHorarios() {
    gridHorarios.innerHTML = "";
    diaSeleccionadoTexto.innerText = diaSeleccionado;

    const ocupadosDelDia = medicosData[medicoSeleccionadoId].ocupacion[diaSeleccionado] || [];

    HORARIOS_BASE.forEach(hora => {
        const btnHora = document.createElement("button");
        btnHora.classList.add("hour-btn");
        btnHora.innerText = hora;

        const estaOcupado = ocupadosDelDia.includes(hora);

        if (estaOcupado) {
            btnHora.classList.add("busy");
            btnHora.innerText += " ❌";
        } else {
            btnHora.classList.add("available");
            
            // Si el usuario clickeó esta hora
            if (hora === horaSeleccionada) {
                btnHora.classList.add("selected");
            }

            // Evento para seleccionar horario
            btnHora.addEventListener("click", () => {
                horaSeleccionada = hora;
                actualizarEstadoBoton();
                renderizarHorarios(); // Re-renderizamos para mover la clase 'selected'
            });
        }

        gridHorarios.appendChild(btnHora);
    });
}

// C. Activar / Desactivar el botón de reserva
function actualizarEstadoBoton() {
    if (horaSeleccionada) {
        btnReservar.disabled = false;
        btnReservar.innerText = `Reservar para las ${horaSeleccionada} hs`;
    } else {
        btnReservar.disabled = true;
        btnReservar.innerText = "Seleccioná un horario";
    }
}

// ==========================================
// 4. EVENTOS PRINCIPALES
// ==========================================

// Cambio de especialista
selectMedico.addEventListener("change", (e) => {
    medicoSeleccionadoId = e.target.value;
    horaSeleccionada = null;
    actualizarEstadoBoton();
    renderizarDias();
    renderizarHorarios();
});

// Guardar Reserva (Modificación de datos)
btnReservar.addEventListener("click", () => {
    if (!horaSeleccionada) return;

    // 1. Agregamos el horario a la lista de ocupados
    if (!medicosData[medicoSeleccionadoId].ocupacion[diaSeleccionado]) {
        medicosData[medicoSeleccionadoId].ocupacion[diaSeleccionado] = [];
    }
    
    medicosData[medicoSeleccionadoId].ocupacion[diaSeleccionado].push(horaSeleccionada);

    // 2. Feedback visual tipo iOS Toast
    toastMensaje.classList.remove("hidden");
    toastMensaje.innerText = ` Turno confirmado con ${medicosData[medicoSeleccionadoId].nombre} el día ${diaSeleccionado} a las ${horaSeleccionada} hs.`;

    setTimeout(() => {
        toastMensaje.classList.add("hidden");
    }, 3500);

    // 3. Reseteamos el estado y refrescamos la pantalla
    horaSeleccionada = null;
    actualizarEstadoBoton();
    renderizarDias();
    renderizarHorarios();
});

// Carga Inicial
renderizarDias();
renderizarHorarios();