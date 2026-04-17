/**
 * MÓDULO 3: FUNCIONES Y CLASES (POO)
 * El objetivo es crear moldes y herramientas que podamos reutilizar.
 */

// --- 1. FUNCIONES DE FLECHA (Arrow Functions) ---
// Es la forma moderna de escribir funciones. Son cortas y potentes.

const saludar = (nombre) => {
    return `Hola ${nombre}, bienvenido al Módulo 3.`;
};

// Si la función tiene una sola línea, se puede hacer más corta aún:
const sumar = (a, b) => a + b; 

console.log(saludar("Roma"));
console.log("Resultado suma:", sumar(10, 5));


// --- 2. EL CONCEPTO DE CLASE (El molde) ---
// Imagina que una Clase es el "plano" de una casa, y los objetos son las "casas" ya construidas.

class Persona {
    // El constructor es lo primero que se ejecuta cuando creamos la persona
    constructor(nombre, edad, profesion) {
        this.nombre = nombre; // "this" se refiere a LA persona que estamos creando
        this.edad = edad;
        this.profesion = profesion;
        this.energia = 100; // Podemos poner valores por defecto
    }

    // Un método es una función que vive dentro de la clase
    presentarse() {
        return `Hola, soy ${this.nombre}, tengo ${this.edad} años y soy ${this.profesion}.`;
    }

    trabajar(horas) {
        this.energia -= (horas * 10);
        return `${this.nombre} trabajó ${horas} horas. Energía restante: ${this.energia}%`;
    }
}


// --- 3. INSTANCIACIÓN (Crear objetos usando el molde) ---

const usuario1 = new Persona("Jonatan", 30, "Programador");
const usuario2 = new Persona("Mayra", 28, "Diseñadora");

console.log(usuario1.presentarse());
console.log(usuario2.trabajar(3));


// --- 4. CLASES CON LÓGICA (Ejemplo: Un Carrito de Compras) ---

class Carrito {
    constructor() {
        this.productos = [];
    }

    agregar(nombre, precio) {
        this.productos.push({ nombre, precio });
        console.log(`✅ ${nombre} agregado al carrito.`);
    }

    mostrarTotal() {
        let total = 0;
        this.productos.forEach(p => total += p.precio);
        return `El total es: $${total}`;
    }
}

const miCarrito = new Carrito();
miCarrito.agregar("Monitor", 45000);
miCarrito.agregar("Mouse", 5000);

console.log(miCarrito.mostrarTotal());


// --- EJERCICIO DE PRÁCTICA PARA EL ALUMNO ---
// "El Sistema de RPG / Videojuego"

class Personaje {
    constructor(nombre, vida) {
        this.nombre = nombre;
        this.vida = vida;
    }

    recibirDanio(puntos) {
        this.vida -= puntos;
        if (this.vida <= 0) {
            console.log(`💀 ${this.nombre} ha sido derrotado.`);
        } else {
            console.log(`💥 ${this.nombre} recibió daño. Vida restante: ${this.vida}`);
        }
    }
}

const heroe = new Personaje("Guerrero Roma", 100);
heroe.recibirDanio(30);
heroe.recibirDanio(80);