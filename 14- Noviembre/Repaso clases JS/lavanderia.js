class PedidoLavanderia {
    constructor(usuario, pesoKg) {
        this.id = Date.now();
        this.usuario = usuario;
        this.pesoKg = pesoKg;
        this.estado = 'INGRESADO'; // Estado inicial fijo
        this.tarifa = 2.50
    }

    // Método para avanzar el estado

    avanzarEstado(){
        if(this.estado === 'INGRESADO'){
            this.estado = 'LAVANDO';
            return true
        }

        if(this.estado === 'LAVANDO'){
            this.estado = 'TERMINADO';
            return true
        }
        return false
    }
}

// ==== Si queres modificar el proyecto === 

function ingresarPedido(){
    const usuario = usuarioInput.value.trim();
    const peso = parseFloat(pesoInput.value);

    if(!usuario || isNaN(peso) || peso <= 0) {
        alert('Por favor introduzca datos válidos');
        return
    }

    // MODIFICACIÓN CLAVE: En lugar de un ojeto literal, creamos una instancia

    const nuevoPedido = new PedidoLavanderia(usuario, peso);

    // El array 'pedidos' ahora guardaria instancias de la clase PedidoLavanderia
    pedidos.push(nuevoPedido)

    // Limpiar y renderizar
    usuarioInput.value = '';
    pesoInput.value = '1';
    reorganizarLista();
}