let libro = {
  titulo: "Harry Potter",
  autor: "J.K Rowling",
  paginas: 123,
};

for (let clave in libro) {
  console.log(`${clave}: ${libro[clave]}`);
}

/* 
crear objeto -> let obj = { clave : valor }
leer propiedad -> obj.propiedad o obj["propiedad"]
agregar/modificar -> obj.nueva = valor
elimiinar propiedad -> delete obj.propiedad
Agregar método -> obj.accion = function() {...}
recrorrer propiedad -> for(let clave in obj) {}
*/

/*
Creamos un objeto usuario y una función ue diga si está activo(usando una propiedad booleana)
*/

let usuario = {
  nombre: "Juan",
  activo: true,
};

function verificarEstado(u) {
  if (u.activo) {
    console.log(`${u.nombre} está activo`);
  } else {
    console.log(`${u.nombre} está inactivo`);
  }
}

verificarEstado(usuario);

/*
Creamos un array de objetos alumnos y mostramos los nombres
*/

let alumnos = [
  { nombre: "Lucía", edad: 20 },
  { nombre: "Lautaro", edad: 22 },
  { nombre: "Pedro", edad: 19 },
];

for (let i = 0; i < alumnos.length; i++) {
  console.log(alumnos[i].nombre);
}

/* 
Recorremos el array de alumnos y mostramos solo los alumnos mayores de 20
*/

for (let i = 0; i < alumnos.length; i++) {
  if (alumnos[i].edad > 20) {
    console.log(`${alumnos[i].nombre} tiene más de 20`);
  }
}

/*
Creamos un array de productos con nombre y precio. Creamos una función ue devuelva el total
*/

let productos = [
  { nombre: "Teclado", precio: 8000 },
  { nombre: "mouse", precio: 6500 },
  { nombre: "Monitor", precio: 50000 },
];

function calcularTotal(lista) {
  let total = 0;
  for (let i = 0; i < lista.length; i++) {
    total += lista[i].precio;
  }
  return total;
}

console.log("Total:", calcularTotal(productos));

/* 
Contamos cuantos productos hay en stock mayor a 0
*/

let inventario = [
  { nombre: "Laptop", stock: 5 },
  { nombre: "Teléfono", stock: 0 },
  { nombre: "Auriculares", stock: 7 },
  { nombre: "Mouse", stock: 10 },
];

let enStock = 0;

for (let i = 0; i < inventario.length; i++) {
    if (inventario[i].stock > 0) {
        enStock++;
    }
}

console.log("Productos disponibles:", enStock)

/* Object.keys(obj)  -> devuelve un array con todas las claves (propiedades) del objeto*/

let persona = {
    nombre : "Laura",
    edad : 30,
    profesion : "Fotógrafa"
};

console.log(Object.keys(persona))

/* Object.values(obj) -> Nos devuelve un array con los valores del objeto */

console.log(Object.values(persona))

/* Object.entries(obj) -> Devuelve un array de arrays con subarray de [ clave, valor ] */

console.log(Object.entries(persona))

