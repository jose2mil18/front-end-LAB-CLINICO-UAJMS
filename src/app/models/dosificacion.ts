export class Dosificacion{

    llave:string
    autorizacion:string;
    nro_emisiones:number;
    fecha_limite_emision:string
    fecha_registro:string
    leyenda:string;
    constructor(){
        this.leyenda=''
        this.fecha_limite_emision=''
     this.llave='';
     this.fecha_registro=''
        this.autorizacion=''
    }
}