import {Examen} from "./examen"
import { Institucion} from "./institucion"
export class Precio_examen{
    cod_institucion:string;

cod_precio_examen:number;

 cod_examen:number;
costo:number;
examen :Examen;
estado:boolean;
institucion:Institucion;
constructor(){
    this.institucion=new Institucion;
    this.cod_precio_examen=0
    this.estado=true;
    this.costo=0
    this.examen=new Examen();
    this.cod_institucion="";


}
}