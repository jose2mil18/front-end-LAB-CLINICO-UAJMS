import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders,HttpHeaderResponse, HttpResponse } from '@angular/common/http';
import { Solicitud, Area, Examen,Posta, Paciente, Institucion, Examen_solicitado, Precio_examen } from '../models';

import * as global from '../shared/variables_global'; //<== HERE
import { Observable } from 'rxjs';
import { Persona } from '../models/persona';
@Injectable({
    providedIn : 'root'
})
export class SolicitudesService {
usuario={};
  
  private httpHeaders = new HttpHeaders({'Content-Type': 'application/json'});
  
  private httpHeaders2 = new HttpHeaders({'Content-Type':  'text/plain; charset=utf-8'});
    constructor(private http: HttpClient) { }
    getPostas(){
        
        return this.http.get<Institucion[]>(`${''+global.server+'api/postas'}`,  {headers: this.httpHeaders});
    }

 
   public getAll() {
        return this.http.get<Solicitud[]>(`${''+global.server+'api/solicitudes'}`,  {headers: this.httpHeaders});
    }

    public actualizarEstado(solicitud:Solicitud) {
        return this.http.post<Solicitud[]>(`${''+global.server+'api/actualizar-estado'}`,solicitud, {headers: this.httpHeaders});
    }
    obtenerSolicitud(cod_solicitud){
        console.log(cod_solicitud)
        return this.http.get<Solicitud>(`${''+global.server+'api/solicitud/'}`+cod_solicitud, {headers: this.httpHeaders});
    }
    public numSolicitudes() {
        return this.http.get<number>(`${''+global.server+'api/contar-solicitudes'}`,  {headers: this.httpHeaders});
    }
    public minimaFecha() {
        return this.http.get(`${''+global.server+'api/minima-fecha-solicitud'}`, {responseType: 'text'});
    }
    public numSolicitudesPendientes() {
        return this.http.get<number>(`${''+global.server+'api/contar-solicitudes-pendientes'}`,  {headers: this.httpHeaders});
    }
    filtrarPaciente(cedula:String,   fecha_solicitud:String, fecha_inicio:String, fecha_fin:String, estado_solicitud:String, resultados:String) {
        return this.http.get<Solicitud[]>(`${''+global.server+'api/solicitudes?cedula='}`+cedula+'&fecha_solicitud='+fecha_solicitud+'&fecha_inicio='+fecha_inicio+'&fecha_fin='+fecha_fin+'&estado_solicitud='+estado_solicitud+'&resultados='+resultados,  {headers: this.httpHeaders});
    }

    filtrarSolicitudes_de_Paciente_por_area(cedula:String, nombre_area:String, caracter_nombre_examen:String, fecha_solicitud:String, fecha_inicio:String, fecha_fin:String, estado_solicitud:String) {
        return this.http.post<Examen_solicitado[]>(`${''+global.server+'api/filtrar-solicitudes-de-paciente-por-area-de-examen'}`,{cedula, nombre_area, caracter_nombre_examen, fecha_solicitud, fecha_inicio, fecha_fin, estado_solicitud},  {headers: this.httpHeaders});
    }
    //-----------------------------------------
    filtrarSolicitudes_de_Paciente(cedula:String, nombre_area:String, caracter_nombre_examen:String, fecha_solicitud:String, fecha_inicio:String, fecha_fin:String, estado_solicitud:String) {
        return this.http.get<Examen_solicitado[]>(`${''+global.server+'api/examenes-solicitados?cedula='}`+cedula+'&nombre_area='+nombre_area+'&caracter_nombre_examen='+caracter_nombre_examen+'&fecha_solicitud='+fecha_solicitud+'&fecha_inicio='+fecha_inicio+'&fecha_fin='+fecha_fin+'&estado_solicitud='+estado_solicitud,  {headers: this.httpHeaders});
    }

    filtrarPacientePorCedula(cedula:String) {
        return this.http.post<Solicitud[]>(`${''+global.server+'api/filtrar-solicitud-por-cedula-paciente'}`,{cedula},  {headers: this.httpHeaders});
    }
    filtrarPorFechaSolicitud(fecha:String) {
        return this.http.post<Solicitud[]>(`${''+global.server+'api/filtrar-por-fecha-de-solicitud'}`,{fecha},  {headers: this.httpHeaders});
    }
    getAllAreas() {
        return this.http.get<Area[]>(`${''+global.server+'api/areas'}`,  {headers: this.httpHeaders});
    }
    obtenerexamenesporarea(pe:Precio_examen) {
        return this.http.post<Precio_examen[]>(`${''+global.server+'api/examenes-por-area-institucion'}`,pe,  {headers: this.httpHeaders});
    }

    getByNameExamen(cod_examen:String) {
        return this.http.post<any>(`${''+global.server+'api/obtenernombreexamen'}`,{cod_examen},  {headers: this.httpHeaders});
    }

    getByIdPrecio_examen(cod_precio_examen:number) {
            return this.http.post<Precio_examen>(`${''+global.server+'api/precio-examen'}`,{cod_precio_examen},  {headers: this.httpHeaders});
        }
    modificar(solicitud) {
        return this.http.put<Solicitud>(`${''+global.server+'api/solicitud'}`, solicitud, {headers: this.httpHeaders});
    }
    quitar_examen(cod_solicitud, cod_examen) {
        return this.http.post<Examen_solicitado[]>(`${''+global.server+'api/eliminar-examen-de-solicitud'}`,{cod_solicitud, cod_examen},  {headers: this.httpHeaders});
    }
    register(paciente) {
      
                return this.http.post<Solicitud>(`${''+global.server+'api/solicitud'}`, paciente, {headers: this.httpHeaders});
            }

     guardar(solicitud) {
      
                return this.http.post<Solicitud>(`${''+global.server+'api/solicitud'}`, solicitud, {headers: this.httpHeaders});
     }


            obtenerExamen(cod_examen){
                return this.http.get<Examen>(`${''+global.server+'api/examen/'}`+cod_examen, {headers: this.httpHeaders});
            }


            obtener_solicitud_con_resultados_examenes_cargados(solicitud){
                
                return this.http.post<Solicitud>(`${''+global.server+'api/solicitud-con-resultados-examenes'}`, solicitud, {headers: this.httpHeaders});
            }

            getInstitucionesFaltantes(){
        
                return this.http.get<Institucion[]>(`${''+global.server+'api/institucionesFaltantes'}`,  {headers: this.httpHeaders});
            }
            getInstitucion(cod_institucion){
        
                return this.http.post<Institucion>(`${''+global.server+'api/institucion'}`,{cod_institucion},  {headers: this.httpHeaders});
            }
            filtrarPorRangoFecha(fe_in:string, fe_fin:string){
                return this.http.post<Solicitud[]>(`${''+global.server+'api/filtrar-por-rango-fecha'}`,{fe_in, fe_fin},  {headers: this.httpHeaders});
    
            }
            getFecha(solicitud:Solicitud) {
                return this.http.post(`${''+global.server+'api/pruebita'}`,solicitud,  {responseType: 'text'});
            }

            generarFactura(solicitud){
                
                return this.http.post<Solicitud>(`${''+global.server+'api/generar-factura'}`, solicitud, {headers: this.httpHeaders});
            }

            public listarDoctorSolicitante() {
                return this.http.get<Persona[]>(`${''+global.server+'api/listar-doctor-solicitante'}`,  {headers: this.httpHeaders});
            }

        
        
}