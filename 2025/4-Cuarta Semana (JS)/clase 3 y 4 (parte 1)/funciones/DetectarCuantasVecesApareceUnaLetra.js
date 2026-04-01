let frase = "La lógica es la base de la programación";
let letraBuscada = "a";
let contador = 0;

for ( let i = 0; i < frase.length; i++ ) {
    if( frase[i].toLowerCase() === letraBuscada ) {
        contador++
    }
}

console.log(`La letra '${letraBuscada}' aparece ${contador} veces.`)
