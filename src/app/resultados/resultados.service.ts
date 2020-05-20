import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Solicitud, Area, Examen,Posta, Resultado, Resultados_por_defecto} from '../models';

import { Observable } from 'rxjs';
@Injectable({
    providedIn : 'root'
})
export class ResultadosService {
usuario={};
  
  private httpHeaders = new HttpHeaders({'Content-Type': 'application/json'});
    constructor(private http: HttpClient) { }
   

    getAnalisisSinResultados() {
        return this.http.get<Solicitud[]>(`${'http://localhost:9898/api/solicitudesSinResultados'}`,  {headers: this.httpHeaders});
    }
    getAnalisisConResultados() {
        return this.http.get<Solicitud[]>(`${'http://localhost:9898/api/solicitudesConResultados'}`,  {headers: this.httpHeaders});
    }
    getAnalisisSinResultadosporcodigo(cod_solicitud:number) {
        return this.http.get<Solicitud>(`${'http://localhost:9898/api/solicitudSinResultado/'+cod_solicitud}`,  {headers: this.httpHeaders});
   }
   getSubExamenes(cod_examen:number) {
    return this.http.post<Examen[]>(`${'http://localhost:9898/api/subexamenes'}`,{cod_examen},  {headers: this.httpHeaders});
}

getExamen(cod_examen:number) {
    return this.http.post<Examen>(`${'http://localhost:9898/api/examen'}`,{cod_examen}, {headers: this.httpHeaders});
}
guardarResultados(form) {
    return this.http.post<Solicitud>(`${'http://localhost:9898/api/guardar-resultados'}`,form, {headers: this.httpHeaders});
}
modificarResultados(form) {
    return this.http.post<Solicitud>(`${'http://localhost:9898/api/modificar-resultados'}`,form, {headers: this.httpHeaders});
}
actualizarEstadoResultadoSolicitud(cod_solicitud:number){
    console.log(cod_solicitud);
    
    return this.http.post<any>(`${'http://localhost:9898/api/actualizarEstadoResultadoSolicitud'}`,{cod_solicitud}, {headers: this.httpHeaders});
}
guardarResultadosModificados(form) {
    return this.http.post<any>(`${'http://localhost:9898/api/guardar-resultados-modificados'}`,form, {headers: this.httpHeaders});
}
guardarvalorreferencia( valor_referencia, cod_examen){
    
    return this.http.post<any>(`${'http://localhost:9898/api/actualizavalorreferencia'}`,{cod_examen, valor_referencia}, {headers: this.httpHeaders});
}
obtener_valores__por_defecto_examnes( cod_examen, caracter){
    
    return this.http.post<Resultados_por_defecto[]>(`${'http://localhost:9898/api/obtener-valores-examenes'}`,{cod_examen, caracter}, {headers: this.httpHeaders});
}
}