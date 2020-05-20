/*
import { Directive, Injectable } from '@angular/core';
import { NG_ASYNC_VALIDATORS, AsyncValidator } from '@angular/forms';
import { PacientesService } from '../pacientes.service';
import { map } from 'rxjs/operators';

@Directive({
  selector: '[cedulaUnica]',
  
  providers: [{  provide: NG_ASYNC_VALIDATORS, useExisting: CedulaUnicaDirective, multi: true }]
})
export class CedulaUnicaDirective  implements AsyncValidator {
  
  constructor(private pacientesService: PacientesService) { }
  validate(control: import("@angular/forms").AbstractControl): Promise<import("@angular/forms").ValidationErrors> | import("rxjs").Observable<import("@angular/forms").ValidationErrors> {
    const cedula = control.value;
    let existeProducto = false;
    return this.pacientesService.getAll().pipe(
      map(pacientes => {
        for (const p of pacientes) {
          if (cedula === p.cedula) {
            existeProducto = true;
          }
        }
        if (existeProducto) {
          return { existeProducto: true };
        } else {
          return null;
        }
    
      })
    );
  }
 


}
@Injectable({providedIn: 'root'})
export class CedulaUnicaService implements AsyncValidator  {
 constructor(private webApiService: PacientesService) { }

 validate(control: import("@angular/forms").AbstractControl): Promise<import("@angular/forms").ValidationErrors> | import("rxjs").Observable<import("@angular/forms").ValidationErrors>
 {
   const usernameUnicoDirective = new CedulaUnicaDirective(this.webApiService);
    return usernameUnicoDirective.validate(control);
 }
}
*/