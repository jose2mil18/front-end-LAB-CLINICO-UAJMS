import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Usuario, Examen, Area, Institucion, Valor_referencia} from '../models';

import { Observable } from 'rxjs';

import * as global from '../shared/variables_global'; //<== HERE
@Injectable({
    providedIn : 'root'
})
export class ExamenesService {
usuario={};
  
  private httpHeaders = new HttpHeaders({'Content-Type': 'application/json'});
    constructor(private http: HttpClient) { }

    getAll(nombre_area:string, caracter_nombre_examen: string) {
        return this.http.get<Examen[]>(`${''+global.server+'api/examenes?nombre_area='}`+nombre_area+'&caracter_nombre_examen='+caracter_nombre_examen,  {headers: this.httpHeaders});
    }
    getAllAreas() {
        return this.http.get<Area[]>(`${''+global.server+'api/areas'}`,  {headers: this.httpHeaders});
    }
    getInstitucionesConPrecio(){
        
        return this.http.get<Institucion[]>(`${''+global.server+'api/instituciones-examenes'}`,  {headers: this.httpHeaders});
    }
    registrar(e){
        return this.http.post<Examen>(`${''+global.server+'api/examen'}`, e, {headers: this.httpHeaders});
        
    } 
    modificar(e){
        return this.http.put<Examen>(`${''+global.server+'api/examen'}`, e, {headers: this.httpHeaders});
        
    }
    obtenerExamen(cod_examen){
        return this.http.get<Examen>(`${''+global.server+'api/examen/'}`+cod_examen, {headers: this.httpHeaders});
    }
    cambiarEstadoValorReferencia(cod_examen,cod_valor_referencia)
    {
        return this.http.post<Valor_referencia[]>(`${''+global.server+'api/cambiar-estado-de-valor-referencia'}`, {cod_examen, cod_valor_referencia}, {headers: this.httpHeaders});
         
    }
    
    subexamensPorCaracter(caracter: string, cod_area) {
        return this.http.post<Examen[]>(`${''+global.server+'api/sub-examenes-por-caracter'}`, {caracter,cod_area},  {headers: this.httpHeaders});
    }
    subexamenesSinSubexamenesPorCaracter(caracter: string, cod_area) {
        return this.http.post<Examen[]>(`${''+global.server+'api/sub-examenes-sin-subexamenes-por-caracter'}`, {caracter,cod_area},  {headers: this.httpHeaders});
    }
    //sub-examenes-por-caracter
}