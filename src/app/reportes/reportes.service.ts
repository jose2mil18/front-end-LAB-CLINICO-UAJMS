import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {  Reporte_examenes_solicitados,Solicitud, Area, Examen,Posta, Resultado, Resultados_por_defecto, Reporte_mensual, Institucion, Reporte_anual} from '../models';

import * as global from '../shared/variables_global'; //<== HERE
import { Observable } from 'rxjs';
@Injectable({
    providedIn : 'root'
})
export class ReportesService {
usuario={};
  
  private httpHeaders = new HttpHeaders({'Content-Type': 'application/json'});
    constructor(private http: HttpClient) { }
   

    getReportesMensuales(re:Reporte_mensual) {
        return this.http.post<Reporte_mensual>(`${''+global.server+'api/reportemes'}`,re, {headers: this.httpHeaders});
    }
    getInstitucionesConPrecio(){
        
        return this.http.get<Institucion[]>(`${''+global.server+'api/instituciones-examenes'}`,  {headers: this.httpHeaders});
    }
    getReportesAnual(re:Reporte_anual) {
        return this.http.post<Reporte_anual>(`${''+global.server+'api/reporte-anual'}`,re, {headers: this.httpHeaders});
    }
    getReporteExamenesSolicitados(cedula:String, nombre_area:String, caracter_nombre_examen:String, fecha_solicitud:String, fecha_inicio:String, fecha_fin:String, estado_solicitud:String, agrupador:string, seleccionador: string) {
        return this.http.get<Reporte_examenes_solicitados[]>(`${''+global.server+'api/reporte-examenes-solicitados?cedula='}`+cedula+'&nombre_area='+nombre_area+'&caracter_nombre_examen='+caracter_nombre_examen+'&fecha_solicitud='+fecha_solicitud+'&fecha_inicio='+fecha_inicio+'&fecha_fin='+fecha_fin+'&estado_solicitud='+estado_solicitud+'&agrupador='+agrupador+'&seleccionador='+seleccionador, {headers: this.httpHeaders});
    }
    getReportes() {
         this.http.get(`${'http://localhost:8080/jasperserver/rest_v2/reports/reports/area.html'}`);
    }
}