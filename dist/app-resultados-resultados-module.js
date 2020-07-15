(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["app-resultados-resultados-module"],{

/***/ "./node_modules/primeng/autocomplete.js":
/*!**********************************************!*\
  !*** ./node_modules/primeng/autocomplete.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* Shorthand */

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__(/*! ./components/autocomplete/autocomplete */ "./node_modules/primeng/components/autocomplete/autocomplete.js"));

/***/ }),

/***/ "./src/app/resultados/listar-analisis-sin-resultados/listar-analisis-sin-resultados.component.css":
/*!********************************************************************************************************!*\
  !*** ./src/app/resultados/listar-analisis-sin-resultados/listar-analisis-sin-resultados.component.css ***!
  \********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/*!\n * Bootstrap-select v1.12.4 (http://silviomoreto.github.io/bootstrap-select)\n *\n * Copyright 2013-2017 bootstrap-select\n * Licensed under MIT (https://github.com/silviomoreto/bootstrap-select/blob/master/LICENSE)\n */\n.color-rojo{\n  background-color: red;\n}\nselect.bs-select-hidden,\nselect.selectpicker {\n  display: none !important;\n}\n.bootstrap-select {\n  width: 220px \\0;\n  /*IE9 and below*/\n}\n.bootstrap-select > .dropdown-toggle {\n  width: 100%;\n  padding-right: 25px;\n  z-index: 1;\n}\n.bootstrap-select > .dropdown-toggle.bs-placeholder,\n.bootstrap-select > .dropdown-toggle.bs-placeholder:hover,\n.bootstrap-select > .dropdown-toggle.bs-placeholder:focus,\n.bootstrap-select > .dropdown-toggle.bs-placeholder:active {\n  color: #999;\n}\n.bootstrap-select > select {\n  position: absolute !important;\n  bottom: 0;\n  left: 50%;\n  display: block !important;\n  width: 0.5px !important;\n  height: 100% !important;\n  padding: 0 !important;\n  opacity: 0 !important;\n  border: none;\n}\n.bootstrap-select > select.mobile-device {\n  top: 0;\n  left: 0;\n  display: block !important;\n  width: 100% !important;\n  z-index: 2;\n}\n.has-error .bootstrap-select .dropdown-toggle,\n.error .bootstrap-select .dropdown-toggle {\n  border-color: #b94a48;\n}\n.bootstrap-select.fit-width {\n  width: auto !important;\n}\n.bootstrap-select:not([class*=\"col-\"]):not([class*=\"form-control\"]):not(.input-group-btn) {\n  width: 220px;\n}\n.bootstrap-select .dropdown-toggle:focus {\n  outline: thin dotted #333333 !important;\n  outline: 5px auto -webkit-focus-ring-color !important;\n  outline-offset: -2px;\n}\n.bootstrap-select.form-control {\n  margin-bottom: 0;\n  padding: 0;\n  border: none;\n}\n.bootstrap-select.form-control:not([class*=\"col-\"]) {\n  width: 100%;\n}\n.bootstrap-select.form-control.input-group-btn {\n  z-index: auto;\n}\n.bootstrap-select.form-control.input-group-btn:not(:first-child):not(:last-child) > .btn {\n  border-radius: 0;\n}\n.bootstrap-select.btn-group:not(.input-group-btn),\n.bootstrap-select.btn-group[class*=\"col-\"] {\n  float: none;\n  display: inline-block;\n  margin-left: 0;\n}\n.bootstrap-select.btn-group.dropdown-menu-right,\n.bootstrap-select.btn-group[class*=\"col-\"].dropdown-menu-right,\n.row .bootstrap-select.btn-group[class*=\"col-\"].dropdown-menu-right {\n  float: right;\n}\n.form-inline .bootstrap-select.btn-group,\n.form-horizontal .bootstrap-select.btn-group,\n.form-group .bootstrap-select.btn-group {\n  margin-bottom: 0;\n}\n.form-group-lg .bootstrap-select.btn-group.form-control,\n.form-group-sm .bootstrap-select.btn-group.form-control {\n  padding: 0;\n}\n.form-group-lg .bootstrap-select.btn-group.form-control .dropdown-toggle,\n.form-group-sm .bootstrap-select.btn-group.form-control .dropdown-toggle {\n  height: 100%;\n  font-size: inherit;\n  line-height: inherit;\n  border-radius: inherit;\n}\n.form-inline .bootstrap-select.btn-group .form-control {\n  width: 100%;\n}\n.bootstrap-select.btn-group.disabled,\n.bootstrap-select.btn-group > .disabled {\n  cursor: not-allowed;\n}\n.bootstrap-select.btn-group.disabled:focus,\n.bootstrap-select.btn-group > .disabled:focus {\n  outline: none !important;\n}\n.bootstrap-select.btn-group.bs-container {\n  position: absolute;\n  height: 0 !important;\n  padding: 0 !important;\n}\n.bootstrap-select.btn-group.bs-container .dropdown-menu {\n  z-index: 1060;\n}\n.bootstrap-select.btn-group .dropdown-toggle .filter-option {\n  display: inline-block;\n  overflow: hidden;\n  width: 100%;\n  text-align: left;\n}\n.bootstrap-select.btn-group .dropdown-toggle .caret {\n  position: absolute;\n  top: 50%;\n  right: 12px;\n  margin-top: -2px;\n  vertical-align: middle;\n}\n.bootstrap-select.btn-group[class*=\"col-\"] .dropdown-toggle {\n  width: 100%;\n}\n.bootstrap-select.btn-group .dropdown-menu {\n  min-width: 100%;\n  box-sizing: border-box;\n}\n.bootstrap-select.btn-group .dropdown-menu.inner {\n  position: static;\n  float: none;\n  border: 0;\n  padding: 0;\n  margin: 0;\n  border-radius: 0;\n  box-shadow: none;\n}\n.bootstrap-select.btn-group .dropdown-menu li {\n  position: relative;\n}\n.bootstrap-select.btn-group .dropdown-menu li.active small {\n  color: #fff;\n}\n.bootstrap-select.btn-group .dropdown-menu li.disabled a {\n  cursor: not-allowed;\n}\n.bootstrap-select.btn-group .dropdown-menu li a {\n  cursor: pointer;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n}\n.bootstrap-select.btn-group .dropdown-menu li a.opt {\n  position: relative;\n  padding-left: 2.25em;\n}\n.bootstrap-select.btn-group .dropdown-menu li a span.check-mark {\n  display: none;\n}\n.bootstrap-select.btn-group .dropdown-menu li a span.text {\n  display: inline-block;\n}\n.bootstrap-select.btn-group .dropdown-menu li small {\n  padding-left: 0.5em;\n}\n.bootstrap-select.btn-group .dropdown-menu .notify {\n  position: absolute;\n  bottom: 5px;\n  width: 96%;\n  margin: 0 2%;\n  min-height: 26px;\n  padding: 3px 5px;\n  background: #f5f5f5;\n  border: 1px solid #e3e3e3;\n  box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.05);\n  pointer-events: none;\n  opacity: 0.9;\n  box-sizing: border-box;\n}\n.bootstrap-select.btn-group .no-results {\n  padding: 3px;\n  background: #f5f5f5;\n  margin: 0 5px;\n  white-space: nowrap;\n}\n.bootstrap-select.btn-group.fit-width .dropdown-toggle .filter-option {\n  position: static;\n}\n.bootstrap-select.btn-group.fit-width .dropdown-toggle .caret {\n  position: static;\n  top: auto;\n  margin-top: -1px;\n}\n.bootstrap-select.btn-group.show-tick .dropdown-menu li.selected a span.check-mark {\n  position: absolute;\n  display: inline-block;\n  right: 15px;\n  margin-top: 5px;\n}\n.bootstrap-select.btn-group.show-tick .dropdown-menu li a span.text {\n  margin-right: 34px;\n}\n.bootstrap-select.show-menu-arrow.open > .dropdown-toggle {\n  z-index: 1061;\n}\n.bootstrap-select.show-menu-arrow .dropdown-toggle:before {\n  content: '';\n  border-left: 7px solid transparent;\n  border-right: 7px solid transparent;\n  border-bottom: 7px solid rgba(204, 204, 204, 0.2);\n  position: absolute;\n  bottom: -4px;\n  left: 9px;\n  display: none;\n}\n.bootstrap-select.show-menu-arrow .dropdown-toggle:after {\n  content: '';\n  border-left: 6px solid transparent;\n  border-right: 6px solid transparent;\n  border-bottom: 6px solid white;\n  position: absolute;\n  bottom: -4px;\n  left: 10px;\n  display: none;\n}\n.bootstrap-select.show-menu-arrow.dropup .dropdown-toggle:before {\n  bottom: auto;\n  top: -3px;\n  border-top: 7px solid rgba(204, 204, 204, 0.2);\n  border-bottom: 0;\n}\n.bootstrap-select.show-menu-arrow.dropup .dropdown-toggle:after {\n  bottom: auto;\n  top: -3px;\n  border-top: 6px solid white;\n  border-bottom: 0;\n}\n.bootstrap-select.show-menu-arrow.pull-right .dropdown-toggle:before {\n  right: 12px;\n  left: auto;\n}\n.bootstrap-select.show-menu-arrow.pull-right .dropdown-toggle:after {\n  right: 13px;\n  left: auto;\n}\n.bootstrap-select.show-menu-arrow.open > .dropdown-toggle:before,\n.bootstrap-select.show-menu-arrow.open > .dropdown-toggle:after {\n  display: block;\n}\n.bs-searchbox,\n.bs-actionsbox,\n.bs-donebutton {\n  padding: 4px 8px;\n}\n.bs-actionsbox {\n  width: 100%;\n  box-sizing: border-box;\n}\n.bs-actionsbox .btn-group button {\n  width: 50%;\n}\n.bs-donebutton {\n  float: left;\n  width: 100%;\n  box-sizing: border-box;\n}\n.bs-donebutton .btn-group button {\n  width: 100%;\n}\n.bs-searchbox + .bs-actionsbox {\n  padding: 0 8px 4px;\n}\n.bs-searchbox .form-control {\n  margin-bottom: 0;\n  width: 100%;\n  float: none;\n}\ninput{\r\n    width:100%\r\n}\n.btn-pequeño{height:1.675rem;min-width:1.675rem;width:1.675rem;padding:0;\r\n    font-size:.9375rem;overflow:hidden;position:relative;line-height:normal}\n.btn-light {\r\n        color: #212529;\r\n        background-color: #f8f9fa;\r\n        border-color: #f8f9fa;\r\n      }"

/***/ }),

/***/ "./src/app/resultados/listar-analisis-sin-resultados/listar-analisis-sin-resultados.component.html":
/*!*********************************************************************************************************!*\
  !*** ./src/app/resultados/listar-analisis-sin-resultados/listar-analisis-sin-resultados.component.html ***!
  \*********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section class=\"content\">\n  <div class=\"block-header\">\n    <div class=\"row\">\n      <div class=\"col-lg-7 col-md-6 col-sm-12\">\n        <h2>Resultados\n          \n        </h2>\n      </div>\n      <div class=\"col-lg-5 col-md-6 col-sm-12\">\n        <ul class=\"breadcrumb float-md-right\">\n          <li class=\"breadcrumb-item\"><a routerLink=\"/dashboard/main\"><i class=\"zmdi zmdi-home\"></i> </a></li>\n          <li class=\"breadcrumb-item\"><a href=\"javascript:void(0);\">resultados</a></li>\n           <li class=\"breadcrumb-item active\">listar-analisis-sin-resultados</li>\n        </ul>\n      </div>\n    </div>\n  </div>\n  <div class=\"container-fluid\">\n    <!-- Basic Examples -->\n    <div class=\"row clearfix\">\n      <div class=\"col-lg-12\">\n        <div class=\"card\">\n          <div class=\"header\">\n            <h2><strong>Ver</strong> Solicitudes Sin Resultados</h2>\n             <ul class=\"header-dropdown\">\n              <li class=\"dropdown\"> <a href=\"javascript:void(0);\" class=\"dropdown-toggle\" data-toggle=\"dropdown\" role=\"button\" aria-haspopup=\"true\" aria-expanded=\"false\"> <i class=\"zmdi zmdi-more\"></i> </a>\n                <ul class=\"dropdown-menu dropdown-menu-right slideUp float-right\">\n                  <li><a href=\"javascript:void(0);\">Action</a></li>\n                  <li><a href=\"javascript:void(0);\">Another action</a></li>\n                  <li><a href=\"javascript:void(0);\">Something else</a></li>\n                </ul>\n              </li>\n              <li class=\"remove\">\n                <a role=\"button\" class=\"boxs-close\"><i class=\"zmdi zmdi-close\"></i></a>\n              </li>\n            </ul>\n          </div>\n          \n          <div class=\"body\">\n       <!---  \n<p-dataTable #dt styleClass=\"table table-hover\" [value]=\"analisisSinResultados\" [paginator]=\"true\" [rows]=\"5\" [pageLinks]=\"2\" [rowsPerPageOptions]=\"[5,10,20]\" >\n          \n\n  <p-column field=\"paciente.persona.nombre\" header=\"Paciente\" [filter]=\"true\" [sortable]=\"true\">\n  </p-column>\n  <p-column field=\"estado\" header=\"Estado\" [filter]=\"true\" [sortable]=\"true\">\n          \n  </p-column>\n\n  <p-column header = \"Analisis\">\n    <ng-template  let-analisisSinResultados=\"rowData\" pTemplate=\"body\">\n      <ng-select  placeholder=\"mostrar analisis\">\n        <ng-option *ngFor=\"let e of analisisSinResultados.examenes_solicitados\" [value]=\"e\"  >{{e.precio_examen.examen.nombre}}</ng-option>\n      \n      </ng-select>\n     </ng-template>\n  \n</p-column>\n          <p-column field=\"fecha\" header=\"Fecha\" [filter]=\"true\" [sortable]=\"true\">\n          \n          </p-column>\n          <p-column header = \"Edit\">\n              <ng-template  let-analisisSinResultados=\"rowData\" pTemplate=\"body\">\n                <a (click)=\"registrar(analisisSinResultados)\" routerLink=\"/resultadoss/registrar\" class=\" waves-effect waves-float waves-green\"><i class=\"zmdi zmdi-edit\"></i></a>\n              </ng-template>\n            \n          </p-column>\n         \n      </p-dataTable>\n    -->\n    <datalist id=\"valores_paciente\">\n      <option *ngFor=\"let p of pacientes\" [value]=\"p.nombres\" ></option>\n    </datalist> \n    <p-table id=\"table\" #dd [value]=\"solicitudes\" [columns]=\"cols\" [paginator]=\"true\" [rows]=\"10\" [pageLinks]=\"2\" [rowsPerPageOptions]=\"[5,10,20]\"  selectionMode=\"multiple\">\n  \n      <ng-template pTemplate=\"caption\">\n          \n        <div class=\"ui-helper-clearfix\" style=\"text-align: left\">\n         \n         <button type=\"button\" pButton icon=\"pi pi-file\" iconPos=\"left\" label=\"PDF\" (click)=\"exportPdf()\" class=\"btn btn-warning\"></button>\n           \n          </div>\n    </ng-template>\n      <ng-template pTemplate=\"header\" let-solicitud=\"rowData\">\n          <tr><th style=\"width:44px\">#</th>\n              <th *ngFor=\"let col of cols\" >\n                  {{col.header}}\n              </th>\n              <th>Fecha</th>\n              <th  >Examenes</th>\n              \n              <th style=\"width:100px\">Acciones</th>\n          </tr>\n          <tr>\n            <th></th>\n              <th  *ngFor=\"let col of cols\" [ngSwitch]=\"col.field\">\n                <ng-container  *ngSwitchCase=\"'nombres_paciente'\">\n                  <input pInputText  [(ngModel)]=\"form.caracter_nombre\" list=\"valores_paciente\" (input)=\"busca_pacientes()\" name=\"caracter_nombre\" type=\"text\"  placeholder=\"\">\n                \n                 </ng-container>\n                \n               \n    \n               \n              </th>\n              <th>   <ng-container >\n                <div class=\"ui-inputgroup\">\n                  <span style=\"width: 20%;\" class=\"ui-inputgroup-addon\"   data-toggle=\"modal\" data-target=\"#addevent\"><i class=\"pi pi-calendar\" style=\"line-height: 1.25;\"></i></span>\n                  <input style=\"width: 80%;\" pInputText  [(ngModel)]=\"form.fech\" (ngModelChange)=\"filtro_completo(formulario)\" name=\"fech\" type=\"date\"   placeholder=\"fecha_inicio\">         \n              </div>\n\n\n              </ng-container></th>\n          \n              <th></th>\n              \n              <th></th>\n          </tr>\n      </ng-template>\n      <ng-template pTemplate=\"body\"   let-i=\"rowIndex\" let-solicitud>\n          <tr>\n            <td>\n                    {{i+1}}\n            \n            </td>\n              <td *ngFor=\"let col of cols; index as i\" [style]=\"{'width':'100%'}\">\n                  {{solicitud[col.field]}}\n              </td>\n             <td>{{solicitud.fecha | date: 'dd-MM-yyyy'}}</td>\n              <td>  \n                  <ng-select  placeholder=\"mostrar examenes\">\n                    <ng-option *ngFor=\"let e of solicitud.examenes_solicitados\" [value]=\"e\"  >{{e.precio_examen.examen.nombre}}</ng-option>\n                  \n                  </ng-select>\n                  \n                 </td>\n                 <td  class=\"text-center\">\n                  <div class=\"row\">\n                          \n                 \n              <div class=\"col-md-1\">\n              </div>\n            \n              <div class=\"col-md-1\">\n                \n                <button  rel=\"tooltip\" data-placement=\"top\" title=\"Registrar\" (click)=\"registrar(solicitud)\" routerLink=\"/resultadoss/registrar\"  class=\"btn btn-warning btn-pequeño  btn-icon-mini btn-round\">\n                  <i class=\"zmdi zmdi-edit col-white\" style=\"color:white; font-size:17px\"></i></button>\n              </div>\n              <div class=\"col-md-1\">\n              </div>\n              <!--   \n              <div class=\"col-md-1\">\n                <button rel=\"tooltip\" data-placement=\"top\" title=\"Ver historial clinico\" (click)=\"verhistorialclinico(paciente)\" routerLink=\"/pacientes/ver-historial-clinico\" class=\"btn btn-secondary btn-pequeño  btn-icon-mini btn-round\"><i class=\"zmdi zmdi-assignment col-white\" style=\"color:white; font-size:17px\"></i></button>\n                \n                </div>\n              -->\n              </div>\n\n\n\n\n                 \n                </td>\n          </tr>\n      </ng-template>\n        \n        \n    </p-table>\n           \n          </div>\n        </div>\n      </div>\n    </div>\n    <!-- #END# Basic Examples\n        <a (click)=\"registrar(solicitud)\" routerLink=\"/resultadoss/registrar\"  -->\n    <!-- Exportable Table -->\n    \n    <!-- #END# Exportable Table -->\n  </div>\n</section>\n\n\n<div class=\"modal fade\" id=\"addevent\" tabindex=\"-1\" role=\"dialog\">\n  <div class=\"modal-dialog\" role=\"document\">\n    <div class=\"modal-content\">\n      <div class=\"modal-header\">\n        <h4 class=\"title\" id=\"defaultModalLabel\" >{{nombreexamen}}</h4>\n      </div>\n      <div class=\"modal-body\">\n           <form  ngNativeValidate  #formulario=\"ngForm\">\n          <div class=\" row clearfix\">\n            \n  <div class=\"col-lg-4\">\n            <label for=\"fecha_inicio\">Desde:</label>\n            </div>\n            \n  <div class=\"col-lg-8\">\n            <input id=\"fecha_inicio\" [(ngModel)]=\"form.fecha_inicio\" name=\"fecha_inicio\" type=\"date\" placeholder=\"fecha_inicio\" required max=\"form.fecha_fin\">\n        \n                  </div>\n\n                  <div class=\"col-lg-4\">\n                      <label for=\"fecha_fin\">Hasta:</label>\n                      </div>\n                      \n            <div class=\"col-lg-8\">\n                      <input id=\"fecha_fin\" [(ngModel)]=\"form.fecha_fin\"  name=\"fecha_fin\" type=\"date\"  placeholder=\"fecha_final\" required>\n                  \n                            </div>\n              </div>\n      <div class=\"modal-footer\">\n        <button type=\"submit\" (click)=\"filtro_completo(formulario)\" id=\"a\" class=\"btn btn-primary btn-round waves-effect\" >Guardar</button>\n        <button type=\"button\" class=\"btn btn-simple btn-round waves-effect\" data-dismiss=\"modal\">Salir</button>\n      </div>\n      </form>\n    </div>\n  </div>\n</div>\n</div>"

/***/ }),

/***/ "./src/app/resultados/listar-analisis-sin-resultados/listar-analisis-sin-resultados.component.ts":
/*!*******************************************************************************************************!*\
  !*** ./src/app/resultados/listar-analisis-sin-resultados/listar-analisis-sin-resultados.component.ts ***!
  \*******************************************************************************************************/
/*! exports provided: ListarAnalisisSinResultadosComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListarAnalisisSinResultadosComponent", function() { return ListarAnalisisSinResultadosComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _resultados_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../resultados.service */ "./src/app/resultados/resultados.service.ts");
/* harmony import */ var _solicitudes_solicitudes_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../solicitudes/solicitudes.service */ "./src/app/solicitudes/solicitudes.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _pacientes_pacientes_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../pacientes/pacientes.service */ "./src/app/pacientes/pacientes.service.ts");
/* harmony import */ var jspdf_autotable__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! jspdf-autotable */ "./node_modules/jspdf-autotable/dist/jspdf.plugin.autotable.js");
/* harmony import */ var jspdf_autotable__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(jspdf_autotable__WEBPACK_IMPORTED_MODULE_6__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var ListarAnalisisSinResultadosComponent = /** @class */ (function () {
    function ListarAnalisisSinResultadosComponent(datePipe, pacientesService, resultadosService, solicitudesService, router) {
        var _this = this;
        this.datePipe = datePipe;
        this.pacientesService = pacientesService;
        this.resultadosService = resultadosService;
        this.solicitudesService = solicitudesService;
        this.router = router;
        this.solicitudSinResultado = null;
        this.pacientes = [];
        this.form = {
            fech: '',
            fecha_inicio: '2019-03-03',
            fecha_fin: this.datePipe.transform(new Date(), "yyyy-MM-dd"),
            caracter_nombre: '',
            cedula: '',
            estado_solicitud: '',
            resultados: 'Sin Registrar'
        };
        this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
        resultadosService.getAnalisisSinResultados().subscribe(function (data) {
            _this.solicitudes = data;
            for (var i = 0; i < _this.solicitudes.length; i++) {
                _this.solicitudes[i].nombres_paciente = _this.solicitudes[i].paciente.persona.nombre + " " + _this.solicitudes[i].paciente.persona.ap + " " + _this.solicitudes[i].paciente.persona.am;
            }
        });
    }
    ListarAnalisisSinResultadosComponent.prototype.ngOnInit = function () {
        this.brands = [
            { label: 'Sin Registrar', value: 'Sin Registrar' }
        ];
        this.cols = [
            { field: "nombres_paciente", header: 'Paciente' },
            { field: 'estado', header: 'Estado' }
        ];
        $(function () {
            $('.js-basic-example').dataTable({
                "searching": false
            });
            // Exportable table
        });
    };
    ListarAnalisisSinResultadosComponent.prototype.registrar = function (solicitud) {
        localStorage.removeItem('solicitudSinResultado');
        localStorage.setItem('solicitudSinResultado', JSON.stringify(solicitud));
        this.router.navigate(['/resultados/registrar']);
    };
    ListarAnalisisSinResultadosComponent.prototype.modificar = function (solicitud) {
        localStorage.removeItem('analisisSinResultadosConResultadosaModificar');
        localStorage.setItem('analisisSinResultadosConResultadosaModificar', JSON.stringify(solicitud));
        this.router.navigate(['/resultados/modificar']);
    };
    ListarAnalisisSinResultadosComponent.prototype.mostrarpdf = function (solicitud) {
        localStorage.removeItem('solicitudaimprimir');
        localStorage.setItem('solicitudaimprimir', JSON.stringify(solicitud));
    };
    ListarAnalisisSinResultadosComponent.prototype.exportPdf = function () {
        /*
        let examenes=""
        let doc = new jsPDF();
      let col = ["#", "Paciente", "Estado","Fecha","Analisis"];
      let rows = [];
      for(let i=0; i<this.analisisSinResultados.length; i++){
        examenes=""
        if(this.analisisSinResultados[i].examenes_solicitados.length>0){
          for(let j=0;j<this.analisisSinResultados[i].examenes_solicitados.length; j++){
            console.log(i+" "+j)
            console.log(this.analisisSinResultados[i].examenes_solicitados.length)
      examenes=examenes+this.analisisSinResultados[i].examenes_solicitados[j].precio_examen.examen.nombre+"\n"
          }
        }
        let temp = [i+1,this.analisisSinResultados[i].nombres_paciente,this.analisisSinResultados[i].estado,this.analisisSinResultados[i].fecha,examenes];
        rows.push(temp);
      }
      doc.autoTable(col, rows);
      doc.save('analisisSinResultados.pdf');
      }
      exportPdf() {
        */
        window.location.href = 'http://localhost:8080/jasperserver/rest_v2/reports/reports/solicitudes_sin_resultados.pdf?am_usuario=' + this.currentUser.personal_laboratorio.persona.am + '&cedula=' + this.form.cedula + '&ap_usuario=' + this.currentUser.personal_laboratorio.persona.ap + '&nombre_usuario=' + this.currentUser.personal_laboratorio.persona.nombre + '&fecha_inicio=' + this.form.fecha_inicio + '&fecha_fin=' + this.form.fecha_fin + '&estado_solicitud=' + this.form.estado_solicitud + '&resultados=' + this.form.resultados + '&j_username=' + 'jasperadmin' + '&j_password=' + 'jasperadmin';
    };
    ListarAnalisisSinResultadosComponent.prototype.busca_pacientes = function () {
        var _this = this;
        console.log(this.form.resultados);
        this.pacientesService.buscarPacientePorCaracterDeNombres(this.form.caracter_nombre, this.form.resultados).subscribe(function (data) {
            _this.pacientes = data;
            for (var i = 0; i < _this.pacientes.length; i++) {
                _this.pacientes[i].nombres = _this.pacientes[i].persona.nombre + " " + _this.pacientes[i].persona.ap + " " + _this.pacientes[i].persona.am;
                // this.pacientes[i].fnac=this.datePipe.transform(this.pacientes[i].fnac,"dd-MM-yyyy")
            }
            console.log(_this.pacientes);
        }); //----------------------------------
        for (var i = 0; i < this.pacientes.length; i++) {
            if (this.pacientes[i].nombres == this.form.caracter_nombre) {
                this.form.cedula = this.pacientes[i].cedula;
            }
            else {
                this.form.cedula = '';
            }
        }
        console.log(this.form.cedula);
        if (this.form.cedula != '' || this.form.caracter_nombre == '') {
            this.solicitudesService.filtrarPaciente(this.form.cedula, this.form.fech, this.form.fecha_inicio, this.form.fecha_fin, this.form.estado_solicitud, this.form.resultados).subscribe(function (data) {
                console.log(data);
                console.log(_this.form.cedula);
                _this.solicitudes = data;
                for (var i = 0; i < _this.solicitudes.length; i++) {
                    _this.solicitudes[i].nombres_paciente = _this.solicitudes[i].paciente.persona.nombre + " " + _this.solicitudes[i].paciente.persona.ap + " " + _this.solicitudes[i].paciente.persona.am;
                }
            });
        }
    };
    ListarAnalisisSinResultadosComponent.prototype.filtro_completo = function (formu) {
        var _this = this;
        //console.log(this.form.fech)
        if (this.form.resultados == null) {
            this.form.resultados = "";
        }
        if (this.form.estado_solicitud == null) {
            this.form.estado_solicitud = "";
        }
        console.log(this.form.estado_solicitud);
        validatefechas();
        if (formu.valid && ($('#fecha_inicio').val() <= $('#fecha_fin').val())) {
            $('#addevent').removeClass('show');
            this.form.cedula = '';
            console.log(this.form.fech);
            for (var i = 0; i < this.pacientes.length; i++) {
                if (this.pacientes[i].nombres == this.form.caracter_nombre) {
                    this.form.cedula = this.pacientes[i].cedula;
                }
            }
            this.solicitudesService.filtrarPaciente(this.form.cedula, this.form.fech, this.form.fecha_inicio, this.form.fecha_fin, this.form.estado_solicitud, this.form.resultados).subscribe(function (data) {
                console.log(data);
                _this.solicitudes = data;
                for (var i = 0; i < _this.solicitudes.length; i++) {
                    _this.solicitudes[i].nombres_paciente = _this.solicitudes[i].paciente.persona.nombre + " " + _this.solicitudes[i].paciente.persona.ap + " " + _this.solicitudes[i].paciente.persona.am;
                }
            });
        }
    };
    ListarAnalisisSinResultadosComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-listar-analisis-sin-resultados',
            template: __webpack_require__(/*! ./listar-analisis-sin-resultados.component.html */ "./src/app/resultados/listar-analisis-sin-resultados/listar-analisis-sin-resultados.component.html"),
            styles: [__webpack_require__(/*! ./listar-analisis-sin-resultados.component.css */ "./src/app/resultados/listar-analisis-sin-resultados/listar-analisis-sin-resultados.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_common__WEBPACK_IMPORTED_MODULE_4__["DatePipe"], _pacientes_pacientes_service__WEBPACK_IMPORTED_MODULE_5__["PacientesService"], _resultados_service__WEBPACK_IMPORTED_MODULE_1__["ResultadosService"], _solicitudes_solicitudes_service__WEBPACK_IMPORTED_MODULE_2__["SolicitudesService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], ListarAnalisisSinResultadosComponent);
    return ListarAnalisisSinResultadosComponent;
}());



/***/ }),

/***/ "./src/app/resultados/modificar/modificar.component.css":
/*!**************************************************************!*\
  !*** ./src/app/resultados/modificar/modificar.component.css ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/resultados/modificar/modificar.component.html":
/*!***************************************************************!*\
  !*** ./src/app/resultados/modificar/modificar.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section class=\"content\">\n  <div class=\"block-header\">\n    <div class=\"row\">\n      <div class=\"col-lg-7 col-md-6 col-sm-12\">\n        <h2>Modificar Resultados\n           \n        </h2>\n       \n\n      </div>\n      <div class=\"col-lg-5 col-md-6 col-sm-12\">\n        <ul class=\"breadcrumb float-md-right\">\n          <li class=\"breadcrumb-item\"><a routerLink=\"/dashboard/main\"><i class=\"zmdi zmdi-home\"></i> </a></li>\n          <li class=\"breadcrumb-item\"><a href=\"javascript:void(0);\">resultados</a></li>\n          <li class=\"breadcrumb-item active\">modificar</li>\n        </ul>\n      </div>\n    </div>\n  </div>\n  <div class=\"container-fluid\">\n \n    <!-- Horizontal Layout -->\n    <div class=\"row clearfix\">\n      <div class=\"col-lg-12 col-md-12 col-sm-12\">\n        <div class=\"card\">\n          <div class=\"header\">\n            <ul class=\"header-dropdown\">\n              <li class=\"dropdown\"> <a href=\"javascript:void(0);\" class=\"dropdown-toggle\" data-toggle=\"dropdown\" role=\"button\" aria-haspopup=\"true\" aria-expanded=\"false\"> <i class=\"zmdi zmdi-more\"></i> </a>\n                <ul class=\"dropdown-menu dropdown-menu-right\">\n                  <li><a href=\"javascript:void(0);\">Action</a></li>\n                  <li><a href=\"javascript:void(0);\">Another action</a></li>\n                  <li><a href=\"javascript:void(0);\">Something else</a></li>\n                </ul>\n              </li>\n              <li class=\"remove\">\n                <a role=\"button\" class=\"boxs-close\"><i class=\"zmdi zmdi-close\"></i></a>\n              </li>\n            </ul>\n          </div>\n          <div class=\"body\">\n           \n            <form  class=\"needs-validation\" ngNativeValidate  #form=\"ngForm\">\n    \n<div class=\"row clearfix\">\n  <div class=\"col-lg-2 col-md-2 col-sm-2 form-control-label\">\n    <label for=\"login\">Examenes</label>\n  </div>\n    <div class=\"col-lg-4 col-md-4 col-sm-4\">\n   \n\n        <ng-select  class=\"\"    placeholder=\"Selecciona \"  [(ngModel)]=\"indice\" (ngModelChange)=\"listarsubexamenes()\"  name=\"cod_examen\"  >\n  <ng-container *ngFor=\"let s of solicitudSinResultado.examenes_solicitados; index as in\" >\n    <ng-container >\n      <ng-option id=\"cod_examen\" [value]=\"in\">{{s.precio_examen.examen.nombre}}   \n      </ng-option>\n    </ng-container>\n  </ng-container>\n      \n         </ng-select>\n         \n\n\n        <br>\n<div></div>\n      \n  </div>\n</div>\n\n<div class=\"body\">\n    <div class=\"table-responsive\">\n<table class=\"table table-bordered table-striped table-hover js-basic-example dataTable\" >\n                      <thead>\n                        <tr>\n                            <th>Examen</th>\n                            \n                            <th>RESULTADO</th>\n                            <th>UNIDADES</th>\n                            <th>VALOR DE REFERENCIA</th>\n                          \n                        </tr>\n                      </thead>\n                    \n                      <tbody>\n\n                          <ng-container *ngIf=\"solicitudSinResultado.examenes_solicitados[indice].precio_examen.examen.num_subexamenes == 0\">    \n                              <tr>                 \n                                <td >{{solicitudSinResultado.examenes_solicitados[indice].precio_examen.examen.nombre}} </td>\n                                <td>                   \n                                    <div class=\"row clearfix\">                \n                                        <div class=\"col-lg-10 col-md-10 col-sm-8\">\n                                          <div class=\"form-group\">\n                                             <!--\n                                                <input type=\"text\"  list=\"valores_examen\" [(ngModel)]=\"solicitudSinResultado.examenes_solicitados[indice].resultados_examen.valores[0]\" name=\"resultado\" [ngClass]=\"borde\" class=\"form-control\" (ngModelChange)=\"kambio_valor(solicitudSinResultado.examenes_solicitados[indice].precio_examen.examen.cod_examen, solicitudSinResultado.examenes_solicitados[indice].resultados_examen.valores[0].valor)\">\n  <datalist id=\"valores_examen\">\n        <option *ngFor=\"let c of examenesfiltradosporcaracter\" [value]=\"c\" >{{c.valor}}</option>\n      </dat                                        <p-autoComplete (ngModelChange)=\"k(s.cod_examen, i)\" [(ngModel)]=\"form.resultados[i]\" name=\"resultados[i]\" class=\"form-control\" [suggestions]=\"filteredCountriesSingle\" (completeMethod)=\"buscaValorExamen($event, s.cod_examen, i)\" field=\"valor\" [size]=\"30\" placeholder=\"Countries\" [minLength]=\"1\"></p-autoComplete>-->\n      <input type=\"text\"  list=\"valores_examen\" [(ngModel)]=\"solicitudSinResultado.examenes_solicitados[indice].resultados_examen.valores[0].valor\" name=\"resultado\" [ngClass]=\"borde\" class=\"form-control\" (ngModelChange)=\"kambio_valor(solicitudSinResultado.examenes_solicitados[indice].precio_examen.examen.cod_examen, solicitudSinResultado.examenes_solicitados[indice].resultados_examen.valores[0].valor)\" required>\n      <datalist id=\"valores_examen\">\n        <option *ngFor=\"let c of examenesfiltradosporcaracter\" [value]=\"c.valor\" ></option>\n      </datalist>                \n                                          </div>\n                                        </div>\n                                      </div>\n                                </td>\n                                  <td class=\"text-center\">{{solicitudSinResultado.examenes_solicitados[indice].precio_examen.examen.unidades}}\n                                   </td>\n                             <td class=\"text-center\">   \n                               \n                              <a  (click)=\"registrar(s)\" data-toggle=\"modal\" data-target=\"#addevent\"  class=\" waves-effect waves-float waves-green\"><i class=\"zmdi zmdi-edit\"></i></a> \n                                   <span *ngFor=\"let v of solicitudSinResultado.examenes_solicitados[indice].precio_examen.examen.valores_referencia\">\n                                  {{v.tipo_persona}} {{v.valor_inicial}}-{{v.valor_final}} .\n                                </span>\n                                </td>\n      \n                                    </tr>\n                              </ng-container>\n       <ng-container *ngIf=\"solicitudSinResultado.examenes_solicitados[indice].precio_examen.examen.num_subexamenes !=0\">                    \n   <ng-container *ngFor=\"let s of solicitudSinResultado.examenes_solicitados[indice].precio_examen.examen.subexamenes; let i=index\">\n                            \n                          <ng-container *ngIf=\"s.num_subexamenes == 0\">    \n                        <tr>                 \n                          <td >{{s.nombre}}</td>\n                          <td>                   \n                              <div class=\"row clearfix\">                \n                                 <div class=\"col-lg-10 col-md-10 col-sm-8\">\n                                    <div class=\"form-group\">\n                                       <!-- <p-autoComplete (ngModelChange)=\"k(s.cod_examen, i)\" [(ngModel)]=\"form.resultados[i]\" name=\"resultados[i]\" class=\"form-control\" [suggestions]=\"filteredCountriesSingle\" (completeMethod)=\"buscaValorExamen($event, s.cod_examen, i)\" field=\"valor\" [size]=\"30\" placeholder=\"Countries\" [minLength]=\"1\"></p-autoComplete>-->\n<input *ngIf=\"s.nombre !='Otros'\" type=\"text\"  list=\"valores_examen\" [(ngModel)]=\"solicitudSinResultado.examenes_solicitados[indice].resultados_examen.resultados_examenes[i].valores[0].valor\" name=\"solicitudSinResultado.examenes_solicitados[indice].resultados_examen.resultados_examenes[i].cod_examen\"  class=\"form-control\" (ngModelChange)=\"kambio_valores(s.cod_examen, solicitudSinResultado.examenes_solicitados[indice].resultados_examen.resultados_examenes[i].valores[0].valor,i)\" required>\n\n<input *ngIf=\"s.nombre =='Otros'\" type=\"text\"  list=\"valores_examen\" [(ngModel)]=\"solicitudSinResultado.examenes_solicitados[indice].resultados_examen.resultados_examenes[i].valores[0].valor\" name=\"solicitudSinResultado.examenes_solicitados[indice].resultados_examen.resultados_examenes[i].cod_examen\"  class=\"form-control\" (ngModelChange)=\"kambio_valores(s.cod_examen, solicitudSinResultado.examenes_solicitados[indice].resultados_examen.resultados_examenes[i].valores[0].valor,i)\" >\n\n<datalist id=\"valores_examen\">\n  <option *ngFor=\"let c of examenesfiltradosporcaracter\" [value]=\"c.valor\" ></option>\n</datalist>                \n                                    </div>\n                                  </div>\n                                </div>\n                          </td>\n                            <td class=\"text-center\">{{s.unidades}}\n                             </td>\n                             \n                       <td class=\"text-center\">   \n                         \n                        <a  (click)=\"registrar(s)\" data-toggle=\"modal\" data-target=\"#addevent\"  class=\" waves-effect waves-float waves-green\"><i class=\"zmdi zmdi-edit\"></i></a> \n                             <span *ngFor=\"let v of s.valores_referencia\">\n                            {{v.tipo_persona}} {{v.valor_inicial}}-{{v.valor_final}} .\n                          </span>\n                          </td>\n\n                              </tr>\n                        </ng-container>\n         <ng-container  *ngIf=\"s.num_subexamenes != 0\">\n           <tr>\n             <td><strong>{{s.nombre}}  </strong></td>\n             <td>\n              <input style=\"display:none\" type=\"text\"  list=\"valores_examen\" [ngClass]=\"borde\" class=\"form-control\" (ngModelChange)=\"kambio_valor(s.cod_examen, i)\">\n            \n             </td>\n             <td></td>\n             <td></td>\n           </tr>\n                             <ng-container *ngFor=\"let s of s.subexamenes; index as in\">\n                                <tr>                 \n                                    <td >{{s.nombre}} </td>\n                                    <td>                   \n                                        <div class=\"row clearfix\">                \n                                            <div class=\"col-lg-10 col-md-10 col-sm-8\">\n                                              <div class=\"form-group\">\n                                                 <!-- <p-autoComplete (ngModelChange)=\"k(s.cod_examen, i)\" [(ngModel)]=\"form.resultados[i]\" name=\"resultados[i]\" class=\"form-control\" [suggestions]=\"filteredCountriesSingle\" (completeMethod)=\"buscaValorExamen($event, s.cod_examen, i)\" field=\"valor\" [size]=\"30\" placeholder=\"Countries\" [minLength]=\"1\"></p-autoComplete>-->\n          <input  type=\"text\"  list=\"valores_examen\" [(ngModel)]=\"solicitudSinResultado.examenes_solicitados[indice].resultados_examen.resultados_examenes[i].resultados_examenes[in].valores[0].valor\" name=\"solicitudSinResultado.examenes_solicitados[indice].resultados_examen.resultados_examenes[i].resultados_examenes[in]\" [attr.id]=\"indice+''+i+''+ in\" [ngClass]=\"borde\" class=\"form-control\" (ngModelChange)=\"kambio_valor(s.cod_examen, solicitudSinResultado.examenes_solicitados[indice].resultados_examen.resultados_examenes[i].resultados_examenes[in].valores[0].valor)\" required>\n     \n          <datalist id=\"valores_examen\">\n            <option *ngFor=\"let c of examenesfiltradosporcaracter\" [value]=\"c.valor\" ></option>\n          </datalist>                \n                                              </div>\n                                            </div>\n                                          </div>\n                                    </td>\n                                      <td class=\"text-center\">{{s.unidades}}\n                                       </td>\n                                 <td class=\"text-center\">   \n                                   \n                                  <a  (click)=\"registrar(s)\" data-toggle=\"modal\" data-target=\"#addevent\"  class=\" waves-effect waves-float waves-green\"><i class=\"zmdi zmdi-edit\"></i></a> \n                                       <span *ngFor=\"let v of s.valores_referencia\">\n                                      {{v.tipo_persona}} {{v.valor_inicial}}-{{v.valor_final}} .\n                                    </span>\n                                    </td>\n          \n                                        </tr>\n                             </ng-container>\n  \n                    \n         </ng-container>\n  </ng-container>\n</ng-container>  \n                    </tbody>\n                    </table>\n\n\n\n\n\n\n                  \n                </div>\n              </div>\n              \n\n              \n\n\n\n\n\n            \n\n\n    \n      <div style=\"margin:20px\" class=\"row\">    \n<div class=\"row clearfix col-md-3\">\n  <div class=\"col-sm-8 offset-sm-2\">\n    \n  </div>\n  <div class=\"action\">\n      <button type=\"button\"  id=\"guarda\" (click)=\"salir()\"  class=\"btn btn-raised btn-secondary btn-round waves-effect\"   >Salir</button>\n \n    <button type=\"submit\"  id=\"guardas\" (click)=\"guardarresultados(form)\" class=\"btn btn-raised btn-primary btn-round waves-effect\"   >Guardar</button>\n  \n  </div>\n</div>\n\n</div>\n\n\n</form>\n            \n          </div>\n        </div>\n      </div>\n    </div>\n \n  </div>\n</section>\n  <!-- Horizontal Layout -\n  <div class=\"doNotPrint\">\n    Header is here.\n  </div>\n  \n  <div>\n    all my beautiful print-related material is here.\n  </div>\n  \n  <div class=\"doNotPrint\">\n    my footer is here.\n    <button (click)=\"onPrint()\">Print</button>\n  </div>\n  -->"

/***/ }),

/***/ "./src/app/resultados/modificar/modificar.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/resultados/modificar/modificar.component.ts ***!
  \*************************************************************/
/*! exports provided: ModificarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModificarComponent", function() { return ModificarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _resultados_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../resultados.service */ "./src/app/resultados/resultados.service.ts");
/* harmony import */ var _models__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../models */ "./src/app/models/index.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ModificarComponent = /** @class */ (function () {
    function ModificarComponent(resultadosService, router) {
        this.resultadosService = resultadosService;
        this.router = router;
        this.examenesfiltradosporcaracter = [];
        this.indice = 0;
        this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
        this.array = [];
        this.array[0] = '';
        this.indices = 0;
        this.resultado = new _models__WEBPACK_IMPORTED_MODULE_2__["Resultado"]();
        this.jeison = {};
        this.caden = "";
        this.result = [];
        this.qtd = ['a', 'b', 'c', 'd'];
        this.a = '';
        this.coment = '';
        this.contador = 0;
        console.log(new Date());
        this.solicitudSinResultado = JSON.parse(localStorage.getItem('solicitudesConResultadosaModificar'));
        this.resultadosDeExam = this.solicitudSinResultado.resultados_examenes;
        this.solicitudSinResultado.resultados_examenes = [];
        console.log(this.solicitudSinResultado);
        // this.form.examenes=this.solicitudSinResultado.examenes;
        this.cod_examen = "selecciona";
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
    ModificarComponent.prototype.ngOnInit = function () {
        $(function () {
            'use strict';
            window.addEventListener('load', function () {
                // Fetch all the forms we want to apply custom Bootstrap validation styles to
                var forms = document.getElementsByClassName('needs-validation');
                // Loop over them and prevent submission
                var validation = Array.prototype.filter.call(forms, function (form) {
                    form.addEventListener('submit', function (event) {
                        if (form.checkValidity() === false) {
                            event.preventDefault();
                            event.stopPropagation();
                        }
                        form.classList.add('was-validated');
                    }, false);
                });
            }, false);
        });
    };
    ModificarComponent.prototype.listarsubexamenes = function () {
        this.subexamenes = [];
        //cambiando tamaño de oloos subexamenes
        this.solicitudSinResultado.examenes_solicitados[this.indice].resultados_examen.cod_examen = this.solicitudSinResultado.examenes_solicitados[this.indice].precio_examen.cod_examen;
        this.solicitudSinResultado.examenes_solicitados[this.indice].resultados_examen.cod_sol_exam = this.solicitudSinResultado.examenes_solicitados[this.indice].cod_sol_exam;
        if (this.solicitudSinResultado.examenes_solicitados[this.indice].precio_examen.examen.subexamenes.length == 0) {
            this.subexamenes[0] = this.solicitudSinResultado.examenes_solicitados[this.indice].precio_examen.examen;
        }
        else {
            // this.subexamenes=examensito.subexamenes;
            this.subexamenes = this.solicitudSinResultado.examenes_solicitados[this.indice].precio_examen.examen.subexamenes;
        }
    };
    ModificarComponent.prototype.guardarresultados = function (form) {
        var _this = this;
        this.solicitudSinResultado.examenes_solicitados[this.indice].cedula_usuario = this.currentUser.cedula;
        console.log(this.solicitudSinResultado.examenes_solicitados[this.indice]);
        if (form.valid && (this.solicitudSinResultado.examenes_solicitados[this.indice].estado == 'Registrado' || this.solicitudSinResultado.examenes_solicitados[this.indice].estado == 'Actualizado')) {
            this.resultadosService.modificarResultados(this.solicitudSinResultado.examenes_solicitados[this.indice]).subscribe(function (solicitud) {
                alert("resultados actualizados");
                _this.router.navigate(['/resultados/ver']);
                console.log(solicitud);
                _this.solicitudSinResultado = solicitud;
                // this.listarsubexamenes();
                _this.indice = 0;
                // this.instanciar_resultados()
                _this.listarsubexamenes();
            });
        }
    };
    ModificarComponent.prototype.kambio_valor = function (cod_examen, caracter) {
        var _this = this;
        console.log(cod_examen + " " + caracter);
        this.resultadosService.obtener_valores__por_defecto_examnes(cod_examen, caracter).subscribe(function (resultados_defecto) {
            _this.examenesfiltradosporcaracter = resultados_defecto;
            if (resultados_defecto.length > 0) {
                _this.solicitudSinResultado.examenes_solicitados[_this.indice].resultados_examen.valores[0].cod = resultados_defecto[0].cod;
                console.log(_this.solicitudSinResultado.examenes_solicitados[_this.indice].resultados_examen.valores[0].cod);
                console.log(resultados_defecto[0].cod);
                // this.form.resultados[i]=this.filteredCountriesSingle[i].valor
            }
            else {
                _this.solicitudSinResultado.examenes_solicitados[_this.indice].resultados_examen.valores[0].cod = 0;
            }
        }, function (error) {
            console.log('hola');
        });
    };
    ModificarComponent.prototype.kambio_valores = function (cod_examen, caracter, i) {
        var _this = this;
        console.log(cod_examen + " " + caracter + " " + i);
        this.resultadosService.obtener_valores__por_defecto_examnes(cod_examen, caracter).subscribe(function (resultados_defecto) {
            _this.examenesfiltradosporcaracter = resultados_defecto;
            if (resultados_defecto.length > 0) {
                console.log(resultados_defecto);
                //this.solicitudSinResultado.examenes_solicitados[this.indice].resultados_examen.valores[0].cod=resultados_defecto[0].cod
                _this.solicitudSinResultado.examenes_solicitados[_this.indice].resultados_examen.resultados_examenes[i].valores[0].cod = resultados_defecto[0].cod;
                console.log(resultados_defecto[0].cod);
            }
            else {
                _this.solicitudSinResultado.examenes_solicitados[_this.indice].resultados_examen.resultados_examenes[i].valores[0].cod = 0;
            }
            // this.form.resultados[i]=this.filteredCountriesSingle[i].valor
        });
    };
    ModificarComponent.prototype.salir = function () {
        this.router.navigate(['/resultados/ver']);
    };
    ModificarComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-modificar',
            template: __webpack_require__(/*! ./modificar.component.html */ "./src/app/resultados/modificar/modificar.component.html"),
            styles: [__webpack_require__(/*! ./modificar.component.css */ "./src/app/resultados/modificar/modificar.component.css")]
        }),
        __metadata("design:paramtypes", [_resultados_service__WEBPACK_IMPORTED_MODULE_1__["ResultadosService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], ModificarComponent);
    return ModificarComponent;
}());



/***/ }),

/***/ "./src/app/resultados/registrar/registrar.component.css":
/*!**************************************************************!*\
  !*** ./src/app/resultados/registrar/registrar.component.css ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@media print{\r\n    .doNotPrint{display:none !important;}\r\n  }\r\n  .ng-autocomplete {\r\n    width:100%;\r\n    max-width: 600px;\r\n    display: table;\r\n    margin: 0 auto;\r\n  }\r\n  .rojo{\r\n  background-color:red\r\n}\r\n  .btn-pequeño{height:1.675rem;min-width:1.675rem;width:1.675rem;padding:0;\r\n  font-size:.9375rem;overflow:hidden;position:relative;line-height:normal}\r\n  .btn-light {\r\n      color: #212529;\r\n      background-color: #f8f9fa;\r\n      border-color: #f8f9fa;\r\n    }"

/***/ }),

/***/ "./src/app/resultados/registrar/registrar.component.html":
/*!***************************************************************!*\
  !*** ./src/app/resultados/registrar/registrar.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section class=\"content\">\n  <div class=\"block-header\">\n    <div class=\"row\">\n      <div class=\"col-lg-7 col-md-6 col-sm-12\">\n        <h2>Registrar Resultados\n           \n        </h2>\n      </div>\n      <div class=\"col-lg-5 col-md-6 col-sm-12\">\n        <ul class=\"breadcrumb float-md-right\">\n          <li class=\"breadcrumb-item\"><a routerLink=\"/dashboard/main\"><i class=\"zmdi zmdi-home\"></i> </a></li>\n          <li class=\"breadcrumb-item\"><a href=\"javascript:void(0);\">resultados</a></li>\n          <li class=\"breadcrumb-item active\">registrar</li>\n        </ul>\n      </div>\n    </div>\n  </div>\n  <div class=\"container-fluid\">\n \n    <!-- Horizontal Layout -->\n    <div class=\"row clearfix\">\n      <div class=\"col-lg-12 col-md-12 col-sm-12\">\n        <div class=\"card\">\n          <div class=\"header\">\n            <ul class=\"header-dropdown\">\n              <li class=\"dropdown\"> <a href=\"javascript:void(0);\" class=\"dropdown-toggle\" data-toggle=\"dropdown\" role=\"button\" aria-haspopup=\"true\" aria-expanded=\"false\"> <i class=\"zmdi zmdi-more\"></i> </a>\n                <ul class=\"dropdown-menu dropdown-menu-right\">\n                  <li><a href=\"javascript:void(0);\">Action</a></li>\n                  <li><a href=\"javascript:void(0);\">Another action</a></li>\n                  <li><a href=\"javascript:void(0);\">Something else</a></li>\n                </ul>\n              </li>\n              <li class=\"remove\">\n                <a role=\"button\" class=\"boxs-close\"><i class=\"zmdi zmdi-close\"></i></a>\n              </li>\n            </ul>\n          </div>\n          <div class=\"body\">\n            <form  class=\"needs-validation\" ngNativeValidate  #form=\"ngForm\">\n    \n<div class=\"row clearfix\">\n  <div class=\"col-lg-2 col-md-2 col-sm-2 form-control-label\">\n    <label for=\"login\">Examenes</label>\n  </div>\n    <div class=\"col-lg-4 col-md-4 col-sm-4\">\n   \n\n        <ng-select  class=\"\"    placeholder=\"Selecciona un examen\"  [(ngModel)]=\"indice\" (ngModelChange)=\"listarsubexamenes()\"  name=\"cod_examen\"  >\n  <ng-container *ngFor=\"let s of solicitudSinResultado.examenes_solicitados; index as in\" >\n    <ng-container *ngIf=\"s.estado=='Sin Registrar'\">\n      <ng-option id=\"cod_examen\" [value]=\"in\">{{s.precio_examen.examen.nombre}}   \n      </ng-option>\n    </ng-container>\n  </ng-container>\n      \n         </ng-select>\n         \n\n\n        <br>\n<div></div>\n      \n  </div>\n</div>\n\n<div class=\"body\">\n    <div class=\"table-responsive\">\n<table class=\"table table-bordered table-striped table-hover js-basic-example dataTable\" >\n                      <thead>\n                        <tr>\n                            <th>Examen</th>\n                            \n                            <th>RESULTADO</th>\n                            <th>UNIDADES</th>\n                            <th>VALOR DE REFERENCIA</th>\n                          \n                        </tr>\n                      </thead>\n                    \n                      <tbody>\n\n                          <ng-container *ngIf=\"solicitudSinResultado.examenes_solicitados[indice].precio_examen.examen.num_subexamenes == 0\">    \n                              <tr>                 \n                                <td >{{solicitudSinResultado.examenes_solicitados[indice].precio_examen.examen.nombre}} </td>\n                                <td>                   \n                                    <div class=\"row clearfix\">                \n                                        <div class=\"col-lg-10 col-md-10 col-sm-8\">\n                                          <div class=\"form-group\">\n                                             <!--\n                                                <input type=\"text\"  list=\"valores_examen\" [(ngModel)]=\"solicitudSinResultado.examenes_solicitados[indice].resultados_examen.valores[0]\" name=\"resultado\" [ngClass]=\"borde\" class=\"form-control\" (ngModelChange)=\"kambio_valor(solicitudSinResultado.examenes_solicitados[indice].precio_examen.examen.cod_examen, solicitudSinResultado.examenes_solicitados[indice].resultados_examen.valores[0].valor)\">\n  \n     \n      <datalist id=\"valores_examen\">\n        <option *ngFor=\"let c of examenesfiltradosporcaracter\" [value]=\"c\" >{{c.valor}}</option>\n      </datalist>\n                                                <p-autoComplete (ngModelChange)=\"k(s.cod_examen, i)\" [(ngModel)]=\"form.resultados[i]\" name=\"resultados[i]\" class=\"form-control\" [suggestions]=\"filteredCountriesSingle\" (completeMethod)=\"buscaValorExamen($event, s.cod_examen, i)\" field=\"valor\" [size]=\"30\" placeholder=\"Countries\" [minLength]=\"1\"></p-autoComplete>-->\n      <input type=\"text\"  list=\"valores_examen\" [(ngModel)]=\"solicitudSinResultado.examenes_solicitados[indice].resultados_examen.valores[0].valor\" name=\"resultado\" [ngClass]=\"borde\" class=\"form-control\" (ngModelChange)=\"kambio_valor(solicitudSinResultado.examenes_solicitados[indice].precio_examen.examen.cod_examen, solicitudSinResultado.examenes_solicitados[indice].resultados_examen.valores[0].valor)\" required>\n  \n      <datalist id=\"valores_examen\">\n        <option *ngFor=\"let c of examenesfiltradosporcaracter\" [value]=\"c.valor\" ></option>\n      </datalist>                \n                                          </div>\n                                        </div>\n                                      </div>\n                                </td>\n                                  <td class=\"text-center\">{{solicitudSinResultado.examenes_solicitados[indice].precio_examen.examen.unidades}}\n                                   </td>\n                             <td class=\"text-center\">   \n                               \n                              <a *ngIf=\"solicitudSinResultado.examenes_solicitados[indice].precio_examen.examen.valores_referencia.length >0\" (click)=\"registrar(solicitudSinResultado.examenes_solicitados[indice].precio_examen.examen)\" data-toggle=\"modal\" data-target=\"#addevent\"  class=\" waves-effect waves-float waves-green\"><i class=\"zmdi zmdi-edit\"></i></a> \n                                   <span *ngFor=\"let v of solicitudSinResultado.examenes_solicitados[indice].precio_examen.examen.valores_referencia\">\n                                  {{v.tipo_persona}} {{v.valor_inicial}}-{{v.valor_final}} .\n                                </span>\n                                </td>\n      \n                                    </tr>\n                              </ng-container>\n       <ng-container *ngIf=\"solicitudSinResultado.examenes_solicitados[indice].precio_examen.examen.num_subexamenes !=0\">                    \n   <ng-container *ngFor=\"let s of subexamenes; index as i\">\n                            \n                          <ng-container *ngIf=\"s.num_subexamenes == 0\">    \n                        <tr>                 \n                          <td >{{s.nombre}}</td>\n                          <td>                   \n                              <div class=\"row clearfix\">                \n                                 <div class=\"col-lg-10 col-md-10 col-sm-8\">\n                                    <div class=\"form-group\">\n                                       <!-- <p-autoComplete (ngModelChange)=\"k(s.cod_examen, i)\" [(ngModel)]=\"form.resultados[i]\" name=\"resultados[i]\" class=\"form-control\" [suggestions]=\"filteredCountriesSingle\" (completeMethod)=\"buscaValorExamen($event, s.cod_examen, i)\" field=\"valor\" [size]=\"30\" placeholder=\"Countries\" [minLength]=\"1\"></p-autoComplete>-->\n<input *ngIf=\"s.nombre !='Otros'\"  type=\"text\"  list=\"valores_examen\" [(ngModel)]=\"solicitudSinResultado.examenes_solicitados[indice].resultados_examen.resultados_examenes[i].valores[0].valor\" name=\"s.nombre\" [ngClass]=\"borde\" class=\"form-control\" (ngModelChange)=\"kambio_valores(s.cod_examen, solicitudSinResultado.examenes_solicitados[indice].resultados_examen.resultados_examenes[i].valores[0].valor,i)\" required>\n\n<input *ngIf=\"s.nombre =='Otros'\"  type=\"text\"  list=\"valores_examen\" [(ngModel)]=\"solicitudSinResultado.examenes_solicitados[indice].resultados_examen.resultados_examenes[i].valores[0].valor\" name=\"s.nombre\" [ngClass]=\"borde\" class=\"form-control\" (ngModelChange)=\"kambio_valores(s.cod_examen, solicitudSinResultado.examenes_solicitados[indice].resultados_examen.resultados_examenes[i].valores[0].valor,i)\" > \n\n<datalist id=\"valores_examen\">\n  <option *ngFor=\"let c of examenesfiltradosporcaracter\" [value]=\"c.valor\" ></option>\n</datalist>                \n                                    </div>\n                                  </div>\n                                </div>\n                          </td>\n                            <td class=\"text-center\">{{s.unidades}}\n                             </td>\n                       <td class=\"text-center\">   \n                         \n                        <a  *ngIf=\"s.valores_referencia.length>0\" (click)=\"registrar(s)\" data-toggle=\"modal\" data-target=\"#addevent\"  class=\" waves-effect waves-float waves-green\"><i class=\"zmdi zmdi-edit\"></i></a> \n                             <span *ngFor=\"let v of s.valores_referencia\">\n                            {{v.tipo_persona}} {{v.valor_inicial}}-{{v.valor_final}} .\n                          </span>\n                          </td>\n\n                              </tr>\n                        </ng-container>\n         <ng-container  *ngIf=\"s.num_subexamenes != 0\">\n           <tr>\n             <td><strong>{{s.nombre}}  </strong></td>\n             <td>\n              <input *ngIf=\"s.nombre !='Otros'\" style=\"display:none\" type=\"text\"  list=\"valores_examen\" [(ngModel)]=\"array[i]\" name=\"s.nombre\" [ngClass]=\"borde\" class=\"form-control\" (ngModelChange)=\"kambio_valor(s.cod_examen, i)\">\n            \n             </td>\n             <td></td>\n             <td></td>\n           </tr>\n                             <ng-container *ngFor=\"let s of s.subexamenes; index as in\">\n                                <tr>                 \n                                    <td >{{s.nombre}} </td>\n                                    <td>                   \n                                        <div class=\"row clearfix\">                \n                                            <div class=\"col-lg-10 col-md-10 col-sm-8\">\n                                              <div class=\"form-group\">\n                                                 <!-- <p-autoComplete (ngModelChange)=\"k(s.cod_examen, i)\" [(ngModel)]=\"form.resultados[i]\" name=\"resultados[i]\" class=\"form-control\" [suggestions]=\"filteredCountriesSingle\" (completeMethod)=\"buscaValorExamen($event, s.cod_examen, i)\" field=\"valor\" [size]=\"30\" placeholder=\"Countries\" [minLength]=\"1\"></p-autoComplete>-->\n          <input  type=\"text\"  list=\"valores_examen\" [(ngModel)]=\"solicitudSinResultado.examenes_solicitados[indice].resultados_examen.resultados_examenes[i].resultados_examenes[in].valores[0].valor\" name=\"s.nombre\" [ngClass]=\"borde\" class=\"form-control\" (ngModelChange)=\"kambio_valor(s.cod_examen, solicitudSinResultado.examenes_solicitados[indice].resultados_examen.resultados_examenes[i].resultados_examenes[in].valores[0].valor)\" required>\n        \n      \n          <datalist id=\"valores_examen\">\n            <option *ngFor=\"let c of examenesfiltradosporcaracter\" [value]=\"c.valor\" ></option>\n          </datalist>                \n                                              </div>\n                                            </div>\n                                          </div>\n                                    </td>\n                                      <td class=\"text-center\">{{s.unidades}}\n                                       </td>\n                                 <td class=\"text-center\">   \n                                   \n                                  <a *ngIf=\"s.valores_referencia.length>0\" (click)=\"registrar(s)\" data-toggle=\"modal\" data-target=\"#addevent\"  class=\" waves-effect waves-float waves-green\"><i class=\"zmdi zmdi-edit\"></i></a> \n                                       <span *ngFor=\"let v of s.valores_referencia\">\n                                      {{v.tipo_persona}} {{v.valor_inicial}}-{{v.valor_final}} .\n                                    </span>\n                                    </td>\n          \n                                        </tr>\n                             </ng-container>\n  \n                    \n         </ng-container>\n  </ng-container>\n</ng-container>  \n                    </tbody>\n                    </table>\n\n\n\n\n\n\n                  \n                </div>\n              </div>\n              \n\n              \n\n\n\n\n\n            \n\n      <div style=\"margin:20px\" class=\"row\">    \n<div class=\"row clearfix col-md-3\">\n  <div class=\"col-sm-8 offset-sm-2\">\n    \n  </div>\n  <div class=\"action\">\n      <button type=\"button\"  id=\"guarda\" (click)=\"salir()\"  class=\"btn btn-raised btn-secondary btn-round waves-effect\"   >Salir</button>\n \n    <button type=\"submit\"  id=\"guardas\" (click)=\"guardarresultados(form)\" class=\"btn btn-raised btn-primary btn-round waves-effect\"   >Guardar</button>\n  \n  </div>\n</div>\n\n</div>\n\n            </form>\n\n\n\n\n            \n          </div>\n        </div>\n      </div>\n    </div>\n \n  </div>\n</section>\n<!-- Horizontal Layout -\n<div class=\"doNotPrint\">\n  Header is here.\n</div>\n\n<div>\n  all my beautiful print-related material is here.\n</div>\n \n  my footer is here.\n  <button (click)=\"onPrint()\">Print</button>\n</div>\n-->\n<div class=\"modal fade\" id=\"addevent\" tabindex=\"-1\" role=\"dialog\">\n    <div class=\"modal-dialog\" role=\"document\">\n      <div class=\"modal-content\">\n        <div class=\"modal-header\">\n          <h4 class=\"title\" id=\"defaultModalLabel\" >{{nombreexamen}}</h4>\n        </div>\n        <div class=\"modal-body\">\n             \n\n\n      \n                  <div class=\"row clearfix\" *ngFor=\"let v of examen.valores_referencia; let i = index;\"  >\n                  \n                    <ng-container *ngIf=\"v.estado\" >  \n                    <div class=\"col-sm-4\" >\n                      <div class=\"form-group\">\n                        <input type=\"text\"  [(ngModel)]=\"examen.valores_referencia[i].valor_inicial\" [name]=\"'valor_incial' +i\" class=\"form-control\" placeholder=\"valor inicial\"  required/>\n                      </div>\n                    </div>\n                    <div class=\"col-sm-4\">\n                      <div class=\"form-group\">\n                        <input type=\"text\"   [(ngModel)]=\"examen.valores_referencia[i].valor_final\" [name]=\"'valor_final' + i\" class=\"form-control\" placeholder=\"valor final\"  required/>\n                      </div>\n                    </div>\n                    <div class=\"col-sm-4\">\n                      <div >\n                        <select  class=\"form-control\" [(ngModel)]=\"examen.valores_referencia[i].tipo_persona\" [name]=\"'tipo_persona' + i\"   >\n                          <option  [value]=\"e.valor\" *ngFor=\" let e of personas\">{{e.nombre}}</option>\n                         \n                         </select>\n                      </div>\n                    </div>\n                  </ng-container>\n                  </div>\n\n\n              \n          \n\n            \n        <div class=\"modal-footer\">\n          <button type=\"button\" (click)=\"guardarvalorreferencia()\" id=\"a\" class=\"btn btn-primary btn-round waves-effect\" data-dismiss=\"modal\">Guardar</button>\n          <button type=\"button\" class=\"btn btn-simple btn-round waves-effect\" data-dismiss=\"modal\">Salir</button>\n        </div>\n      </div>\n    </div>\n  </div>\n  </div>"

/***/ }),

/***/ "./src/app/resultados/registrar/registrar.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/resultados/registrar/registrar.component.ts ***!
  \*************************************************************/
/*! exports provided: RegistrarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegistrarComponent", function() { return RegistrarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _resultados_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../resultados.service */ "./src/app/resultados/resultados.service.ts");
/* harmony import */ var _examenes_examenes_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../examenes/examenes.service */ "./src/app/examenes/examenes.service.ts");
/* harmony import */ var _models__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../models */ "./src/app/models/index.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




//import { CompleterService, CompleterData } from 'ng2-completer';

var RegistrarComponent = /** @class */ (function () {
    function RegistrarComponent(resultadosService, examenesService, router) {
        this.resultadosService = resultadosService;
        this.examenesService = examenesService;
        this.router = router;
        this.codeList = [];
        //protected dataService: CompleterData;
        this.searchData = [];
        this.tamañoNivel2 = 0;
        this.examen = new _models__WEBPACK_IMPORTED_MODULE_3__["Examen"]();
        this.tamaño = 0;
        this.indice = 0;
        this.personas = [];
        this.personas = [{ nombre: 'Adultos', valor: 'A.' }, { nombre: 'Niños', valor: 'N.' }, { nombre: 'Masculino', valor: 'M.' }, { nombre: 'Femenino', valor: 'F.' }];
        this.a = 0;
        this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
        this.form = {
            resultados: []
        };
        this.form.resultados = [];
        this.array = [];
        this.array[0] = '';
        this.solicitud = new _models__WEBPACK_IMPORTED_MODULE_3__["Solicitud"]();
        this.solicitud.examenes_solicitados[0] = new _models__WEBPACK_IMPORTED_MODULE_3__["Examen_solicitado"]();
        this.codeList = [
            { code: 'abcdhe568dhjkldn', name: 'item1' },
            { code: 'ksdkcs7238t8cds', name: 'item2' },
            { code: 'kascggibebbi', name: 'item3' }
        ];
        this.countries = ["bolivia", "argentina"];
        this.word = '70-80';
        this.nombreexamen = '';
        this.contador = 0;
        this.form = {
            cod_solicitud: 0,
            examen: null,
            klp: [],
            examenes_solicitados: [
                {
                    resultado_examen: {
                        valores: [
                            { valor: 'hola' }
                        ]
                    }
                }
            ],
            subexamenes: []
        };
        //this.form.examenes_solicitados.resultado_examen.valores=[];
        // this.form.examenes_solicitados.resultado_examen.valores[0].valor='jk';
        this.subexamenes = [];
        this.subexamenes[0] = new _models__WEBPACK_IMPORTED_MODULE_3__["Examen"]();
        this.subexamenes[0].nombre = 'carala';
        //this.form.resultados[0];
        this.solicitudSinResultado = JSON.parse(localStorage.getItem('solicitudSinResultado'));
        console.log(this.solicitudSinResultado.cod_solicitud + " afsdk");
        // inicializando cod_examen , cod_solexamende resultados del primer examen solicitado
        this.solicitudSinResultado.examenes_solicitados[this.indice].resultados_examen = new _models__WEBPACK_IMPORTED_MODULE_3__["Resultados_examen"]();
        this.solicitudSinResultado.examenes_solicitados[this.indice].resultados_examen.cod_examen = this.solicitudSinResultado.examenes_solicitados[this.indice].precio_examen.examen.cod_examen;
        this.solicitudSinResultado.examenes_solicitados[this.indice].resultados_examen.cod_sol_exam = this.solicitudSinResultado.examenes_solicitados[this.indice].cod_sol_exam;
        //
        this.subexamenes = [];
        this.tamaño = this.solicitudSinResultado.examenes_solicitados[this.indice].precio_examen.examen.subexamenes.length;
        //if(this.tamaño == 0){
        //this.tamaño=1
        //}
        this.t(this.tamaño, this.solicitudSinResultado);
        this.instanciar_resultados();
        if (this.solicitudSinResultado.examenes_solicitados[this.indice].precio_examen.examen.subexamenes.length == 0) {
            this.subexamenes[this.indice] = this.solicitudSinResultado.examenes_solicitados[this.indice].precio_examen.examen;
            // this.solicitudSinResultado.examenes_solicitados[this.indice].resultados_examenes[0].examen=this.subexamenes[this.indice]
        }
        else {
            // this.subexamenes=examensito.subexamenes;
            this.subexamenes = this.solicitudSinResultado.examenes_solicitados[this.indice].precio_examen.examen.subexamenes;
        }
        //
        // this.form.examenes=this.solicitudSinResultado.examenes;
        this.cod_examen = 'selecciona un examen';
        //resultadosService.getAnalisisSinResultadosporcodigo(3).subscribe(data => {
        //  this.analisisSinResultado=data;
        //});
    }
    RegistrarComponent.prototype.t = function (tamaño, solicitudSinResultado) {
    };
    RegistrarComponent.prototype.instanciar_resultados = function () {
        for (var i = 0; i < this.solicitudSinResultado.examenes_solicitados.length; i++) {
            if (this.solicitudSinResultado.examenes_solicitados[i].estado == 'Sin Registrar') {
                this.solicitudSinResultado.examenes_solicitados[i].resultados_examen = new _models__WEBPACK_IMPORTED_MODULE_3__["Resultados_examen"];
                this.solicitudSinResultado.examenes_solicitados[i].resultados_examen.resultados_examenes;
                if (this.solicitudSinResultado.examenes_solicitados[i].precio_examen.examen.num_subexamenes != 0) {
                    for (var j = 0; j < this.solicitudSinResultado.examenes_solicitados[i].precio_examen.examen.num_subexamenes; j++) {
                        this.solicitudSinResultado.examenes_solicitados[i].resultados_examen.resultados_examenes[j] = new _models__WEBPACK_IMPORTED_MODULE_3__["Resultados_examen"]();
                        this.solicitudSinResultado.examenes_solicitados[i].resultados_examen.resultados_examenes[j].cod_sol_exam = this.solicitudSinResultado.examenes_solicitados[i].cod_sol_exam;
                        this.solicitudSinResultado.examenes_solicitados[i].resultados_examen.resultados_examenes[j].cod_examen = this.solicitudSinResultado.examenes_solicitados[i].precio_examen.examen.subexamenes[j].cod_examen;
                        this.solicitudSinResultado.examenes_solicitados[i].resultados_examen.resultados_examenes[j].examen = this.solicitudSinResultado.examenes_solicitados[i].precio_examen.examen.subexamenes[j];
                        if (this.solicitudSinResultado.examenes_solicitados[i].precio_examen.examen.subexamenes[j].num_subexamenes != 0) {
                            for (var k = 0; k < this.solicitudSinResultado.examenes_solicitados[i].precio_examen.examen.subexamenes[j].num_subexamenes; k++) {
                                this.solicitudSinResultado.examenes_solicitados[i].resultados_examen.resultados_examenes[j].resultados_examenes[k] = new _models__WEBPACK_IMPORTED_MODULE_3__["Resultados_examen"]();
                                this.solicitudSinResultado.examenes_solicitados[i].resultados_examen.resultados_examenes[j].resultados_examenes[k].cod_sol_exam = this.solicitudSinResultado.examenes_solicitados[i].cod_sol_exam;
                                this.solicitudSinResultado.examenes_solicitados[i].resultados_examen.resultados_examenes[j].resultados_examenes[k].cod_examen = this.solicitudSinResultado.examenes_solicitados[i].precio_examen.examen.subexamenes[j].subexamenes[k].cod_examen;
                                this.solicitudSinResultado.examenes_solicitados[i].resultados_examen.resultados_examenes[j].resultados_examenes[k].examen = this.solicitudSinResultado.examenes_solicitados[i].precio_examen.examen.subexamenes[j].subexamenes[k];
                            }
                        }
                    }
                }
            }
        }
    };
    RegistrarComponent.prototype.ngOnInit = function () {
        $(function () {
            'use strict';
            window.addEventListener('load', function () {
                // Fetch all the forms we want to apply custom Bootstrap validation styles to
                var forms = document.getElementsByClassName('needs-validation');
                // Loop over them and prevent submission
                var validation = Array.prototype.filter.call(forms, function (form) {
                    form.addEventListener('submit', function (event) {
                        if (form.checkValidity() === false) {
                            event.preventDefault();
                            event.stopPropagation();
                        }
                        form.classList.add('was-validated');
                    }, false);
                });
            }, false);
        });
    };
    RegistrarComponent.prototype.selectEvent = function (item) {
        // do something with selected item
    };
    RegistrarComponent.prototype.onChangeSearch = function (val) {
        // fetch remote data from here
        // And reassign the 'data' which is binded to 'data' property.
    };
    RegistrarComponent.prototype.onFocused = function (e) {
        // do something when input is focused
    };
    RegistrarComponent.prototype.listarsubexamenes = function () {
        this.subexamenes = [];
        //cambiando tamaño de oloos subexamenes
        this.solicitudSinResultado.examenes_solicitados[this.indice].resultados_examen.cod_examen = this.solicitudSinResultado.examenes_solicitados[this.indice].precio_examen.cod_examen;
        this.solicitudSinResultado.examenes_solicitados[this.indice].resultados_examen.cod_sol_exam = this.solicitudSinResultado.examenes_solicitados[this.indice].cod_sol_exam;
        if (this.solicitudSinResultado.examenes_solicitados[this.indice].precio_examen.examen.subexamenes.length == 0) {
            this.subexamenes[0] = this.solicitudSinResultado.examenes_solicitados[this.indice].precio_examen.examen;
        }
        else {
            // this.subexamenes=examensito.subexamenes;
            this.subexamenes = this.solicitudSinResultado.examenes_solicitados[this.indice].precio_examen.examen.subexamenes;
        }
    };
    RegistrarComponent.prototype.guardarresultados = function (form) {
        var _this = this;
        this.solicitudSinResultado.examenes_solicitados[this.indice].cedula_usuario = this.currentUser.cedula;
        console.log(this.solicitudSinResultado.examenes_solicitados[this.indice]);
        if (form.valid && this.solicitudSinResultado.examenes_solicitados[this.indice].estado == 'Sin Registrar') {
            console.log(form.valid);
            this.resultadosService.guardarResultados(this.solicitudSinResultado.examenes_solicitados[this.indice]).subscribe(function (solicitud) {
                alert("resultados guardados");
                _this.solicitudSinResultado = solicitud;
                // this.listarsubexamenes();
                if (solicitud.estado == 'Registrado') {
                    _this.router.navigate(['/resultados/ver']);
                }
                else {
                    _this.indice = 0;
                    _this.instanciar_resultados();
                    _this.listarsubexamenes();
                }
            });
        }
        if (form.valid && (this.solicitudSinResultado.examenes_solicitados[this.indice].estado == 'Registrado' || this.solicitudSinResultado.examenes_solicitados[this.indice].estado == 'Actualizado')) {
            this.resultadosService.modificarResultados(this.solicitudSinResultado.examenes_solicitados[this.indice]).subscribe(function (solicitud) {
                alert("resultados actualizados");
                console.log(solicitud);
                _this.solicitudSinResultado = solicitud;
                // this.listarsubexamenes();
                if (solicitud.estado == 'Registrado') {
                    _this.router.navigate(['/resultados/ver']);
                }
                else {
                    _this.indice = 0;
                    _this.instanciar_resultados();
                    _this.listarsubexamenes();
                }
            });
        }
    };
    RegistrarComponent.prototype.salir = function () {
        this.router.navigate(['/resultados/ingresar']);
    };
    RegistrarComponent.prototype.guardarvalorreferencia = function () {
        this.resultadosService.guardarvalorreferencia($('#valor').val(), this.cod_examen).subscribe(function (datas) {
            //this.listarsubexamenes(this.examen)
        });
    };
    RegistrarComponent.prototype.registrar = function (s) {
        var _this = this;
        this.examen = s;
        this.cod_examen = s.cod_examen;
        this.nombreexamen = s.nombre;
        this.examenesService.modificar(this.examen).subscribe(function (data) {
            console.log(data);
            alert("examen " + data.nombre + " guardado");
            _this.router.navigate(['/examenes/listar']);
        });
    };
    RegistrarComponent.prototype.b = function (event, cadena) {
        this.resultadosService.obtener_valores__por_defecto_examnes(1, this.country).subscribe(function (datas) {
            // this.filteredCountriesSingle=datas;
        });
        //this.filteredCountriesSingle=this.countries;
    };
    RegistrarComponent.prototype.kambio_valor = function (cod_examen, caracter) {
        var _this = this;
        console.log(cod_examen + " " + caracter);
        this.resultadosService.obtener_valores__por_defecto_examnes(cod_examen, caracter).subscribe(function (resultados_defecto) {
            _this.examenesfiltradosporcaracter = resultados_defecto;
            _this.solicitudSinResultado.examenes_solicitados[_this.indice].resultados_examen.valores[0].cod = resultados_defecto[0].cod;
            console.log(_this.solicitudSinResultado.examenes_solicitados[_this.indice].resultados_examen.valores[0].cod);
            console.log(resultados_defecto[0].cod);
            // this.form.resultados[i]=this.filteredCountriesSingle[i].valor
        });
    };
    RegistrarComponent.prototype.kambio_valores = function (cod_examen, caracter, i) {
        var _this = this;
        console.log(cod_examen + " " + caracter + " " + i);
        this.resultadosService.obtener_valores__por_defecto_examnes(cod_examen, caracter).subscribe(function (resultados_defecto) {
            console.log(resultados_defecto);
            _this.examenesfiltradosporcaracter = resultados_defecto;
            //this.solicitudSinResultado.examenes_solicitados[this.indice].resultados_examen.valores[0].cod=resultados_defecto[0].cod
            _this.solicitudSinResultado.examenes_solicitados[_this.indice].resultados_examen.resultados_examenes[i].valores[0].cod = resultados_defecto[0].cod;
            console.log(resultados_defecto[0].cod);
            // this.form.resultados[i]=this.filteredCountriesSingle[i].valor
        });
    };
    RegistrarComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-registrar',
            template: __webpack_require__(/*! ./registrar.component.html */ "./src/app/resultados/registrar/registrar.component.html"),
            styles: [__webpack_require__(/*! ./registrar.component.css */ "./src/app/resultados/registrar/registrar.component.css")],
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None
        }),
        __metadata("design:paramtypes", [_resultados_service__WEBPACK_IMPORTED_MODULE_1__["ResultadosService"], _examenes_examenes_service__WEBPACK_IMPORTED_MODULE_2__["ExamenesService"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
    ], RegistrarComponent);
    return RegistrarComponent;
}());



/***/ }),

/***/ "./src/app/resultados/reporte-analisis/reporte-analisis.component.css":
/*!****************************************************************************!*\
  !*** ./src/app/resultados/reporte-analisis/reporte-analisis.component.css ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#contentToConvert{\r\n    font-size: 9px;\r\n    height: 160mm\r\n    }\r\n    "

/***/ }),

/***/ "./src/app/resultados/reporte-analisis/reporte-analisis.component.html":
/*!*****************************************************************************!*\
  !*** ./src/app/resultados/reporte-analisis/reporte-analisis.component.html ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<section class=\"content\">\n    <div class=\"block-header\">\n      <div class=\"row\">\n        <div class=\"col-lg-7 col-md-6 col-sm-12\">\n          <h2>Reporte de analisis\n            <small></small>\n          </h2>\n        </div>\n        <div class=\"col-lg-5 col-md-6 col-sm-12\">\n          <button class=\"btn btn-white btn-icon btn-round hidden-sm-down float-right m-l-10\" type=\"button\">\n            <i class=\"zmdi zmdi-plus\"></i>\n          </button>\n          <ul class=\"breadcrumb float-md-right\">\n            <li class=\"breadcrumb-item\"><a routerLink=\"/dashboard/main\"><i class=\"zmdi zmdi-home\"></i> </a></li>\n            <li class=\"breadcrumb-item\"><a href=\"javascript:void(0);\">resultados</a></li>\n            <li class=\"breadcrumb-item active\">reporte-analisis</li>\n          </ul>\n        </div>\n      </div>\n    </div>\n    <div class=\"container-fluid\">\n      <div class=\"row clearfix\">\n        <div class=\"col-lg-12\">\n          <div class=\"card\">\n            <div class=\"body\"><div style=\"margin:40px; padding:10px\" id=\"contentToConvert\" align-text=\"text-center\">\n  \n              <div >\n                  <div  class=\"\"  >\n                      <div class=\"container\">\n                       \n                                     <div class=\"text-center\">\n                                       <br>\n                                       <br>\n                <h3>A N Á L I S I S</h3>\n              </div>\n              \n  \n              <div  style=\"border-bottom : 1px solid black\" class=\"row\">\n                  <div class=\"col-md-2\"><Strong>Fecha  </Strong>        </div>\n                    <div class=\"col-md-4\"><strong>:</strong>   {{solicitud.fecha | date: 'dd-MM-yyyy'}}</div>\n                  \n                    <div class=\"col-md-2\"><Strong>Paciente </Strong>        </div>\n                    <div class=\"col-md-4\"><strong>:</strong>   {{solicitud.paciente.persona.nombre}} {{solicitud.paciente.persona.ap}} {{solicitud.paciente.persona.am}}</div>\n  \n                    <div class=\"col-md-2\"><Strong>Institucion  </Strong>        </div>\n                    <div class=\"col-md-4\"><strong>:</strong>   <span *ngIf=\"solicitud.institucion.cod_institucion !='PAR'\"> {{solicitud.institucion.cod_institucion_padre}} </span><span *ngIf=\"solicitud.institucion.cod_institucion=='PAR'\">{{solicitud.institucion.nombre}}</span></div>\n  \n                    <div class=\"col-md-2\"><Strong>Edad  </Strong>        </div>\n                    <div class=\"col-md-2\"><strong>:</strong>   {{solicitud.paciente.edad}}</div>\n  \n                    <div class=\"col-md-1\"><Strong>Sexo  </Strong>        </div>\n                    <div class=\"col-md-1\"><strong>:</strong>   {{solicitud.paciente.sexo}}</div>\n                  \n                    <div class=\"col-md-2\"><Strong>Indicaciones del Dr.  </Strong>        </div>\n                    <div class=\"col-md-4\"><strong>:</strong>   {{solicitud.doctor_solicitante.nombre}} {{solicitud.doctor_solicitante.ap}} {{solicitud.doctor_solicitante.am}}</div>\n  \n                    <div class=\"col-md-2\"><Strong>Procedencia  </Strong>        </div>\n                    <div class=\"col-md-4\"><strong>:</strong>   {{solicitud.paciente.procedencia}}</div> \n  \n                \n                   <hr>\n                  \n                  \n                   <br>\n              </div>\n  \n  \n  \n              <!-- fi n del encabezado del pdf-->\n  \n  \n  \n              \n                 \n                      <div class=\"container\">\n                       \n                                     <div class=\"text-center\">\n                                     \n                <h3>R E S U L T A D O S </h3>\n                </div>\n              </div>\n              \n              <div class=\"container\">\n                  <div class=\"row\">\n                      <div class=\"col-md-2\"></div>\n                      <div class=\"col-md-4\"></div>\n                    \n                      <div class=\"col-md-2\"><Strong> Valor de Referencia</Strong>        </div>\n                      <div class=\"col-md-4\"></div>\n    \n                  </div>\n\n\n                  <div  *ngFor=\"let ex of solicitud.examenes_solicitados\">\n                    <ng-container *ngIf=\"ex.precio_examen.examen.cod_examen !=48  &&  ex.precio_examen.examen.cod_examen !=25\">\n                           <div class=\"col-md-3\" *ngIf=\"ex.num_subexamenes == 0\">  \n                           </div>\n                  <ng-container >\n                      <div class=\"row\">\n     \n                       <div class=\"col-md-3\"><strong >{{ex.precio_examen.examen.nombre}} </strong>      </div>\n                       <div class=\"col-md-3\"><strong ><span *ngIf=\"ex.precio_examen.examen.num_subexamenes==0\">:</span></strong>  <span *ngFor=\"let v of ex.resultados_examen.valores\">{{v.valor}}</span></div>\n                 \n                       <div class=\"col-md-3\">  <span *ngFor=\"let v of ex.precio_examen.examen.valores_referencia\">\n                    {{v.tipo_persona}} <span *ngIf=\"v.valor_inicial != v.valor_final\">{{v.valor_inicial}} - {{v.valor_final}} .</span><span *ngIf=\"v.valor_inicial == v.valor_final\">{{v.valor_inicial}}.</span>\n                      </span>  {{ex.precio_examen.examen.unidades}}     </div>\n     \n     \n                   <div class=\"col-md-3\"></div>\n     \n                      </div>\n                  </ng-container>\n\n                  <ng-container  *ngFor=\"let re of ex.resultados_examen.resultados_examenes\">\n                    <div class=\"row\">\n   \n                     <div class=\"col-md-3\"><strong >{{re.examen.nombre}} </strong>      </div>\n                 <div class=\"col-md-3\"><span *ngIf=\"re.examen.num_subexamenes==0\">:</span>  <span *ngFor=\"let v of re.valores\">{{v.valor}}</span></div>\n               \n                 <div class=\"col-md-3\"> \n                  <span *ngFor=\"let v of re.examen.valores_referencia\">\n                    {{v.tipo_persona}} <span *ngIf=\"v.valor_inicial != v.valor_final\">{{v.valor_inicial}} - {{v.valor_final}} .</span><span *ngIf=\"v.valor_inicial == v.valor_final\">{{v.valor_inicial}}.</span>\n                  </span> {{re.examen.unidades}}     </div>\n   \n   \n                 <div class=\"col-md-3\"></div>\n   \n                    </div>\n                    <ng-container *ngIf=\"re.examen.num_subexamenes!=0\" >\n                <ng-container  *ngFor=\"let re of re.resultados_examenes\">\n                  <div class=\"row\">\n \n                   <div class=\"col-md-3\"><strong >{{re.examen.nombre}} </strong>      </div>\n               <div class=\"col-md-3\"><strong >:</strong>  <span *ngFor=\"let v of re.valores\">{{v.valor}}</span></div>\n             \n               <div class=\"col-md-3\"> <span *ngFor=\"let v of re.examen.valores_referencia\">\n                {{v.tipo_persona}} <span *ngIf=\"v.valor_inicial != v.valor_final\">{{v.valor_inicial}} - {{v.valor_final}} .</span><span *ngIf=\"v.valor_inicial == v.valor_final\">{{v.valor_inicial}}.</span>\n              </span> {{re.examen.unidades}}     </div>\n \n \n               <div class=\"col-md-3\"></div>\n \n                  </div>\n              </ng-container>\n            </ng-container>\n            </ng-container>\n     \n                  \n          \n          \n                    </ng-container>\n          \n          \n          </div>\n\n\n<!--\n\n               <div  *ngFor=\"let resultado of solicitud.resultados_subexamenes\">\n                 <div class=\"row\">\n  \n                    <div class=\"col-md-3\"><strong *ngIf=\"resultado.resultado===''\">{{resultado.examen.nombre}} </strong> <span *ngIf=\"resultado.resultado!=''\">{{resultado.examen.nombre}} </span>     </div>\n                <div class=\"col-md-3\"><strong *ngIf=\"resultado.resultado!=''\">:</strong>   {{resultado.resultado}}</div>\n              \n                <div class=\"col-md-3\"> {{resultado.examen.valor_referencia}}  {{resultado.examen.unidades}}     </div>\n  \n  \n                <div class=\"col-md-3\"></div>\n  \n                </div>\n  \n  \n               </div>\n-->\n\n\n             </div>\n  \n            </div>\n            </div>\n              </div>\n            </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  \n    <div class=\"row clearfix\">\n        <div class=\"col-sm-8 offset-sm-2\">\n          \n        </div>\n        <div class=\"col-sm-8 offset-sm-2\">\n          <button type=\"button\" (click)=\"captureScreen()\" class=\"btn btn-raised btn-primary btn-round waves-effect\"   >\n            <div class=\"demo-google-material-icon\"> <i class=\"material-icons\">picture_as_pdf</i> <span class=\"icon-name\">Descargar</span></div></button>\n        </div>\n      </div>\n  </section>\n    \n                 \n      \n    \n   \n    \n  \n      \n    \n    \n    \n    \n  \n    \n                  "

/***/ }),

/***/ "./src/app/resultados/reporte-analisis/reporte-analisis.component.ts":
/*!***************************************************************************!*\
  !*** ./src/app/resultados/reporte-analisis/reporte-analisis.component.ts ***!
  \***************************************************************************/
/*! exports provided: ReporteAnalisisComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReporteAnalisisComponent", function() { return ReporteAnalisisComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var jsPDF__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jsPDF */ "./node_modules/jsPDF/dist/jspdf.min.js");
/* harmony import */ var jsPDF__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(jsPDF__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var html2canvas__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! html2canvas */ "./node_modules/html2canvas/dist/npm/index.js");
/* harmony import */ var html2canvas__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(html2canvas__WEBPACK_IMPORTED_MODULE_2__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ReporteAnalisisComponent = /** @class */ (function () {
    function ReporteAnalisisComponent() {
        this.solicitud = JSON.parse(localStorage.getItem('solicitudaimprimir'));
        console.log(this.solicitud);
    }
    ReporteAnalisisComponent.prototype.ngOnInit = function () {
    };
    ReporteAnalisisComponent.prototype.captureScreen = function () {
        var data = document.getElementById('contentToConvert');
        html2canvas__WEBPACK_IMPORTED_MODULE_2___default()(data).then(function (canvas) {
            // Few necessary setting options  
            var imgWidth = 237;
            var pageHeight = 160;
            var pagewidth = 237;
            var margins = {
                bottom: 3,
                top: 3,
                left: 3,
                right: 3
            };
            var imgHeight = canvas.height * imgWidth / canvas.width;
            var heightLeft = imgHeight;
            var contentDataURL = canvas.toDataURL('image/png');
            var pdf = new jsPDF__WEBPACK_IMPORTED_MODULE_1__('l', 'mm', [237, 320]), margin = 10;
            var width = pdf.internal.pageSize.getWidth();
            var height = pdf.internal.pageSize.getHeight();
            console.log(pdf.internal.pageSize.getHeight());
            console.log(pdf.internal.pageSize.getHeight());
            var position = 0;
            pdf.addImage(contentDataURL, 'JPEG', 0, position, width, height, 'center');
            pdf.save('MYPdf.pdf'); // Generated PDF   
        });
    };
    ReporteAnalisisComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-reporte-analisis',
            template: __webpack_require__(/*! ./reporte-analisis.component.html */ "./src/app/resultados/reporte-analisis/reporte-analisis.component.html"),
            styles: [__webpack_require__(/*! ./reporte-analisis.component.css */ "./src/app/resultados/reporte-analisis/reporte-analisis.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ReporteAnalisisComponent);
    return ReporteAnalisisComponent;
}());



/***/ }),

/***/ "./src/app/resultados/reporte-hemograma/reporte-hemograma.component.css":
/*!******************************************************************************!*\
  !*** ./src/app/resultados/reporte-hemograma/reporte-hemograma.component.css ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".col-md-4{\r\n    padding: 2px;\r\n    border: 2px\r\n}\r\n.container{\r\n    font-size:11px\r\n}\r\ntable {    \r\n    width:100%;   height: 15%; \r\n    border-left:0px;\r\n  border-top: 1px solid black; \r\n  border-bottom: 1px solid black;\r\n  border-left:0px;\r\n  border-right:0px}\r\nth {      width:50%; font-weight: normal;       \r\n  border: 1px solid black; color: #039; }\r\ntr{\r\n      border-left:0px;\r\n      border-right:0px\r\n  }\r\ntd {    padding: 3px; height: 5px; \r\n    \r\n  border-top: 1px solid black; \r\n  border-bottom: 1px solid black;\r\n     \r\nwidth:auto}\r\n#contentToConvert{\r\n    font-size: 9px;\r\n    height: 160mm\r\n    }"

/***/ }),

/***/ "./src/app/resultados/reporte-hemograma/reporte-hemograma.component.html":
/*!*******************************************************************************!*\
  !*** ./src/app/resultados/reporte-hemograma/reporte-hemograma.component.html ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n\n<section class=\"content\">\n    <div class=\"block-header\">\n      <div class=\"row\">\n        <div class=\"col-lg-7 col-md-6 col-sm-12\">\n          <h2>Reporte de hemograma completo\n            <small></small>\n          </h2>\n        </div>\n        <div class=\"col-lg-5 col-md-6 col-sm-12\">\n          <button class=\"btn btn-white btn-icon btn-round hidden-sm-down float-right m-l-10\" type=\"button\">\n            <i class=\"zmdi zmdi-plus\"></i>\n          </button>\n          <ul class=\"breadcrumb float-md-right\">\n            <li class=\"breadcrumb-item\"><a routerLink=\"/dashboard/main\"><i class=\"zmdi zmdi-home\"></i> </a></li>\n            <li class=\"breadcrumb-item\"><a href=\"javascript:void(0);\">resultados</a></li>\n            <li class=\"breadcrumb-item active\">reporte-hemograma</li>\n          </ul>\n        </div>\n      </div>\n    </div>\n    <div class=\"container-fluid\">\n      <div class=\"row clearfix\" >\n        <div class=\"col-lg-12\">\n          <div class=\"card\"  style=\"width:267mm\">\n            <div class=\"body\" style=\"width:257mm\"><div  id=\"contentToConvert\" class=\"container-fluid\" style=\"width:237mm;margin:10mm;padding:10mm; border-width: 0mm  \" >\n  \n              <div class=\"container \" style=\"margin:0mm;padding:0mm; border-width:0px;width: 100%\">\n                  <div  class=\"\"  >\n                      <div class=\"container\">\n                       \n                                     <div class=\"text-center\">\n                                   \n                <h3 style=\"margin:10px\"><pre>A N Á L I S I S  H E M A T O L O G I C O</pre></h3>\n              </div>\n              \n  \n              <div  style=\"border-bottom : 1px solid black\" class=\"row\">\n                <div class=\"col-md-2\"><Strong>Fecha  </Strong>        </div>\n                  <div class=\"col-md-4\"><strong>:</strong>   {{solicitud.fecha | date: 'dd-MM-yyyy'}}</div>\n                \n                  <div class=\"col-md-2\"><Strong>Paciente </Strong>        </div>\n                  <div class=\"col-md-4\"><strong>:</strong>   {{solicitud.paciente.persona.nombre}} {{solicitud.paciente.persona.ap}} {{solicitud.paciente.persona.am}}</div>\n\n                  <div class=\"col-md-2\"><Strong>Institucion  </Strong>        </div>\n                  <div class=\"col-md-4\"><strong>:</strong>  <span *ngIf=\"solicitud.institucion.cod_institucion !='PAR'\"> {{solicitud.institucion.cod_institucion_padre}} </span><span *ngIf=\"solicitud.institucion.cod_institucion=='PAR'\">{{solicitud.institucion.nombre}}</span></div>\n\n                  <div class=\"col-md-2\"><Strong>Edad  </Strong>        </div>\n                  <div class=\"col-md-2\"><strong>:</strong>   {{solicitud.paciente.edad}}</div>\n\n                  <div class=\"col-md-1\"><Strong>Sexo  </Strong>        </div>\n                  <div class=\"col-md-1\"><strong>:</strong>   {{solicitud.paciente.sexo}}</div>\n                \n                  <div class=\"col-md-2\"><Strong>Indicaciones del Dr.  </Strong>        </div>\n                  <div class=\"col-md-4\"><strong>:</strong>   {{solicitud.doctor_solicitante.nombre}} {{solicitud.doctor_solicitante.ap}} {{solicitud.doctor_solicitante.am}}</div>\n\n                  <div class=\"col-md-2\"><Strong>Procedencia  </Strong>        </div>\n                  <div class=\"col-md-4\"><strong>:</strong>   {{solicitud.paciente.procedencia}}</div> \n\n              \n                 <hr>\n                \n                \n                 <br>\n            </div>\n  \n  \n  \n              <!-- fi n del encabezado del pdf-->\n  \n              <ng-container  *ngFor=\"let ex of solicitud.examenes_solicitados\">\n                <ng-container *ngIf=\"ex.precio_examen.examen.cod_examen ==25\">\n  \n  <div class=\"container\">\n                     \n      <div class=\"text-center\">\n      \n<h3><pre>SERIE ROJA</pre> </h3>\n</div>\n</div>\n\n\n  <div class=\"container\" style=\"border-bottom: 1px solid black\"> \n                     \n      <div class=\"text-center\">\n      \n          <div class=\"\" style=\"width: 100%\">\n              <div class=\"text-center\"  >\n                  <ng-container *ngFor=\"let resultado of ex.resultados_examen.resultados_examenes\"><ng-container *ngIf=\"resultado.examen.cod_examen===26\"> \n                                      <div class=\"row text-center\">\n                               <span  *ngFor=\"let resultad of resultado.resultados_examenes\">    \n                                \n    <span class=\"col-md-6\">\n                                  <strong>{{resultad.examen.nombre}}</strong>: <span *ngFor=\"let v of resultad.valores\">{{v.valor}}</span> <span *ngFor=\"let v of resultad.examen.valores_referencia\">{{v.tipo_persona}} <span *ngIf=\"v.valor_inicial != v.valor_final\">{{v.valor_inicial}} - {{v.valor_final}} .</span><span *ngIf=\"v.valor_inicial == v.valor_final\">{{v.valor_inicial}}.</span> </span>  {{resultad.examen.unidades}} \n                                 \n    </span>     \n                               </span>  \n                              </div>\n                    </ng-container   ></ng-container>\n\n              </div>\n\n\n         \n            </div>\n</div>\n</div>\n<!-- serie blanca-->\n<div class=\"container\">\n                     \n    <div class=\"text-center\">\n    \n<h3><pre>SERIE BLANCA</pre> </h3>\n</div>\n</div>\n<!--leucocitos-->\n<div class=\"container\" > \n                   \n    <div >\n    \n        <div class=\"row \" style=\"width: 100%\">\n            <div class=\"col-xs-12 col-md-12 \"  >\n                <ng-container *ngFor=\"let resultado of ex.resultados_examen.resultados_examenes\">\n                  <ng-container *ngIf=\"resultado.examen.cod_examen===30\"> \n\n                             <ng-container  *ngFor=\"let resultad of resultado.resultados_examenes\">    \n                              <ng-container *ngIf=\"resultad.examen.cod_examen== 31\">\n                                <strong>{{resultad.examen.nombre}}</strong>: <span *ngFor=\"let v of resultad.valores\">    {{v.valor}}</span> <span *ngFor=\"let v of resultad.examen.valores_referencia\">   {{v.tipo_persona}} <span *ngIf=\"v.valor_inicial != v.valor_final\">{{v.valor_inicial}} - {{v.valor_final}} .</span><span *ngIf=\"v.valor_inicial == v.valor_final\">{{v.valor_inicial}}.</span> </span>  {{resultad.examen.unidades}} \n                              </ng-container>\n                            </ng-container>  \n                  </ng-container   ></ng-container>\n\n            </div>\n\n\n       \n          </div>\n</div>\n</div>\n\n<!--fin-->\n        \n<br>      \n<table >\n\n    <tr>\n      <td style=\"border-right:1px solid black\"> ELEMENTOS</td><td style=\"border-right:1px solid black\">Basófilos</td><td style=\"border-right:1px solid black\">Eosinófilos</td><td style=\"border-right:1px solid black\">Mielocitos</td>\n      <td style=\"border-right:1px solid black\">Juveniles</td><td style=\"border-right:1px solid black\">Cayados</td><td style=\"border-right:1px solid black\">Neutrófilos</td><td style=\"border-right:1px solid black\">Linfocitos</td>\n      <td style=\"border-right:0px\">Monocitos</td>\n    </tr>\n    <tr style=\"height: 40px\">\n       \n        <td style=\"border-right:1px solid black\">%</td>\n        <ng-container *ngFor=\"let resultado of ex.resultados_examen.resultados_examenes\">\n            <ng-container *ngIf=\"resultado.examen.cod_examen===30\"> \n\n                       <ng-container  *ngFor=\"let resultad of resultado.resultados_examenes\">    \n                        <ng-container *ngIf=\"resultad.examen.cod_examen != 31 && resultad.examen.cod_examen != 40\">\n   <ng-container *ngIf=\"resultad.examen.cod_examen == 39\" >  <td style=\"border-right:0px\">\n  \n      <span *ngFor=\"let v of resultad.valores\">{{v.valor}}</span>\n    </td></ng-container>\n    <ng-container *ngIf=\"resultad.examen.cod_examen != 39\" >  <td style=\"border-right:1px solid black\">\n  \n        <span *ngFor=\"let v of resultad.valores\">{{v.valor}}</span>\n      </td></ng-container>\n      </ng-container>\n\n\n  \n\n\n\n  </ng-container></ng-container>\n  </ng-container>\n    </tr>\n    <!-- fila de valires de referencia-->\n    <tr>\n\n\n        <td style=\"border-right:1px solid black\">%NORMALES</td>\n\n        <ng-container *ngFor=\"let resultado of ex.resultados_examen.resultados_examenes\">\n            <ng-container *ngIf=\"resultado.examen.cod_examen===30\"> \n\n                       <ng-container  *ngFor=\"let resultad of resultado.resultados_examenes\">    \n                        <ng-container *ngIf=\"resultad.examen.cod_examen != 31 && resultad.examen.cod_examen != 40\">\n   <ng-container *ngIf=\"resultad.examen.cod_examen == 39\" >  <td style=\"border-right:0px\">\n  \n      <span *ngFor=\"let v of resultad.examen.valores_referencia\">{{v.tipo_persona}}\n         <span *ngIf=\"v.valor_inicial != v.valor_final\">{{v.valor_inicial}} - {{v.valor_final}} .</span>\n         <span *ngIf=\"v.valor_inicial == v.valor_final\">{{v.valor_inicial}}.</span>\n         </span>\n    </td></ng-container>\n    <ng-container *ngIf=\"resultad.examen.cod_examen != 39\" >  <td style=\"border-right:1px solid black\">\n        <span *ngFor=\"let v of resultad.examen.valores_referencia\">{{v.tipo_persona}}\n            <span *ngIf=\"v.valor_inicial != v.valor_final\">{{v.valor_inicial}} - {{v.valor_final}} .</span>\n            <span *ngIf=\"v.valor_inicial == v.valor_final\">{{v.valor_inicial}}.</span>\n            </span>\n       </td></ng-container>\n      </ng-container>\n\n\n  \n\n\n\n  </ng-container></ng-container>\n  </ng-container>\n\n        </tr>\n    <!--fin-->\n  \n  </table>\n\n\n\n<!--caracter a l frotis-->\n<div class=\"container\" > \n                   \n    <div >\n    \n        <div class=\"row \" style=\"width: 100%\">\n            <div class=\"col-xs-12 col-md-12 \"  >\n                <ng-container *ngFor=\"let resultado of ex.resultados_examen.resultados_examenes\">\n                  <ng-container *ngIf=\"resultado.examen.cod_examen===30\"> \n\n                             <ng-container  *ngFor=\"let resultad of resultado.resultados_examenes\">    \n                              <ng-container *ngIf=\"resultad.examen.cod_examen== 40\">\n                                <strong>{{resultad.examen.nombre}}</strong>: <span *ngFor=\"let v of resultad.valores\">{{v.valor}}</span> <span *ngFor=\"let v of resultad.examen.valores_referencia\">{{v.tipo_persona}} <span *ngIf=\"v.valor_inicial != v.valor_final\">{{v.valor_inicial}} - {{v.valor_final}} .</span><span *ngIf=\"v.valor_inicial == v.valor_final\">{{v.valor_inicial}}.</span> </span>  {{resultad.examen.unidades}} \n                              </ng-container>\n                            </ng-container>  \n                  </ng-container   ></ng-container>\n\n            </div>\n\n\n       \n          </div>\n</div>\n</div>\n<!--fin-->\n\n<div class=\"row\">\n    <div class=\"col-md-2\">      </div>\n    <div class=\"col-md-4\"></div>\n    \n    <div class=\"col-md-2\">      </div>\n    <div class=\"col-md-4\"></div>\n\n\n    <ng-container *ngFor=\"let resultado of ex.resultados_examen.resultados_examenes\">\n        <ng-container *ngIf=\"resultado.examen.cod_examen!=30 &&  resultado.examen.cod_examen!=26\"> \n            <div class=\"col-md-2\">      </div>\n            <div class=\"col-md-4\"></div>\n            \n            <div class=\"col-md-2\">  \n                <strong>{{resultado.examen.nombre}}</strong>: <span *ngFor=\"let v of resultado.valores\">{{v.valor}}</span> \n               </div>\n            <div class=\"col-md-4\">\n                <span *ngFor=\"let v of resultado.examen.valores_referencia\">{{v.tipo_persona}} <span *ngIf=\"v.valor_inicial != v.valor_final\">{{v.valor_inicial}} - {{v.valor_final}} .</span><span *ngIf=\"v.valor_inicial == v.valor_final\">{{v.valor_inicial}}.</span> </span>  {{resultado.examen.unidades}} \n            </div>\n\n        </ng-container>\n    </ng-container>\n\n</div>\n\n\n  </ng-container>  \n</ng-container>             \n  \n            </div>\n            </div>\n              </div>\n            </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  \n    <div class=\"row clearfix\">\n        <div class=\"col-sm-8 offset-sm-2\">\n          \n        </div>\n        <div class=\"col-sm-8 offset-sm-2\">\n          <button type=\"button\" (click)=\"captureScreen()\" class=\"btn btn-raised btn-primary btn-round waves-effect\"   >\n            <div class=\"demo-google-material-icon\"> <i class=\"material-icons\">picture_as_pdf</i> <span class=\"icon-name\">descargar</span></div></button>\n        </div>\n      </div>\n  </section>\n    \n                 \n      \n    \n   \n    \n  \n      \n    \n    \n    \n    \n  \n    \n                  "

/***/ }),

/***/ "./src/app/resultados/reporte-hemograma/reporte-hemograma.component.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/resultados/reporte-hemograma/reporte-hemograma.component.ts ***!
  \*****************************************************************************/
/*! exports provided: ReporteHemogramaComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReporteHemogramaComponent", function() { return ReporteHemogramaComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var jsPDF__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jsPDF */ "./node_modules/jsPDF/dist/jspdf.min.js");
/* harmony import */ var jsPDF__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(jsPDF__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var html2canvas__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! html2canvas */ "./node_modules/html2canvas/dist/npm/index.js");
/* harmony import */ var html2canvas__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(html2canvas__WEBPACK_IMPORTED_MODULE_2__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ReporteHemogramaComponent = /** @class */ (function () {
    function ReporteHemogramaComponent() {
        this.solicitud = JSON.parse(localStorage.getItem('solicitudaimprimir'));
        console.log(this.solicitud);
    }
    ReporteHemogramaComponent.prototype.ngOnInit = function () {
    };
    ReporteHemogramaComponent.prototype.captureScreen = function () {
        var data = document.getElementById('contentToConvert');
        html2canvas__WEBPACK_IMPORTED_MODULE_2___default()(data).then(function (canvas) {
            // Few necessary setting options  
            var imgWidth = 237;
            var pageHeight = 160;
            var pagewidth = 237;
            var margins = {
                bottom: 2,
                top: 2,
                left: 2,
                right: 2
            };
            var imgHeight = canvas.height * imgWidth / canvas.width;
            var heightLeft = imgHeight;
            var contentDataURL = canvas.toDataURL('image/png');
            var pdf = new jsPDF__WEBPACK_IMPORTED_MODULE_1__('l', 'mm', [237, 160]), margin = 10;
            var width = pdf.internal.pageSize.getWidth();
            console.log(pdf.internal.pageSize.getHeight());
            console.log("asfestewidth" + width + " ");
            console.log(pdf.internal.pageSize.getHeight());
            pdf.text(45, 45, 'letter');
            var position = 0;
            pdf.addImage(contentDataURL, 'PNG', 0, position, imgWidth, imgHeight, pageHeight, margins, 'center');
            pdf.save('MYPdf.pdf'); // Generated PDF   
        });
    };
    ReporteHemogramaComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-reporte-hemograma',
            template: __webpack_require__(/*! ./reporte-hemograma.component.html */ "./src/app/resultados/reporte-hemograma/reporte-hemograma.component.html"),
            styles: [__webpack_require__(/*! ./reporte-hemograma.component.css */ "./src/app/resultados/reporte-hemograma/reporte-hemograma.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ReporteHemogramaComponent);
    return ReporteHemogramaComponent;
}());



/***/ }),

/***/ "./src/app/resultados/reporte-orina/reporte-orina.component.css":
/*!**********************************************************************!*\
  !*** ./src/app/resultados/reporte-orina/reporte-orina.component.css ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "table {    \r\n      width:100%;   height: 20%; \r\n    border-bottom: 1px solid black;  margin: 0 auto}\r\n \r\nth {      width:50%; font-weight: normal;       \r\n    border: 1px solid black; color: #039; }\r\n \r\ntd {    padding: 3px; height: 5px;        border-left: 1px solid black;\r\n       border-right: 1px solid black; \r\nwidth:50%}\r\n \r\n#contentToConvert{\r\nfont-size: 9px;\r\nheight: 160mm\r\n}"

/***/ }),

/***/ "./src/app/resultados/reporte-orina/reporte-orina.component.html":
/*!***********************************************************************!*\
  !*** ./src/app/resultados/reporte-orina/reporte-orina.component.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n\n\n<section class=\"content\">\n    <div class=\"block-header\">\n      <div class=\"row\">\n        <div class=\"col-lg-7 col-md-6 col-sm-12\">\n          <h2>Reporte de orina\n            <small></small>\n          </h2>\n        </div>\n        <div class=\"col-lg-5 col-md-6 col-sm-12\">\n          <button class=\"btn btn-white btn-icon btn-round hidden-sm-down float-right m-l-10\" type=\"button\">\n            <i class=\"zmdi zmdi-plus\"></i>\n          </button>\n          <ul class=\"breadcrumb float-md-right\">\n            <li class=\"breadcrumb-item\"><a routerLink=\"/dashboard/main\"><i class=\"zmdi zmdi-home\"></i> </a></li>\n            <li class=\"breadcrumb-item\"><a href=\"javascript:void(0);\">resultados</a></li>\n            <li class=\"breadcrumb-item active\">reporte-orina</li>\n          </ul>\n        </div>\n      </div>\n    </div>\n    <div class=\"container-fluid\">\n      <div class=\"row clearfix\" >\n        <div class=\"col-lg-12\">\n          <div class=\"card\"  style=\"width:267mm\">\n            <div class=\"body\" style=\"width:257mm\"><div  id=\"contentToConvert\" class=\"container-fluid\" style=\"width:237mm;margin:10mm;padding:10mm; border-width: 0mm  \" >\n  \n              <div class=\"container \" style=\"margin:0mm;padding:0mm; border-width:0px;width: 100%\">\n                  <div  class=\"\"  >\n                      <div class=\"container\">\n                       \n                                     <div class=\"text-center\">\n                                    <br>\n                                    <br>\n                <h3 style=\"margin:10px\"><pre>A N Á L I S I S   D E   O R I N A</pre></h3>\n              </div>\n              \n  \n              <div  style=\"border-bottom : 1px solid black\" class=\"row\">\n                <div class=\"col-md-2\"><Strong>Fecha  </Strong>        </div>\n                  <div class=\"col-md-4\"><strong>:</strong>   {{solicitud.fecha | date: 'dd-MM-yyyy'}}</div>\n                \n                  <div class=\"col-md-2\"><Strong>Paciente </Strong>        </div>\n                  <div class=\"col-md-4\"><strong>:</strong>   {{solicitud.paciente.persona.nombre}} {{solicitud.paciente.persona.ap}} {{solicitud.paciente.persona.am}}</div>\n\n                  <div class=\"col-md-2\"><Strong>Institucion  </Strong>        </div>\n                  <div class=\"col-md-4\"><strong>:</strong>    <span *ngIf=\"solicitud.institucion.cod_institucion !='PAR'\"> {{solicitud.institucion.cod_institucion_padre}} </span><span *ngIf=\"solicitud.institucion.cod_institucion=='PAR'\">{{solicitud.institucion.nombre}}</span></div>\n\n                  <div class=\"col-md-2\"><Strong>Edad  </Strong>        </div>\n                  <div class=\"col-md-2\"><strong>:</strong>   {{solicitud.paciente.edad}}</div>\n\n                  <div class=\"col-md-1\"><Strong>Sexo  </Strong>        </div>\n                  <div class=\"col-md-1\"><strong>:</strong>   {{solicitud.paciente.sexo}}</div>\n                \n                  <div class=\"col-md-2\"><Strong>Indicaciones del Dr.  </Strong>        </div>\n                  <div class=\"col-md-4\"><strong>:</strong>   {{solicitud.doctor_solicitante.nombre}} {{solicitud.doctor_solicitante.ap}} {{solicitud.doctor_solicitante.am}}</div>\n\n                  <div class=\"col-md-2\"><Strong>Procedencia  </Strong>        </div>\n                  <div class=\"col-md-4\"><strong>:</strong>   {{solicitud.paciente.procedencia}}</div> \n\n              \n                 <hr>\n                \n                \n                 <br>\n            </div>\n  \n  \n              <!-- fi n del encabezado del pdf-->\n  \n  \n  <br>\n              \n                 \n                      <div class=\"container\">\n                       \n                                     <div class=\"text-center\">\n                                     \n            \n                </div>\n              </div>\n              <ng-container  *ngFor=\"let ex of solicitud.examenes_solicitados\">\n                  <ng-container *ngIf=\"ex.precio_examen.examen.cod_examen ==48\">\n              <div class=\"container\">\n                  <table class=\"\">\n                      <tr >\n                        <th class=\"text-center\"> <strong>EXAMEN FISICO</strong></th>\n                        <th class=\"text-center\"><strong>EXAMEN QUIMICO</strong></th>\n                      </tr>\n\n                      <tr>\n                          <ng-container *ngFor=\"let resultado of ex.resultados_examen.resultados_examenes\">\n                              <ng-container *ngFor=\"let resultado of resultado.resultados_examenes\">\n                                <ng-container *ngIf=\"resultado.examen.cod_examen===50\">\n                        <td>  <div class=\"row\">\n\n\n                            <div class=\"col-md-6\">{{resultado.examen.nombre}}</div ><div class=\"col-md-6\"><span *ngFor=\"let v of resultado.valores\">{{v.valor}}</span> ml</div ></div>\n                          </ng-container>\n                            <ng-container *ngIf=\"resultado.examen.cod_examen===60\">\n                                <td>  <div class=\"row\">\n        \n        \n                                    <div class=\"col-md-6\">{{resultado.examen.nombre}}</div ><div class=\"col-md-6\"><span *ngFor=\"let v of resultado.valores\">{{v.valor}}</span> </div ></div>\n                                  </td>\n                                </ng-container>\n                                </ng-container>\n                            </ng-container>\n                      </tr>\n\n                      <tr>\n                          <ng-container *ngFor=\"let resultado of ex.resultados_examen.resultados_examenes\">\n                              <ng-container *ngFor=\"let resultado of resultado.resultados_examenes\">\n                                <ng-container *ngIf=\"resultado.examen.cod_examen===51\">\n                        <td>  <div class=\"row\">\n\n\n                            <div class=\"col-md-6\">{{resultado.examen.nombre}}</div ><div class=\"col-md-6\"><span *ngFor=\"let v of resultado.valores\">{{v.valor}}</span> </div ></div>\n                          </ng-container>\n                            <ng-container *ngIf=\"resultado.examen.cod_examen===61\">\n                                <td>  <div class=\"row\">\n        \n        \n                                    <div class=\"col-md-6\">{{resultado.examen.nombre}}</div ><div class=\"col-md-6\"><span *ngFor=\"let v of resultado.valores\">{{v.valor}}</span> </div ></div>\n                                  </td>\n                                </ng-container>\n                                </ng-container>\n                            </ng-container>\n                      </tr>\n\n                      <tr>\n                          <ng-container *ngFor=\"let resultado of ex.resultados_examen.resultados_examenes\">\n                              <ng-container *ngFor=\"let resultado of resultado.resultados_examenes\">\n                                <ng-container *ngIf=\"resultado.examen.cod_examen===52\">\n                        <td>  <div class=\"row\">\n\n\n                            <div class=\"col-md-6\">{{resultado.examen.nombre}}</div ><div class=\"col-md-6\"><span *ngFor=\"let v of resultado.valores\">{{v.valor}}</span> </div ></div>\n                          </ng-container>\n                            <ng-container *ngIf=\"resultado.examen.cod_examen===62\">\n                                <td>  <div class=\"row\">\n        \n        \n                                    <div class=\"col-md-6\">{{resultado.examen.nombre}}</div ><div class=\"col-md-6\"><span *ngFor=\"let v of resultado.valores\">{{v.valor}}</span> </div ></div>\n                                  </td>\n                                </ng-container>\n                                </ng-container>\n                            </ng-container>\n                      </tr>\n\n                      <tr>\n                          <ng-container *ngFor=\"let resultado of ex.resultados_examen.resultados_examenes\">\n                              <ng-container *ngFor=\"let resultado of resultado.resultados_examenes\">\n                                <ng-container *ngIf=\"resultado.examen.cod_examen===53\">\n                        <td>  <div class=\"row\">\n\n\n                            <div class=\"col-md-6\">{{resultado.examen.nombre}}</div ><div class=\"col-md-6\"><span *ngFor=\"let v of resultado.valores\">{{v.valor}}</span> </div ></div>\n                          </ng-container>\n                            <ng-container *ngIf=\"resultado.examen.cod_examen===63\">\n                                <td>  <div class=\"row\">\n        \n        \n                                    <div class=\"col-md-6\">{{resultado.examen.nombre}}</div ><div class=\"col-md-6\"><span *ngFor=\"let v of resultado.valores\">{{v.valor}}</span> </div ></div>\n                                  </td>\n                                </ng-container>\n                                </ng-container>\n                            </ng-container>\n                      </tr>\n\n                      <tr>\n                          <ng-container *ngFor=\"let resultado of ex.resultados_examen.resultados_examenes\">\n                              <ng-container *ngFor=\"let resultado of resultado.resultados_examenes\">\n                                <ng-container *ngIf=\"resultado.examen.cod_examen===54\">\n                        <td>  <div class=\"row\">\n\n\n                            <div class=\"col-md-6\">{{resultado.examen.nombre}}</div ><div class=\"col-md-6\"><span *ngFor=\"let v of resultado.valores\">{{v.valor}}</span> </div ></div>\n                          </ng-container>\n                            <ng-container *ngIf=\"resultado.examen.cod_examen===64\">\n                                <td>  <div class=\"row\">\n        \n        \n                                    <div class=\"col-md-6\">{{resultado.examen.nombre}}</div ><div class=\"col-md-6\"><span *ngFor=\"let v of resultado.valores\">{{v.valor}}</span> </div ></div>\n                                  </td>\n                                </ng-container>\n                                </ng-container>\n                            </ng-container>\n                      </tr>\n\n                      <tr>\n                          <ng-container *ngFor=\"let resultado of ex.resultados_examen.resultados_examenes\">\n                              <ng-container *ngFor=\"let resultado of resultado.resultados_examenes\">\n                                <ng-container *ngIf=\"resultado.examen.cod_examen===55\">\n                        <td>  <div class=\"row\">\n\n\n                            <div class=\"col-md-6\">{{resultado.examen.nombre}}</div ><div class=\"col-md-6\"><span *ngFor=\"let v of resultado.valores\">{{v.valor}}</span> </div ></div>\n                          </ng-container>\n                            <ng-container *ngIf=\"resultado.examen.cod_examen===65\">\n                                <td>  <div class=\"row\">\n        \n        \n                                    <div class=\"col-md-6\">{{resultado.examen.nombre}}</div ><div class=\"col-md-6\"><span *ngFor=\"let v of resultado.valores\">{{v.valor}}</span> </div ></div>\n                                  </td>\n                                </ng-container>\n                                </ng-container>\n                            </ng-container>\n                      </tr>\n\n                      <tr>\n                          <ng-container *ngFor=\"let resultado of ex.resultados_examen.resultados_examenes\">\n                              <ng-container *ngFor=\"let resultado of resultado.resultados_examenes\">\n                                <ng-container *ngIf=\"resultado.examen.cod_examen===56\">\n                        <td>  <div class=\"row\">\n\n\n                            <div class=\"col-md-6\">{{resultado.examen.nombre}}</div ><div class=\"col-md-6\"><span *ngFor=\"let v of resultado.valores\">{{v.valor}}</span> </div ></div>\n                          </ng-container>\n                            <ng-container *ngIf=\"resultado.examen.cod_examen===66\">\n                                <td>  <div class=\"row\">\n        \n        \n                                    <div class=\"col-md-6\">{{resultado.examen.nombre}}</div ><div class=\"col-md-6\"><span *ngFor=\"let v of resultado.valores\">{{v.valor}}</span> </div ></div>\n                                  </td>\n                                </ng-container>\n                                </ng-container>\n                            </ng-container>\n                      </tr>\n\n                      <tr>\n                          <ng-container *ngFor=\"let resultado of ex.resultados_examen.resultados_examenes\">\n                              <ng-container *ngFor=\"let resultado of resultado.resultados_examenes\">\n                                <ng-container *ngIf=\"resultado.examen.cod_examen===57\">\n                        <td>  <div class=\"row\">\n\n\n                            <div class=\"col-md-6\">{{resultado.examen.nombre}}</div ><div class=\"col-md-6\"><span *ngFor=\"let v of resultado.valores\">{{v.valor}}</span> </div ></div>\n                          </ng-container>\n                            <ng-container *ngIf=\"resultado.examen.cod_examen===67\">\n                                <td>  <div class=\"row\">\n        \n        \n                                    <div class=\"col-md-6\">{{resultado.examen.nombre}}</div ><div class=\"col-md-6\"><span *ngFor=\"let v of resultado.valores\">{{v.valor}}</span> </div ></div>\n                                  </td>\n                                </ng-container>\n                                </ng-container>\n                            </ng-container>\n                      </tr>\n\n                      <tr>\n                          <ng-container *ngFor=\"let resultado of ex.resultados_examen.resultados_examenes\">\n                              <ng-container *ngFor=\"let resultado of resultado.resultados_examenes\">\n                                <ng-container *ngIf=\"resultado.examen.cod_examen===58\">\n                        <td>  <div class=\"row\">\n\n\n                            <div class=\"col-md-6\">{{resultado.examen.nombre}}</div ><div class=\"col-md-6\"><span *ngFor=\"let v of resultado.valores\">{{v.valor}}</span> </div ></div>\n                          </ng-container>\n                          <ng-container *ngIf=\"resultado.examen.cod_examen===58\">\n                              <td>  <div class=\"row\">\n      \n      \n                                  <div class=\"col-md-6\"></div ><div class=\"col-md-6\"> </div ></div>\n                                </ng-container>\n                        \n                                </ng-container>\n                            </ng-container>\n                      </tr>\n                      \n                      </table>\n                     \n                         <br>\n\n\n\n                         <div class=\"row\">\n                            <div class=\"col-md-3\">      </div>\n                            <div class=\"col-md-3\"></div>\n                            \n                            <div class=\"col-md-3\">      </div>\n                            <div class=\"col-md-3\"></div>\n                        \n                        \n                            <ng-container *ngFor=\"let resultado of ex.resultados_examen.resultados_examenes\">\n                                <ng-container  *ngFor=\"let resultado of resultado.resultados_examenes\">\n                                    <ng-container *ngIf=\"resultado.examen.cod_examen===17\">\n                                     \n                \n                \n                                            <div class=\"col-md-3\">{{resultado.examen.nombre}}</div ><div class=\"col-md-3\"><span *ngFor=\"let v of resultado.valores\">{{v.valor}}</span> {{resultado.examen.unidades}} </div >\n                                          </ng-container>\n                                            <ng-container *ngIf=\"resultado.examen.cod_examen===18\">\n                                               \n                        \n                        \n                                                    <div class=\"col-md-3\">{{resultado.examen.nombre}}</div ><div class=\"col-md-3\"><span *ngFor=\"let v of resultado.valores\">{{v.valor}}</span> {{resultado.examen.unidades}}</div >\n                                                  \n                                                </ng-container>\n\n                                                <ng-container *ngIf=\"resultado.examen.cod_examen===19\">\n                                               \n                        \n                        \n                                                    <div class=\"col-md-3\">{{resultado.examen.nombre}}</div ><div class=\"col-md-3\"><span *ngFor=\"let v of resultado.valores\">{{v.valor}}</span> {{resultado.examen.unidades}} </div >\n                                                  \n                                                </ng-container>\n                                                <ng-container *ngIf=\"resultado.examen.cod_examen===20\">\n                                               \n                        \n                        \n                                                    <div class=\"col-md-3\">{{resultado.examen.nombre}}</div ><div class=\"col-md-3\"><span *ngFor=\"let v of resultado.valores\">{{v.valor}}</span> {{resultado.examen.unidades}}</div >\n                                                  \n                                                </ng-container>\n\n\n                                </ng-container>\n                            </ng-container>\n                        \n                        </div>\n                        \n\n\n\n<div class=\"row\">\n<div></div>\n\n    \n    <ng-container *ngFor=\"let resulta of ex.resultados_examen.resultados_examenes\">\n      <ng-container *ngIf=\"resulta.examen.cod_examen ==69\"> \n      \n      <ng-container *ngIf=\"resulta.valores[0].valor != ''\">\n    <div class=\"col-md-1\"><strong>{{resulta.examen.nombre}}:</strong> </div>\n        <div class=\"col-md-10\"><span *ngFor=\"let v of resulta.valores; index as i\">{{v.valor}} </span>  </div >\n        </ng-container>\n        </ng-container></ng-container>\n</div>\n\n                       \n             </div>\n  </ng-container>\n</ng-container>\n            </div>\n              </div>\n              </div>\n            </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  \n    <div class=\"row clearfix\">\n        <div class=\"col-sm-8 offset-sm-2\">\n          \n        </div>\n        <div class=\"col-sm-8 offset-sm-2\">\n          <button type=\"button\" (click)=\"captureScreen()\" class=\"btn btn-raised btn-primary btn-round waves-effect\"   >\n            <div class=\"demo-google-material-icon\"> <i class=\"material-icons\">picture_as_pdf</i> <span class=\"icon-name\">descargar</span></div></button>\n        </div>\n      </div>\n  </section>\n    \n                 \n      \n    \n   \n    \n  \n      \n    \n    \n    \n    \n  \n    \n                  "

/***/ }),

/***/ "./src/app/resultados/reporte-orina/reporte-orina.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/resultados/reporte-orina/reporte-orina.component.ts ***!
  \*********************************************************************/
/*! exports provided: ReporteOrinaComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReporteOrinaComponent", function() { return ReporteOrinaComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var jsPDF__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jsPDF */ "./node_modules/jsPDF/dist/jspdf.min.js");
/* harmony import */ var jsPDF__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(jsPDF__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var html2canvas__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! html2canvas */ "./node_modules/html2canvas/dist/npm/index.js");
/* harmony import */ var html2canvas__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(html2canvas__WEBPACK_IMPORTED_MODULE_2__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ReporteOrinaComponent = /** @class */ (function () {
    function ReporteOrinaComponent() {
        this.solicitud = JSON.parse(localStorage.getItem('solicitudaimprimir'));
        console.log(this.solicitud);
    }
    ReporteOrinaComponent.prototype.ngOnInit = function () {
    };
    ReporteOrinaComponent.prototype.captureScreen = function () {
        var data = document.getElementById('contentToConvert');
        html2canvas__WEBPACK_IMPORTED_MODULE_2___default()(data).then(function (canvas) {
            // Few necessary setting options  
            var imgWidth = 237;
            var pageHeight = 160;
            var pagewidth = 237;
            var margins = {
                bottom: 2,
                top: 2,
                left: 2,
                right: 2
            };
            var imgHeight = canvas.height * imgWidth / canvas.width;
            var heightLeft = imgHeight;
            var contentDataURL = canvas.toDataURL('image/png');
            var pdf = new jsPDF__WEBPACK_IMPORTED_MODULE_1__('l', 'mm', [237, 160]), margin = 10;
            var width = pdf.internal.pageSize.getWidth();
            console.log(pdf.internal.pageSize.getHeight());
            console.log("asfestewidth" + width + " ");
            console.log(pdf.internal.pageSize.getHeight());
            pdf.text(45, 45, 'letter');
            var position = 0;
            pdf.addImage(contentDataURL, 'PNG', 0, position, imgWidth, imgHeight, pageHeight, margins, 'center');
            pdf.save('MYPdf.pdf'); // Generated PDF   
        });
    };
    ReporteOrinaComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-reporte-orina',
            template: __webpack_require__(/*! ./reporte-orina.component.html */ "./src/app/resultados/reporte-orina/reporte-orina.component.html"),
            styles: [__webpack_require__(/*! ./reporte-orina.component.css */ "./src/app/resultados/reporte-orina/reporte-orina.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ReporteOrinaComponent);
    return ReporteOrinaComponent;
}());



/***/ }),

/***/ "./src/app/resultados/resultados.module.ts":
/*!*************************************************!*\
  !*** ./src/app/resultados/resultados.module.ts ***!
  \*************************************************/
/*! exports provided: ResultadosModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResultadosModule", function() { return ResultadosModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _listar_analisis_sin_resultados_listar_analisis_sin_resultados_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./listar-analisis-sin-resultados/listar-analisis-sin-resultados.component */ "./src/app/resultados/listar-analisis-sin-resultados/listar-analisis-sin-resultados.component.ts");
/* harmony import */ var _resultados_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./resultados.routing.module */ "./src/app/resultados/resultados.routing.module.ts");
/* harmony import */ var _resultados_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./resultados.service */ "./src/app/resultados/resultados.service.ts");
/* harmony import */ var _registrar_registrar_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./registrar/registrar.component */ "./src/app/resultados/registrar/registrar.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _modificar_modificar_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./modificar/modificar.component */ "./src/app/resultados/modificar/modificar.component.ts");
/* harmony import */ var _ver_ver_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./ver/ver.component */ "./src/app/resultados/ver/ver.component.ts");
/* harmony import */ var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ng-select/ng-select */ "./node_modules/@ng-select/ng-select/fesm5/ng-select.js");
/* harmony import */ var _reporte_orina_reporte_orina_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./reporte-orina/reporte-orina.component */ "./src/app/resultados/reporte-orina/reporte-orina.component.ts");
/* harmony import */ var _reporte_hemograma_reporte_hemograma_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./reporte-hemograma/reporte-hemograma.component */ "./src/app/resultados/reporte-hemograma/reporte-hemograma.component.ts");
/* harmony import */ var _reporte_analisis_reporte_analisis_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./reporte-analisis/reporte-analisis.component */ "./src/app/resultados/reporte-analisis/reporte-analisis.component.ts");
/* harmony import */ var primeng_inputtext__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! primeng/inputtext */ "./node_modules/primeng/inputtext.js");
/* harmony import */ var primeng_inputtext__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(primeng_inputtext__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var primeng_autocomplete__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! primeng/autocomplete */ "./node_modules/primeng/autocomplete.js");
/* harmony import */ var primeng_autocomplete__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(primeng_autocomplete__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _ver_actualizaciones_ver_actualizaciones_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./ver-actualizaciones/ver-actualizaciones.component */ "./src/app/resultados/ver-actualizaciones/ver-actualizaciones.component.ts");
/* harmony import */ var _ver_actualizacion_ver_actualizacion_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./ver-actualizacion/ver-actualizacion.component */ "./src/app/resultados/ver-actualizacion/ver-actualizacion.component.ts");
/* harmony import */ var primeng_primeng__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! primeng/primeng */ "./node_modules/primeng/primeng.js");
/* harmony import */ var primeng_primeng__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(primeng_primeng__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var primeng_dropdown__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! primeng/dropdown */ "./node_modules/primeng/dropdown.js");
/* harmony import */ var primeng_dropdown__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(primeng_dropdown__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var primeng_table__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! primeng/table */ "./node_modules/primeng/table.js");
/* harmony import */ var primeng_table__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(primeng_table__WEBPACK_IMPORTED_MODULE_19__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};













//import {BootstrapAutocompleteModule} from 'angular-bootstrap-autocomplete'jh







var ResultadosModule = /** @class */ (function () {
    function ResultadosModule() {
    }
    ResultadosModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                primeng_primeng__WEBPACK_IMPORTED_MODULE_17__["ButtonModule"],
                primeng_inputtext__WEBPACK_IMPORTED_MODULE_13__["InputTextModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _resultados_routing_module__WEBPACK_IMPORTED_MODULE_3__["ResultadosRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"],
                _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_9__["NgSelectModule"],
                primeng_autocomplete__WEBPACK_IMPORTED_MODULE_14__["AutoCompleteModule"],
                //DataTableModule,
                primeng_dropdown__WEBPACK_IMPORTED_MODULE_18__["DropdownModule"],
                primeng_table__WEBPACK_IMPORTED_MODULE_19__["TableModule"], primeng_primeng__WEBPACK_IMPORTED_MODULE_17__["ButtonModule"]
                //BootstrapAutocompleteModule 
            ],
            declarations: [_listar_analisis_sin_resultados_listar_analisis_sin_resultados_component__WEBPACK_IMPORTED_MODULE_2__["ListarAnalisisSinResultadosComponent"], _registrar_registrar_component__WEBPACK_IMPORTED_MODULE_5__["RegistrarComponent"], _modificar_modificar_component__WEBPACK_IMPORTED_MODULE_7__["ModificarComponent"], _ver_ver_component__WEBPACK_IMPORTED_MODULE_8__["VerComponent"], _reporte_orina_reporte_orina_component__WEBPACK_IMPORTED_MODULE_10__["ReporteOrinaComponent"], _reporte_hemograma_reporte_hemograma_component__WEBPACK_IMPORTED_MODULE_11__["ReporteHemogramaComponent"], _reporte_analisis_reporte_analisis_component__WEBPACK_IMPORTED_MODULE_12__["ReporteAnalisisComponent"], _ver_actualizaciones_ver_actualizaciones_component__WEBPACK_IMPORTED_MODULE_15__["VerActualizacionesComponent"], _ver_actualizacion_ver_actualizacion_component__WEBPACK_IMPORTED_MODULE_16__["VerActualizacionComponent"]],
            providers: [_resultados_service__WEBPACK_IMPORTED_MODULE_4__["ResultadosService"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["DatePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["TitleCasePipe"]]
        })
    ], ResultadosModule);
    return ResultadosModule;
}());



/***/ }),

/***/ "./src/app/resultados/resultados.routing.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/resultados/resultados.routing.module.ts ***!
  \*********************************************************/
/*! exports provided: ResultadosRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResultadosRoutingModule", function() { return ResultadosRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _listar_analisis_sin_resultados_listar_analisis_sin_resultados_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./listar-analisis-sin-resultados/listar-analisis-sin-resultados.component */ "./src/app/resultados/listar-analisis-sin-resultados/listar-analisis-sin-resultados.component.ts");
/* harmony import */ var _registrar_registrar_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./registrar/registrar.component */ "./src/app/resultados/registrar/registrar.component.ts");
/* harmony import */ var _modificar_modificar_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modificar/modificar.component */ "./src/app/resultados/modificar/modificar.component.ts");
/* harmony import */ var _ver_ver_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./ver/ver.component */ "./src/app/resultados/ver/ver.component.ts");
/* harmony import */ var _reporte_orina_reporte_orina_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./reporte-orina/reporte-orina.component */ "./src/app/resultados/reporte-orina/reporte-orina.component.ts");
/* harmony import */ var _reporte_hemograma_reporte_hemograma_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./reporte-hemograma/reporte-hemograma.component */ "./src/app/resultados/reporte-hemograma/reporte-hemograma.component.ts");
/* harmony import */ var _reporte_analisis_reporte_analisis_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./reporte-analisis/reporte-analisis.component */ "./src/app/resultados/reporte-analisis/reporte-analisis.component.ts");
/* harmony import */ var _ver_actualizaciones_ver_actualizaciones_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./ver-actualizaciones/ver-actualizaciones.component */ "./src/app/resultados/ver-actualizaciones/ver-actualizaciones.component.ts");
/* harmony import */ var _ver_actualizacion_ver_actualizacion_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./ver-actualizacion/ver-actualizacion.component */ "./src/app/resultados/ver-actualizacion/ver-actualizacion.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};











var routes = [
    {
        path: 'ingresar',
        component: _listar_analisis_sin_resultados_listar_analisis_sin_resultados_component__WEBPACK_IMPORTED_MODULE_2__["ListarAnalisisSinResultadosComponent"]
    },
    {
        path: 'reporte-hemograma',
        component: _reporte_hemograma_reporte_hemograma_component__WEBPACK_IMPORTED_MODULE_7__["ReporteHemogramaComponent"]
    }, {
        path: 'reporte-analisis',
        component: _reporte_analisis_reporte_analisis_component__WEBPACK_IMPORTED_MODULE_8__["ReporteAnalisisComponent"]
    },
    {
        path: 'reporte-orina',
        component: _reporte_orina_reporte_orina_component__WEBPACK_IMPORTED_MODULE_6__["ReporteOrinaComponent"]
    },
    {
        path: 'modificar',
        component: _modificar_modificar_component__WEBPACK_IMPORTED_MODULE_4__["ModificarComponent"]
    },
    {
        path: 'ver',
        component: _ver_ver_component__WEBPACK_IMPORTED_MODULE_5__["VerComponent"]
    },
    {
        path: 'ver-actualizaciones',
        component: _ver_actualizaciones_ver_actualizaciones_component__WEBPACK_IMPORTED_MODULE_9__["VerActualizacionesComponent"]
    },
    {
        path: 'ver-actualizacion',
        component: _ver_actualizacion_ver_actualizacion_component__WEBPACK_IMPORTED_MODULE_10__["VerActualizacionComponent"]
    },
    {
        path: 'registrar',
        component: _registrar_registrar_component__WEBPACK_IMPORTED_MODULE_3__["RegistrarComponent"]
    },
    {
        path: '',
        redirectTo: 'normal',
        pathMatch: 'full'
    }
];
var ResultadosRoutingModule = /** @class */ (function () {
    function ResultadosRoutingModule() {
    }
    ResultadosRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], ResultadosRoutingModule);
    return ResultadosRoutingModule;
}());



/***/ }),

/***/ "./src/app/resultados/resultados.service.ts":
/*!**************************************************!*\
  !*** ./src/app/resultados/resultados.service.ts ***!
  \**************************************************/
/*! exports provided: ResultadosService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResultadosService", function() { return ResultadosService; });
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
var ResultadosService = /** @class */ (function () {
    function ResultadosService(http) {
        this.http = http;
        this.usuario = {};
        this.httpHeaders = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({ 'Content-Type': 'application/json' });
    }
    ResultadosService.prototype.getAnalisisSinResultados = function () {
        return this.http.get("" + ('' + _shared_variables_global__WEBPACK_IMPORTED_MODULE_2__["server"] + 'api/solicitudesSinResultados'), { headers: this.httpHeaders });
    };
    ResultadosService.prototype.getAnalisisConResultados = function () {
        return this.http.get("" + ('' + _shared_variables_global__WEBPACK_IMPORTED_MODULE_2__["server"] + 'api/solicitudesConResultados'), { headers: this.httpHeaders });
    };
    ResultadosService.prototype.getAnalisisSinResultadosporcodigo = function (cod_solicitud) {
        return this.http.get("" + ('' + _shared_variables_global__WEBPACK_IMPORTED_MODULE_2__["server"] + 'api/solicitudSinResultado/' + cod_solicitud), { headers: this.httpHeaders });
    };
    ResultadosService.prototype.getSubExamenes = function (cod_examen) {
        return this.http.post("" + ('' + _shared_variables_global__WEBPACK_IMPORTED_MODULE_2__["server"] + 'api/subexamenes'), { cod_examen: cod_examen }, { headers: this.httpHeaders });
    };
    ResultadosService.prototype.getExamen = function (cod_examen) {
        return this.http.post("" + ('' + _shared_variables_global__WEBPACK_IMPORTED_MODULE_2__["server"] + 'api/examen'), { cod_examen: cod_examen }, { headers: this.httpHeaders });
    };
    ResultadosService.prototype.guardarResultados = function (form) {
        return this.http.post("" + ('' + _shared_variables_global__WEBPACK_IMPORTED_MODULE_2__["server"] + 'api/guardar-resultados'), form, { headers: this.httpHeaders });
    };
    ResultadosService.prototype.modificarResultados = function (form) {
        return this.http.post("" + ('' + _shared_variables_global__WEBPACK_IMPORTED_MODULE_2__["server"] + 'api/modificar-resultados'), form, { headers: this.httpHeaders });
    };
    ResultadosService.prototype.actualizarEstadoResultadoSolicitud = function (cod_solicitud) {
        console.log(cod_solicitud);
        return this.http.post("" + ('' + _shared_variables_global__WEBPACK_IMPORTED_MODULE_2__["server"] + 'api/actualizarEstadoResultadoSolicitud'), { cod_solicitud: cod_solicitud }, { headers: this.httpHeaders });
    };
    ResultadosService.prototype.guardarResultadosModificados = function (form) {
        return this.http.post("" + ('' + _shared_variables_global__WEBPACK_IMPORTED_MODULE_2__["server"] + 'api/guardar-resultados-modificados'), form, { headers: this.httpHeaders });
    };
    ResultadosService.prototype.guardarvalorreferencia = function (valor_referencia, cod_examen) {
        return this.http.post("" + ('' + _shared_variables_global__WEBPACK_IMPORTED_MODULE_2__["server"] + 'api/actualizavalorreferencia'), { cod_examen: cod_examen, valor_referencia: valor_referencia }, { headers: this.httpHeaders });
    };
    ResultadosService.prototype.obtener_valores__por_defecto_examnes = function (cod_examen, caracter) {
        return this.http.post("" + ('' + _shared_variables_global__WEBPACK_IMPORTED_MODULE_2__["server"] + 'api/obtener-valores-examenes'), { cod_examen: cod_examen, caracter: caracter }, { headers: this.httpHeaders });
    };
    ResultadosService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], ResultadosService);
    return ResultadosService;
}());



/***/ }),

/***/ "./src/app/resultados/ver-actualizacion/ver-actualizacion.component.css":
/*!******************************************************************************!*\
  !*** ./src/app/resultados/ver-actualizacion/ver-actualizacion.component.css ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/resultados/ver-actualizacion/ver-actualizacion.component.html":
/*!*******************************************************************************!*\
  !*** ./src/app/resultados/ver-actualizacion/ver-actualizacion.component.html ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section class=\"content\">\n  <div class=\"block-header\">\n    <div class=\"row\">\n      <div class=\"col-lg-7 col-md-6 col-sm-12\">\n        <h2>Registrar Resultados\n           \n        </h2>\n       \n\n      </div>\n      <div class=\"col-lg-5 col-md-6 col-sm-12\">\n        <ul class=\"breadcrumb float-md-right\">\n          <li class=\"breadcrumb-item\"><a routerLink=\"/dashboard/main\"><i class=\"zmdi zmdi-home\"></i> </a></li>\n          <li class=\"breadcrumb-item\"><a href=\"javascript:void(0);\">resultados</a></li>\n          <li class=\"breadcrumb-item active\">ver-actualizacion</li>\n        </ul>\n      </div>\n    </div>\n  </div>\n  <div class=\"container-fluid\">\n \n    <!-- Horizontal Layout -->\n    <div class=\"row clearfix\">\n      <div class=\"col-lg-12 col-md-12 col-sm-12\">\n        <div class=\"card\">\n          <div class=\"header\">\n            <ul class=\"header-dropdown\">\n              <li class=\"dropdown\"> <a href=\"javascript:void(0);\" class=\"dropdown-toggle\" data-toggle=\"dropdown\" role=\"button\" aria-haspopup=\"true\" aria-expanded=\"false\"> <i class=\"zmdi zmdi-more\"></i> </a>\n                <ul class=\"dropdown-menu dropdown-menu-right\">\n                  <li><a href=\"javascript:void(0);\">Action</a></li>\n                  <li><a href=\"javascript:void(0);\">Another action</a></li>\n                  <li><a href=\"javascript:void(0);\">Something else</a></li>\n                </ul>\n              </li>\n              <li class=\"remove\">\n                <a role=\"button\" class=\"boxs-close\"><i class=\"zmdi zmdi-close\"></i></a>\n              </li>\n            </ul>\n          </div>\n          <div class=\"body\">\n           \n    \n<div class=\"row clearfix\">\n  <div class=\"col-lg-2 col-md-2 col-sm-2 form-control-label\">\n    <label for=\"login\">Examenes</label>\n  </div>\n    <div class=\"col-lg-4 col-md-4 col-sm-4\">\n   \n\n  <ng-container >\n    <ng-container >\n      <input class=\"form-control\" disabled [(ngModel)]=\"examenSolicitado.precio_examen.examen.nombre\">\n      \n    </ng-container>\n  </ng-container>\n      \n         \n\n\n        <br>\n<div></div>\n      \n  </div>\n</div>\n\n<div class=\"body\">\n    <div class=\"table-responsive\">\n<table class=\"table table-bordered table-striped table-hover js-basic-example dataTable\" >\n                      <thead>\n                        <tr>\n                            <th>PRUEBA</th>\n                            \n                            <th>RESULTADO</th>\n                            <th>UNIDADES</th>\n                            <th>VALOR DE REFERENCIA</th>\n                          \n                        </tr>\n                      </thead>\n                    \n                      <tbody>\n\n                          <ng-container *ngIf=\"examenSolicitado.precio_examen.examen.num_subexamenes == 0\">    \n                              <tr>                 \n                                <td >{{examenSolicitado.precio_examen.examen.nombre}} </td>\n                                <td>                   \n                                    <div class=\"row clearfix\">                \n                                        <div class=\"col-lg-10 col-md-10 col-sm-8\">\n                                          <div class=\"form-group\">\n                                             <!--\n                                                <input type=\"text\"  list=\"valores_examen\" [(ngModel)]=\"solicitudSinResultado.examenes_solicitados[indice].resultados_examen.valores[0]\" name=\"resultado\" [ngClass]=\"borde\" class=\"form-control\" (ngModelChange)=\"kambio_valor(solicitudSinResultado.examenes_solicitados[indice].precio_examen.examen.cod_examen, solicitudSinResultado.examenes_solicitados[indice].resultados_examen.valores[0].valor)\">\n  <datalist id=\"valores_examen\">\n        <option *ngFor=\"let c of examenesfiltradosporcaracter\" [value]=\"c\" >{{c.valor}}</option>\n      </dat                                        <p-autoComplete (ngModelChange)=\"k(s.cod_examen, i)\" [(ngModel)]=\"form.resultados[i]\" name=\"resultados[i]\" class=\"form-control\" [suggestions]=\"filteredCountriesSingle\" (completeMethod)=\"buscaValorExamen($event, s.cod_examen, i)\" field=\"valor\" [size]=\"30\" placeholder=\"Countries\" [minLength]=\"1\"></p-autoComplete>-->\n      <input  disabled type=\"text\"  list=\"valores_examen\" [(ngModel)]=\"examenSolicitado.resultados_examen.valores[0].valor\" name=\"resultado\" [ngClass]=\"borde\" class=\"form-control\" (ngModelChange)=\"kambio_valor(examenSolicitado.precio_examen.examen.cod_examen, examenSolicitado.resultados_examen.valores[0].valor)\">\n      <datalist id=\"valores_examen\">\n        <option *ngFor=\"let c of examenesfiltradosporcaracter\" [value]=\"c.valor\" ></option>\n      </datalist>                \n                                          </div>\n                                        </div>\n                                      </div>\n                                </td>\n                                  <td class=\"text-center\">{{examenSolicitado.precio_examen.examen.unidades}}\n                                   </td>\n                             <td class=\"text-center\">   \n                               \n                              <a  (click)=\"registrar(s)\" data-toggle=\"modal\" data-target=\"#addevent\"  class=\" waves-effect waves-float waves-green\"><i class=\"zmdi zmdi-edit\"></i></a> \n                                   <span *ngFor=\"let v of examenSolicitado.precio_examen.examen.valores_referencia\">\n                                  {{v.tipo_persona}} {{v.valor_inicial}}-{{v.valor_final}} .\n                                </span>\n                                </td>\n      \n                                    </tr>\n                              </ng-container>\n       <ng-container *ngIf=\"examenSolicitado.precio_examen.examen.num_subexamenes !=0\">                    \n   <ng-container *ngFor=\"let s of examenSolicitado.precio_examen.examen.subexamenes; let i=index\">\n                            \n                          <ng-container *ngIf=\"s.num_subexamenes == 0\">    \n                        <tr>                 \n                          <td >{{s.nombre}}</td>\n                          <td>                   \n                              <div class=\"row clearfix\">                \n                                 <div class=\"col-lg-10 col-md-10 col-sm-8\">\n                                    <div class=\"form-group\">\n                                       <!-- <p-autoComplete (ngModelChange)=\"k(s.cod_examen, i)\" [(ngModel)]=\"form.resultados[i]\" name=\"resultados[i]\" class=\"form-control\" [suggestions]=\"filteredCountriesSingle\" (completeMethod)=\"buscaValorExamen($event, s.cod_examen, i)\" field=\"valor\" [size]=\"30\" placeholder=\"Countries\" [minLength]=\"1\"></p-autoComplete>-->\n<input disabled type=\"text\"  list=\"valores_examen\" [(ngModel)]=\"examenSolicitado.resultados_examen.resultados_examenes[i].valores[0].valor\" name=\"examenSolicitado.resultados_examen.resultados_examenes[i].cod_examen\"  class=\"form-control\" (ngModelChange)=\"kambio_valores(s.cod_examen, examenSolicitado.resultados_examen.resultados_examenes[i].valores[0].valor,i)\">\n<datalist id=\"valores_examen\">\n  <option *ngFor=\"let c of examenesfiltradosporcaracter\" [value]=\"c.valor\" ></option>\n</datalist>                \n                                    </div>\n                                  </div>\n                                </div>\n                          </td>\n                            <td class=\"text-center\">{{s.unidades}}\n                             </td>\n                             \n                       <td class=\"text-center\">   \n                         \n                        <a  (click)=\"registrar(s)\" data-toggle=\"modal\" data-target=\"#addevent\"  class=\" waves-effect waves-float waves-green\"><i class=\"zmdi zmdi-edit\"></i></a> \n                             <span *ngFor=\"let v of s.valores_referencia\">\n                            {{v.tipo_persona}} {{v.valor_inicial}}-{{v.valor_final}} .\n                          </span>\n                          </td>\n\n                              </tr>\n                        </ng-container>\n         <ng-container  *ngIf=\"s.num_subexamenes != 0\">\n           <tr>\n             <td><strong>{{s.nombre}}  </strong></td>\n             <td>\n              <input style=\"display:none\" type=\"text\"  list=\"valores_examen\" [ngClass]=\"borde\" class=\"form-control\" (ngModelChange)=\"kambio_valor(s.cod_examen, i)\">\n            \n             </td>\n             <td></td>\n             <td></td>\n           </tr>\n                             <ng-container *ngFor=\"let s of s.subexamenes; index as in\">\n                                <tr>                 \n                                    <td >{{s.nombre}} </td>\n                                    <td>                   \n                                        <div class=\"row clearfix\">                \n                                            <div class=\"col-lg-10 col-md-10 col-sm-8\">\n                                              <div class=\"form-group\">\n                                                 <!-- <p-autoComplete (ngModelChange)=\"k(s.cod_examen, i)\" [(ngModel)]=\"form.resultados[i]\" name=\"resultados[i]\" class=\"form-control\" [suggestions]=\"filteredCountriesSingle\" (completeMethod)=\"buscaValorExamen($event, s.cod_examen, i)\" field=\"valor\" [size]=\"30\" placeholder=\"Countries\" [minLength]=\"1\"></p-autoComplete>-->\n          <input disabled type=\"text\"  list=\"valores_examen\" [(ngModel)]=\"examenSolicitado.resultados_examen.resultados_examenes[i].resultados_examenes[in].valores[0].valor\" name=\"examenSolicitado.resultados_examen.resultados_examenes[i].resultados_examenes[in]\" [attr.id]=\"indice+''+i+''+ in\" [ngClass]=\"borde\" class=\"form-control\" (ngModelChange)=\"kambio_valor(s.cod_examen, examenSolicitado.resultados_examen.resultados_examenes[i].resultados_examenes[in].valores[0].valor)\">\n         <datalist id=\"valores_examen\">\n            <option *ngFor=\"let c of examenesfiltradosporcaracter\" [value]=\"c.valor\" ></option>\n          </datalist>                \n                                              </div>\n                                            </div>\n                                          </div>\n                                    </td>\n                                      <td class=\"text-center\">{{s.unidades}}\n                                       </td>\n                                 <td class=\"text-center\">   \n                                   \n                                  <a  (click)=\"registrar(s)\" data-toggle=\"modal\" data-target=\"#addevent\"  class=\" waves-effect waves-float waves-green\"><i class=\"zmdi zmdi-edit\"></i></a> \n                                       <span *ngFor=\"let v of s.valores_referencia\">\n                                      {{v.tipo_persona}} {{v.valor_inicial}}-{{v.valor_final}} .\n                                    </span>\n                                    </td>\n          \n                                        </tr>\n                             </ng-container>\n  \n                    \n         </ng-container>\n  </ng-container>\n</ng-container>  \n                    </tbody>\n                    </table>\n\n\n\n\n\n\n                  \n                </div>\n              </div>\n              \n\n              \n\n\n\n\n\n            \n\n\n\n      <div style=\"margin:20px\" class=\"row\">    \n<div class=\"row clearfix col-md-3\">\n  <div class=\"col-sm-8 offset-sm-2\">\n    \n  </div>\n  <div class=\"action\">\n      <button type=\"button\"  id=\"guarda\" (click)=\"salir()\"  class=\"btn btn-raised btn-secondary btn-round waves-effect\"   >Salir</button>\n \n    <button type=\"button\"  id=\"guardas\" (click)=\"guardarresultados()\" class=\"btn btn-raised btn-primary btn-round waves-effect\"   >Guardar</button>\n  \n  </div>\n</div>\n\n</div>\n\n\n\n            \n          </div>\n        </div>\n      </div>\n    </div>\n \n  </div>\n</section>\n  <!-- Horizontal Layout -\n  <div class=\"doNotPrint\">\n    Header is here.\n  </div>\n  \n  <div>\n    all my beautiful print-related material is here.\n  </div>\n  \n  <div class=\"doNotPrint\">\n    my footer is here.\n    <button (click)=\"onPrint()\">Print</button>\n  </div>\n  -->"

/***/ }),

/***/ "./src/app/resultados/ver-actualizacion/ver-actualizacion.component.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/resultados/ver-actualizacion/ver-actualizacion.component.ts ***!
  \*****************************************************************************/
/*! exports provided: VerActualizacionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VerActualizacionComponent", function() { return VerActualizacionComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _resultados_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../resultados.service */ "./src/app/resultados/resultados.service.ts");
/* harmony import */ var _models__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../models */ "./src/app/models/index.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var VerActualizacionComponent = /** @class */ (function () {
    function VerActualizacionComponent(resultadosService, router) {
        this.resultadosService = resultadosService;
        this.router = router;
        this.examenesfiltradosporcaracter = [];
        this.indice = 0;
        this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
        this.array = [];
        this.array[0] = '';
        this.indices = 0;
        this.resultado = new _models__WEBPACK_IMPORTED_MODULE_2__["Resultado"]();
        this.jeison = {};
        this.caden = "";
        this.result = [];
        this.qtd = ['a', 'b', 'c', 'd'];
        this.a = '';
        this.coment = '';
        this.contador = 0;
        console.log(new Date());
        this.solicitudSinResultado = JSON.parse(localStorage.getItem('solicitudesConResultadosaModificar'));
        this.examenSolicitado = JSON.parse(localStorage.getItem('ExamenSolicitado'));
        console.log(this.examenSolicitado);
        this.resultadosDeExam = this.solicitudSinResultado.resultados_examenes;
        this.solicitudSinResultado.resultados_examenes = [];
        console.log(this.solicitudSinResultado);
        // this.form.examenes=this.solicitudSinResultado.examenes;
        this.cod_examen = "selecciona";
        //resultadosService.getAnalisisSinResultadosporcodigo(3).subscribe(data => {
        //  this.analisisSinResultado=data;
        //});
    }
    VerActualizacionComponent.prototype.guardarUnRegistrodeSubExamen = function (value) {
    };
    VerActualizacionComponent.prototype.ngOnInit = function () { };
    VerActualizacionComponent.prototype.listarsubexamenes = function () {
        this.subexamenes = [];
        //cambiando tamaño de oloos subexamenes
        this.solicitudSinResultado.examenes_solicitados[this.indice].resultados_examen.cod_examen = this.solicitudSinResultado.examenes_solicitados[this.indice].precio_examen.cod_examen;
        this.solicitudSinResultado.examenes_solicitados[this.indice].resultados_examen.cod_sol_exam = this.solicitudSinResultado.examenes_solicitados[this.indice].cod_sol_exam;
        if (this.solicitudSinResultado.examenes_solicitados[this.indice].precio_examen.examen.subexamenes.length == 0) {
            this.subexamenes[0] = this.solicitudSinResultado.examenes_solicitados[this.indice].precio_examen.examen;
        }
        else {
            // this.subexamenes=examensito.subexamenes;
            this.subexamenes = this.solicitudSinResultado.examenes_solicitados[this.indice].precio_examen.examen.subexamenes;
        }
    };
    VerActualizacionComponent.prototype.guardarresultados = function () {
        var _this = this;
        this.solicitudSinResultado.examenes_solicitados[this.indice].cedula_usuario = this.currentUser.cedula;
        console.log(this.solicitudSinResultado.examenes_solicitados[this.indice]);
        this.resultadosService.modificarResultados(this.solicitudSinResultado.examenes_solicitados[this.indice]).subscribe(function (solicitud) {
            alert("resultados actualizados");
            console.log(solicitud);
            //this.indice=0
            // this.solicitudSinResultado=solicitud
            // this.listarsubexamenes();
            _this.router.navigate(['/resultados/ver']);
        });
    };
    VerActualizacionComponent.prototype.kambio_valor = function (cod_examen, caracter) {
        var _this = this;
        console.log(cod_examen + " " + caracter);
        this.resultadosService.obtener_valores__por_defecto_examnes(cod_examen, caracter).subscribe(function (resultados_defecto) {
            _this.examenesfiltradosporcaracter = resultados_defecto;
            if (resultados_defecto.length > 0) {
                _this.solicitudSinResultado.examenes_solicitados[_this.indice].resultados_examen.valores[0].cod = resultados_defecto[0].cod;
                console.log(_this.solicitudSinResultado.examenes_solicitados[_this.indice].resultados_examen.valores[0].cod);
                console.log(resultados_defecto[0].cod);
                // this.form.resultados[i]=this.filteredCountriesSingle[i].valor
            }
            else {
                _this.solicitudSinResultado.examenes_solicitados[_this.indice].resultados_examen.valores[0].cod = 0;
            }
        }, function (error) {
            console.log('hola');
        });
    };
    VerActualizacionComponent.prototype.kambio_valores = function (cod_examen, caracter, i) {
        var _this = this;
        console.log(cod_examen + " " + caracter + " " + i);
        this.resultadosService.obtener_valores__por_defecto_examnes(cod_examen, caracter).subscribe(function (resultados_defecto) {
            _this.examenesfiltradosporcaracter = resultados_defecto;
            if (resultados_defecto.length > 0) {
                console.log(resultados_defecto);
                //this.solicitudSinResultado.examenes_solicitados[this.indice].resultados_examen.valores[0].cod=resultados_defecto[0].cod
                _this.solicitudSinResultado.examenes_solicitados[_this.indice].resultados_examen.resultados_examenes[i].valores[0].cod = resultados_defecto[0].cod;
                console.log(resultados_defecto[0].cod);
            }
            else {
                _this.solicitudSinResultado.examenes_solicitados[_this.indice].resultados_examen.resultados_examenes[i].valores[0].cod = 0;
            }
            // this.form.resultados[i]=this.filteredCountriesSingle[i].valor
        });
    };
    VerActualizacionComponent.prototype.salir = function () {
        this.router.navigate(['/resultados/ver-actualizaciones']);
    };
    VerActualizacionComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-ver-actualizacion',
            template: __webpack_require__(/*! ./ver-actualizacion.component.html */ "./src/app/resultados/ver-actualizacion/ver-actualizacion.component.html"),
            styles: [__webpack_require__(/*! ./ver-actualizacion.component.css */ "./src/app/resultados/ver-actualizacion/ver-actualizacion.component.css")]
        }),
        __metadata("design:paramtypes", [_resultados_service__WEBPACK_IMPORTED_MODULE_1__["ResultadosService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], VerActualizacionComponent);
    return VerActualizacionComponent;
}());



/***/ }),

/***/ "./src/app/resultados/ver-actualizaciones/ver-actualizaciones.component.css":
/*!**********************************************************************************!*\
  !*** ./src/app/resultados/ver-actualizaciones/ver-actualizaciones.component.css ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/resultados/ver-actualizaciones/ver-actualizaciones.component.html":
/*!***********************************************************************************!*\
  !*** ./src/app/resultados/ver-actualizaciones/ver-actualizaciones.component.html ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section class=\"content\">\n    <div class=\"block-header\">\n      <div class=\"row\">\n        <div class=\"col-lg-7 col-md-6 col-sm-12\">\n          <h2>Resultados\n            \n          </h2>\n        </div>\n        <div class=\"col-lg-5 col-md-6 col-sm-12\">\n          <ul class=\"breadcrumb float-md-right\">\n            <li class=\"breadcrumb-item\"><a routerLink=\"/dashboard/main\"><i class=\"zmdi zmdi-home\"></i> </a></li>\n            <li class=\"breadcrumb-item\"><a href=\"javascript:void(0);\">resultados</a></li>\n             <li class=\"breadcrumb-item active\">ver-actualizaciones</li>\n          </ul>\n        </div>\n      </div>\n    </div>\n    <div class=\"container-fluid\">\n      <!-- Basic Examples -->\n      <div class=\"row clearfix\">\n        <div class=\"col-lg-12\">\n          <div class=\"card\">\n            <div class=\"header\">\n              \n            <h2><strong>Lista</strong> de Actualizaciones de Resultados de los Examenes de la Solicitud</h2>\n             <ul class=\"header-dropdown\">\n                <li class=\"dropdown\"> <a href=\"javascript:void(0);\" class=\"dropdown-toggle\" data-toggle=\"dropdown\" role=\"button\" aria-haspopup=\"true\" aria-expanded=\"false\"> <i class=\"zmdi zmdi-more\"></i> </a>\n                  <ul class=\"dropdown-menu dropdown-menu-right slideUp float-right\">\n                    <li><a href=\"javascript:void(0);\">Action</a></li>\n                    <li><a href=\"javascript:void(0);\">Another action</a></li>\n                    <li><a href=\"javascript:void(0);\">Something else</a></li>\n                  </ul>\n                </li>\n                <li class=\"remove\">\n                  <a role=\"button\" class=\"boxs-close\"><i class=\"zmdi zmdi-close\"></i></a>\n                </li>\n              </ul>\n            </div>\n            \n            <div class=\"body\">\n              \n              <div class=\"table-responsive\">\n                <table class=\"table table-bordered table-striped table-hover js-basic-exam dataTable\">\n                  <thead>\n                    <tr>\n                        <th>#</th>\n                        \n                        <th>EXAMEN</th>\n                        <th>USUARIO</th>\n                        <TH>FECHA</TH>\n                        <TH>VER</TH>\n                    </tr>\n                  </thead>\n                \n                  <tbody>\n                    <ng-container *ngFor=\"let e of solicitudConResultado.examenes_solicitados_con_resultados_actualizados; index as i\">\n                      <ng-container *ngIf=\"e.estado=='Actualizado'\">\n                    <tr >\n                      <th scope=\"row\">{{i+1}}</th>\n                   \n                      <td> \n                    {{e.precio_examen.examen.nombre}}\n                      </td>\n                        <td  >\n                      {{e.usuario.personal_laboratorio.persona.nombre}} {{e.usuario.personal_laboratorio.persona.ap}} {{e.usuario.personal_laboratorio.persona.am}}\n                          </td>\n                        <td>{{e.fecha  | date: 'dd-MM-yyyy'}}</td>\n                        <td class=\"text-center\">\n                          <a  (click)=\"ver(e)\" routerLink=\"/resultados/ver-actualizacion\" class=\" waves-effect waves-float waves-green\"><i class=\"zmdi zmdi-edit\"></i></a>\n                        </td>\n                    </tr>\n                  </ng-container>\n                  </ng-container>\n                   \n                </tbody>\n                </table>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n      <!-- #END# Basic Examples -->\n      <!-- Exportable Table -->\n      \n      <!-- #END# Exportable Table -->\n    </div>\n  </section>\n"

/***/ }),

/***/ "./src/app/resultados/ver-actualizaciones/ver-actualizaciones.component.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/resultados/ver-actualizaciones/ver-actualizaciones.component.ts ***!
  \*********************************************************************************/
/*! exports provided: VerActualizacionesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VerActualizacionesComponent", function() { return VerActualizacionesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var VerActualizacionesComponent = /** @class */ (function () {
    function VerActualizacionesComponent(router) {
        this.router = router;
        this.solicitudConResultado = JSON.parse(localStorage.getItem('solicitudesConResultadosaModificar'));
        console.log(this.solicitudConResultado);
    }
    VerActualizacionesComponent.prototype.ngOnInit = function () {
    };
    VerActualizacionesComponent.prototype.ver = function (e) {
        localStorage.removeItem('ExamenSolicitado');
        localStorage.setItem('ExamenSolicitado', JSON.stringify(e));
        this.router.navigate(['/resultados/ver-actualizacion']);
    };
    VerActualizacionesComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-ver-actualizaciones',
            template: __webpack_require__(/*! ./ver-actualizaciones.component.html */ "./src/app/resultados/ver-actualizaciones/ver-actualizaciones.component.html"),
            styles: [__webpack_require__(/*! ./ver-actualizaciones.component.css */ "./src/app/resultados/ver-actualizaciones/ver-actualizaciones.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], VerActualizacionesComponent);
    return VerActualizacionesComponent;
}());



/***/ }),

/***/ "./src/app/resultados/ver/ver.component.css":
/*!**************************************************!*\
  !*** ./src/app/resultados/ver/ver.component.css ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "table.dataTable{clear:both;margin-top:6px !important;margin-bottom:6px !important;max-width:none !important;border-collapse:separate !important}table.dataTable td,table.dataTable th{box-sizing:content-box}table.dataTable td.dataTables_empty,table.dataTable th.dataTables_empty{text-align:center}table.dataTable.nowrap th,table.dataTable.nowrap td{white-space:nowrap}div.dataTables_wrapper div.dataTables_length label{font-weight:normal;text-align:left;white-space:nowrap}div.dataTables_wrapper div.dataTables_length select{width:75px;display:inline-block}div.dataTables_wrapper div.dataTables_filter{text-align:right}div.dataTables_wrapper div.dataTables_filter label{font-weight:normal;white-space:nowrap;text-align:left}div.dataTables_wrapper div.dataTables_filter input{margin-left:0.5em;display:inline-block;width:auto}div.dataTables_wrapper div.dataTables_info{padding-top:0.85em;white-space:nowrap}div.dataTables_wrapper div.dataTables_paginate{margin:0;white-space:nowrap;text-align:right}div.dataTables_wrapper div.dataTables_paginate ul.pagination{margin:2px 0;white-space:nowrap;justify-content:flex-end}div.dataTables_wrapper div.dataTables_processing{position:absolute;top:50%;left:50%;width:200px;margin-left:-100px;margin-top:-26px;text-align:center;padding:1em 0}table.dataTable thead>tr>th.sorting_asc,table.dataTable thead>tr>th.sorting_desc,table.dataTable thead>tr>th.sorting,table.dataTable thead>tr>td.sorting_asc,table.dataTable thead>tr>td.sorting_desc,table.dataTable thead>tr>td.sorting{padding-right:30px}table.dataTable thead>tr>th:active,table.dataTable thead>tr>td:active{outline:none}table.dataTable thead .sorting,table.dataTable thead .sorting_asc,table.dataTable thead .sorting_desc,table.dataTable thead .sorting_asc_disabled,table.dataTable thead .sorting_desc_disabled{cursor:pointer;position:relative}table.dataTable thead .sorting:before,table.dataTable thead .sorting:after,table.dataTable thead .sorting_asc:before,table.dataTable thead .sorting_asc:after,table.dataTable thead .sorting_desc:before,table.dataTable thead .sorting_desc:after,table.dataTable thead .sorting_asc_disabled:before,table.dataTable thead .sorting_asc_disabled:after,table.dataTable thead .sorting_desc_disabled:before,table.dataTable thead .sorting_desc_disabled:after{position:absolute;bottom:0.9em;display:block;opacity:0.3}table.dataTable thead .sorting:before,table.dataTable thead .sorting_asc:before,table.dataTable thead .sorting_desc:before,table.dataTable thead .sorting_asc_disabled:before,table.dataTable thead .sorting_desc_disabled:before{right:1em;content:\"\\2191\"}table.dataTable thead .sorting:after,table.dataTable thead .sorting_asc:after,table.dataTable thead .sorting_desc:after,table.dataTable thead .sorting_asc_disabled:after,table.dataTable thead .sorting_desc_disabled:after{right:0.5em;content:\"\\2193\"}table.dataTable thead .sorting_asc:before,table.dataTable thead .sorting_desc:after{opacity:1}table.dataTable thead .sorting_asc_disabled:before,table.dataTable thead .sorting_desc_disabled:after{opacity:0}div.dataTables_scrollHead table.dataTable{margin-bottom:0 !important}div.dataTables_scrollBody table{border-top:none;margin-top:0 !important;margin-bottom:0 !important}div.dataTables_scrollBody table thead .sorting:after,div.dataTables_scrollBody table thead .sorting_asc:after,div.dataTables_scrollBody table thead .sorting_desc:after{display:none}div.dataTables_scrollBody table tbody tr:first-child th,div.dataTables_scrollBody table tbody tr:first-child td{border-top:none}div.dataTables_scrollFoot>.dataTables_scrollFootInner{box-sizing:content-box}div.dataTables_scrollFoot>.dataTables_scrollFootInner>table{margin-top:0 !important;border-top:none}@media screen and (max-width: 767px){div.dataTables_wrapper div.dataTables_length,div.dataTables_wrapper div.dataTables_filter,div.dataTables_wrapper div.dataTables_info,div.dataTables_wrapper div.dataTables_paginate{text-align:center}}table.dataTable.table-sm>thead>tr>th{padding-right:20px}table.dataTable.table-sm .sorting:before,table.dataTable.table-sm .sorting_asc:before,table.dataTable.table-sm .sorting_desc:before{top:5px;right:0.85em}table.dataTable.table-sm .sorting:after,table.dataTable.table-sm .sorting_asc:after,table.dataTable.table-sm .sorting_desc:after{top:5px}table.table-bordered.dataTable th,table.table-bordered.dataTable td{border-left-width:0}table.table-bordered.dataTable th:last-child,table.table-bordered.dataTable th:last-child,table.table-bordered.dataTable td:last-child,table.table-bordered.dataTable td:last-child{border-right-width:0}table.table-bordered.dataTable tbody th,table.table-bordered.dataTable tbody td{border-bottom-width:0}div.dataTables_scrollHead table.table-bordered{border-bottom-width:0}div.table-responsive>div.dataTables_wrapper>div.row{margin:0}div.table-responsive>div.dataTables_wrapper>div.row>div[class^=\"col-\"]:first-child{padding-left:0}div.table-responsive>div.dataTables_wrapper>div.row>div[class^=\"col-\"]:last-child{padding-right:0}.dtp { position: fixed; top: 0; left: 0; right: 0; bottom: 0; background: rgba(0, 0, 0, 0.4); z-index: 2000; font-size: 15px; -webkit-user-select: none; -moz-user-select: none; -ms-user-select: none; user-select: none; }.dtp > .dtp-content { background: #fff; max-width: 300px; box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.16), 0 2px 10px 0 rgba(0, 0, 0, 0.12); max-height: 520px; position: relative; left: 50%; }.dtp > .dtp-content > .dtp-date-view > header.dtp-header { background: #689F38; color: #fff; text-align: center; padding: 0.3em; }.dtp div.dtp-date, .dtp div.dtp-time { background: #8BC34A; text-align: center; color: #fff; padding: 10px; }.dtp div.dtp-date > div { padding: 0; margin: 0; }.dtp div.dtp-actual-month { font-size: 1.5em; }.dtp div.dtp-actual-num { font-size: 3em; line-height: 0.9; }.dtp div.dtp-actual-maxtime { font-size: 3em; line-height: 0.9; }.dtp div.dtp-actual-year { font-size: 1.5em; color: #DCEDC8; }.dtp div.dtp-picker { padding: 1em; text-align: center; }.dtp div.dtp-picker-month, .dtp div.dtp-actual-time { font-weight: 500; text-align: center; }.dtp div.dtp-picker-month { padding-bottom:20px!important; text-transform: uppercase!important; }.dtp .dtp-close { position: absolute; top: 0.5em; right: 1em; }.dtp .dtp-close > a { color: #fff; }.dtp .dtp-close > a > i { font-size: 1em; }.dtp table.dtp-picker-days { margin: 0; min-height: 251px;}.dtp table.dtp-picker-days, .dtp table.dtp-picker-days tr, .dtp table.dtp-picker-days tr > td { border: none; }.dtp table.dtp-picker-days tr > td {  font-weight: 700; font-size: 0.8em; text-align: center; padding: 0.5em 0.3em; }.dtp table.dtp-picker-days tr > td > span.dtp-select-day { color: #BDBDBD!important; }.dtp table.dtp-picker-days tr > td > a, .dtp .dtp-picker-time > a { color: #212121; text-decoration: none; padding: 0.4em 0.5em 0.5em 0.6em; border-radius: 50%!important; }.dtp table.dtp-picker-days tr > td > a.selected{ background: #8BC34A; color: #fff; }.dtp table.dtp-picker-days tr > th { color: #757575; text-align: center; font-weight: 700; padding: 0.4em 0.3em; }.dtp .p10 > a { color: #689F38; text-decoration: none; }.dtp .p10 { width: 10%; display: inline-block; }.dtp .p20 { width: 20%; display: inline-block; }.dtp .p60 { width: 60%; display: inline-block; }.dtp .p80 { width: 80%; display: inline-block; }.dtp a.dtp-meridien-am, .dtp a.dtp-meridien-pm { position: relative; top: 10px; color: #212121; font-weight: 500; padding: 0.7em 0.5em; border-radius: 50%!important;text-decoration: none; background: #eee; font-size:1em; }.dtp .dtp-actual-meridien a.selected { background: #689F38; color: #fff; }.dtp .dtp-picker-time > .dtp-select-hour { cursor: pointer; }.dtp .dtp-picker-time > .dtp-select-minute { cursor: pointer; }.dtp .dtp-buttons { padding: 0 1em 1em 1em; text-align: right; }.dtp.hidden, .dtp .hidden { display: none; }.dtp .invisible { visibility: hidden; }.dtp .left { float: left; }.dtp .right { float: right; }.dtp .clearfix { clear: both; }.dtp .center { text-align: center; }/*!\n * Bootstrap-select v1.12.4 (http://silviomoreto.github.io/bootstrap-select)\n *\n * Copyright 2013-2017 bootstrap-select\n * Licensed under MIT (https://github.com/silviomoreto/bootstrap-select/blob/master/LICENSE)\n */.color-rojo{\n  background-color: red;\n}select.bs-select-hidden,\nselect.selectpicker {\n  display: none !important;\n}.bootstrap-select {\n  width: 220px \\0;\n  /*IE9 and below*/\n}.bootstrap-select > .dropdown-toggle {\n  width: 100%;\n  padding-right: 25px;\n  z-index: 1;\n}.bootstrap-select > .dropdown-toggle.bs-placeholder,\n.bootstrap-select > .dropdown-toggle.bs-placeholder:hover,\n.bootstrap-select > .dropdown-toggle.bs-placeholder:focus,\n.bootstrap-select > .dropdown-toggle.bs-placeholder:active {\n  color: #999;\n}.bootstrap-select > select {\n  position: absolute !important;\n  bottom: 0;\n  left: 50%;\n  display: block !important;\n  width: 0.5px !important;\n  height: 100% !important;\n  padding: 0 !important;\n  opacity: 0 !important;\n  border: none;\n}.bootstrap-select > select.mobile-device {\n  top: 0;\n  left: 0;\n  display: block !important;\n  width: 100% !important;\n  z-index: 2;\n}.has-error .bootstrap-select .dropdown-toggle,\n.error .bootstrap-select .dropdown-toggle {\n  border-color: #b94a48;\n}.bootstrap-select.fit-width {\n  width: auto !important;\n}.bootstrap-select:not([class*=\"col-\"]):not([class*=\"form-control\"]):not(.input-group-btn) {\n  width: 220px;\n}.bootstrap-select .dropdown-toggle:focus {\n  outline: thin dotted #333333 !important;\n  outline: 5px auto -webkit-focus-ring-color !important;\n  outline-offset: -2px;\n}.bootstrap-select.form-control {\n  margin-bottom: 0;\n  padding: 0;\n  border: none;\n}.bootstrap-select.form-control:not([class*=\"col-\"]) {\n  width: 100%;\n}.bootstrap-select.form-control.input-group-btn {\n  z-index: auto;\n}.bootstrap-select.form-control.input-group-btn:not(:first-child):not(:last-child) > .btn {\n  border-radius: 0;\n}.bootstrap-select.btn-group:not(.input-group-btn),\n.bootstrap-select.btn-group[class*=\"col-\"] {\n  float: none;\n  display: inline-block;\n  margin-left: 0;\n}.bootstrap-select.btn-group.dropdown-menu-right,\n.bootstrap-select.btn-group[class*=\"col-\"].dropdown-menu-right,\n.row .bootstrap-select.btn-group[class*=\"col-\"].dropdown-menu-right {\n  float: right;\n}.form-inline .bootstrap-select.btn-group,\n.form-horizontal .bootstrap-select.btn-group,\n.form-group .bootstrap-select.btn-group {\n  margin-bottom: 0;\n}.form-group-lg .bootstrap-select.btn-group.form-control,\n.form-group-sm .bootstrap-select.btn-group.form-control {\n  padding: 0;\n}.form-group-lg .bootstrap-select.btn-group.form-control .dropdown-toggle,\n.form-group-sm .bootstrap-select.btn-group.form-control .dropdown-toggle {\n  height: 100%;\n  font-size: inherit;\n  line-height: inherit;\n  border-radius: inherit;\n}.form-inline .bootstrap-select.btn-group .form-control {\n  width: 100%;\n}.bootstrap-select.btn-group.disabled,\n.bootstrap-select.btn-group > .disabled {\n  cursor: not-allowed;\n}.bootstrap-select.btn-group.disabled:focus,\n.bootstrap-select.btn-group > .disabled:focus {\n  outline: none !important;\n}.bootstrap-select.btn-group.bs-container {\n  position: absolute;\n  height: 0 !important;\n  padding: 0 !important;\n}.bootstrap-select.btn-group.bs-container .dropdown-menu {\n  z-index: 1060;\n}.bootstrap-select.btn-group .dropdown-toggle .filter-option {\n  display: inline-block;\n  overflow: hidden;\n  width: 100%;\n  text-align: left;\n}.bootstrap-select.btn-group .dropdown-toggle .caret {\n  position: absolute;\n  top: 50%;\n  right: 12px;\n  margin-top: -2px;\n  vertical-align: middle;\n}.bootstrap-select.btn-group[class*=\"col-\"] .dropdown-toggle {\n  width: 100%;\n}.bootstrap-select.btn-group .dropdown-menu {\n  min-width: 100%;\n  box-sizing: border-box;\n}.bootstrap-select.btn-group .dropdown-menu.inner {\n  position: static;\n  float: none;\n  border: 0;\n  padding: 0;\n  margin: 0;\n  border-radius: 0;\n  box-shadow: none;\n}.bootstrap-select.btn-group .dropdown-menu li {\n  position: relative;\n}.bootstrap-select.btn-group .dropdown-menu li.active small {\n  color: #fff;\n}.bootstrap-select.btn-group .dropdown-menu li.disabled a {\n  cursor: not-allowed;\n}.bootstrap-select.btn-group .dropdown-menu li a {\n  cursor: pointer;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n}.bootstrap-select.btn-group .dropdown-menu li a.opt {\n  position: relative;\n  padding-left: 2.25em;\n}.bootstrap-select.btn-group .dropdown-menu li a span.check-mark {\n  display: none;\n}.bootstrap-select.btn-group .dropdown-menu li a span.text {\n  display: inline-block;\n}.bootstrap-select.btn-group .dropdown-menu li small {\n  padding-left: 0.5em;\n}.bootstrap-select.btn-group .dropdown-menu .notify {\n  position: absolute;\n  bottom: 5px;\n  width: 96%;\n  margin: 0 2%;\n  min-height: 26px;\n  padding: 3px 5px;\n  background: #f5f5f5;\n  border: 1px solid #e3e3e3;\n  box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.05);\n  pointer-events: none;\n  opacity: 0.9;\n  box-sizing: border-box;\n}.bootstrap-select.btn-group .no-results {\n  padding: 3px;\n  background: #f5f5f5;\n  margin: 0 5px;\n  white-space: nowrap;\n}.bootstrap-select.btn-group.fit-width .dropdown-toggle .filter-option {\n  position: static;\n}.bootstrap-select.btn-group.fit-width .dropdown-toggle .caret {\n  position: static;\n  top: auto;\n  margin-top: -1px;\n}.bootstrap-select.btn-group.show-tick .dropdown-menu li.selected a span.check-mark {\n  position: absolute;\n  display: inline-block;\n  right: 15px;\n  margin-top: 5px;\n}.bootstrap-select.btn-group.show-tick .dropdown-menu li a span.text {\n  margin-right: 34px;\n}.bootstrap-select.show-menu-arrow.open > .dropdown-toggle {\n  z-index: 1061;\n}.bootstrap-select.show-menu-arrow .dropdown-toggle:before {\n  content: '';\n  border-left: 7px solid transparent;\n  border-right: 7px solid transparent;\n  border-bottom: 7px solid rgba(204, 204, 204, 0.2);\n  position: absolute;\n  bottom: -4px;\n  left: 9px;\n  display: none;\n}.bootstrap-select.show-menu-arrow .dropdown-toggle:after {\n  content: '';\n  border-left: 6px solid transparent;\n  border-right: 6px solid transparent;\n  border-bottom: 6px solid white;\n  position: absolute;\n  bottom: -4px;\n  left: 10px;\n  display: none;\n}.bootstrap-select.show-menu-arrow.dropup .dropdown-toggle:before {\n  bottom: auto;\n  top: -3px;\n  border-top: 7px solid rgba(204, 204, 204, 0.2);\n  border-bottom: 0;\n}.bootstrap-select.show-menu-arrow.dropup .dropdown-toggle:after {\n  bottom: auto;\n  top: -3px;\n  border-top: 6px solid white;\n  border-bottom: 0;\n}.bootstrap-select.show-menu-arrow.pull-right .dropdown-toggle:before {\n  right: 12px;\n  left: auto;\n}.bootstrap-select.show-menu-arrow.pull-right .dropdown-toggle:after {\n  right: 13px;\n  left: auto;\n}.bootstrap-select.show-menu-arrow.open > .dropdown-toggle:before,\n.bootstrap-select.show-menu-arrow.open > .dropdown-toggle:after {\n  display: block;\n}.bs-searchbox,\n.bs-actionsbox,\n.bs-donebutton {\n  padding: 4px 8px;\n}.bs-actionsbox {\n  width: 100%;\n  box-sizing: border-box;\n}.bs-actionsbox .btn-group button {\n  width: 50%;\n}.bs-donebutton {\n  float: left;\n  width: 100%;\n  box-sizing: border-box;\n}.bs-donebutton .btn-group button {\n  width: 100%;\n}.bs-searchbox + .bs-actionsbox {\n  padding: 0 8px 4px;\n}.bs-searchbox .form-control {\n  margin-bottom: 0;\n  width: 100%;\n  float: none;\n}input{\r\n    width:100%\r\n}.btn-pequeño{height:1.675rem;min-width:1.675rem;width:1.675rem;padding:0;\r\n    font-size:.9375rem;overflow:hidden;position:relative;line-height:normal}.btn-light {\r\n        color: #212529;\r\n        background-color: #f8f9fa;\r\n        border-color: #f8f9fa;\r\n      }input{\r\n          width: 100%;\r\n      }\r\n"

/***/ }),

/***/ "./src/app/resultados/ver/ver.component.html":
/*!***************************************************!*\
  !*** ./src/app/resultados/ver/ver.component.html ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section class=\"content\">\n  <div class=\"block-header\">\n    <div class=\"row\">\n      <div class=\"col-lg-7 col-md-6 col-sm-12\">\n        <h2>Resultados\n          \n        </h2>\n      </div>\n      <div class=\"col-lg-5 col-md-6 col-sm-12\">\n        <ul class=\"breadcrumb float-md-right\">\n          <li class=\"breadcrumb-item\"><a routerLink=\"/dashboard/main\"><i class=\"zmdi zmdi-home\"></i> </a></li>\n          <li class=\"breadcrumb-item\"><a href=\"javascript:void(0);\">resultados</a></li>\n           <li class=\"breadcrumb-item active\">ver</li>\n        </ul>\n      </div>\n    </div>\n  </div>\n  <div class=\"container-fluid\">\n    <!-- Basic Examples -->\n    <div class=\"row clearfix\">\n      <div class=\"col-lg-12\">\n        <div class=\"card\">\n          <div class=\"header\">\n            \n           <ul class=\"header-dropdown\">\n              <li class=\"dropdown\"> <a href=\"javascript:void(0);\" class=\"dropdown-toggle\" data-toggle=\"dropdown\" role=\"button\" aria-haspopup=\"true\" aria-expanded=\"false\"> <i class=\"zmdi zmdi-more\"></i> </a>\n                <ul class=\"dropdown-menu dropdown-menu-right slideUp float-right\">\n                  <li><a href=\"javascript:void(0);\">Action</a></li>\n                  <li><a href=\"javascript:void(0);\">Another action</a></li>\n                  <li><a href=\"javascript:void(0);\">Something else</a></li>\n                </ul>\n              </li>\n              <li class=\"remove\">\n                <a role=\"button\" class=\"boxs-close\"><i class=\"zmdi zmdi-close\"></i></a>\n              </li>\n            </ul>\n          </div>\n          \n          <div class=\"body\">\n\n              <datalist id=\"valores_paciente\">\n                  <option *ngFor=\"let p of pacientes\" [value]=\"p.nombres\" ></option>\n                </datalist> \n            <p-table [columns]=\"cols\" #dd [value]=\"analisisSinResultados\" [paginator]=\"true\" [rows]=\"5\" >\n              <ng-template pTemplate=\"caption\">\n                <div class=\"ui-helper-clearfix\" style=\"text-align: left\">\n                 <button type=\"button\" pButton icon=\"pi pi-file\" iconPos=\"left\" label=\"PDF\" (click)=\"exportPdf()\" class=\"btn btn-warning\"></button>\n                   \n                  </div>\n            </ng-template>\n              <ng-template pTemplate=\"header\" let-solicitud=\"rowData\">\n                  <tr><th style=\"width:30px\">#</th>\n                      <th *ngFor=\"let col of cols\"  >\n                          {{col.header}}\n                          \n                      </th>\n                      <th>Fecha</th>\n                      <th  >Analisis</th>\n\n                      \n                      <th style=\"width:100px\">Ver</th>\n                      \n                      <th style=\"width:100px\">Editar</th>\n                  </tr>\n                  <tr>\n                    <th></th>\n                      <th   *ngFor=\"let col of cols\" [ngSwitch]=\"col.field\">\n                        \n                          <ng-container  *ngSwitchCase=\"'nombres_paciente'\">\n                              <input  [(ngModel)]=\"form.caracter_nombre\" pInputText list=\"valores_paciente\" (input)=\"busca_pacientes()\" name=\"caracter_nombre\" type=\"text\"  placeholder=\"\">\n                            \n                             </ng-container>\n                           \n                      </th>\n                      <th> <ng-container >\n\n                        <div class=\"ui-inputgroup\">\n                          <span style=\"width: 20%;\"class=\"ui-inputgroup-addon\"   data-toggle=\"modal\" data-target=\"#addevent\"><i class=\"pi pi-calendar\" style=\"line-height: 1.25;\"></i></span>\n                          <input style=\"width: 80%;\"pInputText  [(ngModel)]=\"form.fech\" (ngModelChange)=\"filtro_completo()\" name=\"fech\" type=\"date\"  placeholder=\"fecha_inicio\">         \n                      </div>\n                     \n                      </ng-container>\n                    </th>\n                      <th>\n                        <!--\n                         <input pInputText type=\"text\" placeholder=\"buscar por nombre de paciente\" (input)=\"buscaPaciente($event)\">\n                      -->\n                      </th>\n                      \n                      <th></th>\n                      <th></th>\n                  </tr>\n              </ng-template>\n              <ng-template pTemplate=\"body\"   let-i=\"rowIndex\" let-solicitud>\n                  <tr>\n                    <td style=\"width:44px\">\n                            {{i+1}}\n                    \n                    </td>\n                      <td *ngFor=\"let col of cols; index as i\" [style]=\"{'width':'100%'}\">\n                          {{solicitud[col.field]}}\n                      </td>\n                      <td>{{solicitud.fecha | date: 'dd-MM-yyyy'}}</td>\n                      <td>  \n                          <ng-select  placeholder=\"mostrar analisis\">\n                            <ng-option *ngFor=\"let e of solicitud.examenes_solicitados\" [value]=\"e\"  >{{e.precio_examen.examen.nombre}}</ng-option>\n                          \n                          </ng-select>\n                          \n                         </td>\n                         <td  class=\"text-center\">\n                          \n                            <div class=\"row\">\n    \n                                <div class=\"col-md-1\">\n                         <a    routerLink=\"/resultados/reporte-analisis\"  (click)=\"mostrarpdf(solicitud)\" class=\" waves-effect waves-float waves-green\">\n                          <i class=\"zmdi zmdi-eye col-cofee zmdi-hc-2x\"></i></a>\n                          </div>\n                          <div class=\"col-md-1\">\n                          <a   routerLink=\"/resultados/reporte-orina\"  (click)=\"mostrarpdf(solicitud)\" class=\" waves-effect waves-float waves-green\">\n                            <i class=\"zmdi zmdi-eye col-amber zmdi-hc-2x\"></i></a>\n    </div>\n    <div class=\"col-md-1\">\n                            <a    routerLink=\"/resultados/reporte-hemograma\"  (click)=\"mostrarpdf(solicitud)\" class=\" waves-effect waves-float waves-green\">\n                              <i class=\"zmdi zmdi-eye col-red zmdi-hc-2x\"></i></a>\n                          </div>\n                            </div>\n                            </td>\n                         <td  class=\"text-center\">\n                          <div class=\"row\">\n                          \n                            <div class=\"col-md-1\">\n                          <button  rel=\"tooltip\" data-placement=\"top\" title=\"Ver actualizaciones\" *ngIf=\"currentUser.rol.nombre== 'Administrador'\"   (click)=\"ver_actualizaciones(solicitud)\" routerLink=\"/resultados/ver-actualizaciones\" class=\"btn btn-info btn-pequeño  btn-icon-mini btn-round\">\n                            <i class=\"zmdi zmdi-eye col-white\" style=\"color:white; font-size:17px\"></i></button>\n                      </div>\n                    \n                      <div class=\"col-md-1\">\n                        \n                        <button  rel=\"tooltip\" data-placement=\"top\" title=\"Modificar\" (click)=\"modificar(solicitud)\" routerLink=\"/resultados/modificar\"  class=\"btn btn-warning btn-pequeño  btn-icon-mini btn-round\">\n                          <i class=\"zmdi zmdi-edit col-white\" style=\"color:white; font-size:17px\"></i></button>\n                      </div>\n                      <!--   \n                      <div class=\"col-md-1\">\n                        <button rel=\"tooltip\" data-placement=\"top\" title=\"Ver historial clinico\" (click)=\"verhistorialclinico(paciente)\" routerLink=\"/pacientes/ver-historial-clinico\" class=\"btn btn-secondary btn-pequeño  btn-icon-mini btn-round\"><i class=\"zmdi zmdi-assignment col-white\" style=\"color:white; font-size:17px\"></i></button>\n                        \n                        </div>\n                      -->\n                      </div>\n\n\n\n                       \n                        </td>\n                  </tr>\n              </ng-template>\n                \n                \n            </p-table>\n\n\n<!---\n            <div class=\"table-responsive\">\n              <table class=\"table table-bordered table-striped table-hover js-basic-exam dataTable\">\n                <thead>\n                  <tr>\n                      <th>#</th>\n                      \n                      <th>PACIENTE</th>\n                      <th>ANALISIS</th>\n                      <th>VER</th>\n                      <TH>FECHA</TH>\n                      <TH>MODIFICAR</TH>\n                  </tr>\n                </thead>\n              \n                <tbody>\n                  <tr *ngFor=\"let s of analisisSinResultados; index as i\">\n                    <th scope=\"row\">{{i+1}}</th>\n                 \n                    <td>{{s.paciente.persona.nombre}} {{s.paciente.persona.ap}} {{s.paciente.persona.am}}</td>\n                    <td> \n                      <ng-select  placeholder=\"mostrar analisis\">\n                        <ng-option *ngFor=\"let e of s.examenes_solicitados\" [value]=\"e\"  >{{e.precio_examen.examen.nombre}}</ng-option>\n                     \n                     </ng-select>\n                    </td>\n                      <td  class=\"text-center\">\n                      <ng-container>\n                        <div class=\"row\">\n\n                            <div class=\"col-md-1\">\n                     <a    routerLink=\"/resultados/reporte-analisis\"  (click)=\"mostrarpdf(s)\" class=\" waves-effect waves-float waves-green\">\n                      <i class=\"zmdi zmdi-eye col-cofee zmdi-hc-2x\"></i></a>\n                      </div>\n                      <div class=\"col-md-1\">\n                      <a   routerLink=\"/resultados/reporte-orina\"  (click)=\"mostrarpdf(s)\" class=\" waves-effect waves-float waves-green\">\n                        <i class=\"zmdi zmdi-eye col-amber zmdi-hc-2x\"></i></a>\n</div>\n<div class=\"col-md-1\">\n                        <a    routerLink=\"/resultados/reporte-hemograma\"  (click)=\"mostrarpdf(s)\" class=\" waves-effect waves-float waves-green\">\n                          <i class=\"zmdi zmdi-eye col-red zmdi-hc-2x\"></i></a>\n                      </div>\n                        </div>\n                      </ng-container>\n                        </td>\n                      <td>{{s.fecha}}</td>\n                      <td class=\"text-center\">\n                        \n                          <div class=\"row\">\n                            \n                      <div class=\"col-md-2\">\n                          <a  *ngIf=\"currentUser.roles[0].nombre== 'Administrador'\"   (click)=\"ver_actualizaciones(s)\" routerLink=\"/resultados/ver-actualizaciones\" class=\" waves-effect waves-float waves-green\"><i class=\"zmdi zmdi-eye col-cofee zmdi-hc-2x\"></i></a>\n                        </div>\n                      <div class=\"col-md-2\">\n                          <a  (click)=\"modificar(s)\" routerLink=\"/resultados/modificar\" class=\" waves-effect waves-float waves-green\"><i class=\"zmdi zmdi-edit\"></i></a>\n                      </div>\n                      </div>\n                    </td>\n                  </tr>\n                 \n              </tbody>\n              </table>\n            </div>\n          -->\n          </div>\n        </div>\n      </div>\n    </div>\n    <!-- #END# Basic Examples -->\n    <!-- Exportable Table -->\n    \n    <!-- #END# Exportable Table -->\n  </div>\n</section>\n\n<div class=\"modal fade\" id=\"addevent\" tabindex=\"-1\" role=\"dialog\">\n    <div class=\"modal-dialog\" role=\"document\">\n      <div class=\"modal-content\">\n        <div class=\"modal-header\">\n          <h4 class=\"title\" id=\"defaultModalLabel\" >{{nombreexamen}}</h4>\n        </div>\n        <div class=\"modal-body\">\n             \n            <div class=\" row clearfix\">\n              \n    <div class=\"col-lg-4\">\n              <label for=\"fecha_inicio\">Desde:</label>\n              </div>\n              \n    <div class=\"col-lg-8\">\n              <input id=\"fecha_inicio\" [(ngModel)]=\"form.fecha_inicio\" name=\"fech\" type=\"date\" placeholder=\"fecha_inicio\">\n          \n                    </div>\n  \n                    <div class=\"col-lg-4\">\n                        <label for=\"fecha_fin\">Hasta:</label>\n                        </div>\n                        \n              <div class=\"col-lg-8\">\n                        <input id=\"fecha_fin\" [(ngModel)]=\"form.fecha_fin\"  name=\"fech\" type=\"date\"  placeholder=\"fecha_inicio\">\n                    \n                              </div>\n                </div>\n        <div class=\"modal-footer\">\n          <button type=\"button\" (click)=\"filtro_completo()\" id=\"a\" class=\"btn btn-primary btn-round waves-effect\" data-dismiss=\"modal\">Guardar</button>\n          <button type=\"button\" class=\"btn btn-simple btn-round waves-effect\" data-dismiss=\"modal\">Salir</button>\n        </div>\n      </div>\n    </div>\n  </div>\n  </div>"

/***/ }),

/***/ "./src/app/resultados/ver/ver.component.ts":
/*!*************************************************!*\
  !*** ./src/app/resultados/ver/ver.component.ts ***!
  \*************************************************/
/*! exports provided: VerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VerComponent", function() { return VerComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _resultados_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../resultados.service */ "./src/app/resultados/resultados.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _solicitudes_solicitudes_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../solicitudes/solicitudes.service */ "./src/app/solicitudes/solicitudes.service.ts");
/* harmony import */ var _pacientes_pacientes_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../pacientes/pacientes.service */ "./src/app/pacientes/pacientes.service.ts");
/* harmony import */ var jspdf_autotable__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! jspdf-autotable */ "./node_modules/jspdf-autotable/dist/jspdf.plugin.autotable.js");
/* harmony import */ var jspdf_autotable__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(jspdf_autotable__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var VerComponent = /** @class */ (function () {
    function VerComponent(datePipe, pacientesService, solicitudesService, resultadosService, router) {
        var _this = this;
        this.datePipe = datePipe;
        this.pacientesService = pacientesService;
        this.solicitudesService = solicitudesService;
        this.resultadosService = resultadosService;
        this.router = router;
        this.solicitudSinResultado = null;
        this.form = {
            fech: '',
            fecha_inicio: '2019-03-03',
            fecha_fin: this.datePipe.transform(new Date(), "yyyy-MM-dd"),
            caracter_nombre: '',
            cedula: '',
            estado_solicitud: '',
            resultados: 'Registrado'
        };
        this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
        resultadosService.getAnalisisConResultados().subscribe(function (data) {
            console.log(data);
            _this.analisisSinResultados = data;
            for (var i = 0; i < _this.analisisSinResultados.length; i++) {
                _this.analisisSinResultados[i].nombres_paciente = _this.analisisSinResultados[i].paciente.persona.nombre + " " + _this.analisisSinResultados[i].paciente.persona.ap + " " + _this.analisisSinResultados[i].paciente.persona.am;
            }
        });
    }
    VerComponent.prototype.ngOnInit = function () {
        this.cols = [
            { field: "nombres_paciente", header: 'Paciente' },
            { field: 'estado', header: 'Estado' }
        ];
        $(function () {
            $('.js-basic-exam').dataTable();
            // Exportable tableff
        });
    };
    VerComponent.prototype.registrar = function (solicitud) {
        console.log(solicitud.institucion);
        localStorage.removeItem('solicitudSinResultado');
        localStorage.setItem('solicitudSinResultado', JSON.stringify(solicitud));
        this.router.navigate(['/resultados/registrar']);
    };
    VerComponent.prototype.modificar = function (solicitud) {
        console.log(solicitud);
        localStorage.removeItem('solicitudesConResultadosaModificar');
        localStorage.setItem('solicitudesConResultadosaModificar', JSON.stringify(solicitud));
        this.router.navigate(['/resultados/modificar']);
    };
    VerComponent.prototype.ver_actualizaciones = function (solicitud) {
        console.log(solicitud.institucion);
        localStorage.removeItem('solicitudesConResultadosaModificar');
        localStorage.setItem('solicitudesConResultadosaModificar', JSON.stringify(solicitud));
        this.router.navigate(['/resultados/ver-actualizaciones']);
    };
    VerComponent.prototype.mostrarpdf = function (solicitud) {
        localStorage.removeItem('solicitudaimprimir');
        localStorage.setItem('solicitudaimprimir', JSON.stringify(solicitud));
    };
    VerComponent.prototype.exportPdf = function () {
        window.location.href = 'http://localhost:8080/jasperserver/rest_v2/reports/reports/solicitudes.pdf?am_usuario=' + this.currentUser.personal_laboratorio.persona.am + '&cedula=' + this.form.cedula + '&ap_usuario=' + this.currentUser.personal_laboratorio.persona.ap + '&nombre_usuario=' + this.currentUser.personal_laboratorio.persona.nombre + '&fecha_inicio=' + this.form.fecha_inicio + '&fecha_fin=' + this.form.fecha_fin + '&estado_solicitud=' + this.form.estado_solicitud + '&resultados=' + this.form.resultados + '&j_username=' + 'jasperadmin' + '&j_password=' + 'jasperadmin';
        /*
        let examenes=""
        let doc = new jsPDF();
      let col = ["#", "Paciente", "Estado","Fecha","Analisis"];
      let rows = [];
      for(let i=0; i<this.analisisSinResultados.length; i++){
        examenes=""
        if(this.analisisSinResultados[i].examenes_solicitados.length>0){
          for(let j=0;j<this.analisisSinResultados[i].examenes_solicitados.length; j++){
            console.log(i+" "+j)
            console.log(this.analisisSinResultados[i].examenes_solicitados.length)
      examenes=examenes+this.analisisSinResultados[i].examenes_solicitados[j].precio_examen.examen.nombre+"\n"
          }
        }
        let temp = [i+1,this.analisisSinResultados[i].nombres_paciente,this.analisisSinResultados[i].estado,this.analisisSinResultados[i].fecha,examenes];
        rows.push(temp);
      }
      doc.autoTable(col, rows);
      doc.save('analisisConResultados.pdf');
      */
    };
    VerComponent.prototype.buscar_por_fecha = function (fech) {
        var _this = this;
        console.log(fech);
        this.solicitudesService.filtrarPorFechaSolicitud(fech).subscribe(function (data) {
            console.log(data);
            _this.analisisSinResultados = data;
            for (var i = 0; i < _this.analisisSinResultados.length; i++) {
                console.log(_this.analisisSinResultados[i].examenes_solicitados.length);
                _this.analisisSinResultados[i].nombres_paciente = _this.analisisSinResultados[i].paciente.persona.nombre + " " + _this.analisisSinResultados[i].paciente.persona.ap + " " + _this.analisisSinResultados[i].paciente.persona.am;
                // this.solicitudes[i].fecha_entrega=this.datePipe.transform(this.solicitudes[i].fecha_entrega,"dd/MM/yyyy")
            }
        });
    };
    VerComponent.prototype.buscar_por_rango_fechas = function () {
        var _this = this;
        this.solicitudesService.filtrarPorRangoFecha(this.form.fecha_inicio, this.form.fecha_fin).subscribe(function (data) {
            console.log(data);
            _this.analisisSinResultados = data;
            for (var i = 0; i < _this.analisisSinResultados.length; i++) {
                console.log(_this.analisisSinResultados[i].examenes_solicitados.length);
                _this.analisisSinResultados[i].nombres_paciente = _this.analisisSinResultados[i].paciente.persona.nombre + " " + _this.analisisSinResultados[i].paciente.persona.ap + " " + _this.analisisSinResultados[i].paciente.persona.am;
                // this.solicitudes[i].fecha_entrega=this.datePipe.transform(this.solicitudes[i].fecha_entrega,"dd/MM/yyyy")
            }
        });
    };
    VerComponent.prototype.busca_pacientes = function () {
        var _this = this;
        console.log(this.form.caracter_nombre);
        this.pacientesService.buscarPacientePorCaracterDeNombres(this.form.caracter_nombre, this.form.resultados).subscribe(function (data) {
            _this.pacientes = data;
            for (var i = 0; i < _this.pacientes.length; i++) {
                _this.pacientes[i].nombres = _this.pacientes[i].persona.nombre + " " + _this.pacientes[i].persona.ap + " " + _this.pacientes[i].persona.am;
                // this.pacientes[i].fnac=this.datePipe.transform(this.pacientes[i].fnac,"dd-MM-yyyy")
            }
            console.log(_this.pacientes);
        }); //----------------------------------
        for (var i = 0; i < this.pacientes.length; i++) {
            if (this.pacientes[i].nombres == this.form.caracter_nombre) {
                this.form.cedula = this.pacientes[i].cedula;
            }
            else {
                this.form.cedula = '';
            }
        }
        console.log(this.form.cedula);
        if (this.form.cedula != '' || this.form.caracter_nombre == '') {
            this.solicitudesService.filtrarPaciente(this.form.cedula, this.form.fech, this.form.fecha_inicio, this.form.fecha_fin, this.form.estado_solicitud, this.form.resultados).subscribe(function (data) {
                console.log(data);
                console.log(_this.form.cedula);
                _this.analisisSinResultados = data;
                for (var i = 0; i < _this.analisisSinResultados.length; i++) {
                    _this.analisisSinResultados[i].nombres_paciente = _this.analisisSinResultados[i].paciente.persona.nombre + " " + _this.analisisSinResultados[i].paciente.persona.ap + " " + _this.analisisSinResultados[i].paciente.persona.am;
                }
            });
        }
    };
    VerComponent.prototype.filtro_completo = function () {
        //console.log(this.form.fech)
        var _this = this;
        console.log(this.form.resultados);
        this.solicitudesService.filtrarPaciente(this.form.cedula, this.form.fech, this.form.fecha_inicio, this.form.fecha_fin, this.form.estado_solicitud, this.form.resultados).subscribe(function (data) {
            console.log(data);
            console.log(_this.form.cedula);
            _this.analisisSinResultados = data;
            for (var i = 0; i < _this.analisisSinResultados.length; i++) {
                _this.analisisSinResultados[i].nombres_paciente = _this.analisisSinResultados[i].paciente.persona.nombre + " " + _this.analisisSinResultados[i].paciente.persona.ap + " " + _this.analisisSinResultados[i].paciente.persona.am;
            }
        });
    };
    VerComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-ver',
            template: __webpack_require__(/*! ./ver.component.html */ "./src/app/resultados/ver/ver.component.html"),
            styles: [__webpack_require__(/*! ./ver.component.css */ "./src/app/resultados/ver/ver.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_common__WEBPACK_IMPORTED_MODULE_6__["DatePipe"], _pacientes_pacientes_service__WEBPACK_IMPORTED_MODULE_4__["PacientesService"], _solicitudes_solicitudes_service__WEBPACK_IMPORTED_MODULE_3__["SolicitudesService"], _resultados_service__WEBPACK_IMPORTED_MODULE_1__["ResultadosService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], VerComponent);
    return VerComponent;
}());



/***/ })

}]);
//# sourceMappingURL=app-resultados-resultados-module.js.map