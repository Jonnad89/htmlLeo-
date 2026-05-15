1. Calculador de daño 

reto: Crear una función llamada calcularDano que reciba al ataque de un pokemon y la defensa del rival

la logica: El daño final es: ataque - (defensa /2)

condicion: Si el daño es menor a 0, debe imprimir 0(No puede curar al enemigo)


2. Filtro de Tipos (Arrays y filter)

Objetivo: Aprender a buscar dentro de lista

reto: 
    const equipo = [{n: 'Pikachu'. t: 'electrico'}, {n: 'Bulbasaur', t: 'planta'}, {n: 'Zapdos', t: 'electrico'}];

tarea: Crear un codigo que recorra el equipo y guarde en una nueva list solo los que sean del tipo 'electrico'.

***Pista: Podes usar un forEach con un if, o animarte a usar el método filter().

3. Probabilidad Critica (El azar de Math.ramdon)

objetivo: Entender porcentajes (como el shiny)

reto: Crear una funcion llamada golpeCritico

reglas: 
    1. Generar un número aleatorio entre 1 y 100
    2. Si el numero es 20 o menor, imprimir: "Golpe Critico! Daño x2!"
    3.Si es mayor a 20, imprimir: "Golpe normmal"

pista : porcentaje a tener en cuenta 20%