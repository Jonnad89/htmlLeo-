// ==========================================
// 1. CLASE MODELO: Tarea (Representa un objeto individual)
// ==========================================
class Tarea {
    // Encapsulamiento con propiedades privadas (ES2022+)
    #id;
    #titulo;
    #prioridad;
    #completada;

    constructor(titulo, prioridad = "media", completada = false, id = null) {
        this.#id = id || Date.now().toString().slice(-5);
        this.#titulo = titulo;
        this.#prioridad = prioridad;
        this.#completada = completada;
    }

    // Getters para acceder a los datos privados de forma segura
    get id() { return this.#id; }
    get titulo() { return this.#titulo; }
    get prioridad() { return this.#prioridad; }
    get completada() { return this.#completada; }

    // Método para cambiar estado
    toggleEstado() {
        this.#completada = !this.#completada;
    }

    // Convierte el objeto a un formato plano para guardar en LocalStorage
    toJSON() {
        return {
            id: this.#id,
            titulo: this.#titulo,
            prioridad: this.#prioridad,
            completada: this.#completada
        };
    }
}


// ==========================================
// 2. CLASE CONTROLADOR: GestorTareas (Maneja la lista y la interfaz)
// ==========================================
class GestorTareas {
    constructor() {
        this.tareas = [];
        this.cargarLocalStorage();
        this.capturarElementosDOM();
        this.inicializarEventos();
        this.actualizarUI();
    }

    // Capturamos el DOM dentro de la clase
    capturarElementosDOM() {
        this.form = document.getElementById("form-tarea");
        this.inputTitulo = document.getElementById("input-titulo");
        this.selectPrioridad = document.getElementById("select-prioridad");
        this.listaUI = document.getElementById("lista-tareas");

        // Elementos de Estadísticas
        this.statTotales = document.getElementById("stat-totales");
        this.statCompletadas = document.getElementById("stat-completadas");
        this.statPendientes = document.getElementById("stat-pendientes");
    }

    // Asignación de listeners
    inicializarEventos() {
        this.form.addEventListener("submit", (e) => {
            e.preventDefault();
            this.agregarTarea();
        });

        // Event Delegation para los botones de la lista
        this.listaUI.addEventListener("click", (e) => {
            const btn = e.target;
            const id = btn.dataset.id;

            if (!id) return;

            if (btn.classList.contains("btn-check")) {
                this.completarTarea(id);
            } else if (btn.classList.contains("btn-delete")) {
                this.eliminarTarea(id);
            }
        });
    }

    // --- MÉTODOS DE LÓGICA Y NEGOCIO ---

    agregarTarea() {
        const titulo = this.inputTitulo.value.trim();
        const prioridad = this.selectPrioridad.value;

        if (titulo === "") return;

        // Instanciamos un nuevo objeto Tarea
        const nuevaTarea = new Tarea(titulo, prioridad);
        this.tareas.push(nuevaTarea);

        this.guardarLocalStorage();
        this.actualizarUI();
        this.form.reset();
    }

    completarTarea(id) {
        const tarea = this.tareas.find(t => t.id === id);
        if (tarea) {
            tarea.toggleEstado();
            this.guardarLocalStorage();
            this.actualizarUI();
        }
    }

    eliminarTarea(id) {
        // Uso de método filter de Arrays
        this.tareas = this.tareas.filter(t => t.id !== id);
        this.guardarLocalStorage();
        this.actualizarUI();
    }

    // --- MANEJO DE INTERFAZ Y ESTADÍSTICAS ---

    actualizarUI() {
        this.renderizarLista();
        this.actualizarEstadisticas();
    }

    renderizarLista() {
        this.listaUI.innerHTML = "";

        if (this.tareas.length === 0) {
            this.listaUI.innerHTML = `<li style="text-align:center; color:#64748b; padding:20px;">No hay tareas registradas.</li>`;
            return;
        }

        this.tareas.forEach(tarea => {
            const li = document.createElement("li");
            li.className = `task-item ${tarea.prioridad} ${tarea.completada ? 'completada' : ''}`;

            li.innerHTML = `
                <span class="text">[${tarea.prioridad.toUpperCase()}] ${tarea.titulo}</span>
                <div class="actions">
                    <button class="btn-check" data-id="${tarea.id}">✓</button>
                    <button class="btn-delete" data-id="${tarea.id}">🗑</button>
                </div>
            `;

            this.listaUI.appendChild(li);
        });
    }

    actualizarEstadisticas() {
        const totales = this.tareas.length;
        // Uso de filter para contar rápidas
        const completadas = this.tareas.filter(t => t.completada).length;
        const pendientes = totales - completadas;

        this.statTotales.textContent = totales;
        this.statCompletadas.textContent = completadas;
        this.statPendientes.textContent = pendientes;
    }

    // --- PERSISTENCIA CON LOCALSTORAGE ---

    guardarLocalStorage() {
        // Convertimos las instancias de clase a objetos planos
        const datosPlanos = this.tareas.map(t => t.toJSON());
        localStorage.setItem("poo_tareas", JSON.stringify(datosPlanos));
    }

    cargarLocalStorage() {
        const datos = localStorage.getItem("poo_tareas");
        if (datos) {
            const arreglosObtenidos = JSON.parse(datos);
            // Re-instanciamos los objetos planos como instancias de la clase Tarea
            this.tareas = arreglosObtenidos.map(
                t => new Tarea(t.titulo, t.prioridad, t.completada, t.id)
            );
        }
    }
}

// ==========================================
// 3. INICIALIZACIÓN DE LA APLICACIÓN
// ==========================================
// Solo necesitamos instanciar la clase gestora
const app = new GestorTareas();