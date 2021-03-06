import { Component, OnInit, ViewChild, ElementRef, Input } from '@angular/core';
import {NavigationStart, Router} from '@angular/router';
import { Paciente, Solicitud , Area, Examen_solicitado, Usuario} from '../../models';
import{SolicitudesService } from '../../solicitudes/solicitudes.service'

import { DatePipe,  TitleCasePipe, UpperCasePipe } from '@angular/common';

import {FormControl, FormBuilder, FormGroup, Validators, NgForm } from '@angular/forms';
declare const validatefechas:any;
declare const cerrarModal:any;
import {debounceTime} from 'rxjs/operators'
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
item:string="Agrupar"
grupos:any[];
grupo

control=new FormControl('')
  constructor(private solicitudesService:SolicitudesService, private datePipe:DatePipe, private router:Router) {
    this.bandera=true;
    this.grupo={
      label:'Agrupar',
      seleccionador:'',
      agrupador:''
    }
  
    this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
    this.date=new Date();
    this.fechita=this.datePipe.transform(this.date,"dd-MM-yyyy")
    this.control.valueChanges.pipe(debounceTime(450)).subscribe(value=>{
      console.log("hola"+value)
      this.form.caracter_nombre_examen=value
      
  }) 
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
    this.control.valueChanges.pipe(debounceTime(450)).subscribe(value=>{
      console.log("hola"+value)

      this.form.caracter_nombre_examen=value
      this.filtro_completo2()
      
  }) 
    this.solicitudesService.filtrarSolicitudes_de_Paciente(this.form.cedula, this.area.nombre, this.form.caracter_nombre_examen, this.form.fech, this.form.fecha_inicio, this.form.fecha_fin, this.form.estado_solicitud).subscribe(data => {
this.examenes_solicitados=data

    })
   
   }

  ngOnInit() {
    this.brands = [
      { label: 'Entregado', value: 'Entregado' },
      { label: 'Recibido', value: 'Recibido' }
   
  ];
  this.grupos = [
    { label: 'Examen', seleccionador: 'e.nombre', agrupador: 'nombre'},
    { label: 'Area', seleccionador: 'a.nombre' , agrupador: 'nombre'},
    { label: 'Paciente', seleccionador: 's.cedula_paciente' , agrupador: 'cedula_paciente'},
    { label: 'Estado', seleccionador: 's.estado_solicitud' , agrupador: 'estado_solicitud'}
 
];
    this.cols = [
      
   
      { field: 'fecha', header: 'Fecha' }
      
  ];
  }


  @ViewChild('modal') modal:ElementRef
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
    console.log(this.form.fech)
    console.log(this.area.nombre+" "+this.area.cod_area)
    this.solicitudesService.filtrarSolicitudes_de_Paciente(this.form.cedula, this.form.nombre_area, this.form.caracter_nombre_examen, this.form.fech, this.form.fecha_inicio, this.form.fecha_fin, this.form.estado_solicitud).subscribe(data=>{
   
      this.examenes_solicitados=data
    })
  }
  
  }
  filtro_completo2(){
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
     if( ($('#fecha_inicio').val() <=$('#fecha_fin').val()) )
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
    window.location.href = 'http://localhost:8080/jasperserver/rest_v2/reports/reports/examenes_solicitados.pdf?am_usuario='+this.currentUser.personal_laboratorio.persona.am+'&cedula='+this.form.cedula+'&ap_usuario='+this.currentUser.personal_laboratorio.persona.ap+'&nombre_usuario='+this.currentUser.personal_laboratorio.persona.nombre+'&nombre_area='+this.form.nombre_area+'&fecha_inicio='+this.form.fecha_inicio+'&fecha_fin='+this.form.fecha_fin+'&j_username='+'jasperadmin'+'&j_password='+'jasperadmin';
   }
   klp(value){
     console.log(value)
     console.log(this.item)
     localStorage.setItem('grupo', JSON.stringify(this.grupo));
     console.log(this.grupo.seleccionador)
this.router.navigate(['/reportes/examenes-solicitados'])
   }
   ab(){
     cerrarModal()
   }

}