import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Usuario, Rol } from '../models';

import * as global from '../shared/variables_global'; //<== HERE
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
        return this.http.get<any[]>(`${''+global.server+'api/usuarios'}`,  {headers: this.httpHeaders});
    }
    getAllRoles() {
        return this.http.get<Rol[]>(`${''+global.server+'api/roles'}`,  {headers: this.httpHeaders});
    }

    numDoctores() {
        return this.http.get<number>(`${''+global.server+'api/num-doctores'}`, {headers: this.httpHeaders});
   
    }

    register(usuario) {
console.log(usuario)
        return this.http.post(`${''+global.server+'api/usuario'}`, usuario, {headers: this.httpHeaders});
    }

    actualizarUsuario(usuario) {
        this.cadena="klp"
        //const formData: FormData = new FormData();
    //formData.append('Image', fileToUpload, fileToUpload.name);
    //formData.append('parametro', this.cadena);
        return this.http.put(`${''+global.server+'api/actualizar-usuario'}`, usuario,{headers: this.httpHeaders});
    }
    cambiarContrasenia(cedula:String, password:string){
        return this.http.post<string>(`${''+global.server+'api/actualizar-password'}`, {cedula, password}, {headers: this.httpHeaders});
    
    }
    verificarCedula(cedula:String){
        return this.http.post<string>(`${''+global.server+'api/verificar-cedula'}`, {cedula}, {headers: this.httpHeaders});
    
    }

uploadImagen(fileToUpload: File){
    const formData: FormData = new FormData();
    formData.append('imagen', fileToUpload);
    
    formData.append('nombreImagen', fileToUpload.name);
    return this.http.post(`${''+global.server+'api/upload-imagen'}`, formData);
   
}
filtro(form:Usuario){
    
    return this.http.get<Usuario[]>(`${''+global.server+'api/usuarios?estado='}`+form.estado+'&rol='+form.rol.nombre+'&cedula='+form.cedula+'&nombres='+form.nombres,  {headers: this.httpHeaders}); 
 }
 actualizarEstado(user:Usuario){
    return this.http.put(`${''+global.server+'api/actualizar-estado-usuario'}`, user,{headers: this.httpHeaders});
    
 }

 

}