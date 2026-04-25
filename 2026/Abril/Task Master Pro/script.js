let inputTarea,
  selectPrioridad,
  listaUL,
  contadorTotal,
  contadorPendientes,
  botonAgregar;

const App = {
  tareas: JSON.parse(localStorage.getItem("tasks_data")) || [],
  filtroActual: "todas",

  init() {
    console.log("Iniciando App...");

    inputTarea = document.getElementById("task-name");
    selectPrioridad = document.getElementById("task-priority");
    listaUL = document.getElementById("task-list");
    contadorTotal = document.getElementById("count");
    contadorPendientes = document.getElementById("pending");
    botonAgregar = document.getElementById("add-btn");

    if (!inputTarea || !botonAgregar || !listaUL) {
      console.error("No encontré los elementos necesarios en el HTML");
      return;
    }

    this.binEvents();
    this.render();
  },

  binEvents() {
    botonAgregar.onclick = () => {
      this.agregarTarea();
    };
    inputTarea.onkeypress = (e) => {
      if (e.key === "Enter") {
        this.agregarTarea();
      }
    };
  },

  agregarTarea() {
    const nombre = inputTarea.value.trim();
    if (nombre === "") {
      alert("Escribí algo por favor...");
      return;
    }
    const nuevaTarea = {
      id: Date.now(),
      nombre: nombre,
      prioridad: selectPrioridad.value, // CORREGIDO: faltaba .value
      completada: false,
    };

    this.tareas.push(nuevaTarea);
    this.guardarYRenderizar();
    inputTarea.value = "";
    inputTarea.focus();
  },

 toggleTarea(id) {
    // Cambiamos el estado de la tarea en el array
    this.tareas = this.tareas.map(t => {
        if (t.id === id) {
            t.completada = !t.completada;
        }
        return t
    });
    // Guardamos y volvemos a dibujar para que se vea tachada
    this.guardarYRenderizar();
},

 limpiarCompletadas() {
    // Filtramos: nos quedamos solo con las que NO están completadas
    this.tareas = this.tareas.filter(t => !t.completada);
    
    // ESTO ES CLAVE! Hay que guardar el nuevo array y redibujar la lista
    this.guardarYRenderizar(); 
},

  filtrar(tipo) {
    this.filtroActual = tipo;
    this.render();
  },

  limpiarCompletadas() {
    this.tareas = this.tareas.filter((t) => !t.completada);
    this.guardarYRenderizar(); // ¡Importante usar esta para que se vea el cambio!
  },

  guardarYRenderizar() {
    localStorage.setItem("tasks_data", JSON.stringify(this.tareas));
    this.render();
  },

  render() {
    listaUL.innerHTML = "";

    let tareasMostrar = this.tareas;
    if (this.filtroActual === "alta") {
      tareasMostrar = this.tareas.filter((t) => t.prioridad === "alta");
    }

    tareasMostrar.forEach((t) => {
      const li = document.createElement("li");
      // CORREGIDO: La clase debe depender de la prioridad y de si está hecha
      li.className = `task-item ${t.prioridad} ${t.completada ? "done" : ""}`;

      li.innerHTML = `
            <span onclick="App.toggleTarea(${t.id})">${t.nombre}</span>
            <button onclick="App.eliminarTarea(${t.id})">🗑️</button>
        `;
      listaUL.appendChild(li); // CORREGIDO: nombres de funciones sin la "S" al final
      listaUL.appendChild(li);
    });

   if(contadorTotal) contadorTotal.innerText = this.tareas.length;
    if(contadorPendientes) {
        contadorPendientes.innerText = this.tareas.filter(t => !t.completada).length;
    }
  },
};

window.onload = () => {
  window.App = App;
  App.init();
};
