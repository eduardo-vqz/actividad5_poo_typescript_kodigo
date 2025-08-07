"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Calculadora {
    // Suma de dos números
    sumar(a, b) {
        return a + b;
    }
    // Resta de dos números
    restar(a, b) {
        return a - b;
    }
    // Multiplicación de dos números
    multiplicar(a, b) {
        return a * b;
    }
    // División de dos números, con validación
    dividir(a, b) {
        if (b === 0) {
            throw new Error("Error: No se puede dividir entre cero.");
        }
        return a / b;
    }
    // Cálculo de potencia
    potencia(base, exponente) {
        return Math.pow(base, exponente);
    }
    // Cálculo del factorial de un número entero no negativo
    factorial(n) {
        if (n < 0) {
            throw new Error("Error: El factorial no está definido para números negativos.");
        }
        if (n === 0 || n === 1) {
            return 1;
        }
        let resultado = 1;
        for (let i = 2; i <= n; i++) {
            resultado *= i;
        }
        return resultado;
    }
}
// implementa ción
const calc = new Calculadora();
console.log("Suma:", calc.sumar(10, 5));
console.log("Resta:", calc.restar(10, 5));
console.log("Multiplicación:", calc.multiplicar(10, 5));
console.log("División:", calc.dividir(10, 2));
console.log("Potencia:", calc.potencia(2, 4));
console.log("Factorial:", calc.factorial(5));
//# sourceMappingURL=index.js.map