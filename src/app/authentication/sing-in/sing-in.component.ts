import { Component, OnInit, ViewEncapsulation, ViewChild } from '@angular/core';
import { AuthenticationService } from '../authentication.service';
import { Router, ActivatedRoute } from '@angular/router';
import { NgForm } from '@angular/forms'; 
import { FormsModule } from '@angular/forms'; 
import {FormBuilder, FormGroup, Validators, FormControl,ReactiveFormsModule } from '@angular/forms';
declare const $: any;

@Component({
  selector: 'app-sing-in',
  templateUrl: './sing-in.component.html',
  styleUrls: ['./sing-in.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class SingInComponent implements OnInit {
  mensaje:String;
  public loginForm: FormGroup;
  login:String='';
 recargar(){
   return true;
 }
  form={
    login:'',
    password:''
  }
  year = (new Date()).getFullYear();
  yearold=new Date("2013-09-02").getFullYear();
  mivariable :string;
  constructor(  private router: Router,
    private authenticationService: AuthenticationService, private fb:FormBuilder ){ 
      this.mivariable='d3'
      console.log(this.mivariable);
      
       window.location.href
    
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
    $("body").addClass("authentication sidebar-collapse");
    $(".navbar-toggler").on('click',function() {
      $("html").toggleClass("nav-open");
    });



    $('.form-control').on("focus", function() {
        $(this).parent('.input-group').addClass("input-group-focus");
    }).on("blur", function() {
        $(this).parent(".input-group").removeClass("input-group-focus");
    });
  }



 
  validaruser(formu : NgForm) {

    console.log(this.form.login+" "+this.form.password)
if(formu.valid)
{
    this.authenticationService.login(this.form).subscribe(user => {
if(user !=null)
{
          console.log(user);
          this.router.navigate(['/dashboard/main']);
         // window.location.href='http://localhost:4200/dashboard/main'
}
else   
      {
  
        console.log('lafjkldfjasdkljf');
          this.router.navigate(['/authentication/sign-in']);
          this.mensaje='usuario/contraseña incorrectos'
       
      }
      
  },
  error => {
    console.log('lpm');
      this.router.navigate(['/authentication/sign-in']);
      this.mensaje='usuario/contraseña incorrectos'
   
  }



  )
}
else{
  console.log("klp")
}

}
}