var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
var routes = [
    {
        path: 'dashboard',
        loadChildren: 'app/dashboard/dashboard.module#DashboardModule'
    },
    {
        path: 'usuarios',
        loadChildren: 'app/usuarios/usuarios.module#UsuariosModule'
    },
    {
        path: 'resultados',
        loadChildren: 'app/resultados/resultados.module#ResultadosModule'
    },
    {
        path: 'solicitudes',
        loadChildren: 'app/solicitudes/solicitudes.module#SolicitudesModule'
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
        path: 'user-interface',
        loadChildren: 'app/user-interface/user-interface.module#UserInterfaceModule'
    },
    {
        path: 'forms',
        loadChildren: 'app/forms/forms.module#FormsModule'
    },
    {
        path: 'tables',
        loadChildren: 'app/tables/tables.module#TablesModule'
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
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        NgModule({
            imports: [RouterModule.forRoot(routes)],
            exports: [RouterModule]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());
export { AppRoutingModule };
//# sourceMappingURL=app-routing.module.js.map