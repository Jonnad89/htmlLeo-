// 1. La Clase para crear objetos consistentes
class Transaccion {
    constructor(desc, monto, tipo, categoria) {
        this.id = Date.now();
        this.desc = desc;
        this.monto = parseFloat(monto);
        this.tipo = tipo; // 'ingreso' o 'egreso'
        this.categoria = categoria;
        this.fecha = new Date().toLocaleDateString();
    }
}

const Wallet = {
    movimientos: JSON.parse(localStorage.getItem("wallet_db")) || [],
    filtroActual: 'todos',

    init() {
        this.cacheDOM();
        this.bindEvents();
        this.render();
    },

    cacheDOM() {
        this.btn = document.getElementById("add-btn");
        this.list = document.getElementById("transaction-list");
        this.balanceTotal = document.getElementById("total-balance");
        // Inputs
        this.inDesc = document.getElementById("desc");
        this.inAmount = document.getElementById("amount");
        this.inType = document.getElementById("type");
        this.inCat = document.getElementById("category");
    },

    bindEvents() {
        this.btn.onclick = () => this.agregarTransaccion();
    },

    agregarTransaccion() {
        const desc = this.inDesc.value;
        const monto = this.inAmount.value;

        if(!desc || !monto) return alert("Completá los datos");

        // INSTANCIAMOS la clase
        const nueva = new Transaccion(desc, monto, this.inType.value, this.inCat.value);
        
        this.movimientos.push(nueva);
        this.actualizar();
        this.limpiarFormulario();
    },

    // El corazón de la lógica: Calcular el total
    calcularBalance() {
        // Reducimos el array a un solo número
        // return this.movimientos.reduce((total, m) => {
        //     return m.tipo === 'ingreso' ? total + m.monto : total - m.monto;
        // }, 0);
        const resultado = this.movimientos.reduce((total, m) => {
            const valor = parseFloat(m.monto) || 0;

            if(m.tipo === 'ingreso') {
                return total + valor;
            } else  {
                return total - valor
            }
        }, 0)
        return resultado
    },

    actualizar() {
        localStorage.setItem("wallet_db", JSON.stringify(this.movimientos));
        this.render();
    },

    render() {
        this.list.innerHTML = "";
        
        // Filtro dinámico
        const filtrados = this.movimientos.filter(m => 
            this.filtroActual === 'todos' ? true : m.tipo === this.filtroActual
        );

        filtrados.forEach(m => {
            const li = document.createElement("li");
            li.className = `item ${m.tipo}`;
            li.innerHTML = `
                <div class="info">
                    <strong>${m.desc}</strong>
                    <small>${m.categoria} - ${m.fecha}</small>
                </div>
                <div class="monto">
                    ${m.tipo === 'ingreso' ? '+' : '-'}$${m.monto}
                    <button onclick="Wallet.eliminar(${m.id})">x</button>
                </div>
            `;
            this.list.appendChild(li);
        });

        // Actualizar el balance visual
        const saldo = this.calcularBalance();
        this.balanceTotal.innerText = `$${saldo.toFixed(2)}`;
        this.balanceTotal.style.color = saldo >= 0 ? "#22c55e" : "#ef4444";
    },

    filtrar(tipo) {
        this.filtroActual = tipo;
        this.render();
    },

    eliminar(id) {
        this.movimientos = this.movimientos.filter(m => m.id !== id);
        this.actualizar();
    },

    limpiarFormulario() {
        this.inDesc.value = "";
        this.inAmount.value = "";
    }
};

window.Wallet = Wallet;
Wallet.init();