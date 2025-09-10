function crearContador() {
    let contador = 0;
    return function() {
        contador++;
        return contador;
    };
}

const contar = crearContador();
console.log(contar());
console.log(contar());

// Funciones autoejecutadas (IIFE)
// sirve para ejecutar código inmediatamente sin contaminar el scope global
(function() {
    console.log("Ejecutada automáticamente")
})();

/* Mini "Banco" con closures */

function crearCuenta(saldoInicial) {
    let saldo = saldoInicial;

    return {
        depositar(cantidad) {
            saldo += cantidad;
            console.log(`Depositaste ${cantidad}. Saldo: ${saldo}`);
        },
        retirar(cantidad) {
            if (cantidad > saldo) {
                console.log("Fondos insuficientes");
            } else {
                saldo -= cantidad;
                console.log(`Retiraste ${cantidad}. Saldo: ${saldo}`);
            }
        }, 
        verSaldo() {
            console.log(`Saldo actual: ${saldo}`)
        }
    };
}

const cuenta = crearCuenta(100);
cuenta.verSaldo(); 
cuenta.depositar(50);
cuenta.retirar(200);