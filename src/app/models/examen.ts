import {Area} from './area';
import {Valor_referencia} from './valor_referencia';
import { Precio_examen } from './precio_examen';
import {Resultados_por_defecto} from './resultados_por_defecto'
export class Examen{
    cod_examen:number;
    nombre:string;
    cod_examen_padre:number;
    cod_area:number;
    valor_referencia:String;
    unidades:String;
    subexamenes: Examen[];
    area:Area;
    valores_referencia:Valor_referencia[];
    num_subexamenes:number;
    precios: Precio_examen[]
    resultados_por_defecto:Resultados_por_defecto[]
    nombre_area:string;
    valor_referencia_examen:string;
    estado:boolean;
    constructor(){
        this.estado=true;
        this.valores_referencia=[]
        this.precios=[]
        this.resultados_por_defecto=[]
        this.subexamenes=[]
        this.unidades=''
        this.cod_examen=0;
        this.nombre='';
       // this.cod_area=0;
        this.area=new Area();
        
    }
}