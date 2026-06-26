
const botonesFiltro = document.querySelectorAll('.btn-filtro');
const tarjetasProyectos = document.querySelectorAll('.tarjeta-proyecto');


botonesFiltro.forEach(boton => {
    
    boton.addEventListener('click', () => {
        
        // A. Cambiar la clase "activo" visualmente al botón clickeado
        document.querySelector('.btn-filtro.activo').classList.remove('activo');
        boton.classList.add('activo');

        // B. Capturamos la categoría que el usuario quiere ver (todos, juegos o bancos)
        const categoriaSeleccionada = boton.getAttribute('data-categoria');

        // C. Filtramos las tarjetas de los proyectos
        tarjetasProyectos.forEach(tarjeta => {
            // Buscamos qué tipo de proyecto es la tarjeta actual
            const tipoProyecto = tarjeta.getAttribute('data-tipo');

            // CONDICIONAL LÓGICO DE FILTRADO
            if (categoriaSeleccionada === "todos" || categoriaSeleccionada === tipoProyecto) {
                // Si coincide o eligió 'todos', le sacamos la clase que lo oculta
                tarjeta.classList.remove('ocultar');
            } else {
                // Si no coincide, le agregamos la clase que tiene "display: none" en CSS
                tarjeta.classList.add('ocultar');
            }
        });

    });

});