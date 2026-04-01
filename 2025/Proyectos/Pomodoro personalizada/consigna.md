Aplicación de Pomodoro Personalizada (Focus Timer). 🍅

Consigna del Proyecto: Aplicación de Pomodoro Personalizada
Crea una aplicación de productividad basada en la técnica Pomodoro (trabajo/descanso) que permita al usuario configurar la duración de los intervalos y muestre el progreso visualmente.

1. Elementos y Estructura (JS)
Componente	Requisito Principal	Habilidades a Desarrollar
Control del Tiempo	Implementar setInterval y clearInterval para manejar el timer.	Asincronía básica y precisión en la cuenta regresiva.
Gestión de Estados	La aplicación debe cambiar automáticamente entre los estados "Focus", "Break (Corto)" y "Break (Largo)".	Lógica de ciclos y condicionales (if/else o switch).
Configuración	Permitir al usuario ingresar nuevos valores para la duración de los intervalos (ej. 25 min de foco, 5 min de descanso).	Captura y validación de inputs numéricos.
Alarma (Opcional)	Emitir un sonido o vibración simple al finalizar un intervalo (usando new Audio()).	Interacción con APIs del navegador.

Exportar a Hojas de cálculo
2. Elemento Visual Clave (CSS/UX)
Barra de Progreso Circular: Crea un círculo o anillo que se vacía gradualmente a medida que el tiempo pasa. Esto es un excelente desafío de CSS (transform: rotate, conic-gradient o SVG) y JS (actualización de estilos en tiempo real).

** pistas html
contenedor-pomodoro
h1
display-principal
h2 #estado-actual
#barra-progreso barra-progreso
#tiempo-display tiempo-display

configuracion
h3
grupo-config
label for foco-min
input number #foco-mn value 25 min 1

grupo-config
label for descanso-corto-min
input number #descanso-corto-min value 5 min 1

grupo-config
label for descanso-largo-min
input number #descanso-largo-min value 15 min 1


