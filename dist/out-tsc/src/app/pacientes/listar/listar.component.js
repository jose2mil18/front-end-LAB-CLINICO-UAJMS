var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { PacientesService } from '../pacientes.service';
var ListarComponent = /** @class */ (function () {
    function ListarComponent(pacientesService, router) {
        var _this = this;
        this.pacientesService = pacientesService;
        this.router = router;
        this.pacientes = [];
        pacientesService.getAll().subscribe(function (data) {
            _this.pacientes = data;
        });
    }
    ListarComponent.prototype.ngOnInit = function () {
        $(function () {
            $('.js-basic-example').DataTable();
            // Exportable table
            $('.js-exportable').DataTable({
                dom: 'Bfrtip',
                buttons: [
                    'copy', 'csv', 'excel', 'pdf', 'print'
                ]
            });
        });
    };
    ListarComponent.prototype.mostrarformparamodificar = function (paciente) {
        localStorage.setItem('paciente', JSON.stringify(paciente));
    };
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], ListarComponent.prototype, "usuarioActual", void 0);
    ListarComponent = __decorate([
        Component({
            selector: 'app-listar',
            templateUrl: './listar.component.html',
            styleUrls: ['./listar.component.css']
        }),
        __metadata("design:paramtypes", [PacientesService, Router])
    ], ListarComponent);
    return ListarComponent;
}());
export { ListarComponent };
//# sourceMappingURL=listar.component.js.map