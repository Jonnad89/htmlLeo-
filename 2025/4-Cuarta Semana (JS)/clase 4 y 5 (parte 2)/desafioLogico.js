/* 
Crear un sistema que:
    Reciba un array de nombres
    Filtre los que tengan más de 5 letras
    Devuelva un nuevo array con esos nombres en mayúsculas
*/

let nombres = ["Ana", "Roberto", "Lucía", "Carlos", "Sol"];

let resultado = nombres
    .filter(nombre => nombre.length > 5)
    .map(nombre => nombre.toUpperCase());

console.log(resultado)