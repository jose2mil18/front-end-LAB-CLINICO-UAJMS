var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component } from '@angular/core';
import { ResultadosService } from '../resultados.service';
import { Router } from '@angular/router';
var ListarAnalisisSinResultadosComponent = /** @class */ (function () {
    function ListarAnalisisSinResultadosComponent(resultadosService, router) {
        var _this = this;
        this.resultadosService = resultadosService;
        this.router = router;
        this.solicitudSinResultado = null;
        resultadosService.getAnalisisSinResultados().subscribe(function (data) {
            _this.analisisSinResultados = data;
        });
    }
    ListarAnalisisSinResultadosComponent.prototype.ngOnInit = function () {
    };
    ListarAnalisisSinResultadosComponent.prototype.registrar = function (solicitud) {
        console.log(solicitud.institucion);
        localStorage.removeItem('solicitudSinResultado');
        localStorage.setItem('solicitudSinResultado', JSON.stringify(solicitud));
        this.router.navigate(['/resultados/registrar']);
    };
    ListarAnalisisSinResultadosComponent.prototype.modificar = function (solicitud) {
        console.log(solicitud.institucion);
        localStorage.removeItem('solicitudesConResultadosaModificar');
        localStorage.setItem('solicitudesConResultadosaModificar', JSON.stringify(solicitud));
        this.router.navigate(['/resultados/modificar']);
    };
    ListarAnalisisSinResultadosComponent.prototype.mostrarpdf = function (solicitud) {
        localStorage.removeItem('solicitudaimprimir');
        localStorage.setItem('solicitudaimprimir', JSON.stringify(solicitud));
    };
    ListarAnalisisSinResultadosComponent = __decorate([
        Component({
            selector: 'app-listar-analisis-sin-resultados',
            templateUrl: './listar-analisis-sin-resultados.component.html',
            styleUrls: ['./listar-analisis-sin-resultados.component.css']
        }),
        __metadata("design:paramtypes", [ResultadosService, Router])
    ], ListarAnalisisSinResultadosComponent);
    return ListarAnalisisSinResultadosComponent;
}());
export { ListarAnalisisSinResultadosComponent };
//# sourceMappingURL=listar-analisis-sin-resultados.component.js.map