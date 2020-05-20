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
import { FormBuilder, Validators } from '@angular/forms';
import { Personal } from '../../models';
var RegistrarComponent = /** @class */ (function () {
    function RegistrarComponent(formBuilder, usuarioService, router) {
        this.formBuilder = formBuilder;
        this.usuarioService = usuarioService;
        this.router = router;
        this.form2 = {
            pass: ''
        };
        this.form = {
            personal: new Personal(),
            login: '',
            password: '',
            estado: ''
        };
    }
    RegistrarComponent.prototype.ngOnInit = function () {
        this.addForm = this.formBuilder.group({
            id: [],
            firstName: ['', Validators.required],
            lastName: ['', Validators.required],
            email: ['', Validators.required]
        });
    };
    RegistrarComponent.prototype.registrar = function () {
        console.log(this.cedula);
    };
    RegistrarComponent.prototype.onSubmit = function () {
        var _this = this;
        this.usuarioService.register(this.form)
            .subscribe(function (data) {
            _this.router.navigate(['/usuarios/listar']);
        }, function (error) {
        });
    };
    RegistrarComponent = __decorate([
        Component({
            selector: 'app-registrar',
            templateUrl: './registrar.component.html',
            styleUrls: ['./registrar.component.css']
        }),
        __metadata("design:paramtypes", [FormBuilder, UsuariosService, Router])
    ], RegistrarComponent);
    return RegistrarComponent;
}());
export { RegistrarComponent };
//# sourceMappingURL=registrar.component.js.map