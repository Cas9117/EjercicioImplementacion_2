import { Plataforma } from "./plataforma.js";

export class Aplicacion {
    plataformas:Plataforma[]

    constructor(plataforma?:Plataforma){
        if(plataforma){ 
        this.plataformas = [plataforma] 
        plataforma.agregarAplicacion(this)
        }else{
            this.plataformas = []
        }
    }
    agregarPlataforma(plataforma:Plataforma){
        this.plataformas.push(plataforma)
        plataforma.agregarAplicacion(this)
    }
    listaPlataformas(){
        this.plataformas.forEach((value)=>{
            console.log("Lista plataformas:",value.nombre)
        })
    }
}