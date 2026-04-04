const numeros = [1, 5, 10, 15, 20];

// Filter: ¿Quiénes pasan la prueba? (crear un array más chico)
const mayoresADiez = numeros.filter(n => n > 10)
console.log(mayoresADiez)

//Map: Transformar a todos (Crear un array del mismo largo)
const conSignoPeso = numeros.map(n => `$${n}`);
console.log(conSignoPeso)