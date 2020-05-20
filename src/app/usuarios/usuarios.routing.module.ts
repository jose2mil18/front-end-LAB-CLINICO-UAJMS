import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RegistrarComponent } from './registrar/registrar.component';

import { ModificarComponent } from './modificar/modificar.component';

import { ListarComponent } from './listar/listar.component'

const routes: Routes = [
  
    {
        path: 'listar',
        component: ListarComponent
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
        path: '',
        redirectTo: 'normal',
        pathMatch: 'full'
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsuariosRoutingModule { }