// Función que simunla una base de datos
const buscarDatos = () => {
    return new Promise(res => setTimeout(() => res("Datos recibidos"),2000));
};

// La funcíón PADRE tiene que tener 'async'
const ejecutar = async () => {
    console.log("Pidiendo datos...")

    // El 'await' frena la ejecución acá hasta que la promesa termine
    const resultado = await buscarDatos();

    console.log(resultado)
    
};

ejecutar()