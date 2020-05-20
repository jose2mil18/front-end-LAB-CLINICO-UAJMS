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
import { PacientesService } from '../pacientes.service';
import { FormBuilder, Validators } from '@angular/forms';
import { DatePipe } from '@angular/common';
var RegistrarComponent = /** @class */ (function () {
    function RegistrarComponent(datePipe, formBuilder, pacienteService, router) {
        this.datePipe = datePipe;
        this.formBuilder = formBuilder;
        this.pacienteService = pacienteService;
        this.router = router;
        this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
        this.form = {
            cedula: '',
            nombre: '',
            ap: '',
            am: '',
            procedencia: '',
            sexo: '',
            edad: 0,
            fnac: new Date(),
            cedula_personal: this.currentUser.personal.cedula,
        };
    }
    RegistrarComponent.prototype.ngOnInit = function () {
        this.datePipe.transform(this.form.fnac, "yyyy-MM-dd");
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
        console.log(this.form);
        this.pacienteService.register(this.form)
            .subscribe(function (data) {
            console.log(data);
            _this.router.navigate(['/pacientes/listar']);
        }, function (error) {
        });
    };
    RegistrarComponent = __decorate([
        Component({
            selector: 'app-registrar',
            templateUrl: './registrar.component.html',
            styleUrls: ['./registrar.component.css']
        }),
        __metadata("design:paramtypes", [DatePipe, FormBuilder, PacientesService, Router])
    ], RegistrarComponent);
    return RegistrarComponent;
}());
export { RegistrarComponent };
//# sourceMappingURL=registrar.component.js.map