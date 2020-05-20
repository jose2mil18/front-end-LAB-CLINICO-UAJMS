import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Paciente } from '../models';

import { Observable } from 'rxjs';
@Injectable({
    providedIn : 'root'
})
export class PacientesService {
usuario={};
  
  private httpHeaders = new HttpHeaders({'Content-Type': 'application/json'});
    constructor(private http: HttpClient) { }
filtro(procedencia:String, sexo:String){
    
    return this.http.get<Paciente[]>(`${'http://localhost:9898/api/paciente?procedencia='}`+procedencia+'&sexo='+sexo,  {headers: this.httpHeaders}); 
 }
    getAll() {
        return this.http.get<Paciente[]>(`${'http://localhost:9898/api/pacientes'}`,  {headers: this.httpHeaders});
    }

    getByCedula(cedula:String) {
        return this.http.post<Paciente>(`${'http://localhost:9898/api/buscarpaciente'}`,{cedula},  {headers: this.httpHeaders});
    }

  
    update(paciente:Paciente) {
        return this.http.put<Paciente>(`${'http://localhost:9898/api/paciente'}`,paciente, {headers: this.httpHeaders});
    }

    register(paciente) {
      
                return this.http.post<Paciente>(`${'http://localhost:9898/api/paciente'}`, paciente, {headers: this.httpHeaders});
            }
            contar(){
               
                return this.http.get<number>(`${'http://localhost:9898/api/contar-pacientes'}`,{headers: this.httpHeaders}); 
            }
            buscarPacientePorCaracterDeNombres(id:String, resultados:String) {
      
                return this.http.post<Paciente[]>(`${'http://localhost:9898/api/buscar-paciente-por-caracter-de-nombres'}`, {id, resultados}, {headers: this.httpHeaders});
            }

}