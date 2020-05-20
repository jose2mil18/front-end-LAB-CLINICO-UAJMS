import {Examen} from './examen';
import { Resultados_examen } from './resultados_examen';
import {Valor} from './valor';

import { Precio_examen } from './precio_examen';
export class  Examen_solicitado{

    cod_solicitud:number;
   
    estado:String;
    fecha:Date;
    resultados_examen:Resultados_examen;
    cod_sol_exam:number;
cedula_usuario:String;
   num_subexamenes:number;
   cod_precio_examen:number;
   precio_examen:Precio_examen
constructor(){
    this.precio_examen=new Precio_examen()
  
   this.cod_precio_examen=0;
      
      this.resultados_examen= new Resultados_examen();
}
}