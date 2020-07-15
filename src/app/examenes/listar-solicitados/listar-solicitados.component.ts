import { Component, OnInit } from '@angular/core';
import {NavigationStart, Router} from '@angular/router';
import { Paciente, Solicitud , Area, Examen_solicitado, Usuario} from '../../models';
import{SolicitudesService } from '../../solicitudes/solicitudes.service'

import { DatePipe,  TitleCasePipe, UpperCasePipe } from '@angular/common';

import {FormControl, FormBuilder, FormGroup, Validators, NgForm } from '@angular/forms';
declare const validatefechas:any;
@Component({
  selector: 'app-listar-solicitados',
  templateUrl: './listar-solicitados.component.html',
  styleUrls: ['./listar-solicitados.component.css']
})
export class ListarSolicitadosComponent implements OnInit {
  form;
  areas:Area[]
brands:any[]
cols:any[]
paciente:Paciente
area:Area;
solicitudes:Solicitud[]
solicitudes_nuevas:Solicitud[]
examenes_solicitados:Examen_solicitado[]
date:Date;
fechita:String;
currentUser:Usuario;
bandera:boolean
  constructor(private solicitudesService:SolicitudesService, private datePipe:DatePipe, private router:Router) {
    this.bandera=true;
    this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
    this.date=new Date();
    this.fechita=this.datePipe.transform(this.date,"dd-MM-yyyy")
   
    this.area=new Area;

this.solicitudesService.getAllAreas().subscribe(data=>{
  this.areas=data;
  console.log(this.areas)
})
    this.form={
      fech:'',
      fecha_inicio:'2019-03-03',
      fecha_fin:this.datePipe.transform(new Date(),"yyyy-MM-dd"),
      caracter_nombre_examen:'',
      estado_solicitud:'',
      cedula:'',
      prueba:'Agrupar',
      nombre_area:''
    }
    this.paciente= JSON.parse(localStorage.getItem('paciente'));
    this.examenes_solicitados=this.paciente.examenes_solicitados
    this.solicitudesService.filtrarSolicitudes_de_Paciente(this.form.cedula, this.area.nombre, this.form.caracter_nombre_examen, this.form.fech, this.form.fecha_inicio, this.form.fecha_fin, this.form.estado_solicitud).subscribe(data => {
this.examenes_solicitados=data
console.log(this.solicitudes)
    })
   
   }

  ngOnInit() {
    this.brands = [
      { label: 'Entregado', value: 'Entregado' },
      { label: 'Recibido', value: 'Recibido' }
   
  ];
    this.cols = [
      
   
      { field: 'fecha', header: 'Fecha' }
      
  ];
  }
  filtro_completo(formu : NgForm){
    //console.log(this.form.fech)
  if(this.form.resultados == null)
  {
   this.form.resultados=""
  }
  if(this.form.estado_solicitud == null)
  {
   this.form.estado_solicitud=""
  }
  if(this.form.nombre_area==null)
  {
    this.form.nombre_area=""
  }
  
     console.log(this.form.estado_solicitud)
     validatefechas()
     if(formu.valid && ($('#fecha_inicio').val() <=$('#fecha_fin').val()) )
     {
       
    $('#addevent').removeClass('show');
    console.log(this.form.fech)
    console.log(this.area.nombre+" "+this.area.cod_area)
    this.solicitudesService.filtrarSolicitudes_de_Paciente(this.form.cedula, this.form.nombre_area, this.form.caracter_nombre_examen, this.form.fech, this.form.fecha_inicio, this.form.fecha_fin, this.form.estado_solicitud).subscribe(data=>{
      this.examenes_solicitados=data
    })
  }
  
  }
  buscar_por_fecha(fech){
    console.log(fech)
  
  }
  
  exportPdf() {
    window.location.href = 'http://localhost:8080/jasperserver/rest_v2/reports/reports/examenes_solicitados.pdf?am_usuario='+this.currentUser.personal_laboratorio.persona.am+'&cedula='+this.form.cedula+'&ap_usuario='+this.currentUser.personal_laboratorio.persona.ap+'&nombre_usuario='+this.currentUser.personal_laboratorio.persona.nombre+'&nombre_paciente='+this.paciente.persona.nombre+'&ap_paciente='+this.paciente.persona.ap+'&am_paciente='+this.paciente.persona.am+'&nombre_area='+this.form.nombre_area+'&fecha_inicio='+this.form.fecha_inicio+'&fecha_fin='+this.form.fecha_fin+'&j_username='+'jasperadmin'+'&j_password='+'jasperadmin';
   }
   klp(){
     console.log("hola")
this.router.navigate(['/reportes/examenes-solicitados'])
   }

}
