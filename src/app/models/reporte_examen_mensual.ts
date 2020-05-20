import { Precio_examen } from "./precio_examen";
import { Institucion } from "./institucion";

export class Reporte_examen_mensual {
    precio_examen:Precio_examen;
    nro_prestaciones:number
institucion:Institucion;
anio:number;
mes:number;
constructor(){
    this.institucion=new Institucion();
    this.anio=(new Date()).getFullYear();
    this.mes=(new Date()).getMonth()+1;

}
}