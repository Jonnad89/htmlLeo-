// --- CONFIGURACIÓN DE DATOS (PERSISTENCIA)---

// Intenamos cargar lo que hay en memoria, si no hay nada,empezamos con array vacio

let notas = JSON.parse(localStorage.getItem("notas_crypto_app")) || [];

const inputTask = document.getElementById("task-input");
const btnAdd = document.getElementById("add-btn");
const listUI = document.getElementById("task-list");
const btnClear = document.getElementById("clear-btn");

// --- 1. LÓGICA DE API (FETCH) ---

const consultarPrecio = async () => {
    try {
        const respuesta = await fetch("https://api.coindesk.com/v1/bpi/currentprice/BTC.json")
        const datos = await respuesta.json();
        
        const precio = datos.bpi.USD.rate;
        const hora = datos.time.updated;
        
        document.getElementById("btc-price").innerText = `$${precio}`
        document.getElementById("update-time").innerText = `Actualizado: ${hora}`
        console.log("Precio actualizado desde la API");
        
    } catch (error) {
        document.getElementById("btc-price"). innerText ="Error de red";
    }
};

// --- 2. LÓGICA DE NOTAS (LOCALSTORAGE) --- 

const guardarNota = () => {
    const texto = inputTask.value.trim();
    if(texto === "") return;

    // Guardar en el array
    notas.push(texto);

    // PERSISTENCIA: Convertir array a texto y guardar en el disco del navegador
    localStorage.setItem("notas_crypto_app", JSON.stringify(notas));

    inputTask.value = "";
    renderizar();
};

const renderizar = () => {
    listUI.innerHTML = "";

    notas.forEach((nota, index) => {
        const li = document.createElement("li");
        li.innerHTML = `
            <span>${nota}</span>
            <small style="color: #666">${index + 1}</small>
        `;
        listUI.appendChild(li)
    });
};

// --- 3. EVENTOS Y ARRANQUE --- 
btnAdd.addEventListener("click", guardarNota);

btnClear.addEventListener("click", () => {
    localStorage.clear(); // Borra la memoria del navegador
    notas = [];           // Limpia el array en ejecución
    renderizar();
});
console.log(notas);

// Consultar precio al abrir y luego cada 30 segundos
// consultarPrecio();
// setInterval(consultarPrecio, 30000);

// Cargar notas al abrir
// renderizar()