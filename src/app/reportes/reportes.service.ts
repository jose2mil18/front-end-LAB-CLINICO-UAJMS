import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {  Reporte_examenes_solicitados,Solicitud, Area, Examen,Posta, Resultado, Resultados_por_defecto, Reporte_mensual, Institucion, Reporte_anual} from '../models';

import { Observable } from 'rxjs';
@Injectable({
    providedIn : 'root'
})
export class ReportesService {
usuario={};
  
  private httpHeaders = new HttpHeaders({'Content-Type': 'application/json'});
    constructor(private http: HttpClient) { }
   

    getReportesMensuales(re:Reporte_mensual) {
        return this.http.post<Reporte_mensual>(`${'http://localhost:9898/api/reportemes'}`,re, {headers: this.httpHeaders});
    }
    getInstitucionesConPrecio(){
        
        return this.http.get<Institucion[]>(`${'http://localhost:9898/api/instituciones-examenes'}`,  {headers: this.httpHeaders});
    }
    getReportesAnual(re:Reporte_anual) {
        return this.http.post<Reporte_anual>(`${'http://localhost:9898/api/reporte-anual'}`,re, {headers: this.httpHeaders});
    }
    getReporteExamenesSolicitados(cedula:String, nombre_area:String, caracter_nombre_examen:String, fecha_solicitud:String, fecha_inicio:String, fecha_fin:String, estado_solicitud:String) {
        return this.http.get<Reporte_examenes_solicitados[]>(`${'http://localhost:9898/api/reporte-examenes-solicitados?cedula='}`+cedula+'&nombre_area='+nombre_area+'&caracter_nombre_examen='+caracter_nombre_examen+'&fecha_solicitud='+fecha_solicitud+'&fecha_inicio='+fecha_inicio+'&fecha_fin='+fecha_fin+'&estado_solicitud='+estado_solicitud, {headers: this.httpHeaders});
    }

}