"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Cancion {
    // Constructor que recibe título y género
    constructor(titulo, genero) {
        this.autor = "";
        this.titulo = titulo;
        this.genero = genero;
    }
    // Setter para el autor
    setAutor(nombre) {
        this.autor = nombre;
    }
    // Getter para el autor
    getAutor() {
        return this.autor;
    }
    // Método para mostrar todos los datos de la canción
    mostrarCancion() {
        console.log("Información de la Canción");
        console.log(`Título: ${this.titulo}`);
        console.log(`Género: ${this.genero}`);
        console.log(`Autor: ${this.getAutor()}`);
    }
}
// Implementación de la clase
const cancion1 = new Cancion("Bohemian Rhapsody", "Rock");
cancion1.setAutor("Freddie Mercury");
cancion1.mostrarCancion();
//# sourceMappingURL=index.js.map