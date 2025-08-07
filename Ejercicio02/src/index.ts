class Calculadora {
    // Suma de dos números
    public sumar(a: number, b: number): number {
        return a + b;
    }

    // Resta de dos números
    public restar(a: number, b: number): number {
        return a - b;
    }

    // Multiplicación de dos números
    public multiplicar(a: number, b: number): number {
        return a * b;
    }

    // División de dos números, con validación
    public dividir(a: number, b: number): number {
        if (b === 0) {
            throw new Error("Error: No se puede dividir entre cero.");
        }
        return a / b;
    }

    // Cálculo de potencia
    public potencia(base: number, exponente: number): number {
        return Math.pow(base, exponente);
    }

    // Cálculo del factorial de un número entero no negativo
    public factorial(n: number): number {
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
