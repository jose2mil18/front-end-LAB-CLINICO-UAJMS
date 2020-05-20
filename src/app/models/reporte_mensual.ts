import { Precio_examen } from "./precio_examen";
import { Institucion } from "./institucion";
import { Reporte_examen_mensual } from "./reporte_examen_mensual";

export class Reporte_mensual {
    nro_prestaciones:number;
    monto:number;
institucion:Institucion;
reportes_examenes_mensual: Reporte_examen_mensual[];
anio:number;
mes:number;
constructor(){
    this.institucion=new Institucion();
    this.anio=(new Date()).getFullYear();
    this.mes=(new Date()).getMonth()+1;

}
}