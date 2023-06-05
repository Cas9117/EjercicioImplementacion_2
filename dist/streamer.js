export class Streamer {
    constructor(nickname, descripcion, redesSociales) {
        this.nickname = nickname;
        this.descripcion = descripcion;
        this.redesSociales = redesSociales;
        this.canales = [];
        this.stream = [];
    }
    agregarCanal(canal) {
        this.canales.push(canal);
    }
    agregarStream(stream) {
        this.stream.push(stream);
    }
    mostrarDetalle() {
        console.log(`Nick Name:${this.nickname}`);
        console.log(`Descripción:${this.descripcion}`);
        console.log(`Redes Sociales:${this.redesSociales}`);
    }
}
