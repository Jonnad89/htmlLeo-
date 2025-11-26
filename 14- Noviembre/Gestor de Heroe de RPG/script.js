// 1. CLASE PRINCIPAL: HEROE --
class Heroe{
    constructor(nombre, clase){
        this.nombre = nombre;
        this.clase = clase
        // Propiedades base definidas por la clase
        this.vidaMaxima = this.getStatsBase(clase).vida;
        this.vida = this.vidaMaxima;
        this.ataque = this.getStatsBase(clase).ataque;
        this.estado = 'ACTIVO'; // Nuevo estado
    }

    // Método para definar estadísticas iniales según la clase
    getStatsBase(clase){
        switch (clase) {
            case 'Guerrero':
                return {vida: 150, ataque:15}; // Tanque
            case 'Mago':
                return {vida: 80, ataque: 30}; // DPS alto
            case 'Arquero':
                return {vida: 100, ataque: 20}; // balanceado
            default: 
            return {vida: 100, ataque: 10};
        }
    }

    //Método clave: Recibir daño
    recibirDanio(cantidad) {
        if (this.estado === 'DERROTADO') {
            console.log(`${this.nombre} ya está derrotado`)
            return; // No recibe más daño
        }
        this.vida -= cantidad;

        if(this.vida <= 0) {
            this.vida = 0;
            this.estado = "DERROTADO";
            console.log(`¡${this.nombre} ha sido DERROTADO`)
        }
    }
}

// --- 2. ESTADO GLOBAL Y SELECTORES DEL DOM ---
let equipo = []; // Array que contendrá las INSTANCIAS de Héroe

const nombreInput = document.getElementById('nombre-input');
const claseSelect = document.getElementById('clase-select');
const reclutarBtn = document.getElementById('reclutar-btn');
const atacarEquipoBtn = document.getElementById('atacar-equipo-btn');
const listaEquipoDiv = document.getElementById('lista-equipo');
const totalHeroesSpan = document.getElementById('total-heroes')

// --- 3. FUNCIONES DE LÓGICA
function renderizarEquipo() {
    listaEquipoDiv.innerHTML = '';
    totalHeroesSpan.textContent = equipo.length;

    equipo.forEach(heroe => {
        const vidaPorcentaje = (heroe.vida / heroe.vidaMaxima) * 100;

        let claseCSS = '';
        if (heroe.vida <= 20 && heroe.vida > 0) {
            claseCSS = 'critico';
        } else if (heroe.estado === 'DERROTADO') {
            claseCSS = 'derrotado';
        }

        const tarjeta = document.createElement('div');
        tarjeta.classList.add('tarjeta-heroe');

        if (claseCSS !== '') {
            tarjeta.classList.add(claseCSS)
        }

        tarjeta.innerHTML = `
            <h3> ${heroe.nombre} (${heroe.clase}) </h3>
            <p>Ataque: ${heroe.ataque} </p>
            <p>Vida: ${heroe.vida} / ${heroe.vidaMaxima} </p>

            <div class='vida-bar' style='width: ${vidaPorcentaje}% 
                background-color: ${heroe.vida <= 40 && heroe.vida > 0 ? "#e67e22" : "2ecc71"};'>
            </div>

            <p class="estado-display">Estado:
                <span style="color: ${claseCSS === 'derrotado' ? "red" : "green"}">
                    ${heroe.estado}
                </span>
            </p>
        `;
        listaEquipoDiv.appendChild(tarjeta)
    });
}

function reclutarHeroe() {
    const nombre = nombreInput.value.trim();
    const clase = claseSelect.value;

    if (nombre === '') {
        alert("El héroe necesita un nombre.");
        return;
    }

    // PASO CLAVE: Crear una INSTANCIA de la clase Heroe
    const nuevoHeroe = new Heroe(nombre, clase);

    // Agregar la instancia al array global
    equipo.push(nuevoHeroe);
    nombreInput.value = '';
    renderizarEquipo();
}

function simularAtaqueGeneral() {
    const danioBase = 15;

    // Recorrer el array de instancias y llamar al método de CADA instancia
    equipo.forEach(heroe => {
        // La instancia sabe cómo manjarse a sí misma (encapsulamiento)
        heroe.recibirDanio(danioBase);
    });

    renderizarEquipo();
}

// --- 4. INICIALIZACIÓN
document.addEventListener('DOMContentLoaded', () => {
    //Asignar listeners
    reclutarBtn.addEventListener('click', reclutarHeroe);
    atacarEquipoBtn.addEventListener('click', simularAtaqueGeneral);

    // renderizado inicial (equipo vacío)
    renderizarEquipo();
})