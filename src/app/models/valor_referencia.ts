export class Valor_referencia {
    cod_examen:number;
    valor_inicial: number;
    valor_final:number;
    tipo_persona: String
   estado:boolean;
   cod_valor_referencia:number;
constructor(){
    this.cod_valor_referencia=0
    this.estado=true;
    this.cod_examen=0;
    this.valor_inicial=0
    this.valor_final=0
    this.tipo_persona=''
}
}