/**
 * MÓDULO 3: FUNCIONES Y CLASES (POO)
 * El objetivo es crear moldes y herramientas que podamos reutilizar
 */

// --- 1. FUNCIONES FLECHA (Arrow Functions) ---
// Es la forma moderna de escribir funciones. Son cortas y potentes.

const saludar = (nombre) => {
    return `Hola ${nombre}. Bienvenido al módulo 3.`
} ;

console.log(saludar("Leo"));

// Si la función tiene una sola linea, se puede hacer más corta aún.
const sumar = (a, b) => a + b;

console.log("Resultado suma:", sumar(10, 5));
console.log(`Resultado suma: ${sumar(10,5)}`);

// --- 2. EL CONCEPTO DE CLASE (El molde) ---
// Imaginar que una Clase es el "plano" de una casa, y los objetos son las "casas"

class Persona {
    // El constructor es lo primero que se ejecuta cuando creamos la persona
    constructor(nombre, edad, profesion) {
        this.nombre = nombre; // "this" se refiere a LA pppersona que estamos creando
        this.edad = edad;
        this.profesion = profesion;
        this.energia = 100; // Podemos poner valores por defecto
    }

    // Un método es una función que vive dentro de la clase
    presentarse() {
        return `Hola, soy ${this.nombre}, tengo ${this.edad} años y soy ${this.profesion}.`
    }

    trabajar(horas) {
        this.energia -= (horas * 10);
        return `${this.nombre} trabajó ${horas} horas. Energía restante: ${this.energia}%`
    }
}

// --- 3. INSTANCIACIÓN (Crear objetos usando el molde) --- 

const usuario1 = new Persona("Jonatan", 30, "Programador");
const usuario2 = new Persona("Leo", 27, "Diseñador")

console.log(usuario1.presentarse());
console.log(usuario2.trabajar(3));


// --- 4. CLASES CON LÓGICA (Ejemplo: un carrito de compras) ---

class Carrito {
    constructor() {
        this.productos = [];
    }

    agregar(nombre, precio) {
        this.productos.push({nombre, precio});
        console.log(`${nombre} agregado al carrito.`);
    }

    mostrarTotal() {
        let total = 0;
        this.productos.forEach( p => total += p.precio);
        return `El total es: $${total}`
    }
}

const miCarrito = new Carrito();
miCarrito.agregar("Monitor", 45000)
miCarrito.agregar("Mouse", 5000)

console.log(miCarrito.mostrarTotal());

// --- EJERCICIO DE PRÁCTICA ---
// El sistema RPG / VideoJuego

class Personaje {
    constructor(nombre, vida) {
        this.nombre = nombre;
        this.vida = vida;
    }

    recibirDanio(puntos) {
        this.vida -= puntos;
        if (this.vida <= 0) {
            console.log(`${this.nombre} ha sido derrotado.`);            
        } else {
            console.log(`${this.nombre} recibió daño. Vida restante: ${this.vida}`);
            
        }
    }
}

const heroe = new Personaje("Guerrero Roma", 100);
heroe.recibirDanio(30);
heroe.recibirDanio(80)


// EJEMPLO 2: CONTROL DE ESTACIONAMIENTO

class Auto {
    constructor(patente, marca) {
        this.patente = patente;
        this.marca = marca;
    }
}

const Estacinamiento = {
    capacidad : 3,
    autos: [],

    ingresar(auto) {
        if ( this.autos.length < this.capacidad ) {
            console.log(`Ingresó: ${auto.marca} (${auto.patente}). Espacios libres: ${this.capacidad - this.autos.length}`);
            
        }else {
            console.log(`No hay lugar para el auto ${this.marca}`);
            
        }
    },

    salir(patente) {
        // Filtramos para saccar el auto de la lista
        const totalAntes = this.autos.length;
        this.autos = this.autos.filter(a => a.patente !== patente);

        if (this.autos.length < totalAntes) {
            console.log(`El auto ${patente} salió del estacionamiento`);
            
        } else {
            console.log(`Error: Esa patente no estaba en el sistema`);
            
        }
    }
};

const auto1 = new Auto("ABC-123", "Toyota")
const auto2 = new Auto("ABC-555", "Fiat")
const auto3 = new Auto("ABC-888", "Ford")
const auto4 = new Auto("ABC-222", "Tesla")

Estacinamiento.ingresar(auto1)
Estacinamiento.ingresar(auto2)
Estacinamiento.ingresar(auto3)
Estacinamiento.ingresar(auto4)

Estacinamiento.salir("ABC-555")
Estacinamiento.ingresar(auto2)