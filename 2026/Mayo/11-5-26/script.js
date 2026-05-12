const RickManager = {

    favorites: JSON.parse(localStorage.getItem("rickFavs")) || [],

    init() {
        this.btn = document.getElementById("btn-fetch");
        this.input = document.getElementById("char-id");
        this.display = document.getElementById("char-result");
        this.favList = document.getElementById("favs-list");
        this.btnClear = document.getElementById("btn-clear-favs");


        if (!this.btn) return;

        this.btn.addEventListener("click", () => {this.getCharacter()})
        this.btnClear.addEventListener("click", () => this.clearFavorites())

        this.renderFavorites()
    }, 

    async getCharacter() {
        const id = this.input.value;


        // Validación simmple

    if (!id || id < 1 || id > 826) {
        alert("Por favor, ingresá un ID entre 1 y 826");
        return;
    }

    this.display.innerHTML = `
        <div class="loader">⌚ Abriendo Portal...</div>
    `;

    try {
        // "Fetch" va a buscar los datos a la nube
        console.log("Intentando conectar con la API para el ID:", id);
        
        const response = await fetch(`https://rickandmortyapi.com/api/character/${id}`)

        console.log("Respuesta del servidor (status):", response.status);
        
        if (!response.ok) throw new Error("Portal cerrado");

        const data = await response.json();
        console.log("Datos recibidos con exito:", data);
        
        this.render(data);
    } catch (error) {

        console.log("ERROR DETECTADO", error.message);
        console.log("Detalles del error:", error);
        
        

        this.display.innerHTML = `<p style="color: #ef4444;">Error: No pudimos conectar con el multiverso.</p>`
    }
    },

    render(data) {
        // Usamos una clase nueva para el estilo

        const status = data.status.toLowerCase();

        let statusIcon = "";

        if (status === "alive"){
            statusIcon = "💚 Vivo";
        } else if (status === "dead") {
            statusIcon = '💔 Desconocido/Muerto'
        } else {
            statusIcon = "🤍 Desconocido"
        }

        this.display.innerHTML =`
        
        <div class="char-card-api">
        <img src="${data.image}" alt="${data.name}">
        <h3>${data.name}</h3>
        <p><strong>Especie:</strong> ${data.species}</p>
        // <p><strong>Estado:</strong> ${statusIcon }</p>
        // <p><strong>Origen:</strong> ${data.origin.name}</p>

        <button onclick="RickManager.saveFarvorites('${data.name}', '${data.image}')" class="btn-primary" style="margin-top:10px; padding:10px; cursor: pointer;"></button>⭐Guardar en Favoritos</button>
        </div>

        `;
    },

    saveFarvorites(name, image) {
        // Evitamos duplicados
        if (this.favorites.some(fav => fav.name === name)) return;

        this.favorites.push({name, image});
        localStorage.setItem("rickFavs", JSON.stringify(this.favorites));
        this.renderFavorites();
    },

    renderFavorites() {
        this.favList.innerHTML = this.favorites.map(fav => `
        
        <div class="fav-item">
        <img src="${fav.image}" title="${fav.name}">
        <p>${fav.name}</p>
        </div>
        
        `). join('');
    },

    clearFavorites() {
        this.favorites =[];
        localStorage.removeItem('rickFavs');
        this.renderFavorites();
    }
}


document.addEventListener("DOMContentLoaded", () => {
    RickManager.init()
})