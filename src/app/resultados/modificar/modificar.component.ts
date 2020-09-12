import { Component, OnInit,Input } from '@angular/core';

import {ResultadosService} from '../resultados.service'
import { Solicitud , Examen, Resultado, Examen_solicitado, Resultados_por_defecto, Usuario} from '../../models';
import { routerNgProbeToken } from '@angular/router/src/router_module';

import { Router, ActivatedRoute } from '@angular/router';
import { Variable } from '@angular/compiler/src/render3/r3_ast';
import { NgForm } from '@angular/forms';
import { ExamenesService } from '../../examenes/examenes.service';
import { SolicitudesService } from '../../solicitudes/solicitudes.service';

declare const $: any;
@Component({
  selector: 'app-modificar',
  templateUrl: './modificar.component.html',
  styleUrls: ['./modificar.component.css']
})
export class ModificarComponent implements OnInit {
  resultado:Resultado;
  array:String[];


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
    valuechange(value){
      this.a=$('#a').val()
      console.log($('#a').val())
    }
    guardarUnRegistrodeSubExamen(value){

    }
   result:String[];
   caden:String;
cadena:Variable

resultadosDeExam;
indices:number;
coment;

currentUser:Usuario
indice:number=0;
personas:any[]
    constructor(private resultadosService:ResultadosService, private examenesService: ExamenesService, private router:Router,private solicitudesService:SolicitudesService) { 
      this.personas=[{nombre:'Adultos', valor:'A.'}, {nombre:'Niños', valor:'N.'}, {nombre:'Masculino', valor:'M.'}, {nombre:'Femenino', valor:'F.'}]
    
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
     
      this.solicitudesService.obtenerSolicitud(this.solicitudSinResultado.cod_solicitud).subscribe(data=>{
        console.log(data)
          this.solicitudSinResultado=data
          
    this.solicitudSinResultado.resultados_examenes=[]
    console.log(this.solicitudSinResultado)
   // this.form.examenes=this.solicitudSinResultado.examenes;
   this.cod_examen="selecciona"
      })

  
  
      //resultadosService.getAnalisisSinResultadosporcodigo(3).subscribe(data => {
      //  this.analisisSinResultado=data;
      //});
    }
  
    ngOnInit() {
      $(function() {
        'use strict';
        window.addEventListener('load', function() {
          // Fetch all the forms we want to apply custom Bootstrap validation styles to
          var forms = document.getElementsByClassName('needs-validation');
          // Loop over them and prevent submission
          var validation = Array.prototype.filter.call(forms, function(form) {
            form.addEventListener('submit', function(event) {
              if (form.checkValidity() === false) {
                event.preventDefault();
                event.stopPropagation();
              }
              form.classList.add('was-validated');
            }, false);
          });
        }, false);
      });
     }
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
  
  
  
      guardarresultados(form: NgForm){
        this.solicitudSinResultado.examenes_solicitados[this.indice].cedula_usuario=this.currentUser.cedula
        console.log(this.solicitudSinResultado.examenes_solicitados[this.indice])
        if( form.valid && (this.solicitudSinResultado.examenes_solicitados[this.indice].estado =='Registrado' || this.solicitudSinResultado.examenes_solicitados[this.indice].estado =='Actualizado')){
          this.resultadosService.modificarResultados(this.solicitudSinResultado.examenes_solicitados[this.indice]).subscribe(
            solicitud => {
              alert("resultados actualizados")
              this.router.navigate(['/resultados/ver']);
              console.log(solicitud)
              this.solicitudSinResultado=solicitud
          
              // this.listarsubexamenes();
             
                 this.indice=0;
                // this.instanciar_resultados()
                 this.listarsubexamenes()
               
              
            })
        }

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
  salir(){
 
    this.router.navigate(['/resultados/ver']);
  }
  examen:Examen=new Examen()
  nombreexamen;
  registrar(s:Examen){
    this.examen=s
    this.cod_examen=s.cod_examen
    this.nombreexamen=s.nombre
    console.log(this.examen.nombre)
    /*
    this.examenesService.modificar(this.examen).subscribe(data =>{
      console.log(data);
      alert("examen "+ data.nombre+" guardado")
      
      this.router.navigate(['/examenes/listar']);
  })
  */
  
  }
  guardarvalorreferencia(){
    console.log(this.examen)
    this.examenesService.modificar(this.examen).subscribe(data =>{
      console.log(data);
      alert("Examen "+ data.nombre+" actualizado")
      
      this.router.navigate(['/resultados/modificar']);
  })
}
  }
  