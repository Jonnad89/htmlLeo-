const extraerDinero = (monto) => {
    // Validamos que sea multiple de 100 (porque no tenemos billetes más chicos)
    if(monto % 100 !== 0){
        return "Error: solo podes retirar multiplos de $100"
    }

    let restante = monto;

    // Lógica para billetes de 1000
    const cant1000 = Math.floor(restante / 1000);
    restante = restante % 1000;

    // Lógica para billete de 500
    const cant500 = Math.floor(restante / 500);
    restante = restante % 500;
    
    // Acá la lógica de 200 y 100
    
    console.log(`Para extraaer $${monto} el cajero entrega:`);
    console.log(`Billetes de 1000: ${cant1000}`);
    console.log(`Billetes de 500: ${cant500}`);
    
    
}

// Prueba
extraerDinero(2800)