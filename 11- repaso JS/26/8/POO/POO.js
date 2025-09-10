/*
Clases y Constructores
¿Qué es una clase?
Es un molde para crear objetos con propiedades y métodos comunes
*/

// class Persona {
//     constructor(nombre, edad) {
//         this.nombre = nombre;
//         this.edad = edad;
//     }

//     saludar() {
//         console.log(`Hola, soy ${this.nombre} y tengo ${this.edad} años.`)
//     }
// }

/* Creamos instancias (objetos a partir de la clase) */

// let persona1 = new Persona("Leo", 27);
// let persona2 = new Persona("María", 30);

// persona1.saludar();
// persona2.saludar();



/* Ejemplo con la clase alumno */
class Alumno {
    constructor(nombre, nota) {
        this.nombre = nombre;
        this.nota = nota;
    }

    aprobo() {
        return this.nota >= 7;
    }
}


let a1 = new Alumno("Leo", 9);
let a2 = new Alumno("María", 5);

console.log(a1.nombre, "¿aprobó?", a1.aprobo());
console.log(a2.nombre, "¿aprobó?", a2.aprobo());


/* Creamos una clase para calcullar el área y perímetro de un rectángulo */

class Rectangulo {
    constructor(ancho, alto) {
        this.ancho = ancho;
        this.alto = alto;
    }

    area() {
        return this.ancho * this.alto;
    }

    perimetro() {
        return 2 * (this.ancho + this.alto);
    }
}

const r = new Rectangulo(10,5);
console.log("Área:", r.area());
console.log("Perímetro:", r.perimetro());

/* Creamos clase producto con descuento */ 

class Producto {
    constructor(nombre, precio) {
        this.nombre = nombre;
        this.precio = precio;
    }

    aplicarDescuento(porcentaje) {
        return this.precio - (this.precio * porcentaje / 100)
    }
}

const p = new Producto("Jean", 18000);
console.log("Precio con 20% de descuento:", p.aplicarDescuento(20))

/* Creamos la clase cuenta bancaria */

class cuentaBancaria {
    constructor(titular, saldo) {
        this.titular = titular;
        this.saldo = saldo;
    }

    depositar(monto) {
        this.saldo += monto;
    }

    retirar(monto) {
        if (monto > this.saldo) {
            console.log("Fondos insuficientes");
        } else {
            this.saldo -= monto;
        }
    }

    verSaldo() {
        console.log(`${this.titular} tiene ${this.saldo}`)
    }
}

const cuenta = new cuentaBancaria("Martina", 10000);
cuenta.verSaldo()
cuenta.depositar(2500);
cuenta.verSaldo()
cuenta.retirar(2000)
cuenta.verSaldo();

/* Creamos la clase Libro y método resumen() */

class Libro {
    constructor(titulo, autor, paginas) {
        this.titulo = titulo;
        this.autor = autor;
        this.paginas = paginas;
    }

    resumen() {
        return `${this.titulo}, escrito por ${this.autor}, tiene ${this.paginas} páginas.`
    }
}

const l = new Libro("El alquimista", "Paulo Coelho", 208);
console.log(l.resumen())

/* Creamos un array de objetos con clase Persona, filtramos mayores de edad */

class Persona {
    constructor(nombre, edad) {
        this.nombre = nombre;
        this.edad = edad;
    }

    esMayor() {
        return this.edad >= 18;
    }
}

// let personas = [
//     new Persona("Julio", 15),
//     new Persona("Claudio", 22),
//     new Persona("Juan", 17),
//     new Persona("Pedro", 30),
// ];
// let mayores = personas.filter(p => p.esMayor());
// mayores.forEach(p => console.log(p.nombre))

let p1 = new Persona("María", 25)
// modificamos la edad y el nombre

p1.edad = 30;
p1.nombre = "María Fernandez";
console.log(p1)

// Agregamos propiedades

p1.profesion = "Arquitecta";
console.log(p1.profesion)

// Eliminar propiedades

delete p1.edad;
console.log(p1)