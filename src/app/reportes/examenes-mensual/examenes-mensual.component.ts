import { Component, OnInit } from '@angular/core';
import {ReportesService} from '../reportes.service'
import { Solicitud , Paciente, Persona, Examen_solicitado, Reporte_examen_mensual,Institucion, Reporte_mensual} from '../../models';
import {Router} from '@angular/router'
@Component({
  selector: 'app-examenes-mensual',
  templateUrl: './examenes-mensual.component.html',
  styleUrls: ['./examenes-mensual.component.css']
})
export class ExamenesMensualComponent implements OnInit {

  reporte:Reporte_mensual;
  instituciones:Institucion[];
reportes_mensual:Reporte_mensual;
  constructor(public reportesService :ReportesService) { 
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
    },
    error => {
      console.log('lafjkldfjasdkljf');
     
    })
          
  }
  insti(m){
    console.log(this.reporte)
    this.reportesService.getReportesMensuales(this.reporte).subscribe(reportes => {
    
      this.reportes_mensual=reportes;
      console.log(reportes)
          },
          error => {
            console.log('lafjkldfjasdkljf');
           
          })
          
  }
  anio(){
    this.reportesService.getReportesMensuales(this.reporte).subscribe(reportes => {
     
      this.reportes_mensual=reportes;
    },
    error => {
      console.log('lafjkldfjasdkljf');
     
    })
  }

}
