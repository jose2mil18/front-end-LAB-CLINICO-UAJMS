import { Component, OnInit } from '@angular/core';

import {FormControl, FormBuilder, FormGroup, Validators, NgForm } from '@angular/forms';
import { Dosificacion } from '../../models';
import { DosificacionesService } from '../dosificaciones.service';
import { DatePipe } from '@angular/common';

import {Router} from '@angular/router'
@Component({
  selector: 'app-registrar',
  templateUrl: './registrar.component.html',
  styleUrls: ['./registrar.component.css']
})
export class RegistrarComponent implements OnInit {
form:Dosificacion
  constructor(private dosificacionesService: DosificacionesService, private datePipe:DatePipe, private router:Router) {
    this.form=new Dosificacion();
   }

  ngOnInit() {
  }
onSubmit(formsolicitud:NgForm){
  this.form.fecha_limite_emision=this.datePipe.transform($('#fecha').val(),'dd-MM-yyyy')

  if(formsolicitud.valid)
  {
   this.dosificacionesService.save(this.form).subscribe(data=>{
     alert("Dosificacion guardada")
     this.router.navigate(['/dosificaciones/listar']);
   })
  
  }

}
}
