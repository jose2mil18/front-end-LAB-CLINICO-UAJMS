import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Solicitud, Area, Examen,Posta, Resultado, Resultados_por_defecto} from '../models';

import * as global from '../shared/variables_global'; //<== HERE
import { Observable } from 'rxjs';
@Injectable({
    providedIn : 'root'
})
export class ResultadosService {
usuario={};
  
  private httpHeaders = new HttpHeaders({'Content-Type': 'application/json'});
    constructor(private http: HttpClient) { }
   

    getAnalisisSinResultados() {
        return this.http.get<Solicitud[]>(`${''+global.server+'api/solicitudesSinResultados'}`,  {headers: this.httpHeaders});
    }
    getAnalisisConResultados() {
        return this.http.get<Solicitud[]>(`${''+global.server+'api/solicitudesConResultados'}`,  {headers: this.httpHeaders});
    }
    getAnalisisSinResultadosporcodigo(cod_solicitud:number) {
        return this.http.get<Solicitud>(`${''+global.server+'api/solicitudSinResultado/'+cod_solicitud}`,  {headers: this.httpHeaders});
   }
   getSubExamenes(cod_examen:number) {
    return this.http.post<Examen[]>(`${''+global.server+'api/subexamenes'}`,{cod_examen},  {headers: this.httpHeaders});
}

getExamen(cod_examen:number) {
    return this.http.post<Examen>(`${''+global.server+'api/examen'}`,{cod_examen}, {headers: this.httpHeaders});
}
guardarResultados(form) {
    return this.http.post<Solicitud>(`${''+global.server+'api/guardar-resultados'}`,form, {headers: this.httpHeaders});
}
modificarResultados(form) {
    return this.http.post<Solicitud>(`${''+global.server+'api/modificar-resultados'}`,form, {headers: this.httpHeaders});
}
actualizarEstadoResultadoSolicitud(cod_solicitud:number){
    console.log(cod_solicitud);
    
    return this.http.post<any>(`${''+global.server+'api/actualizarEstadoResultadoSolicitud'}`,{cod_solicitud}, {headers: this.httpHeaders});
}
guardarResultadosModificados(form) {
    return this.http.post<any>(`${''+global.server+'api/guardar-resultados-modificados'}`,form, {headers: this.httpHeaders});
}
guardarvalorreferencia( valor_referencia, cod_examen){
    
    return this.http.post<any>(`${''+global.server+'api/actualizavalorreferencia'}`,{cod_examen, valor_referencia}, {headers: this.httpHeaders});
}
obtener_valores__por_defecto_examnes( cod_examen, caracter){
    
    return this.http.post<Resultados_por_defecto[]>(`${''+global.server+'api/obtener-valores-examenes'}`,{cod_examen, caracter}, {headers: this.httpHeaders});
}
}