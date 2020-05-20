import {Valor} from './valor'
import {Examen} from './examen'
export class Resultados_examen{
    cod_resultados_examen:number;
   cod_sol_exam:number;
    cod_examen:number;
 
    valores:Valor[]=[];
    examen:Examen
    resultados_examenes:Resultados_examen[]=[];
    constructor(){
        this.cod_sol_exam=0;
        this.cod_examen=0;
        this.examen=new Examen()
    
        this.valores=[];
        this.valores[0]=new Valor();
        this.valores[0].valor=''
    }
}