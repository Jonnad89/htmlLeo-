const ArenaRPGManager = {
    // Banco central de datos (Base de datos de personajes disponibles)
    bancoPersonajes: [
        {nombre: "Charizard", tipo: "Fuego", hp: 120, ataque: 35, defensa: 20 },
        {nombre: "Blastoise", tipo: "Agua", hp: 140, ataque: 28, defensa: 35 },
        {nombre: "Venasaur", tipo: "Planta", hp: 130, ataque: 30, defensa: 28 },
        {nombre: "Pikachu", tipo: "eléctrico", hp: 90, ataque: 40, defensa: 15 },
        {nombre: "Magmar", tipo: "Fuego", hp: 110, ataque: 33, defensa: 18 },
        {nombre: "Gyarados", tipo: "Agua", hp: 135, ataque: 36, defensa: 22 },
    ],

    // Estado actual de la partida
    playerTeam: [],
    enemyTeam: [],

    init() {
        // Mapeo de elementos DOM
        this.inputName = document.getElementById('rpg-name');
        this.selectType = document.getElementById("rpg-type");
        this.btnAdd = document.getElementById("btn-add-char");
        this.dbList = document.getElementById("db-list");
        this.dbCount = document.getElementById("db-count");
        this.playerSlots = document.getElementById("player-team");
        this.enemySlots = document.getElementById("enemy-team");
        this.bntGenerate = document.getElementById("btn-generate-teams");
        this.btnStart = document.getElementById("btn-start-battle");
        this.consoleBox = document.getElementById("battle-console");

        if(!this.btnAdd) return; // Validación de seguridad

        // Listeners
        this.btnAdd.addEventListener("click", () => this.agregarAlBanco());
        this.bntGenerate.addEventListener("click", () => this.generarEquipos());
        this.btnStart.addEventListener("click", () => this.simularBatalla());

        // Renderizado inicial del banco en memoria
        this.actualizarBancoUI();
    },

    // -- BUCLE 1: FOR...OF (para renderizar la base de datos completa)
    actualizarBancoUI() {
        this.dbList.innerHTML = "";
        this.dbCount.innerText = this.bancoPersonajes.length;

        for (let p of this.bancoPersonajes) {
            this.dbList.innerHTML += `
            <div class="db-item">
            <strong>${p.nombre}</strong> <span>(${p.tipo}) - HP: ${p.hp} - ATK: ${p.ataque}</span>
            </div>
            `;
        }
    },

    agregarAlBanco() {
        const name = this.inputName.value.trim();
        const type = this.selectType.value;

        if(!name) {
            alert("Introduce un nombre válido para el combatiente");
            return;
        }

        // Sistema dinámico de asignación de estadisticas aleatorias en base a su creación

        const nuevoChar = {
            nombre: name,
            tipo: type,
            hp: Math.floor(Math.random() *60) + 90, // 90 a 150
            ataque: Math.floor(Math.random() * 20) +25, // 25 a 45
            defensa: Math.floor(Math.random() * 20) +15 // 15 a 35
        };
        this.bancoPersonajes.push(nuevoChar);
        this.inputName.value = ""; // Limpiar input
        this.actualizarBancoUI();
    },

    // --- BUCLE 2: FOR CLÁSICO (para clonar y armar equipos de 3 integrantes) ---

    generarEquipos() {
        this.playerTeam = [];
        this.enemyTeam = [];

        if (this.bancoPersonajes.length < 3) {
            alert("Debes tener al menos 3 personajes en la base de datos.")
            return;
        }

        // Llenamos el equipo aliado y rival usando indices aleatorios sacados del bucle

        for (let i = 0; i < 3; i++) {
            const indexAliado = Math.floor(Math.random() *this.bancoPersonajes.length);
            const indexRival = Math.floor(Math.random() * this.bancoPersonajes.length);

            // Clonamos usando Spred Operator (...) para no romper la Base de Datos original
            this.playerTeam.push({ ...this.bancoPersonajes[indexAliado] });
            this.enemyTeam.push({ ...this.bancoPersonajes[indexRival] });
        }

        this.renderEquiposUI();
        this.btnStart.disabled = false;
        this.printConsole("Sistema", "Equipos balanceados y cargados. Listos para el combate")
    },

    renderEquiposUI() {
        this.playerSlots.innerHTML = "";
        this.enemySlots.innerHTML = "";

        //  Dibujar equipo jugador (Usamos un for clásico para trackear los slots indexados)
        for (let i = 0; i < this.playerTeam.length; i++) {
            const p = this.playerTeam[i];
            const estaMuerto = p.hp <= 0 ? 'dead' : '';
            this.playerSlots.innerHTML += `
            
            <div class="char-slot-card ${estaMuerto}" style="border-left-color: #22c55e">
            <strong>
            ${p.nombre}
            </strong>
            <br>
            HP: ${p.hp > 0 ? p.hp : 0} | ATK: ${p.ataque}
            </div>
            `;
        }
        // Dibujar Equipo Rival

        for(let i = 0; i < this.enemyTeam.length; i++) {
            const e = this.enemyTeam[i];
            const estaMuerto = e.hp <= 0 ? 'dead' : '';
            this.enemySlots.innerHTML = `
            
            <div class="char-slot-card ${estaMuerto}" style="border-left-color: #ef4444">
                <strong>${e.nombre}</strong><br> HP: ${e.hp > 0 ? e.hp : 0} | ATK: ${e.ataque}
            </div>
            `;
        }
    },

        
            // --- BUCLE 3: WHILE + BUCLES INTERNOSSS (El motor de la simulación automática) ---
            simularBatalla() {
                this.printConsole("Sistema", "--- INICIANDO CONTIENDA DE SIMULACIÓN ---");

                let rondas = 1; 
                let batallaActiva = true; 

                // El bucle principal correrá mientras ambos equipos tengas al menos un luchador
                while (batallaActiva && rondas <= 30) {
                    this.printConsole("Sistema", `⚡ RONDA ${rondas}`);

                    // Encontrar primer luchador vivo del jugador
                    let aliadoActivo = null;
                    for (let p of this.playerTeam) {
                        if(p.hp > 0) {aliadoActivo = p; break; }
                    }

                    // Encontrar primmer luchador vivo del rival
                    let rivalActivo = null;
                    for (let e of this.enemyTeam) {
                        if (e.hp > 0) {rivalActivo = e; break; }
                    }

                    // Si alguno ya no tiene combatientes sanos, se termina la simulación
                    if (!aliadoActivo || !rivalActivo) {
                        batallaActiva = false;
                        break;
                    }

                    // --- ACCIÓN DE ATAQUE 1: Aliado golpea a Enemigo ---
                    let danoAlRival = aliadoActivo.ataque - Math.floor(rivalActivo.defensa / 2);
                    if (danoAlRival <= 0) danoAlRival = 5; // Daño mínimo garantizado
                    rivalActivo.hp -= danoAlRival;
                    this.printConsole("Daño", `⚔ ${aliadoActivo.nombre} golpea a ${rivalActivo.nombre} por ${danoAlRival} de daño.`);

                    // Si el enemigo muere,, salteamos su contraataque de ronda
                    if (rivalActivo.hp <= 0) {
                        this.printConsole("Sistema", `💀 ${rivalActivo.nombre} del equipo rival ha quedado fuera de combate.`);
                    } else {
                        // --- ACCIÓN DE ATAQUE 2: Enemigo contraataca (Si sigue vivo) ---  
                        let danoAlAliado = rivalActivo.ataque - Math.floor(aliadoActivo.defensa / 2);
                        if (danoAlAliado <= 0) danoAlAliado = 5;
                        aliadoActivo.hp -= danoAlAliado;
                        this.printConsole("Daño", `💥 ${rivalActivo.nombre} responde a ${aliadoActivo.nombre} causando ${danoAlAliado} de daño.`);

                        if(aliadoActivo.hp <= 0) {
                            this.printConsole("Sistema", `💀 Tu ${aliadoActivo.nombre} ha caído.`);
                        }
                    }

                    rondas++;
                }

                // --- CONCLUSIÓN: BUCLE 4 'FOR...IN" (Muestra características finales del MVP superviviente) ---
                this.procesarGanador();
                this.renderEquiposUI();
                this.btnStart.disabled = true; // Bloquear hasta nueva generación
                       
            },

            procesarGanador() {
                let vivosAliados = 0;
                let vivoFinal = null;

                for (let p of this.playerTeam) {if (p.hp > 0) { vivosAliados++; vivoFinal = p; } }
                for (let e of this.enemyTeam) {if (e.hp > 0) {vivoFinal = e; } }

                if(vivosAliados > 0) {
                    this.printConsole("Sistema", "¡VICTORIA! Tu equipo ganó el encuentro en la arena.")
                } else if (vivoFinal) {
                    this.printConsole("Sistema", "¡DERROTA! El equipo enemoigo diezmó tus fuerzas.")
                } else {
                    this.printConsole("Sistema", "¡EMPATE! No quedan sobreviviente en pie.")
                    return;
                }

                 // BUCLE FOR...IN: Para imprimiren consola todos los atributos finalesdel últmo guerrero en pie.
                 this.printConsole("Sistema", `Análisis del sobreviviente final (${vivoFinal.nombre}):`);
                 for (let stat in vivoFinal) {
                    this.printConsole("Texto", `- ${stat.toUpperCase()}: ${vivoFinal[stat]}`);
                 }
            },

            printConsole(tipo, mensaje) {
                let clase = "console-txt";
                if (tipo === "Daño") clase += " damage";
                if (tipo === "Sistema") clase += " system";

                this.consoleBox.innerHTML += `<p class="${clase}">[Log]: ${mensaje}</p>`;
                this.consoleBox.scrollTop = this.consoleBox.scrollHeight; // Auto-scroll abajo
            }
        };

document.addEventListener('DOMContentLoaded', () => {
    // Acá van los otros inits()
    ArenaRPGManager.init();
});