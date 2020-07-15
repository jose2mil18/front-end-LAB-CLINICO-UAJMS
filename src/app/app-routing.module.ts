import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { AuthGuardServiceGuard } from './guard/auth-guard-service.guard';

const routes: Routes = [
    {
        path: 'dashboard',
        loadChildren: 'app/dashboard/dashboard.module#DashboardModule'
    },

    {
        path: 'usuarios',
        loadChildren: 'app/usuarios/usuarios.module#UsuariosModule',canActivate:[AuthGuardServiceGuard]
    },
    {
        path: 'resultados',
        loadChildren: 'app/resultados/resultados.module#ResultadosModule'
    },
    {
        path: 'solicitudes',
        loadChildren: 'app/solicitudes/solicitudes.module#SolicitudesModule'
    },
    {
        path: 'reportes',
        loadChildren: 'app/reportes/reportes.module#ReportesModule'
    }, 
 
     {
        path: 'examenes',
        loadChildren: 'app/examenes/examenes.module#ExamenesModule'
    },
    {
        path: 'dosificaciones',
        loadChildren: 'app/dosificaciones/dosificaciones.module#DosificacionesModule'
    },

   // {
       // path: 'resultados',
       // loadChildren: 'app/resultados/resultados.module#ResultadosModule'
   // },
    {
        path: 'pacientes',
        loadChildren: 'app/pacientes/pacientes.module#PacientesModule'
    },
    {
        path: 'app',
        loadChildren: 'app/app/app.module#AppModule'
    },
    {
        path: 'ecommerce',
        loadChildren: 'app/ecommerce/ecommerce.module#EcommerceModule'
    },
 
    {
        path: 'forms',
        loadChildren: 'app/forms/forms.module#FormsModule'
    },
  
    {
        path: 'charts',
        loadChildren: 'app/charts/charts.module#ChartsModule'
    },
    {
        path: 'widgets',
        loadChildren: 'app/widgets/widgets.module#WidgetsModule'
    },
    {
        path: 'authentication',
        loadChildren: 'app/authentication/authentication.module#AuthenticationModule'
    },
    {
        path: 'sample-pages',
        loadChildren: 'app/sample-pages/sample-pages.module#SamplePagesModule'
    },
  
    {
        path: '',
        redirectTo: 'dashboard',
        pathMatch: 'full'
    }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
