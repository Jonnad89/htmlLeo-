¿Qué vas a construir exactamente?

1. Interfaz Split-Screen (Pantalla Dividida):
Panel Izquierdo (Editor): Un formulario organizado para ingresar tus datos personales
 (Nombre, Rol, Biografía, Foto URL, Email, GitHub/LinkedIn), un selector de temas 
 visuales y un gestor de habilidades.Panel Derecho (Lienzo / Previsualizador): 
 Una tarjeta/CV interactivo que se actualiza al milisegundo a medida que escribís en el editor.
 
 2. Funcionalidades y Lógica en JavaScript:Actualización en Tiempo Real: 
 Usá el evento input en los campos del formulario para que el texto de la vista previa cambie mientras vas tipeando.Módulo Dinámico de Habilidades (Skills): Un campo de texto + un botón "Agregar" para incorporar tecnologías a un array. Cada habilidad debe renderizarse como una etiqueta con su barra de nivel en la vista previa y debe incluir un botón de eliminación ($X$).Selector de Temas Visuales: 
 Botones para cambiar entre 3 temas CSS distintos: 
 Minimalista Moderno, Dark Neón y Ejecutivo Premium. Al tocar un botón, debe cambiar la clase del lienzo para aplicar colores y tipografías completamente diferentes.Exportación a PDF: 
 Un botón "Exportar / Imprimir PDF" que dispare window.print().
 
  