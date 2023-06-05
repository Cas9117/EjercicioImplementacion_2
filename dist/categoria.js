export class Categoria {
    constructor(nombre, imagen, descripcion) {
        this.nombre = nombre;
        this.imagen = imagen;
        this.descripcion = descripcion;
        this.streams = [];
    }
    agregarStream(stream) {
        this.streams.push(stream);
    }
    listaStreams() {
        this.streams.forEach((value) => {
            console.log("Lista Streams:", value.nombre);
        });
    }
}
