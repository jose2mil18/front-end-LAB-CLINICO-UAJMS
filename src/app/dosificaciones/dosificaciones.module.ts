import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { ListarComponent } from './listar/listar.component';
import { RegistrarComponent } from './registrar/registrar.component';
import { DosificacionesRoutingModule } from './dosificaciones.routing.module';
import {DosificacionesService} from './dosificaciones.service'
import {TableModule} from 'primeng/table';
import {ButtonModule} from 'primeng/button';

import {FormsModule,  ReactiveFormsModule } from '@angular/forms';
@NgModule({
  imports: [
    ButtonModule,
    FormsModule,
    ReactiveFormsModule,
    TableModule,
    CommonModule,
    DosificacionesRoutingModule
  ],
  declarations: [ListarComponent, RegistrarComponent],
  providers: [DosificacionesService, DatePipe],
})
export class DosificacionesModule { }
