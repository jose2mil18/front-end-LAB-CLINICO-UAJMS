import { Component, OnInit } from '@angular/core';

import {Router} from '@angular/router'
import {Usuario, Persona, Rol} from '../../models'
import { UsuariosService } from '../usuarios.service';
import { routerNgProbeToken } from '@angular/router/src/router_module';

import { LowerCasePipe, TitleCasePipe, UpperCasePipe, DatePipe } from '@angular/common';
import {FormControl, FormBuilder, FormGroup, Validators, NgForm  } from '@angular/forms';
import  imageupload from 'bootstrap-imageupload-src';
interface HtmlInputEvent extends Event {
  target: HTMLInputElement & EventTarget;
}

declare const fun :any;
declare const validatePassword:any;
@Component({
  selector: 'app-modificar',
  templateUrl: './modificar.component.html',
  styleUrls: ['./modificar.component.css']
})
export class ModificarComponent implements OnInit {
  
form:Usuario;
form2;
form3;
contraseña:String;
estados:String[];
roles:Rol[]
rolSeleccionado;
imageUrl: string = "http://localhost:9898/api/file/";
fileToUpload: File = null;
  constructor(private titleCasePipe: TitleCasePipe, private router:Router,private usuarioService : UsuariosService) {
   
 
    this.usuarioService.getAllRoles().subscribe(data=>{
      this.roles=data;
      console.log(this.roles)
       })
    this.estados=['habilitado', 'deshabilitado']
    this.form=JSON.parse(localStorage.getItem('usuarioamodificar'));
    if(this.form.personal_laboratorio.foto ==''){
      this.imageUrl="assets/images/photo_profile_user.png"
    }
    this.imageUrl=this.imageUrl+this.form.personal_laboratorio.foto;

    this.rolSeleccionado=this.form.roles[0].nombre
    this.form.login='';
this.contraseña=this.form.password;
    this.form3={password:''}
    //this.form.password3=this.form.password;
console.log(this.form)
this.form2={
  pass:''
}
this.form.password=''
   
   }

   handleFileInput(file: FileList) {
    this.fileToUpload = file.item(0);

    //Show image preview
    var reader = new FileReader();
    reader.onload = (event:any) => {
      this.imageUrl = event.target.result;
    }
    reader.readAsDataURL(this.fileToUpload);
    
  this.form.personal_laboratorio.foto=this.fileToUpload.name;
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
guardar_modificacion(formu:NgForm){
  //this.form.personal_laboratorio.archivo=this.fileToUpload;
  //this.form.personal_laboratorio.foto=this.fileToUpload.name;
  //console.log(this.form.personal_laboratorio.foto)
  this.form.personal_laboratorio.persona.nombre=(this.titleCasePipe.transform(this.form.personal_laboratorio.persona.nombre))
  this.form.personal_laboratorio.persona.ap=(this.titleCasePipe.transform(this.form.personal_laboratorio.persona.ap))
  this.form.personal_laboratorio.persona.am=(this.titleCasePipe.transform(this.form.personal_laboratorio.persona.am))
  this.form.personal_laboratorio.profesion=(this.titleCasePipe.transform(this.form.personal_laboratorio.profesion))
  console.log(this.form)
  if(formu.valid)
  {
    console.log("ok")
    if(this.form.personal_laboratorio.foto !='')
    {
    this.usuarioService.uploadImagen(this.fileToUpload).subscribe(data=>{
      console.log("imagen guardada")
    })
  }
  this.usuarioService.actualizarUsuario(this.form).subscribe(data =>{

    this.router.navigate(['/usuarios/listar']);
  })
}
}
rolseleccionar(d){
  console.log(d)
  }
setestado(newestad){
  this.form.estado=newestad

}

validatePassword(){
  console.log("jfajf");
 
  validatePassword();
}
}
