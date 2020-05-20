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
var UsuariosService = /** @class */ (function () {
    function UsuariosService(http) {
        this.http = http;
        this.usuario = {};
        this.httpHeaders = new HttpHeaders({ 'Content-Type': 'application/json' });
    }
    UsuariosService.prototype.getAll = function () {
        return this.http.get("" + 'http://localhost:9898/api/usuarios', { headers: this.httpHeaders });
    };
    UsuariosService.prototype.getById = function (id) {
        return this.http.get('' + "/users/" + id);
    };
    UsuariosService.prototype.register = function (usuario) {
        console.log(usuario);
        return this.http.post("" + 'http://localhost:9898/api/usuario', usuario, { headers: this.httpHeaders });
    };
    UsuariosService.prototype.actualizarUsuario = function (usuario) {
        return this.http.put("" + 'http://localhost:9898/api/usuario', usuario, { headers: this.httpHeaders });
    };
    UsuariosService = __decorate([
        Injectable({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [HttpClient])
    ], UsuariosService);
    return UsuariosService;
}());
export { UsuariosService };
//# sourceMappingURL=usuarios.service.js.map