import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import {Paciente, Solicitud, Usuario,Institucion, Persona, Examen_solicitado} from '../../models'
import {Examen} from '../../models/examen'

import {Precio_examen} from '../../models/precio_examen'
import {PacientesService} from '../../pacientes/pacientes.service';
import {Http} from '@angular/http'
import {Router} from '@angular/router'
import { DatePipe, TitleCasePipe } from '@angular/common';
import {SolicitudesService} from '../solicitudes.service'


import {FormControl, FormBuilder, FormGroup, Validators, NgForm } from '@angular/forms';
import { debounceTime } from 'rxjs/operators';
import { UsuariosService } from '../../usuarios/usuarios.service';
declare const $: any;
declare const noUiSlider: any;

declare const Swal: any;
@Component({
  selector: 'app-registrar',
  templateUrl: './registrar.component.html',
  styleUrls: ['./registrar.component.css'],
  
  encapsulation: ViewEncapsulation.None
})
export class RegistrarComponent implements OnInit {
  doctores_solicitantes : Persona[]=[]
  control:FormControl=new FormControl('')
  
  public show:boolean = false;
  mostrar:boolean=false;
  currentUser:Usuario;
  seleccionado:number=3;
  areas=[];
  instituciones:Institucion[];
  examenes=[];
  cedula:String;
  pacientebuscado:Paciente;
  nombre_examenes:String[];
  examen:Examen;
  form:Solicitud;

  institucionesFaltantes:Institucion[];
fecha:string=''
fecha_entrega:string=''
cod_area:number=null;
cod_precio_examen:number=null;

precio_examen:Precio_examen=new Precio_examen()
no_mostrar_examenes_ya_asignados(){
  for(let i=0; i<this.examenes.length;i++){
    console.log(this.examenes[i].cod_precio_examen)
       for(let j=0; j<this.form.examenes_solicitados.length; j++){
         console.log(this.examenes[i].cod_precio_examen)
         console.log(this.form.examenes_solicitados[j].precio_examen.cod_precio_examen)
         
         if(this.examenes[i].cod_precio_examen==this.form.examenes_solicitados[j].precio_examen.cod_precio_examen )
         {
          this.examenes.splice(i, 1);

         }
       }
  }
  console.log(this.examenes.length)
}
listarExamenesdeArea() {
  this.cod_precio_examen=null
  /*this.form.examenes_solicitados[this.i].precio_examen.cod_institucion=this.form.institucion.cod_institucion
  
  if(this.form.institucion.cod_institucion_padre== 'SIS'){
    console.log("sis")
  this.form.examenes_solicitados[this.i].precio_examen.cod_institucion= this.form.institucion.cod_institucion_padre
  }
  */
 this.precio_examen.examen.area.cod_area=this.cod_area
 console.log(this.precio_examen.cod_institucion)
 console.log( this.precio_examen.examen.area.cod_area)
  this.solicitudesService.obtenerexamenesporarea(this.precio_examen).subscribe(data1 => {
   
    this.examenes=data1;
    console.log(this.examenes)
    console.log(this.examenes.length)
    console.log(this.form.examenes_solicitados.length)
//compara si estos examenes ya estan asignados a la solicitud
//this.no_mostrar_examenes_ya_asignados()

    console.log(this.cod_precio_examen)
    console.log(data1)
    if(this.contar_examenes_no_eliminados()==0){
      this.cod_precio_examen=undefined

    }

  });

}
cadena:String='';
nombreexamen:String;
i:number;
estado:boolean=false
examenseleccionar(){
  this.estado=false;
  console.log(this.cod_precio_examen);
  console.log($('#cod_precio_examen').val)

  this.solicitudesService.getByIdPrecio_examen(this.cod_precio_examen).subscribe(data=>{
    this.precio_examen=data
    console.log("precio examen"+this.precio_examen)

     for(let j=0; j<this.form.examenes_solicitados.length; j++){
     
       console.log(this.form.examenes_solicitados[j].precio_examen.cod_precio_examen)
       
       if(this.cod_precio_examen==this.form.examenes_solicitados[j].precio_examen.cod_precio_examen )
       {
        this.estado=true

       }
     
}
console.log(this.estado)
if(!this.estado)
{
  this.i++;
 console.log(data)
 
 console.log(this.precio_examen)
  this.form.examenes_solicitados[this.i]=new Examen_solicitado();
  this.form.examenes_solicitados[this.i].precio_examen=data
}


  })
  //this.form.examenes_solicitados[this.i].precio_examen=this.precio_examen
 // this.form.cod_examen='selecciona un examen'


 this.bandera=false

}
bandera:boolean;
contador:number;
 contar_examenes_no_eliminados():number
{
  this.contador=0;
  for(let e_so of this.form.examenes_solicitados)
  {
    if(e_so.estado!='Eliminado')
    {
this.contador++
    }
  }
  return this.contador;
}

quitar_examen(cod_examen, i){
	Swal({
    title: 'Esta seguro de eliminar este examen?',
    text: 'Sera eliminado '+this.form.examenes_solicitados[i].precio_examen.examen.nombre+'!',
    type: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#d9534f',
    confirmButtonText: 'Si',
    cancelButtonText: 'No',
    closeOnConfirm: false,
    
  }).then((result) => {
    if (result.value) {
      Swal.fire(
      'Eliminado!',
      'Examen eliminado',
      'success'
      )
      console.log("elimnar examen")
      console.log(this.form.examenes_solicitados.length)
  this.form.examenes_solicitados[i].estado="Eliminado";
  //this.precio_examen=new Precio_examen()
 if(this.contar_examenes_no_eliminados()==0){
   this.cod_precio_examen=null
 }

    }
    });

  this.bandera=false;
   
  if(this.form.examenes_solicitados.length>0 ){
 /*
    this.form.examenes_solicitados.splice(i, 1);
  this.i--;*/
  
  }
  else{
  this.bandera=true;
  }

}



  constructor(private usuariosService :UsuariosService, private datePipe: DatePipe,private pacientesService:PacientesService, private solicitudesService:SolicitudesService, private router:Router, private titleCasePipe:TitleCasePipe) { 
    console.log(this.precio_examen)
    this.solicitudesService.listarDoctorSolicitante().subscribe(data=>{
      this.doctores_solicitantes=data
      console.log(data);
      
    })

    this.form=new Solicitud()
    this.form.fecha=this.datePipe.transform(new Date(),"yyyy-MM-dd"),
  this.solicitudesService.getFecha(this.form).subscribe(data=>{

  })
    this.i=this.form.examenes_solicitados.length-1;
    this.precio_examen.cod_institucion=this.form.institucion.cod_institucion
 this.cod_precio_examen=null
  //this.cod_area=this.form.examenes_solicitados[this.i].precio_examen.examen.cod_area
 
  if(this.form.institucion.cod_institucion_padre== 'SIS'){
    console.log("sis")
  this.precio_examen.cod_institucion= this.form.institucion.cod_institucion_padre
  }
  else{
    console.log("nada")
  }
  console.log(this.form)
     this.fecha=datePipe.transform(this.form.fecha, "yyyy-MM-dd")
     this.fecha_entrega=this.form.fecha_entrega
    this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
 
   
 this.form.cedula_usuario=this.currentUser.cedula;
    solicitudesService.getAllAreas().subscribe(data => {
      this.areas=data;
    });

    solicitudesService.getPostas().subscribe(data => {
      this.instituciones=data;
      console.log(this.instituciones)
    });
    solicitudesService.getInstitucionesFaltantes().subscribe(data => {
      this.institucionesFaltantes=data;
      console.log(this.institucionesFaltantes)
    });

   // this.listarExamenesdeArea()
   this.control.valueChanges.pipe(debounceTime(360)).subscribe(value=>{
    console.log(value)
    this.verificarSiExisteCedula(value)
})
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


    $(function() {
      $('#datepicker').datepicker();
      $.datepicker.regional['es']={
          closeText: 'Cerrar',
          prevText: '&#x3c;Ant',
          nextText: 'Sig&#x3e;',
          currentText: 'Hoy',
          monthNames: ['Enero','Febrero','Marzo','Abril','Mayo','Junio',
          'Julio','Agosto','Septiembre','Octubre','Noviembre','Diciembre'],
          monthNamesShort: ['Ene','Feb','Mar','Abr','May','Jun',
          'Jul','Ago','Sep','Oct','Nov','Dic'],
          dayNames: ['Domingo','Lunes','Martes','Mi&eacute;rcoles','Jueves','Viernes','S&aacute;bado'],
          dayNamesShort: ['Dom','Lun','Mar','Mi&eacute;','Juv','Vie','S&aacute;b'],
          dayNamesMin: ['Do','Lu','Ma','Mi','Ju','Vi','S&aacute;'],
          weekHeader: 'Sm',
          dateFormat: 'dd-mm-yy',
          firstDay: 1,
          isRTL: false,
          showMonthAfterYear: false,
          yearSuffix: ''};
          $.datepicker.setDefaults($.datepicker.regional['es']);
    });

    $(function() {
      $('#datepicker2').datepicker();
      $.datepicker.regional['es']={
          closeText: 'Cerrar',
          prevText: '&#x3c;Ant',
          nextText: 'Sig&#x3e;',
          currentText: 'Hoy',
          monthNames: ['Enero','Febrero','Marzo','Abril','Mayo','Junio',
          'Julio','Agosto','Septiembre','Octubre','Noviembre','Diciembre'],
          monthNamesShort: ['Ene','Feb','Mar','Abr','May','Jun',
          'Jul','Ago','Sep','Oct','Nov','Dic'],
          dayNames: ['Domingo','Lunes','Martes','Mi&eacute;rcoles','Jueves','Viernes','S&aacute;bado'],
          dayNamesShort: ['Dom','Lun','Mar','Mi&eacute;','Juv','Vie','S&aacute;b'],
          dayNamesMin: ['Do','Lu','Ma','Mi','Ju','Vi','S&aacute;'],
          weekHeader: 'Sm',
          dateFormat: 'dd-mm-yy',
          firstDay: 1,
          isRTL: false,
          showMonthAfterYear: false,
          yearSuffix: ''};
          $.datepicker.setDefaults($.datepicker.regional['es']);
    });
    //this.datePipe.transform(this.form.fecha,"yyyy-MM-dd")
    
    //this.datePipe.transform(this.form.fecha_entrega,"yyyy-MM-dd")

    $(function () {
      
      $('.fechapicker').bootstrapMaterialDatePicker({
        dateFormat: 'yyyy-mm-dd',
        clearButton: true,
        weekStart: 1,
        time: false,  
    }).on('change', function (e, date) {
    
   
      });
    $('.fechaentregapicker').bootstrapMaterialDatePicker({
      dateFormat: 'yyyy-mm-dd',
      clearButton: true,
      weekStart: 1,
      time: false,  
  }).on('change', function (e, date) {
    
   
  });

  });

  


    // Get noUISlider Value and write on
    function getNoUISliderValue(slider, percentage) {
        slider.noUiSlider.on('update', function () {
            let val = slider.noUiSlider.get();
            if (percentage) {
                // val = parseInt(val);
                val += '%';
            }
            $(slider).parent().find('span.js-nouislider-value').text(val);
        });
    }
}

verificarSiExisteCedula(cedula):boolean{
  if(this.form.paciente.cedula!='')
  {
this.show=true
  this.pacientesService.getByCedula(cedula).subscribe(data=>{
   if(data.cedula!=null){
    this.pacientebuscado=data;
    this.form.paciente=this.pacientebuscado
       this.show=true
       this.bandera2=false
       
  $('#cedula').removeClass('is-invalid')
   }
   else{
     $('#cedula').addClass('is-invalid')
     this.bandera2=true
     this.show=false
   }
  })
}
else{
  this.bandera2=false
  $('#cedula').removeClass('is-invalid')
}
  return this.bandera2;
}
bandera2:boolean=false;
  buscar_paciente(){
    if(this.form.paciente.cedula!='')
    {
  this.show=true
    this.pacientesService.getByCedula(this.form.paciente.cedula).subscribe(data => {
      console.log(data);
      this.pacientebuscado=data;
      this.form.paciente=this.pacientebuscado
      this.bandera2=false
    },
      error => {
          this.show=false
       console.log("klp")
       this.bandera2=true
      }
      )
    }
    else{
      this.bandera2=false
    }
  }
IsmodelShow=false;
  close() {
    this.IsmodelShow=true;// set false while you need open your model popup
   // do your more code
}


guardar_solicitud(formsolicitud:NgForm){
  
  //this.form.fecha=$('#datepicker').val();
  
  //this.form.fecha_entrega=$('#datepicker2').val();
  console.log(this.form.fecha)

  this.form.cedula_usuario=this.currentUser.cedula
  if(this.form.doctor_solicitante!= undefined){

 
  this.form.doctor_solicitante.nombre=this.titleCasePipe.transform(this.form.doctor_solicitante.nombre)
  this.form.doctor_solicitante.ap=this.titleCasePipe.transform(this.form.doctor_solicitante.ap)
  this.form.doctor_solicitante.am=this.titleCasePipe.transform(this.form.doctor_solicitante.am)
  }
this.form.fecha=$('#fecha').val();
this.form.fecha_entrega=$('#fecha_entrega').val();
this.form.fecha=this.datePipe.transform(this.form.fecha,'dd-MM-yyyy')
this.form.fecha_entrega=this.datePipe.transform(this.form.fecha_entrega,'dd-MM-yyyy')

//this.form.examenes_solicitados.splice(this.form.examenes_solicitados.length-1, 1);
  console.log(this.form)
  console.log(this.form.examenes_solicitados[this.form.examenes_solicitados.length-1].estado)
  if( formsolicitud.valid && this.contar_examenes_no_eliminados()>0 && this.show){
    this.solicitudesService.guardar(this.form)
     .subscribe(data => {
     console.log(data)
     alert("solicitud guardada")
    this.router.navigate(['/solicitudes/listar']);
 
      },
     error => {
     
   this.router.navigate(['/solicitudes/registrar']);
  
    });
 }
 console.log(this.contar_examenes_no_eliminados())
 if( this.contar_examenes_no_eliminados()==0){
   this.bandera=true
 }


 

}
institucionbuscar(cod_institucion){
  this.mostrar_doctor=false
  this.cod_area=null;
  this.cod_precio_examen=null;
  console.log(this.form.institucion.cod_institucion)

  for(let j=0; j<this.form.examenes_solicitados.length; j++){
    
  this.form.examenes_solicitados[j].estado="Eliminado";
  }
 this.precio_examen=new Precio_examen()
 this.solicitudesService.getInstitucion(this.form.institucion.cod_institucion).subscribe(insti=>{
  this.form.institucion=insti;
  console.log(insti)
  if(this.form.institucion.cod_institucion_padre== 'SIS'){
    console.log("sis")
  this.precio_examen.cod_institucion= this.form.institucion.cod_institucion_padre
  }
})
 console.log("cod insitucionpadre desolictud"+this.form.institucion.cod_institucion_padre)
 
 console.log("nombreinsituc desolictud"+this.form.institucion.nombre)
 this.precio_examen.cod_institucion=this.form.institucion.cod_institucion
 //this.cod_precio_examen=this.form.examenes_solicitados[this.i].cod_precio_examen
 this.form.examenes_solicitados=[]
 this.mostrar=true

 this.i=-1

}
imprimir(e){
  window.print()
}
printDiv(divName){
  let divToPrint = document.getElementById(divName).innerHTML;
  let newWindow = window.open('', '_blank', 'top=0,left=0,height=100%,width=auto');
  newWindow.document.open();
  newWindow.document.write(`
  <html>
      <head>
        <title>Print tab</title>
        <style>
        
        </style>
      </head>
      <body onload="window.print();window.close()">${divToPrint}   
      </body>
    </html>
  `);
  newWindow.document.close();

}
mostrar_doctor:boolean=false;
agregarDoctor(){
  this.mostrar_doctor=true
  this.form.doctor_solicitante=new Persona()
}
removerDoctor(){
  this.mostrar_doctor=false
  this.form.doctor_solicitante=null
}

}
