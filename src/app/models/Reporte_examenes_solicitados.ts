import { Precio_examen } from "./precio_examen";
import { Institucion } from "./institucion";
import { Solicitud } from "./solicitud";

export class Reporte_examenes_solicitados {
    precio_examen:Precio_examen;
    nro_prestaciones:number
solicitud:Solicitud;
grupo:string// es el item por el que queremos agrupar
constructor(){
    this.grupo="";
  


}
}