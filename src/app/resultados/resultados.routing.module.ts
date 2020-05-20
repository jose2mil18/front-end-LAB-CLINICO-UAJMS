import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListarAnalisisSinResultadosComponent } from './listar-analisis-sin-resultados/listar-analisis-sin-resultados.component';
import { RegistrarComponent } from './registrar/registrar.component';

import { ModificarComponent } from './modificar/modificar.component';
import { VerComponent } from './ver/ver.component';
import {ReporteOrinaComponent} from './reporte-orina/reporte-orina.component'
import { ReporteHemogramaComponent } from './reporte-hemograma/reporte-hemograma.component';
import { ReporteAnalisisComponent } from './reporte-analisis/reporte-analisis.component';

import { VerActualizacionesComponent } from './ver-actualizaciones/ver-actualizaciones.component';

import { VerActualizacionComponent } from './ver-actualizacion/ver-actualizacion.component';
const routes: Routes = [
    {
        path: 'ingresar',
        component: ListarAnalisisSinResultadosComponent
    },
    {
        path: 'reporte-hemograma',
        component: ReporteHemogramaComponent
    }, {
        path: 'reporte-analisis',
        component: ReporteAnalisisComponent
    },
    {
        path: 'reporte-orina',
        component: ReporteOrinaComponent
    },
    {
        path: 'modificar',
        component: ModificarComponent
    },
    {
        path: 'ver',
        component: VerComponent
    },
    {
        path: 'ver-actualizaciones',
        component:VerActualizacionesComponent
    },
    {
        path: 'ver-actualizacion',
        component:VerActualizacionComponent
    },
    {
        path: 'registrar',
        component: RegistrarComponent
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
export class ResultadosRoutingModule { }