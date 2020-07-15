(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["common"],{

/***/ "./src/app/examenes/examenes.service.ts":
/*!**********************************************!*\
  !*** ./src/app/examenes/examenes.service.ts ***!
  \**********************************************/
/*! exports provided: ExamenesService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExamenesService", function() { return ExamenesService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _shared_variables_global__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/variables_global */ "./src/app/shared/variables_global.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


 //<== HERE
var ExamenesService = /** @class */ (function () {
    function ExamenesService(http) {
        this.http = http;
        this.usuario = {};
        this.httpHeaders = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({ 'Content-Type': 'application/json' });
    }
    ExamenesService.prototype.getAll = function (nombre_area, caracter_nombre_examen) {
        return this.http.get("" + ('' + _shared_variables_global__WEBPACK_IMPORTED_MODULE_2__["server"] + 'api/examenes?nombre_area=') + nombre_area + '&caracter_nombre_examen=' + caracter_nombre_examen, { headers: this.httpHeaders });
    };
    ExamenesService.prototype.getAllAreas = function () {
        return this.http.get("" + ('' + _shared_variables_global__WEBPACK_IMPORTED_MODULE_2__["server"] + 'api/areas'), { headers: this.httpHeaders });
    };
    ExamenesService.prototype.getInstitucionesConPrecio = function () {
        return this.http.get("" + ('' + _shared_variables_global__WEBPACK_IMPORTED_MODULE_2__["server"] + 'api/instituciones-examenes'), { headers: this.httpHeaders });
    };
    ExamenesService.prototype.registrar = function (e) {
        return this.http.post("" + ('' + _shared_variables_global__WEBPACK_IMPORTED_MODULE_2__["server"] + 'api/examen'), e, { headers: this.httpHeaders });
    };
    ExamenesService.prototype.modificar = function (e) {
        return this.http.put("" + ('' + _shared_variables_global__WEBPACK_IMPORTED_MODULE_2__["server"] + 'api/examen'), e, { headers: this.httpHeaders });
    };
    ExamenesService.prototype.obtenerExamen = function (cod_examen) {
        return this.http.get("" + ('' + _shared_variables_global__WEBPACK_IMPORTED_MODULE_2__["server"] + 'api/examen/') + cod_examen, { headers: this.httpHeaders });
    };
    ExamenesService.prototype.cambiarEstadoValorReferencia = function (cod_examen, cod_valor_referencia) {
        return this.http.post("" + ('' + _shared_variables_global__WEBPACK_IMPORTED_MODULE_2__["server"] + 'api/cambiar-estado-de-valor-referencia'), { cod_examen: cod_examen, cod_valor_referencia: cod_valor_referencia }, { headers: this.httpHeaders });
    };
    ExamenesService.prototype.subexamensPorCaracter = function (caracter, cod_area) {
        return this.http.post("" + ('' + _shared_variables_global__WEBPACK_IMPORTED_MODULE_2__["server"] + 'api/sub-examenes-por-caracter'), { caracter: caracter, cod_area: cod_area }, { headers: this.httpHeaders });
    };
    ExamenesService.prototype.subexamenesSinSubexamenesPorCaracter = function (caracter, cod_area) {
        return this.http.post("" + ('' + _shared_variables_global__WEBPACK_IMPORTED_MODULE_2__["server"] + 'api/sub-examenes-sin-subexamenes-por-caracter'), { caracter: caracter, cod_area: cod_area }, { headers: this.httpHeaders });
    };
    ExamenesService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], ExamenesService);
    return ExamenesService;
}());



/***/ })

}]);
//# sourceMappingURL=common.js.map