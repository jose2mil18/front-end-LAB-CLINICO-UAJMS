import{Examen} from './examen';
import {Paciente} from './paciente';
import {Posta} from './posta';
import {Resultado } from './resultado';
import {Persona } from './persona';
import {Examen_solicitado} from './examen_solicitado'
import { Institucion } from './institucion';
import { Factura } from './factura';
export class Solicitud{
   
paciente :Paciente;
cod_solicitud:number;
institucion:Institucion;
doctor_solicitante:Persona;
fecha:string;
fecha_entrega:string;
estado:String;
examenes:Examen[];
cedula_usuario:String;
resultados_examenes:Resultado[];
nombres_paciente:string;
examenes_solicitados:Examen_solicitado[];
area:String;
costoTotal:any;
gestion : number
factura:Factura
cod_factura:number=0;
constructor(){
    this.factura=new Factura()
    this.fecha=''
    this.fecha_entrega=''
    this.examenes_solicitados=[]
    this.examenes_solicitados[0]=new Examen_solicitado()
    this.area='';
    this.cod_solicitud=0;
    this.institucion=new Institucion();
    this.paciente=new Paciente();
    this.doctor_solicitante=new Persona();
 
    this.estado='';
    this.examenes_solicitados=[];
    this.gestion=new Date().getFullYear();
    this.paciente=new Paciente()
}
}