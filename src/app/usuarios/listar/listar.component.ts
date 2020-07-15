import { Component, OnInit, ViewChild, ElementRef , ViewEncapsulation } from '@angular/core';
import {NavigationStart, Router} from '@angular/router';
import {UsuariosService} from '../usuarios.service'
import {Paciente, Usuario, Rol} from '../../models'
import { SelectItem } from 'primeng/primeng';
import * as jspdf from 'jsPDF'; 
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
//import swal from 'sweetalert2'
import 'jspdf-autotable';
declare const $: any;
declare const showConfirmMessage:any
declare var Stimulsoft: any;

declare const Swal: any;
@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.css']
})

export class ListarComponent implements OnInit {
  numero:number
  options: any;
  designer: any;
  cols:any[];
  brands:SelectItem[];
  pageActual: number = 1;
  @ViewChild('dataTable') table;
  dataTable: any;
  currentUser:Usuario;
usuarios:Usuario[];
form:Usuario;
rootNode: any;
roles:Rol[]=[]
usuario:Usuario=new Usuario()

photoSelected:string | ArrayBuffer//muestra la imagen que el usuario sube
imageUrl: string = "http://localhost:9898/api/file/";
  constructor(private usuariosService:UsuariosService, private router: Router, private node:ElementRef) { 
    
    this.usuariosService.getAllRoles().subscribe(data=>{
      this.roles=data;
      console.log(this.roles)
       })
    this.form=new Usuario()
    this.numero=1;
this.rootNode=node;

   
    usuariosService.filtro(this.form).subscribe(data => {
      
      this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
      this.usuarios=data;
      for(let i=0;i<this.usuarios.length; i++)
     {
       this.usuarios[i].nombres=this.usuarios[i].personal_laboratorio.persona.nombre+" "+this.usuarios[i].personal_laboratorio.persona.ap+" "+this.usuarios[i].personal_laboratorio.persona.am
     }
      
    });
  
   
  }

  ngOnInit() {
 
    this.cols = [
      { field: 'cedula', header: 'Cedula' },
      { field: 'nombres', header: 'Usuario' },
      { field: 'estado', header: 'Estado' }
  ];
  this.brands = [
    { label: 'Habilitado', value: 'habilitado' },
    { label: 'Deshabilitado', value: 'deshabilitado' }
 
];
    //var el=$(this.rootNodhje.nativeElemnt).find('.js-basic-example')[0]

    
      $('.js-sweetalert button').on('click', function () {
         
      });
 

  // These codes takes from http://t4t5.github.io/sweetalert/
 

 


}
  

  mostrarformparamodificar(paciente){
    localStorage.setItem('paciente', JSON.stringify(paciente));
  }

  actualizar(user)
  {
    
    localStorage.setItem('usuarioamodificar', JSON.stringify(user));
  }
  ver(user)
  {
    
   this.usuario=user;
   
   this.imageUrl=this.imageUrl+this.usuario.personal_laboratorio.foto;
  }
  exportPdf() {
    window.location.href = 'http://localhost:8080/jasperserver/rest_v2/reports/reports/usuarios.pdf?am_usuario='+this.currentUser.personal_laboratorio.persona.am+'&estado='+this.form.estado+'&ap_usuario='+this.currentUser.personal_laboratorio.persona.ap+'&cedula='+this.form.cedula+'&nombre_usuario='+this.currentUser.personal_laboratorio.persona.nombre+'&rol='+this.form.rol.nombre+'&nombres='+this.form.nombres+'&j_username='+'jasperadmin'+'&j_password='+'jasperadmin';
 
    /*
    let doc = new jsPDF();
let col = ["#", "Cedula", "Usuario","Rol","estado"];
let rows = [];
for(let i=0; i<this.usuarios.length; i++){
    let temp = [i+1,this.usuarios[i].cedula, this.usuarios[i].nombres,this.usuarios[i].rol.nombre,this.usuarios[i].estado];
    rows.push(temp);
}
doc.autoTable(col, rows);
doc.save('usuarios.pdf');
*/
}
filtro_completo(){
  console.log(this.form.cedula)
  if(this.form.estado==null)
  {
    this.form.estado="";
  }
  
  if(this.form.rol == null)
  {
    this.form.rol=new Rol()
this.form.rol.nombre=""
  }
this.usuariosService.filtro(this.form).subscribe(data=>{
  this.usuarios=data
  console.log(data)
  for(let i=0;i<this.usuarios.length; i++)
  {
    this.usuarios[i].nombres=this.usuarios[i].personal_laboratorio.persona.nombre+" "+this.usuarios[i].personal_laboratorio.persona.ap+" "+this.usuarios[i].personal_laboratorio.persona.am
  }
})

}

actualizarEstados(usuario, estado){
  usuario.estado=estado
  this.usuariosService.actualizarEstado(usuario).subscribe(data=>{
    this.filtro_completo()
     })
}
c(){
alert(this.numero)
  //window.location.href = 'http://localhost:8080/jasperserver/rest_v2/reports/reports/areas.pdf'
//.html?parametro=5
window.location.href = 'http://localhost:8080/jasperserver/rest_v2/reports/reports/areas.pdf?parametro='+this.numero
  /*
  console.log('Loading Designer view');

    console.log('Set full screen mode for the designer');
    this.options = new Stimulsoft.Designer.StiDesignerOptions();
    this.options.appearance.fullScreenMode = false;

    console.log('Create the report designer with specified options');
    this.designer = new Stimulsoft.Designer.StiDesigner(this.options, 'StiDesigner', false);

    console.log('Edit report template in the designer');
    this.designer.report = new Stimulsoft.Report.StiReport();

    console.log('Load report from url');
    this.designer.report.loadFile('/reports/Report.mrt');
    this.designer.report.renderAsync(function () {
			var data = this.designer.report.exportDocument(Stimulsoft.Report.StiExportFormat.Pdf);
			(<any>Object).saveAs(data, "Report.pdf", "application/pdf");
		})
    console.log('Rendering the designer to selected element');
    this.designer.renderHtml('designer');

    console.log('Loading completed successfully!');
    */
}
mensaje:string=""
color:string=''
actualizarEstado(usuario, estado){
 if(estado=='habilitado')
 {
   this.color='#5cb85c'
   this.mensaje="habilitar"
 }
 else{
   
  this.color='#d9534f'
  this.mensaje="deshabilitar"
 }
  //showConfirmMessage();
  Swal({
    title: 'Esta seguro de '+this.mensaje+' al usuario?',
    text: usuario.personal_laboratorio.persona.nombre+' '+usuario.personal_laboratorio.persona.ap+' '+usuario.personal_laboratorio.persona.am+' sera '+estado,
    type: 'warning',
    showCancelButton: true,
    confirmButtonColor: this.color,
    
    confirmButtonText: 'Si',
    cancelButtonText: 'No',
    closeOnConfirm: false
}).then((result) => {
  if (result.value) {
    
  console.log("ELEMINIADO")
  usuario.estado=estado
  this.usuariosService.actualizarEstado(usuario).subscribe(data=>{
    this.filtro_completo()
     })
    Swal.fire(
    estado,
    'El usuario ha sido '+estado,
    'success'
    )
  }
  else
  {
    console.log("no eliminado")
  }
  });
  
}

}