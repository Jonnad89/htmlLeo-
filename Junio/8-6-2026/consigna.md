La app simula un tablero de control de un garage. El usuario elige qué tipo de vehículo va a estacionar, inicia el reloj, y veamos cómo el costo sube por cada segundo que pasa.

Paso 1: La Base del HTML

Un título h1 que diga: "Leo-Parking Control".

Un menú desplegable (select) para elegir el vehículo:

Opción 1: Auto (Tarifa: $10 por segundo)

Opción 2: Camioneta (Tarifa: $20 por segundo)

Dos botones: "Iniciar Estadía 🟢" y "Cobrar y Salir 🔴".

Dos pantallas de estado (h2):

Una que muestre el Tiempo Transcurrido (empieza en 0 segundos).

Otra que muestre el Total a Pagar (empieza en $0).

Paso 2: Las Variables en JavaScript 
Para manejar el tiempo en vivo, vas a necesitar usar una función nativa de JavaScript llamada setInterval (que es el hermano mayor del setTimeout que ya usamos, pero este se ejecuta repetidamente cada 1 segundo).

Necesitamos estas variables arriba de todo:


let segundos = 0;
let costoTotal = 0;
let reloj; // 🚨 Variable vacía que va a guardar el temporizador vivo
Paso 3: El Botón de Iniciar Estadía (El Reloj en vivo)
Cuando se hace click en "Iniciar Estadía":

El botón lee el valor del select para saber si es Auto o Camioneta.

Definimos el precio según la elección (ej: con un if).

Arranca el reloj: Usamos setInterval para que cada 1000 milisegundos (1 segundo) pase lo siguiente de forma automática:

La variable segundos suma 1.

El costoTotal suma el precio correspondiente.

Se actualizan las pantallas de tiempo y costo en el HTML.

Paso 4: El Botón de Cobrar y Salir (Frenar el tiempo)
Cuando se hace click en "Cobrar y Salir":

El sistema tiene que frenar el reloj para que dejen de correr los segundos. Esto lo va a hacer con una función mágica llamada clearInterval(reloj);.

Lanza un alert() definitivo que diga: "Estadía finalizada. Tiempo: X segundos. Total a abonar: $Y".

Resetea las variables a 0 y limpia las pantallas para el próximo cliente.
