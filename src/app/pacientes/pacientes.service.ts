import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Paciente } from '../models';

import { Observable } from 'rxjs';

import * as global from '../shared/variables_global'; //<== HERE
@Injectable({
    providedIn : 'root'
})
export class PacientesService {
usuario={};
  
  private httpHeaders = new HttpHeaders({'Content-Type': 'application/json'});
    constructor(private http: HttpClient) { }
filtro(procedencia:String, sexo:String, edad:number, cedula:string, nombres:string){
    //'+global.server+'
    return this.http.get<Paciente[]>(`${''+global.server+'api/paciente?procedencia='}`+procedencia+'&sexo='+sexo+'&edad='+edad+'&cedula='+cedula+'&nombres='+nombres,  {headers: this.httpHeaders}); 
 }
    getAll() {
        return this.http.get<Paciente[]>(`${''+global.server+'api/pacientes'}`,  {headers: this.httpHeaders});
    }

    getByCedula(cedula:String) {
        return this.http.post<Paciente>(`${''+global.server+'api/buscarpaciente'}`,{cedula},  {headers: this.httpHeaders});
    }

  
    update(paciente:Paciente) {
        return this.http.put<Paciente>(`${''+global.server+'api/paciente'}`,paciente, {headers: this.httpHeaders});
    }

    register(paciente) {
      
                return this.http.post<Paciente>(`${''+global.server+'api/paciente'}`, paciente, {headers: this.httpHeaders});
            }
            contar(){
               
                return this.http.get<number>(`${''+global.server+'api/contar-pacientes'}`,{headers: this.httpHeaders}); 
            }
            buscarPacientePorCaracterDeNombres(id:String, resultados:String) {
      
                return this.http.post<Paciente[]>(`${''+global.server+'api/buscar-paciente-por-caracter-de-nombres'}`, {id, resultados}, {headers: this.httpHeaders});
            }

}