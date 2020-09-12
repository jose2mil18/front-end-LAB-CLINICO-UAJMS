(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["app-reportes-reportes-module"],{

/***/ "./src/app/reportes/examenes-anual/examenes-anual.component.css":
/*!**********************************************************************!*\
  !*** ./src/app/reportes/examenes-anual/examenes-anual.component.css ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/reportes/examenes-anual/examenes-anual.component.html":
/*!***********************************************************************!*\
  !*** ./src/app/reportes/examenes-anual/examenes-anual.component.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section class=\"content\">\n  <div class=\"block-header\">\n    <div class=\"row\">\n      <div class=\"col-lg-7 col-md-6 col-sm-12\">\n        <h2>Reportes Anuales\n          \n        </h2>\n      </div>\n      <div class=\"col-lg-5 col-md-6 col-sm-12\">\n        <ul class=\"breadcrumb float-md-right\">\n          <li class=\"breadcrumb-item\"><a routerLink=\"/dashboard/main\"><i class=\"zmdi zmdi-home\"></i> </a></li>\n          <li class=\"breadcrumb-item\"><a href=\"javascript:void(0);\">reportes</a></li>\n           <li class=\"breadcrumb-item active\">examenes-anual</li>\n        </ul>\n      </div>\n    </div>\n  </div>\n  <div class=\"container-fluid\">\n    <!-- Basic Examples -->\n    <div class=\"row clearfix\">\n      <div class=\"col-lg-12\">\n        <div class=\"card\">\n          <div class=\"header\">  \n       \n            <h2><strong>Reporte </strong> Del Año {{reporte.anio}} <span *ngIf=\"reporte.institucion.cod_institucion!=''\">De La Institucion {{reporte.institucion.nombre}}</span></h2>\n         \n            <ul class=\"header-dropdown\">\n              <li class=\"dropdown\"> <a href=\"javascript:void(0);\" class=\"dropdown-toggle\" data-toggle=\"dropdown\" role=\"button\" aria-haspopup=\"true\" aria-expanded=\"false\"> <i class=\"zmdi zmdi-more\"></i> </a>\n                <ul class=\"dropdown-menu dropdown-menu-right slideUp float-right\">\n                  <li><a href=\"javascript:void(0);\">Action</a></li>\n                  <li><a href=\"javascript:void(0);\">Another action</a></li>\n                  <li><a href=\"javascript:void(0);\">Something else</a></li>\n                </ul>\n              </li>\n              <li class=\"remove\">\n                <a role=\"button\" class=\"boxs-close\"><i class=\"zmdi zmdi-close\"></i></a>\n              </li>\n            </ul>\n          </div>\n          <div class=\"body\">\n              <div class=\"container\">\n                  <div class=\"row\">\n                    <div class=\"col-md-2\">\n                        <ng-select  placeholder=\"institucion\"  name=\"instiucion\"  [(ngModel)]=\"reporte.institucion\" (ngModelChange)=\"insti($event)\"   >\n                         \n                            <ng-option *ngFor=\"let i of instituciones\" [value]=\"i\">{{i.nombre}}</ng-option>\n                          \n                          </ng-select>\n                     </div>\n                     <div class=\"col-md-2\">\n                        <ng-select  placeholder=\"año\"   name=\"año\"  [(ngModel)]=\"reporte.anio\" (ngModelChange)=\"anio()\"    >\n                            <ng-option [value]=\"2018\">2018</ng-option>\n                            <ng-option [value]=\"2019\" >2019</ng-option>\n                          \n                            <ng-option [value]=\"2020\" >2020</ng-option>\n                          </ng-select>\n                     </div>\n                   \n                  </div>\n               </div>\n               <br>\n            <div class=\"\">\n             <!--\n              <table class=\"table table-bordered table-striped table-hover js-basic-example2 dataTable\">\n                <thead>\n                  <tr>\n                      <th>#</th>\n                      <th>PRESTACIONES REALIZADAS</th>\n                    <th>NRO. PRESTACIONES</th>\n                      <th>COSTO UNITARIO</th>\n                      <TH>COSTO TOTAL</TH>\n                  </tr>\n                </thead>\n              \n                <tbody>  \n                  <tr *ngFor=\"let r of reportes_mensual.reportes_examenes_mensual; index as i\">\n                    <td scope=\"row\">{{i+1}}</td>\n                  <td>{{r.precio_examen.examen.nombre}}</td>\n                    <td>{{r.nro_prestaciones}}</td>\n                 <td>{{r.precio_examen.costo}}</td>\n                      <td>{{r.costo_total_examen}}</td>\n                      <td></td>\n                 </tr>\n\n                  <tr>\n                    <td></td>\n                    <td><strong>Nro. Total de Prestaciones</strong></td>\n                    <td>{{reportes_mensual.nro_prestaciones}}</td>\n                    <td><strong>Total</strong></td>\n                    <td>{{reportes_mensual.monto}}</td>\n                  </tr>\n                 \n              </tbody>\n              </table>\n              -->\n\n          <!--   \n              <table class=\"table table-bordered table-striped table-hover js-basic-example2 dataTable\">\n                  <thead>\n                    <tr>\n                        <th>#</th>\n                        <th>MES</th>\n                      <th>NUMERO DE PRESTACIONES</th>\n                        <th>MONTO en Bs.</th>\n                       \n                    </tr>\n                  </thead>\n                \n                 <tbody>\n                  <tr *ngFor=\"let r of reportes_anual.reportes_mensuales; index as i\">\n                    <td scope=\"row\">{{i+1}}</td>\n                    \n                  <td>{{r.mes}}</td>\n                  \n                  <td>{{r.nro_prestaciones}}</td>\n                 <td>{{r.monto}}</td>\n                     \n                 </tr>\n\n                 <tr>\n                  <td></td>\n                  <td><strong>Total</strong></td>\n                  \n                  <td>{{reportes_anual.nro_prestaciones_total}}</td>\n                  <td>{{reportes_anual.monto_total}}</td>\n                \n                </tr>\n                 </tbody>\n                </table>\n              -->\n                <p-table  #dd [value]=\"reportes_mensual\"  [paginator]=\"true\" [rows]=\"20\" [pageLinks]=\"2\" [rowsPerPageOptions]=\"[5,10,20]\"  >\n              \n                  <ng-template pTemplate=\"caption\">\n                    <div class=\"ui-helper-clearfix\" style=\"text-align: left\">\n                     <!--- \n                      <button type=\"button\" pButton icon=\"pi pi-file-o\" iconPos=\"left\" label=\"DOCX\" (click)=\"exportdoc()\" style=\"margin-right: 0.5em;\"></button>\n                      <button type=\"button\" pButton icon=\"pi pi-file-pdf\" iconPos=\"left\" label=\"PDF\" (click)=\"exportPdf()\" class=\"btn btn-warning\"></button>\n                    -->\n                    <button type=\"button\" pButton icon=\"pi pi-file\" iconPos=\"left\" label=\"PDF\" (click)=\"exportPdf()\" class=\"btn btn-warning\"></button>\n                 \n                      </div>\n                </ng-template>\n                  <ng-template pTemplate=\"header\" let-solicitud=\"rowData\">\n                      <tr>\n                        <th style=\"width:45px\">#</th>\n                        <th>Mes</th>\n                        <th>Numero de prestaciones</th>\n                          <th>Monto en Bs.</th>\n                          \n                      </tr>\n                    \n                  </ng-template>\n                  <ng-template pTemplate=\"body\"   let-i=\"rowIndex\" let-r>\n                    <tr>\n                      <td scope=\"row\">{{i+1}}</td>\n                    \n                      <td>{{r.mes}}</td>\n                      \n                      <td>{{r.nro_prestaciones}}</td>\n                     <td>{{r.monto}}</td>\n                    </tr>\n                </ng-template>\n                <ng-template pTemplate=\"footer\" let-columns>\n                \n                  <tr>\n                    <td></td>\n                    <td><strong>Total</strong></td>\n                    \n                    <td>{{reportes_anual.nro_prestaciones_total}}</td>\n                    <td>{{reportes_anual.monto_total}}</td>\n                  \n                  </tr>\n                \n              </ng-template>\n                    \n                </p-table>\n <!-- \n              <table class=\"table table-bordered table-striped table-hover js-basic-example2 dataTable\">\n                  <thead>\n                    <tr>\n                        <th>#</th>\n                        <th>MES</th>\n                      <th>MONTO en Bs.</th>\n                        <th>NUMERO DE PRESTACIONES</th>\n                       \n                    </tr>\n                  </thead>\n                \n                  <tbody>\n                    <tr>\n                      <td scope=\"row\">1</td>\n                      <td>Enero</td>\n                   <td>\n  \n                    57\n                    \n                   </td>\n                        <td>3</td>\n                      \n                    </tr>\n  \n                    <tr>\n                      <td scope=\"row\">2</td>\n                      <td>Febrero</td>\n                   <td>\n  \n                    15143\n                    \n                   </td>\n                        <td>797</td>\n                        \n                    </tr>\n  \n                    <tr>\n                        <td scope=\"row\">3</td>\n                        <td>Marzo</td>\n                     <td> 1102</td>\n                          <td>58</td>\n                      </tr>\n  \n                      <tr>\n                          <td scope=\"row\">4</td>\n                          <td>Abril</td>\n                       <td> 19 </td>\n                            <td>1</td>\n                        </tr>\n\n                        <tr>\n                            <td scope=\"row\">5</td>\n                            <td>Mayo</td>\n                         <td> 38 </td>\n                              <td>2</td>\n                          </tr>\n\n                          <tr>\n                              <td scope=\"row\">6</td>\n                              <td>Junio</td>\n                           <td> 19 </td>\n                                <td>1</td>\n                            </tr>\n\n                            <tr>\n                                <td scope=\"row\">7</td>\n                                <td>Julio</td>\n                             <td> 0 </td>\n                                  <td>0</td>\n                              </tr>\n                              <tr>\n                                  <td scope=\"row\">8</td>\n                                  <td>Agosto</td>\n                               <td> 0 </td>\n                                    <td>0</td>\n                                </tr>\n                                <tr>\n                                    <td scope=\"row\">9</td>\n                                    <td>Septiembre</td>\n                                 <td> 19 </td>\n                                      <td>1</td>\n                                  </tr>\n                                  <tr>\n                                      <td scope=\"row\">10</td>\n                                      <td>Octubre</td>\n                                   <td> 0 </td>\n                                        <td>0</td>\n                                    </tr>\n\n                                    <tr>\n                                        <td scope=\"row\">11</td>\n                                        <td>Noviembre</td>\n                                     <td> 0 </td>\n                                          <td>0</td>\n                                      </tr>\n\n                                      <tr>\n                                          <td scope=\"row\">12</td>\n                                          <td>Diciembre</td>\n                                       <td> 0 </td>\n                                            <td>0</td>\n                                        </tr>\n\n                                        <tr>\n                                            <td scope=\"row\" style=\"border-bottom: 0px solid black\"></td>\n                                            <td><strong> Total</strong></td>\n                                         <td>\n                        \n                                         16397\n                                          \n                                         </td>\n                                              <td>863</td>\n                                             \n                                          </tr>\n                   \n                </tbody>\n                </table>\n              -->\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n    <!-- #END# Basic Examples -->\n    <!-- Exportable Table -->\n    \n    <!-- #END# Exportable Table -->\n  </div>\n</section>\n"

/***/ }),

/***/ "./src/app/reportes/examenes-anual/examenes-anual.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/reportes/examenes-anual/examenes-anual.component.ts ***!
  \*********************************************************************/
/*! exports provided: ExamenesAnualComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExamenesAnualComponent", function() { return ExamenesAnualComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _reportes_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../reportes.service */ "./src/app/reportes/reportes.service.ts");
/* harmony import */ var _models__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../models */ "./src/app/models/index.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ExamenesAnualComponent = /** @class */ (function () {
    function ExamenesAnualComponent(reportesService) {
        var _this = this;
        this.reportesService = reportesService;
        this.reportes_mensual = [];
        this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
        this.reporte = new _models__WEBPACK_IMPORTED_MODULE_2__["Reporte_anual"]();
        this.reportes_anual = new _models__WEBPACK_IMPORTED_MODULE_2__["Reporte_anual"]();
        this.reportesService.getInstitucionesConPrecio().subscribe(function (i) {
            _this.instituciones = i;
        });
    }
    ExamenesAnualComponent.prototype.ngOnInit = function () {
    };
    ExamenesAnualComponent.prototype.insti = function (m) {
        var _this = this;
        console.log(this.reporte);
        this.reportesService.getReportesAnual(this.reporte).subscribe(function (reportes) {
            console.log(reportes);
            _this.reportes_anual = reportes;
            _this.reportes_mensual = _this.reportes_anual.reportes_mensuales;
            console.log(reportes);
        }, function (error) {
            console.log('lafjkldfjasdkljf');
        });
    };
    ExamenesAnualComponent.prototype.anio = function () {
        var _this = this;
        this.reportesService.getReportesAnual(this.reporte).subscribe(function (reportes) {
            _this.reportes_anual = reportes;
            _this.reportes_mensual = _this.reportes_anual.reportes_mensuales;
            console.log(_this.reportes_anual);
        }, function (error) {
            console.log('lafjkldfjasdkljf');
        });
    };
    ExamenesAnualComponent.prototype.exportPdf = function () {
        console.log("insti" + this.reporte.institucion.cod_institucion + "anio" + this.reporte.anio);
        window.location.href = 'http://localhost:8080/jasperserver/rest_v2/reports/reports/reporte_anual.pdf?am_usuario=' + this.currentUser.personal_laboratorio.persona.am + '&ap_usuario=' + this.currentUser.personal_laboratorio.persona.ap + '&nombre_usuario=' + this.currentUser.personal_laboratorio.persona.nombre + '&anio=' + this.reporte.anio + '&institucion=' + this.reporte.institucion.nombre + '&monto_total=' + this.reportes_anual.monto_total.toFixed(1) + '&cod_institucion=' + this.reporte.institucion.cod_institucion + '&j_username=' + 'jasperadmin' + '&j_password=' + 'jasperadmin';
    };
    ExamenesAnualComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-examenes-anual',
            template: __webpack_require__(/*! ./examenes-anual.component.html */ "./src/app/reportes/examenes-anual/examenes-anual.component.html"),
            styles: [__webpack_require__(/*! ./examenes-anual.component.css */ "./src/app/reportes/examenes-anual/examenes-anual.component.css")]
        }),
        __metadata("design:paramtypes", [_reportes_service__WEBPACK_IMPORTED_MODULE_1__["ReportesService"]])
    ], ExamenesAnualComponent);
    return ExamenesAnualComponent;
}());



/***/ }),

/***/ "./src/app/reportes/examenes-mensual/examenes-mensual.component.css":
/*!**************************************************************************!*\
  !*** ./src/app/reportes/examenes-mensual/examenes-mensual.component.css ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/reportes/examenes-mensual/examenes-mensual.component.html":
/*!***************************************************************************!*\
  !*** ./src/app/reportes/examenes-mensual/examenes-mensual.component.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section class=\"content\">\n  <div class=\"block-header\">\n    <div class=\"row\">\n      <div class=\"col-lg-7 col-md-6 col-sm-12\">\n        <h2>Reportes Mensuales \n          \n        </h2>\n      </div>\n      <div class=\"col-lg-5 col-md-6 col-sm-12\">\n        <ul class=\"breadcrumb float-md-right\">\n          <li class=\"breadcrumb-item\"><a routerLink=\"/dashboard/main\"><i class=\"zmdi zmdi-home\"></i> </a></li>\n          <li class=\"breadcrumb-item\"><a href=\"javascript:void(0);\">reportes</a></li>\n           <li class=\"breadcrumb-item active\">examenes-mensual</li>\n        </ul>\n      </div>\n    </div>\n  </div>\n  <div class=\"container-fluid\">\n    <!-- Basic Examples -->\n    <div class=\"row clearfix\">\n      <div class=\"col-lg-12\">\n        <div class=\"card\">\n          <div class=\"header\">  \n            <h2 *ngIf=\"reporte.institucion.cod_institucion!=''\"><strong>Reporte </strong> Del Mes de <span></span>{{meses[reporte.mes-1]}} Del Año {{reporte.anio}} De La Institucion {{reporte.institucion.nombre}}</h2>\n     \n            <ul class=\"header-dropdown\">\n              <li class=\"dropdown\"> <a href=\"javascript:void(0);\" class=\"dropdown-toggle\" data-toggle=\"dropdown\" role=\"button\" aria-haspopup=\"true\" aria-expanded=\"false\"> <i class=\"zmdi zmdi-more\"></i> </a>\n                <ul class=\"dropdown-menu dropdown-menu-right slideUp float-right\">\n                  <li><a href=\"javascript:void(0);\">Action</a></li>\n                  <li><a href=\"javascript:void(0);\">Another action</a></li>\n                  <li><a href=\"javascript:void(0);\">Something else</a></li>\n                </ul>\n              </li>\n              <li class=\"remove\">\n                <a role=\"button\" class=\"boxs-close\"><i class=\"zmdi zmdi-close\"></i></a>\n              </li>\n            </ul>\n          </div>\n          <div class=\"body\">\n\n            <div class=\"container\">\n              <div class=\"row\">\n                <div class=\"col-md-2\">\n                    <ng-select  placeholder=\"institucion\"  name=\"instiucion\"  [(ngModel)]=\"reporte.institucion\" (ngModelChange)=\"insti($event)\"   >\n                     \n                        <ng-option *ngFor=\"let i of instituciones\" [value]=\"i\">{{i.nombre}}</ng-option>\n                      \n                      </ng-select>\n                 </div>\n                 <div class=\"col-md-2\">\n                    <ng-select  placeholder=\"año\"   name=\"año\"  [(ngModel)]=\"reporte.anio\" (ngModelChange)=\"anio()\"    >\n                        <ng-option [value]=\"2018\">2018</ng-option>\n                        <ng-option [value]=\"2019\" >2019</ng-option>\n                      \n                        <ng-option [value]=\"2020\" >2020</ng-option>\n                      </ng-select>\n                 </div>\n                 <div class=\"col-md-2\">\n                    <ng-select  placeholder=\"mes\"  name=\"mes\"   [(ngModel)]=\"reporte.mes\" (ngModelChange)=\"vermes($event)\"  >\n                      \n                        <ng-option [value]=\"1\">Enero</ng-option>  \n                      <ng-option [value]=\"2\">febrero</ng-option>\n                        \n                        <ng-option [value]=\"3\">Marzo</ng-option>\n                        \n                        <ng-option [value]=\"4\">Abril</ng-option>\n                        \n                        <ng-option [value]=\"5\">Mayo</ng-option>\n                        \n                        <ng-option [value]=\"6\">Junio</ng-option>\n                        \n                        <ng-option [value]=\"7\">Julio</ng-option>\n                        <ng-option [value]=\"8\">Agosto</ng-option>\n                        <ng-option [value]=\"9\">Septiembre</ng-option>\n                        \n                        <ng-option [value]=\"10\">Octubre</ng-option>\n                        \n                        <ng-option [value]=\"11\">Noviembre</ng-option>\n                        \n                        <ng-option [value]=\"12\">Diciembre</ng-option>\n                        \n                      \n                      </ng-select>\n                 </div>\n              </div>\n           </div>\n           <div></div>\n           <br>\n            <div class=\"\">\n             <!-- \n              <table class=\"table table-bordered table-striped table-hover js-basic-example2 dataTable\">\n              \n                <thead>\n                  <tr>\n                      <th>#</th>\n                      <th>PRESTACIONES REALIZADAS</th>\n                    <th>NRO. PRESTACIONES</th>\n                      <th>COSTO UNITARIO</th>\n                      <TH>COSTO TOTAL</TH>\n                  </tr>\n                </thead>\n              \n                <tbody>  \n                  <tr *ngFor=\"let r of reportes_mensual.reportes_examenes_mensual; index as i\">\n                    <td scope=\"row\">{{i+1}}</td>\n                  <td>{{r.precio_examen.examen.nombre}}</td>\n                    <td>{{r.nro_prestaciones}}</td>\n                 <td>{{r.precio_examen.costo}}</td>\n                      <td>{{r.costo_total_examen}}</td>\n                      <td></td>\n                 </tr>\n\n                  <tr>\n                    <td></td>\n                    <td><strong>Nro. Total de Prestaciones</strong></td>\n                    <td>{{reportes_mensual.nro_prestaciones}}</td>\n                    <td><strong>Total</strong></td>\n                    <td>{{reportes_mensual.monto}} Bs.</td>\n                  </tr>\n                 \n              </tbody>\n              </table>\n            -->\n              <p-table  #dd [responsive]=\"true\" [value]=\"Reportes_examen_mensual\"  [paginator]=\"true\" [rows]=\"5\" [pageLinks]=\"2\" [rowsPerPageOptions]=\"[5,10,20]\"  >\n              \n                <ng-template pTemplate=\"caption\">\n                  <div class=\"ui-helper-clearfix\" style=\"text-align: left\">\n                   <!--- \n                    <button type=\"button\" pButton icon=\"pi pi-file-o\" iconPos=\"left\" label=\"DOCX\" (click)=\"exportdoc()\" style=\"margin-right: 0.5em;\"></button>\n                    <button type=\"button\" pButton icon=\"pi pi-file-pdf\" iconPos=\"left\" label=\"PDF\" (click)=\"exportPdf()\" class=\"btn btn-warning\"></button>\n                  -->\n                  <button type=\"button\" pButton icon=\"pi pi-file\" iconPos=\"left\" label=\"PDF\" (click)=\"exportPdf()\" class=\"btn btn-warning\"></button>\n               \n                    </div>\n              </ng-template>\n                <ng-template pTemplate=\"header\" let-solicitud=\"rowData\">\n                    <tr>\n                      <th style=\"width:45px\">#</th>\n                      <th>Prestaciones realizadas</th>\n                      <th>Nro. prestaciones</th>\n                        <th>Costo unitario</th>\n                        <TH>Costo total</TH>\n                        \n                    </tr>\n                  \n                </ng-template>\n                <ng-template pTemplate=\"body\"   let-i=\"rowIndex\" let-r>\n                  <tr>\n                    <td class=\"text-left\">\n                            {{i+1}}\n                    \n                    </td>\n                    <td>{{r.precio_examen.examen.nombre}}</td>\n                    <td>{{r.nro_prestaciones}}</td>\n                 <td>{{r.precio_examen.costo.toFixed(1)}}</td>\n                      <td>{{r.costo_total_examen.toFixed(1)}}</td>\n                     \n                  </tr>\n              </ng-template>\n              <ng-template pTemplate=\"footer\" let-columns>\n              \n                <tr>\n                  <td></td>\n                  <td><strong>Nro. Total de Prestaciones</strong></td>\n                  <td>{{reportes_mensual.nro_prestaciones}}</td>\n                  <td><strong>Total</strong></td>\n                  <td class=\"font-weight-normal\">{{reportes_mensual.monto.toFixed(1)}} Bs.</td>\n                </tr>\n              \n            </ng-template>\n                  \n              </p-table>\n          <!-- \n              <table class=\"table table-bordered table-striped table-hover js-basic-example2 dataTable\">\n                  <thead>\n                    <tr>\n                        <th>#</th>\n                        <th>MES</th>\n                      <th>MONTO en Bs.</th>\n                        <th>NUMERO DE PRESTACIONES</th>\n                       \n                    </tr>\n                  </thead>\n                \n                  <tbody>\n                    <tr>\n                      <td scope=\"row\">1</td>\n                      <td>Enero</td>\n                   <td>\n  \n                    57\n                    \n                   </td>\n                        <td>3</td>\n                      \n                    </tr>\n  \n                    <tr>\n                      <td scope=\"row\">2</td>\n                      <td>Febrero</td>\n                   <td>\n  \n                    15143\n                    \n                   </td>\n                        <td>797</td>\n                        \n                    </tr>\n  \n                    <tr>\n                        <td scope=\"row\">3</td>\n                        <td>Marzo</td>\n                     <td> 1102</td>\n                          <td>58</td>\n                      </tr>\n  \n                      <tr>\n                          <td scope=\"row\">4</td>\n                          <td>Abril</td>\n                       <td> 19 </td>\n                            <td>1</td>\n                        </tr>\n\n                        <tr>\n                            <td scope=\"row\">5</td>\n                            <td>Mayo</td>\n                         <td> 38 </td>\n                              <td>2</td>\n                          </tr>\n\n                          <tr>\n                              <td scope=\"row\">6</td>\n                              <td>Junio</td>\n                           <td> 19 </td>\n                                <td>1</td>\n                            </tr>\n\n                            <tr>\n                                <td scope=\"row\">7</td>\n                                <td>Julio</td>\n                             <td> 0 </td>\n                                  <td>0</td>\n                              </tr>\n                              <tr>\n                                  <td scope=\"row\">8</td>\n                                  <td>Agosto</td>\n                               <td> 0 </td>\n                                    <td>0</td>\n                                </tr>\n                                <tr>\n                                    <td scope=\"row\">9</td>\n                                    <td>Septiembre</td>\n                                 <td> 19 </td>\n                                      <td>1</td>\n                                  </tr>\n                                  <tr>\n                                      <td scope=\"row\">10</td>\n                                      <td>Octubre</td>\n                                   <td> 0 </td>\n                                        <td>0</td>\n                                    </tr>\n\n                                    <tr>\n                                        <td scope=\"row\">11</td>\n                                        <td>Noviembre</td>\n                                     <td> 0 </td>\n                                          <td>0</td>\n                                      </tr>\n\n                                      <tr>\n                                          <td scope=\"row\">12</td>\n                                          <td>Diciembre</td>\n                                       <td> 0 </td>\n                                            <td>0</td>\n                                        </tr>\n\n                                        <tr>\n                                            <td scope=\"row\" style=\"border-bottom: 0px solid black\"></td>\n                                            <td><strong> Total</strong></td>\n                                         <td>\n                        \n                                         16397\n                                          \n                                         </td>\n                                              <td>863</td>\n                                             \n                                          </tr>\n                   \n                </tbody>\n                </table>\n              -->\n\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n    <!-- #END# Basic Examples -->\n    <!-- Exportable Table -->\n    \n    <!-- #END# Exportable Table -->\n  </div>\n</section>\n"

/***/ }),

/***/ "./src/app/reportes/examenes-mensual/examenes-mensual.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/reportes/examenes-mensual/examenes-mensual.component.ts ***!
  \*************************************************************************/
/*! exports provided: ExamenesMensualComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExamenesMensualComponent", function() { return ExamenesMensualComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _reportes_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../reportes.service */ "./src/app/reportes/reportes.service.ts");
/* harmony import */ var _models__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../models */ "./src/app/models/index.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ExamenesMensualComponent = /** @class */ (function () {
    function ExamenesMensualComponent(reportesService) {
        var _this = this;
        this.reportesService = reportesService;
        this.meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
        this.mes = {
            texto: "Enero",
            numero: 1
        };
        this.Reportes_examen_mensual = [];
        this.num = 4;
        this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
        this.reporte = new _models__WEBPACK_IMPORTED_MODULE_2__["Reporte_mensual"]();
        this.reportes_mensual = new _models__WEBPACK_IMPORTED_MODULE_2__["Reporte_mensual"]();
        this.reportesService.getInstitucionesConPrecio().subscribe(function (i) {
            _this.instituciones = i;
        });
    }
    ExamenesMensualComponent.prototype.ngOnInit = function () {
    };
    ExamenesMensualComponent.prototype.vermes = function (m) {
        var _this = this;
        console.log(this.reporte);
        this.reportesService.getReportesMensuales(this.reporte).subscribe(function (reportes) {
            console.log(reportes);
            _this.reportes_mensual = reportes;
            _this.Reportes_examen_mensual = _this.reportes_mensual.reportes_examenes_mensual;
        }, function (error) {
            console.log('lafjkldfjasdkljf');
        });
    };
    ExamenesMensualComponent.prototype.insti = function (m) {
        var _this = this;
        console.log(this.reporte);
        this.reportesService.getReportesMensuales(this.reporte).subscribe(function (reportes) {
            _this.reportes_mensual = reportes;
            if (_this.reportes_mensual.mes == null) {
                var mes = (new Date()).getMonth() + 1;
                _this.reportes_mensual.mes = (new Date()).getMonth() + 1;
            }
            _this.Reportes_examen_mensual = _this.reportes_mensual.reportes_examenes_mensual;
            console.log(reportes);
        }, function (error) {
            console.log('lafjkldfjasdkljf');
        });
    };
    ExamenesMensualComponent.prototype.anio = function () {
        var _this = this;
        this.reportesService.getReportesMensuales(this.reporte).subscribe(function (reportes) {
            _this.reportes_mensual = reportes;
            _this.Reportes_examen_mensual = _this.reportes_mensual.reportes_examenes_mensual;
        }, function (error) {
            console.log('lafjkldfjasdkljf');
        });
    };
    ExamenesMensualComponent.prototype.exportPdf = function () {
        ;
        console.log("insti" + this.reporte.institucion.cod_institucion + "anio" + this.reporte.anio + "mes" + this.reporte.mes);
        window.location.href = 'http://localhost:8080/jasperserver/rest_v2/reports/reports/reporte_mensual.pdf?am_usuario=' + this.currentUser.personal_laboratorio.persona.am + '&letra_mes=' + this.reportes_mensual.mes + '&ap_usuario=' + this.currentUser.personal_laboratorio.persona.ap + '&nombre_usuario=' + this.currentUser.personal_laboratorio.persona.nombre + '&anio=' + this.reporte.anio + '&institucion=' + this.reportes_mensual.institucion.nombre + '&monto_total=' + this.reportes_mensual.monto.toFixed(1) + '&mes=' + this.reporte.mes + '&cod_institucion=' + this.reporte.institucion.cod_institucion + '&j_username=' + 'jasperadmin' + '&j_password=' + 'jasperadmin';
    };
    ExamenesMensualComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-examenes-mensual',
            template: __webpack_require__(/*! ./examenes-mensual.component.html */ "./src/app/reportes/examenes-mensual/examenes-mensual.component.html"),
            styles: [__webpack_require__(/*! ./examenes-mensual.component.css */ "./src/app/reportes/examenes-mensual/examenes-mensual.component.css")]
        }),
        __metadata("design:paramtypes", [_reportes_service__WEBPACK_IMPORTED_MODULE_1__["ReportesService"]])
    ], ExamenesMensualComponent);
    return ExamenesMensualComponent;
}());



/***/ }),

/***/ "./src/app/reportes/examenes-solicitados/examenes-solicitados.component.css":
/*!**********************************************************************************!*\
  !*** ./src/app/reportes/examenes-solicitados/examenes-solicitados.component.css ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/reportes/examenes-solicitados/examenes-solicitados.component.html":
/*!***********************************************************************************!*\
  !*** ./src/app/reportes/examenes-solicitados/examenes-solicitados.component.html ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section class=\"content\">\n  <div class=\"block-header\">\n    <div class=\"row\">\n      <div class=\"col-lg-7 col-md-6 col-sm-12\">\n        <h2>Reportes de Solicitudes Agrupados por {{grupo.label}}\n          \n        </h2>\n      </div>\n      <div class=\"col-lg-5 col-md-6 col-sm-12\">\n        <ul class=\"breadcrumb float-md-right\">\n          <li class=\"breadcrumb-item\"><a routerLink=\"/dashboard/main\"><i class=\"zmdi zmdi-home\"></i> </a></li>\n          <li class=\"breadcrumb-item\"><a href=\"javascript:void(0);\">reportes</a></li>\n           <li class=\"breadcrumb-item active\">examenes-solicitados</li>\n        </ul>\n      </div>\n    </div>\n  </div>\n  <div class=\"container-fluid\">\n    <!-- Basic Examples -->\n    <div class=\"row clearfix\">\n      <div class=\"col-lg-12\">\n        <div class=\"card\">\n          <div class=\"header\">\n            \n            <ul class=\"header-dropdown\">\n              <li class=\"dropdown\"> <a href=\"javascript:void(0);\" class=\"dropdown-toggle\" data-toggle=\"dropdown\" role=\"button\" aria-haspopup=\"true\" aria-expanded=\"false\"> <i class=\"zmdi zmdi-more\"></i> </a>\n                <ul class=\"dropdown-menu dropdown-menu-right slideUp float-right\">\n                  <li><a href=\"javascript:void(0);\">Action</a></li>\n                  <li><a href=\"javascript:void(0);\">Another action</a></li>\n                  <li><a href=\"javascript:void(0);\">Something else</a></li>\n                </ul>\n              </li>\n              <li class=\"remove\">\n                <a role=\"button\" class=\"boxs-close\"><i class=\"zmdi zmdi-close\"></i></a>\n              </li>\n            </ul>\n          </div>\n          <div class=\"body\">\n          \n             \n            \n    <!---          \n<div class=\"row\">\n              <div class=\"col-md-3\">\n                  <div class=\"input-group search\">\n                    <input id=\"pac\" type=\"text\" class=\"form-control\" placeholder=\"buscar por nombre de paciente\" (input)=\"buscaPaciente($event)\">\n                    <span class=\"input-group-addon\">\n                                          <i class=\"zmdi zmdi-search\"></i>\n                                      </span>\n                  </div>\n  \n                  \n                </div>\n                <div class=\"col-md-3\">\n                    <div class=\"input-group\">\n                                        <span class=\"input-group-addon\">\n                                            <i class=\"zmdi zmdi-calendar\"></i>\n                                        </span>\n                      <input   [(ngModel)]=\"form.fech\" (input)=\"buscar_por_fecha($event)\" name=\"fech\" id=\"fech\" type=\"text\" class=\" dtp-btn-ok form-control fechapicker\" placeholder=\"buscar por fecha\">\n                      <span class=\"input-group-addon\" >\n                          <i class=\"zmdi zmdi-search\" (click)=\"buscar_por_fecha()\"></i>\n                      </span>\n                    </div>\n                  \n                  </div>\n\n</div>\n-->\n<!--\n<p-dataTable #dt styleClass=\"table table-hover\" [value]=\"solicitudes\" [paginator]=\"true\" [rows]=\"5\" [pageLinks]=\"2\" [rowsPerPageOptions]=\"[5,10,20]\" >\n    <p-column header = \"#\"  >\n        <ng-template  let-i=\"rowIndex\" pTemplate=\"body\">\n          {{i+1}}\n        </ng-template>\n      \n    </p-column>  \n\n  <p-column field=\"nombres_paciente\" header=\"Paciente\" [filter]=\"true\" [sortable]=\"true\">\n    \n  </p-column>\n  <p-column field=\"estado\" header=\"Estado\"  [sortable]=\"true\" [filter]=\"true\">\n     \n  </p-column>\n\n  <p-column header = \"Analisis\" >\n    <ng-template  let-solicitud=\"rowData\" pTemplate=\"body\">\n      <ng-select  placeholder=\"mostrar analisis\">\n        <ng-option *ngFor=\"let e of solicitud.examenes_solicitados\" [value]=\"e\"  >{{e.precio_examen.examen.nombre}}</ng-option>\n      \n      </ng-select>\n     </ng-template>\n  \n</p-column>\n          <p-column field=\"fecha\" header=\"Fecha\" [filter]=\"true\" [sortable]=\"true\">\n          \n          </p-column>\n          <p-column header = \"Edit\">\n              <ng-template  let-solicitud=\"rowData\" pTemplate=\"body\">\n                <a (click)=\"actualizar(solicitud)\" routerLink=\"/solicitudes/modificar\" class=\" waves-effect waves-float waves-green\"><i class=\"zmdi zmdi-edit\"></i></a>\n              </ng-template>\n            \n          </p-column>\n         \n      </p-dataTable>\n    --> \n    <!--\n      select s.cod_solicitud, s.fecha, s.fecha_entrega, s.cedula_paciente, s.cedula_usuario, s.estado, s.cod_institucion, s.gestion, s.cod_doctor_solicitante, s.estado_solicitud \nfrom solicitud s, pacientes pa, persona pe where s.cedula_paciente=pa.cedula and pe.cod_persona=pa.cod_persona and (pe.nombre ilike '%sanch%' or pe.ap ilike '%sanch%' or pe.am ilike '%sanch%');\n\n    -->\n\n\n\n\n  <!--  \n<p-table id=\"table\" #dd [value]=\"solicitudes\" [columns]=\"cols\" [paginator]=\"true\" [rows]=\"5\" [pageLinks]=\"2\" [rowsPerPageOptions]=\"[5,10,20]\"  selectionMode=\"multiple\">\n  \n  <ng-template pTemplate=\"caption\">\n      \n    <div class=\"ui-helper-clearfix\" style=\"text-align: left\">\n     \n      <button type=\"button\" pButton icon=\"pi pi-file-o\" iconPos=\"left\" label=\"CSV\" (click)=\"dd.exportCSV()\" style=\"margin-right: 0.5em;\"></button>\n      <button type=\"button\" pButton icon=\"pi pi-file-pdf\" iconPos=\"left\" label=\"PDF\" (click)=\"captureScreen()\" class=\"btn btn-warning\"></button>\n       \n      </div>\n</ng-template>\n  <ng-template pTemplate=\"header\" let-solicitud=\"rowData\">\n      <tr><th style=\"width:30px\">#</th>\n        <th style=\"width:260px\">Examen</th>\n        <th style=\"width:150px\">Area</th>\n          <th *ngFor=\"let col of cols\" >\n              {{col.header}}\n          </th>\n      </tr>\n      <tr>\n        <th></th>\n        \n        <th></th>\n        <th>\n          <ng-select   placeholder=\"Selecciona un area\"   [(ngModel)]=\"area\" class=\"\" (ngModelChange)=\"filtro_por_area()\"   name=\"area\" required>\n           <ng-container >\n            <ng-option  *ngFor=\" let a of areas\" [value]=\"a\" >{{a.nombre}}</ng-option>\n          </ng-container>\n           </ng-select> </th>\n          <th  *ngFor=\"let col of cols\" [ngSwitch]=\"col.field\">\n            \n              <ng-select  *ngSwitchCase=\"'estado_solicitud'\" placeholder=\"Selecciona un estado\"   class=\"\" (ngModelChange)=\"filtro_completo()\"   name=\"estado\" required>\n                  <ng-option  *ngFor=\" let rol of brands\" [value]=\"rol.value\" >{{rol.label}}</ng-option>\n                 \n                 </ng-select>\n                    <ng-container  *ngSwitchCase=\"'fecha'\">\n              <input  [(ngModel)]=\"form.fech\" (ngModelChange)=\"buscar_por_fecha($event)\" name=\"fech\" type=\"date\" (click)=\"buscar_por_fecha($event)\" placeholder=\"fecha_inicio\">\n            \n              <a  (click)=\"registrar(s)\" data-toggle=\"modal\" data-target=\"#addevent\"  class=\" waves-effect waves-float waves-green\"><i class=\"zmdi zmdi-edit\"></i></a> \n            </ng-container>\n          </th>\n       \n      </tr>\n  </ng-template>\n  <ng-template pTemplate=\"body\"   let-i=\"rowIndex\" let-solicitud>\n      <tr>\n        <td>\n                {{i+1}}\n        \n        </td>\n        <td>  \n          \n          <ng-select  placeholder=\"mostrar analisis\">\n            <ng-option *ngFor=\"let e of solicitud.examenes_solicitados\" [value]=\"e\"  >{{e.precio_examen.examen.nombre}}</ng-option>\n          \n          </ng-select>\n          \n        -->\n        \n        <!--   \n        <tr *ngFor=\"let e of solicitud.examenes_solicitados\" >\n          <td >{{e.precio_examen.examen.nombre}}</td>\n        </tr>\n         </td>\n         <td> <tr *ngFor=\"let e of solicitud.examenes_solicitados\" >\n          \n            <td>{{e.precio_examen.examen.area.nombre}}</td>\n          </tr> </td>\n\n          <td *ngFor=\"let col of cols; index as i\" >\n              {{solicitud[col.field]}}\n          </td>\n\n        -->\n         <!--  \n          <td>  \n              <ng-select  placeholder=\"mostrar analisis\">\n                <ng-option *ngFor=\"let e of solicitud.examenes_solicitados\" [value]=\"e\"  >{{e.precio_examen.examen.nombre}}</ng-option>\n              \n              </ng-select>\n              \n             </td>\n             <td  class=\"text-center\">\n               <ng-container *ngIf=\"solicitud.estado=='Sin Registrar'\">\n                <a (click)=\"actualizar(solicitud)\" routerLink=\"/solicitudes/modificar\" class=\" waves-effect waves-float waves-green\"><i class=\"zmdi zmdi-edit\"></i></a>\n              </ng-container>\n            </td>\n          \n      </tr>\n  </ng-template>\n    \n    \n</p-table>\n-->\n<!-- -------------------------------------------------------------------------------------------------------------------->\n\n\n<p-table id=\"table\" #dd [value]=\"reporte_examenes_solicitados\" [columns]=\"cols\" [paginator]=\"true\" [rows]=\"10\" [pageLinks]=\"2\" [rowsPerPageOptions]=\"[5,10,20]\"  selectionMode=\"multiple\">\n  \n  <ng-template pTemplate=\"caption\">\n      \n    <div class=\"ui-helper-clearfix\" style=\"text-align: left\">\n      <ng-select   id=\"item\" placeholder=\"Agrupar\" [(ngModel)]=\"grupo\" name=\"item\" style=\"margin-right: 0.5em; width: 120px; float : left;\"  (ngModelChange)=\"klp($event)\"   >\n        <ng-container *ngFor=\"let s of grupos\"> \n          <ng-option [value]=\"s\" id=\"codkfjasd\">{{s.label}}</ng-option>\n        </ng-container>\n    \n     \n       </ng-select>\n     <button type=\"button\" pButton icon=\"pi pi-file\" iconPos=\"left\" label=\"PDF\" (click)=\"exportPdf()\" class=\"btn btn-warning\"></button>\n       \n      </div>\n   </ng-template>\n    <ng-template pTemplate=\"header\" let-reporte=\"rowData\">\n        <tr><th style=\"width:30px\">#</th>\n          \n          <th style=\"width:260px\" *ngIf=\"grupo.label!='Paciente'\">Paciente</th>\n          <th style=\"width:150px\" *ngIf=\"grupo.label!='Examen'\">Examen</th>\n          <th style=\"width:150px\" *ngIf=\"grupo.label!='Area'\">Area</th>\n    \n            <th >\n               Fecha\n            </th>\n            <th *ngIf=\"grupo.label!='Estado'\">Estado</th>\n            \n            <th>Fecha de Entrega</th>\n        </tr>\n        <tr>\n          <th></th>\n          <th *ngIf=\"grupo.label!='Paciente'\"></th>\n          <th *ngIf=\"grupo.label!='Examen'\"></th>\n          <th *ngIf=\"grupo.label!='Area'\">\n\n            <ng-select   placeholder=\"Selecciona un area\"   [(ngModel)]=\"form.nombre_area\" class=\"\" (ngModelChange)=\"filtro_completo(formulario)\"   name=\"area\" required>\n           \n              <ng-option  *ngFor=\" let a of areas\" [value]=\"a.nombre\" >{{a.nombre}}</ng-option>\n           \n             </ng-select> \n            </th>\n     \n            <th>\n              <ng-container  >\n                <div class=\"ui-inputgroup\">\n                  <span  style=\"width: 20%;\" class=\"ui-inputgroup-addon\" data-toggle=\"modal\" data-target=\"#addevent\"><i class=\"pi pi-calendar\" style=\"line-height: 1.25;\"></i></span>\n                  <input  style=\"width: 80%;\" [(ngModel)]=\"form.fech\" pInputText data-date-format=\"YYYYY-MMMM-DD\" (ngModelChange)=\"filtro_completo(formulario)\" name=\"fech\" type=\"date\"  placeholder=\"fecha_inicio\">         \n              </div>\n             \n              </ng-container>\n  \n            </th>\n            <th *ngIf=\"grupo.label!='Estado'\"> \n              \n\n                <ng-select  style=\"display:none\" placeholder=\"Selecciona un estado\"  [(ngModel)]=\"this.form.estado_solicitud\" class=\"\" (ngModelChange)=\"filtro_completo(formulario)\"   name=\"estado\" required>\n                    <ng-option  *ngFor=\" let rol of brands\" [value]=\"rol.value\" >{{rol.label}}</ng-option>\n                   \n                   </ng-select>\n                   <!--  \n                      <ng-container  *ngSwitchCase=\"'fecha'\">\n                <input  [(ngModel)]=\"form.fech\" (ngModelChange)=\"buscar_por_fecha($event)\" name=\"fech\" type=\"date\" (click)=\"buscar_por_fecha($event)\" placeholder=\"fecha_inicio\">\n              \n                <a  (click)=\"registrar(s)\" data-toggle=\"modal\" data-target=\"#addevent\"  class=\" waves-effect waves-float waves-green\"><i class=\"zmdi zmdi-edit\"></i></a> \n              </ng-container>\n            -->\n            </th>\n         \n            <th></th>\n        </tr>\n    </ng-template>\n    <ng-template pTemplate=\"body\"   let-rowIndex=\"rowIndex\" let-reporte>\n        <tr class=\"ui-widget-header\" >\n         \n            <td colspan=\"5\">\n                <span style=\"font-weight:bold\">  {{reporte.grupo}}</span>\n            </td>\n        </tr>\n        <tr *ngFor=\"let examen_solicitado of reporte.examenes_solicitados; index as i\">\n          <td>\n                  {{i+1}}  \n          \n          </td>\n          <td  *ngIf=\"grupo.label!='Paciente'\">\n            {{examen_solicitado.solicitud.paciente.persona.nombre}} {{examen_solicitado.solicitud.paciente.persona.ap}} {{examen_solicitado.solicitud.paciente.persona.am}}  \n    \n    </td>\n    <td *ngIf=\"grupo.label!='Examen'\"> \n      {{examen_solicitado.precio_examen.examen.nombre}}\n     </td>\n           <td *ngIf=\"grupo.label!='Area'\"> \n             {{examen_solicitado.precio_examen.examen.area.nombre}}\n            </td>\n          \n            <td  >\n                {{examen_solicitado.solicitud.fecha | date: 'dd-MM-yyyy'}}\n            </td>\n           <!--  \n            <td>  \n                <ng-select  placeholder=\"mostrar analisis\">\n                  <ng-option *ngFor=\"let e of solicitud.examenes_solicitados\" [value]=\"e\"  >{{e.precio_examen.examen.nombre}}</ng-option>\n                \n                </ng-select>\n                \n               </td>\n               <td  class=\"text-center\">\n                 <ng-container *ngIf=\"solicitud.estado=='Sin Registrar'\">\n                  <a (click)=\"actualizar(solicitud)\" routerLink=\"/solicitudes/modificar\" class=\" waves-effect waves-float waves-green\"><i class=\"zmdi zmdi-edit\"></i></a>\n                </ng-container>\n              </td>\n            -->\n  \n            <td *ngIf=\"grupo.label!='Estado'\">\n                {{examen_solicitado.solicitud.estado_solicitud}}\n              </td>\n              <td  >\n                {{examen_solicitado.solicitud.fecha_entrega | date: 'dd-MM-yyyy'}}\n            </td>\n        </tr>\n    </ng-template>\n      \n      \n  </p-table>\n\n\n\n\n\n<!--\n              <table class=\"table table-bordered table-striped table-hover js-basic-example dataTable\">\n                \n                <thead>\n                  <tr>\n                      <th>#</th>\n                      \n                      <th>PACIENTE</th>\n                      <th>ANALISIS</th>\n                      <th>ESTADO</th>\n                      <TH>FECHA</TH>\n                      <TH>MODIFICAR</TH>\n                      \n                  </tr>\n                </thead>\n              \n                <tbody>\n                    <tr *ngFor=\"let s of solicitudes | paginate: {itemsPerPage: 5, currentPage: pageActual}; index as i\">\n                        <th scope=\"row\">{{i+1}}</th>\n                     \n                        <td>{{s.paciente.persona.nombre}} {{s.paciente.persona.ap}} {{s.paciente.persona.am}}</td>\n                        <td> \n                          \n                          \n                                <ng-select  placeholder=\"mostrar analisis \">\n                                 <ng-option *ngFor=\"let e of s.examenes_solicitados\" [value]=\"e.precio_examen.examen.nombre\"  >{{e.precio_examen.examen.nombre}}</ng-option>\n                               \n                               </ng-select>\n                            \n                        </td>\n                          <td>{{s.estado}}</td>\n                          <td>{{s.fecha}}</td>\n                          <td><a  *ngIf=\"s.estado==='Sin Registrar'\" routerLink=\"/solicitudes/modificar\" (click)=\"actualizar(s)\"  class=\" waves-effect waves-float waves-green\"><i class=\"zmdi zmdi-edit\"></i></a>\n                      \n                          </td>\n                      </tr>\n                  \n                 \n              </tbody>\n              </table>\n              <pagination-controls (pageChange)=\"pageActual = $event\"   previousLabel=\"Atras\" nextLabel=\"Siguiente\"></pagination-controls>\n            -->\n      \n   \n          </div>\n\n        </div>\n      </div>\n    </div>\n    <!-- #END# Basic Examples -->\n    <!-- Exportable Table -->\n    \n    <!-- #END# Exportable Table -->\n  </div>\n</section>\n<div class=\"modal fade\" id=\"addevent\" tabindex=\"-1\" role=\"dialog\">\n  <div class=\"modal-dialog\" role=\"document\">\n    <div class=\"modal-content\">\n      <div class=\"modal-header\">\n        <h4 class=\"title\" id=\"defaultModalLabel\" ></h4>\n      </div>\n      <div class=\"modal-body\">\n           <form  ngNativeValidate  #formulario=\"ngForm\">\n          <div class=\" row clearfix\">\n            \n  <div class=\"col-lg-4\">\n            <label for=\"fecha_inicio\">Desde:</label>\n            </div>\n            \n  <div class=\"col-lg-8\">\n            <input id=\"fecha_inicio\"  class=\"form-control\" [(ngModel)]=\"form.fecha_inicio\" name=\"fecha_inicio\" type=\"date\" placeholder=\"fecha_inicio\" required max=\"form.fecha_fin\">\n        \n                  </div>\n\n                  <div class=\"col-lg-4\">\n                      <label for=\"fecha_fin\">Hasta:</label>\n                      </div>\n                      \n            <div class=\"col-lg-8\">\n                      <input id=\"fecha_fin\" class=\"form-control\" [(ngModel)]=\"form.fecha_fin\"  name=\"fecha_fin\" type=\"date\"  placeholder=\"fecha_final\" required>\n                  \n                            </div>\n              </div>\n      <div class=\"modal-footer\">\n        <button type=\"submit\" (click)=\"filtro_completo(formulario)\" id=\"a\" class=\"btn btn-primary btn-round waves-effect\" >Guardar</button>\n        <button type=\"button\" class=\"btn btn-simple btn-round waves-effect\" data-dismiss=\"modal\">Salir</button>\n      </div>\n      </form>\n    </div>\n  </div>\n</div>\n</div>\n"

/***/ }),

/***/ "./src/app/reportes/examenes-solicitados/examenes-solicitados.component.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/reportes/examenes-solicitados/examenes-solicitados.component.ts ***!
  \*********************************************************************************/
/*! exports provided: ExamenesSolicitadosComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExamenesSolicitadosComponent", function() { return ExamenesSolicitadosComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _models__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../models */ "./src/app/models/index.ts");
/* harmony import */ var _solicitudes_solicitudes_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../solicitudes/solicitudes.service */ "./src/app/solicitudes/solicitudes.service.ts");
/* harmony import */ var _reportes_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../reportes.service */ "./src/app/reportes/reportes.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var ExamenesSolicitadosComponent = /** @class */ (function () {
    function ExamenesSolicitadosComponent(reportesService, solicitudesService, datePipe, router) {
        var _this = this;
        this.reportesService = reportesService;
        this.solicitudesService = solicitudesService;
        this.datePipe = datePipe;
        this.router = router;
        this.grupo = {
            label: 'Agrupar',
            seleccionador: '',
            agrupador: ''
        };
        this.grupo = JSON.parse(localStorage.getItem('grupo'));
        this.solicitudesService.minimaFecha().subscribe(function (data) {
            console.log(data);
        });
        this.bandera = true;
        this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
        this.date = new Date();
        this.fechita = this.datePipe.transform(this.date, "dd-MM-yyyy");
        this.area = new _models__WEBPACK_IMPORTED_MODULE_2__["Area"];
        this.solicitudesService.getAllAreas().subscribe(function (data) {
            _this.areas = data;
            console.log(_this.areas);
        });
        this.form = {
            fech: '',
            fecha_inicio: '2019-03-03',
            fecha_fin: this.datePipe.transform(this.date, "yyyy-MM-dd"),
            caracter_nombre_examen: '',
            estado_solicitud: '',
            cedula: '',
            nombre_area: '',
            resultados: ''
        };
        this.paciente = JSON.parse(localStorage.getItem('paciente'));
        this.examenes_solicitados = this.paciente.examenes_solicitados;
        this.reportesService.getReporteExamenesSolicitados(this.form.cedula, this.form.nombre_area, this.form.caracter_nombre_examen, this.form.fech, this.form.fecha_inicio, this.form.fecha_fin, this.form.estado_solicitud, this.grupo.agrupador, this.grupo.seleccionador).subscribe(function (data) {
            _this.reporte_examenes_solicitados = data;
            console.log(data);
            // this.reporte_examenes_solicitados.grupo=this.grupo;
        });
    }
    ExamenesSolicitadosComponent.prototype.ngOnInit = function () {
        this.grupos = [
            { label: 'Examen', seleccionador: 'e.nombre', agrupador: 'nombre' },
            { label: 'Area', seleccionador: 'a.nombre', agrupador: 'nombre' },
            { label: 'Paciente', seleccionador: 's.cedula_paciente', agrupador: 'cedula_paciente' },
            { label: 'Estado', seleccionador: 's.estado_solicitud', agrupador: 'estado_solicitud' }
        ];
        this.brands = [
            { label: 'Todos', value: "" },
            { label: 'Entregado', value: 'Entregado' },
            { label: 'Recibido', value: 'Recibido' }
        ];
        this.cols = [
            { field: 'fecha', header: 'Fecha' }
        ];
    };
    ExamenesSolicitadosComponent.prototype.filtro_completo = function (formu) {
        var _this = this;
        //console.log(this.form.fech)
        if (this.form.resultados == null) {
            this.form.resultados = "";
        }
        if (this.form.estado_solicitud == null) {
            this.form.estado_solicitud = "";
        }
        if (this.form.nombre_area == null) {
            this.form.nombre_area = "";
        }
        console.log(this.form.estado_solicitud);
        validatefechas();
        if (formu.valid && ($('#fecha_inicio').val() <= $('#fecha_fin').val())) {
            $('#addevent').removeClass('show');
            if (this.form.nombre_area == null) {
                this.form.nombre_area = "";
            }
            console.log(this.form.fech);
            console.log(this.area.nombre + " " + this.area.cod_area);
            this.reportesService.getReporteExamenesSolicitados(this.form.cedula, this.form.nombre_area, this.form.caracter_nombre_examen, this.form.fech, this.form.fecha_inicio, this.form.fecha_fin, this.form.estado_solicitud, this.grupo.agrupador, this.grupo.seleccionador).subscribe(function (data) {
                _this.reporte_examenes_solicitados = data;
                console.log(data);
            });
        }
    };
    ExamenesSolicitadosComponent.prototype.buscar_por_fecha = function (fech) {
        console.log(fech);
    };
    ExamenesSolicitadosComponent.prototype.exportPdf = function () {
        if (this.grupo.label == 'Examen') {
            if (this.form.nombre_area == '') {
                window.location.href = 'http://localhost:8080/jasperserver/rest_v2/reports/reports/reporte_examnes_solicitados.html?am_usuario=' + this.currentUser.personal_laboratorio.persona.am + '&cedula=' + this.form.cedula + '&ap_usuario=' + this.currentUser.personal_laboratorio.persona.ap + '&nombre_usuario=' + this.currentUser.personal_laboratorio.persona.nombre + '&nombre_paciente=' + '%%' + '&ap_paciente=' + this.paciente.persona.ap + '&am_paciente=' + this.paciente.persona.am + '&fecha_inicio=' + this.form.fecha_inicio + '&fecha_fin=' + this.form.fecha_fin + '&j_username=' + 'jasperadmin' + '&j_password=' + 'jasperadmin';
            }
            else {
                window.location.href = 'http://localhost:8080/jasperserver/rest_v2/reports/reports/reporte_examnes_solicitados.html?am_usuario=' + this.currentUser.personal_laboratorio.persona.am + '&cedula=' + this.form.cedula + '&ap_usuario=' + this.currentUser.personal_laboratorio.persona.ap + '&nombre_usuario=' + this.currentUser.personal_laboratorio.persona.nombre + '&nombre_paciente=' + '%%' + '&ap_paciente=' + this.paciente.persona.ap + '&am_paciente=' + this.paciente.persona.am + '&nombre_area=' + this.form.nombre_area + '&fecha_inicio=' + this.form.fecha_inicio + '&fecha_fin=' + this.form.fecha_fin + '&j_username=' + 'jasperadmin' + '&j_password=' + 'jasperadmin';
            }
        }
        if (this.grupo.label == 'Area') {
            if (this.form.nombre_area == '') {
                window.location.href = 'http://localhost:8080/jasperserver/rest_v2/reports/reports/reporte_examnes_solicitados_por_are.html?am_usuario=' + this.currentUser.personal_laboratorio.persona.am + '&cedula=' + this.form.cedula + '&ap_usuario=' + this.currentUser.personal_laboratorio.persona.ap + '&nombre_usuario=' + this.currentUser.personal_laboratorio.persona.nombre + '&nombre_paciente=' + '%%' + '&ap_paciente=' + this.paciente.persona.ap + '&am_paciente=' + this.paciente.persona.am + '&fecha_inicio=' + this.form.fecha_inicio + '&fecha_fin=' + this.form.fecha_fin + '&j_username=' + 'jasperadmin' + '&j_password=' + 'jasperadmin';
            }
            else {
                window.location.href = 'http://localhost:8080/jasperserver/rest_v2/reports/reports/reporte_examnes_solicitados_por_are.html?am_usuario=' + this.currentUser.personal_laboratorio.persona.am + '&cedula=' + this.form.cedula + '&ap_usuario=' + this.currentUser.personal_laboratorio.persona.ap + '&nombre_usuario=' + this.currentUser.personal_laboratorio.persona.nombre + '&nombre_paciente=' + '%%' + '&ap_paciente=' + this.paciente.persona.ap + '&am_paciente=' + this.paciente.persona.am + '&nombre_area=' + this.form.nombre_area + '&fecha_inicio=' + this.form.fecha_inicio + '&fecha_fin=' + this.form.fecha_fin + '&j_username=' + 'jasperadmin' + '&j_password=' + 'jasperadmin';
            }
        }
        if (this.grupo.label == 'Paciente') {
            if (this.form.nombre_area == '') {
                window.location.href = 'http://localhost:8080/jasperserver/rest_v2/reports/reports/reporte_examnes_solicitados_por_paciente.html?am_usuario=' + this.currentUser.personal_laboratorio.persona.am + '&cedula=' + this.form.cedula + '&ap_usuario=' + this.currentUser.personal_laboratorio.persona.ap + '&nombre_usuario=' + this.currentUser.personal_laboratorio.persona.nombre + '&nombre_paciente=' + '%%' + '&ap_paciente=' + this.paciente.persona.ap + '&am_paciente=' + this.paciente.persona.am + '&fecha_inicio=' + this.form.fecha_inicio + '&fecha_fin=' + this.form.fecha_fin + '&j_username=' + 'jasperadmin' + '&j_password=' + 'jasperadmin';
            }
            else {
                window.location.href = 'http://localhost:8080/jasperserver/rest_v2/reports/reports/reporte_examnes_solicitados_por_paciente.html?am_usuario=' + this.currentUser.personal_laboratorio.persona.am + '&cedula=' + this.form.cedula + '&ap_usuario=' + this.currentUser.personal_laboratorio.persona.ap + '&nombre_usuario=' + this.currentUser.personal_laboratorio.persona.nombre + '&nombre_paciente=' + '%%' + '&ap_paciente=' + this.paciente.persona.ap + '&am_paciente=' + this.paciente.persona.am + '&nombre_area=' + this.form.nombre_area + '&fecha_inicio=' + this.form.fecha_inicio + '&fecha_fin=' + this.form.fecha_fin + '&j_username=' + 'jasperadmin' + '&j_password=' + 'jasperadmin';
            }
        }
        if (this.grupo.label == 'Estado') {
            if (this.form.nombre_area == '') {
                window.location.href = 'http://localhost:8080/jasperserver/rest_v2/reports/reports/reporte_examnes_solicitados_por_estado.html?am_usuario=' + this.currentUser.personal_laboratorio.persona.am + '&cedula=' + this.form.cedula + '&ap_usuario=' + this.currentUser.personal_laboratorio.persona.ap + '&nombre_usuario=' + this.currentUser.personal_laboratorio.persona.nombre + '&nombre_paciente=' + '%%' + '&ap_paciente=' + this.paciente.persona.ap + '&am_paciente=' + this.paciente.persona.am + '&fecha_inicio=' + this.form.fecha_inicio + '&fecha_fin=' + this.form.fecha_fin + '&j_username=' + 'jasperadmin' + '&j_password=' + 'jasperadmin';
            }
            else {
                window.location.href = 'http://localhost:8080/jasperserver/rest_v2/reports/reports/reporte_examnes_solicitados_por_estado.html?am_usuario=' + this.currentUser.personal_laboratorio.persona.am + '&cedula=' + this.form.cedula + '&ap_usuario=' + this.currentUser.personal_laboratorio.persona.ap + '&nombre_usuario=' + this.currentUser.personal_laboratorio.persona.nombre + '&nombre_paciente=' + '%%' + '&ap_paciente=' + this.paciente.persona.ap + '&am_paciente=' + this.paciente.persona.am + '&nombre_area=' + this.form.nombre_area + '&fecha_inicio=' + this.form.fecha_inicio + '&fecha_fin=' + this.form.fecha_fin + '&j_username=' + 'jasperadmin' + '&j_password=' + 'jasperadmin';
            }
        }
    };
    /*
  
    
      SELECT
      s.cedula_paciente,
  per.nombre AS nombre_paciente,
      
  count(s.cedula_paciente) as nro_prestaciones
      , min(s.fecha) as fecha_inicio, max(s.fecha) as fecha_fin
  FROM sol_exam soe,
      solicitud s,
      precio_examen pe,
      examen e,
      area a, pacientes pa, persona per
  WHERE
  s.cedula_paciente=pa.cedula and per.cod_persona=pa.cod_persona and
  (s.fecha >=  '2018-01-01' AND  s.fecha <= '2020-09-09')
  AND
  a.nombre like  '%%'
      AND  pe.cod_precio_examen = soe.cod_precio_examen
       AND a.cod_area = e.cod_area
       AND pe.cod_examen = e.cod_examen
       AND soe.cod_solicitud = s.cod_solicitud
       AND pe.cod_institucion LIKE '%%'
       AND soe.cod_sol_exam = (select max(cod_sol_exam) from sol_exam  where cod_precio_examen=soe.cod_precio_examen and cod_solicitud=soe.cod_solicitud)
  GROUP BY 1,2
    */
    ExamenesSolicitadosComponent.prototype.klp = function (value) {
        var _this = this;
        console.log(value);
        if (value == null) {
            this.router.navigate(['/examenes/listar-examenes-solicitados']);
        }
        else {
            localStorage.setItem('grupo', JSON.stringify(this.grupo));
            console.log(this.grupo.seleccionador);
            this.router.navigate(['/reportes/examenes-solicitados']);
            this.reportesService.getReporteExamenesSolicitados(this.form.cedula, this.form.nombre_area, this.form.caracter_nombre_examen, this.form.fech, this.form.fecha_inicio, this.form.fecha_fin, this.form.estado_solicitud, this.grupo.agrupador, this.grupo.seleccionador).subscribe(function (data) {
                _this.reporte_examenes_solicitados = data;
                console.log(data);
                // this.reporte_examenes_solicitados.grupo=this.grupo;
            });
        }
    };
    ExamenesSolicitadosComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-examenes-solicitados',
            template: __webpack_require__(/*! ./examenes-solicitados.component.html */ "./src/app/reportes/examenes-solicitados/examenes-solicitados.component.html"),
            styles: [__webpack_require__(/*! ./examenes-solicitados.component.css */ "./src/app/reportes/examenes-solicitados/examenes-solicitados.component.css")]
        }),
        __metadata("design:paramtypes", [_reportes_service__WEBPACK_IMPORTED_MODULE_4__["ReportesService"], _solicitudes_solicitudes_service__WEBPACK_IMPORTED_MODULE_3__["SolicitudesService"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["DatePipe"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], ExamenesSolicitadosComponent);
    return ExamenesSolicitadosComponent;
}());



/***/ }),

/***/ "./src/app/reportes/reportes.module.ts":
/*!*********************************************!*\
  !*** ./src/app/reportes/reportes.module.ts ***!
  \*********************************************/
/*! exports provided: ReportesModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReportesModule", function() { return ReportesModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _examenes_solicitados_examenes_solicitados_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./examenes-solicitados/examenes-solicitados.component */ "./src/app/reportes/examenes-solicitados/examenes-solicitados.component.ts");
/* harmony import */ var _reportes_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./reportes.routing.module */ "./src/app/reportes/reportes.routing.module.ts");
/* harmony import */ var _reportes_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./reportes.service */ "./src/app/reportes/reportes.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ng-select/ng-select */ "./node_modules/@ng-select/ng-select/fesm5/ng-select.js");
/* harmony import */ var _examenes_anual_examenes_anual_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./examenes-anual/examenes-anual.component */ "./src/app/reportes/examenes-anual/examenes-anual.component.ts");
/* harmony import */ var _examenes_mensual_examenes_mensual_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./examenes-mensual/examenes-mensual.component */ "./src/app/reportes/examenes-mensual/examenes-mensual.component.ts");
/* harmony import */ var primeng_table__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! primeng/table */ "./node_modules/primeng/table.js");
/* harmony import */ var primeng_table__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(primeng_table__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! primeng/button */ "./node_modules/primeng/button.js");
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(primeng_button__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var primeng_accordion__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! primeng/accordion */ "./node_modules/primeng/accordion.js");
/* harmony import */ var primeng_accordion__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(primeng_accordion__WEBPACK_IMPORTED_MODULE_11__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};












var ReportesModule = /** @class */ (function () {
    function ReportesModule() {
    }
    ReportesModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                primeng_accordion__WEBPACK_IMPORTED_MODULE_11__["AccordionModule"],
                primeng_button__WEBPACK_IMPORTED_MODULE_10__["ButtonModule"],
                primeng_table__WEBPACK_IMPORTED_MODULE_9__["TableModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _reportes_routing_module__WEBPACK_IMPORTED_MODULE_3__["ReportesRoutingModule"],
                _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_6__["NgSelectModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
                _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_6__["NgSelectModule"],
            ],
            declarations: [_examenes_solicitados_examenes_solicitados_component__WEBPACK_IMPORTED_MODULE_2__["ExamenesSolicitadosComponent"], _examenes_anual_examenes_anual_component__WEBPACK_IMPORTED_MODULE_7__["ExamenesAnualComponent"], _examenes_mensual_examenes_mensual_component__WEBPACK_IMPORTED_MODULE_8__["ExamenesMensualComponent"]],
            providers: [_reportes_service__WEBPACK_IMPORTED_MODULE_4__["ReportesService"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["DatePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["TitleCasePipe"]]
        })
    ], ReportesModule);
    return ReportesModule;
}());



/***/ }),

/***/ "./src/app/reportes/reportes.routing.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/reportes/reportes.routing.module.ts ***!
  \*****************************************************/
/*! exports provided: ReportesRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReportesRoutingModule", function() { return ReportesRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _examenes_solicitados_examenes_solicitados_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./examenes-solicitados/examenes-solicitados.component */ "./src/app/reportes/examenes-solicitados/examenes-solicitados.component.ts");
/* harmony import */ var _examenes_anual_examenes_anual_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./examenes-anual/examenes-anual.component */ "./src/app/reportes/examenes-anual/examenes-anual.component.ts");
/* harmony import */ var _examenes_mensual_examenes_mensual_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./examenes-mensual/examenes-mensual.component */ "./src/app/reportes/examenes-mensual/examenes-mensual.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var routes = [
    {
        path: 'examenes-mensual',
        component: _examenes_mensual_examenes_mensual_component__WEBPACK_IMPORTED_MODULE_4__["ExamenesMensualComponent"]
    },
    {
        path: 'examenes-solicitados',
        component: _examenes_solicitados_examenes_solicitados_component__WEBPACK_IMPORTED_MODULE_2__["ExamenesSolicitadosComponent"]
    },
    {
        path: 'examenes-anual',
        component: _examenes_anual_examenes_anual_component__WEBPACK_IMPORTED_MODULE_3__["ExamenesAnualComponent"]
    },
    {
        path: '',
        redirectTo: 'normal',
        pathMatch: 'full'
    }
];
var ReportesRoutingModule = /** @class */ (function () {
    function ReportesRoutingModule() {
    }
    ReportesRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], ReportesRoutingModule);
    return ReportesRoutingModule;
}());



/***/ }),

/***/ "./src/app/reportes/reportes.service.ts":
/*!**********************************************!*\
  !*** ./src/app/reportes/reportes.service.ts ***!
  \**********************************************/
/*! exports provided: ReportesService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReportesService", function() { return ReportesService; });
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
var ReportesService = /** @class */ (function () {
    function ReportesService(http) {
        this.http = http;
        this.usuario = {};
        this.httpHeaders = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({ 'Content-Type': 'application/json' });
    }
    ReportesService.prototype.getReportesMensuales = function (re) {
        return this.http.post("" + ('' + _shared_variables_global__WEBPACK_IMPORTED_MODULE_2__["server"] + 'api/reportemes'), re, { headers: this.httpHeaders });
    };
    ReportesService.prototype.getInstitucionesConPrecio = function () {
        return this.http.get("" + ('' + _shared_variables_global__WEBPACK_IMPORTED_MODULE_2__["server"] + 'api/instituciones-examenes'), { headers: this.httpHeaders });
    };
    ReportesService.prototype.getReportesAnual = function (re) {
        return this.http.post("" + ('' + _shared_variables_global__WEBPACK_IMPORTED_MODULE_2__["server"] + 'api/reporte-anual'), re, { headers: this.httpHeaders });
    };
    ReportesService.prototype.getReporteExamenesSolicitados = function (cedula, nombre_area, caracter_nombre_examen, fecha_solicitud, fecha_inicio, fecha_fin, estado_solicitud, agrupador, seleccionador) {
        return this.http.get("" + ('' + _shared_variables_global__WEBPACK_IMPORTED_MODULE_2__["server"] + 'api/reporte-examenes-solicitados?cedula=') + cedula + '&nombre_area=' + nombre_area + '&caracter_nombre_examen=' + caracter_nombre_examen + '&fecha_solicitud=' + fecha_solicitud + '&fecha_inicio=' + fecha_inicio + '&fecha_fin=' + fecha_fin + '&estado_solicitud=' + estado_solicitud + '&agrupador=' + agrupador + '&seleccionador=' + seleccionador, { headers: this.httpHeaders });
    };
    ReportesService.prototype.getReportes = function () {
        this.http.get("" + 'http://localhost:8080/jasperserver/rest_v2/reports/reports/area.html');
    };
    ReportesService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], ReportesService);
    return ReportesService;
}());



/***/ })

}]);
//# sourceMappingURL=app-reportes-reportes-module.js.map