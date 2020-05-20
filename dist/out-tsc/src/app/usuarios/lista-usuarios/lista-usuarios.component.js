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
import { UsuariosService } from '../usuarios.service';
var ListaUsuariosComponent = /** @class */ (function () {
    function ListaUsuariosComponent(usuarioService) {
        var _this = this;
        this.usuarioService = usuarioService;
        this.usuarios = [];
        usuarioService.getAll().subscribe(function (data) {
            _this.usuarios = data;
        });
    }
    ListaUsuariosComponent.prototype.ngOnInit = function () {
    };
    ListaUsuariosComponent.prototype.modificarUsuario = function (usuario) {
        localStorage.removeItem('usuarioamodificar');
        localStorage.setItem('usuarioamodificar', JSON.stringify(usuario));
    };
    ListaUsuariosComponent = __decorate([
        Component({
            selector: 'app-lista-usuarios',
            templateUrl: './lista-usuarios.component.html',
            styleUrls: ['./lista-usuarios.component.css']
        }),
        __metadata("design:paramtypes", [UsuariosService])
    ], ListaUsuariosComponent);
    return ListaUsuariosComponent;
}());
export { ListaUsuariosComponent };
//# sourceMappingURL=lista-usuarios.component.js.map