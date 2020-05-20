import { NgModule } from '@angular/core';
import { CommonModule, DatePipe, TitleCasePipe } from '@angular/common';
import { RegistrarComponent } from './registrar/registrar.component';
import { ListarComponent } from './listar/listar.component';
import {SolicitudesService} from './solicitudes.service';
import {SolicitudesRoutingModule} from './solicitudes.routing.module';
import { NgSelectModule } from '@ng-select/ng-select';

import {FormsModule,  ReactiveFormsModule } from '@angular/forms';
import { ReporteComponent } from './reporte/reporte.component';
import { ModificarComponent } from './modificar/modificar.component';
;
import {NgxPrintModule} from 'ngx-print';
import {InputTextModule} from 'primeng/inputtext';
import { NgxPaginationModule } from 'ngx-pagination';

//import { ButtonModule} from 'primeng/primeng';
import {DropdownModule} from 'primeng/dropdown';
import {TableModule} from 'primeng/table';
import {CalendarModule} from 'primeng/calendar';

import {TabViewModule} from 'primeng/tabview';
import {CodeHighlighterModule} from 'primeng/codehighlighter';
import {ButtonModule} from 'primeng/button';
import { FacturaComponent } from './factura/factura.component';

import { QRCodeModule } from 'angularx-qrcode';
@NgModule({
  imports: [CalendarModule,
    InputTextModule,
    NgxPrintModule,
    TabViewModule,
    CodeHighlighterModule,
ButtonModule,
    CommonModule,
    SolicitudesRoutingModule,
    FormsModule
    ,ReactiveFormsModule,
    NgSelectModule
   ,NgxPaginationModule,
   ButtonModule,
   TableModule,
   DropdownModule,
   QRCodeModule

  ],
  declarations: [RegistrarComponent, ListarComponent, ReporteComponent, ModificarComponent, FacturaComponent],
  
  providers: [SolicitudesService, DatePipe, TitleCasePipe]
})
export class SolicitudesModule { }
