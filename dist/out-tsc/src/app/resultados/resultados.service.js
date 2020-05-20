var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
var ResultadosService = /** @class */ (function () {
    function ResultadosService(http) {
        this.http = http;
        this.usuario = {};
        this.httpHeaders = new HttpHeaders({ 'Content-Type': 'application/json' });
    }
    ResultadosService.prototype.getAnalisisSinResultados = function () {
        return this.http.get("" + 'http://localhost:9898/api/solicitudesSinResultados', { headers: this.httpHeaders });
    };
    ResultadosService.prototype.getAnalisisConResultados = function () {
        return this.http.get("" + 'http://localhost:9898/api/solicitudesConResultados', { headers: this.httpHeaders });
    };
    ResultadosService.prototype.getAnalisisSinResultadosporcodigo = function (cod_solicitud) {
        return this.http.get("" + ('http://localhost:9898/api/solicitudSinResultado/' + cod_solicitud), { headers: this.httpHeaders });
    };
    ResultadosService.prototype.getSubExamenes = function (cod_examen) {
        return this.http.post("" + 'http://localhost:9898/api/subexamenes', { cod_examen: cod_examen }, { headers: this.httpHeaders });
    };
    ResultadosService.prototype.getExamen = function (cod_examen) {
        return this.http.post("" + 'http://localhost:9898/api/examen', { cod_examen: cod_examen }, { headers: this.httpHeaders });
    };
    ResultadosService.prototype.guardarResultados = function (form) {
        return this.http.post("" + 'http://localhost:9898/api/guardarresultados', form, { headers: this.httpHeaders });
    };
    ResultadosService.prototype.actualizarEstadoResultadoSolicitud = function (cod_solicitud) {
        console.log(cod_solicitud);
        return this.http.post("" + 'http://localhost:9898/api/actualizarEstadoResultadoSolicitud', { cod_solicitud: cod_solicitud }, { headers: this.httpHeaders });
    };
    ResultadosService.prototype.guardarResultadosModificados = function (form) {
        return this.http.post("" + 'http://localhost:9898/api/guardar-resultados-modificados', form, { headers: this.httpHeaders });
    };
    ResultadosService = __decorate([
        Injectable({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [HttpClient])
    ], ResultadosService);
    return ResultadosService;
}());
export { ResultadosService };
//# sourceMappingURL=resultados.service.js.map