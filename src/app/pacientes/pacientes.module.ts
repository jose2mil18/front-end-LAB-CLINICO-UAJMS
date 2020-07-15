import { NgModule } from '@angular/core';
import { CommonModule, DatePipe, TitleCasePipe} from '@angular/common';
import { RegistrarComponent } from './registrar/registrar.component';
import { ListarComponent } from './listar/listar.component';
import {PacientesRoutingModule} from './pacientes.routing.module'
import {PacientesService} from './pacientes.service';

import { DataTablesModule } from 'angular-datatables';
import {FormsModule,  ReactiveFormsModule } from '@angular/forms';
import { ModificarComponent } from './modificar/modificar.component';
//import { Ng2SmartTableModule } from 'ng2-smart-table';

import {TableModule} from 'primeng/table';
//import { BrowserModule } from '@angular/platform-browser';@
//import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import {ButtonModule} from 'primeng/button';
//import {DataTableModule} from 'primeng/primeng';
import {DropdownModule} from 'primeng/dropdown';

import { NgSelectModule } from '@ng-select/ng-select';
import { HistorialClinicoComponent } from './historial-clinico/historial-clinico.component';
//import {CedulaUnicaDirective} from './validacion/cedula-unica.directive'
import {InputTextModule} from 'primeng/inputtext';
import {PaginatorModule} from 'primeng/paginator';
import {DataViewModule} from 'primeng/dataview';
@NgModule({
  imports: [
    DataViewModule,
    PaginatorModule,
    InputTextModule,
    DropdownModule,
    ButtonModule,
    NgSelectModule,
    CommonModule,
    PacientesRoutingModule,
    FormsModule,
    //DataTableModule,
    ReactiveFormsModule,
    //Ng2SmartTableModule,
    DataTablesModule,
    //BrowserAnimationsModule,
    //BrowserModule,
    TableModule,
    
  ],
  declarations: [RegistrarComponent, ListarComponent, ModificarComponent, HistorialClinicoComponent],
  
  providers: [PacientesService, DatePipe, TitleCasePipe]




})
export class PacientesModule { }
