/**
 * FINANCEFLOW - LÓGICA DEL PROYECTO
 */

// 1. Clase Modelo
class Gasto {
    constructor(id, desc, monto, categoria){
        this.id = id;
        this.desc = desc;
        this.monto = parseFloat(monto);
        this.categoria = categoria;
        this.fecha = new Date().toLocaleDateString();
    }
}

// 2. Sistema De Gestión
const App = {
    gastos: JSON.parse(localStorage.getItem("gastos_db")) || [],

    init() {
        this.cacheDOM();
        this.bindEvents();
        this.render();
    },

    cacheDOM() {
        this.form = document.getElementById("finance-form");
        this.list = document.getElementById("transaction-list");
        this.balance = document.getElementById("total-balance");
        this.filter = document.getElementById("filter-category")
    },

    bindEvents() {
        this.form.addEventListener("submit", (e) => {
            e.preventDefault();
            this.agregarGasto();
        });

        this.filter.addEventListener("change", () => this.render());
    },

    agregarGasto() {
        const desc = document.getElementById("desc").value;
        const monto = document.getElementById("amount").value;
        const cat = document.getElementById("category").value;

        const nuevoGasto = new Gasto(Date.now(), desc, monto, cat);
        
        this.gastos.push(nuevoGasto);
        this.syncStorage();
        this.form.reset();
        this.render();

        // Uso de libreria externa

        Swal.fire({
            title: "¡Gasto Guardado!",
            icon: "succes",
            toast: true,
            position: "top-end",
            timer: 2000,
            showConfirmButton: false
        });
    },

    borrarGasto(id) {
        this.gastos = this.gastos.filter(g => g.id !== id);
        this.syncStorage();
        this.render();
    },

    calcularTotal(lista) {
        // Usamo REDUCE para sumar montos
        const total = lista.reduce((acc, g) => acc + g.monto, 0);
        this.balance.innerText = `$${total.toLocaleString()}`;
    },

    syncStorage() {
        localStorage.setItem("gastos_db", JSON.stringify(this.gastos));
        // localStorage.setItem("prueba", "hola");
        // console.log(localStorage.getItem("prueba"));
        
    },

    render() {
        const categoriaSeleccionada = this.filter.value;
        console.log("Filtrando por: ", categoriaSeleccionada);
        
        // Filtrado Dinámico
        const listaFiltrada = categoriaSeleccionada === "Todos"
        ? this.gastos
        : this.gastos.filter(g => g.categoria === categoriaSeleccionada);
        console.log(this.list);
        this.list.innerHTML = "";

        listaFiltrada.forEach(g => {
            const li = document.createElement("li");
            li.className = "item-gasto";
            li.innerHTML = `
            
            <div>
                <stron>${g.desc}</stron> <br>
                <small>${g.categoria} | ${g.fecha}</small>
            </div>
            <div>
                <span>$${g.monto.toLocaleString()}</span>
                <button class="delete-btn" onclick="App.borrarGasto(${g.id})">X</button>
            </div>
            `;
            this.list.appendChild(li);
        });

        this.calcularTotal(listaFiltrada);
    }
};
window.onload = () => {
    App.init();
    window.App = App;
}