"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Cuenta {
    // Constructor
    constructor(nombre, cantidad, tipoCuenta, numeroCuenta) {
        this.nombre = nombre;
        this.cantidad = cantidad;
        this.tipoCuenta = tipoCuenta;
        this.numeroCuenta = numeroCuenta;
    }
    // Método para depositar
    depositar() {
        if (this.cantidad < 5) {
            console.log("El valor a depositar debe ser mayor a $5.00");
        }
        else {
            console.log(`Se ha depositado correctamente: $${this.cantidad.toFixed(2)}`);
        }
    }
    // Método para retirar dinero
    retirar(valor) {
        if (valor < 5) {
            console.log("El monto mínimo a retirar es de $5.00");
            return;
        }
        if (this.cantidad <= 0 || valor > this.cantidad) {
            console.log("No hay fondos suficientes en la cuenta.");
            return;
        }
        this.cantidad -= valor;
        console.log(`Ha retirado $${valor.toFixed(2)}. Saldo restante: $${this.cantidad.toFixed(2)}`);
    }
    // Método para mostrar los datos básicos de la cuenta
    mostrarDatos() {
        console.log("Información de la Cuenta:");
        console.log(`Nombre del titular: ${this.nombre}`);
        console.log(`Tipo de cuenta: ${this.tipoCuenta}`);
        console.log(`Número de cuenta: ${this.numeroCuenta}`);
    }
}
// Implementtación de la clase
const cuenta1 = new Cuenta("Carlos Martínez", 50, "Ahorro", "0011223344");
cuenta1.mostrarDatos();
cuenta1.depositar();
cuenta1.retirar(10); // Retiro válido
cuenta1.retirar(3); // Retiro no permitido
cuenta1.retirar(100); // Retiro mayor al saldo
//# sourceMappingURL=index.js.map