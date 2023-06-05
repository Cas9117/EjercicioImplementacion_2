export class Plataforma {
    constructor(nombre, logo, descripcion, patrocinador) {
        this.nombre = nombre;
        this.logo = logo;
        this.descripcion = descripcion;
        this.patrocinador = patrocinador;
        this.canales = [];
    }
    agregarCanal(canal) {
        this.canales.push(canal);
        canal.agregarPlataforma(this);
    }
    agregarAplicacion(aplicacion) {
        this.aplicacion = aplicacion;
    }
    mostrarDetalle() {
        console.log(`Nombre:${this.nombre}`);
        console.log(`Logo:${this.logo}`);
        console.log(`Descripcion:${this.descripcion}`);
        console.log(`Patrocinador:${this.patrocinador}`);
    }
    listaCanales() {
        this.canales.forEach((value) => {
            console.log("Lista canales:", value.nombre);
        });
    }
}
