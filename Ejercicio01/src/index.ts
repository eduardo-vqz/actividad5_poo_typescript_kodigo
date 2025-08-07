class CabeceraPagina {
    // Atributos privados
    private titulo: string = "";
    private color: string = "";
    private fuente: string = "";
    private alineacion: string = "";

    // Método para establecer el título, color y fuente
    public establecerEstilo(titulo: string, color: string, fuente: string): void {
        this.titulo = titulo;
        this.color = color;
        this.fuente = fuente;
    }

    // Método para establecer la alineación del título
    public alinearTitulo(alineacion: string): void {
        const alineacionesPermitidas = ["centrado", "derecha", "izquierda"];

        if (alineacionesPermitidas.includes(alineacion.toLowerCase())) {
            this.alineacion = alineacion.toLowerCase();
        } else {
            console.warn("Alineación no válida. Use: 'centrado', 'derecha' o 'izquierda'.");
        }
    }

    // Método para mostrar todas las propiedades de la cabecera
    public mostrarCabecera(): void {
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
