import { Component, OnInit } from '@angular/core';
import { Paciente, Solicitud , Area, Examen_solicitado, Usuario} from '../../models';
import{SolicitudesService } from '../../solicitudes/solicitudes.service'

import {FormControl, FormBuilder, FormGroup, Validators, NgForm } from '@angular/forms';
import { DatePipe,  TitleCasePipe, UpperCasePipe } from '@angular/common';
import { PacientesService } from '../pacientes.service';
declare const validatefechas:any;
import {debounceTime} from 'rxjs/operators'
@Component({
  selector: 'app-historial-clinico',
  templateUrl: './historial-clinico.component.html',
  styleUrls: ['./historial-clinico.component.css']
})
export class HistorialClinicoComponent implements OnInit {
  form;
  
  control=new FormControl('')
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
cedula:string=""
  constructor(private solicitudesService:SolicitudesService, private datePipe:DatePipe, private pacientesService:PacientesService) {
    this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
    this.date=new Date();
    this.fechita=this.datePipe.transform(this.date,"dd-MM-yyyy")
   
    this.area=new Area;

this.solicitudesService.getAllAreas().subscribe(data=>{
  this.areas=data;
})
    this.form={
      fech:'',
      fecha_inicio:'2019-03-03',
      fecha_fin:this.datePipe.transform(new Date(),"yyyy-MM-dd"),
      caracter_nombre_examen:'',
      estado_solicitud:''
      ,nombre_area:''
    }
    //this.paciente= JSON.parse(localStorage.getItem('paciente'));
    this.cedula=localStorage.getItem('cedula')

    this.pacientesService.getByCedula(this.cedula).subscribe(data=>{
   
      this.paciente=data
      
    this.examenes_solicitados=this.paciente.examenes_solicitados
    })
   
    this.control.valueChanges.pipe(debounceTime(450)).subscribe(value=>{
      console.log("hola"+value)
      this.form.caracter_nombre_examen=value
      this.filtro_completo2()
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
  filtro_completo(formu : NgForm)
  {
    console.log(formu.valid)
  validatefechas()
    if(formu.valid && ($('#fecha_inicio').val() <=$('#fecha_fin').val()) )
    {
    $('#addevent').removeClass('show');
    //$('#myModal').modal('hide');
    console.log(this.form.estado_solicitud)
    console.log("fechainicio"+this.form.fecha_inicio)
    if(this.form.nombre_area==null)
    {
      this.form.nombre_area=""
    }
    if(this.form.estado_solicitud==null)
    {
      this.form.estado_solicitud=""
    }

    this.solicitudesService.filtrarSolicitudes_de_Paciente(this.paciente.cedula, this.form.nombre_area, this.form.caracter_nombre_examen, this.form.fech, this.form.fecha_inicio, this.form.fecha_fin, this.form.estado_solicitud).subscribe(data=>{
      this.examenes_solicitados=data
    })
  }
  }
  buscar_por_fecha(fech){
    console.log(fech)
  
  }
  
 exportPdf() {
  window.location.href = 'http://localhost:8080/jasperserver/rest_v2/reports/reports/examenes_de_pacientes2.pdf?am_usuario='+this.currentUser.personal_laboratorio.persona.am+'&cedula='+this.paciente.cedula+'&ap_usuario='+this.currentUser.personal_laboratorio.persona.ap+'&nombre_usuario='+this.currentUser.personal_laboratorio.persona.nombre+'&nombre_paciente='+this.paciente.persona.nombre+'&ap_paciente='+this.paciente.persona.ap+'&am_paciente='+this.paciente.persona.am+'&nombre_area='+this.form.nombre_area+'&fecha_inicio='+this.form.fecha_inicio+'&fecha_fin='+this.form.fecha_fin+'&j_username='+'jasperadmin'+'&j_password='+'jasperadmin';
 }

 filtro_completo2()
 {
 
   $('#addevent').removeClass('show');
   //$('#myModal').modal('hide');
   console.log(this.form.estado_solicitud)
   console.log("fechainicio"+this.form.fecha_inicio)
   if(this.form.nombre_area==null)
   {
     this.form.nombre_area=""
   }
   if(this.form.estado_solicitud==null)
   {
     this.form.estado_solicitud=""
   }

   this.solicitudesService.filtrarSolicitudes_de_Paciente(this.paciente.cedula, this.form.nombre_area, this.form.caracter_nombre_examen, this.form.fech, this.form.fecha_inicio, this.form.fecha_fin, this.form.estado_solicitud).subscribe(data=>{
     this.examenes_solicitados=data
   })
 
 }
}
