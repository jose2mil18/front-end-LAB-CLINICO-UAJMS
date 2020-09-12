export class Valor_referencia {
    cod_examen:number;
    valor_inicial: number;
    valor_final:number;
    tipo_persona: string
   estado:boolean;
   cod_valor_referencia:number;
   fecha:string
constructor(){
    this.fecha=''
    this.cod_valor_referencia=0
    this.estado=true;
    this.cod_examen=0;
    this.valor_inicial=0
    this.valor_final=0
    this.tipo_persona=''
}
}