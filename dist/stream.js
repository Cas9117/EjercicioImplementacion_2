export class Stream {
    constructor(nombre, fecha, duracion, canal, categorias) {
        this.nombre = nombre;
        this.fecha = fecha;
        this.duracion = duracion;
        this.canal = canal;
        canal.agregarStream(this);
        this.categorias = [categorias];
        this.streamer = [];
    }
    agregarCategoria(categoria) {
        this.categorias.push(categoria);
    }
    agregarStreamer(streamer) {
        this.streamer.push(streamer);
        streamer.agregarStream(this);
    }
    mostrarDetalle() {
        console.log(`Nombre:${this.nombre}`);
        console.log(`Fecha:${this.fecha}`);
        console.log(`Duración:${this.duracion}`);
    }
}
