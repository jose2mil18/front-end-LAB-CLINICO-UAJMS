import { Component, OnInit , Output, EventEmitter} from '@angular/core';
import {ResultadosService} from '../resultados.service'
import { Solicitud , Paciente, Persona, Usuario} from '../../models';
import {Router} from '@angular/router'
import {SolicitudesService} from '../../solicitudes/solicitudes.service'
import {PacientesService} from '../../pacientes/pacientes.service'

import { DatePipe } from '@angular/common';
declare const $: any;
@Component({
  selector: 'app-ver',
  templateUrl: './ver.component.html',
  styleUrls: ['./ver.component.css']
})
export class VerComponent implements OnInit {
  pacientes:Paciente[];
  cols:any[];
  form;
currentUser:Usuario
 
  solicitudSinResultado:Solicitud=null;
analisisSinResultados:Solicitud[];
  constructor(public datePipe: DatePipe, public pacientesService: PacientesService,public solicitudesService:SolicitudesService,  private resultadosService:ResultadosService, public router:Router) { 
    this.form={
      fech:'',
     
      fecha_inicio:'2019-03-03',
      fecha_fin:this.datePipe.transform(new Date(),"yyyy-MM-dd"),
      caracter_nombre:''
      ,cedula:'',
      estado_solicitud:'',
      resultados:'Registrado'
    }
    this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
    resultadosService.getAnalisisConResultados().subscribe(data => {
      console.log(data)
      this.analisisSinResultados=data;
      for(let i=0;i<this.analisisSinResultados.length; i++){
        this.analisisSinResultados[i].nombres_paciente=this.analisisSinResultados[i].paciente.persona.nombre+" "+this.analisisSinResultados[i].paciente.persona.ap+" "+this.analisisSinResultados[i].paciente.persona.am
      }
    });
  }

  ngOnInit() {
    this.cols = [
      
      { field: "nombres_paciente", header: 'Paciente' },
   
      { field: 'estado', header: 'Resultados' }
  ];
    $(function () {
      $('.js-basic-exam').dataTable();

      // Exportable tableff
    
  });

  }
  registrar(solicitud:Solicitud){
    console.log(solicitud.institucion)
    
    localStorage.removeItem('solicitudSinResultado'); 
    localStorage.setItem('solicitudSinResultado', JSON.stringify(solicitud));
    this.router.navigate(['/resultados/registrar']);
  }
  modificar(solicitud:Solicitud){
    console.log(solicitud)
    
    localStorage.removeItem('solicitudesConResultadosaModificar'); 
    localStorage.setItem('solicitudesConResultadosaModificar', JSON.stringify(solicitud));
    this.router.navigate(['/resultados/modificar']);
  }

  ver_actualizaciones(solicitud:Solicitud){
    console.log(solicitud.institucion)
    
    localStorage.removeItem('solicitudesConResultadosaModificar'); 
    localStorage.setItem('solicitudesConResultadosaModificar', JSON.stringify(solicitud));
    this.router.navigate(['/resultados/ver-actualizaciones']);
  }
  mostrarpdf(solicitud:Solicitud){
    localStorage.removeItem('solicitudaimprimir'); 
    localStorage.setItem('solicitudaimprimir', JSON.stringify(solicitud));
  
  }
  exportPdf() {
    window.location.href = 'http://localhost:8080/jasperserver/rest_v2/reports/reports/solicitudes_con_resultados.pdf?am_usuario='+this.currentUser.personal_laboratorio.persona.am+'&cedula='+this.form.cedula+'&ap_usuario='+this.currentUser.personal_laboratorio.persona.ap+'&nombre_usuario='+this.currentUser.personal_laboratorio.persona.nombre+'&fecha_inicio='+this.form.fecha_inicio+'&fecha_fin='+this.form.fecha_fin+'&estado_solicitud='+this.form.estado_solicitud+'&resultados='+this.form.resultados+'&j_username='+'jasperadmin'+'&j_password='+'jasperadmin';

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
  doc.save('analisisConResultados.pdf');
  */
  }
  
buscar_por_fecha(fech){
  console.log(fech)
  this. solicitudesService.filtrarPorFechaSolicitud(fech).subscribe(data => {
    console.log(data)
    this.analisisSinResultados=data;
    for(let i=0;i<this.analisisSinResultados.length; i++){
      console.log(this.analisisSinResultados[i].examenes_solicitados.length)
      this.analisisSinResultados[i].nombres_paciente=this.analisisSinResultados[i].paciente.persona.nombre+" "+this.analisisSinResultados[i].paciente.persona.ap+" "+this.analisisSinResultados[i].paciente.persona.am
    
   // this.solicitudes[i].fecha_entrega=this.datePipe.transform(this.solicitudes[i].fecha_entrega,"dd/MM/yyyy")
    }
  });
}
  buscar_por_rango_fechas(){
    this. solicitudesService.filtrarPorRangoFecha(this.form.fecha_inicio, this.form.fecha_fin).subscribe(data => {
      console.log(data)
      this.analisisSinResultados=data;
      for(let i=0;i<this.analisisSinResultados.length; i++){
        console.log(this.analisisSinResultados[i].examenes_solicitados.length)
        this.analisisSinResultados[i].nombres_paciente=this.analisisSinResultados[i].paciente.persona.nombre+" "+this.analisisSinResultados[i].paciente.persona.ap+" "+this.analisisSinResultados[i].paciente.persona.am
      
     // this.solicitudes[i].fecha_entrega=this.datePipe.transform(this.solicitudes[i].fecha_entrega,"dd/MM/yyyy")
      }
  });
  }

  busca_pacientes(){
    console.log(this.form.caracter_nombre);
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
      this.analisisSinResultados=data;

      for(let i=0;i<this.analisisSinResultados.length; i++){
        this.analisisSinResultados[i].nombres_paciente=this.analisisSinResultados[i].paciente.persona.nombre+" "+this.analisisSinResultados[i].paciente.persona.ap+" "+this.analisisSinResultados[i].paciente.persona.am
      }
    
   
    });
     }
    





  }
  filtro_completo(){
    //console.log(this.form.fech)
 
  
     console.log(this.form.resultados)
   
    this.solicitudesService.filtrarPaciente(this.form.cedula,  this.form.fech, this.form.fecha_inicio, this.form.fecha_fin, this.form.estado_solicitud, this.form.resultados).subscribe(data => {
      console.log(data);
      console.log(this.form.cedula)
      this.analisisSinResultados=data;

      for(let i=0;i<this.analisisSinResultados.length; i++){
        this.analisisSinResultados[i].nombres_paciente=this.analisisSinResultados[i].paciente.persona.nombre+" "+this.analisisSinResultados[i].paciente.persona.ap+" "+this.analisisSinResultados[i].paciente.persona.am
      }
    
   
    });
     
    
  }

  


}
