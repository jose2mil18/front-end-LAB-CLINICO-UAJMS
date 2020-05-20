import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RegistrarComponent } from './registrar/registrar.component';
import { ListarComponent } from './listar/listar.component';
import { ReporteComponent } from './reporte/reporte.component';

import { ModificarComponent } from './modificar/modificar.component';
import {FacturaComponent} from './factura/factura.component'
const routes: Routes = [
    {
        path: 'listar',
        component: ListarComponent
    },
    {
        path: 'factura',
        component: FacturaComponent
    },
    {
        path: 'registrar',
        component: RegistrarComponent
    },
    {
        path: 'modificar',
        component: ModificarComponent
    },
   
    {
        path: 'reporte',
        component: ReporteComponent
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
export class SolicitudesRoutingModule { }