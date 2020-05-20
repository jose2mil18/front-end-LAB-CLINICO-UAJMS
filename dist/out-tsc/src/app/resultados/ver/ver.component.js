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
var VerComponent = /** @class */ (function () {
    function VerComponent(resultadosService, router) {
        var _this = this;
        this.resultadosService = resultadosService;
        this.router = router;
        this.solicitudSinResultado = null;
        resultadosService.getAnalisisConResultados().subscribe(function (data) {
            console.log(data);
            _this.analisisSinResultados = data;
        });
    }
    VerComponent.prototype.ngOnInit = function () {
    };
    VerComponent.prototype.registrar = function (solicitud) {
        console.log(solicitud.institucion);
        localStorage.removeItem('solicitudSinResultado');
        localStorage.setItem('solicitudSinResultado', JSON.stringify(solicitud));
        this.router.navigate(['/resultados/registrar']);
    };
    VerComponent.prototype.modificar = function (solicitud) {
        console.log(solicitud.institucion);
        localStorage.removeItem('solicitudesConResultadosaModificar');
        localStorage.setItem('solicitudesConResultadosaModificar', JSON.stringify(solicitud));
        this.router.navigate(['/resultados/modificar']);
    };
    VerComponent.prototype.mostrarpdf = function (solicitud) {
        localStorage.removeItem('solicitudaimprimir');
        localStorage.setItem('solicitudaimprimir', JSON.stringify(solicitud));
    };
    VerComponent = __decorate([
        Component({
            selector: 'app-ver',
            templateUrl: './ver.component.html',
            styleUrls: ['./ver.component.css']
        }),
        __metadata("design:paramtypes", [ResultadosService, Router])
    ], VerComponent);
    return VerComponent;
}());
export { VerComponent };
//# sourceMappingURL=ver.component.js.map