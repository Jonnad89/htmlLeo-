@media queries: Nos permite aplicar estilos según el tamaño de pantalla.

@media (max-width: 768){
    <!-- Estilos solo para pantallas chicas -->
}

Unidades útiles

% -> porcentaje del contenedor padre
em / rem -> relativas al tamaño de fuente (rem = raíz)
vw / vh -> porcentaje del ancho/alto de la ventana 

widht : 80%; -> 80% del contenedor
font-sizze: 1.2rem; -> relativo a la raíz (html)
height:100vh; -> 100% del alto del viewport


<!-- Keyframes y animation -->

@keyframes fadeIn {
    0% { opactity: 0; transform: translateY(20px); }
    100% { opactity: ; transform: translateY(0); }
}

.elemento {
    animation: fadeIn 1s ease-out forwards;
}