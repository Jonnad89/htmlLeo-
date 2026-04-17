let turnos = JSON.parse(localStorage.getItem("agenda_turnos")) || [];

const agendarTurno = () => {
    const cliente = document.getElementById("cliente").value;
    const hora = document.getElementById("hora").value;

    if (cliente === "" || hora === "") return alert("Completatodos los datos")

    // 1. Crear el objeto del turno (id, cliente, hora)
    const nuevoTurno = {id: Date.now(), cliente, hora};
    
    //2. Agregarlo al array "turnos"
    // --- Código acá ---

    // 3. Guardar en LocalStorage (No olvides el stringify)
    // Código acá

    renderizar();
};

const borrarTurno = (id) => {
     //4. Usá filter para sacar el turno con ese ID
     // código acá

     // 5. Guardar de nuevo en LocalStorage y renderizar
};

// Función renderizar() que dibuje los turnos en el HTML