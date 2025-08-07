"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Clase abstracta Persona
class Persona {
    // Constructor para inicializar atributos
    constructor(nombre, apellido, direccion, telefono, edad) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.direccion = direccion;
        this.telefono = telefono;
        this.edad = edad;
    }
    // Método para verificar si es mayor de edad
    verificarEdad() {
        if (this.edad >= 18) {
            console.log("Es mayor de edad.");
        }
        else {
            console.log("Es menor de edad.");
        }
    }
}
// Clase Empleado que hereda de Persona
class Empleado extends Persona {
    constructor() {
        super(...arguments);
        this.sueldo = 0;
    }
    // Método para cargar sueldo
    cargarSueldo(sueldo) {
        if (sueldo < 0) {
            console.log("El sueldo no puede ser negativo.");
        }
        else {
            this.sueldo = sueldo;
        }
    }
    // Método para imprimir sueldo
    imprimirSueldo() {
        console.log(`Sueldo: $${this.sueldo.toFixed(2)}`);
    }
    // Implementación del método abstracto
    mostrarDatos() {
        console.log("Datos del Empleado:");
        console.log(`Nombre: ${this.nombre} ${this.apellido}`);
        console.log(`Dirección: ${this.direccion}`);
        console.log(`Teléfono: ${this.telefono}`);
        console.log(`Edad: ${this.edad} años`);
    }
}
// Implementación de la clase
const empleado1 = new Empleado("Juan", "Pérez", "Calle Principal #123", "555-1234", 30);
empleado1.mostrarDatos();
empleado1.verificarEdad();
empleado1.cargarSueldo(1200.50);
empleado1.imprimirSueldo();
//# sourceMappingURL=index.js.map