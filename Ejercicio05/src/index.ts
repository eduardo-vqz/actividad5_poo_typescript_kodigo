// Clase abstracta Persona
abstract class Persona {
    public nombre: string;
    public apellido: string;
    public direccion: string;
    public telefono: string;
    public edad: number;

    // Constructor para inicializar atributos
    constructor(nombre: string, apellido: string, direccion: string, telefono: string, edad: number) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.direccion = direccion;
        this.telefono = telefono;
        this.edad = edad;
    }

    // Método para verificar si es mayor de edad
    public verificarEdad(): void {
        if (this.edad >= 18) {
            console.log("Es mayor de edad.");
        } else {
            console.log("Es menor de edad.");
        }
    }

    // Método abstracto: será implementado por las subclases
    public abstract mostrarDatos(): void;
}

// Clase Empleado que hereda de Persona
class Empleado extends Persona {
    public sueldo: number = 0;

    // Método para cargar sueldo
    public cargarSueldo(sueldo: number): void {
        if (sueldo < 0) {
            console.log("El sueldo no puede ser negativo.");
        } else {
            this.sueldo = sueldo;
        }
    }

    // Método para imprimir sueldo
    public imprimirSueldo(): void {
        console.log(`Sueldo: $${this.sueldo.toFixed(2)}`);
    }

    // Implementación del método abstracto
    public mostrarDatos(): void {
        console.log("Datos del Empleado:");
        console.log(`Nombre: ${this.nombre} ${this.apellido}`);
        console.log(`Dirección: ${this.direccion}`);
        console.log(`Teléfono: ${this.telefono}`);
        console.log(`Edad: ${this.edad} años`);
    }
}

// Implementación de la clase

const empleado1 = new Empleado(
    "Juan",
    "Pérez",
    "Calle Principal #123",
    "555-1234",
    30
);

empleado1.mostrarDatos();
empleado1.verificarEdad();
empleado1.cargarSueldo(1200.50);
empleado1.imprimirSueldo();
