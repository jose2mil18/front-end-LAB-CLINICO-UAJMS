import { Component, OnInit , Output, EventEmitter} from '@angular/core';
import {ResultadosService} from '../resultados.service'
import {SolicitudesService} from '../../solicitudes/solicitudes.service'
import { Solicitud , Paciente, Persona, Examen_solicitado, Usuario} from '../../models';
import {Router} from '@angular/router'
import { SelectItem } from 'primeng/primeng';

import { DatePipe,  TitleCasePipe, UpperCasePipe } from '@angular/common';
import {PacientesService} from '../../pacientes/pacientes.service';


import 'jspdf-autotable';
import * as jspdf from 'jsPDF'; 
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';

import {FormControl, FormBuilder, FormGroup, Validators, NgForm } from '@angular/forms';
declare const validatefechas:any;
declare const $: any;
@Component({
  selector: 'app-listar-analisis-sin-resultados',
  templateUrl: './listar-analisis-sin-resultados.component.html',
  styleUrls: ['./listar-analisis-sin-resultados.component.css']
})
export class ListarAnalisisSinResultadosComponent implements OnInit {
  brands:SelectItem[];
  form;
  cols:any[];
  cols2:any[];
  pacientes:Paciente[]
currentUser:Usuario
  solicitudSinResultado:Solicitud=null;
solicitudes:Solicitud[];
  constructor(private datePipe: DatePipe, private pacientesService:PacientesService, private resultadosService:ResultadosService, private solicitudesService:SolicitudesService,public router:Router) { 
    this.pacientes=[]
    this.form={
      fech:'',
      fecha_inicio:'2019-03-03',
      fecha_fin:this.datePipe.transform(new Date(),"yyyy-MM-dd"),
      caracter_nombre:''
      ,cedula:'',
      estado_solicitud:'',
      resultados:'Sin Registrar'
    }
    this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
  
  
    resultadosService.getAnalisisSinResultados().subscribe(data => {
      this.solicitudes=data;
      for(let i=0;i<this.solicitudes.length; i++){
        this.solicitudes[i].nombres_paciente=this.solicitudes[i].paciente.persona.nombre+" "+this.solicitudes[i].paciente.persona.ap+" "+this.solicitudes[i].paciente.persona.am
      }
    });

  }

  ngOnInit() {
    this.brands = [
      { label: 'Sin Registrar', value: 'Sin Registrar' }
   
  ];
    this.cols = [
      
      { field: "nombres_paciente", header: 'Paciente' },
   
      { field: 'estado', header: 'Estado' }
  ];
    $(function () {
      $('.js-basic-example').dataTable(
        {
          "searching": false
        }
      );

      // Exportable table
    
  });
  }
  registrar(solicitud:Solicitud){
    
    localStorage.removeItem('solicitudSinResultado'); 
    localStorage.setItem('solicitudSinResultado', JSON.stringify(solicitud));
    this.router.navigate(['/resultados/registrar']);
  }

  modificar(solicitud:Solicitud){
    
    localStorage.removeItem('analisisSinResultadosConResultadosaModificar'); 
    localStorage.setItem('analisisSinResultadosConResultadosaModificar', JSON.stringify(solicitud));
    this.router.navigate(['/resultados/modificar']);
  }
  mostrarpdf(solicitud:Solicitud){
    localStorage.removeItem('solicitudaimprimir'); 
    localStorage.setItem('solicitudaimprimir', JSON.stringify(solicitud));
  
  }
  
exportPdf() {
  /*
  let examenes=""
  let doc = new jsPDF();
let col = ["#", "Paciente", "Estado","Fecha","Analisis"];
let rows = [];
for(let i=0; i<this.analisisSinResultados.length; i++){
  examenes=""
  if(this.analisisSinResultados[i].examenes_solicitados.length>0){
    for(let j=0;j<this.analisisSinResultados[i].examenes_solicitados.length; j++){
      console.log(i+" "+j)
      console.log(this.analisisSinResultados[i].examenes_solicitados.length)
examenes=examenes+this.analisisSinResultados[i].examenes_solicitados[j].precio_examen.examen.nombre+"\n"
    }
  }
  let temp = [i+1,this.analisisSinResultados[i].nombres_paciente,this.analisisSinResultados[i].estado,this.analisisSinResultados[i].fecha,examenes];
  rows.push(temp);
}
doc.autoTable(col, rows);
doc.save('analisisSinResultados.pdf');
}
exportPdf() {
  */
  window.location.href = 'http://localhost:8080/jasperserver/rest_v2/reports/reports/solicitudes_sin_resultados.pdf?am_usuario='+this.currentUser.personal_laboratorio.persona.am+'&cedula='+this.form.cedula+'&ap_usuario='+this.currentUser.personal_laboratorio.persona.ap+'&nombre_usuario='+this.currentUser.personal_laboratorio.persona.nombre+'&fecha_inicio='+this.form.fecha_inicio+'&fecha_fin='+this.form.fecha_fin+'&estado_solicitud='+this.form.estado_solicitud+'&resultados='+this.form.resultados+'&j_username='+'jasperadmin'+'&j_password='+'jasperadmin';
}
busca_pacientes(){
  console.log(this.form.resultados);
  this.pacientesService.buscarPacientePorCaracterDeNombres(this.form.caracter_nombre, this.form.resultados).subscribe(data=>{
    this.pacientes=data
  
    for(let i=0;i<this.pacientes.length; i++)
    {
      this.pacientes[i].nombres=this.pacientes[i].persona.nombre+" "+this.pacientes[i].persona.ap+" "+this.pacientes[i].persona.am
   // this.pacientes[i].fnac=this.datePipe.transform(this.pacientes[i].fnac,"dd-MM-yyyy")
     
  }
     
    console.log(this.pacientes)
  })//----------------------------------
  for(let i=0;i<this.pacientes.length; i++)
  {
    if(this.pacientes[i].nombres==this.form.caracter_nombre){
      this.form.cedula=this.pacientes[i].cedula
    }
    else{
      this.form.cedula=''
    }
   }

   console.log(this.form.cedula)
   if(this.form.cedula !='' || this.form.caracter_nombre == '')
   {
  this.solicitudesService.filtrarPaciente(this.form.cedula,  this.form.fech, this.form.fecha_inicio, this.form.fecha_fin, this.form.estado_solicitud, this.form.resultados).subscribe(data => {
    console.log(data);
    console.log(this.form.cedula)
    this.solicitudes=data;

    for(let i=0;i<this.solicitudes.length; i++){
      this.solicitudes[i].nombres_paciente=this.solicitudes[i].paciente.persona.nombre+" "+this.solicitudes[i].paciente.persona.ap+" "+this.solicitudes[i].paciente.persona.am
    }
  
 
  });
   }
  





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

   console.log(this.form.estado_solicitud)
   validatefechas()
   if(formu.valid && ($('#fecha_inicio').val() <=$('#fecha_fin').val()) )
   {
     
  $('#addevent').removeClass('show');
  this.form.cedula=''
  console.log(this.form.fech)
  for(let i=0;i<this.pacientes.length; i++)
  {
    if(this.pacientes[i].nombres==this.form.caracter_nombre){
      this.form.cedula=this.pacientes[i].cedula


      
    }
   }

  this.solicitudesService.filtrarPaciente(this.form.cedula,  this.form.fech, this.form.fecha_inicio, this.form.fecha_fin, this.form.estado_solicitud, this.form.resultados).subscribe(data => {
    console.log(data);
    this.solicitudes=data;

    for(let i=0;i<this.solicitudes.length; i++){
      this.solicitudes[i].nombres_paciente=this.solicitudes[i].paciente.persona.nombre+" "+this.solicitudes[i].paciente.persona.ap+" "+this.solicitudes[i].paciente.persona.am
    }
 
  });
}
  
}

}
