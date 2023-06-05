import { Plataforma } from "./plataforma.js"
import { Stream } from "./stream.js"
import { Streamer } from "./streamer.js"

export class Canal{
    nombre:string
    banner:string
    descripcion:string

    plataforma:Plataforma | undefined
    streamer:Streamer
    streamings:Stream[]
        
    constructor(nombre:string, banner:string,descripcion:string, streamer:Streamer){
    this.nombre = nombre
    this.banner = banner
    this.descripcion = descripcion
    this.streamer = streamer
    streamer.agregarCanal(this)
    this.streamings = []
    }

    agregarPlataforma(plataforma:Plataforma){
        this.plataforma = plataforma
    }
    agregarStream(stream:Stream){
        this.streamings.push(stream)
    }
    mostrarDetalle(){
        console.log(`Nombre:${this.nombre}`)
        console.log(`Banner:${this.banner}`)
        console.log(`Descripcion:${this.descripcion}`)
    }

    listaStreamers(){
        this.streamings.forEach((value)=>{
            console.log("Lista Streamers:",value.streamer)
        })
    
    }
}