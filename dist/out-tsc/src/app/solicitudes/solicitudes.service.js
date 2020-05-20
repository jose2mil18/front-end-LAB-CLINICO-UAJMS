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
var SolicitudesService = /** @class */ (function () {
    function SolicitudesService(http) {
        this.http = http;
        this.usuario = {};
        this.httpHeaders = new HttpHeaders({ 'Content-Type': 'application/json' });
    }
    SolicitudesService.prototype.getPostas = function () {
        return this.http.get("" + 'http://localhost:9898/api/postas', { headers: this.httpHeaders });
    };
    SolicitudesService.prototype.getAll = function () {
        return this.http.get("" + 'http://localhost:9898/api/solicitudes', { headers: this.httpHeaders });
    };
    SolicitudesService.prototype.filtrarPaciente = function (id, fecha) {
        return this.http.post("" + 'http://localhost:9898/api/filtrar-solicitud', { id: id, fecha: fecha }, { headers: this.httpHeaders });
    };
    SolicitudesService.prototype.filtrarPorFechaSolicitud = function (fecha) {
        return this.http.post("" + 'http://localhost:9898/api/filtrar-por-fecha-de-solicitud', { fecha: fecha }, { headers: this.httpHeaders });
    };
    SolicitudesService.prototype.getAllAreas = function () {
        return this.http.get("" + 'http://localhost:9898/api/areas', { headers: this.httpHeaders });
    };
    SolicitudesService.prototype.obtenerexamenesporarea = function (cod_area) {
        return this.http.post("" + 'http://localhost:9898/api/examenesporarea', { cod_area: cod_area }, { headers: this.httpHeaders });
    };
    SolicitudesService.prototype.getByNameExamen = function (cod_examen) {
        return this.http.post("" + 'http://localhost:9898/api/obtenernombreexamen', { cod_examen: cod_examen }, { headers: this.httpHeaders });
    };
    SolicitudesService.prototype.modificar = function (solicitud) {
        return this.http.put("" + 'http://localhost:9898/api/solicitud', solicitud, { headers: this.httpHeaders });
    };
    SolicitudesService.prototype.quitar_examen = function (cod_solicitud, cod_examen) {
        return this.http.post("" + 'http://localhost:9898/api/eliminarexamendesolicitud', { cod_solicitud: cod_solicitud, cod_examen: cod_examen }, { headers: this.httpHeaders });
    };
    SolicitudesService.prototype.register = function (paciente) {
        return this.http.post("" + 'http://localhost:9898/api/solicitud', paciente, { headers: this.httpHeaders });
    };
    SolicitudesService.prototype.guardar = function (solicitud) {
        return this.http.post("" + 'http://localhost:9898/api/solicitud', solicitud, { headers: this.httpHeaders });
    };
    SolicitudesService.prototype.obtenerExamen = function (cod_examen) {
        return this.http.post("" + 'http://localhost:9898/api/examen', { cod_examen: cod_examen }, { headers: this.httpHeaders });
    };
    SolicitudesService.prototype.obtener_solicitud_con_resultados_examenes_cargados = function (solicitud) {
        return this.http.post("" + 'http://localhost:9898/api/solicitud-con-resultados-examenes', solicitud, { headers: this.httpHeaders });
    };
    SolicitudesService = __decorate([
        Injectable({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [HttpClient])
    ], SolicitudesService);
    return SolicitudesService;
}());
export { SolicitudesService };
//# sourceMappingURL=solicitudes.service.js.map