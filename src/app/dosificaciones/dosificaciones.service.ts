import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Usuario, Rol, Dosificacion } from '../models';

import * as global from '../shared/variables_global'; //<== HERE
import { Observable } from 'rxjs';
@Injectable({
    providedIn : 'root'
})
export class DosificacionesService {
usuario={};
  cadena:string;
  private httpHeaders = new HttpHeaders({'Content-Type': 'application/json'});
    constructor(private http: HttpClient) { }

    getAll() {
        return this.http.get<any[]>(`${''+global.server+'api/dosificaciones'}`,  {headers: this.httpHeaders});
    }
    
    save(dosificacion:Dosificacion) {
 
                return this.http.post(`${''+global.server+'api/dosificacion'}`, dosificacion, {headers: this.httpHeaders});
            }
        
}
