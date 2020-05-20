import {Persona} from './persona';
export class Personal{
   cedula:String;
   profesion:string;
   persona:Persona;
   cod_persona:number
   foto:string;
   archivo:File;
   constructor(){
     this.archivo=null;
     this.foto='';
     this.profesion=''
     
     this.cedula=''
     
     this.cod_persona=0;
     this.persona=new Persona()

   }
 }