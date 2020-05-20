var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListarAnalisisSinResultadosComponent } from './listar-analisis-sin-resultados/listar-analisis-sin-resultados.component';
import { ResultadosRoutingModule } from './resultados.routing.module';
import { ResultadosService } from './resultados.service';
import { RegistrarComponent } from './registrar/registrar.component';
import { FormsModule } from '@angular/forms';
import { ModificarComponent } from './modificar/modificar.component';
import { VerComponent } from './ver/ver.component';
FormsModule;
RegistrarComponent;
var ResultadosModule = /** @class */ (function () {
    function ResultadosModule() {
    }
    ResultadosModule = __decorate([
        NgModule({
            imports: [
                CommonModule,
                ResultadosRoutingModule,
                FormsModule
            ],
            declarations: [ListarAnalisisSinResultadosComponent, RegistrarComponent, ModificarComponent, VerComponent],
            providers: [ResultadosService]
        })
    ], ResultadosModule);
    return ResultadosModule;
}());
export { ResultadosModule };
//# sourceMappingURL=resultados.module.js.map