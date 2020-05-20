import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders  } from '@angular/common/http';
import { map } from 'rxjs/operators';

import { environment } from '../../environments/environment';
import { Usuario} from '../models';
import {debounceTime} from 'rxjs/operators'
import { Subject } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
    
    providedIn : 'root'
})

export class AuthenticationService {
    usuario:Usuario;
  private httpHeaders = new HttpHeaders({'Content-Type': 'application/json'});
    constructor(private router: Router,private http: HttpClient) { }

    login(form) {
        return this.http.post<any>(`${'http://localhost:9898/api/validarusuarios'}`,form, {headers: this.httpHeaders})
        .pipe(map(user => {
            // login successful if there's a jwt token in the response
          
                // almacene los detalles del usuario y el token jwt en el almacenamiento local para mantener al usuario conectado entre las actualizaciones de la página
                
                    // store user details and jwt token in local storage to keep user logged in between page refreshes
                    localStorage.setItem('currentUser', JSON.stringify(user));
            
             this.usuario=user;
             this.isLoggedIn();
            return user;
        }));
    }
    logout() {
        // remove user from local storage to log user out
        localStorage.removeItem('currentUser');
    }
    public isLoggedIn(): boolean {
       // const user = this.getUserDetails();
      this.usuario=JSON.parse(localStorage.getItem('currentUser'));
       if(this.usuario!=null)
       {
           return true;
       }
       else{
        this.router.navigate(['/authentication/sign-in']);
           return false
       }
      
      }
}