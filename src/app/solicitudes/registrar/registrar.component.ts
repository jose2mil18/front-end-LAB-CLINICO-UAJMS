import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import {Paciente, Solicitud, Usuario,Institucion, Persona, Examen_solicitado} from '../../models'
import {Examen} from '../../models/examen'
import {Precio_examen} from '../../models/precio_examen'
import {PacientesService} from '../../pacientes/pacientes.service';
import {Http} from '@angular/http'
import {Router} from '@angular/router'
import { DatePipe } from '@angular/common';
import {SolicitudesService} from '../solicitudes.service'


import {FormControl, FormBuilder, FormGroup, Validators, NgForm } from '@angular/forms';
import { debounceTime } from 'rxjs/operators';
declare const $: any;
declare const noUiSlider: any;
@Component({
  selector: 'app-registrar',
  templateUrl: './registrar.component.html',
  styleUrls: ['./registrar.component.css'],
  
  encapsulation: ViewEncapsulation.None
})
export class RegistrarComponent implements OnInit {
  control:FormControl=new FormControl('')
  bandera:boolean=false;
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
  i:number=0;
  institucionesFaltantes:Institucion[];
fecha:string=''
fecha_entrega:string=''

listarExamenesdeArea(newValue) {


  
  console.log(newValue);
  console.log(this.form)

  this.form.examenes_solicitados[this.i].precio_examen.cod_institucion=this.form.institucion.cod_institucion
  
  console.log(this.form.institucion.cod_institucion_padre)
  if(this.form.institucion.cod_institucion_padre== 'SIS')
  {
  this.form.examenes_solicitados[this.i].precio_examen.cod_institucion= this.form.institucion.cod_institucion_padre
  }
  console.log(this.form.examenes_solicitados[this.i].precio_examen)
  this.solicitudesService.obtenerexamenesporarea(this.form.examenes_solicitados[this.i].precio_examen).subscribe(data1 => {
   
    this.examenes=data1;
    console.log(data1)
  });
  //------------------------------
 
  // ... do other stuff here ...
}
cadena:String='';
nombreexamen:String;


examenseleccionar(newValue){
  
console.log(this.form);

 for(let i=0;i<this.examenes.length; i++){
   for(let j=0; j<this.form.examenes_solicitados.length;j++)
   {
   if(this.examenes[i].examen.nombre == this.form.examenes_solicitados[j].precio_examen.examen.nombre )
   {
  this.examenes.splice(this.i, 1);
   }
  }
 }
 this.i++;
  this.form.examenes_solicitados[this.i]=new Examen_solicitado();
 
 // this.form.cod_examen='selecciona un examen'


 this.bandera=false


}


  constructor(private datePipe: DatePipe,private pacientesService:PacientesService, private solicitudesService:SolicitudesService, private router:Router) { 
    //alert(this.datePipe.transform((new Date(Date.parse("2014-10-27 EDT"))),'yyyy-MM-dd'))yyYYY
    //this.fecha=this.datePipe.transform((new Date(Date.parse("2014-10-27 EDT"))),'yyyy-MM-dd')
 
   this.form=new Solicitud();
  
    this.pacientebuscado=new Paciente();
    $('.selectpicker').selectpicker({
      style: 'btn-info',
      size: 4
  });
    this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
    /*this.form={
      estado:'',
      cod_solicitud:0,
      paciente:new Paciente(),
      institucion:new Institucion,
      doctor_solicitante:new Persona(),
      //fecha:'',
      //fecha_entrega:'',
    
    
      examenes:[],
      examenes_solicitados:[],
      cedula_usuario:this.currentUser.cedula,
    gestion: (new Date()).getFullYear(),
    
    }
    */
   this.form.paciente=new Paciente();
   
$("#datepicker").datepicker("setDate", new Date());
   this.form.examenes_solicitados=[]
   this.form.examenes_solicitados[this.i]=new Examen_solicitado();
   this.form.cedula_usuario=this.currentUser.cedula;
    this.form.paciente.cedula='';
    console.log(this.form.paciente.cedula)
    solicitudesService.getAllAreas().subscribe(data => {
      
      this.areas=data;
      
    });

    solicitudesService.getPostas().subscribe(data => {
      this.instituciones=data;
    });
    solicitudesService.getInstitucionesFaltantes().subscribe(data => {
      this.institucionesFaltantes=data;
    });

    this.control.valueChanges.pipe(debounceTime(360)).subscribe(value=>{
      console.log(value)
      this.buscar_paciente()
  })

  }

  ngAfterViewInit() {
    $('.selectpicker').selectpicker();
}

ngAfterViewChecked() {
    $('.selectpicker').selectpicker('refresh');
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

    $("#datepicker").datepicker("setDate", new Date());
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
    this.datePipe.transform(this.form.fecha,"yyyy-MM-dd")
    
    this.datePipe.transform(this.form.fecha_entrega,"yyyy-MM-dd")

    

    $(function () {
      $('.selectpicker').selectpicker();
      $('.datetimepicker').bootstrapMaterialDatePicker({
          format: 'dddd DD MMMM YYYY - HH:mm',
          clearButton: true,
          weekStart: 1
      });
  
      $('.timepicker').bootstrapMaterialDatePicker({
        format: 'HH:mm',
        clearButton: true,
        date: false
    });
  
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
    $('.selectpicker').selectpicker();
    $(function () {
        $('.colorpicker').colorpicker();

        // Masked Input
        const $demoMaskedInput = $('.demo-masked-input');

        // Date
        $demoMaskedInput.find('.date').inputmask('dd/mm/yyyy', { placeholder: '__/__/____' });

        // Time
        $demoMaskedInput.find('.time12').inputmask('hh:mm t', { placeholder: '__:__ _m', alias: 'time12', hourFormat: '12' });
        $demoMaskedInput.find('.time24').inputmask('hh:mm', { placeholder: '__:__ _m', alias: 'time24', hourFormat: '24' });

        // Date Time
        $demoMaskedInput.find('.datetime').inputmask('d/m/y h:s', { placeholder: '__/__/____ __:__', alias: 'datetime', hourFormat: '24' });

        // Mobile Phone Number
        $demoMaskedInput.find('.mobile-phone-number').inputmask('+99 (999) 999-99-99', { placeholder: '+__ (___) ___-__-__' });
        // Phone Number
        $demoMaskedInput.find('.phone-number').inputmask('+99 (999) 999-99-99', { placeholder: '+__ (___) ___-__-__' });

        // Dollar Money
        $demoMaskedInput.find('.money-dollar').inputmask('99,99 $', { placeholder: '__,__ $' });

        // IP Address
        $demoMaskedInput.find('.ip').inputmask('999.999.999.999', { placeholder: '___.___.___.___' });

        // Credit Card
        $demoMaskedInput.find('.credit-card').inputmask('9999 9999 9999 9999', { placeholder: '____ ____ ____ ____' });

        // Email
        $demoMaskedInput.find('.email').inputmask({ alias: 'email' });

        // Serial Key
        $demoMaskedInput.find('.key').inputmask('****-****-****-****', { placeholder: '____-____-____-____' });

        // Multi-select
        $('#optgroup').multiSelect({ selectableOptgroup: true });

        // noUISlider
        const sliderBasic = document.getElementById('nouislider_basic_example');
        noUiSlider.create(sliderBasic, {
            start: [30],
            connect: 'lower',
            step: 1,
            range: {
                'min': [0],
                'max': [100]
            }
        });
        getNoUISliderValue(sliderBasic, true);

        // Range Example
        const rangeSlider = document.getElementById('nouislider_range_example');
        noUiSlider.create(rangeSlider, {
            start: [32500, 62500],
            connect: true,
            range: {
                'min': 25000,
                'max': 100000
            }
        });
        getNoUISliderValue(rangeSlider, false);
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
  buscar_paciente(){
  this.show=true
    this.pacientesService.getByCedula(this.form.paciente.cedula).subscribe(data => {
      console.log(data);
      this.pacientebuscado=data;
      this.form.paciente=this.pacientebuscado

    
    }
      
      ,
      error => {
          this.show=false
       
      }
      )
  }
IsmodelShow=false;
  close() {
    this.IsmodelShow=true;// set false while you need open your model popup
   // do your more code
}

guardar_solicitud(formsolicitud: NgForm){
  //this.form.examenes_solicitados.splice(this.i, 1);
 
  this.form.paciente=this.pacientebuscado

this.form.fecha=$('#fecha').val();
this.form.fecha_entrega=$('#fecha_entrega').val();

this.form.fecha=this.datePipe.transform(this.form.fecha,'dd-MM-yyyy')
this.form.fecha_entrega=this.datePipe.transform(this.form.fecha_entrega,'dd-MM-yyyy')
  console.log(formsolicitud.valid)
  console.log(this.form.examenes_solicitados.length)

  if( formsolicitud.valid  && this.form.examenes_solicitados.length>1){
    this.form.examenes_solicitados.splice(this.i, 1);
    this.solicitudesService.guardar(this.form)
     .subscribe(data => {
     console.log(data)
     this.router.navigate(['/solicitudes/listar']);
 
      },
     error => {
     
   this.router.navigate(['/solicitudes/registrar']);
  
    });
 }
 if(this.form.examenes_solicitados.length<=1){
  this.bandera=true;
 } 
 
}
institucionbuscar(cod){
console.log(cod)
this.mostrar=true
this.solicitudesService.getInstitucion(cod).subscribe(data => {
 this.form.institucion=data;
 
console.log(this.form.institucion.cod_institucion_padre)
});
console.log(this.form.institucion.cod_institucion_padre)
  this.form.examenes_solicitados=[]
  this.i=0;
  
  this.form.examenes_solicitados[this.i]=new Examen_solicitado();
 
}
quitar_examen(cod_examen, i){
 
  this.bandera=false;
   
  if(this.form.examenes_solicitados.length>1){
    
    this.form.examenes_solicitados.splice(i, 1);
  this.i--;
  }
  else{
  this.bandera=true;
  }
  
  }
}
