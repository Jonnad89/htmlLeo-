Crear una calculadora simple que tome el total de una cuenta, calcule la propina y, opcionalmente divida el total final entre varias personas

- Manejo de inputs:  tomar el valor de tres inputs: 
Total de la cuent, porcentaje de propina (slider o select),
y número de personas

- Cálculo de propina: función principal que calcula la propina
(Total * %propina) y el total final (total + propina)

- División:  El total final debe dividirse por el número de personas y mostrar el resultado (total por persona)

- Evento clave: la actualización de todos los resultados debe ocurrir cada vez que cualquiera de los tres inputs cambie (usando el evento input o change)

div class="contenedor-calculadora"
<!-- Titulo -->

div class="controles-entrada"
    label for="cuenta-input" Total de la cuenta ($) label
    input type="number" id="cuenta-input" 
 div
div