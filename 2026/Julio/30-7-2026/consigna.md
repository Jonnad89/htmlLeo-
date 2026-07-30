Objetivo:
Construir un catálogo interactivo de películas donde el usuario pueda explorar títulos en tendencia, agregarlos a una lista de Favoritos (guardada en el navegador para que no se pierda al recargar) y un botón para Compartir la película con sus amigos.

La URL de la API para el fetch()
Para traer las películas más populares, podés usar esta API pública y gratuita de la comunidad de OMDb / Sample APIs (no requiere token ni registros raros y tiene portadas reales en alta calidad):

https://api.sampleapis.com/movies/animation

(Si preferís películas de acción, podés cambiar /animation por /action-adventure o /classic en la misma URL).

Requisitos de la App
Estilo Visual (iOS Dark Mode):

Usar tarjetas blancas/oscuras con sombras suaves y esquinas bien redondeadas (border-radius: 18px a 24px).

Paleta con el clásico Azul iOS (#007AFF), Rojo Carmesí (#FF3B30) para favoritos y fondos traslúcidos.

JavaScript y Funcionalidades:

fetch(): Consultar la API para renderizar las películas con su título, póster/imagen e información.

Botonera en cada Película:

Boton Favorito: Guarda la película en localStorage. Si ya está en favoritos, al hacer click la saca y cambia el estado visual del corazón.

Boton Compartir: Usa la API nativa navigator.share() (o navigator.clipboard.writeText()) para copiar el enlace/título al portapapeles y lanzar un cartel de aviso (Toast style iOS).

Filtro / Pestañas: Un selector o botones arriba para cambiar entre "Todas" y "Mis Favoritas".