
import { LowerCasePipe, TitleCasePipe, UpperCasePipe, DatePipe } from '@angular/common';
export class Persona{
   cod_persona:number;
    nombre:string;
    ap:string;
    am:string;
    tipo:string
    apellidos:string;
    private titleCasePipe:TitleCasePipe
    constructor(){
        this.apellidos=this.ap+this.am
        this.cod_persona=0;
        this.nombre="";
        this.ap="";
        this.am="";
        this.tipo="";
        //this.nombre=this.titleCasePipe.transform(this.nombre)
        
        //this.ap=this.titleCasePipe.transform(this.ap)
    }
}