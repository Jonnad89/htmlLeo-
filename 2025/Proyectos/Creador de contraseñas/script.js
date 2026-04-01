// --- 1. PATRÓN MÓDULO (Encapsulamiento) ---
// Toda la lógica de negocio se envuelve en una función anónima autoejecutable 
// para mantener las variables internas privadas.
const PasswordManager = (() => {
    
    // Caracteres privados y constantes
    const CHARS = {
        minusculas: 'abcdefghijklmnopqrstuvwxyz',
        mayusculas: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
        numeros: '0123456789',
        simbolos: '!@#$%^&*()_+~`|}{[]:;?><,./-='
    };

    // Puntuación para la validación de fortaleza
    const PUNTUACION_MAXIMA = 100;
    const PUNTUACION_UMBRALES = {
        DEBIL: 30,
        MEDIA: 60,
        FUERTE: 100
    };

    // --- FUNCIONES DE GENERACIÓN ---

    function generar(largo, opciones) {
        let caracteresBase = '';
        let password = '';
        let count = 0; // Contador de tipos seleccionados

        if (opciones.incluirMinus) {
            caracteresBase += CHARS.minusculas;
            count++;
        }
        if (opciones.incluirMayus) {
            caracteresBase += CHARS.mayusculas;
            count++;
        }
        if (opciones.incluirNumeros) {
            caracteresBase += CHARS.numeros;
            count++;
        }
        if (opciones.incluirSimbolos) {
            caracteresBase += CHARS.simbolos;
            count++;
        }

        if (caracteresBase.length === 0 || count === 0) {
            return "Selecciona al menos un tipo de carácter.";
        }
        
        // Construcción de la contraseña
        for (let i = 0; i < largo; i++) {
            const randomIndex = Math.floor(Math.random() * caracteresBase.length);
            password += caracteresBase[randomIndex];
        }

        return password;
    }

    // --- FUNCIONES DE VALIDACIÓN (RegEx) ---

    function calcularFortaleza(password) {
        let score = 0;
        const largo = password.length;

        // 1. Puntos por Longitud (Máx. 30 puntos)
        // Se premia más a partir de 8 caracteres
        if (largo >= 8) score += 10;
        if (largo >= 12) score += 10;
        if (largo >= 16) score += 10;
        
        // 2. Puntos por Tipos de Caracteres (30 puntos por tipo)
        // Se usa RegEx (Expresiones Regulares) para verificar la presencia de cada tipo.
        
        // Verifica minúsculas
        if (password.match(/[a-z]/)) score += 15;
        
        // Verifica mayúsculas
        if (password.match(/[A-Z]/)) score += 15;
        
        // Verifica números
        if (password.match(/[0-9]/)) score += 15;
        
        // Verifica símbolos (escapando caracteres especiales de RegEx)
        if (password.match(/[^a-zA-Z0-9\s]/)) score += 15;

        // Limita el puntaje a un máximo de 100
        return Math.min(score, PUNTUACION_MAXIMA);
    }
    
    function obtenerMensajeFortaleza(score) {
        if (score >= PUNTUACION_UMBRALES.FUERTE) {
            return { mensaje: "¡Fortaleza: MUY FUERTE! 💪", color: "var(--color-fuerte)" };
        } else if (score >= PUNTUACION_UMBRALES.MEDIA) {
            return { mensaje: "Fortaleza: Media. ⚠️", color: "var(--color-media)" };
        } else if (score >= PUNTUACION_UMBRALES.DEBIL) {
            return { mensaje: "Fortaleza: Débil. Intenta más largo.", color: "var(--color-debil)" };
        } else {
            return { mensaje: "Fortaleza: Muy Débil.", color: "#888" };
        }
    }

    // ⭐ Interfaz Pública del Módulo ⭐
    return {
        generar: generar,
        calcularFortaleza: calcularFortaleza,
        obtenerMensajeFortaleza: obtenerMensajeFortaleza,
        PUNTUACION_MAXIMA: PUNTUACION_MAXIMA
    };
})();

// --- 2. SELECTORES DEL DOM ---
const outputInput = document.getElementById('password-output');
const copiarBtn = document.getElementById('copiar-btn');
const generarBtn = document.getElementById('generar-btn');
const barraFortaleza = document.getElementById('barra-fortaleza');
const mensajeFortaleza = document.getElementById('mensaje-fortaleza');

// Opciones
const largoInput = document.getElementById('largo');
const mayusCheckbox = document.getElementById('incluir-mayus');
const minusCheckbox = document.getElementById('incluir-minus');
const numerosCheckbox = document.getElementById('incluir-numeros');
const simbolosCheckbox = document.getElementById('incluir-simbolos');

// --- 3. FUNCIONES DE INTERFAZ Y MANEJO DE EVENTOS ---

function actualizarBarra() {
    const password = outputInput.value;
    if (password.length === 0) {
        barraFortaleza.style.width = '0%';
        barraFortaleza.style.backgroundColor = 'transparent';
        mensajeFortaleza.textContent = 'Escribe o genera una contraseña.';
        return;
    }
    
    // Usar la lógica encapsulada del Módulo
    const score = PasswordManager.calcularFortaleza(password);
    const { mensaje, color } = PasswordManager.obtenerMensajeFortaleza(score);

    const porcentaje = (score / PasswordManager.PUNTUACION_MAXIMA) * 100;

    barraFortaleza.style.width = `${porcentaje}%`;
    barraFortaleza.style.backgroundColor = color;
    mensajeFortaleza.textContent = mensaje;
}

function manejarGeneracion() {
    const opciones = {
        largo: parseInt(largoInput.value),
        incluirMayus: mayusCheckbox.checked,
        incluirMinus: minusCheckbox.checked,
        incluirNumeros: numerosCheckbox.checked,
        incluirSimbolos: simbolosCheckbox.checked,
    };

    const nuevaPassword = PasswordManager.generar(opciones.largo, opciones);
    outputInput.value = nuevaPassword;
    actualizarBarra();
}

function manejarCopia() {
    outputInput.select();
    outputInput.setSelectionRange(0, 99999); // Para móviles
    document.execCommand('copy');
    copiarBtn.textContent = '✅ Copiado!';
    setTimeout(() => {
        copiarBtn.textContent = '📋 Copiar';
    }, 1500);
}


// --- 4. ASIGNACIÓN DE LISTENERS ---
document.addEventListener('DOMContentLoaded', () => {
    // Generar contraseña al inicio para mostrar un ejemplo
    manejarGeneracion();
    
    // Evento para generar contraseña
    generarBtn.addEventListener('click', manejarGeneracion);
    
    // Evento para validar la contraseña escrita en tiempo real
    outputInput.addEventListener('input', actualizarBarra);
    
    // Eventos para actualizar la generación/validación al cambiar opciones
    [largoInput, mayusCheckbox, minusCheckbox, numerosCheckbox, simbolosCheckbox].forEach(el => {
        el.addEventListener('change', actualizarBarra); // Actualiza la fortaleza si el usuario teclea
        el.addEventListener('change', manejarGeneracion); // Genera una nueva si cambia la opción
    });

    // Evento para copiar
    copiarBtn.addEventListener('click', manejarCopia);
});