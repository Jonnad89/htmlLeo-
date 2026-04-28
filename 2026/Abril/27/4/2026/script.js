// 1. VARIABLES: Son estantes donde guardamos datos que cambian.
let dineroEnCaja = 0;

// 2. Array: Es la lista de pedidos(como los tickets clavados en el gancho)
let listaDePedidos = [];

const Cocina = {
    // 3. FUNCION: Es la "receta" que se ejecuta cuando alguien pide una pizza
    preparar(sabor, precio){
        // 4. OBJETO: Creamos la "ficha" de la pizza
        // Agrupamos datos que pertenecen a una misma cosa
        const nuevaPizza= {
            id: Date.now(),
            sabor: sabor,
            precio:precio,
            estado: "Cocinando"
        }

        // 5. METODO (push): Agregamos el ticket al final de nuestra lista
        listaDePedidos.push(nuevaPizza)
        
        this.actualizarPantalla();
    },

    entregar(id) {
        // 5. METODO (map): Recorremos la lista para cambiar el estado.
        // "A todas las pizzas, si el ID coincide, cambia el estado"
        listaDePedidos = listaDePedidos.map(p => {
            if(p.id === id) {
                p.estado = "Entregada";
                // Sumamos a la VARIABLE global dedinero
                dineroEnCaja += p.precio;
            }
            return p;
        });
        this.actualizarPantalla()
    },

    limpiar() {
        //5. METODO (filter): Comoun colador , solo dejamos las que no se entregaron
        listaDePedidos = listaDePedidos.filter(p => p.estado !== "Entregada");
        this.actualizarPantalla();

    },

    actualizarPantalla() {
        const listaUI = document.getElementById("lista-pedidos");
        const cajaUI = document.getElementById("total-caja");

        listaUI.innerHTML = "";
        cajaUI.innerText = dineroEnCaja;

        listaDePedidos.forEach(p=> {
            const li = document.createElement("li");
            li.innerHTML = `
                <span><strong>${p.sabor}</strong> - ${p.estado}</span>
                ${p.estado === "Cocinando"
                ? `<button onclick="Cocina.entregar(${p.id})">Entregar</button>`
                : "" }
            `;
            listaUI.appendChild(li)
        })
    }
}