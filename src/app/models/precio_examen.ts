import {Examen} from "./examen"
export class Precio_examen{
    cod_institucion:String;

cod_precio_examen:number;

 cod_examen:number;
costo:number;
examen :Examen;
estado:boolean;
constructor(){
    this.cod_precio_examen=0
    this.estado=true;
    this.costo=0
    this.examen=new Examen();
    this.cod_institucion="";


}
}