import { Stream } from "./stream.js"

export class Categoria{
    nombre:string
    imagen:string
    descripcion:string

    streams:Stream[]
    
    constructor(nombre:string,imagen:string, descripcion:string){
        this.nombre = nombre
        this.imagen = imagen
        this.descripcion = descripcion
        this.streams = []
    }

    agregarStream(stream:Stream){
        this.streams.push(stream)

    }
    listaStreams(){
        this.streams.forEach((value)=>{
            console.log("Lista Streams:",value.nombre)
        })
    }
}