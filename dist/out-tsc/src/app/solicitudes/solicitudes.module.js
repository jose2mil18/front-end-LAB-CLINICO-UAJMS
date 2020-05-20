var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { RegistrarComponent } from './registrar/registrar.component';
import { ListarComponent } from './listar/listar.component';
import { SolicitudesService } from './solicitudes.service';
import { SolicitudesRoutingModule } from './solicitudes.routing.module';
import { NgSelectModule } from '@ng-select/ng-select';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ReporteComponent } from './reporte/reporte.component';
import { ModificarComponent } from './modificar/modificar.component';
;
var SolicitudesModule = /** @class */ (function () {
    function SolicitudesModule() {
    }
    SolicitudesModule = __decorate([
        NgModule({
            imports: [
                CommonModule,
                SolicitudesRoutingModule,
                FormsModule,
                ReactiveFormsModule,
                NgSelectModule
            ],
            declarations: [RegistrarComponent, ListarComponent, ReporteComponent, ModificarComponent],
            providers: [SolicitudesService, DatePipe]
        })
    ], SolicitudesModule);
    return SolicitudesModule;
}());
export { SolicitudesModule };
//# sourceMappingURL=solicitudes.module.js.map