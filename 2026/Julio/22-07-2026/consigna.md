Desafío Front-End: Sistema de Turnos Médicos (Estilo iOS)
El objetivo de este proyecto es construir una aplicación web para la reserva de turnos en una clínica médica. El desafío no es solo que funcione perfecto, sino que logres una interfaz UX/UI moderna, minimalista y elegante, inspirada en el sistema operativo de los iPhone (iOS).

🎨 El Estilo Visual (Apple / iOS UI)
Para lograr ese look & feel impecable de iPhone, tenés que cuidar estos detalles en tu CSS:

Fondos suaves: Fondo general en gris claro (#F2F2F7) y tarjetas en blanco puro.

Esquinas muy redondeadas: Tarjetas con border-radius de 18px a 24px y botones redondeados.

Colores funcionales iOS:

🟢 Verde iOS (#34C759): Para indicar días o turnos disponibles.

🔴 Rojo iOS (#FF3B30): Para indicar días llenos o horarios ocupados.

🔵 Azul iOS (#007AFF): Para elementos seleccionados y el botón principal.

📋 Requisitos de la Aplicación
1. Selector de Especialista
Debe haber un menú desplegable (<select>) para cambiar entre al menos dos médicos (por ejemplo: Cardiología y Pediatría).

Al cambiar de médico, toda la pantalla (días y horarios) debe actualizarse automáticamente para mostrar la disponibilidad específica de ese profesional.

2. Calendario del Mes
Tenés que mostrar una grilla con los días del mes.

Cada día debe tener un indicador visual (punto):

🟢 Punto verde: Si el día tiene al menos un horario libre.

🔴 Punto rojo: Si el día está 100% lleno (todos los horarios ocupados).

Al hacer click en un día, debe quedar remarcado en azul y cargar sus horarios en la sección inferior.

3. Grilla de Horarios (9:00 a 17:00 hs)
Se deben mostrar los turnos hora por hora (09:00, 10:00, 11:00, etc.).

Estado Disponible (🟢 Verde suave): Botón clickeable para seleccionar el turno.

Estado Ocupado (🔴 Rojo suave): Botón deshabilitado que indique que el turno ya fue tomado.

Solo se puede seleccionar un horario a la vez.

4. Acción de Reserva y Confirmación
El botón principal "Reservar Turno" debe arrancar deshabilitado y solo activarse cuando se haya seleccionado un horario disponible.

Al hacer click en "Reservar":

El horario seleccionado debe pasar a estar ocupado (rojo) inmediatamente.

Si ese era el último turno libre del día, el indicador del día en el calendario debe pasar a rojo.

Debe mostrarse un cartel/toast flotante confirmando la reserva con el médico, día y hora elegidos.

💡 Pistas para la Lógica en JavaScript
Estructura los datos: Creá un objeto inicial que simule la "base de datos" de los médicos y sus horarios ocupados por cada día.

Mantené variables de estado: Guardá en variables simples qué médico está seleccionado, qué día se tocó y qué hora se eligió.

Renderizado modular: Creá funciones separadas para dibujar los días (renderizarDias()) y los horarios (renderizarHorarios()), y llamalas cada vez que el usuario cambie alguna opción.