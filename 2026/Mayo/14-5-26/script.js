const PokeManager = {
    init() {
        this.input = document.getElementById("poke-input");
        this.btn = document.getElementById("btn-poke");
        this.screen = document.getElementById("poke-screen");


        // Creamos el objeto de audio (un sonido de "beep" electrónico)

        this.pokedexSound = new Audio("https://www.soundjay.com/buttons_c2026/sounds/button-11.mp3")

        if(this.btn) {
            this.btn.addEventListener("click", ()=> this.fetchPokemon());
        }

        // También buscamos al apretar "Enter"
        this.input.addEventListener("keypress", (e)=> {
            if(e.key === "Enter") this.fetchPokemon();
        });
    },

    async fetchPokemon() {
        const query = this.input.value.toLowerCase().trim();
        if(!query) return;

        this.screen.innerHTML = `<p class="loading-text">Buscando en la hierba alta...</p>`

        try {
            const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${query}`);
            if(!response.ok) throw new Error();

            const data = await response.json();


            //Generamos un numero entre 1 y 10
            // Si sale 1 (10% de probabilidad), es Shiny
            const isShiny = Math.floor(Math.random() * 10) + 1 === 1;

            this.render(data,isShiny);

            // Reproducimos el sonido al encontrarlo
            this.pokedexSound.play()
        } catch (error) {
            this.screen.innerHTML = `<p>Ese pokemon no existe o se escapó</p>`;
        }
    },

    render(data, isShiny) {
        // Mapeamos los tipos para crear los badges
        const typesHTML = data.types.map(t =>
            `<span class="type-badge ${t.type.name}">${data.name}</span>`
        ).join('');

        const sprite = isShiny ? data.sprites.front_shiny : data.sprites.front_default;

        // Si es shiny, añadimos una clase especial para el brilo

        const shinyClass = isShiny ? 'shiny-effect' : '';
        const shinyStar = isShiny ? '⭐¡Shiny!⭐' : '';

        this.screen.innerHTML = `
        
            <div class="poke-card-ui ${shinyClass}">
            
                <p style="color: #ffcc00; 
                font-weigth: bold;
                margin-bottom: 5px;
                ">${shinyStar}</p>
                <img src="${sprite}" alt="${data.name}">
                <h3 class="poke-name">#${data.id} ${data.name}</h3>
                <div class="poke-types">
                    ${typesHTML}
                </div>
                <div class="stats-mini">
                    <span>ATK: ${data.stats[1].base_stat}</span> | <span>DEF: ${data.stats[2].base_stat}</span>
                </div>
                <p style="margin-top: 10px">Peso: ${data.weight / 10} kg</p>

            </div>
        
        `;
    }
};

// Actualiamos el arranque

document.addEventListener("DOMContentLoaded", () => {{
    PokeManager.init()
}})