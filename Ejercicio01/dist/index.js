"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class CabeceraPagina {
    constructor() {
        // Atributos privados
        this.titulo = "";
        this.color = "";
        this.fuente = "";
        this.alineacion = "";
    }
    // Método para establecer el título, color y fuente
    establecerEstilo(titulo, color, fuente) {
        this.titulo = titulo;
        this.color = color;
        this.fuente = fuente;
    }
    // Método para establecer la alineación del título
    alinearTitulo(alineacion) {
        const alineacionesPermitidas = ["centrado", "derecha", "izquierda"];
        if (alineacionesPermitidas.includes(alineacion.toLowerCase())) {
            this.alineacion = alineacion.toLowerCase();
        }
        else {
            console.warn("Alineación no válida. Use: 'centrado', 'derecha' o 'izquierda'.");
        }
    }
    // Método para mostrar todas las propiedades de la cabecera
    mostrarCabecera() {
        console.log("=== Cabecera de la Página ===");
        console.log(`Título: ${this.titulo}`);
        console.log(`Color: ${this.color}`);
        console.log(`Fuente: ${this.fuente}`);
        console.log(`Alineación: ${this.alineacion}`);
    }
}
// Implementación
const miCabecera = new CabeceraPagina();
miCabecera.establecerEstilo("Bienvenidos", "azul", "Arial");
miCabecera.alinearTitulo("centrado");
miCabecera.mostrarCabecera();
//# sourceMappingURL=index.js.map