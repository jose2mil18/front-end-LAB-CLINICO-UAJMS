import { NgModule } from '@angular/core';

import { CommonModule, DatePipe, TitleCasePipe} from '@angular/common';
import { ListarComponent } from './listar/listar.component';
import { RegistrarComponent } from './registrar/registrar.component';
import {ExamenesRoutingModule} from './examenes.routing.module';
import {ExamenesService}  from './examenes.service';

import {FormsModule,  ReactiveFormsModule } from '@angular/forms';
import { NgSelectModule } from '@ng-select/ng-select';
import {TableModule} from 'primeng/table';
//import { BrowserModule } from '@angular/platform-browser';
//import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {InputTextModule} from 'primeng/inputtext';
import {ButtonModule} from 'primeng/button';
//import {DataTableModule} from 'primeng/primeng';
import {DropdownModule} from 'primeng/dropdown';
import { ListarSolicitadosComponent } from './listar-solicitados/listar-solicitados.component';
import { ModificarComponent } from './modificar/modificar.component';
@NgModule({
  imports: [
    InputTextModule,
    CommonModule,
    ExamenesRoutingModule,
    NgSelectModule,
    FormsModule,
    ReactiveFormsModule,
    TableModule,
    ButtonModule,
    DropdownModule
  ],
  declarations: [ListarComponent, RegistrarComponent, ListarSolicitadosComponent, ModificarComponent],
  
  providers: [ExamenesService, DatePipe, TitleCasePipe]
})
export class ExamenesModule { }
