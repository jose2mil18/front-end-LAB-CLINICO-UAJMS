import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import {Router} from '@angular/router'
import {UsuariosService} from '../usuarios.service'
import {FormControl, FormBuilder, FormGroup, Validators, NgForm  } from '@angular/forms';
import { Usuario, Persona, Rol } from '../../models';
import * as archivo from '../../../assets/js/funciones.js';

import { LowerCasePipe, TitleCasePipe, UpperCasePipe, DatePipe } from '@angular/common';
import { invalid } from '@angular/compiler/src/render3/view/util';
declare const $: any;
declare const noUiSlider: any;
declare const validateCedulaUnica:any
declare const validateCedula:any
declare const validatePassword:any;
@Component({
  selector: 'app-registrar',
  templateUrl: './registrar.component.html',
  styleUrls: ['./registrar.component.css'],

  encapsulation: ViewEncapsulation.None
})
export class RegistrarComponent implements OnInit {
  
imageUrl: string = "http://localhost:9898/api/file/";
fileToUpload: File = null;
  addForm: FormGroup;
cedula:String;
form2;
form:Usuario;
roles:Rol[];
form4;
cod_rol:any
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



    this.addForm = this.formBuilder.group({
      id: [],
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', Validators.required]
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
registrar(){
  console.log(this.cedula);
}
constructor(private titleCasePipe:TitleCasePipe, private formBuilder: FormBuilder, private usuarioService : UsuariosService, private router:Router) { 
  
this.form=new Usuario();
  this.imageUrl="assets/images/photo_profile_user.png"

  this.usuarioService.getAllRoles().subscribe(data=>{
this.roles=data;
console.log(this.roles)

 })
  this.form2={
   pass:''
 }
 this.form4={
   
 }
}
 bandera:boolean=true;
onSubmit(formulario:NgForm) {
  validatePassword()
this.usuarioService.verificarCedula(this.form.cedula).subscribe(
  data => {
      console.log(data);
console.log("klp")
this.bandera=false
      validateCedulaUnica();
      
  },
  error => {
    this.bandera=true;
    validateCedula();
    console.log('cedularepetidad');
 
     
   
  });
  //validateCedulaUnica(this.form.cedula);
 // this.form.personal_laboratorio.foto=this.fileToUpload.name;
  this.form.personal_laboratorio.persona.nombre=(this.titleCasePipe.transform(this.form.personal_laboratorio.persona.nombre))
  this.form.personal_laboratorio.persona.ap=(this.titleCasePipe.transform(this.form.personal_laboratorio.persona.ap))
  this.form.personal_laboratorio.persona.am=(this.titleCasePipe.transform(this.form.personal_laboratorio.persona.am))
  this.form.personal_laboratorio.profesion=(this.titleCasePipe.transform(this.form.personal_laboratorio.profesion))
  console.log(this.form)
  console.log($('#password').val() == $('#password-confirmation').val())
if( this.bandera && formulario.valid && ($('#password').val() == $('#password-confirmation').val()) ){

  if(this.form.personal_laboratorio.foto != '')
  {
  this.usuarioService.uploadImagen(this.fileToUpload).subscribe(data=>{
    console.log("imagen guardada")
  })
}
  this.usuarioService.register( this.form )
  .subscribe(data => {
    this.router.navigate(['/usuarios/listar']);
  
  },
  error => {
     
    this.router.navigate(['/usuarios/registrar']);
  });
}
else
{
  console.log("ofrormicoreecto opasswordno coinciden")
}
}

handleFileInput(file: FileList) {
  this.fileToUpload = file.item(0);
console.log(file.item.length)
  //Show image preview
  var reader = new FileReader();
  reader.onload = (event:any) => {
    this.imageUrl = event.target.result;
  }
  reader.readAsDataURL(this.fileToUpload);
  
  this.form.personal_laboratorio.foto=this.fileToUpload.name;
  console.log(this.form.personal_laboratorio.foto)
}
rolseleccionar(d){
console.log($('#rol').val())
}
}
