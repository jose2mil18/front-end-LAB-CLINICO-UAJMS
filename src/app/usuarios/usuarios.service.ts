import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Usuario, Rol } from '../models';

import { Observable } from 'rxjs';
@Injectable({
    providedIn : 'root'
})
export class UsuariosService {
usuario={};
  cadena:string;
  private httpHeaders = new HttpHeaders({'Content-Type': 'application/json'});
    constructor(private http: HttpClient) { }

    getAll() {
        return this.http.get<any[]>(`${'http://localhost:9898/api/usuarios'}`,  {headers: this.httpHeaders});
    }
    getAllRoles() {
        return this.http.get<Rol[]>(`${'http://localhost:9898/api/roles'}`,  {headers: this.httpHeaders});
    }

    numDoctores() {
        return this.http.get<number>(`${'http://localhost:9898/api/num-doctores'}`, {headers: this.httpHeaders});
   
    }

    register(usuario) {
console.log(usuario)
        return this.http.post(`${'http://localhost:9898/api/usuario'}`, usuario, {headers: this.httpHeaders});
    }

    actualizarUsuario(usuario) {
        this.cadena="klp"
        //const formData: FormData = new FormData();
    //formData.append('Image', fileToUpload, fileToUpload.name);
    //formData.append('parametro', this.cadena);
        return this.http.put(`${'http://localhost:9898/api/actualizar-usuario'}`, usuario,{headers: this.httpHeaders});
    }
    cambiarContrasenia(cedula:String, password:string){
        return this.http.post<string>(`${'http://localhost:9898/api/actualizar-password'}`, {cedula, password}, {headers: this.httpHeaders});
    
    }
    verificarCedula(cedula:String){
        return this.http.post<string>(`${'http://localhost:9898/api/verificar-cedula'}`, {cedula}, {headers: this.httpHeaders});
    
    }

uploadImagen(fileToUpload: File){
    const formData: FormData = new FormData();
    formData.append('imagen', fileToUpload);
    
    formData.append('nombreImagen', fileToUpload.name);
    return this.http.post(`${'http://localhost:9898/api/upload-imagen'}`, formData);
   
}
  

}