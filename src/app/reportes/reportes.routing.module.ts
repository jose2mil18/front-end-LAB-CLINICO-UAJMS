import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {ExamenesSolicitadosComponent } from './examenes-solicitados/examenes-solicitados.component';
import {ExamenesAnualComponent} from './examenes-anual/examenes-anual.component'
import { ExamenesMensualComponent } from './examenes-mensual/examenes-mensual.component';

const routes: Routes = [
    {
        path: 'examenes-mensual',
        component: ExamenesMensualComponent
    },
    {
        path: 'examenes-solicitados',
        component: ExamenesSolicitadosComponent
    },
    {
        path: 'examenes-anual',
        component: ExamenesAnualComponent
    },
 
    {
        path: '',
        redirectTo: 'normal',
        pathMatch: 'full'
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReportesRoutingModule { }