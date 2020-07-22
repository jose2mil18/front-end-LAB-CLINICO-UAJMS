import { NgModule } from '@angular/core';
import { CommonModule, DatePipe, TitleCasePipe} from '@angular/common';
import { ListarAnalisisSinResultadosComponent } from './listar-analisis-sin-resultados/listar-analisis-sin-resultados.component';
import {ResultadosRoutingModule} from './resultados.routing.module';
import {ResultadosService} from './resultados.service';
import { RegistrarComponent } from './registrar/registrar.component';

import {FormsModule,  ReactiveFormsModule } from '@angular/forms';
import { ModificarComponent } from './modificar/modificar.component';
import { VerComponent } from './ver/ver.component';

import { NgSelectModule } from '@ng-select/ng-select';
import { ReporteOrinaComponent } from './reporte-orina/reporte-orina.component';
import { ReporteHemogramaComponent } from './reporte-hemograma/reporte-hemograma.component';
import { ReporteAnalisisComponent } from './reporte-analisis/reporte-analisis.component';

import {AccordionModule} from 'primeng/accordion';
//import {BootstrapAutocompleteModule} from 'angular-bootstrap-autocomplete'jh
import {InputTextModule} from 'primeng/inputtext';
import {AutoCompleteModule} from 'primeng/autocomplete';
import { VerActualizacionesComponent } from './ver-actualizaciones/ver-actualizaciones.component';
import { VerActualizacionComponent } from './ver-actualizacion/ver-actualizacion.component';

import { ButtonModule} from 'primeng/primeng';
import {DropdownModule} from 'primeng/dropdown';
import {TableModule} from 'primeng/table';
@NgModule({
  imports: [
    AccordionModule,
    ButtonModule,
    InputTextModule,
    CommonModule,
    ResultadosRoutingModule,
    FormsModule,
    NgSelectModule,
    AutoCompleteModule,
    //DataTableModule,
    DropdownModule,
    TableModule,ButtonModule
    //BootstrapAutocompleteModule 
  ],
  declarations: [ ListarAnalisisSinResultadosComponent, RegistrarComponent, ModificarComponent, VerComponent, ReporteOrinaComponent, ReporteHemogramaComponent, ReporteAnalisisComponent, VerActualizacionesComponent, VerActualizacionComponent],
   providers: [ResultadosService , DatePipe, TitleCasePipe]
})
export class ResultadosModule { }
