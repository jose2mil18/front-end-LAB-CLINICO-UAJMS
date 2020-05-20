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
import { Router } from '@angular/router';
import { UsuariosService } from '../usuarios.service';
var ModificarComponent = /** @class */ (function () {
    function ModificarComponent(router, usuarioService) {
        this.router = router;
        this.usuarioService = usuarioService;
        this.estados = ['habilitado', 'deshabilitado'];
        this.form = JSON.parse(localStorage.getItem('usuarioamodificar'));
        this.form.login = '';
        this.contraseña = this.form.password;
        this.form3 = { password: '' };
        this.form.password3 = this.form.password;
        console.log(this.form);
        this.form2 = {
            pass: ''
        };
        this.form.password = '';
    }
    ModificarComponent.prototype.ngOnInit = function () {
    };
    ModificarComponent.prototype.guardar_modificacion = function () {
        var _this = this;
        this.usuarioService.actualizarUsuario(this.form).subscribe(function (data) {
            _this.router.navigate(['/usuarios/listar']);
        });
    };
    ModificarComponent = __decorate([
        Component({
            selector: 'app-modificar',
            templateUrl: './modificar.component.html',
            styleUrls: ['./modificar.component.css']
        }),
        __metadata("design:paramtypes", [Router, UsuariosService])
    ], ModificarComponent);
    return ModificarComponent;
}());
export { ModificarComponent };
//# sourceMappingURL=modificar.component.js.map