import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs';

import * as global from './shared/variables_global'; //<== HERE
@Injectable({
    providedIn : 'root'
})
export class ServicioService {

  private httpHeaders = new HttpHeaders({'Content-Type': 'application/json'});
  constructor(private http: HttpClient) { 

  }
  crearBackup() {
    return this.http.get(`${''+global.server+'api/backup'}`,  {responseType: 'text'});
}
restaurarCopia(path:string) {
  return this.http.post(`${''+global.server+'api/restaurar'}`, {path},  {responseType: 'text'});
}
}
