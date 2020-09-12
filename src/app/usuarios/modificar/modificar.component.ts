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
    this.imageUrl=this.imageUrl+this.form.personal_laboratorio.foto;
    //if(this.form.personal_laboratorio.foto ==''){
     // this.imageUrl="assets/images/photo_profile_user.png"
   /// }
   
    this.rolSeleccionado=this.form.rol.nombre
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
   photoSelected:string | ArrayBuffer//muestra la imagen que el usuario sube
bandera:boolean=false;
file: File=null;
onPhotoSelected(event: HtmlInputEvent): void {
  
  if (event.target.files && event.target.files[0]) {//verificando si por lomenos esta subiendouna foto
    this.file = <File>event.target.files[0];//ñaimagen guarda en file
    // image preview
    const reader = new FileReader();//lee un archivo
    reader.onload = e =>
     this.photoSelected = reader.result;//llena photoselect con el resultado que esta leendo
    reader.readAsDataURL(this.file);
    console.log(this.file.name)
  this.form.personal_laboratorio.foto=this.file.name
  }
}

   handleFileInput(file: FileList) {

    this.fileToUpload = file.item(0);

    //Show image preview
    var reader = new FileReader();
    reader.onload = e => {
      //this.imageUrl = event.target.result;
      this.photoSelected=reader.result// reader.result lee el archivo y lo asigna a photo selected
      reader.readAsDataURL
    }
    reader.readAsDataURL(this.fileToUpload);
    //alert(this.fileToUpload.name)
    this.form.personal_laboratorio.foto="http://localhost:9898/api/file/"+this.fileToUpload.name;
    alert(this.form.personal_laboratorio.foto)
//this.form.personal_laboratorio.foto=this.fileToUpload.name;
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
   console.log(this.file!=null)
    if(this.form.personal_laboratorio.foto !='' && this.file!=null)
    {
    this.usuarioService.uploadImagen(this.file).subscribe(data=>{
      console.log("imagen guardada")
    })
  }
  this.usuarioService.actualizarUsuario(this.form).subscribe(data =>{
    
    alert("Usuario actualizado")

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
