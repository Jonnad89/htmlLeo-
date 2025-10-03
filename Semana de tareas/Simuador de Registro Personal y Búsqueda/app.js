// Definimos las clases

// Clase empleado: Modela los datos de una persona
// Contiene el constructor para crear nuevas instancias

class Empleado {
    constructor(nombre, apellido, puesto, salario) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.puesto = puesto;
        this.salario = parseFloat(salario) // Aseguramos que sea un número
        this.id = Date.now(); // Id simple basado en la marca de tiempo
    }

    //Método de la clase para obtener el nombre completo
    getNombreCompleto(){
        return `${this.nombre} ${this.apellido}`;
    }

    // Método para formatear el salario como moneda
    getSalarioFormateado() {
        return `$${this.salario.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ",")}`
    }
}

/*
Clase SistemaRH: Gestiona la colección de empleados, la persistencia y el filtrado
*/

class SistemaRH {
    constructor() {
        this.personal = this._cargarPersonal() || [];
    }

    // Método privado (convención con _) para cargar datos desde localStorage
    _cargarPersonal() {
        const storedData = localStorage.getItem("rh_personal");
        if(storedData) {
            const data = JSON.parse(storedData)
            // Mapear los objetos planos de localStorage
            return data.map(e => new Empleado(e.nombre, e.apellido, e.salario))
        }
        return null
    }

    _guardarPersonal() {
        localStorage.setItem("rh_personal", JSON.stringify(this.personal))
    }

    agregarEmpleado(datos) {
        // Crear una nueva instancia de la clase Empleado
        const nuevoEmpleado = new Empleado(datos.nombre, datos.apellido, datos.puesto, datos.salario);

        this.personal.push(nuevoEmpleado);
        this._guardarPersonal();
        return nuevoEmpleado;
    }

    filtrarPersonal(termino) {
        const terminoLower = termino.toLowerCase();

        // uso de Array.prototype.filter() para buscar las coincidencias
        return this.personal.filter(empleado => {
            const nombreCompleto = empleado.getNombreCompleto().toLowerCase();
            return nombreCompleto.includes(terminoLower) || empleado.puesto.toLowerCase().includes(terminoLower)
        });
    }
}

// Instanciación y selectores del DOM

const sistemaRH = new SistemaRH();

const formRegistro = document.getElementById("formulario-registro");
const inputBusqueda = document.getElementById("input-busqueda");
const listaPersonalDiv = document.getElementById("lista-personal");
const contadorEmpleados = document.getElementById("contador-empleados")

// Funciones de renderizado 

function renderizarLista(personalAMostrar = sistemaRH.personal) {
    listaPersonalDiv.innerHTML = ''; // Limpiar lista

    if(personalAMostrar.length === 0) {
        listaPersonalDiv.innerHTML = `<p style="text-aling: center; grid-column: 1 / 1;"> No hay empleados registrados o no se encontraron resultados.</p>`
        return;
    }

    personalAMostrar.forEach(empleado => {
        const tarjeta = document.createElement("div");
        tarjeta.classList.add("tarjeta-empleado");

        tarjeta.innerHTML = `
            <h3> ${empleado.getNombreCompleto()} </h3>
            <p> <span> ${empleado.puesto} </span> </p>
            <p> Salario: <span> ${empleado.getSalarioFormateado()} </span> </p>
            <p> ID: <small> ${empleado.id} </small> </p>
        `;

        listaPersonalDiv.appendChild(tarjeta)
    });

    // Actualizamos el contador 
    contadorEmpleados.textContent = `Total de Empleados: ${sistemaRH.personal.length}`
}


// Manejo de eventos

formRegistro.addEventListener("submit", (e) => {
    e.preventDefault(); 

    const datos = {
        nombre: document.getElementById("nombre").value.trim(),
        apellido: document.getElementById("apellido").value.trim(),
        puesto: document.getElementById("puesto").value.trim(),
        salario: document.getElementById("salario").value.trim()
    };

    // Usar la Clase SistemaRH para agregar el empleado
    sistemaRH.agregarEmpleado(datos)

    formRegistro.reset(); // Limpia el formulario
    renderizarLista(); // Vuelve a dibujar la lista completa
});

// Manejamos la búsqueda en tempo real
inputBusqueda.addEventListener("input", (e) => {
    const termino = e.target.value.trim();

    if(termino.length > 0) {
        // Usar la clase SistemaRH para obtener los resultados filtrados
        const resultados = sistemaRH.filtrarPersonal(termino)
        renderizarLista(resultados); // Renderiza solo los resultados
    } else {
        renderizarLista(); // renderiza la lista completa si el campo está vacío
    }
});

document.addEventListener("DOMContentLoaded", () => {
    renderizarLista(); // Mostrar la lista de empleados guardados al cargar
})