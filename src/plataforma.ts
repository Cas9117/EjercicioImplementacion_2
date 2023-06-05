import { Aplicacion } from "./aplicacion.js"
import { Canal } from "./canal.js"

export class Plataforma{
    nombre:string
    logo:string
    descripcion:string
    patrocinador:string

    aplicacion:Aplicacion | undefined
    canales:Canal[]

    constructor(nombre:string,logo:string,descripcion:string, patrocinador:string){
        this.nombre = nombre
        this.logo = logo
        this.descripcion = descripcion
        this.patrocinador = patrocinador
        this.canales = [] 
    }

    agregarCanal(canal:Canal){
        this.canales.push(canal)
        canal.agregarPlataforma(this)

    }

    agregarAplicacion(aplicacion:Aplicacion){
        this.aplicacion = aplicacion
    }

    mostrarDetalle(){
        console.log(`Nombre:${this.nombre}`)
        console.log(`Logo:${this.logo}`)
        console.log(`Descripcion:${this.descripcion}`)
        console.log(`Patrocinador:${this.patrocinador}`)

    }

    listaCanales(){
        this.canales.forEach((value)=>{
            console.log("Lista canales:",value.nombre)
        })
    }
}