Consigna del Proyecto: "CyberSpace Tycoon" 
Objetivo de la aplicación:
Crear un juego web de temática hacker donde el usuario genera "Bytes" haciendo clic en un gran botón central. Con esos Bytes, puede comprar mejoras automáticas (como "Servidores" o "IA Hackers") que generan Bytes por segundo solos. La interfaz tiene que verse súper futurista y reaccionar de forma animada a cada acción.

Requerimientos de Diseño (Bastante CSS):
Estética Hacker: Fondo oscuro profundo, textos en verde neón, violeta o cian, fuentes estilo código (monospace) y bordes con sombras brillantes (box-shadow: 0 0 15px #6c5ce7).

El Gran Botón Central: Un botón enorme que tenga un efecto de escala (transform: scale) y un brillo neón intermitente cada vez que pasás el mouse por encima o hacés clic.

Sección de Upgrades (Tienda): Un panel lateral con tarjetas de mejoras. Cada tarjeta debe cambiar de color (ponerse gris si no te alcanza la plata, o brillar en verde si ya podés comprarla).

Animaciones de Texto: Pequeños números flotantes que aparezcan y suban cuando hacés clic (opcional, pero el diseño general tiene que gritar Cyberpunk).

Requerimientos de Lógica (Bastante JS):
Variables de Estado: * bytes: El dinero actual del jugador.

bytesPorClic: Cuánto ganás con cada clic manual (arranca en 1).

bytesPorSegundo: Cuánto ganás automáticamente por segundo (arranca en 0).

precioServidor: El costo de la primera mejora (arranca en 15).

cantidadServidores: Cuántos compraste.

El Clic Manual: Al hacer clic en el botón central, sumás bytesPorClic a tu contador y actualizás la pantalla.

El Bucle de Tiempo (setInterval): JavaScript tiene que ejecutar una función automática cada 1 segundo (1000ms) que le sume bytesPorSegundo a los bytes totales del usuario. ¡Esto hace que el juego funcione solo de fondo!

La Tienda de Mejoras (Lógica de Intercambio): Al hacer clic en "Comprar Servidor":

Freno de mano: Verificar si bytes >= precioServidor. Si no te alcanza, no pasa nada.

Si alcanza: Restás los bytes del precio, sumás 1 a cantidadServidores, aumentás bytesPorSegundo (ej: +2 bytes/seg) y subís el precio de la mejora un 20% para que el próximo sea más difícil de comprar.

Actualización del DOM en tiempo real: Una función que se encargue de refrescar todos los textos en pantalla y habilitar/deshabilitar los botones de la tienda según la plata que tengas.