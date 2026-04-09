class Personaje {
    constructor(nombre, salud, daño){
        this.nombre = nombre;
        this.salud = salud;
        this.saludMaxima = salud; // Guardamos el máximo para no pasarnos al curar
        this.daño = daño;
    }

    //El método recibe coo paráetro OTRO objeto (el objetivo)
    atacar(objetivo) {
        if (objetivo.salud <= 0) {
            console.log(`❌ No podés atacar a ${objetivo.nombre}, ya está derrotado.`);
            return;
        }

        console.log(`⚔ ${this.nombre} ataca a ${objetivo.nombre} con ${this.daño} de fuerza!`);

        // Lógica principal: restamos la salud del objetivo usando daño
        objetivo.salud -= this.daño

        // Evitamos que la salud sea un número negativo
        if (objetivo.salud < 0) {
            objetivo.salud = 0;
        }

        console.log(`🛡 ${objetivo.nombre} ahora tiene ${objetivo.salud} de salud`);
        

        if (objetivo.salud === 0) {
            console.log(`☠ ${objetivo.nombre} ha sido derrotado`);
            
        }
        
    }

    // NUEVO MÉTODO: CURAR
    curar(puntos) {
        if(this.salud <= 0) {
            console.log(`❌ ${this.nombre} no puede curarse porque está derrotado.`);
            return;            
        }

        this.salud += puntos;

        // Lógicac para no pasarsee de la salud máxima
        if (this.salud > this.saludMaxima) {
            this.salud = this.saludMaxima;
        }

        console.log(`⭐ ${this.nombre} se curó. Salud actual: ${this.salud} / ${this.saludMaxima}`);
        
    }
}

// Creamos las instancias
const heroe = new Personaje ("Guerrero", 100, 20);
const monstruo = new Personaje("Orco", 50, 10);

// Ejecutamos los ataques

console.log("--- INICIO DEL COMBATE ---");

// heroe.atacar(monstruo);
// heroe.atacar(monstruo);
// monstruo.atacar(heroe);
// heroe.atacar(monstruo);


monstruo.atacar(heroe)
monstruo.atacar(heroe)

heroe.curar(15)
heroe.curar(50)

heroe.atacar(monstruo)
