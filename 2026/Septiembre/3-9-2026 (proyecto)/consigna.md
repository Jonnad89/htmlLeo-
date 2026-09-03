Desafío de Desarrollo: Mini-App Persistente
Plazo de entrega: Lunes 7.

Objetivo: Aplicar maquetado semántico, manipulación del DOM, manejo de arrays/objetos, eventos y persistencia de datos con localStorage.

Paso 1: Elegí tu proyecto (Seleccioná 1 opción)
Podés elegir la temática que más te guste para trabajar:

Opción A: Gestor de Tareas/Proyectos (To-Do App Avanzada)

Una app para registrar tareas pendientes, marcarlas como completadas y borrarlas.

Opción B: Control de Gastos Personales

Una app para ingresar ingresos/egresos de dinero, listar los movimientos y mostrar un total acumulado.

Opción C: Catalogo de Favoritos (Películas, Canciones o Juegos)

Una lista donde puedas agregar títulos con su categoría/género, marcarlos como favoritos y borrarlos.

Paso 2: Requisitos Técnicos Obligatorios (Checklist)
Tu aplicación debe cumplir sí o sí con los siguientes 5 puntos:

Estructura y Estilos (HTML & CSS):

Usar etiquetas semánticas (<main>, <section>, <ul>, etc.).

Diseño limpio y ordenado usando Flexbox o Grid.

Contenedores con anchos máximos (max-width) y centrados.

Manejo del Estado y DOM:

Toda la información debe almacenarse en un Array de Objetos dentro de JavaScript (ej: [{ id: 1, texto: "Estudiar", completado: false }]).

El Estado manda: La pantalla se dibuja mediante una función de renderizado que recorre tu array.

Interacción y Eventos:

Formulario con input y botón para agregar nuevos ítems.

Validación: No permitir agregar elementos vacíos (limpiar con .trim()).

Botón para eliminar un elemento individual de la lista.

Persistencia de Datos (LocalStorage):

Al agregar o eliminar un elemento, el array debe guardarse en localStorage usando JSON.stringify().

Al cargar o recargar la página (F5), la app debe leer los datos de localStorage con JSON.parse() y dibujarlos automáticamente.

Botón de Limpieza General:

Incluir un botón especial para "Borrar Todo" que limpie la memoria con localStorage.removeItem() y vacíe la lista en pantalla.

Paso 3: Criterio de Entrega
Código organizado en 3 archivos separados: index.html, style.css y app.js.

Código comentado explicando qué hace cada función principal.