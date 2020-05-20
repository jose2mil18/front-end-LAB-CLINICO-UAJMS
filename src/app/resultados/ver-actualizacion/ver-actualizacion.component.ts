import { Component, OnInit } from '@angular/core';

import {ResultadosService} from '../resultados.service'
import { Solicitud , Examen, Resultado, Examen_solicitado, Resultados_por_defecto, Usuario} from '../../models';
import { routerNgProbeToken } from '@angular/router/src/router_module';

import { Router, ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-ver-actualizacion',
  templateUrl: './ver-actualizacion.component.html',
  styleUrls: ['./ver-actualizacion.component.css']
})
export class VerActualizacionComponent implements OnInit {

  resultado:Resultado;
  array:String[];

  examenSolicitado:Examen_solicitado
  examenesfiltradosporcaracter: Resultados_por_defecto[]=[];
  jeison;
  qtd:string[];
    form;
    words;
    
    solicitudSinResultado:Solicitud;
    cod_examen;
    subexamenes:Examen[];
    public contador:number;
    a:String;
   
    guardarUnRegistrodeSubExamen(value){

    }
   result:String[];
   caden:String;

resultadosDeExam;
indices:number;
coment;

currentUser:Usuario
indice:number=0;
    constructor(private resultadosService:ResultadosService, private router:Router) { 
      
    this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
      this.array=[]
      this.array[0]=''
      this.indices=0;
      this.resultado=new Resultado();
      this.jeison={};
      this.caden="";
      this.result=[]
      this.qtd=['a','b','c', 'd']
      this.a='';
      this.coment='';

  this.contador=0;
    
    
     console.log( new Date())
      this.solicitudSinResultado = JSON.parse(localStorage.getItem('solicitudesConResultadosaModificar'));
      
      this.examenSolicitado = JSON.parse(localStorage.getItem('ExamenSolicitado'));
      console.log(this.examenSolicitado)
      this.resultadosDeExam=this.solicitudSinResultado.resultados_examenes
    this.solicitudSinResultado.resultados_examenes=[]
      console.log(this.solicitudSinResultado)
     // this.form.examenes=this.solicitudSinResultado.examenes;
     this.cod_examen="selecciona"
  
      //resultadosService.getAnalisisSinResultadosporcodigo(3).subscribe(data => {
      //  this.analisisSinResultado=data;
      //});
    }
  
    ngOnInit() { }
    listarsubexamenes(){
  
      this.subexamenes=[];
      //cambiando tamaño de oloos subexamenes
      this.solicitudSinResultado.examenes_solicitados[this.indice].resultados_examen.cod_examen=this.solicitudSinResultado.examenes_solicitados[this.indice].precio_examen.cod_examen
      this.solicitudSinResultado.examenes_solicitados[this.indice].resultados_examen.cod_sol_exam=  this.solicitudSinResultado.examenes_solicitados[this.indice].cod_sol_exam
      
      if(this.solicitudSinResultado.examenes_solicitados[this.indice].precio_examen.examen.subexamenes.length == 0)
        {
          this.subexamenes[0]=this.solicitudSinResultado.examenes_solicitados[this.indice].precio_examen.examen
          
      }
        else{
         // this.subexamenes=examensito.subexamenes;
      this.subexamenes=this.solicitudSinResultado.examenes_solicitados[this.indice].precio_examen.examen.subexamenes
        }
      
       
       
      }
  
  
  
      guardarresultados(){
        this.solicitudSinResultado.examenes_solicitados[this.indice].cedula_usuario=this.currentUser.cedula
        console.log(this.solicitudSinResultado.examenes_solicitados[this.indice])
        this.resultadosService.modificarResultados(this.solicitudSinResultado.examenes_solicitados[this.indice]).subscribe(
          solicitud => {
            alert("resultados actualizados")
            console.log(solicitud)
            //this.indice=0
           // this.solicitudSinResultado=solicitud
           // this.listarsubexamenes();
        
              this.router.navigate(['/resultados/ver']);
            
          })

  }
  kambio_valor(cod_examen, caracter) { 
    console.log(cod_examen+" "+caracter)
    this.resultadosService.obtener_valores__por_defecto_examnes(cod_examen,caracter).subscribe(
      resultados_defecto => {
    this.examenesfiltradosporcaracter=resultados_defecto;
    if(resultados_defecto.length>0)
    {
    this.solicitudSinResultado.examenes_solicitados[this.indice].resultados_examen.valores[0].cod=resultados_defecto[0].cod
   console.log( this.solicitudSinResultado.examenes_solicitados[this.indice].resultados_examen.valores[0].cod)
    console.log(resultados_defecto[0].cod)
   // this.form.resultados[i]=this.filteredCountriesSingle[i].valor
    }
    else
    {
      this.solicitudSinResultado.examenes_solicitados[this.indice].resultados_examen.valores[0].cod=0
  
    }
  },
      error => {
        console.log('hola');
       
      })
  
  }
  kambio_valores(cod_examen, caracter,i) { 
    console.log(cod_examen+" "+caracter+" "+i)
    this.resultadosService.obtener_valores__por_defecto_examnes(cod_examen,caracter).subscribe(
      resultados_defecto => {
    this.examenesfiltradosporcaracter=resultados_defecto;
    if(resultados_defecto.length>0)
    {
    console.log(resultados_defecto)
    //this.solicitudSinResultado.examenes_solicitados[this.indice].resultados_examen.valores[0].cod=resultados_defecto[0].cod
    this.solicitudSinResultado.examenes_solicitados[this.indice].resultados_examen.resultados_examenes[i].valores[0].cod=resultados_defecto[0].cod

    console.log(resultados_defecto[0].cod)
    }
    else
    {
      this.solicitudSinResultado.examenes_solicitados[this.indice].resultados_examen.resultados_examenes[i].valores[0].cod=0

    }
   // this.form.resultados[i]=this.filteredCountriesSingle[i].valor
      })
  
  }
  
  }
  