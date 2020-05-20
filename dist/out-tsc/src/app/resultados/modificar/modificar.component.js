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
import { Examen, Resultado } from '../../models';
import { Router } from '@angular/router';
var ModificarComponent = /** @class */ (function () {
    function ModificarComponent(resultadosService, router) {
        this.resultadosService = resultadosService;
        this.router = router;
        this.resultado = new Resultado();
        this.jeison = {};
        this.caden = "";
        this.result = [];
        this.qtd = ['13', '23', '33'];
        this.a = '';
        this.contador = 0;
        this.form = {
            "resultados": [
                {
                    examen: new Examen(),
                    "resultado": new String(),
                    "cod_solicitud": 0,
                    comentarios: "",
                }
            ]
        };
        console.log(this.form.resultados[0].resultado);
        this.form.resultados.examen = new Examen();
        console.log(new Date());
        this.solicitudSinResultado = JSON.parse(localStorage.getItem('solicitudesConResultadosaModificar'));
        this.resultadosDeExam = this.solicitudSinResultado.resultados_examenes;
        this.solicitudSinResultado.resultados_examenes = [];
        console.log(this.solicitudSinResultado);
        // this.form.examenes=this.solicitudSinResultado.examenes;
        this.cod_examen = 0;
        //resultadosService.getAnalisisSinResultadosporcodigo(3).subscribe(data => {
        //  this.analisisSinResultado=data;
        //});
    }
    ModificarComponent.prototype.valuechange = function (value) {
        this.a = $('#a').val();
        console.log($('#a').val());
    };
    ModificarComponent.prototype.guardarUnRegistrodeSubExamen = function (value) {
    };
    ModificarComponent.prototype.ngOnInit = function () { };
    ModificarComponent.prototype.listarsubexamenes = function (cod_examen) {
        var _this = this;
        this.result.length = 0;
        this.form = {
            resultados: []
        };
        this.cod_examen = cod_examen;
        console.log(cod_examen);
        this.resultadosService.getSubExamenes(cod_examen)
            .subscribe(function (data) {
            _this.cod_examen = cod_examen;
            _this.solicitudSinResultado.resultados_examenes = _this.resultadosDeExam;
            console.log(data);
            _this.subexamenes = data;
            for (var i = 0; i < _this.subexamenes.length; i++) {
                _this.form.resultados[i] = [];
                _this.result[i] = "";
                _this.form.resultados[i].resultado = _this.result[i];
            }
            if (_this.subexamenes.length > 1) {
                _this.form.resultados[_this.result.length] = [];
                _this.result[_this.result.length] = "";
            }
            console.log(_this.form);
        }, function (error) {
            console.log('jk');
        });
    };
    ModificarComponent.prototype.guardarResultadosmodificados = function (cod_exam) {
        for (var i = 0; i < this.solicitudSinResultado.resultados_examenes.length; i++) {
            if (this.solicitudSinResultado.resultados_examenes[i].examen.cod_examen == cod_exam) {
                this.solicitudSinResultado.resultados_examenes[i].comentarios = $('#comentarios').val();
                console.log(this.solicitudSinResultado.resultados_examenes[i].comentarios);
            }
        }
        this.resultadosService.guardarResultadosModificados(this.solicitudSinResultado)
            .subscribe(function (data) {
            console.log(data);
        });
        //}
    };
    ModificarComponent = __decorate([
        Component({
            selector: 'app-modificar',
            templateUrl: './modificar.component.html',
            styleUrls: ['./modificar.component.css']
        }),
        __metadata("design:paramtypes", [ResultadosService, Router])
    ], ModificarComponent);
    return ModificarComponent;
}());
export { ModificarComponent };
//# sourceMappingURL=modificar.component.js.map