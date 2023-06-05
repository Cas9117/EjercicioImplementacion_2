import { Aplicacion } from "./aplicacion.js";
import { Canal } from "./canal.js";
import { Categoria } from "./categoria.js";
import { Plataforma } from "./plataforma.js";
import { Stream } from "./stream.js";
import { Streamer } from "./streamer.js";
// 9.Agregar una plataforma.
let plataforma1 = new Plataforma("Plataforma1", "Logo plataforma1", "Descripción plataforma1", "Patrocinador plataforma1");
let aplicacion1 = new Aplicacion;
plataforma1.agregarAplicacion(aplicacion1);
aplicacion1.agregarPlataforma(plataforma1);
console.log(plataforma1);
// 11. Agregar un Streamer
let streamer1 = new Streamer("Streamer1", "descripción Streamer1", "Redes Streamer1");
console.log(streamer1);
// 10.Agregar canal & 13. Agregar canal a un Streamer
let canal1 = new Canal("Canal1", "Banner canal1", "Descripción canal1", streamer1);
console.log(canal1);
plataforma1.agregarCanal(canal1);
// 12. Agregar un stream y categoria
let categoriaAccion = new Categoria("Acción", "Acción.jpg", "Descripción categoria accción");
let stream1 = new Stream("Stream1", "04/06/2023", "20 minutos", canal1, categoriaAccion);
categoriaAccion.agregarStream(stream1);
console.log(stream1);
// 14. Agregar un stream aun Streamer
stream1.agregarStreamer(streamer1);
// 1.Mostrar el listado de plataformas. 
aplicacion1.listaPlataformas();
// 2.Mostrar el detalle de una plataforma
plataforma1.mostrarDetalle();
// 3.Mostrar el listado de canales
plataforma1.listaCanales();
// 4.Mostrar el detalle de un canal
canal1.mostrarDetalle();
// 5.Mostrar el listado de streamers
canal1.listaStreamers();
// 6.Ver el detalle de un streamer
streamer1.mostrarDetalle();
// 7.Mostrar el listado de streams
categoriaAccion.listaStreams();
// 8.Mostrar el detalle de un stream
stream1.mostrarDetalle();
