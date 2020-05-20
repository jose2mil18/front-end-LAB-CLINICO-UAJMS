import { Component, OnInit } from '@angular/core';
import {ReportesService} from '../reportes.service'
import { Solicitud , Paciente, Persona, Examen_solicitado, Reporte_examen_mensual,Institucion, Reporte_mensual, Reporte_anual} from '../../models';
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
  constructor(public reportesService :ReportesService) { 
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
      console.log(reportes)
          },
          error => {
            console.log('lafjkldfjasdkljf');
           
          })
          
  }
  anio(){
    this.reportesService.getReportesAnual(this.reporte).subscribe(reportes => {
     
      this.reportes_anual=reportes;
    },
    error => {
      console.log('lafjkldfjasdkljf');
     
    })
  }

}

