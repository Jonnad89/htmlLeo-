// --- 1. CONFIGURACIÓN Y SELECTORES ---
const TOTAL_PLAZAS = 12;
const PLAZAS_STORAGE_KEY = 'parking_plazas';

const planoEstacionamiento = document.getElementById('plano-estacionamiento');
const plazasOcupadasSpan = document.getElementById('plazas-ocupadas');
const plazasDisponiblesSpan = document.getElementById('plazas-disponibles');
const totalPlazasSpan = document.getElementById('total-plazas');

// Estado inicial del estacionamiento
let plazas = [];

// --- 2. GESTIÓN DE DATOS ---

function inicializarPlazas() {
    // Intentar cargar desde localStorage
    const storedPlazas = localStorage.getItem(PLAZAS_STORAGE_KEY);
    
    if (storedPlazas) {
        plazas = JSON.parse(storedPlazas);
    } else {
        // Inicializar si no hay datos guardados
        for (let i = 1; i <= TOTAL_PLAZAS; i++) {
            plazas.push({
                id: i,
                ocupada: false,
                matricula: null,
                horaEntrada: null
            });
        }
    }
}

function guardarPlazas() {
    localStorage.setItem(PLAZAS_STORAGE_KEY, JSON.stringify(plazas));
}

// --- 3. LÓGICA DE INTERFAZ Y MANIPULACIÓN DEL DOM ---

function renderizarPlano() {
    planoEstacionamiento.innerHTML = ''; // Limpiar el plano
    let ocupadasCount = 0;

    plazas.forEach(plaza => {
        const plazaDiv = document.createElement('div');
        plazaDiv.classList.add('plaza');
        plazaDiv.classList.add(plaza.ocupada ? 'ocupada' : 'disponible');
        plazaDiv.textContent = `P-${plaza.id}`;
        plazaDiv.dataset.id = plaza.id;

        if (plaza.ocupada) {
            ocupadasCount++;
            // Mostrar info de la matrícula en la plaza
            const infoSpan = document.createElement('small');
            infoSpan.textContent = plaza.matricula;
            plazaDiv.appendChild(infoSpan);
        }

        plazaDiv.addEventListener('click', () => {
            manejarClickPlaza(plaza.id);
        });

        planoEstacionamiento.appendChild(plazaDiv);
    });

    // Actualizar estadísticas
    plazasOcupadasSpan.textContent = ocupadasCount;
    plazasDisponiblesSpan.textContent = TOTAL_PLAZAS - ocupadasCount;
    totalPlazasSpan.textContent = TOTAL_PLAZAS;
}

function manejarClickPlaza(id) {
    const plaza = plazas.find(p => p.id === id);

    if (!plaza) return;

    if (plaza.ocupada) {
        registrarSalida(plaza);
    } else {
        registrarEntrada(plaza);
    }

    guardarPlazas();
    renderizarPlano(); // Vuelve a dibujar el plano con el nuevo estado
}

// --- 4. REGISTRO DE ENTRADA Y SALIDA ---

function registrarEntrada(plaza) {
    let matricula = prompt("Ingrese la matrícula del vehículo:");

    if (matricula && matricula.trim() !== '') {
        plaza.ocupada = true;
        plaza.matricula = matricula.trim().toUpperCase();
        plaza.horaEntrada = new Date().getTime(); // Hora en milisegundos

        alert(`¡Plaza P-${plaza.id} ocupada! Matrícula: ${plaza.matricula}`);
    } else {
        alert("Matrícula inválida. La plaza sigue disponible.");
    }
}

function registrarSalida(plaza) {
    const horaSalida = new Date().getTime();
    const tiempoTotalMs = horaSalida - plaza.horaEntrada;
    
    // Calcular tiempo en horas, minutos y segundos
    const horas = Math.floor(tiempoTotalMs / (1000 * 60 * 60));
    const minutos = Math.floor((tiempoTotalMs % (1000 * 60 * 60)) / (1000 * 60));
    const segundos = Math.floor((tiempoTotalMs % (1000 * 60)) / 1000);

    const duracion = `${horas}h ${minutos}m ${segundos}s`;

    alert(`
        Salida de P-${plaza.id}
        Matrícula: ${plaza.matricula}
        Tiempo total: ${duracion}
    `);
    
    // Liberar la plaza
    plaza.ocupada = false;
    plaza.matricula = null;
    plaza.horaEntrada = null;
}


// --- 5. INICIO DE LA APLICACIÓN ---
document.addEventListener('DOMContentLoaded', () => {
    inicializarPlazas();
    renderizarPlano();
});