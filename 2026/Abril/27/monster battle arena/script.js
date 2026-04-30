// 1. LA CLASE: El molde para cada monstruo

class Monstruo {
    constructor(nombre, tipo) {
        this.id = Date.now();
        this.nombre = nombre;
        this.tipo = tipo;
        this.vida = tipo === "Agua" ? 150 : 100; // El de agua tiene más vida
        this.ataque = tipo === "Fuego" ? 25 : 25; // El fuego pega más
    }

    // 2. Método: La acción de recibir daño
    recibirDaño(cantidad) {
        this.vida -= cantidad;
        if (this.vida < 0) this.vida = 0;
        console.log(`${this.nombre} recibi{o ${cantidad} de daño. Vida restante: ${this.vida}`);
    }

    // 3. Método: La acción de curarse
    curar() {
        this.vida += 20;
        alert(`${this.nombre} se ha curado 20 HP`)
    }
}

const Arena = {
    luchadores: [],
    
    crearLuchador() {
        const nombre = document.getElementById("m-name").value;
        const tipo = document.getElementById("m-type").value;
        console.log("Botón presionado");

        if (!nombre) return alert("Ponele un nombre al bicho");

        // INSTANCIAmMOS la clase
        const nuevoMonstruo = new Monstruo(nombre,tipo);

        this.luchadores.push(nuevoMonstruo);
        this.render()
    },

    atacar(idObjetivo) {
        // Bucamos al que recibe el golpe
        const objetivo = this.luchadores.find(m => m.id === idObjetivo);
        if (objetivo) {
            objetivo.recibirDaño(20); // daño fijo por ahora
            this.render();
        }
    },

    render() {
        const container = document.getElementById("monster-list");
        container.innerHTML = "";

        this.luchadores.forEach(m => {
            const card = document.createElement("div");
            card.className =`monster-card ${m.tipo}`;
            card.innerHTML = `
                <h4>${m.nombre} <small>(${m.tipo})</small> </h4>
                <div class="hp-bar">HP: ${m.vida}</div>
                <div class="stats">Ataque: ${m.ataque} </div>
                <div class="actions">
                    <button onclick="Arena.atacar(${m.id})">Atacar</button>
                    <button onclick="Arena.curarLuchador(${m.id})">Curar</button>
                </div>
            `;
            container.appendChild(card)

        });
    },
};

window.Arena = Arena;