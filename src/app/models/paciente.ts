import {Persona} from './persona';
import {Examen_solicitado} from './examen_solicitado'
export class Paciente {
    examenes_solicitados:Examen_solicitado[]
    cedula : string;
    
    procedencia:string;
    sexo:string;
    edad:number;
    cedula_usuario:string;
    fnac:'';
    correo_electronico : string;
   nombres:string;
    persona:Persona;
   constructor(){
       this.fnac=''
       this.cedula='';
       this.persona=new Persona();
       
   }

}