import { Component, OnInit , ViewEncapsulation} from '@angular/core';
import {Paciente, Persona, Personal} from '../../models'
import {PacientesService} from '../pacientes.service'

import {FormControl, FormBuilder, FormGroup, Validators, NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { LowerCasePipe, TitleCasePipe, UpperCasePipe, DatePipe } from '@angular/common';

declare const $: any;
declare const swal: any;
@Component({
  selector: 'app-modificar',
  templateUrl: './modificar.component.html',
  styleUrls: ['./modificar.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class ModificarComponent implements OnInit {
form
cadena:string=''
  constructor(public datePipe:DatePipe,private titleCasePipe :TitleCasePipe, private pacienteService : PacientesService, private router:Router) { 
    this.cadena=""
    this.form = JSON.parse(localStorage.getItem('paciente'));
    
   this.cadena=datePipe.transform(this.form.fnac, "yyyy-MM-dd")

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
        dateFormat: 'dd-mm-yyyy',
        clearButton: true,
        weekStart: 1,
        time: false,  
        lang:'es'
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
         
      });

    $(function () {
      $('.js-sweetalert button').on('click', function () {
          const type = $(this).data('type');
          if (type === 'basic') {
              showBasicMessage();
          } else if (type === 'with-title') {
              showWithTitleMessage();
          } else if (type === 'success') {
              showSuccessMessage();
          } else if (type === 'confirm') {
              showConfirmMessage();
          } else if (type === 'cancel') {
              showCancelMessage();
          } else if (type === 'with-custom-icon') {
              showWithCustomIconMessage();
          } else if (type === 'html-message') {
              showHtmlMessage();
          } else if (type === 'autoclose-timer') {
              showAutoCloseTimerMessage();
          } else if (type === 'prompt') {
              showPromptMessage();
          } else if (type === 'ajax-loader') {
              showAjaxLoaderMessage();
          }
      });
  });
    // These codes takes from http://t4t5.github.io/sweetalert/
    function showBasicMessage() {
      swal('Here\'s a message!');
  }

  function showWithTitleMessage() {
      swal('Here\'s a message!', 'It\'s pretty, isn\'t it?');
  }

  function showSuccessMessage() {
      swal('Paciente actualizado!', '', 'success');
  }

  function showConfirmMessage() {
      swal({
          title: 'Are you sure?',
          text: 'You will not be able to recover this imaginary file!',
          type: 'warning',
          showCancelButton: true,
          confirmButtonColor: '#DD6B55',
          confirmButtonText: 'Yes, delete it!',
          closeOnConfirm: false
      }, function () {
          swal('Deleted!', 'Your imaginary file has been deleted.', 'success');
      });
  }

  function showCancelMessage() {
      swal({
          title: 'Are you sure?',
          text: 'You will not be able to recover this imaginary file!',
          type: 'warning',
          showCancelButton: true,
          confirmButtonColor: '#DD6B55',
          confirmButtonText: 'Yes, delete it!',
          cancelButtonText: 'No, cancel plx!',
          closeOnConfirm: false,
          closeOnCancel: false
      }, function (isConfirm) {
          if (isConfirm) {
              swal('Deleted!', 'Your imaginary file has been deleted.', 'success');
          } else {
              swal('Cancelled', 'Your imaginary file is safe :)', 'error');
          }
      });
  }

  function showWithCustomIconMessage() {
      swal({
          title: 'Sweet!',
          text: 'Here\'s a custom image.',
          imageUrl: 'assets/images/sm/avatar2.jpg'
      });
  }

  function showHtmlMessage() {
      swal({
          title: 'HTML <small>Title</small>!',
          text: 'A custom <span style=\'color: #CC0000\'>html<span> message.',
          html: true
      });
  }

  function showAutoCloseTimerMessage() {
      swal({
          title: 'Auto close alert!',
          text: 'I will close in 2 seconds.',
          timer: 2000,
          showConfirmButton: false
      });
  }

  function showPromptMessage() {
      swal({
          title: 'An input!',
          text: 'Write something interesting:',
          type: 'input',
          showCancelButton: true,
          closeOnConfirm: false,
          animation: 'slide-from-top',
          inputPlaceholder: 'Write something'
      }, function (inputValue) {
          if (inputValue === false) {
              return false;
          }
          if (inputValue === '') {
              swal.showInputError('You need to write something!'); return false;
          }
          swal('Nice!', 'You wrote: ' + inputValue, 'success');
      });
  }

  function showAjaxLoaderMessage() {
      swal({
          title: 'Ajax request example',
          text: 'Submit to run ajax request',
          type: 'info',
          showCancelButton: true,
          closeOnConfirm: false,
          showLoaderOnConfirm: true,
      }, function () {
          setTimeout(function () {
              swal('Ajax request finished!');
          }, 2000);
      });
  }
  }
guardar(formpaciente : NgForm){
  
    console.log($('#fnac').val())
    this.form.fnac=$('#fnac').val()
this.titleCasePipe.transform(this.form.persona.nombre)
this.form.persona.nombre=this.titleCasePipe.transform(this.form.persona.nombre)
this.form.fnac=this.datePipe.transform(this.form.fnac,'dd-MM-yyyy')
//this.form.procedencia=this.titleCasePipe.transform(this.form.procedencia)
this.form.procedencia=this.titleCasePipe.transform(this.form.procedencia)
this.form.persona.ap=this.titleCasePipe.transform(this.form.persona.ap)
if(!(this.form.persona.am == '')){
this.form.persona.am=this.titleCasePipe.transform(this.form.persona.am)
}
    if(formpaciente.valid){
        console.log(formpaciente.value)
  this.pacienteService.update(this.form)
      .subscribe(data => {
        console.log(data)
        this.router.navigate(['/pacientes/listar']);
      
  localStorage.removeItem('paciente');
      },
      error => {
         
        this.router.navigate(['/pacientes/modificar']);
      });
    }
    
}

}
