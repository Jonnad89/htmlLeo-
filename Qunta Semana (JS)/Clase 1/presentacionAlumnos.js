// Crear un método dentro de cada alumno que diga su nombre en consola

let alumnos = [
  {
    nombre: "Laura",
    edad: 21,
    presentarse() {
      console.log(`Hola, soy ${this.nombre}`);
    },
  },
  {
    nombre: "Tomás",
    edad: 23,
    presentarse() {
      console.log(`Hola, soy ${this.nombre}`);
    },
  },
];

alumnos[0].presentarse(); 
alumnos[1].presentarse(); 
