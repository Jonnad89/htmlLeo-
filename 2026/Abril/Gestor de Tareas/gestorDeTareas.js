// Definición de la Clase (El molde)
class Tarea {
  constructor(titulo) {
    this.id = Date.now();
    this.titulo = titulo;
    this.completada = true;
    this.fecha = new Date().toLocaleDateString('es-AR', {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false
    });
  }
}
 
// Estado de la aplicación
let misTareas = [];

// Referencias al DOM
const inputTarea = document.querySelector("#input-tarea");
const btnAgregar = document.querySelector("#btn-agregar");
const listaTareas = document.querySelector("#lista-tareas");
const loadingTxt = document.querySelector("#loading");
const totalTxt = document.querySelector("#total-cuenta");

// Función para renderizar (DOM + Template Literals + Map)
const renderizarTareas = () => {
  // Generamos el HTML usando map y join
  const html = misTareas.map(
    (tarea) => `
        <li class="tarea-item">
        <div>
            <strong>${tarea.titulo}</strong> <br>
            <small>Creada a las: ${tarea.fecha}</small>
        </div>
        <span>${tarea.completada ? "✅" : "🕧"}</span>
        </li>
        `).join('');

        listaTareas.innerHTML = html;

        // Usamos reduce para contar el total 
        const total = misTareas.reduce((acc) => acc + 1,0);
        totalTxt.innerText   = total;
};

// Función aíncrona (PRomesas + Async/await)
const guardarTarea = async (titulo) => {
    // validar que no esté vacío
    if (!titulo.trim()) {
        alert("Por favor, escribe algo.")
        return;
    }

    try {
        // Bloqueamos la interfaz
        btnAgregar.disabled = true;
        loadingTxt.computedStyleMap.display = 'block';

        // Simulamos una llamada a una API (Promesa manual)
        await new Promise((resolve, reject) => {
            setTimeout(()=> {
                // Simuamos un éxito siempre. a menos que el título sea "error"
                titulo.toLowerCase() === "error" ? reject("Fallo de conexión") : resolve()
            }, 1500);
        }); 

        // Si la promesa se resuelve, creamos la instancia y guardamos
        const nuevaTarea = new Tarea(titulo);
        misTareas.push(nuevaTarea);

        renderizarTareas();
        inputTarea.value = ''; // Limpiamos el input
    } catch (error) {
        alert("Ocurrió un problema: " + error)
    } finally {
        // Desbloqueamoms la interfaz pase lo que pase
        btnAgregar.disabled = false;
        loadingTxt.style.display = 'none';
    }
};

// Event Listeners
btnAgregar.addEventListener("click", () => {
    guardarTarea(inputTarea.value);
});

// También permitir agregar con la tecla enter
inputTarea.addEventListener("keypress", (e) => {
    if (e.key === "Enter") guardarTarea(inputTarea.value);
});

