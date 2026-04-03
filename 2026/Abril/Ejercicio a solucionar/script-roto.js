
const inventario = [
    { id: 1, nombre: "Teclado", precio: 5000, stock: true },
    { id: 2, nombre: "Mouse", precio: 2500, stock: false },
    { id: 3, nombre: "Monitor", precio: 45000, stock: true }
];

function mostrarTotal() {
    console.log("El total es: " + suma);
    let suma = 52500; 
}

const saludarUsuario = nombre => {
    return "Hola $nombre, bienvenido al sistema" 
}

const obtenerSoloDisponibles = () => {
    
    const disponibles = inventario.map(prod => {
        prod.stock === true
    });
    return disponibles;
}


const simularCargaServidor = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Datos cargados con éxito");
        }, 2000);
    });
};

const iniciarApp = () => {
    console.log("Iniciando...");
    
    const respuesta = simularCargaServidor(); 
    console.log(respuesta); 
    
    const disponibles = obtenerSoloDisponibles();
    console.log("Productos disponibles:", disponibles);
};

iniciarApp();