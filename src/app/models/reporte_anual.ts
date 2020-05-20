import { Precio_examen } from "./precio_examen";
import { Institucion } from "./institucion";
import { Reporte_examen_mensual } from "./reporte_examen_mensual";
import {Reporte_mensual} from "./reporte_mensual"

export class Reporte_anual {
    nro_prestaciones_total:number;
    monto_total:number;
institucion:Institucion;
reportes_mensuales: Reporte_mensual[];
anio:number;

constructor(){
    this.institucion=new Institucion();
    this.anio=(new Date()).getFullYear();


}
}