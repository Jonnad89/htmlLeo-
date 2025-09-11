// Creamos objeto gestor de tareas

const gestorTareas = {
    tareas : [],
    agregarTarea(descripcion) {
        const nuevaTarea = {
            id : this.tareas.length +1,
            descripcion,
            completada : false
        };
        this.tareas.push(nuevaTarea);
        console.log(`Tarea agregada: "${descripcion}"`);
    },

    listarTareas() {
        console.log("Lista de tareas:");
        this.tareas.forEach(t => {
            console.log(`${t.id}. ${t.descripcion} - ${t.completada ? "✔" : "✖"}`);
        });
    },
    completarTarea(id) {
        const tarea = this.tareas.find(t => t.id === id);
        if(tarea) {
            tarea.completada = true;
            console.log(`Tarea "${tarea.descripcion}" completada ✔ `);
        } else {
            console.log("Tarea no encontrada ✖");
        }
    },

    eliminarTarea(id) {
        this.tareas = this.tareas.filter(t => t.id !== id);
        console.log(`Tarea con id ${id} eliminada`);
    }
};

// uso 
gestorTareas.agregarTarea("Estudiar objetos en JS")
gestorTareas.agregarTarea("Practicar bucles")
gestorTareas.agregarTarea("Hacer el mni-proyecto")

gestorTareas.listarTareas()

gestorTareas.completarTarea(2)
gestorTareas.listarTareas()

gestorTareas.eliminarTarea(1)
gestorTareas.listarTareas()