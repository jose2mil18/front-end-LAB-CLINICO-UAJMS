import {Persona} from './persona';
export class Personal{
   cedula:string;
   profesion:string;
   persona:Persona;
   cod_persona:number
   foto:string;
   archivo:File;
   link_foto:string
   constructor(){
     this.archivo=null;
     this.foto='';
     this.profesion=''
     
     this.cedula=''
     
     this.cod_persona=0;
     this.persona=new Persona()

   }
 }