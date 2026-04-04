
const inventario = [
    { id: 1, nombre: "Teclado", precio: 5000, stock: true },
    { id: 2, nombre: "Mouse", precio: 2500, stock: false },
    { id: 3, nombre: "Monitor", precio: 45000, stock: true }
];

function mostrarTotal() {
    let suma = 52500; 
    console.log(`El total es:  ${suma}`);
}

const saludarUsuario = (nombre) => {
    return `Hola ${nombre}, bienvenido al sistema`
}

const obtenerSoloDisponibles = () => {
    
   return inventario.filter( prod => prod.stock)
}


const simularCargaServidor = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Datos cargados con éxito");
        }, 2000);
    });
};

const iniciarApp = async () => {
    console.log("Iniciando...");
    
    const respuesta = await simularCargaServidor(); 
    console.log(respuesta); 
    
    const disponibles = obtenerSoloDisponibles();
    console.log("Productos disponibles:", disponibles);
    console.log(saludarUsuario("Alumno"))
    mostrarTotal()
};

iniciarApp();