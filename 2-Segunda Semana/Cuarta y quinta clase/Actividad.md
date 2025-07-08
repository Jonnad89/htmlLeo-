Tarea 1
- Crear una caja .contenedor con 4 items.
- Aplicar display: flex; y probar:
    - flex-direction
    - justify-content
    - align-items

Tarea 2
- Crear una barra de navegación con:
    - Un logo a la izquierda
    - Un bloque de 3 links a la derecha
    - Centrado verticalmente

Tarea 3
- Hacer una caja con 6 items (bloques de colores)
    - Usar flex-wrap: wrap
    - Aplicar justify-content con diferentes valores
    - Probar align-items con diferentes alturas

 Tarea 4
 - Crear una grila de tarjetas de productos  
    - 8 tarjetas con nombre + precio
    - fondo gris claro
    - con flex-wrap, gap, justify-content: space-evenly

Tarea 5
- Hacer una galería de imágenes (pueden ser emojis o imágenes reales)
    - 6 o más
    - aplicar wrap y align-content
    - usar align-self en 1 item para destacarlo

Tarea 6
- Mini Landing page
    - Encabezado con texto grande
    - 4 tarjetas con flex-wrap, gap, justify-content: space-around
    - Responsive: las tarjetas se apilan en celulares(usá media queries)
    - Usar vw, vh, rem donde consideres útil

Tarea 7
- Rediseñar la galería vista en clase
    - Que funcione bien en celulares y escritorio... Opcional en tablets
    - Agregar media queries
    - Cambiar colores y tamaños en función del tamaño de pantalla

Tarea 8
- Diseñar una ficha de perfil personal totalmente responsive
estructura minima:
<div class="perfil">
    <img>
    <div class="info">
        <h1>Tu nombre</h1>
        <p>Una breve descripción personal</p>
        <div class="redes">
        <a href="#">Github</a>
        <a href="#">LinkedIn</a>
        <a href="#">Instagram</a>
        </div>
    </div>
</div>

Para el CSS:
- usar flexbox para que la imagen y el texto estén uno al lado del otro en pantallas grandes
- en pantallas chicas,que se apilen uno encima del otro
- el contenedor .perfil tiene que usar vw, vh, rem para tamaños
- las redes sociales tienen que estar en un div con display: flex y gap
- incluir media queries para celulares (max-width: 480px)