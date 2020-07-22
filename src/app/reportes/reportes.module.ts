import { NgModule } from '@angular/core';
import { CommonModule, DatePipe, TitleCasePipe } from '@angular/common';
import { ExamenesSolicitadosComponent } from './examenes-solicitados/examenes-solicitados.component';
import {ReportesRoutingModule} from './reportes.routing.module'
import {ReportesService} from './reportes.service'
import {FormsModule,  ReactiveFormsModule } from '@angular/forms';
import { NgSelectModule } from '@ng-select/ng-select';
import { ExamenesAnualComponent } from './examenes-anual/examenes-anual.component';
import { ExamenesMensualComponent } from './examenes-mensual/examenes-mensual.component';
import {TableModule} from 'primeng/table';
import {ButtonModule} from 'primeng/button';
import {AccordionModule} from 'primeng/accordion';


@NgModule({
  imports: [
    AccordionModule,
    ButtonModule,
    TableModule,
    CommonModule,
    ReportesRoutingModule,
    NgSelectModule,
    FormsModule,
    NgSelectModule,
  ],
  declarations: [ExamenesSolicitadosComponent, ExamenesAnualComponent, ExamenesMensualComponent],
  providers: [ReportesService, DatePipe, TitleCasePipe]
})
export class ReportesModule { }
