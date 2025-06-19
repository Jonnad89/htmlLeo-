/styles/
|
|- base.css  -> resets ( *{box-sizing, maring y padding} ), tipografía, variables
|- layout.css  -> estructuras como header, footer, grid
|- components.css -> transiciones, keyframes
|- main.css -> @import de los anteriores

ejemplo en main.css
@import url("base.css")
@import url(layout.css")
@import url("components.css")
@import url("animation.css")

** Buenas prácticas CSS
- Usar nombres descriptivos
- Separar estructura y diseño
- Evitar repetir estilos
- Reutilizar componentes con BEM
- Agrupar por propósito (layout, componentes, animaciones, etc)
- Usar variables (:root) para colores, tamaños, fuentes

