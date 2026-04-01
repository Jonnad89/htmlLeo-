//1- Clase Base: Usuario

class Usuario {
    constructor(nombre, email) {
        this.nombre = nombre;
        this.email = email;
    }

    // Método que devuelve un saludo usando Template Literals (``)
    presentarse(){
        return `Hola, mi nombre es ${this.nombre} y mi contacto es ${this.email}.`
    }
}

//2- Clase Hija: Admin (Hereda de Usuario)
class Admin extends Usuario {
    constructor(nombre, email, permisos) {
        // 'super' envia los datos al constructor del padre (Usuario)
        super(nombre,email);
        this.permisos = permisos; // Propiedad extra específica de Admin
    }

    // Método extra para mostrar los permisos 
    mostrarPermisos() {
        return `El administrador ${this.nombre} tiene acceso a: ${this.permisos.join(", ")}.`
    }
}

// --- Pruebas ---

const usuarioComun = new Usuario("Jonatan", "jona@example.com.ar");
console.log(usuarioComun.presentarse())

const administrador = new Admin("Roma", "roma@admin.com", ["borrar_usuarios", "editar_productos"])
console.log(administrador.presentarse())

console.log(administrador.mostrarPermisos())