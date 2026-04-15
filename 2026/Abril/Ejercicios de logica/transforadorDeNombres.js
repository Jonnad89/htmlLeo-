const usuariosSucios = ["  rOmA  ", "  jonaTan Perez  ", "maYra ", "     LUcas      gomez       "];

const limpiarUsuarios = (lista) => {
    return lista.map(nombreCompleto => {
        // Sacamos espacios extra y pasamos a minusculas
        const limpio = nombreCompleto.trim().toLowerCase();

        // Ponemos la primera letra en Mayúsculas (Capitalizar)
        // .charAt(0).toUpperCase() agarra la primera y la agranda
        // .slice(1) agarra el resto del nombre
        const formateado = limpio.charAt(0).toUpperCase() + limpio.slice(1);

        return {
            original : nombreCompleto,
            formateado : formateado,
            letras : limpio.replace(/\s+/g, '').length // Contamos letras sin espacios
        };
    });
};

const resultado = limpiarUsuarios(usuariosSucios);
console.table(resultado);
