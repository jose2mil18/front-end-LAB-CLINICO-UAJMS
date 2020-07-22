import { Component, OnInit,Input , ViewEncapsulation } from '@angular/core';

import {ResultadosService} from '../resultados.service'
import {ExamenesService} from '../../examenes/examenes.service'
import { Solicitud , Examen, Examen_solicitado, Valor_referencia, Valor, Resultados_examen, Usuario, Resultados_por_defecto} from '../../models';
import { routerNgProbeToken } from '@angular/router/src/router_module';

//import { CompleterService, CompleterData } from 'ng2-completer';
import { Router, ActivatedRoute } from '@angular/router';
import { NgForm } from '@angular/forms';
import { createEmbeddedViewNode } from '@angular/core/src/render3/instructions';
import { SolicitudesService } from '../../solicitudes/solicitudes.service';


declare const swal: any;
declare const $: any;
@Component({
  selector: 'app-registrar',
  templateUrl: './registrar.component.html',
  styleUrls: ['./registrar.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class RegistrarComponent implements OnInit {
  codeList=[];
a:number;
  country: any;

  countries: any[];

  examenesfiltradosporcaracter: Resultados_por_defecto[];


  protected searchStr: string;
  //protected dataService: CompleterData;
  protected searchData = [
   
  ];
  solicitud:Solicitud;
  form
  i:number;
  word;
  tamañoNivel2:number=0
  nombreexamen;
  solicitudSinResultado:Solicitud=new Solicitud();
  cod_examen;
  subexamenes:Examen[];
  ab;
  array:String[];
  public contador:number;
  examen:Examen=new Examen()
  tamaño:number=0
  indice:number=0;
cod_examen_hijo
currentUser:Usuario
personas:any[]
estado:boolean=true
examensito:Examen=new Examen();
  constructor(private resultadosService:ResultadosService,private examenesService:ExamenesService, private router:Router, private solicitudesService:SolicitudesService) { 

    this.personas=[]

    this.personas=[{nombre:'Adultos', valor:'A.'}, {nombre:'Niños', valor:'N.'}, {nombre:'Masculino', valor:'M.'}, {nombre:'Femenino', valor:'F.'}]
   
    this.a=0
    this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
    this.form={
      resultados:[]
    }
    this.form.resultados=[]
   this.array=[]
    this.array[0]=''
    this.solicitud=new Solicitud();
  
    this.solicitud.examenes_solicitados[0]=new Examen_solicitado();

    this.nombreexamen=''
this.contador=0;
  
    //this.form.examenes_solicitados.resultado_examen.valores=[];
    
   // this.form.examenes_solicitados.resultado_examen.valores[0].valor='jk';
    this.subexamenes=[];
    this.subexamenes[0]=new Examen();
    this.subexamenes[0].nombre='carala'
    //this.form.resultados[0];
    this.solicitudSinResultado = JSON.parse(localStorage.getItem('solicitudSinResultado'));
    console.log(this.solicitudSinResultado.cod_solicitud+" afsdk")
    
this.solicitudesService.obtenerSolicitud(this.solicitudSinResultado.cod_solicitud).subscribe(data=>{
console.log(data)
  this.solicitudSinResultado=data


  // inicializando cod_examen , cod_solexamende resultados del primer examen solicitado
  this.solicitudSinResultado.examenes_solicitados[this.indice].resultados_examen=new Resultados_examen();
  this.solicitudSinResultado.examenes_solicitados[this.indice].resultados_examen.cod_examen=this.solicitudSinResultado.examenes_solicitados[this.indice].precio_examen.examen.cod_examen
  this.solicitudSinResultado.examenes_solicitados[this.indice].resultados_examen.cod_sol_exam=  this.solicitudSinResultado.examenes_solicitados[this.indice].cod_sol_exam
  this.subexamenes=[];
  
  this.tamaño=this.solicitudSinResultado.examenes_solicitados[this.indice].precio_examen.examen.subexamenes.length
  
  this.t(this.tamaño, this.solicitudSinResultado);
  this.instanciar_resultados()
  
  if(this.solicitudSinResultado.examenes_solicitados[this.indice].precio_examen.examen.subexamenes.length == 0)
    {
    this.subexamenes[this.indice]=this.solicitudSinResultado.examenes_solicitados[this.indice].precio_examen.examen
   // this.solicitudSinResultado.examenes_solicitados[this.indice].resultados_examenes[0].examen=this.subexamenes[this.indice]
    }
    else{
  this.subexamenes=this.solicitudSinResultado.examenes_solicitados[this.indice].precio_examen.examen.subexamenes
    }
  //
  
  
     // this.form.examenes=this.solicitudSinResultado.examenes;
     this.cod_examen='selecciona un examen'
  

  
})
  
    //resultadosService.getAnalisisSinResultadosporcodigo(3).subscribe(data => {
    //  this.analisisSinResultado=data;
    //});
  }
  
t(tamaño, solicitudSinResultado){
  

}

instanciar_resultados()
{
  for(let i=0; i<this.solicitudSinResultado.examenes_solicitados.length; i++){
    if(this.solicitudSinResultado.examenes_solicitados[i].estado =='Sin Registrar')
    {
      this.solicitudSinResultado.examenes_solicitados[i].resultados_examen=new Resultados_examen
      this.solicitudSinResultado.examenes_solicitados[i].resultados_examen.resultados_examenes
      if(this.solicitudSinResultado.examenes_solicitados[i].precio_examen.examen.num_subexamenes !=0)
      {
         for(let j=0; j<this.solicitudSinResultado.examenes_solicitados[i].precio_examen.examen.num_subexamenes; j++)
         {
          this.solicitudSinResultado.examenes_solicitados[i].resultados_examen.resultados_examenes[j]=new Resultados_examen();
          this.solicitudSinResultado.examenes_solicitados[i].resultados_examen.resultados_examenes[j].cod_sol_exam=this.solicitudSinResultado.examenes_solicitados[i].cod_sol_exam
          this.solicitudSinResultado.examenes_solicitados[i].resultados_examen.resultados_examenes[j].cod_examen=this.solicitudSinResultado.examenes_solicitados[i].precio_examen.examen.subexamenes[j].cod_examen
          this.solicitudSinResultado.examenes_solicitados[i].resultados_examen.resultados_examenes[j].examen=this.solicitudSinResultado.examenes_solicitados[i].precio_examen.examen.subexamenes[j];
               
          if(this.solicitudSinResultado.examenes_solicitados[i].precio_examen.examen.subexamenes[j].num_subexamenes !=0)
          {
             for(let k=0; k<this.solicitudSinResultado.examenes_solicitados[i].precio_examen.examen.subexamenes[j].num_subexamenes; k++)
             {
              this.solicitudSinResultado.examenes_solicitados[i].resultados_examen.resultados_examenes[j].resultados_examenes[k]=new Resultados_examen();
              this.solicitudSinResultado.examenes_solicitados[i].resultados_examen.resultados_examenes[j].resultados_examenes[k].cod_sol_exam=this.solicitudSinResultado.examenes_solicitados[i].cod_sol_exam
              this.solicitudSinResultado.examenes_solicitados[i].resultados_examen.resultados_examenes[j].resultados_examenes[k].cod_examen=this.solicitudSinResultado.examenes_solicitados[i].precio_examen.examen.subexamenes[j].subexamenes[k].cod_examen
              this.solicitudSinResultado.examenes_solicitados[i].resultados_examen.resultados_examenes[j].resultados_examenes[k].examen=this.solicitudSinResultado.examenes_solicitados[i].precio_examen.examen.subexamenes[j].subexamenes[k]
            }
          }
        
        }
  
      }
    }
  }
}
  ngOnInit() { 



    $('#control').on('click', function() {
      
      $('#control').addClass('is-valid');
  });

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
  selectEvent(item) {
    // do something with selected item
  }
 
  onChangeSearch(val: string) {
    // fetch remote data from here
    // And reassign the 'data' which is binded to 'data' property.
  }
  
  onFocused(e){
    // do something when input is focused
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
formulario:NgForm;
guardarresultados(form: NgForm){
  this.formulario=form
  this.solicitudSinResultado.examenes_solicitados[this.indice].cedula_usuario=this.currentUser.cedula
  console.log(this.solicitudSinResultado.examenes_solicitados[this.indice])
  if(form.valid && this.solicitudSinResultado.examenes_solicitados[this.indice].estado =='Sin Registrar')
  {
    console.log(form.valid)
  this.resultadosService.guardarResultados(this.solicitudSinResultado.examenes_solicitados[this.indice]).subscribe(
    solicitud => {
      alert("resultados guardados")
     
      this.solicitudSinResultado=solicitud
      
     // this.listarsubexamenes();
      if(solicitud.estado == 'Registrado'){
  
        this.router.navigate(['/resultados/ver']);
      }
      else
      {
        this.indice=0;
        this.instanciar_resultados()
        this.listarsubexamenes()
      }
      
    })
  }

    if( form.valid && (this.solicitudSinResultado.examenes_solicitados[this.indice].estado =='Registrado' || this.solicitudSinResultado.examenes_solicitados[this.indice].estado =='Actualizado')){
      this.resultadosService.modificarResultados(this.solicitudSinResultado.examenes_solicitados[this.indice]).subscribe(
        solicitud => {
          alert("resultados actualizados")
          console.log(solicitud)
          this.solicitudSinResultado=solicitud
      
          // this.listarsubexamenes();
           if(solicitud.estado == 'Registrado'){
       
             this.router.navigate(['/resultados/ver']);
           }
           else
           {
             this.indice=0;
             this.instanciar_resultados()
             this.listarsubexamenes()
           }
          
        })
    }
}

salir(){
 
  this.router.navigate(['/resultados/ingresar']);
}
guardarvalorreferencia(){
  console.log(this.examen)
  this.examenesService.modificar(this.examen).subscribe(data =>{
    console.log(data);
    alert("examen "+ data.nombre+"actualizado")
    
    this.router.navigate(['/resultados/registrar']);
})
  

}
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

b(event, cadena){
  

  this.resultadosService.obtener_valores__por_defecto_examnes(1, this.country).subscribe(
    datas => {
 // this.filteredCountriesSingle=datas;
    })
  //this.filteredCountriesSingle=this.countries;
}

obtener_examen(cod_examen:number){
  this.examenesService.obtenerExamen(cod_examen).subscribe(data=>{
this.examensito=data;
if(this.examensito.valores_referencia.length>0){
  console.log(true)
}
  })

}




kambio_valor(cod_examen, caracter) { 

  console.log(cod_examen+" "+caracter)
  console.log(caracter.length)
//this.obtener_examen(cod_examen);

/*
  if(caracter.length>0){

    $("#resultado_examen"+cod_examen).removeClass("is-invalid").addClass("is-valid");
  }
  else{
    $("#resultado_examen"+cod_examen).removeClass("is-valid").addClass("is-invalid");
  }
  */
  this.resultadosService.obtener_valores__por_defecto_examnes(cod_examen,caracter).subscribe(
    resultados_defecto => {
  this.examenesfiltradosporcaracter=resultados_defecto;
  this.solicitudSinResultado.examenes_solicitados[this.indice].resultados_examen.valores[0].cod=resultados_defecto[0].cod
 console.log( this.solicitudSinResultado.examenes_solicitados[this.indice].resultados_examen.valores[0].cod)
  console.log(resultados_defecto[0].cod)
 // this.form.resultados[i]=this.filteredCountriesSingle[i].valor
    })
}
kambio_valores(cod_examen, caracter,i) { 
  console.log(cod_examen+" "+caracter+" "+i)
/*
  if(caracter.length>0){

    $("#resultado_subexamen"+cod_examen).removeClass("is-invalid").addClass("is-valid");
  }
  else{
    $("#resultado_subexamen"+cod_examen).removeClass("is-valid").addClass("is-invalid");
  }
  */
  this.resultadosService.obtener_valores__por_defecto_examnes(cod_examen,caracter).subscribe(
    resultados_defecto => {
      console.log(resultados_defecto)
  this.examenesfiltradosporcaracter=resultados_defecto;
  //this.solicitudSinResultado.examenes_solicitados[this.indice].resultados_examen.valores[0].cod=resultados_defecto[0].cod
  this.solicitudSinResultado.examenes_solicitados[this.indice].resultados_examen.resultados_examenes[i].valores[0].cod=resultados_defecto[0].cod

  console.log(resultados_defecto[0].cod)
 // this.form.resultados[i]=this.filteredCountriesSingle[i].valor
    })
}
cadena:String="";
cambio(event){
  console.log(event.target.value)
if(event.target.value!=''){
  this.estado=false
}
else{
  this.estado=true
}
  
}
cambi(valor){
 console.log(valor.length)
if(valor.length>0)
{
  $("#a"+7).removeClass("is-invalid").addClass("is-valid");
}
else{
  $("#a"+7).removeClass("is-valid").addClass("is-invalid");
}
}
}
