import { Component, OnInit, Renderer2, Input, ViewEncapsulation } from '@angular/core';
import {NavigationStart, Router} from '@angular/router';
import {Usuario, Rol, Menu, Proceso, Persona, Personal} from './models'
import { ExternalReference } from '@angular/compiler';
import {UsuariosService} from './usuarios/usuarios.service'
import {AuthenticationService} from './authentication/authentication.service'
import { NgForm } from '@angular/forms'; 

import {PacientesService} from './pacientes/pacientes.service'
import {SolicitudesService} from './solicitudes/solicitudes.service'
import { ServicioService } from './servicio.service';
declare const $: any;
declare const jquery: any;
declare const screenfull: any;
declare const validatePassword:any;
declare var Stimulsoft: any;
import * as global from './shared/variables_global'; //<== HERE
interface HtmlInputEvent extends Event {
    target: HTMLInputElement & EventTarget;
  }
  
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  encapsulation: ViewEncapsulation.None
})

export class AppComponent implements OnInit {
    url_del_backup: string = ''+global.server+'api/file/';
    roles:string[]=[];
    num_pacientes:number;
num_solicitudes:number;
num_solicitudes_pendientes:number;
num_doctores:number;
    form;
    form1;
    panels: any[]=[]
    i:number;
    a;
    @Input() usuarioActual;
    previousUrl: string;
currentUser:Usuario;
menus:String[]
links: Array <{text: String, path: String}> = [];
enlaces: Array <{text: String, path: String}> = [];
someArray:any[]
nombre:String
link:String
link_foto_perfil_usuario:string=""+global.server+"api/file/";

imageUrl: string = "";
    constructor(private serviciosService: ServicioService, private authenticationService : AuthenticationService,  private pacienteService : PacientesService, private solicitudesService: SolicitudesService, private usuariosService:UsuariosService, private renderer: Renderer2, private router: Router) {
      console.log("appcomponente.html")
    pacienteService.contar().subscribe(data => {
        this.num_pacientes=data;
    });
    solicitudesService.numSolicitudes().subscribe(data => {
      this.num_solicitudes=data;
  });
  solicitudesService.numSolicitudesPendientes().subscribe(data => {
      this.num_solicitudes_pendientes=data;
  });
        usuariosService.numDoctores().subscribe(data => {
          this.num_doctores=data;
      });   
     console.log('ejecutando el componente principal')
            
          this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
      
        this.i=0;
     
       
       

  




     
          this.router.events.subscribe((event) => {
      
          this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
          //this.imageUrl=this.link_foto_perfil_usuario+this.currentUser.personal_laboratorio.foto
         //this.link_foto_perfil_usuario=this.currentUser.personal_laboratorio.foto
     
       // this.recuperar_foto_perfil();
          for(let i=0;i<1 ;i++)
      this.i=0;
              if (event instanceof NavigationStart) {
                  if (this.previousUrl) {
                      this.renderer.removeClass(document.body, this.previousUrl);
            
                  }
                  const currentUrl = event.url.split('/');
                  const currentUrlSlug = currentUrl[currentUrl.length - 1];
           
                  if (currentUrlSlug) {
                      this.renderer.addClass(document.body, currentUrlSlug);
                 
                     }
                  this.previousUrl = currentUrlSlug;
                  
                  if(this.previousUrl != 'sing-in')
                  {
                  //this.imageUrl=this.link_foto_perfil_usuario+this.currentUser.personal_laboratorio.foto
                 // alert(this.imageUrl)
                }
                 // this.router.navigate(['/dashboard/main']);
        
                  
              }
          }
         
          
          );
          console.log(this.previousUrl+"klp")     
         
    }
    cambiar(){
        console.log('hola'+this.previousUrl)
     this.router.navigate(['dashboard/main']);
      
     // this.router.navigate(['/dashboard/main']);
     $('body').removeClass(this.previousUrl);
     $('body').addClass('main');
           
    }
    
  Logout() {
 
  
    console.log(this.currentUser)
    localStorage.removeItem('currentUser');
    this.router.navigate(['/authentication/sign-in']);
    //window.location.href='http://localhost:4200/authentication/sign-in'
  }
  recuperar_foto_perfil(){
      
    this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
    console.log(this.currentUser.cedula)
    if(this.currentUser.personal_laboratorio.foto ==''){
     this.imageUrl="assets/images/photo_profile_user.png"
     console.log(this.imageUrl)
   }
   else{
   this.imageUrl=this.imageUrl+this.currentUser.personal_laboratorio.foto;
   console.log(this.imageUrl)
   }
  }

    ngOnInit() {










        // ========
        $(function () {
            $('.selectpicker').selectpicker();
            // Datetimepicker plugin
            $('.datetimepicker').bootstrapMaterialDatePicker({
                format: 'dddd DD MMMM YYYY - HH:mm',
                clearButton: true,
                weekStart: 1
            });
  
            $('.datepicker').bootstrapMaterialDatePicker({
                format: 'dddd DD MMMM YYYY',
                clearButton: true,
                weekStart: 1,
                time: false
            });
  
            $('.timepicker').bootstrapMaterialDatePicker({
                format: 'HH:mm',
                clearButton: true,
                date: false
            });
        });
        $('.theme-light-dark .t-light').on('click', function() {
            $('body').removeClass('menu_dark');
        });

        $('.theme-light-dark .t-dark').on('click', function() {
            $('body').addClass('menu_dark');
          
        });

        $('.m_img_btn').on('click', function() {
            $('body').toggleClass('menu_img');
        });

        $('.boxs-close').on('click', function(){
            const element = $(this);
            const cards = element.parents('.card');
            cards.addClass('closed').fadeOut();
        });
          
        $('#add-event').submit(function(e) {
            e.preventDefault();
            const form = $(this);
  
            const newEvent = $('<div class="event-control p-10 mb-10">' + $('#event-title').val() + '<a class="pull-right text-muted event-remove"><i class="fa fa-trash-o"></i></a></div>');
  
            $('#external-events .event-control:last').after(newEvent);
  
            $('#external-events .event-control').each(function() {
  
                // store data so the calendar knows to render an event upon drop
                $(this).data('event', {
                    title: $.trim($(this).text()), // use the element's text as the event title
                    stick: true // maintain when user navigates (see docs on the renderEvent method)
                });
  
                // make the event draggable using jQuery UI
                $(this).draggable({
                    zIndex: 999,
                    revert: true,      // will cause the event to go back to its
                    revertDuration: 0  // original position after the drag
                });
  
            });
  
            $('#external-events .event-control .event-remove').on('click', function() {
                $(this).parent().remove();
            });
  
            form[0].reset();
  
            $('#cal-new-event').modal('hide');
  
        });
    }
    guardar(formu : NgForm){
        validatePassword()
        console.log(formu.valid)
        if(formu.valid && ($('#password_confirmation').val() == $('#password').val()) )
        {
        this.usuariosService.cambiarContrasenia(this.currentUser.cedula,$('#password_confirmation').val()).subscribe(data =>{
        
    this.router.navigate(['/authentication/sign-in']);
    //window.location.href='http://localhost:4200/dashboard/main'
    console.log(data)
        })
    }
    }
    accesoMenu(nombreMenu: string): boolean {

      let acceso = false;
      // let menusAux: Menu;
     
        for (const menu of this.currentUser.rol.menus) {
            
          if (nombreMenu === menu.nombre ) {
            acceso = true;
          }
        }
   
      return acceso;
      }
   estado_barra:boolean=false;
    ver_barra_derecha(){
        alert("klp")
    }
  cambiarRol() {
 
}
crear_copia(){
    this.serviciosService.crearBackup()
    .subscribe(data => {

console.log(this.url_del_backup+data)
alert("Backup realizado con exito")
window.location.href = this.url_del_backup+data
    
    },
    error => {
    alert("error")
    });
}
photoSelected:string | ArrayBuffer//muestra la imagen que el usuario sube
bandera:boolean=false;
file: File=null;
restaurar_copia(event: HtmlInputEvent): void {
    console.log("hjhjkh")
    if (event.target.files && event.target.files[0]) {//verificando si por lomenos esta subiendouna foto
        this.file = <File>event.target.files[0];//ñaimagen guarda en file
        // image preview
        this.serviciosService.restaurarCopia(this.file.name)
        .subscribe(data => {
    
    console.log(data)
    alert("Restauracion realizado con exito")
    //window.location.href = this.url_del_backup+data
    this.router.navigate(['/authentication/sign-in']);
        
        },
        error => {
        alert("error")
        });
      }
    console.log("no se selecciono ningun archjkjkjlkivoooo")
  }
}
