// 1. Clase Padre (Base) Vehículo --
class Vehiculo {
    constructor(patente, marca) {
        this.patente = patente.toUpperCase();
        this.marca = marca;
        this.kilometraje = 0;
        this.combustible = 50; // Inicial con 50 Litros
        this.rendimientoKmPorLitro = 0; // Se definirá en las clases hijas
    }

    // Método común 1: El padre gestiona el movimiento
    recorrerDistancia(km) {
        if(this.rendimientoKmPorLitro <= 0) {
            console.error("Rendimiento no definido.")
            return false;
        }

        const litrosNecesarios = km / this.rendimientoKmPorLitro;

        if(this.combustible >= litrosNecesarios) {
            this.kilometraje += km;
            this.combustible -= litrosNecesarios;
            console.log(`${this.patente} recorrió ${km} km. Combustible restante: ${this.combustible.toFixed(2)}`);
            return true;
        } else {
            alert(`⛽${this.patente} necesita repostar. Solo quedan ${this.combustible.toFixed(2)}`)
            return false;
        }
    }

    // Método común 2: Respostar
    repostar(litros){
        this.combustible += litros;
    }
}

// --- 2. Clases Hijas (herencia)---

// CLASE HIJA 1: COCHE
class Coche extends Vehiculo {
    constructor(patente, marca) {
        // Llama al constructor del padre (Vehiculo) para manejar patente y marca
        super(patente, marca);
        this.tipo = 'Coche';
        // Propiedad específica: Consumo eficiente
        this.rendimientoKmPorLitro = 10;
    }

    // El metodo recorrerDistancia es HEREDADO y funciona igual
}

// Clase hija 2: Camion

class Camion extends Vehiculo {
    constructor(patente, marca, capacidadCarga) {
        super(patente, marca);
        this.tipo = 'Camion';
        // Propiedad específica del camión
        this.capacidadCarga = capacidadCarga;
        this.cargaActual = 0;
        // COnsumo menos eficiente
        this.rendimientoKmPorLitro = 5;
    }

    // Método específico: solo lo tiene el camión
    cargar(toneladas) {
        if(this.cargaActual + toneladas <= this.capacidadCarga){
            this.cargaActual += toneladas;
            console.log(`Cargadas ${toneladas}T. Carga actual: ${this.cargaActual}T`);
            //Lógica de sobreescritura (Polimorfismo simpe): Podríamos reducir el rendimiento acá
            this.rendimientoKmPorLitro = 5 - (this.cargaActual / this.capacidadCarga) *2; // reduce rendimiendo segun carga
            return true;
        } else {
            alert(`🚨 ERROR: Exceso de carga. Capacidad máxima: ${this.capacidadCarga}T.`)
            return false;
        }
    }

    // Opcional: Sobreescribir el método recorrerDistancia (polimorfismo)

    /*
    recorrerDistancia(km) {
    // Acá podríamos agregar lógica extra de seguridad, antes de llamar al padre
    console.log(`Verificando frenos antes de un recorrido largo...`)
    // Llamar al método del padre para ejecutar la lógica de movimiento y consumo
    return super.recorrerDistancia(km)
    }
    */
}

// --- 3. Estado global y selectores del DOM ---
let flota = []; // array que contendrá las intancias (Coche o Camion)

const patenteInput = document.getElementById('patente-input');
const marcaInput = document.getElementById('marca-input');
const tipoSelect = document.getElementById('tipo-select');
const capacidadInput = document.getElementById('capacidad-input');
const listaFlotaDiv = document.getElementById('lista-flota');
const agregarBtn = document.getElementById('agregar-btn');

// --- 4. Funciones de lógica y renderizado ---

function renderizarFlota () {
    listaFlotaDiv.innerHTML = '';

    flota.forEach(vehiculo => {
        const tarjeta = document.createElement('div');
        tarjeta.classList.add('tarjeta-vehiculo', `tipo-${vehiculo.tipo}`);

        const isCamion = vehiculo.tipo === 'Camion';

        // Determinar alerta de combustible

        const alertaCombustible = vehiculo.combustible < 10 ? 'alerta-combustible' : '';

        tarjeta.innerHTML = `
            <h3>${vehiculo.marca} (${vehiculo.tipo}) </h3>
            <p><strong>Patente:</strong> ${vehiculo.patente} </p>
            <p><strong>Kilometraje:</strong> ${vehiculo.kilometraje} </p>
            <p><strong>Combustible:</strong><span class="${alertaCombustible}">${vehiculo.combustible.toFixed(2)} L</span></p>
            <p><strong>Rendimiento:</strong> ${vehiculo.rendimientoKmPorLitro.toFixed(1)} km/L</p>

            ${isCamion ? 

                `<p><strong>Carga:</strong> ${vehiculo.cargaActual} / ${vehiculo.capacidadCarga} T</p>` : ''
            }
        <hr>

            <div class="accion-recorrer">
        <input type="number" id="km-${vehiculo.patente}" placeholder="KM">
        <button data-patente="${vehiculo.patente}" data-action="RECORRER">Recorrer</button>

            </div>

       ${isCamion ? 
        `
         <div class="accion-carga">
        <input type="number" id="carga-${vehiculo.patente}" placeholder="Ton">
        <button data-patente="${vehiculo.patente}" data-action="CARGAR">Cargar</button>
        </div>`
        : ''
       }
       <div class="accion-recorrer">
        <input type="number" id="litros-${vehiculo.patente}" placeholder="Litros">
        <button data-patente="${vehiculo.patente}" data-action="REPOSTAR">Repostar</button>
       </div>

        `;

        listaFlotaDiv.appendChild(tarjeta)
    });

    asignarListersAcciones();
}

function agregarVehiculo() {
    const patente = patenteInput.value.trim();
    const marca = marcaInput.value.trim();
    const tipo = tipoSelect.value;
    const capacidad = parseFloat(capacidadInput.value);

    if(!patente || !marca) {
        alert("Patente y Marca son obligatorias");
        return;
    }

    // Intanciación dinámica
    let nuevoVehiculo;
    if(tipo === "Coche") {
        nuevoVehiculo = new Coche(patente,marca);
    } else if (tipo === "Camion") {
        // El camión requiere la propiedad extra de capacidad de carga
        if(isNaN(capacidad) || capacidad <= 0) {
            alert("El camión necesita una Capacidad de Carga válida");
            return;
        }
        nuevoVehiculo = new Camion(patente,marca, capacidad);
    }

    flota.push(nuevoVehiculo)

    // Limpiar inputs 
    patenteInput.value = '';
    marcaInput.value = '';
    capacidadInput.value = 0;

    renderizarFlota();
}

function asignarListersAcciones() {
    document.querySelectorAll('.accion-reccorer button .accion-carga button').forEach(btn =>{
        btn.onclick = (e) => {
            const patente = e.target.dataset.patente;
            const action = e.target.dataset.action;
            const vehiculo = flota.find(v => v.patente === patente);

            if(!vehiculo) return;

            if (action === "RECORRER") {
                const kmInput = document.getElementById(`km-${patente}`);
                const km = parseFloat(kmInput.value);
                if(km > 0) vehiculo.recorrerDistancia(km);
                kmInput.value = '';
            
            } else if (action === 'CARGAR') {
                const cargarInput = document.getElementById(`carga-${patente}`);
                const toneladas = parseFloat(cargarInput.value);
                if (toneladas > 0 && vehiculo.tipo === "Camion") vehiculo.cargar(toneladas);
                cargarInput.value = '';

            } else if ( action === "REPOSTAR") {
                const listrosInput = document.getElementById(`litros-${patente}`);
                const litros = parseFloat(listrosInput.value);
                if(litros > 0) vehiculo.repostar(litros);
                listrosInput.value = '';
            }

            renderizarFlota(); // Redibujar después de la acción
        };
    });
}


// --- 5. Inicialización

document.addEventListener('DOMContentLoaded', ()=>{
    agregarBtn.addEventListener('click', agregarVehiculo);

    // agregar vehículos iniciales para empezar a jugar
    flota.push(new Coche("ABC123", "Toyota"));
    flota.push(new Camion("XYZ789", "Volvo", 20));

    renderizarFlota()
});
