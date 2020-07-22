import { Component, OnInit } from '@angular/core';
import {NavigationStart, Router} from '@angular/router';
import { Paciente, Solicitud , Area, Examen_solicitado, Usuario, Reporte_examenes_solicitados} from '../../models';
import{SolicitudesService } from '../../solicitudes/solicitudes.service'
import {ReportesService} from '../reportes.service'
import { DatePipe,  TitleCasePipe, UpperCasePipe } from '@angular/common';

import {FormControl, FormBuilder, FormGroup, Validators, NgForm } from '@angular/forms';
declare const validatefechas:any;
@Component({
  selector: 'app-examenes-solicitados',
  templateUrl: './examenes-solicitados.component.html',
  styleUrls: ['./examenes-solicitados.component.css']
})
export class ExamenesSolicitadosComponent implements OnInit {
 
  form;
  areas:Area[]
brands:any[]
cols:any[]
paciente:Paciente
area:Area;
solicitudes:Solicitud[]
solicitudes_nuevas:Solicitud[]
examenes_solicitados:Examen_solicitado[]
reporte_examenes_solicitados:Reporte_examenes_solicitados[];
date:Date;
fechita:String;
currentUser:Usuario;
bandera:boolean
fecha_minima_solicitud:String
rowGroupMetadata: any;
grupo
  constructor(private reportesService:ReportesService, private solicitudesService:SolicitudesService, private datePipe:DatePipe, private router:Router) {
 
    
    this.grupo = JSON.parse(localStorage.getItem('grupo'));
  
    this.solicitudesService.minimaFecha().subscribe(data=>{
  
     console.log(data)
    })
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
      fecha_fin:this.datePipe.transform(this.date,"yyyy-MM-dd"),
      caracter_nombre_examen:'',
      estado_solicitud:'',
      cedula:'',
      nombre_area:'',
      resultados:''
    }
    this.paciente= JSON.parse(localStorage.getItem('paciente'));
    this.examenes_solicitados=this.paciente.examenes_solicitados

    this.reportesService.getReporteExamenesSolicitados(this.form.cedula, this.form.nombre_area, this.form.caracter_nombre_examen, this.form.fech, this.form.fecha_inicio, this.form.fecha_fin, this.form.estado_solicitud, this.grupo.agrupador, this.grupo.seleccionador).subscribe(data => {
    this.reporte_examenes_solicitados=data
    console.log(data)
   // this.reporte_examenes_solicitados.grupo=this.grupo;

          })
   
   }
 
  ngOnInit() {
    this.brands = [
      { label: 'Todos', value: "" },
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
    if(this.form.nombre_area==null)
    {
      this.form.nombre_area=""
    }
    console.log(this.form.fech)
    console.log(this.area.nombre+" "+this.area.cod_area)
    this.reportesService.getReporteExamenesSolicitados(this.form.cedula, this.form.nombre_area, this.form.caracter_nombre_examen, this.form.fech, this.form.fecha_inicio, this.form.fecha_fin, this.form.estado_solicitud, this.grupo.agrupador, this.grupo.seleccionador).subscribe(data=>{
      this.reporte_examenes_solicitados=data
      
      console.log(data)
    })
  }
  
  }

  buscar_por_fecha(fech){
    console.log(fech)
  
  }
  
exportPdf() {
if(this.grupo.label=='Examen')   
{
  if(this.form.nombre_area == '')
  {
    window.location.href = 'http://localhost:8080/jasperserver/rest_v2/reports/reports/reporte_examnes_solicitados.html?am_usuario='+this.currentUser.personal_laboratorio.persona.am+'&cedula='+this.form.cedula+'&ap_usuario='+this.currentUser.personal_laboratorio.persona.ap+'&nombre_usuario='+this.currentUser.personal_laboratorio.persona.nombre+'&nombre_paciente='+'%%'+'&ap_paciente='+this.paciente.persona.ap+'&am_paciente='+this.paciente.persona.am+'&fecha_inicio='+this.form.fecha_inicio+'&fecha_fin='+this.form.fecha_fin+'&j_username='+'jasperadmin'+'&j_password='+'jasperadmin';
   }
    else{
      window.location.href = 'http://localhost:8080/jasperserver/rest_v2/reports/reports/reporte_examnes_solicitados.html?am_usuario='+this.currentUser.personal_laboratorio.persona.am+'&cedula='+this.form.cedula+'&ap_usuario='+this.currentUser.personal_laboratorio.persona.ap+'&nombre_usuario='+this.currentUser.personal_laboratorio.persona.nombre+'&nombre_paciente='+'%%'+'&ap_paciente='+this.paciente.persona.ap+'&am_paciente='+this.paciente.persona.am+'&nombre_area='+this.form.nombre_area+'&fecha_inicio='+this.form.fecha_inicio+'&fecha_fin='+this.form.fecha_fin+'&j_username='+'jasperadmin'+'&j_password='+'jasperadmin';

   }
}
if(this.grupo.label=='Area')   
{
  if(this.form.nombre_area == '')
  {
    window.location.href = 'http://localhost:8080/jasperserver/rest_v2/reports/reports/reporte_examnes_solicitados_por_are.html?am_usuario='+this.currentUser.personal_laboratorio.persona.am+'&cedula='+this.form.cedula+'&ap_usuario='+this.currentUser.personal_laboratorio.persona.ap+'&nombre_usuario='+this.currentUser.personal_laboratorio.persona.nombre+'&nombre_paciente='+'%%'+'&ap_paciente='+this.paciente.persona.ap+'&am_paciente='+this.paciente.persona.am+'&fecha_inicio='+this.form.fecha_inicio+'&fecha_fin='+this.form.fecha_fin+'&j_username='+'jasperadmin'+'&j_password='+'jasperadmin';
   }
    else{
      window.location.href = 'http://localhost:8080/jasperserver/rest_v2/reports/reports/reporte_examnes_solicitados_por_are.html?am_usuario='+this.currentUser.personal_laboratorio.persona.am+'&cedula='+this.form.cedula+'&ap_usuario='+this.currentUser.personal_laboratorio.persona.ap+'&nombre_usuario='+this.currentUser.personal_laboratorio.persona.nombre+'&nombre_paciente='+'%%'+'&ap_paciente='+this.paciente.persona.ap+'&am_paciente='+this.paciente.persona.am+'&nombre_area='+this.form.nombre_area+'&fecha_inicio='+this.form.fecha_inicio+'&fecha_fin='+this.form.fecha_fin+'&j_username='+'jasperadmin'+'&j_password='+'jasperadmin';

   }
}
if(this.grupo.label=='Paciente')   
{
  if(this.form.nombre_area == '')
  {
    window.location.href = 'http://localhost:8080/jasperserver/rest_v2/reports/reports/reporte_examnes_solicitados_por_paciente.html?am_usuario='+this.currentUser.personal_laboratorio.persona.am+'&cedula='+this.form.cedula+'&ap_usuario='+this.currentUser.personal_laboratorio.persona.ap+'&nombre_usuario='+this.currentUser.personal_laboratorio.persona.nombre+'&nombre_paciente='+'%%'+'&ap_paciente='+this.paciente.persona.ap+'&am_paciente='+this.paciente.persona.am+'&fecha_inicio='+this.form.fecha_inicio+'&fecha_fin='+this.form.fecha_fin+'&j_username='+'jasperadmin'+'&j_password='+'jasperadmin';
   }
    else{
      window.location.href = 'http://localhost:8080/jasperserver/rest_v2/reports/reports/reporte_examnes_solicitados_por_paciente.html?am_usuario='+this.currentUser.personal_laboratorio.persona.am+'&cedula='+this.form.cedula+'&ap_usuario='+this.currentUser.personal_laboratorio.persona.ap+'&nombre_usuario='+this.currentUser.personal_laboratorio.persona.nombre+'&nombre_paciente='+'%%'+'&ap_paciente='+this.paciente.persona.ap+'&am_paciente='+this.paciente.persona.am+'&nombre_area='+this.form.nombre_area+'&fecha_inicio='+this.form.fecha_inicio+'&fecha_fin='+this.form.fecha_fin+'&j_username='+'jasperadmin'+'&j_password='+'jasperadmin';

   }
}
if(this.grupo.label=='Estado')   
{
  if(this.form.nombre_area == '')
  {
    window.location.href = 'http://localhost:8080/jasperserver/rest_v2/reports/reports/reporte_examnes_solicitados_por_estado.html?am_usuario='+this.currentUser.personal_laboratorio.persona.am+'&cedula='+this.form.cedula+'&ap_usuario='+this.currentUser.personal_laboratorio.persona.ap+'&nombre_usuario='+this.currentUser.personal_laboratorio.persona.nombre+'&nombre_paciente='+'%%'+'&ap_paciente='+this.paciente.persona.ap+'&am_paciente='+this.paciente.persona.am+'&fecha_inicio='+this.form.fecha_inicio+'&fecha_fin='+this.form.fecha_fin+'&j_username='+'jasperadmin'+'&j_password='+'jasperadmin';
   }
    else{
      window.location.href = 'http://localhost:8080/jasperserver/rest_v2/reports/reports/reporte_examnes_solicitados_por_estado.html?am_usuario='+this.currentUser.personal_laboratorio.persona.am+'&cedula='+this.form.cedula+'&ap_usuario='+this.currentUser.personal_laboratorio.persona.ap+'&nombre_usuario='+this.currentUser.personal_laboratorio.persona.nombre+'&nombre_paciente='+'%%'+'&ap_paciente='+this.paciente.persona.ap+'&am_paciente='+this.paciente.persona.am+'&nombre_area='+this.form.nombre_area+'&fecha_inicio='+this.form.fecha_inicio+'&fecha_fin='+this.form.fecha_fin+'&j_username='+'jasperadmin'+'&j_password='+'jasperadmin';

   }
}

  }
  /*

  
	SELECT 
	s.cedula_paciente,
per.nombre AS nombre_paciente,
	
count(s.cedula_paciente) as nro_prestaciones   
	, min(s.fecha) as fecha_inicio, max(s.fecha) as fecha_fin 
FROM sol_exam soe,
	solicitud s,
	precio_examen pe,
	examen e,
	area a, pacientes pa, persona per
WHERE 
s.cedula_paciente=pa.cedula and per.cod_persona=pa.cod_persona and
(s.fecha >=  '2018-01-01' AND  s.fecha <= '2020-09-09')
AND
a.nombre like  '%%'
	AND  pe.cod_precio_examen = soe.cod_precio_examen 
	 AND a.cod_area = e.cod_area 
	 AND pe.cod_examen = e.cod_examen 
	 AND soe.cod_solicitud = s.cod_solicitud 
	 AND pe.cod_institucion LIKE '%%' 
	 AND soe.cod_sol_exam = (select max(cod_sol_exam) from sol_exam  where cod_precio_examen=soe.cod_precio_examen and cod_solicitud=soe.cod_solicitud) 
GROUP BY 1,2
  */

   klp(){
this.router.navigate(['/reportes/examenes-solicitados'])
   }
   
   /*
   updateRowGroupMetaData() {
    this.rowGroupMetadata = {};
    if (this.examenes_solicitados) {
        for (let i = 0; i < this.examenes_solicitados.length; i++) {
            let rowData = this.examenes_solicitados[i];
            let brand = rowData.precio_examen.examen.nombre;
            if (i == 0) {
                this.rowGroupMetadata[brand] = { index: 0, size: 1 };
            }
            else {
                let previousRowData = this.examenes_solicitados[i - 1];
                let previousRowGroup = previousRowData.precio_examen.examen.nombre;
                if (brand === previousRowGroup)
                    this.rowGroupMetadata[brand].size++;
                else
                    this.rowGroupMetadata[brand] = { index: i, size: 1 };
            }
        }
    }
}

*/
}
