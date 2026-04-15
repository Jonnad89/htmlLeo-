const validarPassword = (pass) => {
    const caracteresEspeciales = ["#", "$", "%", "&"];

    // Validar largo
    const largoCorrecto = pass.length >= 8;

    // Validar que no diga password
    const noEsObvia = !pass.toLowerCase().includes("password");

    // Validar carácter especial usando .some()
    const tieneEspecial = caracteresEspeciales.some(caracter => pass.includes(caracter));

    if ( largoCorrecto && noEsObvia && tieneEspecial ) {
        return "Contraseña Segura";
    } else {
        return "Contraseña debil (No cumple con los requisitos)"
    }
};

console.log(validarPassword("hola123"));
console.log(validarPassword("miPassword#12"));
console.log(validarPassword("RomaCoder%2026"));
