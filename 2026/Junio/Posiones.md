Un título h1 que diga: "Laboratorio de Pociones ".
La Mesa de Trabajo: Una imagen central grande que representa el estado del caldero (id="img-caldero"). 
Arranca con la foto de un caldero vacío o con líquido verde.
La Estantería de Ingredientes: Tres botones, cada uno con una imagen chiquita adentro 
(o el botón y la imagen al lado) que representan los ingredientes:
Botón 1: "Pluma de Fénix 🪶" (id=btn-fenix)
Botón 2: "Cristal Oscuro 🔮" (id=btn-cristal)
Botón 3: "Raíz de Mandrágora 🌱" (id=btn-raiz)
Una pantalla de estado (h2): Ingredientes en el caldero: Vacío.
Un botón abajo de todo para "Mezclar e Invocar 🪄" (id=btn-mezclar).
Paso 2: Las Variables en JavaScript (La dificultad nueva)

let caldero = []; // Una lista vacía donde meteremos los ingredientes
let oroGanado = 0;

Paso 3: Los Botones de los Ingredientes (Llenar la lista)
El sistema hace un if para revisar que no haya más de 2 ingredientes en el caldero 
(porque la receta es de a dos). Si ya hay 2, tira un alert("¡El caldero está lleno! Mezclá o vacialo.").
Si hay espacio, agrega el texto "Fénix" adentro de la lista usando el comando .push():

caldero.push("Fénix");

3. Actualiza la pantalla-mezcla para que el usuario vea qué tiró adentro (ej: *"Pluma de Fénix"*).
4. **Efecto visual:** La imagen del caldero (img-caldero) cambia temporalmente su
 brillo o se mueve para simular que cayó algo adentro.

---

### Paso 4: El Botón de Mezclar (La combinación mágica)
Cuando hace click en **"Mezclar e Invocar 🪄"**:
1. El sistema revisa que haya exactamente 2 ingredientes en la lista. Si hay menos, tira un
2. alert("Meté más cosas al caldero, Leo.").
3. **La lógica de las recetas (Condicionales lógicos):** Leo va a usar el operador `&&` (Y)
4. para chequear qué hay en la lista:
   * **Receta Épica (Fénix + Cristal):** ¡Crea la Poción de Invisibilidad!
     * *Resultado:* La imagen del caldero cambia por la foto de una poción dorada brillante,
     * el fondo de la pantalla se pone amarillo/oro y suma puntos.
   * **Receta Peligrosa (Cristal + Raíz):** ¡EXPLOSIÓN!
     * *Resultado:* La imagen del caldero cambia por una foto de fuego/humo, la pantalla parpadea en
     * rojo y el juego te obliga a reiniciar el caldero.
5. Al terminar la mezcla, la lista caldero = []; se vacía automáticamente para la siguiente combinación.
