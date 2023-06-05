import { Canal } from "./canal.js"
import { Categoria } from "./categoria.js"
import { Streamer } from "./streamer.js"

export class Stream{
    nombre:string
    fecha:string
    duracion:string

    canal:Canal
    categorias:Categoria[]
    streamer:Streamer[]

    constructor(nombre:string,fecha:string, duracion:string, canal:Canal,categorias:Categoria){
        this.nombre = nombre
        this.fecha = fecha
        this.duracion = duracion
        this.canal = canal
        canal.agregarStream(this)
        this.categorias = [categorias]
        this.streamer = []
    }

    agregarCategoria(categoria:Categoria){
        this.categorias.push(categoria)

    }
    agregarStreamer(streamer:Streamer){
        this.streamer.push(streamer)
        streamer.agregarStream(this)
    }
    mostrarDetalle(){
        console.log(`Nombre:${this.nombre}`)
        console.log(`Fecha:${this.fecha}`)
        console.log(`Duración:${this.duracion}`)
        
    }
}