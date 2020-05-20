import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Usuario, Examen, Area, Institucion, Valor_referencia} from '../models';

import { Observable } from 'rxjs';
@Injectable({
    providedIn : 'root'
})
export class ExamenesService {
usuario={};
  
  private httpHeaders = new HttpHeaders({'Content-Type': 'application/json'});
    constructor(private http: HttpClient) { }

    getAll(nombre_area:string, caracter_nombre_examen: string) {
        return this.http.get<Examen[]>(`${'http://localhost:9898/api/examenes?nombre_area='}`+nombre_area+'&caracter_nombre_examen='+caracter_nombre_examen,  {headers: this.httpHeaders});
    }
    getAllAreas() {
        return this.http.get<Area[]>(`${'http://localhost:9898/api/areas'}`,  {headers: this.httpHeaders});
    }
    getInstitucionesConPrecio(){
        
        return this.http.get<Institucion[]>(`${'http://localhost:9898/api/instituciones-examenes'}`,  {headers: this.httpHeaders});
    }
    registrar(e){
        return this.http.post<Examen>(`${'http://localhost:9898/api/examen'}`, e, {headers: this.httpHeaders});
        
    } 
    modificar(e){
        return this.http.put<Examen>(`${'http://localhost:9898/api/examen'}`, e, {headers: this.httpHeaders});
        
    }
    obtenerExamen(cod_examen){
        return this.http.get<Examen>(`${'http://localhost:9898/api/examen/'}`+cod_examen, {headers: this.httpHeaders});
    }
    cambiarEstadoValorReferencia(cod_examen,cod_valor_referencia)
    {
        return this.http.post<Valor_referencia[]>(`${'http://localhost:9898/api/cambiar-estado-de-valor-referencia'}`, {cod_examen, cod_valor_referencia}, {headers: this.httpHeaders});
         
    }
    
    subexamensPorCaracter(caracter: string, cod_area) {
        return this.http.post<Examen[]>(`${'http://localhost:9898/api/sub-examenes-por-caracter'}`, {caracter,cod_area},  {headers: this.httpHeaders});
    }
    subexamenesSinSubexamenesPorCaracter(caracter: string, cod_area) {
        return this.http.post<Examen[]>(`${'http://localhost:9898/api/sub-examenes-sin-subexamenes-por-caracter'}`, {caracter,cod_area},  {headers: this.httpHeaders});
    }
    //sub-examenes-por-caracter
}