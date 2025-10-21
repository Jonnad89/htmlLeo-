Proyecto: Generador de Paleta de Colores Aleatorios
El objetivo es crear una herramienta que genere dinámicamente una paleta de 5 colores. El usuario puede bloquear los colores que le gustan para que no cambien al generar una nueva paleta.

ej js:

// Ejemplo de cómo se vería la paleta:
let paleta = [
    { color: '#FF5733', bloqueado: false, id: 1 },
    { color: '#33FFAA', bloqueado: true, id: 2 }, // Este no cambiaría
    // ...
];