/*
Sintaxis

switch (valor) {
    case opncion1:
        código si valor === opcion1
        break;
    case opcion2:
        código si valor === opcion2
        break;
    default;
        código si no coincide ningún caso
}
*/

let dia = "miércoles";

switch (dia) {
    case "lunes":
        console.log("Comienza la semana");
        break;
    case "martes":
        console.log("Es el segundo día");
        break;
    case "miércoles":
        console.log("Mitad de semana");
        break;
    case "jueves":
        console.log("Estamos cerca del fin de semana");
        break;
    case "viernes":
        console.log("último día laboral");
        break;
    default:
        console.log("Día no reconocido")
}