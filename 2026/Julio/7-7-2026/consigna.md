Desafío Hacker: ¡El Ataque del Firewall y los Bonos Sorpresa! 

Hoy vamos a programar un sistema de eventos aleatorios. La idea es que cada tanto aparezca un evento en la pantalla: a veces va a ser algo buenísimo (un bono) y a veces algo malo (un virus).

Acá tenés los pasos de lo que hay que meter en el código:

1. El Bucle de los Eventos (El reloj sorpresa)
Así como tenés un setInterval que te suma los bytes cada 1 segundo, vas a crear otro temporizador separado. Este se va a ejecutar cada 8 o 10 segundos.
Cada vez que se cumpla ese tiempo, la computadora va a tirar un número al azar (un dado del 1 al 10) para decidir si pasa algo o no.

2. Las tres opciones (La lógica)
Adentro de ese temporizador, vas a meter condicionales según el número que salió:

Si sale un 1 o un 2 (20% de probabilidad): ¡Alerta de virus! Un cortafuegos te detectó y te roba el 30% de los bytes que tengas acumulados en ese momento. Te tiene que salir un aviso en pantalla que diga algo como "¡Cuidado! Firewall detectado, perdiste X bytes".

Si sale un 8, 9 o 10 (30% de probabilidad): ¡Encontraste un exploit de seguridad! Te ganás un bono instantáneo de 50 bytes gratis. Pantalla: "¡Hackeo exitoso! Bono de +50 Bytes".

Si sale cualquier otro número (50% de probabilidad): No pasa nada, la red está tranquila.

3. Conectarlo con la pantalla
Para que esto se vea bien, en el HTML agregá abajo del título un párrafo (p) vacío con un ID, por ejemplo id="alertas-pantalla".
Desde JavaScript, cada vez que pase un evento, tenés que cambiarle el texto a ese párrafo usando .innerText para que podamos leer lo que pasó. Si no pasa nada, que se quede vacío.