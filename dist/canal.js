export class Canal {
    constructor(nombre, banner, descripcion, streamer) {
        this.nombre = nombre;
        this.banner = banner;
        this.descripcion = descripcion;
        this.streamer = streamer;
        streamer.agregarCanal(this);
        this.streamings = [];
    }
    agregarPlataforma(plataforma) {
        this.plataforma = plataforma;
    }
    agregarStream(stream) {
        this.streamings.push(stream);
    }
    mostrarDetalle() {
        console.log(`Nombre:${this.nombre}`);
        console.log(`Banner:${this.banner}`);
        console.log(`Descripcion:${this.descripcion}`);
    }
    listaStreamers() {
        this.streamings.forEach((value) => {
            console.log("Lista Streamers:", value.streamer);
        });
    }
}
