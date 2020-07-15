import { Component, OnInit } from '@angular/core';
import {ReportesService} from '../reportes.service'
import { Solicitud , Paciente, Persona, Examen_solicitado, Reporte_examen_mensual,Institucion, Reporte_mensual, Usuario} from '../../models';
import {Router} from '@angular/router'
@Component({
  selector: 'app-examenes-mensual',
  templateUrl: './examenes-mensual.component.html',
  styleUrls: ['./examenes-mensual.component.css']
})
export class ExamenesMensualComponent implements OnInit {
currentUser:Usuario
  reporte:Reporte_mensual;
  
  instituciones:Institucion[];
reportes_mensual:Reporte_mensual;
meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
  mes={
  texto:"Enero",
  numero:1
  }
  Reportes_examen_mensual:Reporte_examen_mensual[]=[]
constructor(public reportesService :ReportesService) { 

  this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
 this.reporte=new Reporte_mensual();

  this.reportes_mensual= new Reporte_mensual();

  this.reportesService.getInstitucionesConPrecio().subscribe(i=> {
    this.instituciones=i
        })
  }

  ngOnInit() {
  }
  vermes(m){
    console.log(this.reporte)
    this.reportesService.getReportesMensuales(this.reporte).subscribe(reportes => {
    
      console.log(reportes)
      this.reportes_mensual=reportes;
      this.Reportes_examen_mensual=this.reportes_mensual.reportes_examenes_mensual
    },
    error => {
      console.log('lafjkldfjasdkljf');
     
    })
          
  }
  insti(m){
    console.log(this.reporte)
    this.reportesService.getReportesMensuales(this.reporte).subscribe(reportes => {
    
      this.reportes_mensual=reportes;
      
      this.Reportes_examen_mensual=this.reportes_mensual.reportes_examenes_mensual
      console.log(reportes)
          },
          error => {
            console.log('lafjkldfjasdkljf');
           
          })
          
  }
  anio(){
    this.reportesService.getReportesMensuales(this.reporte).subscribe(reportes => {
     
      this.reportes_mensual=reportes;
      
      this.Reportes_examen_mensual=this.reportes_mensual.reportes_examenes_mensual
    },
    error => {
      console.log('lafjkldfjasdkljf');
     
    })
  }
  num:number=4;
  exportPdf() {
  ;
    console.log("insti"+this.reporte.institucion.cod_institucion+"anio"+this.reporte.anio+"mes"+this.reporte.mes)
    window.location.href ='http://localhost:8080/jasperserver/rest_v2/reports/reports/reporte_mensual.pdf?am_usuario='+this.currentUser.personal_laboratorio.persona.am+'&letra_mes='+this.reportes_mensual.mes+'&ap_usuario='+this.currentUser.personal_laboratorio.persona.ap+'&nombre_usuario='+this.currentUser.personal_laboratorio.persona.nombre+'&anio='+this.reporte.anio+'&institucion='+this.reportes_mensual.institucion.nombre+'&monto_total='+this.reportes_mensual.monto.toFixed(1)+'&mes='+this.reporte.mes+'&cod_institucion='+this.reporte.institucion.cod_institucion+'&j_username='+'jasperadmin'+'&j_password='+'jasperadmin';
       
      }

}
