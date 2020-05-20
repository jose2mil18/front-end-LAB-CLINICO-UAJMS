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
var RegistrarComponent = /** @class */ (function () {
    function RegistrarComponent(resultadosService, router) {
        this.resultadosService = resultadosService;
        this.router = router;
        this.contador = 0;
        this.form = {
            cod_solicitud: 0,
            examen: null,
            comentarios: '',
            resultados: [],
            subexamenes: []
        };
        this.form.resultados[0];
        this.solicitudSinResultado = JSON.parse(localStorage.getItem('solicitudSinResultado'));
        console.log(this.solicitudSinResultado.cod_solicitud + " afsdk");
        console.log(this.solicitudSinResultado);
        // this.form.examenes=this.solicitudSinResultado.examenes;
        this.cod_examen = 0;
        //resultadosService.getAnalisisSinResultadosporcodigo(3).subscribe(data => {
        //  this.analisisSinResultado=data;
        //});
    }
    RegistrarComponent.prototype.ngOnInit = function () { };
    RegistrarComponent.prototype.listarsubexamenes = function (cod_examen) {
        var _this = this;
        this.form = {
            resultados: []
        };
        this.cod_examen = cod_examen;
        console.log(cod_examen);
        this.resultadosService.getSubExamenes(cod_examen)
            .subscribe(function (data) {
            console.log('es' + data);
            _this.subexamenes = data;
        }, function (error) {
            console.log('jkj');
        });
    };
    RegistrarComponent.prototype.guardarResultados = function (cod_examen) {
        var _this = this;
        this.cod_examen = cod_examen;
        console.log("esdf" + this.cod_examen);
        this.form.subexamenes = this.subexamenes;
        this.form.cod_solicitud = this.solicitudSinResultado.cod_solicitud;
        console.log(this.solicitudSinResultado.examenes[this.contador]);
        for (var i = 0; i < this.solicitudSinResultado.examenes.length; i++) {
            console.log(this.solicitudSinResultado.examenes[i].cod_examen);
            if (this.solicitudSinResultado.examenes[i].cod_examen == this.cod_examen) {
                console.log(this.solicitudSinResultado.examenes[i]);
                this.form.examen = this.solicitudSinResultado.examenes[i];
            }
        }
        console.log('este es el tamaño' + this.form.cod_solicitud + " " + this.form.examen.cod_examen);
        this.contador++;
        if (this.form.comentarios === undefined) {
            this.form.comentarios = '';
        }
        console.log(this.form);
        this.resultadosService.guardarResultados(this.form)
            .subscribe(function (data) {
            console.log(_this.contador + "  " + _this.solicitudSinResultado.examenes.length);
            if (_this.solicitudSinResultado.resultados_examenes.length === _this.contador) {
                _this.resultadosService.actualizarEstadoResultadoSolicitud(_this.form.cod_solicitud).subscribe(function (data) {
                    console.log('dfasdfaksdjf' + data);
                    _this.router.navigate(['/resultados/ver']);
                });
            }
            _this.router.navigate(['/resultados/registrar']);
        });
    };
    RegistrarComponent = __decorate([
        Component({
            selector: 'app-registrar',
            templateUrl: './registrar.component.html',
            styleUrls: ['./registrar.component.css']
        }),
        __metadata("design:paramtypes", [ResultadosService, Router])
    ], RegistrarComponent);
    return RegistrarComponent;
}());
export { RegistrarComponent };
//# sourceMappingURL=registrar.component.js.map