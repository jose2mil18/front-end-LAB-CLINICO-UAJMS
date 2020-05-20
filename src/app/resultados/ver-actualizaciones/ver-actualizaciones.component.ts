import { Component, OnInit } from '@angular/core';
import {Solicitud, Usuario} from '../../models'

import {Router} from '@angular/router'
@Component({
  selector: 'app-ver-actualizaciones',
  templateUrl: './ver-actualizaciones.component.html',
  styleUrls: ['./ver-actualizaciones.component.css']
})
export class VerActualizacionesComponent implements OnInit {
solicitudConResultado:Solicitud;
  constructor(public router:Router) { 
    
    this.solicitudConResultado = JSON.parse(localStorage.getItem('solicitudesConResultadosaModificar'));
    console.log(this.solicitudConResultado)
  }

  ngOnInit() {
  }
  ver(e){
    
    
    localStorage.removeItem('ExamenSolicitado'); 
    localStorage.setItem('ExamenSolicitado', JSON.stringify(e));
    this.router.navigate(['/resultados/ver-actualizacion']);
  }

}
