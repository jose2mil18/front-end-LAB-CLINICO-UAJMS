import { Component, OnInit } from '@angular/core';
import {ReportesService} from '../reportes.service'
import { Solicitud , Paciente, Persona, Examen_solicitado, Reporte_examen_mensual,Institucion, Reporte_mensual, Reporte_anual, Usuario} from '../../models';
import {Router} from '@angular/router'
@Component({
  selector: 'app-examenes-anual',
  templateUrl: './examenes-anual.component.html',
  styleUrls: ['./examenes-anual.component.css']
})
export class ExamenesAnualComponent implements OnInit {
  reporte:Reporte_anual;
  instituciones:Institucion[];
reportes_anual:Reporte_anual;
currentUser:Usuario
reportes_mensual:Reporte_mensual[]=[]
  constructor(public reportesService :ReportesService) { 
    
  this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
 this.reporte=new Reporte_anual();
  this.reportes_anual= new Reporte_anual();

  this.reportesService.getInstitucionesConPrecio().subscribe(i=> {
    this.instituciones=i
        })
  }

  ngOnInit() {
  }

  insti(m){
    console.log(this.reporte)
    this.reportesService.getReportesAnual(this.reporte).subscribe(reportes => {
      console.log(reportes)
      this.reportes_anual=reportes;
      this.reportes_mensual=this.reportes_anual.reportes_mensuales
      console.log(reportes)
          },
          error => {
            console.log('lafjkldfjasdkljf');
           
          })
          
  }
  anio(){
    this.reportesService.getReportesAnual(this.reporte).subscribe(reportes => {
     
      this.reportes_anual=reportes;
      
      this.reportes_mensual=this.reportes_anual.reportes_mensuales
      console.log(this.reportes_anual)
    },
    error => {
      console.log('lafjkldfjasdkljf');
     
    })
  }

  exportPdf() {
  
      console.log("insti"+this.reporte.institucion.cod_institucion+"anio"+this.reporte.anio)
      window.location.href ='http://localhost:8080/jasperserver/rest_v2/reports/reports/reporte_anual.pdf?am_usuario='+this.currentUser.personal_laboratorio.persona.am+'&ap_usuario='+this.currentUser.personal_laboratorio.persona.ap+'&nombre_usuario='+this.currentUser.personal_laboratorio.persona.nombre+'&anio='+this.reporte.anio+'&institucion='+this.reporte.institucion.nombre+'&monto_total='+this.reportes_anual.monto_total.toFixed(1)+'&cod_institucion='+this.reporte.institucion.cod_institucion+'&j_username='+'jasperadmin'+'&j_password='+'jasperadmin';
         
        }

}

