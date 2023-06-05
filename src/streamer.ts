import { Canal } from "./canal.js"
import { Stream } from "./stream.js"

export class Streamer{
    nickname:string
    descripcion:string
    redesSociales:string

    canales:Canal[]
    stream:Stream[]

    constructor(nickname:string, descripcion:string, redesSociales:string){
        this.nickname = nickname
        this.descripcion = descripcion
        this.redesSociales = redesSociales
        this.canales   =  []       
        this.stream = [] 
    }

    agregarCanal(canal:Canal){
        this.canales.push(canal)
    }
    agregarStream(stream:Stream){
        this.stream.push(stream)
    }
    mostrarDetalle(){
        console.log(`Nick Name:${this.nickname}`)
        console.log(`Descripción:${this.descripcion}`)
        console.log(`Redes Sociales:${this.redesSociales}`)
        
    }
}