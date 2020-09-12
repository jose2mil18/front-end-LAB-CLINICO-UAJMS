(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["app-examenes-examenes-module"],{

/***/ "./node_modules/primeng/components/inputtext/inputtext.js":
/*!****************************************************************!*\
  !*** ./node_modules/primeng/components/inputtext/inputtext.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var forms_1 = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var common_1 = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
var InputText = /** @class */ (function () {
    function InputText(el, ngModel) {
        this.el = el;
        this.ngModel = ngModel;
    }
    InputText.prototype.ngDoCheck = function () {
        this.updateFilledState();
    };
    //To trigger change detection to manage ui-state-filled for material labels when there is no value binding
    InputText.prototype.onInput = function (e) {
        this.updateFilledState();
    };
    InputText.prototype.updateFilledState = function () {
        this.filled = (this.el.nativeElement.value && this.el.nativeElement.value.length) ||
            (this.ngModel && this.ngModel.model);
    };
    __decorate([
        core_1.HostListener('input', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], InputText.prototype, "onInput", null);
    InputText = __decorate([
        core_1.Directive({
            selector: '[pInputText]',
            host: {
                '[class.ui-inputtext]': 'true',
                '[class.ui-corner-all]': 'true',
                '[class.ui-state-default]': 'true',
                '[class.ui-widget]': 'true',
                '[class.ui-state-filled]': 'filled'
            }
        }),
        __param(1, core_1.Optional()),
        __metadata("design:paramtypes", [core_1.ElementRef, forms_1.NgModel])
    ], InputText);
    return InputText;
}());
exports.InputText = InputText;
var InputTextModule = /** @class */ (function () {
    function InputTextModule() {
    }
    InputTextModule = __decorate([
        core_1.NgModule({
            imports: [common_1.CommonModule],
            exports: [InputText],
            declarations: [InputText]
        })
    ], InputTextModule);
    return InputTextModule;
}());
exports.InputTextModule = InputTextModule;
//# sourceMappingURL=inputtext.js.map

/***/ }),

/***/ "./node_modules/primeng/dropdown.js":
/*!******************************************!*\
  !*** ./node_modules/primeng/dropdown.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* Shorthand */

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__(/*! ./components/dropdown/dropdown */ "./node_modules/primeng/components/dropdown/dropdown.js"));

/***/ }),

/***/ "./node_modules/primeng/inputtext.js":
/*!*******************************************!*\
  !*** ./node_modules/primeng/inputtext.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* Shorthand */

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__(/*! ./components/inputtext/inputtext */ "./node_modules/primeng/components/inputtext/inputtext.js"));

/***/ }),

/***/ "./src/app/examenes/examenes.module.ts":
/*!*********************************************!*\
  !*** ./src/app/examenes/examenes.module.ts ***!
  \*********************************************/
/*! exports provided: ExamenesModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExamenesModule", function() { return ExamenesModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _listar_listar_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./listar/listar.component */ "./src/app/examenes/listar/listar.component.ts");
/* harmony import */ var _registrar_registrar_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./registrar/registrar.component */ "./src/app/examenes/registrar/registrar.component.ts");
/* harmony import */ var _examenes_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./examenes.routing.module */ "./src/app/examenes/examenes.routing.module.ts");
/* harmony import */ var _examenes_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./examenes.service */ "./src/app/examenes/examenes.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ng-select/ng-select */ "./node_modules/@ng-select/ng-select/fesm5/ng-select.js");
/* harmony import */ var primeng_table__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! primeng/table */ "./node_modules/primeng/table.js");
/* harmony import */ var primeng_table__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(primeng_table__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var primeng_inputtext__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! primeng/inputtext */ "./node_modules/primeng/inputtext.js");
/* harmony import */ var primeng_inputtext__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(primeng_inputtext__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! primeng/button */ "./node_modules/primeng/button.js");
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(primeng_button__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var primeng_dropdown__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! primeng/dropdown */ "./node_modules/primeng/dropdown.js");
/* harmony import */ var primeng_dropdown__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(primeng_dropdown__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _listar_solicitados_listar_solicitados_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./listar-solicitados/listar-solicitados.component */ "./src/app/examenes/listar-solicitados/listar-solicitados.component.ts");
/* harmony import */ var _modificar_modificar_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./modificar/modificar.component */ "./src/app/examenes/modificar/modificar.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









//import { BrowserModule } from '@angular/platform-browser';
//import {BrowserAnimationsModule} from '@angular/platform-browser/animations';


//import {DataTableModule} from 'primeng/primeng';



var ExamenesModule = /** @class */ (function () {
    function ExamenesModule() {
    }
    ExamenesModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                primeng_inputtext__WEBPACK_IMPORTED_MODULE_9__["InputTextModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _examenes_routing_module__WEBPACK_IMPORTED_MODULE_4__["ExamenesRoutingModule"],
                _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_7__["NgSelectModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormsModule"],
                primeng_table__WEBPACK_IMPORTED_MODULE_8__["TableModule"],
                primeng_button__WEBPACK_IMPORTED_MODULE_10__["ButtonModule"],
                primeng_dropdown__WEBPACK_IMPORTED_MODULE_11__["DropdownModule"]
            ],
            declarations: [_listar_listar_component__WEBPACK_IMPORTED_MODULE_2__["ListarComponent"], _registrar_registrar_component__WEBPACK_IMPORTED_MODULE_3__["RegistrarComponent"], _listar_solicitados_listar_solicitados_component__WEBPACK_IMPORTED_MODULE_12__["ListarSolicitadosComponent"], _modificar_modificar_component__WEBPACK_IMPORTED_MODULE_13__["ModificarComponent"]],
            providers: [_examenes_service__WEBPACK_IMPORTED_MODULE_5__["ExamenesService"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["DatePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["TitleCasePipe"]]
        })
    ], ExamenesModule);
    return ExamenesModule;
}());



/***/ }),

/***/ "./src/app/examenes/examenes.routing.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/examenes/examenes.routing.module.ts ***!
  \*****************************************************/
/*! exports provided: ExamenesRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExamenesRoutingModule", function() { return ExamenesRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _registrar_registrar_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./registrar/registrar.component */ "./src/app/examenes/registrar/registrar.component.ts");
/* harmony import */ var _listar_listar_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./listar/listar.component */ "./src/app/examenes/listar/listar.component.ts");
/* harmony import */ var _listar_solicitados_listar_solicitados_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./listar-solicitados/listar-solicitados.component */ "./src/app/examenes/listar-solicitados/listar-solicitados.component.ts");
/* harmony import */ var _modificar_modificar_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modificar/modificar.component */ "./src/app/examenes/modificar/modificar.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var routes = [
    {
        path: 'listar',
        component: _listar_listar_component__WEBPACK_IMPORTED_MODULE_3__["ListarComponent"]
    },
    {
        path: 'listar-examenes-solicitados',
        component: _listar_solicitados_listar_solicitados_component__WEBPACK_IMPORTED_MODULE_4__["ListarSolicitadosComponent"]
    },
    {
        path: 'registrar',
        component: _registrar_registrar_component__WEBPACK_IMPORTED_MODULE_2__["RegistrarComponent"]
    },
    {
        path: 'modificar',
        component: _modificar_modificar_component__WEBPACK_IMPORTED_MODULE_5__["ModificarComponent"]
    },
    {
        path: '',
        redirectTo: 'normal',
        pathMatch: 'full'
    }
];
var ExamenesRoutingModule = /** @class */ (function () {
    function ExamenesRoutingModule() {
    }
    ExamenesRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], ExamenesRoutingModule);
    return ExamenesRoutingModule;
}());



/***/ }),

/***/ "./src/app/examenes/listar-solicitados/listar-solicitados.component.css":
/*!******************************************************************************!*\
  !*** ./src/app/examenes/listar-solicitados/listar-solicitados.component.css ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "input{\r\n    width:100%\r\n}"

/***/ }),

/***/ "./src/app/examenes/listar-solicitados/listar-solicitados.component.html":
/*!*******************************************************************************!*\
  !*** ./src/app/examenes/listar-solicitados/listar-solicitados.component.html ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section class=\"content\">\n    <div class=\"block-header\">\n      <div class=\"row\">\n        <div class=\"col-lg-7 col-md-6 col-sm-12\">\n          <h2>Examenes Solicitados\n            \n          </h2>\n        </div>\n        <div class=\"col-lg-5 col-md-6 col-sm-12\">\n          <ul class=\"breadcrumb float-md-right\">\n            <li class=\"breadcrumb-item\"><a routerLink=\"/dashboard/main\"><i class=\"zmdi zmdi-home\"></i> </a></li>\n            <li class=\"breadcrumb-item\"><a href=\"javascript:void(0);\">examenes</a></li>\n             <li class=\"breadcrumb-item active\">listar-examenes-solicitados</li>\n          </ul>\n        </div>\n      </div>\n    </div>\n    <div class=\"container-fluid\">\n      <!-- Basic Examples -->\n      <div class=\"row clearfix\">\n        <div class=\"col-lg-12\">\n          <div class=\"card\">\n            <div class=\"header\">\n              \n             <ul class=\"header-dropdown\">\n                <li class=\"dropdown\"> <a href=\"javascript:void(0);\" class=\"dropdown-toggle\" data-toggle=\"dropdown\" role=\"button\" aria-haspopup=\"true\" aria-expanded=\"false\"> <i class=\"zmdi zmdi-more\"></i> </a>\n                  <ul class=\"dropdown-menu dropdown-menu-right slideUp float-right\">\n                    <li><a href=\"javascript:void(0);\">Action</a></li>\n                    <li><a href=\"javascript:void(0);\">Another action</a></li>\n                    <li><a href=\"javascript:void(0);\">Something else</a></li>\n                  </ul>\n                </li>\n                <li class=\"remove\">\n                  <a role=\"button\" class=\"boxs-close\"><i class=\"zmdi zmdi-close\"></i></a>\n                </li>\n              </ul>\n            </div>\n            <div class=\"body\">\n            \n               \n              \n      <!---          \n  <div class=\"row\">\n                <div class=\"col-md-3\">\n                    <div class=\"input-group search\">\n                      <input id=\"pac\" type=\"text\" class=\"form-control\" placeholder=\"buscar por nombre de paciente\" (input)=\"buscaPaciente($event)\">\n                      <span class=\"input-group-addon\">\n                                            <i class=\"zmdi zmdi-search\"></i>\n                                        </span>\n                    </div>\n    \n                    \n                  </div>\n                  <div class=\"col-md-3\">\n                      <div class=\"input-group\">\n                                          <span class=\"input-group-addon\">\n                                              <i class=\"zmdi zmdi-calendar\"></i>\n                                          </span>\n                        <input   [(ngModel)]=\"form.fech\" (input)=\"buscar_por_fecha($event)\" name=\"fech\" id=\"fech\" type=\"text\" class=\" dtp-btn-ok form-control fechapicker\" placeholder=\"buscar por fecha\">\n                        <span class=\"input-group-addon\" >\n                            <i class=\"zmdi zmdi-search\" (click)=\"buscar_por_fecha()\"></i>\n                        </span>\n                      </div>\n                    \n                    </div>\n  \n  </div>\n  -->\n  <!--\n  <p-dataTable #dt styleClass=\"table table-hover\" [value]=\"solicitudes\" [paginator]=\"true\" [rows]=\"5\" [pageLinks]=\"2\" [rowsPerPageOptions]=\"[5,10,20]\" >\n      <p-column header = \"#\"  >\n          <ng-template  let-i=\"rowIndex\" pTemplate=\"body\">\n            {{i+1}}\n          </ng-template>\n        \n      </p-column>  \n  \n    <p-column field=\"nombres_paciente\" header=\"Paciente\" [filter]=\"true\" [sortable]=\"true\">\n      \n    </p-column>\n    <p-column field=\"estado\" header=\"Estado\"  [sortable]=\"true\" [filter]=\"true\">\n       \n    </p-column>\n  \n    <p-column header = \"Analisis\" >\n      <ng-template  let-solicitud=\"rowData\" pTemplate=\"body\">\n        <ng-select  placeholder=\"mostrar analisis\">\n          <ng-option *ngFor=\"let e of solicitud.examenes_solicitados\" [value]=\"e\"  >{{e.precio_examen.examen.nombre}}</ng-option>\n        \n        </ng-select>\n       </ng-template>\n    \n  </p-column>\n            <p-column field=\"fecha\" header=\"Fecha\" [filter]=\"true\" [sortable]=\"true\">\n            \n            </p-column>\n            <p-column header = \"Edit\">\n                <ng-template  let-solicitud=\"rowData\" pTemplate=\"body\">\n                  <a (click)=\"actualizar(solicitud)\" routerLink=\"/solicitudes/modificar\" class=\" waves-effect waves-float waves-green\"><i class=\"zmdi zmdi-edit\"></i></a>\n                </ng-template>\n              \n            </p-column>\n           \n        </p-dataTable>\n      --> \n      <!--\n        select s.cod_solicitud, s.fecha, s.fecha_entrega, s.cedula_paciente, s.cedula_usuario, s.estado, s.cod_institucion, s.gestion, s.cod_doctor_solicitante, s.estado_solicitud \n  from solicitud s, pacientes pa, persona pe where s.cedula_paciente=pa.cedula and pe.cod_persona=pa.cod_persona and (pe.nombre ilike '%sanch%' or pe.ap ilike '%sanch%' or pe.am ilike '%sanch%');\n  \n      -->\n  \n  \n  \n  \n    <!--  \n  <p-table id=\"table\" #dd [value]=\"solicitudes\" [columns]=\"cols\" [paginator]=\"true\" [rows]=\"5\" [pageLinks]=\"2\" [rowsPerPageOptions]=\"[5,10,20]\"  selectionMode=\"multiple\">\n    \n    <ng-template pTemplate=\"caption\">\n        \n      <div class=\"ui-helper-clearfix\" style=\"text-align: left\">\n       \n        <button type=\"button\" pButton icon=\"pi pi-file-o\" iconPos=\"left\" label=\"CSV\" (click)=\"dd.exportCSV()\" style=\"margin-right: 0.5em;\"></button>\n        <button type=\"button\" pButton icon=\"pi pi-file-pdf\" iconPos=\"left\" label=\"PDF\" (click)=\"captureScreen()\" class=\"btn btn-warning\"></button>\n         \n        </div>\n  </ng-template>\n    <ng-template pTemplate=\"header\" let-solicitud=\"rowData\">\n        <tr><th style=\"width:30px\">#</th>\n          <th style=\"width:260px\">Examen</th>\n          <th style=\"width:150px\">Area</th>\n            <th *ngFor=\"let col of cols\" >\n                {{col.header}}\n            </th>\n        </tr>\n        <tr>\n          <th></th>\n          \n          <th></th>\n          <th>\n            <ng-select   placeholder=\"Selecciona un area\"   [(ngModel)]=\"area\" class=\"\" (ngModelChange)=\"filtro_por_area()\"   name=\"area\" required>\n             <ng-container >\n              <ng-option  *ngFor=\" let a of areas\" [value]=\"a\" >{{a.nombre}}</ng-option>\n            </ng-container>\n             </ng-select> </th>\n            <th  *ngFor=\"let col of cols\" [ngSwitch]=\"col.field\">\n              \n                <ng-select  *ngSwitchCase=\"'estado_solicitud'\" placeholder=\"Selecciona un estado\"   class=\"\" (ngModelChange)=\"filtro_completo()\"   name=\"estado\" required>\n                    <ng-option  *ngFor=\" let rol of brands\" [value]=\"rol.value\" >{{rol.label}}</ng-option>\n                   \n                   </ng-select>\n                      <ng-container  *ngSwitchCase=\"'fecha'\">\n                <input  [(ngModel)]=\"form.fech\" (ngModelChange)=\"buscar_por_fecha($event)\" name=\"fech\" type=\"date\" (click)=\"buscar_por_fecha($event)\" placeholder=\"fecha_inicio\">\n              \n                <a  (click)=\"registrar(s)\" data-toggle=\"modal\" data-target=\"#addevent\"  class=\" waves-effect waves-float waves-green\"><i class=\"zmdi zmdi-edit\"></i></a> \n              </ng-container>\n            </th>\n         \n        </tr>\n    </ng-template>\n    <ng-template pTemplate=\"body\"   let-i=\"rowIndex\" let-solicitud>\n        <tr>\n          <td>\n                  {{i+1}}\n          \n          </td>\n          <td>  \n            \n            <ng-select  placeholder=\"mostrar analisis\">\n              <ng-option *ngFor=\"let e of solicitud.examenes_solicitados\" [value]=\"e\"  >{{e.precio_examen.examen.nombre}}</ng-option>\n            \n            </ng-select>\n            \n          -->\n          \n          <!--   \n          <tr *ngFor=\"let e of solicitud.examenes_solicitados\" >\n            <td >{{e.precio_examen.examen.nombre}}</td>\n          </tr>\n           </td>\n           <td> <tr *ngFor=\"let e of solicitud.examenes_solicitados\" >\n            \n              <td>{{e.precio_examen.examen.area.nombre}}</td>\n            </tr> </td>\n  \n            <td *ngFor=\"let col of cols; index as i\" >\n                {{solicitud[col.field]}}\n            </td>\n  \n          -->\n           <!--  \n            <td>  \n                <ng-select  placeholder=\"mostrar analisis\">\n                  <ng-option *ngFor=\"let e of solicitud.examenes_solicitados\" [value]=\"e\"  >{{e.precio_examen.examen.nombre}}</ng-option>\n                \n                </ng-select>\n                \n               </td>\n               <td  class=\"text-center\">\n                 <ng-container *ngIf=\"solicitud.estado=='Sin Registrar'\">\n                  <a (click)=\"actualizar(solicitud)\" routerLink=\"/solicitudes/modificar\" class=\" waves-effect waves-float waves-green\"><i class=\"zmdi zmdi-edit\"></i></a>\n                </ng-container>\n              </td>\n            \n        </tr>\n    </ng-template>\n      \n      \n  </p-table>\n  -->\n  <!-- -------------------------------------------------------------------------------------------------------------------->\n  \n  \n\n\n  <p-table id=\"table\" #dd [value]=\"examenes_solicitados\" [columns]=\"cols\" [paginator]=\"true\" [rows]=\"10\" [pageLinks]=\"2\" [rowsPerPageOptions]=\"[5,10,20]\"  selectionMode=\"multiple\">\n    \n    <ng-template pTemplate=\"caption\">\n        \n      <div class=\"ui-helper-clearfix\" style=\"text-align: left\">\n       \n   \n        <button type=\"button\" pButton icon=\"pi pi-file\" iconPos=\"left\" label=\"PDF\" (click)=\"exportPdf()\" class=\"btn btn-warning\"></button>\n        <ng-select   id=\"item\" placeholder=\"Agrupar\" [(ngModel)]=\"grupo\" name=\"item\" style=\"margin-right: 0.5em; width: 120px; float : left;\"  (ngModelChange)=\"klp($event)\"   >\n          <ng-container *ngFor=\"let s of grupos\"> \n            <ng-option [value]=\"s\" id=\"codkfjasd\">{{s.label}}</ng-option>\n          </ng-container>\n      \n       \n         </ng-select>\n        </div>\n  </ng-template>\n    <ng-template pTemplate=\"header\" let-examen_solicitado=\"rowData\">\n        <tr><th style=\"width:44px\">#</th>\n          \n          <th style=\"width:260px\">Paciente</th>\n          <th style=\"width:260px\">Examen</th>\n          <th style=\"width:150px\">Area</th>\n            <th >\n               Fecha\n            </th>\n            <th>Estado</th>\n        </tr>\n        <tr>\n          <th></th>\n          <th></th>\n          <th>   <input pInputText  [formControl]=\"control\" name=\"caracter_nombre_examen\" type=\"text\"placeholder=\"\">\n          </th>\n          <th>\n            <ng-select   placeholder=\"Selecciona un area\"   [(ngModel)]=\"form.nombre_area\" class=\"\" (ngModelChange)=\"filtro_completo(formulario)\"   name=\"area\" required>\n           \n              <ng-option  *ngFor=\" let a of areas\" [value]=\"a.nombre\" >{{a.nombre}}</ng-option>\n           \n             </ng-select> \n            </th>\n            <th>\n              <ng-container  >\n   <div class=\"ui-inputgroup\">\n                  <span  style=\"width: 20%;\" class=\"ui-inputgroup-addon\" data-toggle=\"modal\" data-target=\"#addevent\"><i class=\"pi pi-calendar\" style=\"line-height: 1.25;\"></i></span>\n                  <input  style=\"width: 80%;\" [(ngModel)]=\"form.fech\" pInputText data-date-format=\"YYYYY-MMMM-DD\" (ngModelChange)=\"filtro_completo(formulario)\" name=\"fech\" type=\"date\"  placeholder=\"fecha_inicio\">         \n              </div>\n              \n              </ng-container>\n  \n            </th>\n            <th>\n              \n                <ng-select   placeholder=\"Selecciona un estado\"  [(ngModel)]=\"this.form.estado_solicitud\" class=\"\" (ngModelChange)=\"filtro_completo(formulario)\"   name=\"estado\" required>\n                    <ng-option  *ngFor=\" let rol of brands\" [value]=\"rol.value\" >{{rol.label}}</ng-option>\n                   \n                   </ng-select>\n                   <!--  \n                      <ng-container  *ngSwitchCase=\"'fecha'\">\n                <input  [(ngModel)]=\"form.fech\" (ngModelChange)=\"buscar_por_fecha($event)\" name=\"fech\" type=\"date\" (click)=\"buscar_por_fecha($event)\" placeholder=\"fecha_inicio\">\n              \n                <a  (click)=\"registrar(s)\" data-toggle=\"modal\" data-target=\"#addevent\"  class=\" waves-effect waves-float waves-green\"><i class=\"zmdi zmdi-edit\"></i></a> \n              </ng-container>\n            -->\n            </th>\n         \n        </tr>\n    </ng-template>\n    <ng-template pTemplate=\"body\"   let-rowIndex=\"rowIndex\" let-examen_solicitado>\n        <tr>\n          <td>\n                  {{rowIndex+1}}  \n          \n          </td>\n          <td>\n            {{examen_solicitado.solicitud.paciente.persona.nombre}} {{examen_solicitado.solicitud.paciente.persona.ap}} {{examen_solicitado.solicitud.paciente.persona.am}}  \n    \n    </td>\n          <td>  \n            {{examen_solicitado.precio_examen.examen.nombre}}\n            <!--\n            <ng-select  placeholder=\"mostrar analisis\">\n              <ng-option *ngFor=\"let e of solicitud.examenes_solicitados\" [value]=\"e\"  >{{e.precio_examen.examen.nombre}}</ng-option>\n            \n            </ng-select>\n            \n          -->\n          \n          \n           </td>\n           <td> \n             \n            {{examen_solicitado.precio_examen.examen.area.nombre}}\n            </td>\n  \n            <td  >\n                {{examen_solicitado.solicitud.fecha | date: 'dd-MM-yyyy'}}\n            </td>\n           <!--  \n            <td>  \n                <ng-select  placeholder=\"mostrar analisis\">\n                  <ng-option *ngFor=\"let e of solicitud.examenes_solicitados\" [value]=\"e\"  >{{e.precio_examen.examen.nombre}}</ng-option>\n                \n                </ng-select>\n                \n               </td>\n               <td  class=\"text-center\">\n                 <ng-container *ngIf=\"solicitud.estado=='Sin Registrar'\">\n                  <a (click)=\"actualizar(solicitud)\" routerLink=\"/solicitudes/modificar\" class=\" waves-effect waves-float waves-green\"><i class=\"zmdi zmdi-edit\"></i></a>\n                </ng-container>\n              </td>\n            -->\n  \n            <td>\n                {{examen_solicitado.solicitud.estado_solicitud}}\n              </td>\n        \n    </ng-template>\n      \n      \n  </p-table>\n \n\n  \n  \n  \n  \n  <!--\n                <table class=\"table table-bordered table-striped table-hover js-basic-example dataTable\">\n                  \n                  <thead>\n                    <tr>\n                        <th>#</th>\n                        \n                        <th>PACIENTE</th>\n                        <th>ANALISIS</th>\n                        <th>ESTADO</th>\n                        <TH>FECHA</TH>\n                        <TH>MODIFICAR</TH>\n                        \n                    </tr>\n                  </thead>\n                \n                  <tbody>\n                      <tr *ngFor=\"let s of solicitudes | paginate: {itemsPerPage: 5, currentPage: pageActual}; index as i\">\n                          <th scope=\"row\">{{i+1}}</th>\n                       \n                          <td>{{s.paciente.persona.nombre}} {{s.paciente.persona.ap}} {{s.paciente.persona.am}}</td>\n                          <td> \n                            \n                            \n                                  <ng-select  placeholder=\"mostrar analisis \">\n                                   <ng-option *ngFor=\"let e of s.examenes_solicitados\" [value]=\"e.precio_examen.examen.nombre\"  >{{e.precio_examen.examen.nombre}}</ng-option>\n                                 \n                                 </ng-select>\n                              \n                          </td>\n                            <td>{{s.estado}}</td>\n                            <td>{{s.fecha}}</td>\n                            <td><a  *ngIf=\"s.estado==='Sin Registrar'\" routerLink=\"/solicitudes/modificar\" (click)=\"actualizar(s)\"  class=\" waves-effect waves-float waves-green\"><i class=\"zmdi zmdi-edit\"></i></a>\n                        \n                            </td>\n                        </tr>\n                    \n                   \n                </tbody>\n                </table>\n                <pagination-controls (pageChange)=\"pageActual = $event\"   previousLabel=\"Atras\" nextLabel=\"Siguiente\"></pagination-controls>\n              -->\n        \n     \n            </div>\n  \n          </div>\n        </div>\n      </div>\n      <!-- #END# Basic Examples -->\n      <!-- Exportable Table -->\n      \n      <!-- #END# Exportable Table -->\n    </div>\n  </section>\n  <div class=\"modal fade\" id=\"addevent\" tabindex=\"-1\" role=\"dialog\">\n    <div class=\"modal-dialog\" role=\"document\">\n      <div class=\"modal-content\">\n        <div class=\"modal-header\">\n          <h4 class=\"title\" id=\"defaultModalLabel\" ></h4>\n        </div>\n        <div class=\"modal-body\">\n             <form  ngNativeValidate  #formulario=\"ngForm\">\n            <div class=\" row clearfix\">\n              \n    <div class=\"col-lg-4\">\n              <label for=\"fecha_inicio\">Desde:</label>\n              </div>\n              \n    <div class=\"col-lg-8\">\n              <input id=\"fecha_inicio\" class=\"form-control\" [(ngModel)]=\"form.fecha_inicio\" name=\"fecha_inicio\" type=\"date\" placeholder=\"fecha_inicio\" required max=\"form.fecha_fin\">\n          \n                    </div>\n  \n                    <div class=\"col-lg-4\">\n                        <label for=\"fecha_fin\">Hasta:</label>\n                        </div>\n                        \n              <div class=\"col-lg-8\">\n                        <input id=\"fecha_fin\" class=\"form-control\" [(ngModel)]=\"form.fecha_fin\"  name=\"fecha_fin\" type=\"date\"  placeholder=\"fecha_final\" required>\n                    \n                              </div>\n                </div>\n        <div class=\"modal-footer\">\n          <button type=\"submit\" (click)=\"filtro_completo(formulario)\" id=\"a\" class=\"btn btn-primary btn-round waves-effect\" >Guardar</button>\n          <button type=\"button\" class=\"btn btn-simple btn-round waves-effect\" data-dismiss=\"modal\">Salir</button>\n        </div>\n        </form>\n      </div>\n    </div>\n  </div>\n  </div>\n"

/***/ }),

/***/ "./src/app/examenes/listar-solicitados/listar-solicitados.component.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/examenes/listar-solicitados/listar-solicitados.component.ts ***!
  \*****************************************************************************/
/*! exports provided: ListarSolicitadosComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListarSolicitadosComponent", function() { return ListarSolicitadosComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _models__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../models */ "./src/app/models/index.ts");
/* harmony import */ var _solicitudes_solicitudes_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../solicitudes/solicitudes.service */ "./src/app/solicitudes/solicitudes.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var ListarSolicitadosComponent = /** @class */ (function () {
    function ListarSolicitadosComponent(solicitudesService, datePipe, router) {
        var _this = this;
        this.solicitudesService = solicitudesService;
        this.datePipe = datePipe;
        this.router = router;
        this.item = "Agrupar";
        this.control = new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]('');
        this.bandera = true;
        this.grupo = {
            label: 'Agrupar',
            seleccionador: '',
            agrupador: ''
        };
        this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
        this.date = new Date();
        this.fechita = this.datePipe.transform(this.date, "dd-MM-yyyy");
        this.control.valueChanges.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["debounceTime"])(450)).subscribe(function (value) {
            console.log("hola" + value);
            _this.form.caracter_nombre_examen = value;
        });
        this.area = new _models__WEBPACK_IMPORTED_MODULE_2__["Area"];
        this.solicitudesService.getAllAreas().subscribe(function (data) {
            _this.areas = data;
            console.log(_this.areas);
        });
        this.form = {
            fech: '',
            fecha_inicio: '2019-03-03',
            fecha_fin: this.datePipe.transform(new Date(), "yyyy-MM-dd"),
            caracter_nombre_examen: '',
            estado_solicitud: '',
            cedula: '',
            prueba: 'Agrupar',
            nombre_area: ''
        };
        this.control.valueChanges.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["debounceTime"])(450)).subscribe(function (value) {
            console.log("hola" + value);
            _this.form.caracter_nombre_examen = value;
            _this.filtro_completo2();
        });
        this.paciente = JSON.parse(localStorage.getItem('paciente'));
        this.examenes_solicitados = this.paciente.examenes_solicitados;
        this.solicitudesService.filtrarSolicitudes_de_Paciente(this.form.cedula, this.area.nombre, this.form.caracter_nombre_examen, this.form.fech, this.form.fecha_inicio, this.form.fecha_fin, this.form.estado_solicitud).subscribe(function (data) {
            _this.examenes_solicitados = data;
            console.log(_this.solicitudes);
        });
    }
    ListarSolicitadosComponent.prototype.ngOnInit = function () {
        this.brands = [
            { label: 'Entregado', value: 'Entregado' },
            { label: 'Recibido', value: 'Recibido' }
        ];
        this.grupos = [
            { label: 'Examen', seleccionador: 'e.nombre', agrupador: 'nombre' },
            { label: 'Area', seleccionador: 'a.nombre', agrupador: 'nombre' },
            { label: 'Paciente', seleccionador: 's.cedula_paciente', agrupador: 'cedula_paciente' },
            { label: 'Estado', seleccionador: 's.estado_solicitud', agrupador: 'estado_solicitud' }
        ];
        this.cols = [
            { field: 'fecha', header: 'Fecha' }
        ];
    };
    ListarSolicitadosComponent.prototype.filtro_completo = function (formu) {
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
            console.log(this.form.fech);
            console.log(this.area.nombre + " " + this.area.cod_area);
            this.solicitudesService.filtrarSolicitudes_de_Paciente(this.form.cedula, this.form.nombre_area, this.form.caracter_nombre_examen, this.form.fech, this.form.fecha_inicio, this.form.fecha_fin, this.form.estado_solicitud).subscribe(function (data) {
                _this.examenes_solicitados = data;
            });
        }
    };
    ListarSolicitadosComponent.prototype.filtro_completo2 = function () {
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
        if (($('#fecha_inicio').val() <= $('#fecha_fin').val())) {
            $('#addevent').removeClass('show');
            console.log(this.form.fech);
            console.log(this.area.nombre + " " + this.area.cod_area);
            this.solicitudesService.filtrarSolicitudes_de_Paciente(this.form.cedula, this.form.nombre_area, this.form.caracter_nombre_examen, this.form.fech, this.form.fecha_inicio, this.form.fecha_fin, this.form.estado_solicitud).subscribe(function (data) {
                _this.examenes_solicitados = data;
            });
        }
    };
    ListarSolicitadosComponent.prototype.buscar_por_fecha = function (fech) {
        console.log(fech);
    };
    ListarSolicitadosComponent.prototype.exportPdf = function () {
        window.location.href = 'http://localhost:8080/jasperserver/rest_v2/reports/reports/examenes_solicitados.pdf?am_usuario=' + this.currentUser.personal_laboratorio.persona.am + '&cedula=' + this.form.cedula + '&ap_usuario=' + this.currentUser.personal_laboratorio.persona.ap + '&nombre_usuario=' + this.currentUser.personal_laboratorio.persona.nombre + '&nombre_paciente=' + this.paciente.persona.nombre + '&ap_paciente=' + this.paciente.persona.ap + '&am_paciente=' + this.paciente.persona.am + '&nombre_area=' + this.form.nombre_area + '&fecha_inicio=' + this.form.fecha_inicio + '&fecha_fin=' + this.form.fecha_fin + '&j_username=' + 'jasperadmin' + '&j_password=' + 'jasperadmin';
    };
    ListarSolicitadosComponent.prototype.klp = function (value) {
        console.log(value);
        console.log(this.item);
        localStorage.setItem('grupo', JSON.stringify(this.grupo));
        console.log(this.grupo.seleccionador);
        this.router.navigate(['/reportes/examenes-solicitados']);
    };
    ListarSolicitadosComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-listar-solicitados',
            template: __webpack_require__(/*! ./listar-solicitados.component.html */ "./src/app/examenes/listar-solicitados/listar-solicitados.component.html"),
            styles: [__webpack_require__(/*! ./listar-solicitados.component.css */ "./src/app/examenes/listar-solicitados/listar-solicitados.component.css")]
        }),
        __metadata("design:paramtypes", [_solicitudes_solicitudes_service__WEBPACK_IMPORTED_MODULE_3__["SolicitudesService"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["DatePipe"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], ListarSolicitadosComponent);
    return ListarSolicitadosComponent;
}());



/***/ }),

/***/ "./src/app/examenes/listar/listar.component.css":
/*!******************************************************!*\
  !*** ./src/app/examenes/listar/listar.component.css ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".btn-pequeño{height:1.675rem;min-width:1.675rem;width:1.675rem;padding:0;\r\n    font-size:.9375rem;overflow:hidden;position:relative;line-height:normal}\r\n    .btn-light {\r\n        color: #212529;\r\n        background-color: #f8f9fa;\r\n        border-color: #f8f9fa;\r\n      }\r\n    .modal-login {\t\t\r\n        color: #636363;\r\n        width: 350px;\r\n    }\r\n    .modal-login .modal-content {\r\n        padding: 20px;\r\n        border-radius: 5px;\r\n        border: none;\r\n    }\r\n    .modal-login .modal-header {\r\n        border-bottom: none;   \r\n        position: relative;\r\n        justify-content: center;\r\n    }\r\n    .modal-login h4 {\r\n        text-align: center;\r\n        font-size: 26px;\r\n        margin: 30px 0 -15px;\r\n    }\r\n    .modal-login .form-control:focus {\r\n        border-color: #70c5c0;\r\n    }\r\n    .modal-login .form-control, .modal-login .btn {\r\n        min-height: 40px;\r\n        border-radius: 3px; \r\n    }\r\n    .modal-login .close {\r\n        position: absolute;\r\n        top: -5px;\r\n        right: -5px;\r\n    }\r\n    .modal-login .modal-footer {\r\n     \r\n        text-align: center;\r\n        justify-content: center;\r\n        margin: 0 -20px -20px;\r\n        border-radius: 5px;\r\n        font-size: 13px;\r\n    }\r\n    .modal-login .modal-footer a {\r\n        color: #999;\r\n    }\r\n    .modal-login .avatar {\r\n        position: absolute;\r\n        margin: 0 auto;\r\n        left: 0;\r\n        right: 0;\r\n        top: -70px;\r\n        width: 95px;\r\n        height: 95px;\r\n        border-radius: 50%;\r\n        z-index: 9;\r\n      \r\n    \r\n        box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.1);\r\n    }\r\n    .modal-login.modal-dialog {\r\n        margin-top: 80px;\r\n    }\r\n    .modal-login .btn {\r\n        color: #fff;\r\n        border-radius: 4px;\r\n        text-decoration: none;\r\n        transition: all 0.4s;\r\n        line-height: normal;\r\n        border: none;\r\n    }\r\n    .modal-login .btn:hover, .modal-login .btn:focus {\r\n       \r\n        outline: none;\r\n    }\r\n    .trigger-btn {\r\n        display: inline-block;\r\n        margin: 100px auto;\r\n    }"

/***/ }),

/***/ "./src/app/examenes/listar/listar.component.html":
/*!*******************************************************!*\
  !*** ./src/app/examenes/listar/listar.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section class=\"content\">\n  <div class=\"block-header\">\n    <div class=\"row\">\n      <div class=\"col-lg-7 col-md-6 col-sm-12\">\n        <h2>Examenes\n          \n        </h2>\n      </div>\n      <div class=\"col-lg-5 col-md-6 col-sm-12\">\n        <ul class=\"breadcrumb float-md-right\">\n          <li class=\"breadcrumb-item\"><a routerLink=\"/dashboard/main\"><i class=\"zmdi zmdi-home\"></i> </a></li>\n          <li class=\"breadcrumb-item\"><a href=\"javascript:void(0);\">examenes</a></li>\n           <li class=\"breadcrumb-item active\">listar</li>\n        </ul>\n      </div>\n    </div>\n  </div>\n  <div class=\"container-fluid\">\n    <!-- Basic Examples -->\n    <div class=\"row clearfix\">\n      <div class=\"col-lg-12\">\n        <div class=\"card\">\n          <div class=\"header\">\n            \n              <button type=\"button\" routerLink=\"/examenes/registrar\" class=\"btn btn-raised btn-primary btn-round waves-effect\">Registrar</button>\n            <ul class=\"header-dropdown\">\n              <li class=\"dropdown\"> <a href=\"javascript:void(0);\" class=\"dropdown-toggle\" data-toggle=\"dropdown\" role=\"button\" aria-haspopup=\"true\" aria-expanded=\"false\"> <i class=\"zmdi zmdi-more\"></i> </a>\n                <ul class=\"dropdown-menu dropdown-menu-right slideUp float-right\">\n                  <li><a href=\"javascript:void(0);\">Action</a></li>\n                  <li><a href=\"javascript:void(0);\">Another action</a></li>\n                  <li><a href=\"javascript:void(0);\">Something else</a></li>\n                </ul>\n              </li>\n              <li class=\"remove\">\n                <a role=\"button\" class=\"boxs-close\"><i class=\"zmdi zmdi-close\"></i></a>\n              </li>\n            </ul>\n          </div>\n          <div class=\"body\">\n              <p-table  #dd [value]=\"examenes\" [columns]=\"cols\" [paginator]=\"true\" [rows]=\"10\" [pageLinks]=\"2\" [rowsPerPageOptions]=\"[5,10,20]\" selectionMode=\"multiple\" >\n              \n                  <ng-template pTemplate=\"caption\">\n                    <div class=\"ui-helper-clearfix\" style=\"text-align: left\">\n                     <!--  \n                      <button type=\"button\" pButton icon=\"pi pi-file-o\" iconPos=\"left\" label=\"CSV\" (click)=\"dd.exportCSV()\" style=\"margin-right: 0.5em;\"></button>\n                    -->\n                      <button type=\"button\" pButton icon=\"pi pi-file\" iconPos=\"left\" label=\"PDF\" (click)=\"exportPdf()\" class=\"btn btn-warning\"></button>\n                       \n                      </div>\n                </ng-template>\n                  <ng-template pTemplate=\"header\" let-solicitud=\"rowData\">\n                      <tr><th style=\"width:30px\">#</th>\n                          <th *ngFor=\"let col of cols\" >\n                              {{col.header}}\n                          </th>\n                          \n                          <th style=\"width:85px\">Acciones</th>\n                      </tr>\n                      <tr>\n                        <th></th>\n                          <th  style=\"width:auto\" *ngFor=\"let col of cols\" [ngSwitch]=\"col.field\">\n                            <input   pInputText *ngSwitchCase=\"'nombre'\" [(ngModel)]=\"form.caracter_nombre_examen\" name=\"caracter_nombre_examen\" type=\"text\" (input)=\"filtro_completo()\" placeholder=\"\">\n                             <ng-container *ngSwitchCase=\"'nombre_area'\">\n                            <ng-select   placeholder=\"Selecciona un area\"   [(ngModel)]=\"form.nombre_area\" class=\"\" (ngModelChange)=\"filtro_completo()\"   name=\"area\" required>\n           \n                              <ng-option  *ngFor=\" let a of areas\" [value]=\"a.nombre\" >{{a.nombre}}</ng-option>\n                           \n                             </ng-select> \n                            </ng-container>\n                             \n                          </th>\n                         \n                          <th></th>\n                      </tr>\n                  </ng-template>\n                  <ng-template pTemplate=\"body\"   let-i=\"rowIndex\" let-examen>\n                      <tr>\n                        <td>\n                                {{i+1}}\n                        \n                        </td>\n                          <td *ngFor=\"let col of cols; index as i\" [style]=\"{'width':'100%'}\">\n                              {{examen[col.field]}}\n                          </td>\n                         \n                             <td  class=\"text-center\">\n                              <div class=\"row\">\n                          \n                                <div class=\"col-md-1\">\n                              <button  rel=\"tooltip\" data-placement=\"top\" title=\"Ver examen\" (click)=\"ver(examen)\"  data-toggle=\"modal\" data-target=\"#defaultModal\" class=\"btn btn-info btn-pequeño  btn-icon-mini btn-round\">\n                                <i class=\"zmdi zmdi-eye col-white\" style=\"color:white; font-size:17px\"></i></button>\n                          </div>\n                        \n                          <div class=\"col-md-1\">\n                            \n                            <button  rel=\"tooltip\" data-placement=\"top\" title=\"Modificar\" (click)=\"actualizar(examen)\" routerLink=\"/examenes/modificar\"  class=\"btn btn-warning btn-pequeño  btn-icon-mini btn-round\">\n                              <i class=\"zmdi zmdi-edit col-white\" style=\"color:white; font-size:17px\"></i></button>\n                          </div>\n                          <!--   \n                          <div class=\"col-md-1\">\n                            <button rel=\"tooltip\" data-placement=\"top\" title=\"Ver historial clinico\" (click)=\"verhistorialclinico(paciente)\" routerLink=\"/pacientes/ver-historial-clinico\" class=\"btn btn-secondary btn-pequeño  btn-icon-mini btn-round\"><i class=\"zmdi zmdi-assignment col-white\" style=\"color:white; font-size:17px\"></i></button>\n                            \n                            </div>\n                          -->\n                          </div>\n                            </td>\n                      </tr>\n                  </ng-template>\n                    \n                    \n                </p-table>\n                <!--\n            <div class=\"table-responsive\">\n              <table class=\"table table-bordered table-striped table-hover js-basic-example dataTable\">\n                <thead>\n                  <tr>\n                      <th>#</th>\n                      <th>EXAMEN</th>\n                    <th>AREA</th>\n                      <th>UNIDADES</th>\n                      <th>VALOR DE REFERENCIA</th>\n                      <TH>MODIFICAR</TH>\n                  </tr>\n                </thead>\n                <tbody>\n                  <tr *ngFor=\"let e of examenes; index as i\">\n                    <th scope=\"row\">{{i+1}}</th>\n                    <td>{{e.nombre}} </td>\n            \n                 <td>{{e.area.nombre}}</td>\n                      <td>{{e.unidades}}</td>\n                      <td>\n\n                        <span *ngFor=\"let v of e.valores_referencia\">\n                          {{v.tipo_persona}} <span *ngIf=\"v.valor_inicial != v.valor_final\">{{v.valor_inicial}} - {{v.valor_final}} .</span><span *ngIf=\"v.valor_inicial == v.valor_final\">{{v.valor_inicial}}.</span>\n                        </span>\n                      </td>\n                      <td><a routerLink=\"/usuarios/modificar\" (click)=\"modificarUsuario(user)\" class=\" waves-effect waves-float waves-green\"><i class=\"zmdi zmdi-edit\"></i></a>\n                      </td>\n                  </tr>\n         </tbody>\n              </table>\n\n        \n\n            </div>\n          -->\n          </div>\n        </div>\n      </div>\n    </div>\n    <!-- #END# Basic Examples -->\n    <!-- Exportable Table -->\n    \n    <!-- #END# Exportable Table -->\n  </div>\n</section>\n<div class=\"modal fade\" id=\"defaultModal\" >\n  <div class=\"modal-dialog modal-login\">\n    <div class=\"modal-content\">\n      <div class=\"modal-header\">\n      \n     \n        <h4 class=\"title\" id=\"defaultModalLabel\">Examen</h4>\n  \n      </div>\n      <div class=\"modal-body\">\n        <div class=\"container text-center\">\n         \n          <div class=\"row\">\n            <div class=\"col \">\n                <p class=\"font-weight-bold\">Nombre: \n                    <span class=\"font-weight-normal\">{{e.nombre}}</span>\n                </p>\n            </div>\n        </div>\n        <div class=\"row\">\n          <div class=\"col \">\n              <p class=\"font-weight-bold\">Area: \n                  <span class=\"font-weight-normal\">{{e.area.nombre}}</span>\n              </p>\n          </div>\n      </div>\n      <div class=\"row\" *ngIf=\"e.unidades !=''\">\n        <div class=\"col \">\n            <p class=\"font-weight-bold\">Unidades: \n                <span class=\"font-weight-normal\">{{e.unidades}}</span>\n            </p>\n        </div>\n    </div>\n      <div class=\" text-center row\"  *ngIf=\"e.valores_referencia.length>0\">\n        <div class=\"col \">\n            <p class=\"font-weight-bold\">Valor Referencia: \n                <span class=\"font-weight-normal\">{{e.valor_referencia}}</span>\n            </p>\n        </div>\n    </div>\n        \n    <div class=\"row\">\n      <div class=\"col \">\n          <p class=\"font-weight-bold\">Precios: \n            <span class=\"font-weight-normal\" >\n              <div  *ngFor=\"let er of e.precios\">{{er.costo}} Bs. para {{er.institucion.nombre}}</div>\n              </span>\n          </p>\n      </div>\n  </div>\n      \n\n    \n\n\n\n\n\n\n\n\n\n</div>\n       </div>\n      <div class=\"modal-footer\">\n        <button type=\"button\" class=\"btn btn-danger btn-round waves-effect\" data-dismiss=\"modal\">CERRAR</button>\n       \n      </div>\n    </div>\n\n    \n  </div>\n</div>\n\n"

/***/ }),

/***/ "./src/app/examenes/listar/listar.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/examenes/listar/listar.component.ts ***!
  \*****************************************************/
/*! exports provided: ListarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListarComponent", function() { return ListarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _models_examen__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../models/examen */ "./src/app/models/examen.ts");
/* harmony import */ var _models__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../models */ "./src/app/models/index.ts");
/* harmony import */ var _examenes_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../examenes.service */ "./src/app/examenes/examenes.service.ts");
/* harmony import */ var _solicitudes_solicitudes_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../solicitudes/solicitudes.service */ "./src/app/solicitudes/solicitudes.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ListarComponent = /** @class */ (function () {
    function ListarComponent(solicitudesService, examenesService) {
        var _this = this;
        this.solicitudesService = solicitudesService;
        this.examenesService = examenesService;
        this.examenes = [];
        this.precios = [];
        this.e = new _models_examen__WEBPACK_IMPORTED_MODULE_1__["Examen"]();
        this.e.precios = [];
        this.solicitudesService.getAllAreas().subscribe(function (data) {
            _this.areas = data;
            console.log(_this.areas);
        });
        this.area = new _models__WEBPACK_IMPORTED_MODULE_2__["Area"]();
        this.form = {
            fech: '',
            caracter_nombre_examen: '',
            estado_solicitud: '',
            cedula: '',
            prueba: 'Agrupar',
            nombre_area: ''
        };
        this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
        console.log(this.currentUser);
        examenesService.getAll(this.area.nombre, this.form.caracter_nombre_examen).subscribe(function (data) {
            _this.examenes = data;
            console.log(data);
            for (var i = 0; i < _this.examenes.length; i++) {
                _this.examenes[i].valor_referencia = "";
                _this.examenes[i].nombre_area = _this.examenes[i].area.nombre;
                if (_this.examenes[i].valores_referencia.length > 0) {
                    for (var j = 0; j < _this.examenes[i].valores_referencia.length; j++) {
                        _this.examenes[i].valor_referencia = _this.examenes[i].valores_referencia[j].tipo_persona + " " + _this.examenes[i].valores_referencia[j].valor_inicial + "-" + _this.examenes[i].valores_referencia[j].valor_final + " " + _this.examenes[i].valor_referencia;
                    }
                }
            }
        });
    }
    ListarComponent.prototype.ngOnInit = function () {
        this.cols = [
            { field: 'nombre', header: 'Examen' },
            { field: 'nombre_area', header: 'Area' },
            { field: 'unidades', header: 'Unidades' },
            { field: 'valor_referencia', header: 'Valor referencia' },
        ];
        this.brands = [
            { label: 'Todos', value: null },
            { label: 'Parasitologia', value: 'Parasitologia ' },
            { label: 'Serologia', value: 'Serologia' },
            { label: 'Hematologia', value: 'hematologia' },
            { label: 'Bacteorologia', value: 'Bacteorologia' },
            { label: 'Quimica Sanguinea', value: 'Quimica Sanguinea' },
            { label: 'Uroanalisis', value: 'Uroanalisis' }
        ];
    };
    ListarComponent.prototype.filtro_completo = function () {
        var _this = this;
        if (this.form.nombre_area == null) {
            this.form.nombre_area = "";
        }
        console.log(this.form.fech);
        console.log(this.area.nombre + " " + this.area.cod_area);
        this.examenesService.getAll(this.form.nombre_area, this.form.caracter_nombre_examen).subscribe(function (data) {
            _this.examenes = data;
            for (var i = 0; i < _this.examenes.length; i++) {
                _this.examenes[i].valor_referencia = "";
                _this.examenes[i].nombre_area = _this.examenes[i].area.nombre;
                if (_this.examenes[i].valores_referencia.length > 0) {
                    for (var j = 0; j < _this.examenes[i].valores_referencia.length; j++) {
                        _this.examenes[i].valor_referencia = _this.examenes[i].valores_referencia[j].tipo_persona + " " + _this.examenes[i].valores_referencia[j].valor_inicial + "-" + _this.examenes[i].valores_referencia[j].valor_final + " " + _this.examenes[i].valor_referencia;
                    }
                }
            }
            console.log(_this.examenes.length);
        });
    };
    ListarComponent.prototype.exportPdf = function () {
        window.location.href = 'http://localhost:8080/jasperserver/rest_v2/reports/reports/examenes_ofertados.pdf?am_usuario=' + this.currentUser.personal_laboratorio.persona.am + '&ap_usuario=' + this.currentUser.personal_laboratorio.persona.ap + '&nombre_usuario=' + this.currentUser.personal_laboratorio.persona.nombre + '&nombre_area=' + this.form.nombre_area + '&caracter_nombre_examen=' + this.form.caracter_nombre_examen + '&j_username=' + 'jasperadmin' + '&j_password=' + 'jasperadmin';
    };
    ListarComponent.prototype.actualizar = function (examen) {
        localStorage.setItem('examen', JSON.stringify(examen));
    };
    ListarComponent.prototype.ver = function (e) {
        this.e = e;
        this.precios = this.e.precios;
    };
    ListarComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-listar',
            template: __webpack_require__(/*! ./listar.component.html */ "./src/app/examenes/listar/listar.component.html"),
            styles: [__webpack_require__(/*! ./listar.component.css */ "./src/app/examenes/listar/listar.component.css")]
        }),
        __metadata("design:paramtypes", [_solicitudes_solicitudes_service__WEBPACK_IMPORTED_MODULE_4__["SolicitudesService"], _examenes_service__WEBPACK_IMPORTED_MODULE_3__["ExamenesService"]])
    ], ListarComponent);
    return ListarComponent;
}());



/***/ }),

/***/ "./src/app/examenes/modificar/modificar.component.css":
/*!************************************************************!*\
  !*** ./src/app/examenes/modificar/modificar.component.css ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".link{\r\n \r\n  \r\n  cursor: pointer\r\n}\r\n.titulo{\r\n   \r\n  text-transform: capitalize;\r\n}"

/***/ }),

/***/ "./src/app/examenes/modificar/modificar.component.html":
/*!*************************************************************!*\
  !*** ./src/app/examenes/modificar/modificar.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<section class=\"content \">\n  <div class=\"block-header m_img_btn\">\n    <div class=\"row\">\n      <div class=\"col-lg-7 col-md-6 col-sm-12\">\n        <h2>Exámenes\n          <small></small>\n        </h2>\n      </div>\n      <div class=\"col-lg-5 col-md-6 col-sm-12\">\n        <ul class=\"breadcrumb float-md-right\">\n          <li class=\"breadcrumb-item\"><a routerLink=\"/dashboard/main\"><i class=\"zmdi zmdi-home\"></i> </a></li>\n          <li class=\"breadcrumb-item\"><a href=\"javascript:void(0);\">examenes</a></li>\n          <li class=\"breadcrumb-item active\">modificar</li>\n        </ul>\n      </div>\n    </div>\n  </div>\n  <div class=\"container-fluid\">\n \n    <!-- Horizontal Layout -->\n    <div class=\"row clearfix\">\n      <div class=\"col-lg-12 col-md-12 col-sm-12\">\n        <div class=\"card\">\n          <div class=\"header\">\n            <h2><strong>Modificar</strong> Examen</h2>\n            <ul class=\"header-dropdown\">\n              <li class=\"dropdown\"> <a href=\"javascript:void(0);\" class=\"dropdown-toggle\" data-toggle=\"dropdown\" role=\"button\" aria-haspopup=\"true\" aria-expanded=\"false\"> <i class=\"zmdi zmdi-more\"></i> </a>\n                <ul class=\"dropdown-menu dropdown-menu-right\">\n                  <li><a href=\"javascript:void(0);\">Action</a></li>\n                  <li><a href=\"javascript:void(0);\">Another action</a></li>\n                  <li><a href=\"javascript:void(0);\">Something else</a></li>\n                </ul>\n              </li>\n              <li class=\"remove\">\n                <a role=\"button\" class=\"boxs-close\"><i class=\"zmdi zmdi-close\"></i></a>\n              </li>\n            </ul>\n          </div>\n          <div class=\"body\">\n            <!--  \n            <form id=\"bigForm\">\n              <table>\n                <tr class='row'>\n                    <th class='col'>Name</th>\n                    <th class='col'>Job</th>\n                </tr>\n                <tr class='row' *ngFor=\"let person of personas; let i = index\" (click)=\"selectPerson(person)\" >\n                  <td class='col'>\n                    <input [(ngModel)]=\"person.nombre\" [name]=\"'persona'+i\"/>\n                    - {{person.nombre}}\n                  </td>\n                  <td class='col'>{{person.valor}}</td>\n                </tr>\n              </table>\n            </form>\n          -->\n          <datalist id=\"valores_examen\">\n            <option *ngFor=\"let s of subexamenes\" [value]=\"s.nombre\" ></option>\n          </datalist> \n            <form  ngNativeValidate   class=\"needs-validation\" #form=\"ngForm\">  \n              <div class=\"row clearfix\">\n              <div class=\"col-lg-2 col-md-2 col-sm-4 form-control-label\">\n                <label for=\"nombre\">Nombre</label>\n              </div>\n              <div class=\"col-lg-10 col-md-10 col-sm-8\">\n                <div class=\"form-group\">\n                    <input  type=\"text\" id=\"nombre\"   name=\"nombre\" [(ngModel)]=\"examen.nombre\" class=\"form-control\" placeholder=\"Entra  nombre\" required>\n             \n                    <!--- <input  type=\"text\" id=\"nombre\" [(ngModel)]=\"form.persona.nombre\" name=\"nombre\" #nombre=\"ngModel\"  class=\"form-control\" placeholder=\"Entra tu nombre\" required>\n                </div>\n\n                <div *ngIf=\"nombre.invalid && (nombre.dirty || nombre.touched)\" class=\"alert alert-danger\">\n                \n                  <div *ngIf=\"nombre.errors.required\">\n                  nombre es requerido.\n                  </div>\n                                      </div>\n                                    -->\n              </div>\n            </div>\n            </div>\n\n          \n              <div class=\"row clearfix\">\n                <div class=\"col-lg-2 col-md-2 col-sm-4 form-control-label\">\n                  <label for=\"ap\">Area</label>\n                </div>\n                <div class=\"col-lg-10 col-md-10 col-sm-8\">\n                  <div >\n                    <select  class=\"\" placeholder=\"seleccione el area\" [(ngModel)]=\"examen.cod_area\"  class=\"form-control\"  (input)=\"asignarcod_area($event)\"  name=\"cod_area\" required>\n                   \n                      <option *ngFor=\"let area of areas\" [value]=\"area.cod_area\"  >{{area.nombre}}</option>\n                    \n                    </select>\n                    <!--\n                    <input [(ngModel)]=\"form.persona.ap\" name=\"ap\" #ap=\"ngModel\" class=\"form-control\" placeholder=\"Entra tu apellido paterno\" required>\n                  </div>\n              \n                  <div *ngIf=\"ap.invalid && (ap.dirty || ap.touched)\" class=\"alert alert-danger\">\n                                \n                    <div *ngIf=\"ap.errors.required\">\n                    apellido paterno  es requerido.\n                    </div>\n                                        </div>\n                                      -->\n                </div>\n              </div>\n              </div>\n<br>\n              <div class=\"row clearfix\">\n                <div class=\"col-lg-2 col-md-2 col-sm-4 form-control-label\">\n                  <label for=\"ap\">Unidades </label>\n                </div>\n                <div class=\"col-lg-10 col-md-10 col-sm-8\">\n                  <div class=\"form-group\">\n                      <input type=\"text\" [(ngModel)]=\"examen.unidades\" name=\"unidades\"  class=\"form-control\" placeholder=\"Entra unidades\" >\n              \n                    <!--\n                    <input [(ngModel)]=\"form.persona.am\" name=\"am\" #am=\"ngModel\" class=\"form-control\" placeholder=\"Entra tu apellido materno\" >\n                  </div>\n                  <div *ngIf=\"am.invalid && (am.dirty || am.touched)\" class=\"alert alert-danger\">\n                                \n                    <div *ngIf=\"am.errors.required\">\n                    apellido materno  es requerido.\n                    </div>\n                                        </div>\n                                      -->\n                </div>\n              </div>\n              </div>\n\n              <div class=\"row clearfix\">\n                <div class=\"col-md-2\">\n                  <div class=\"row clearfix\" style=\"padding-top: 3px;\">\n                    <div class=\"col-sm-8\">\n                      <div class=\"form-group\"><label for=\"ap\">Valores Referencia </label>\n                      </div>\n                    </div>\n                    <div class=\"col-sm-2\" style=\"padding-top:3px\">\n                      <div class=\"form-group\">  <a class=\"link\" (click)=\"agregarValoresReferencia()\">\n                      \n                        <i class=\"material-icons col-purple\">add_circle</i> <span class=\"icon-name\"></span>\n                      </a>\n                      </div>\n                    </div>\n                    <div class=\"col-sm-2\"  >\n                      <ng-container *ngFor=\"let p of examen.valores_referencia; let i = index;\" >\n                      <ng-container *ngIf=\"p.estado\">\n                    <div class=\"form-group\" style=\"padding-top:3px\"> \n                        <a class=\"link\" (click)=\"removerValoresReferencia(i)\">\n                      \n                          <i class=\"material-icons col-purple\">clear</i> <span class=\"icon-name\"></span>\n                        </a>\n                        </div>\n                        </ng-container>\n                        </ng-container>\n                    </div>\n\n                  </div>\n                </div>\n        \n                <div class=\"col-md-10\">\n                  <ng-container  *ngFor=\"let v of examen.valores_referencia; let i = index;\">\n      \n                    <ng-container *ngIf=\"v.estado\" >  \n                  <div class=\"row clearfix\"  >\n                  \n                    <div class=\"col-sm-3\" >\n                      <div class=\"form-group\">\n                        <input type=\"text\"  [(ngModel)]=\"examen.valores_referencia[i].valor_inicial\" [name]=\"'valor_incial' +i\" class=\"form-control\" placeholder=\"valor inicial\"  required/>\n                      </div>\n                    </div>\n                    <div class=\"col-sm-3\">\n                      <div class=\"form-group\">\n                        <input type=\"text\"   [(ngModel)]=\"examen.valores_referencia[i].valor_final\" [name]=\"'valor_final' + i\" class=\"form-control\" placeholder=\"valor final\"  required/>\n                      </div>\n                    </div>\n                    <div class=\"col-sm-3\">\n                      <div >\n                        <select  class=\"form-control\" [(ngModel)]=\"examen.valores_referencia[i].tipo_persona\" [name]=\"'tipo_persona' + i\"   >\n                          <option  [value]=\"e.valor\" *ngFor=\" let e of personas\">{{e.nombre}}</option>\n                         \n                         </select>\n                      </div>\n                    </div>\n                    <div class=\"col-sm-3\">\n                      <div class=\"form-group\">\n                        <input type=\"text\" [(ngModel)]=\"examen.valores_referencia[i].fecha \" [name]=\"'fecha' +i\" disabled  class=\"form-control\" placeholder=\"fecha\"/>\n                      </div>\n                    </div>\n                  </div>\n                   \n              </ng-container>\n            </ng-container>\n                  </div>\n                \n                </div> \n              \n                  \n                \n              <!--\n                (ngModelChange)=\"setestado($event)\"\n            <ng-select>\n                     <ng-option [value]=\"e\" *ngFor=\" let e of personas\">{{e}}</ng-option> \n                    </ng-select>\n                  --> \n          \n\n<!--prefcio-->\n\n            <div class=\"row clearfix\">\n              <div class=\"col-md-2\" >\n               \n            \n                <div class=\"row clearfix\" style=\"padding-top:2px\" >\n                  <div class=\"col-sm-8\">\n                    <div class=\"form-group\"  ><label for=\"ap\">Precio </label>\n                    </div>\n                  </div>\n                  <div class=\"col-sm-2\">\n                    <div class=\"form-group\"  >  <a  (click)=\"agregarPrecio()\" class=\"link\">\n                   \n                      <i class=\"material-icons col-purple\">add_circle</i> <span class=\"icon-name\"></span>\n                    </a>\n                    </div>\n                  </div>\n              \n\n                  <div class=\"col-sm-2\" >\n                    <ng-container *ngFor=\"let p of examen.precios; let i = index;\" >\n                      <ng-container *ngIf=\"p.estado\">\n                    <div class=\"form-group\" style=\"padding-top:2px;\"  > \n                      <a  class=\"link\" (click)=\"removerPrecio(i)\"> \n                    \n                        <i class=\"material-icons col-purple\">clear</i> <span class=\"icon-name\"></span>\n                      </a>\n                      </div>\n                    </ng-container>\n                  </ng-container>\n                  </div>\n               \n            \n               \n                </div>\n              </div>\n            \n              \n              <div class=\"col-md-10\" >\n            <!--inputs-->\n            <ng-container  *ngFor=\"let p of examen.precios; let i = index;\">\n              <ng-container *ngIf=\"p.estado\">\n                <div class=\"row clearfix\">\n                \n                \n                  <div class=\"col-sm-6\">\n                    <div class=\"form-group\">\n                      <input type=\"text\" [(ngModel)]=\"examen.precios[i].costo\" [name]=\"'costo' + i\"  class=\"form-control\"   placeholder=\"costo\" required/>\n                    </div>\n                  </div>\n                  <div class=\"col-sm-6\">\n                    <div >\n                      <select  class=\"form-control\" [(ngModel)]=\"examen.precios[i].cod_institucion\" [name]=\"'cod_institucion' + i\"   required>\n                        <option  [value]=\"i.cod_institucion\"  *ngFor=\" let i of instituciones\">{{i.nombre}}</option>\n                       \n                       </select>\n                    </div>\n                  </div>\n                </div>\n                </ng-container>\n                </ng-container>\n             <!--fin de inputs-->\n                </div>\n                \n                  \n                     \n               \n            </div>\n            <!--fin-->\n            <!--   \n            <div style=\"display:none\"  class=\"row clearfix\">\n            <div class=\"col-lg-2 col-md-2 col-sm-4 form-control-label\">\n             \n            \n              <div class=\"row clearfix\">\n                <div class=\"col-sm-8\">\n                  <div class=\"form-group\"><label for=\"ap\">Resultados por defecto </label>\n                  </div>\n                </div>\n                <div class=\"col-sm-2\">\n                  <div class=\"form-group\">   <a  (click)=\"agregarResultados()\" class=\"link\">\n                   \n                    <i class=\"material-icons col-purple\">add_circle</i> <span class=\"icon-name\"></span>\n                  </a>\n                  </div>\n                </div>\n                <div class=\"col-sm-2\" *ngIf=\"examen.resultados_por_defecto.length>0\">\n                  <div class=\"form-group\"> \n                    <a class=\"link\" (click)=\"removerResultados(0)\">\n                  \n                      <i class=\"material-icons col-purple\">clear</i> <span class=\"icon-name\"></span>\n                    </a>\n                    </div>\n                </div>\n              </div>\n            </div>\n            \n              <ng-container *ngFor=\"let direccion of examen.resultados_por_defecto; let i = index;\">\n                <ng-container *ngIf=\"i==0\">\n            <div class=\"col-lg-10 col-md-10 col-sm-8\"  >\n            \n              <div class=\"row clearfix\" >\n              \n              \n                <div class=\"col-sm-12\">\n                  <div class=\"form-group\">\n                    <input type=\"text\"  [(ngModel)]=\"examen.resultados_por_defecto[i].valor\"  [name]=\"'valor' + i\"  class=\"form-control\"   placeholder=\"resultados por defecto\"  required/>\n                  </div>\n                </div>\n              \n              </div>\n            \n            </div>\n            </ng-container>\n            \n            <ng-container *ngIf=\"i!=0\">\n              <div class=\"col-lg-2 col-md-2 col-sm-4 form-control-label\">\n             \n            \n                <div class=\"row clearfix\">\n                  <div class=\"col-sm-8\">\n                  \n                  </div>\n                  <div class=\"col-sm-2\">\n                    <div class=\"form-group\">   \n                    </div>\n                  </div>\n                  <div class=\"col-sm-2\" *ngIf=\"examen.resultados_por_defecto.length>0\">\n                    <div class=\"form-group\"> \n                      <a class=\"link\" (click)=\"removerResultados(i)\">\n                    \n                        <i class=\"material-icons col-purple\">clear</i> <span class=\"icon-name\"></span>\n                      </a>\n                      </div>\n                  </div>\n                </div>\n              </div>\n              <div class=\"col-lg-10 col-md-10 col-sm-8\"  >\n            \n                <div class=\"row clearfix\"  >\n                \n                \n                  <div class=\"col-sm-12\">\n                    <div class=\"form-group\">\n                      <input type=\"text\"  [(ngModel)]=\"examen.resultados_por_defecto[i].valor\"  [name]=\"'valor' + i\"  class=\"form-control\"   placeholder=\"resultados por defecto\"  required/>\n                    </div>\n                  </div>\n                \n                </div>\n             \n              </div>\n            </ng-container>\n            </ng-container>\n            </div>\n          -->\n            <!-- subexamen-->\n            <div class=\"row clearfix\" style=\"display:block\" *ngIf=\"examen.area.cod_area!=0\">\n              <div class=\"col-lg-2 \">\n               \n              \n                <div class=\"row clearfix\">\n                  <div class=\"col-sm-8\">\n                    <div class=\"form-group\"><label for=\"ap\">Incluir exámenes</label>\n                    </div>\n                  </div>\n                  <div class=\"col-sm-4\">\n                    <div class=\"form-group\" style=\"padding-top:3px\">  <a  (click)=\"agregarsubexamen()\" class=\"link\">\n                   \n                      <i class=\"material-icons col-purple\">add_circle</i> <span class=\"icon-name\"></span>\n                    </a>\n                    </div>\n                  </div>\n                 \n                </div>\n              </div>\n    \n                <div class=\"col-lg-10\">\n                  <ng-container  *ngFor=\"let subexamen of examen.subexamenes; let i = index;\">\n                    <ng-container *ngIf=\"subexamen.estado\">\n                    <div class=\"row clearfix\"  >\n                      <div class=\"card\" style=\"border: blue solid 1px\">\n                        <div class=\"header\">\n                          <h2><strong>Examen </strong> <small></small> </h2>\n                          <ul class=\"header-dropdown\">\n                           \n                            <li >\n                              <a class=\"link\" (click)=\"removersubexamen(i)\">\n                          \n                                <i class=\"material-icons col-purple\">clear</i> <span class=\"icon-name\"></span>\n                              </a>\n                            </li>\n                          </ul>\n                        </div>\n                        <div class=\"body\">\n                          <div class=\"row clearfix\">\n                            <div class=\"col-md-2\">\n                              <label for=\"nombre\">Nombre:</label>\n                            </div>\n                            <div class=\"col-md-10\">\n                              <div class=\"form-group\">\n                                <input type=\"text\"  [(ngModel)]=\"subexamen.nombre\"  [name]=\"'nombre' + i\" class=\"form-control nombre titulo\"  list=\"valores_examen\" (input)=\"cambio($event,i)\" placeholder=\"\" required/>\n                              </div>\n                            </div>\n                          </div>\n                  \n                          <div class=\"row clearfix\">\n                              <div class=\"col-md-2\">\n                                <label for=\"nombre\">Unidades:</label>\n                              </div>\n                              <div class=\"col-md-10\">\n                                <div class=\"form-group\">\n                                  <input type=\"text\"  [(ngModel)]=\"subexamen.unidades\"  [name]=\"'unidades' + i\" class=\"form-control\"   placeholder=\"\"/>\n                                </div>\n                              </div>\n                            </div>\n                  \n    \n    \n                            <!--  valor de referencia de subexamen-->\n                            <div class=\"row clearfix\">\n                                <div class=\"col-md-2\">\n                                  <div class=\"row clearfix\" style=\"padding-top:3px\">\n                                    <div class=\"col-sm-6\">\n                                      <div class=\"form-group\"><label for=\"ap\">Valor de referencia </label>\n                                      </div>\n                                    </div>\n                                    <div class=\"col-sm-3\">\n                                     \n                                      <div class=\"form-group\" style=\"padding-top:3px\"> \n                                         <a (click)=\"agregarValoresReferencia_de_subexamen(i)\" class=\"link\">\n                       \n                                        <i class=\"material-icons col-purple\">add_circle</i> <span class=\"icon-name\"></span>\n                                      </a>\n                                        </div>\n                                        \n                                    </div>\n                                    <div class=\"col-sm-3\"  >\n                                      <ng-container *ngFor=\"let v of subexamen.valores_referencia; let in = index;\">\n                                  \n                                        <ng-container *ngIf=\"v.estado\">\n                                      <div class=\"form-group\" style=\"padding-top:2px\"> \n\n                                        <a (click)=\"removerValoresReferencia_de_subexamen(i,in)\" class=\"link\">\n                       \n                                        <i class=\"material-icons col-purple\">clear</i> <span class=\"icon-name\"></span>\n                                      </a>\n                                        </div>\n                                        </ng-container>\n                                      </ng-container>\n                                    </div>\n                                  </div>\n                                </div>\n                             \n                                    <div class=\"col-md-10\"   >\n                                      <ng-container *ngFor=\"let v of subexamen.valores_referencia; let in = index;\">\n                                  \n                                      <ng-container *ngIf=\"v.estado\">\n                                         <!-- valor referencia de subexamen-->\n                                         <div class=\"row clearfix\"  >\n                                             <div class=\"col-sm-3\" >\n                                               <div class=\"form-group\">\n                                                 <input type=\"text\"    [(ngModel)]=\"subexamen.valores_referencia[in].valor_inicial\"  [name]=\"'valor_inicial' + in+'de subexamen'+i\"  class=\"form-control\" placeholder=\"\" required />\n                                               </div>\n                                             </div>\n                                             <div class=\"col-sm-3\">\n                                               <div class=\"form-group\">\n                                                 <input type=\"text\" [(ngModel)]=\"subexamen.valores_referencia[in].valor_final\"  [name]=\"'valor_final' + in+'de subexamen'+i\" class=\"form-control\" placeholder=\"\" required/>\n                                               </div>\n                                             </div>\n                                             <div class=\"col-sm-3\">\n                                               <div class=\"form-group\">\n                                                 <ng-select [(ngModel)]=\"subexamen.valores_referencia[in].tipo_persona\"  [name]=\"'tipo_persona' + in+'de subexamen'+i\"  >\n                                                   <ng-option  [value]=\"e.valor\" *ngFor=\" let e of personas\">{{e.nombre}}</ng-option>\n                                                  \n                                                  </ng-select>\n                                               </div>\n                                             </div>\n                                             <div class=\"col-sm-3\">\n                                              <div class=\"form-group\">\n                                                <input type=\"text\" [(ngModel)]=\"subexamen.valores_referencia[in].fecha \" [name]=\"'fecha' +in+'de subexamen'+i\" disabled  class=\"form-control\" placeholder=\"fecha\"/>\n                                              </div>\n                                            </div>\n                                           </div>\n                                           </ng-container>\n                                         </ng-container>\n                                         <!--fin-->\n                                      \n                                     </div>\n                              \n                                 \n                           \n                              </div>\n                              <!---  fin de valor de referenci de subexamen-->\n    \n                              <!-- subexamende subexamen-->\n                              <div class=\"row clearfix\">\n                                <div class=\"col-md-2\">\n                                  <div class=\"row clearfix\">\n                                    <div class=\"col-sm-6\">\n                                      <div class=\"form-group\"><label for=\"ap\">Examen </label>\n                                      </div>\n                                    </div>\n                                    <div class=\"col-sm-3\">\n                                      <div class=\"form-group\">  <a (click)=\"agregarsubexamenalsubexamen(i)\" class=\"link\">\n                       \n                                        <i class=\"material-icons col-purple\">add_circle</i> <span class=\"icon-name\"></span>\n                                      </a>\n                                        </div>\n                                    </div>\n                                    <div class=\"col-sm-3\" >\n                                      <div class=\"form-group\">  \n                                        </div>\n                                    </div>\n                                  </div>\n                                </div>\n                               \n                                    <div class=\"col-md-10\" >\n                                      <ng-container *ngFor=\"let subexamen2 of subexamen.subexamenes; let ii = index;\">\n                           <ng-container *ngIf=\"subexamen2.estado\">\n                                        <div class=\"row clearfix\"  >\n                                          <div class=\"card\" style=\"border: blue solid 1px\">\n                                            <div class=\"header\">\n                                              <h2><strong>Examen </strong> <small></small> </h2>\n                                              <ul class=\"header-dropdown\">\n                                               \n                                                <li >\n                                                  <a class=\"link\" (click)=\"removersubexamendelsubexamen(i,ii)\">\n                                              \n                                                    <i class=\"material-icons col-purple\">clear</i> <span class=\"icon-name\"></span>\n                                                  </a>\n                                                </li>\n                                              </ul>\n                                            </div>\n                                            <div class=\"body\">\n                                              <div class=\"row clearfix\">\n                                                <div class=\"col-md-2\">\n                                                  <label for=\"nombre\">Nombre:</label>\n                                                </div>\n                                                <div class=\"col-md-10\">\n                                                  <div class=\"form-group\">\n                                                    <input type=\"text\"  [(ngModel)]=\"subexamen2.nombre\"  [name]=\"'nombre' + ii+'subexamen2'+i\" class=\"form-control\"  (input)=\"cambio2($event,i,ii)\" list=\"valores_examen\" placeholder=\"\" required/>\n                                                  </div>\n                                                </div>\n                                              </div>\n                                      \n                                              <div class=\"row clearfix\">\n                                                  <div class=\"col-md-2\">\n                                                    <label for=\"nombre\">Unidades:</label>\n                                                  </div>\n                                                  <div class=\"col-md-10\">\n                                                    <div class=\"form-group\">\n                                                      <input type=\"text\"  [(ngModel)]=\"subexamen2.unidades\"  [name]=\"'unidades' + ii+'subexamen2'+i\" class=\"form-control\"   placeholder=\"\"/>\n                                                    </div>\n                                                  </div>\n                                                </div>\n                                      \n                        \n                        \n                                                <!--  valor de referencia de subexamen de subexamen-->\n                                                <div class=\"row clearfix\">\n                                                    <div class=\"col-md-2\">\n                                                      <div class=\"row clearfix\" style=\"padding-top:3px\">\n                                                        <div class=\"col-sm-6\">\n                                                          <div class=\"form-group\"><label for=\"ap\">Valor de referencia </label>\n                                                          </div>\n                                                        </div>\n                                                        <div class=\"col-sm-3\">\n                                                          <div class=\"form-group\" style=\"padding-top:4px\">  <a (click)=\"agregarValoresReferencia_de_subexamen_de_subexamen(i,ii)\" class=\"link\">\n                                           \n                                                            <i class=\"material-icons col-purple\">add_circle</i> <span class=\"icon-name\"></span>\n                                                          </a>\n                                                            </div>\n                                                        </div>\n                                                        <div class=\"col-sm-3\" >\n                                                          \n                                                          <ng-container *ngFor=\"let v2 of subexamen2.valores_referencia; let inin = index;\">\n                                                     \n                                                            <ng-container *ngIf=\"v2.estado\">\n                                                          <div class=\"form-group\" style=\"padding-top:3px\"> \n                                                             <a (click)=\"removerValoresReferencia_de_subexamen_de_subexamen(i,ii,inin)\" class=\"link\">\n                                           \n                                                            <i class=\"material-icons col-purple\">clear</i> <span class=\"icon-name\"></span>\n                                                          </a>\n                                                            </div>\n                                                            </ng-container>\n                                                            </ng-container>\n                                                        </div>\n                                                      </div>\n                                                    </div>\n                                                   \n                                                        <div class=\"col-md-10\"   >\n                                                          <ng-container *ngFor=\"let v2 of subexamen2.valores_referencia; let inin = index;\">\n                                                     \n                                                          <ng-container *ngIf=\"v2.estado\">\n                                                             <!-- valor referencia de subexamen desubexamen-->\n                                                             <div class=\"row clearfix\"  >\n                                                                 <div class=\"col-sm-3\" >\n                                                                   <div class=\"form-group\">\n                                                                     <input type=\"text\"    [(ngModel)]=\"subexamen2.valores_referencia[inin].valor_inicial\"  [name]=\"'valor_inicial' + inin+'de subexamen2'+ii+'de subexamen'+i\"  class=\"form-control\" placeholder=\"\" required />\n                                                                   </div>\n                                                                 </div>\n                                                                 <div class=\"col-sm-3\">\n                                                                   <div class=\"form-group\">\n                                                                     <input type=\"text\" [(ngModel)]=\"subexamen2.valores_referencia[inin].valor_final\"  [name]=\"'valor_final' + inin+'de subexamen2'+ii+'de subexamen'+i\" class=\"form-control\" placeholder=\"\" required/>\n                                                                   </div>\n                                                                 </div>\n                                                                 <div class=\"col-sm-3\">\n                                                                   <div class=\"form-group\">\n                                                                     <ng-select [(ngModel)]=\"subexamen2.valores_referencia[inin].tipo_persona\"  [name]=\"'tipo_persona' + inin+'de subexamen2'+ii+'de subexamen'+i\"  >\n                                                                       <ng-option  [value]=\"e.valor\" *ngFor=\" let e of personas\">{{e.nombre}}</ng-option>\n                                                                      \n                                                                      </ng-select>\n                                                                   </div>\n                                                                 </div>\n                                                                 <div class=\"col-sm-3\">\n                                                                  <div class=\"form-group\">\n                                                                    <input type=\"text\" [(ngModel)]=\"subexamen2.valores_referencia[inin].fecha \" [name]=\"'fecha' +inin+'de subexamen2'+ii+'de subexamen'+i\" disabled  class=\"form-control\" placeholder=\"fecha\"/>\n                                                                  </div>\n                                                                </div>\n                                                               </div>\n                                                             </ng-container>\n                                                             </ng-container>\n                                                             <!--fin-->\n                                                          \n                                                         </div>\n                                                  \n                                               \n                                                  </div>\n                                                  <!---  fin de valor de referenci de subexamen-->\n                                            </div>\n                                          </div>\n                                        <!---\n                                          <div class=\"col-sm-12\">\n                                            <div class=\"form-group\">\n                                              <input type=\"text\"  [(ngModel)]=\"subexamen.nombre\"  name=\"'nombre_subexamen' + i\" class=\"form-control\"  [attr.id]=\"'nombre_subexamen' + i\" formControlName=\"nombre_subexamen\" placeholder=\"'nombre_subexamen' + i\" />\n                                            </div>\n                                          </div>\n                                        -->\n                                        </div>\n                                      </ng-container>\n                                      </ng-container>\n                                        </div>\n                                \n                            \n                           \n                              </div>\n                              <!-- fin de subexmen de subexame-->\n                        </div>\n                      </div>\n                    <!---\n                      <div class=\"col-sm-12\">\n                        <div class=\"form-group\">\n                          <input type=\"text\"  [(ngModel)]=\"subexamen.nombre\"  name=\"'nombre_subexamen' + i\" class=\"form-control\"  [attr.id]=\"'nombre_subexamen' + i\" formControlName=\"nombre_subexamen\" placeholder=\"'nombre_subexamen' + i\" />\n                        </div>\n                      </div>\n                    -->\n                    </div>\n                  </ng-container>\n                </ng-container>\n                    </div>\n              \n          \n              </div>\n\n              <div class=\"row clearfix\">\n                <div class=\"col-sm-8 offset-sm-2\">\n                  <button type=\"button\"  id=\"guarda\"  class=\"btn btn-raised btn-secondary btn-round waves-effect\"  (click)=\"salir()\" >Salir</button>\n             \n                  <button   data-type=\"autoclose-timer\" type=\"submit\" (click)=\"onSubmit(form)\"  class=\"btn btn-raised btn-primary btn-round waves-effect\"   >Guardar</button>\n               \n                </div>\n                <div class=\"action\" style=\"float:left\">\n\n                 </div>\n              </div>\n\n\n            </form>\n\n\n\n         <!--   \n\n            <form [formGroup]=\"formGroup\" (ngSubmit)=\"onSubmit()\">\n  \n              <label for=\"name\"> Nombre: </label>\n              <input id=\"name\" type=\"text\" formControlName=\"nombre\">\n              <br/>    \n            \n              <label for=\"description\"> Descripcion: </label>\n              <textarea id=\"description\" type=\"textarea\" formControlName=\"description\" rows=\"3\" cols=\"20\"></textarea>\n          \n              <br/>\n            \n              <label for=\"year\"> Año: </label>\n              <input id=\"year\" type=\"number\" formControlName=\"year\">\n              <br/>\n              \n              <label for=\"price\"> Precio: </label>\n              <input id=\"price\" type=\"number\" formControlName=\"price\">\n              <br/>\n          \n              <button type=\"submit\" [disabled]=\"productForm.invalid\" >Submit</button>\n            \n            </form>\n          -->\n\n\n\n\n          </div>\n        </div>\n      </div>\n    </div>\n \n  </div>\n  \n</section>"

/***/ }),

/***/ "./src/app/examenes/modificar/modificar.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/examenes/modificar/modificar.component.ts ***!
  \***********************************************************/
/*! exports provided: ModificarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModificarComponent", function() { return ModificarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _examenes_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../examenes.service */ "./src/app/examenes/examenes.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _models__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../models */ "./src/app/models/index.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
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
    function ModificarComponent(location, titleCasePipe, datePipe, fb, examenesService, router) {
        var _this = this;
        this.location = location;
        this.titleCasePipe = titleCasePipe;
        this.datePipe = datePipe;
        this.fb = fb;
        this.examenesService = examenesService;
        this.router = router;
        this.control = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('');
        this.index = 0;
        this.mostrar = "none";
        this.indice = 0;
        this.examen = new _models__WEBPACK_IMPORTED_MODULE_4__["Examen"]();
        this.examensito = new _models__WEBPACK_IMPORTED_MODULE_4__["Examen"]();
        this.subexamenes = [];
        this.i_valor_r = 0;
        this.subexamenes[0] = new _models__WEBPACK_IMPORTED_MODULE_4__["Examen"]();
        this.control.valueChanges.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["debounceTime"])(450)).subscribe(function (value) {
            console.log("hola" + value);
            _this.examenesService.subexamensPorCaracter(value, 3).subscribe(function (examenes) {
                _this.subexamenes = examenes;
                console.log(_this.subexamenes);
            });
        });
        // Add an initial pet form-entry.
        this.examensito.valores_referencia = [];
        this.examensito.valores_referencia[0] = new _models__WEBPACK_IMPORTED_MODULE_4__["Valor_referencia"]();
        var examen = JSON.parse(localStorage.getItem('examen'));
        console.log(examen);
        this.examenesService.obtenerExamen(examen.cod_examen).subscribe(function (examen) {
            _this.examen = examen;
            console.log(examen);
        });
        this.examenesService.getInstitucionesConPrecio().subscribe(function (i) {
            _this.instituciones = i;
            console.log(_this.instituciones);
        });
        this.personas = [];
        this.personas = [{ nombre: 'Adultos', valor: 'A.' }, { nombre: 'Niños', valor: 'N.' }, { nombre: 'Masculino', valor: 'M.' }, { nombre: 'Femenino', valor: 'F.' }];
        this.examen.resultados_por_defecto = [];
        this.examen.precios = [];
        this.examen.valores_referencia = [];
        this.examen.subexamenes = [];
        examenesService.getAllAreas().subscribe(function (data) {
            _this.areas = data;
        });
    }
    ModificarComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.formGroup = this.fb.group({
            nombre: this.examen.nombre,
            area: this.fb.group({
                nombre: '',
                cod_area: this.examen.cod_area
            }),
            unidades: this.examen.unidades,
            //valores_referencia_subexamen: this.fb.array([]),
            precios: this.fb.array([]),
            resultados_por_defecto: this.fb.array([]),
            subexamenes: this.fb.array([]),
        });
        this.formGroup.valueChanges.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["debounceTime"])(500))
            .subscribe(function (value) {
            console.log(value);
            console.log(_this.otroFormGroup.value);
        });
        this.otroFormGroup = this.fb.group(this.formGroup);
        this.examenesService.obtenerExamen(1).subscribe(function (examen) {
            _this.otroFormGroup = _this.fb.group(examen);
            console.log(_this.otroFormGroup.value);
        });
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
    ModificarComponent.prototype.agregarValoresReferencia = function () {
        this.examen.valores_referencia.push(new _models__WEBPACK_IMPORTED_MODULE_4__["Valor_referencia"]());
        this.examen.valores_referencia[this.examen.valores_referencia.length - 1].cod_examen = this.examen.cod_examen;
        this.examen.valores_referencia[this.examen.valores_referencia.length - 1].fecha = this.datePipe.transform(new Date(), "dd-MM-yyyy");
    };
    ModificarComponent.prototype.removerValoresReferencia = function (indice) {
        // this.examen.valores_referencia.splice(indice,1)
        this.examen.valores_referencia[indice].estado = false;
        //this.examen.valores_referencia.push(this.examen.valores_referencia[indice])
        // this.examen.valores_referencia.splice(indice,1);
    };
    ModificarComponent.prototype.agregarResultados = function () {
        this.examen.resultados_por_defecto.push(new _models__WEBPACK_IMPORTED_MODULE_4__["Resultados_por_defecto"]());
    };
    ModificarComponent.prototype.removerResultados = function (indice) {
        this.examen.resultados_por_defecto.splice(indice, 1);
    };
    ModificarComponent.prototype.agregarPrecio = function () {
        this.examen.precios.push(new _models__WEBPACK_IMPORTED_MODULE_4__["Precio_examen"]());
        this.examen.precios[this.examen.precios.length - 1].cod_examen = this.examen.cod_examen;
    };
    ModificarComponent.prototype.removerPrecio = function (indice) {
        this.examen.precios[indice].estado = false;
        //this.examen.precios.unshift(this.examen.precios[indice])
        //this.examen.precios.splice(indice,1)
    };
    ModificarComponent.prototype.agregarsubexamen = function () {
        this.examen.subexamenes.push(new _models__WEBPACK_IMPORTED_MODULE_4__["Examen"]());
        this.examen.subexamenes[this.examen.subexamenes.length - 1].cod_area = this.examen.cod_area;
    };
    ModificarComponent.prototype.removersubexamen = function (indice) {
        //this.examen.subexamenes.splice(indice,1);
        this.examen.subexamenes[indice].estado = false;
    };
    ModificarComponent.prototype.agregarValoresReferencia_de_subexamen = function (i) {
        this.examen.subexamenes[i].valores_referencia.push(new _models__WEBPACK_IMPORTED_MODULE_4__["Valor_referencia"]());
        this.examen.subexamenes[i].valores_referencia[this.examen.subexamenes[i].valores_referencia.length - 1].cod_examen = this.examen.subexamenes[i].cod_examen;
        this.examen.subexamenes[i].valores_referencia[this.examen.subexamenes[i].valores_referencia.length - 1].fecha = this.datePipe.transform(new Date(), "dd-MM-yyyy");
    };
    ModificarComponent.prototype.removerValoresReferencia_de_subexamen = function (indice_subexamen, indice_valor_referencia_de_subexamen) {
        // this.examen.subexamenes[i].valores_referencia.push(new Valor_referencia())
        //this.examen.subexamenes[indice_subexamen].valores_referencia.splice(indice_valor_referencia_de_subexamen,1);
        this.examen.subexamenes[indice_subexamen].valores_referencia[indice_valor_referencia_de_subexamen].estado = false;
    };
    ModificarComponent.prototype.agregarsubexamenalsubexamen = function (indice_subexamen) {
        this.examen.subexamenes[indice_subexamen].subexamenes.push(new _models__WEBPACK_IMPORTED_MODULE_4__["Examen"]());
    };
    ModificarComponent.prototype.removersubexamendelsubexamen = function (indice_subexamen, posicion) {
        //this.examen.subexamenes[indice_subexamen].subexamenes.splice(posicion,1)
        this.examen.subexamenes[indice_subexamen].subexamenes[posicion].estado = false;
    };
    ModificarComponent.prototype.agregarValoresReferencia_de_subexamen_de_subexamen = function (i, ii) {
        this.examen.subexamenes[i].subexamenes[ii].valores_referencia.push(new _models__WEBPACK_IMPORTED_MODULE_4__["Valor_referencia"]());
        this.examen.subexamenes[i].subexamenes[ii].valores_referencia[this.examen.subexamenes[i].subexamenes[ii].valores_referencia.length - 1].fecha = this.datePipe.transform(new Date(), "dd-MM-yyyy");
    };
    ModificarComponent.prototype.removerValoresReferencia_de_subexamen_de_subexamen = function (i, ii, indice_valor_referencia_de_subexamen_nivel2) {
        // this.examen.subexamenes[i].valores_referencia.push(new Valor_referencia())
        //this.examen.subexamenes[i].subexamenes[ii].valores_referencia.splice(indice_valor_referencia_de_subexamen_nivel2,1);
        this.examen.subexamenes[i].subexamenes[ii].valores_referencia[indice_valor_referencia_de_subexamen_nivel2].estado = false;
    };
    ModificarComponent.prototype.onSubmit = function (form) {
        var _this = this;
        this.examen.nombre = this.titleCasePipe.transform(this.examen.nombre);
        console.log(this.examen);
        this.examen.nombre = this.examen.nombre.toLowerCase();
        console.log(this.examen.nombre);
        this.examen.nombre = this.capitalize(this.examen.nombre);
        for (var i = 0; i < this.examen.subexamenes.length; i++) {
            this.examen.subexamenes[i].nombre = this.examen.subexamenes[i].nombre.toLowerCase();
            this.examen.subexamenes[i].nombre = this.capitalize(this.examen.subexamenes[i].nombre);
            for (var j = 0; j < this.examen.subexamenes[i].subexamenes.length; j++) {
                this.examen.subexamenes[i].subexamenes[j].nombre = this.examen.subexamenes[i].subexamenes[j].nombre.toLowerCase();
                this.examen.subexamenes[i].subexamenes[j].nombre = this.capitalize(this.examen.subexamenes[i].subexamenes[j].nombre);
            }
        }
        console.log(this.examen);
        if (form.valid) {
            this.examenesService.modificar(this.examen).subscribe(function (data) {
                console.log(data);
                alert("Examen " + data.nombre + " actualizado");
                _this.location.back();
                //this.router.navigate(['/examenes/listar']);
            });
        }
    };
    // I remove the pet at the given index.  indice_valor_referencia_de_subexamen
    ModificarComponent.prototype.cambio = function (valor, i) {
        var _this = this;
        console.log(valor);
        if (valor.target.value == '') {
            this.examen.subexamenes[i] = new _models__WEBPACK_IMPORTED_MODULE_4__["Examen"]();
        }
        this.examenesService.subexamensPorCaracter(valor.target.value, this.examen.cod_area).subscribe(function (examenes) {
            _this.subexamenes = examenes;
            console.log(_this.subexamenes);
            if (_this.subexamenes.length == 1 && _this.subexamenes[0].nombre == valor.target.value) {
                _this.examen.subexamenes[i] = _this.subexamenes[0];
            }
        });
    };
    ModificarComponent.prototype.cambio2 = function (valor, i, ii) {
        var _this = this;
        console.log(valor);
        if (valor.target.value == '') {
            this.examen.subexamenes[i].subexamenes[ii] = new _models__WEBPACK_IMPORTED_MODULE_4__["Examen"]();
        }
        this.examenesService.subexamensPorCaracter(valor.target.value, this.examen.cod_area).subscribe(function (examenes) {
            _this.subexamenes = examenes;
            console.log(_this.subexamenes);
            if (_this.subexamenes.length == 1 && _this.subexamenes[0].nombre == valor.target.value) {
                _this.examen.subexamenes[i].subexamenes[ii] = _this.subexamenes[0];
            }
        });
    };
    ModificarComponent.prototype.asignarcod_area = function (i) {
        //alert(i.target.value)
        this.examen.area.cod_area = i.target.value;
    };
    ModificarComponent.prototype.capitalize = function (s) {
        s.toLowerCase();
        if (typeof s !== 'string')
            return '';
        return s.charAt(0).toUpperCase() + s.slice(1);
    };
    ModificarComponent.prototype.salir = function () {
        this.location.back();
    };
    ModificarComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-modificar',
            template: __webpack_require__(/*! ./modificar.component.html */ "./src/app/examenes/modificar/modificar.component.html"),
            styles: [__webpack_require__(/*! ./modificar.component.css */ "./src/app/examenes/modificar/modificar.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_common__WEBPACK_IMPORTED_MODULE_5__["Location"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["TitleCasePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["DatePipe"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"], _examenes_service__WEBPACK_IMPORTED_MODULE_2__["ExamenesService"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], ModificarComponent);
    return ModificarComponent;
}());



/***/ }),

/***/ "./src/app/examenes/registrar/registrar.component.css":
/*!************************************************************!*\
  !*** ./src/app/examenes/registrar/registrar.component.css ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".link{\r\n \r\n  \r\n    cursor: pointer\r\n  }\r\n  "

/***/ }),

/***/ "./src/app/examenes/registrar/registrar.component.html":
/*!*************************************************************!*\
  !*** ./src/app/examenes/registrar/registrar.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<section class=\"content \">\n  <div class=\"block-header m_img_btn\">\n    <div class=\"row\">\n      <div class=\"col-lg-7 col-md-6 col-sm-12\">\n        <h2>Exámenes\n          <small></small>\n        </h2>\n      </div>\n      <div class=\"col-lg-5 col-md-6 col-sm-12\">\n        <ul class=\"breadcrumb float-md-right\">\n          <li class=\"breadcrumb-item\"><a routerLink=\"/dashboard/main\"><i class=\"zmdi zmdi-home\"></i> </a></li>\n          <li class=\"breadcrumb-item\"><a href=\"javascript:void(0);\">examenes</a></li>\n          <li class=\"breadcrumb-item active\">registrar</li>\n        </ul>\n      </div>\n    </div>\n  </div>\n  <div class=\"container-fluid\">\n \n    <!-- Horizontal Layout -->\n    <div class=\"row clearfix\">\n      <div class=\"col-lg-12 col-md-12 col-sm-12\">\n        <div class=\"card\">\n          <div class=\"header\">\n            <h2><strong>Registrar</strong> Examen</h2>\n            <ul class=\"header-dropdown\">\n              <li class=\"dropdown\"> <a href=\"javascript:void(0);\" class=\"dropdown-toggle\" data-toggle=\"dropdown\" role=\"button\" aria-haspopup=\"true\" aria-expanded=\"false\"> <i class=\"zmdi zmdi-more\"></i> </a>\n                <ul class=\"dropdown-menu dropdown-menu-right\">\n                  <li><a href=\"javascript:void(0);\">Action</a></li>\n                  <li><a href=\"javascript:void(0);\">Another action</a></li>\n                  <li><a href=\"javascript:void(0);\">Something else</a></li>\n                </ul>\n              </li>\n              <li class=\"remove\">\n                <a role=\"button\" class=\"boxs-close\"><i class=\"zmdi zmdi-close\"></i></a>\n              </li>\n            </ul>\n          </div>\n          <div class=\"body\">\n            <!--  \n            <form id=\"bigForm\">\n              <table>\n                <tr class='row'>\n                    <th class='col'>Name</th>\n                    <th class='col'>Job</th>\n                </tr>\n                <tr class='row' *ngFor=\"let person of personas; let i = index\" (click)=\"selectPerson(person)\" >\n                  <td class='col'>\n                    <input [(ngModel)]=\"person.nombre\" [name]=\"'persona'+i\"/>\n                    - {{person.nombre}}\n                  </td>\n                  <td class='col'>{{person.valor}}</td>\n                </tr>\n              </table>\n            </form>\n          -->\n          <datalist id=\"valores_examen\">\n            <option *ngFor=\"let s of subexamenes\" [value]=\"s.nombre\" ></option>\n          </datalist> \n            <form  ngNativeValidate   class=\"needs-validation\" #form=\"ngForm\" autocomplete=\"off\">  \n              <div class=\"row clearfix\">\n              <div class=\"col-lg-2 col-md-2 col-sm-4 form-control-label\">\n                <label for=\"nombre\" class=\"titulo\">Nombre</label>\n              </div>\n              <div class=\"col-lg-10 col-md-10 col-sm-8\">\n                <div class=\"form-group\">\n                    <input  type=\"text\" id=\"nombre\" name=\"nombre\" [(ngModel)]=\"examen.nombre\"  class=\"form-control titulo\" placeholder=\"Entra  nombre\" #nombre required>\n             \n                    <!--- <input  type=\"text\" id=\"nombre\" [(ngModel)]=\"form.persona.nombre\" name=\"nombre\" #nombre=\"ngModel\"  class=\"form-control\" placeholder=\"Entra tu nombre\" required>\n                </div>\n\n                <div *ngIf=\"nombre.invalid && (nombre.dirty || nombre.touched)\" class=\"alert alert-danger\">\n                \n                  <div *ngIf=\"nombre.errors.required\">\n                  nombre es requerido.\n                  </div>\n                                      </div>\n                                    -->\n              </div>\n            </div>\n            </div>\n\n          \n              <div class=\"row clearfix\">\n                <div class=\"col-lg-2 col-md-2 col-sm-4 form-control-label\">\n                  <label for=\"ap\">Area</label>\n                </div>\n                <div class=\"col-lg-10 col-md-10 col-sm-8\">\n                  <div >\n                    <select   placeholder=\"seleccione el area\" [(ngModel)]=\"examen.cod_area\"  class=\"form-control\"  (input)=\"asignarcod_area($event)\"  name=\"cod_area\" required>\n                   \n                      <option *ngFor=\"let area of areas\" [value]=\"area.cod_area\"  >{{area.nombre}}</option>\n                    \n                    </select>\n                    <!--\n                    <input [(ngModel)]=\"form.persona.ap\" name=\"ap\" #ap=\"ngModel\" class=\"form-control\" placeholder=\"Entra tu apellido paterno\" required>\n                  </div>\n              \n                  <div *ngIf=\"ap.invalid && (ap.dirty || ap.touched)\" class=\"alert alert-danger\">\n                                \n                    <div *ngIf=\"ap.errors.required\">\n                    apellido paterno  es requerido.\n                    </div>\n                                        </div>\n                                      -->\n                </div>\n              </div>\n              </div>\n<br>\n              <div class=\"row clearfix\">\n                <div class=\"col-lg-2 col-md-2 col-sm-4 form-control-label\">\n                  <label for=\"ap\">Unidades </label>\n                </div>\n                <div class=\"col-lg-10 col-md-10 col-sm-8\">\n                  <div class=\"form-group\">\n                      <input type=\"text\" [(ngModel)]=\"examen.unidades\" name=\"unidades\"  class=\"form-control\" placeholder=\"Entra unidades\" >\n              \n                    <!--\n                    <input [(ngModel)]=\"form.persona.am\" name=\"am\" #am=\"ngModel\" class=\"form-control\" placeholder=\"Entra tu apellido materno\" >\n                  </div>\n                  <div *ngIf=\"am.invalid && (am.dirty || am.touched)\" class=\"alert alert-danger\">\n                                \n                    <div *ngIf=\"am.errors.required\">\n                    apellido materno  es requerido.\n                    </div>\n                                        </div>\n                                      -->\n                </div>\n              </div>\n              </div>\n\n              <div class=\"row clearfix\">\n                <div class=\"col-md-2\">\n                  <div class=\"row clearfix\" style=\"padding-top: 3px;\">\n                    <div class=\"col-sm-8\">\n                      <div class=\"form-group\"><label for=\"ap\">Valores Referencia </label>\n                      </div>\n                    </div>\n                    <div class=\"col-sm-2\" style=\"padding-top:3px\">\n                      <div class=\"form-group\">  <a class=\"link\" (click)=\"agregarValoresReferencia()\">\n                      \n                        <i class=\"material-icons col-purple\">add_circle</i> <span class=\"icon-name\"></span>\n                      </a>\n                      </div>\n                    </div>\n                    <div class=\"col-sm-2\"  >\n                      <ng-container *ngFor=\"let p of examen.valores_referencia; let i = index;\" >\n                      <ng-container *ngIf=\"p.estado\">\n                    <div class=\"form-group\" style=\"padding-top:3px\"> \n                        <a class=\"link\" (click)=\"removerValoresReferencia(i)\">\n                      \n                          <i class=\"material-icons col-purple\">clear</i> <span class=\"icon-name\"></span>\n                        </a>\n                        </div>\n                        </ng-container>\n                        </ng-container>\n                    </div>\n\n                  </div>\n                </div>\n        \n                <div class=\"col-md-10\">\n                  <ng-container  *ngFor=\"let v of examen.valores_referencia; let i = index;\">\n      \n                    <ng-container *ngIf=\"v.estado\" >  \n                  <div class=\"row clearfix\"  >\n                  \n                    <div class=\"col-sm-4\" >\n                      <div class=\"form-group\">\n                        <input type=\"text\"  [(ngModel)]=\"examen.valores_referencia[i].valor_inicial\" [name]=\"'valor_incial' +i\" class=\"form-control\" placeholder=\"valor inicial\"  required/>\n                      </div>\n                    </div>\n                    <div class=\"col-sm-4\">\n                      <div class=\"form-group\">\n                        <input type=\"text\"   [(ngModel)]=\"examen.valores_referencia[i].valor_final\" [name]=\"'valor_final' + i\" class=\"form-control\" placeholder=\"valor final\"  required/>\n                      </div>\n                    </div>\n                    <div class=\"col-sm-4\">\n                      <div >\n                        <select class=\"form-control\" [(ngModel)]=\"examen.valores_referencia[i].tipo_persona\" [name]=\"'tipo_persona' + i\"   >\n                          <option  [value]=\"e.valor\" *ngFor=\" let e of personas\">{{e.nombre}}</option>\n                         \n                         </select>\n                      </div>\n                    </div>\n                  </div>\n                   \n              </ng-container>\n            </ng-container>\n                  </div>\n                \n                </div> \n              \n                  \n                \n              <!--\n                (ngModelChange)=\"setestado($event)\"\n            <ng-select>\n                     <ng-option [value]=\"e\" *ngFor=\" let e of personas\">{{e}}</ng-option> \n                    </ng-select>\n                  --> \n          \n\n<!--prefcio-->\n\n            <div class=\"row clearfix\">\n              <div class=\"col-md-2\" >\n               \n            \n                <div class=\"row clearfix\" style=\"padding-top:2px\" >\n                  <div class=\"col-sm-8\">\n                    <div class=\"form-group\"  ><label for=\"ap\">Precio </label>\n                    </div>\n                  </div>\n                  <div class=\"col-sm-2\">\n                    <div class=\"form-group\"  >  <a  (click)=\"agregarPrecio()\" class=\"link\">\n                   \n                      <i class=\"material-icons col-purple\">add_circle</i> <span class=\"icon-name\"></span>\n                    </a>\n                    </div>\n                  </div>\n              \n\n                  <div class=\"col-sm-2\" >\n                    <ng-container *ngFor=\"let p of examen.precios; let i = index;\" >\n                      <ng-container *ngIf=\"p.estado\">\n                    <div class=\"form-group\" style=\"padding-top:2px;\"  > \n                      <a  class=\"link\" (click)=\"removerPrecio(i)\"> \n                    \n                        <i class=\"material-icons col-purple\">clear</i> <span class=\"icon-name\"></span>\n                      </a>\n                      </div>\n                    </ng-container>\n                  </ng-container>\n                  </div>\n               \n            \n               \n                </div>\n              \n              \n              </div>\n            \n              \n              <div class=\"col-md-10\" >\n            <!--inputs-->\n            <ng-container  *ngFor=\"let p of examen.precios; let i = index;\">\n              <ng-container *ngIf=\"p.estado\">\n                <div class=\"row clearfix\">\n                \n                \n                  <div class=\"col-sm-6\">\n                    <div class=\"form-group\">\n                      <input type=\"text\" [(ngModel)]=\"examen.precios[i].costo\" [name]=\"'costo' + i\"  class=\"form-control\"   placeholder=\"costo\" required/>\n                    </div>\n                  </div>\n                  <div class=\"col-sm-6\">\n                    <div >\n                      <select  class=\"form-control\" [(ngModel)]=\"examen.precios[i].cod_institucion\" [name]=\"'cod_institucion' + i\"   required>\n                        <option  [value]=\"i.cod_institucion\"  *ngFor=\" let i of instituciones\">{{i.nombre}}</option>\n                       \n                       </select>\n                    </div>\n                  </div>\n                </div>\n                </ng-container>\n                </ng-container>\n             <!--fin de inputs-->\n                </div>\n                \n                  \n                     \n               \n                <div *ngIf=\"false\" class=\"alert alert-danger\"> Agregue precio al examen</div>\n            </div>\n            <!--fin-->\n            \n            <div style=\"display:none\"  class=\"row clearfix\">\n            <div class=\"col-lg-2 col-md-2 col-sm-4 form-control-label\">\n             \n            \n              <div class=\"row clearfix\">\n                <div class=\"col-sm-8\">\n                  <div class=\"form-group\"><label for=\"ap\">Resultados por defecto </label>\n                  </div>\n                </div>\n                <div class=\"col-sm-2\">\n                  <div class=\"form-group\">   <a  (click)=\"agregarResultados()\" class=\"link\">\n                   \n                    <i class=\"material-icons col-purple\">add_circle</i> <span class=\"icon-name\"></span>\n                  </a>\n                  </div>\n                </div>\n                <div class=\"col-sm-2\" *ngIf=\"examen.resultados_por_defecto.length>0\">\n                  <div class=\"form-group\"> \n                    <a class=\"link\" (click)=\"removerResultados(0)\">\n                  \n                      <i class=\"material-icons col-purple\">clear</i> <span class=\"icon-name\"></span>\n                    </a>\n                    </div>\n                </div>\n              </div>\n            </div>\n            \n              <ng-container *ngFor=\"let direccion of examen.resultados_por_defecto; let i = index;\">\n                <ng-container *ngIf=\"i==0\">\n            <div class=\"col-lg-10 col-md-10 col-sm-8\"  >\n            \n              <div class=\"row clearfix\" >\n              \n              \n                <div class=\"col-sm-12\">\n                  <div class=\"form-group\">\n                    <input type=\"text\"  [(ngModel)]=\"examen.resultados_por_defecto[i].valor\"  [name]=\"'valor' + i\"  class=\"form-control\"   placeholder=\"resultados por defecto\"  required/>\n                  </div>\n                </div>\n              \n              </div>\n            \n            </div>\n            </ng-container>\n            \n            <ng-container *ngIf=\"i!=0\">\n              <div class=\"col-lg-2 col-md-2 col-sm-4 form-control-label\">\n             \n            \n                <div class=\"row clearfix\">\n                  <div class=\"col-sm-8\">\n                  \n                  </div>\n                  <div class=\"col-sm-2\">\n                    <div class=\"form-group\">   \n                    </div>\n                  </div>\n                  <div class=\"col-sm-2\" *ngIf=\"examen.resultados_por_defecto.length>0\">\n                    <div class=\"form-group\"> \n                      <a class=\"link\" (click)=\"removerResultados(i)\">\n                    \n                        <i class=\"material-icons col-purple\">clear</i> <span class=\"icon-name\"></span>\n                      </a>\n                      </div>\n                  </div>\n                </div>\n              </div>\n              <div class=\"col-lg-10 col-md-10 col-sm-8\"  >\n            \n                <div class=\"row clearfix\"  >\n                \n                \n                  <div class=\"col-sm-12\">\n                    <div class=\"form-group\">\n                      <input type=\"text\"  [(ngModel)]=\"examen.resultados_por_defecto[i].valor\"  [name]=\"'valor' + i\"  class=\"form-control\"   placeholder=\"resultados por defecto\"  required/>\n                    </div>\n                  </div>\n                \n                </div>\n             \n              </div>\n            </ng-container>\n            </ng-container>\n            </div>\n            <!-- subexamen-->\n            <div class=\"row clearfix\" *ngIf=\"examen.area.cod_area!=0\">\n              <div class=\"col-lg-2 col-md-2 col-sm-4 form-control-label\">\n               \n              \n                <div class=\"row clearfix\">\n                  <div class=\"col-sm-8\">\n                    <div class=\"form-group\"><label for=\"ap\">Incluir exámenes</label>\n                    </div>\n                  </div>\n                  <div class=\"col-sm-4\">\n                    <div class=\"form-group\" style=\"padding-top:3px\">  <a  (click)=\"agregarsubexamen()\" class=\"link\">\n                   \n                      <i class=\"material-icons col-purple\">add_circle</i> <span class=\"icon-name\"></span>\n                    </a>\n                    </div>\n                  </div>\n                 \n                </div>\n              </div>\n    \n                <div class=\"col-lg-10 col-md-10 col-sm-8\"  >\n                  <ng-container  *ngFor=\"let subexamen of examen.subexamenes; let i = index;\">\n                    <ng-container *ngIf=\"subexamen.estado\">\n                    <div class=\"row clearfix\"  >\n                      <div class=\"card\" style=\"border: blue solid 1px\">\n                        <div class=\"header\">\n                          <h2><strong>Examen </strong> <small></small> </h2>\n                          <ul class=\"header-dropdown\">\n                           \n                            <li >\n                              <a class=\"link\" (click)=\"removersubexamen(i)\">\n                          \n                                <i class=\"material-icons col-purple\">clear</i> <span class=\"icon-name\"></span>\n                              </a>\n                            </li>\n                          </ul>\n                        </div>\n                        <div class=\"body\">\n                          <div class=\"row clearfix\">\n                            <div class=\"col-md-2\">\n                              <label for=\"nombre\">Nombre:</label>\n                            </div>\n                            <div class=\"col-md-10\">\n                              <div class=\"form-group\">\n                                <input type=\"text\"  [(ngModel)]=\"subexamen.nombre\"  [name]=\"'nombre' + i\" class=\"form-control titulo\"  list=\"valores_examen\" (input)=\"cambio($event,i)\" placeholder=\"\" required/>\n                              </div>\n                            </div>\n                          </div>\n                  \n                          <div class=\"row clearfix\">\n                              <div class=\"col-md-2\">\n                                <label for=\"nombre\">Unidades:</label>\n                              </div>\n                              <div class=\"col-md-10\">\n                                <div class=\"form-group\">\n                                  <input type=\"text\"  [(ngModel)]=\"subexamen.unidades\"  [name]=\"'unidades' + i\" class=\"form-control\"   placeholder=\"\"/>\n                                </div>\n                              </div>\n                            </div>\n                  \n    \n    \n                            <!--  valor de referencia de subexamen-->\n                            <div class=\"row clearfix\">\n                                <div class=\"col-md-2\">\n                                  <div class=\"row clearfix\" style=\"padding-top:3px\">\n                                    <div class=\"col-sm-6\">\n                                      <div class=\"form-group\"><label for=\"ap\">Valor de referencia </label>\n                                      </div>\n                                    </div>\n                                    <div class=\"col-sm-3\">\n                                     \n                                      <div class=\"form-group\" style=\"padding-top:3px\"> \n                                         <a (click)=\"agregarValoresReferencia_de_subexamen(i)\" class=\"link\">\n                       \n                                        <i class=\"material-icons col-purple\">add_circle</i> <span class=\"icon-name\"></span>\n                                      </a>\n                                        </div>\n                                        \n                                    </div>\n                                    <div class=\"col-sm-3\"  >\n                                      <ng-container *ngFor=\"let v of subexamen.valores_referencia; let in = index;\">\n                                  \n                                        <ng-container *ngIf=\"v.estado\">\n                                      <div class=\"form-group\" style=\"padding-top:2px\"> \n\n                                        <a (click)=\"removerValoresReferencia_de_subexamen(i,in)\" class=\"link\">\n                       \n                                        <i class=\"material-icons col-purple\">clear</i> <span class=\"icon-name\"></span>\n                                      </a>\n                                        </div>\n                                        </ng-container>\n                                      </ng-container>\n                                    </div>\n                                  </div>\n                                </div>\n                             \n                                    <div class=\"col-md-10\"   >\n                                      <ng-container *ngFor=\"let v of subexamen.valores_referencia; let in = index;\">\n                                  \n                                      <ng-container *ngIf=\"v.estado\">\n                                         <!-- valor referencia de subexamen-->\n                                         <div class=\"row clearfix\"  >\n                                             <div class=\"col-sm-4\" >\n                                               <div class=\"form-group\">\n                                                 <input type=\"text\"    [(ngModel)]=\"subexamen.valores_referencia[in].valor_inicial\"  [name]=\"'valor_inicial' + in+'de subexamen'+i\"  class=\"form-control\" placeholder=\"\" required />\n                                               </div>\n                                             </div>\n                                             <div class=\"col-sm-4\">\n                                               <div class=\"form-group\">\n                                                 <input type=\"text\" [(ngModel)]=\"subexamen.valores_referencia[in].valor_final\"  [name]=\"'valor_final' + in+'de subexamen'+i\" class=\"form-control\" placeholder=\"\" required/>\n                                               </div>\n                                             </div>\n                                             <div class=\"col-sm-4\">\n                                               <div class=\"form-group\">\n                                                 <ng-select [(ngModel)]=\"subexamen.valores_referencia[in].tipo_persona\"  [name]=\"'tipo_persona' + in+'de subexamen'+i\"  >\n                                                   <ng-option  [value]=\"e.valor\" *ngFor=\" let e of personas\">{{e.nombre}}</ng-option>\n                                                  \n                                                  </ng-select>\n                                               </div>\n                                             </div>\n                                           </div>\n                                           </ng-container>\n                                         </ng-container>\n                                         <!--fin-->\n                                      \n                                     </div>\n                              \n                                 \n                           \n                              </div>\n                              <!---  fin de valor de referenci de subexamen-->\n    \n                              <!-- subexamende subexamen-->\n                              <div class=\"row clearfix\">\n                                <div class=\"col-md-2\">\n                                  <div class=\"row clearfix\">\n                                    <div class=\"col-sm-6\">\n                                      <div class=\"form-group\"><label for=\"ap\">Examen </label>\n                                      </div>\n                                    </div>\n                                    <div class=\"col-sm-3\">\n                                      <div class=\"form-group\">  <a (click)=\"agregarsubexamenalsubexamen(i)\" class=\"link\">\n                       \n                                        <i class=\"material-icons col-purple\">add_circle</i> <span class=\"icon-name\"></span>\n                                      </a>\n                                        </div>\n                                    </div>\n                                    <div class=\"col-sm-3\" >\n                                      <div class=\"form-group\">  \n                                        </div>\n                                    </div>\n                                  </div>\n                                </div>\n                               \n                                    <div class=\"col-md-10\" >\n                                      <ng-container *ngFor=\"let subexamen2 of subexamen.subexamenes; let ii = index;\">\n                           <ng-container *ngIf=\"subexamen2.estado\">\n                                        <div class=\"row clearfix\"  >\n                                          <div class=\"card\" style=\"border: blue solid 1px\">\n                                            <div class=\"header\">\n                                              <h2><strong>Examen </strong> <small></small> </h2>\n                                              <ul class=\"header-dropdown\">\n                                               \n                                                <li >\n                                                  <a class=\"link\" (click)=\"removersubexamendelsubexamen(i,ii)\">\n                                              \n                                                    <i class=\"material-icons col-purple\">clear</i> <span class=\"icon-name\"></span>\n                                                  </a>\n                                                </li>\n                                              </ul>\n                                            </div>\n                                            <div class=\"body\">\n                                              <div class=\"row clearfix\">\n                                                <div class=\"col-md-2\">\n                                                  <label for=\"nombre\">Nombre:</label>\n                                                </div>\n                                                <div class=\"col-md-10\">\n                                                  <div class=\"form-group\">\n                                                    <input type=\"text\"  [(ngModel)]=\"subexamen2.nombre\"  [name]=\"'nombre' + ii+'subexamen2'+i\" class=\"form-control titulo\"  (input)=\"cambio2($event,i,ii)\" list=\"valores_examen\" placeholder=\"\" required/>\n                                                  </div>\n                                                </div>\n                                              </div>\n                                      \n                                              <div class=\"row clearfix\">\n                                                  <div class=\"col-md-2\">\n                                                    <label for=\"nombre\">Unidades:</label>\n                                                  </div>\n                                                  <div class=\"col-md-10\">\n                                                    <div class=\"form-group\">\n                                                      <input type=\"text\"  [(ngModel)]=\"subexamen2.unidades\"  [name]=\"'unidades' + ii+'subexamen2'+i\" class=\"form-control\"   placeholder=\"\"/>\n                                                    </div>\n                                                  </div>\n                                                </div>\n                                      \n                        \n                        \n                                                <!--  valor de referencia de subexamen de subexamen-->\n                                                <div class=\"row clearfix\">\n                                                    <div class=\"col-md-2\">\n                                                      <div class=\"row clearfix\" style=\"padding-top:3px\">\n                                                        <div class=\"col-sm-6\">\n                                                          <div class=\"form-group\"><label for=\"ap\">Valor de referencia </label>\n                                                          </div>\n                                                        </div>\n                                                        <div class=\"col-sm-3\">\n                                                          <div class=\"form-group\" style=\"padding-top:4px\">  <a (click)=\"agregarValoresReferencia_de_subexamen_de_subexamen(i,ii)\" class=\"link\">\n                                           \n                                                            <i class=\"material-icons col-purple\">add_circle</i> <span class=\"icon-name\"></span>\n                                                          </a>\n                                                            </div>\n                                                        </div>\n                                                        <div class=\"col-sm-3\" >\n                                                          \n                                                          <ng-container *ngFor=\"let v2 of subexamen2.valores_referencia; let inin = index;\">\n                                                     \n                                                            <ng-container *ngIf=\"v2.estado\">\n                                                          <div class=\"form-group\" style=\"padding-top:3px\"> \n                                                             <a (click)=\"removerValoresReferencia_de_subexamen_de_subexamen(i,ii,inin)\" class=\"link\">\n                                           \n                                                            <i class=\"material-icons col-purple\">clear</i> <span class=\"icon-name\"></span>\n                                                          </a>\n                                                            </div>\n                                                            </ng-container>\n                                                            </ng-container>\n                                                        </div>\n                                                      </div>\n                                                    </div>\n                                                   \n                                                        <div class=\"col-md-10\"   >\n                                                          <ng-container *ngFor=\"let v2 of subexamen2.valores_referencia; let inin = index;\">\n                                                     \n                                                          <ng-container *ngIf=\"v2.estado\">\n                                                             <!-- valor referencia de subexamen desubexamen-->\n                                                             <div class=\"row clearfix\"  >\n                                                                 <div class=\"col-sm-4\" >\n                                                                   <div class=\"form-group\">\n                                                                     <input type=\"text\"    [(ngModel)]=\"subexamen2.valores_referencia[inin].valor_inicial\"  [name]=\"'valor_inicial' + inin+'de subexamen2'+ii+'de subexamen'+i\"  class=\"form-control\" placeholder=\"\" required />\n                                                                   </div>\n                                                                 </div>\n                                                                 <div class=\"col-sm-4\">\n                                                                   <div class=\"form-group\">\n                                                                     <input type=\"text\" [(ngModel)]=\"subexamen2.valores_referencia[inin].valor_final\"  [name]=\"'valor_final' + inin+'de subexamen2'+ii+'de subexamen'+i\" class=\"form-control\" placeholder=\"\" required/>\n                                                                   </div>\n                                                                 </div>\n                                                                 <div class=\"col-sm-4\">\n                                                                   <div class=\"form-group\">\n                                                                     <ng-select [(ngModel)]=\"subexamen2.valores_referencia[inin].tipo_persona\"  [name]=\"'tipo_persona' + inin+'de subexamen2'+ii+'de subexamen'+i\"  >\n                                                                       <ng-option  [value]=\"e.valor\" *ngFor=\" let e of personas\">{{e.nombre}}</ng-option>\n                                                                      \n                                                                      </ng-select>\n                                                                   </div>\n                                                                 </div>\n                                                               </div>\n                                                             </ng-container>\n                                                             </ng-container>\n                                                             <!--fin-->\n                                                          \n                                                         </div>\n                                                  \n                                               \n                                                  </div>\n                                                  <!---  fin de valor de referenci de subexamen-->\n                                            </div>\n                                          </div>\n                                        <!---\n                                          <div class=\"col-sm-12\">\n                                            <div class=\"form-group\">\n                                              <input type=\"text\"  [(ngModel)]=\"subexamen.nombre\"  name=\"'nombre_subexamen' + i\" class=\"form-control\"  [attr.id]=\"'nombre_subexamen' + i\" formControlName=\"nombre_subexamen\" placeholder=\"'nombre_subexamen' + i\" />\n                                            </div>\n                                          </div>\n                                        -->\n                                        </div>\n                                      </ng-container>\n                                      </ng-container>\n                                        </div>\n                                \n                            \n                           \n                              </div>\n                              <!-- fin de subexmen de subexame-->\n                        </div>\n                      </div>\n                    <!---\n                      <div class=\"col-sm-12\">\n                        <div class=\"form-group\">\n                          <input type=\"text\"  [(ngModel)]=\"subexamen.nombre\"  name=\"'nombre_subexamen' + i\" class=\"form-control\"  [attr.id]=\"'nombre_subexamen' + i\" formControlName=\"nombre_subexamen\" placeholder=\"'nombre_subexamen' + i\" />\n                        </div>\n                      </div>\n                    -->\n                    </div>\n                  </ng-container>\n                </ng-container>\n                    </div>\n              \n          \n              </div>\n\n              <div class=\"row clearfix\">\n                <div class=\"col-sm-8 offset-sm-2\">\n                  \n                </div>\n                \n                <div class=\"col-sm-8 offset-sm-2\">\n\n                <button type=\"button\"  id=\"guarda\"  class=\"btn btn-raised btn-secondary btn-round waves-effect\"   >Salir</button>\n                </div>\n                <div class=\"col-sm-8 offset-sm-2\">\n                  <button   data-type=\"autoclose-timer\" type=\"submit\" (click)=\"onSubmit(form)\" class=\"btn btn-raised btn-primary btn-round waves-effect\"   >Guardar</button>\n                </div>\n              </div>\n\n\n            </form>\n\n\n         \n         <!--   \n\n            <form [formGroup]=\"formGroup\" (ngSubmit)=\"onSubmit()\">\n  \n              <label for=\"name\"> Nombre: </label>\n              <input id=\"name\" type=\"text\" formControlName=\"nombre\">\n              <br/>    \n            \n              <label for=\"description\"> Descripcion: </label>\n              <textarea id=\"description\" type=\"textarea\" formControlName=\"description\" rows=\"3\" cols=\"20\"></textarea>\n          \n              <br/>\n            \n              <label for=\"year\"> Año: </label>\n              <input id=\"year\" type=\"number\" formControlName=\"year\">\n              <br/>\n              \n              <label for=\"price\"> Precio: </label>\n              <input id=\"price\" type=\"number\" formControlName=\"price\">\n              <br/>\n          \n              <button type=\"submit\" [disabled]=\"productForm.invalid\" >Submit</button>\n            \n            </form>\n          -->\n\n\n\n\n          </div>\n        </div>\n      </div>\n    </div>\n \n  </div>\n  \n</section>"

/***/ }),

/***/ "./src/app/examenes/registrar/registrar.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/examenes/registrar/registrar.component.ts ***!
  \***********************************************************/
/*! exports provided: RegistrarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegistrarComponent", function() { return RegistrarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _examenes_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../examenes.service */ "./src/app/examenes/examenes.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _models__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../models */ "./src/app/models/index.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var RegistrarComponent = /** @class */ (function () {
    function RegistrarComponent(titleCasePipe, datePipe, fb, examenesService, router) {
        var _this = this;
        this.titleCasePipe = titleCasePipe;
        this.datePipe = datePipe;
        this.fb = fb;
        this.examenesService = examenesService;
        this.router = router;
        this.control = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('');
        this.index = 0;
        this.mostrar = "none";
        this.indice = 0;
        this.examensito = new _models__WEBPACK_IMPORTED_MODULE_4__["Examen"]();
        this.subexamenes = [];
        this.i_valor_r = 0;
        var capitalize = function (s) {
            if (typeof s !== 'string')
                return '';
            return s.charAt(0).toUpperCase() + s.slice(1);
        };
        this.subexamenes[0] = new _models__WEBPACK_IMPORTED_MODULE_4__["Examen"]();
        this.control.valueChanges.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["debounceTime"])(450)).subscribe(function (value) {
            console.log("hola" + value);
            _this.examenesService.subexamensPorCaracter(value, 3).subscribe(function (examenes) {
                _this.subexamenes = examenes;
                console.log(_this.subexamenes);
            });
        });
        // Add an initial pet form-entry.
        this.examen = new _models__WEBPACK_IMPORTED_MODULE_4__["Examen"]();
        this.control.valueChanges.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["debounceTime"])(450)).subscribe(function (value) {
            console.log("hola" + value);
            _this.examen.nombre = value;
            if (!_this.examen.nombre)
                return;
            // almacenamos la mayuscula
            var mayuscula = _this.examen.nombre.substring(0, 1).toUpperCase();
            //si la palabra tiene más de una letra almacenamos las minúsculas
            if (_this.examen.nombre.length > 0) {
                var minuscula = _this.examen.nombre.substring(1).toLowerCase();
            }
            //escribimos la palabra con la primera letra mayuscula
            _this.examen.nombre = mayuscula.concat(minuscula);
            console.log(_this.examen.nombre);
        });
        this.examensito.valores_referencia = [];
        this.examensito.valores_referencia[0] = new _models__WEBPACK_IMPORTED_MODULE_4__["Valor_referencia"]();
        this.examenesService.obtenerExamen(this.examen.cod_examen).subscribe(function (examen) {
            _this.examen = examen;
        });
        this.examenesService.getInstitucionesConPrecio().subscribe(function (i) {
            _this.instituciones = i;
            console.log(_this.instituciones);
        });
        this.personas = [];
        this.personas = [{ nombre: 'Adultos', valor: 'A.' }, { nombre: 'Niños', valor: 'N.' }, { nombre: 'Masculino', valor: 'M.' }, { nombre: 'Femenino', valor: 'F.' }];
        this.examen.resultados_por_defecto = [];
        this.examen.precios = [];
        this.examen.valores_referencia = [];
        this.examen.subexamenes = [];
        examenesService.getAllAreas().subscribe(function (data) {
            _this.areas = data;
        });
    }
    RegistrarComponent.prototype.colocar_en_mayuscula = function () {
        /*
        let minuscula="";
        let nombre_examen=this.nombre.nativeElement
        console.log(nombre_examen.value);
        if(!this.examen.nombre) return;
        // almacenamos la mayuscula
        var mayuscula = this.examen.nombre.substring(0,1).toUpperCase();
        console.log(mayuscula);
        this.examen.nombre = mayuscula.concat(minuscula);
        //si la palabra tiene más de una letra almacenamos las minúsculas
        if (this.examen.nombre.length > 0) {
        minuscula = this.examen.nombre.substring(1).toLowerCase();
        }
        //escribimos la palabra con la primera letra mayuscula
        this.examen.nombre = mayuscula.concat(minuscula);
        */
        this.examen.nombre = this.capitalize(this.examen.nombre);
        console.log(this.examen.nombre);
    };
    RegistrarComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.formGroup = this.fb.group({
            nombre: this.examen.nombre,
            area: this.fb.group({
                nombre: '',
                cod_area: this.examen.cod_area
            }),
            unidades: this.examen.unidades,
            //valores_referencia_subexamen: this.fb.array([]),
            precios: this.fb.array([]),
            resultados_por_defecto: this.fb.array([]),
            subexamenes: this.fb.array([]),
        });
        this.formGroup.valueChanges.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["debounceTime"])(500))
            .subscribe(function (value) {
            console.log(value);
            console.log(_this.otroFormGroup.value);
        });
        this.otroFormGroup = this.fb.group(this.formGroup);
        this.examenesService.obtenerExamen(1).subscribe(function (examen) {
            _this.otroFormGroup = _this.fb.group(examen);
            console.log(_this.otroFormGroup.value);
        });
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
    RegistrarComponent.prototype.agregarValoresReferencia = function () {
        this.examen.valores_referencia.push(new _models__WEBPACK_IMPORTED_MODULE_4__["Valor_referencia"]());
        this.examen.valores_referencia[this.examen.valores_referencia.length - 1].cod_examen = this.examen.cod_examen;
        this.examen.valores_referencia[this.examen.valores_referencia.length - 1].fecha = this.datePipe.transform(new Date(), "dd-MM-yyyy");
    };
    RegistrarComponent.prototype.removerValoresReferencia = function (indice) {
        // this.examen.valores_referencia.splice(indice,1)
        this.examen.valores_referencia[indice].estado = false;
        //this.examen.valores_referencia.push(this.examen.valores_referencia[indice])
        // this.examen.valores_referencia.splice(indice,1);
    };
    RegistrarComponent.prototype.agregarResultados = function () {
        this.examen.resultados_por_defecto.push(new _models__WEBPACK_IMPORTED_MODULE_4__["Resultados_por_defecto"]());
    };
    RegistrarComponent.prototype.removerResultados = function (indice) {
        this.examen.resultados_por_defecto.splice(indice, 1);
    };
    RegistrarComponent.prototype.agregarPrecio = function () {
        this.examen.precios.push(new _models__WEBPACK_IMPORTED_MODULE_4__["Precio_examen"]());
        this.examen.precios[this.examen.precios.length - 1].cod_examen = this.examen.cod_examen;
    };
    RegistrarComponent.prototype.removerPrecio = function (indice) {
        this.examen.precios[indice].estado = false;
        //this.examen.precios.unshift(this.examen.precios[indice])
        //this.examen.precios.splice(indice,1)
    };
    RegistrarComponent.prototype.agregarsubexamen = function () {
        this.examen.subexamenes.push(new _models__WEBPACK_IMPORTED_MODULE_4__["Examen"]());
        this.examen.subexamenes[this.examen.subexamenes.length - 1].cod_area = this.examen.cod_area;
        this.examen.subexamenes[this.examen.subexamenes.length - 1].nombre = this.capitalize(this.examen.subexamenes[this.examen.subexamenes.length - 1].nombre);
    };
    RegistrarComponent.prototype.removersubexamen = function (indice) {
        //this.examen.subexamenes.splice(indice,1);
        this.examen.subexamenes[indice].estado = false;
    };
    RegistrarComponent.prototype.agregarValoresReferencia_de_subexamen = function (i) {
        this.examen.subexamenes[i].valores_referencia.push(new _models__WEBPACK_IMPORTED_MODULE_4__["Valor_referencia"]());
        this.examen.subexamenes[i].valores_referencia[this.examen.subexamenes[i].valores_referencia.length - 1].cod_examen = this.examen.subexamenes[i].cod_examen;
    };
    RegistrarComponent.prototype.removerValoresReferencia_de_subexamen = function (indice_subexamen, indice_valor_referencia_de_subexamen) {
        // this.examen.subexamenes[i].valores_referencia.push(new Valor_referencia())
        //this.examen.subexamenes[indice_subexamen].valores_referencia.splice(indice_valor_referencia_de_subexamen,1);
        this.examen.subexamenes[indice_subexamen].valores_referencia[indice_valor_referencia_de_subexamen].estado = false;
    };
    RegistrarComponent.prototype.agregarsubexamenalsubexamen = function (indice_subexamen) {
        this.examen.subexamenes[indice_subexamen].subexamenes.push(new _models__WEBPACK_IMPORTED_MODULE_4__["Examen"]());
    };
    RegistrarComponent.prototype.removersubexamendelsubexamen = function (indice_subexamen, posicion) {
        //this.examen.subexamenes[indice_subexamen].subexamenes.splice(posicion,1)
        this.examen.subexamenes[indice_subexamen].subexamenes[posicion].estado = false;
    };
    RegistrarComponent.prototype.agregarValoresReferencia_de_subexamen_de_subexamen = function (i, ii) {
        this.examen.subexamenes[i].subexamenes[ii].valores_referencia.push(new _models__WEBPACK_IMPORTED_MODULE_4__["Valor_referencia"]());
    };
    RegistrarComponent.prototype.removerValoresReferencia_de_subexamen_de_subexamen = function (i, ii, indice_valor_referencia_de_subexamen_nivel2) {
        // this.examen.subexamenes[i].valores_referencia.push(new Valor_referencia())
        //this.examen.subexamenes[i].subexamenes[ii].valores_referencia.splice(indice_valor_referencia_de_subexamen_nivel2,1);
        this.examen.subexamenes[i].subexamenes[ii].valores_referencia[indice_valor_referencia_de_subexamen_nivel2].estado = false;
    };
    RegistrarComponent.prototype.onSubmit = function (form) {
        //this.examen.nombre=this.titleCasePipe.transform(this.examen.nombre)
        console.log(this.examen);
        this.examen.nombre = this.capitalize(this.examen.nombre);
        for (var i = 0; i < this.examen.subexamenes.length; i++) {
            this.examen.subexamenes[i].nombre = this.capitalize(this.examen.subexamenes[i].nombre);
            for (var j = 0; j < this.examen.subexamenes[i].subexamenes.length; j++) {
                this.examen.subexamenes[i].subexamenes[j].nombre = this.capitalize(this.examen.subexamenes[i].subexamenes[j].nombre);
            }
        }
        console.log(this.examen);
    };
    // I remove the pet at the given index.  indice_valor_referencia_de_subexamen
    RegistrarComponent.prototype.cambio = function (valor, i) {
        var _this = this;
        console.log(valor);
        if (valor.target.value == '') {
            this.examen.subexamenes[i] = new _models__WEBPACK_IMPORTED_MODULE_4__["Examen"]();
        }
        this.examenesService.subexamensPorCaracter(valor.target.value, this.examen.cod_area).subscribe(function (examenes) {
            _this.subexamenes = examenes;
            console.log(_this.subexamenes);
            if (_this.subexamenes.length == 1 && _this.subexamenes[0].nombre == valor.target.value) {
                _this.examen.subexamenes[i] = _this.subexamenes[0];
            }
        });
    };
    RegistrarComponent.prototype.cambio2 = function (valor, i, ii) {
        var _this = this;
        console.log(valor);
        if (valor.target.value == '') {
            this.examen.subexamenes[i].subexamenes[ii] = new _models__WEBPACK_IMPORTED_MODULE_4__["Examen"]();
        }
        this.examenesService.subexamensPorCaracter(valor.target.value, this.examen.cod_area).subscribe(function (examenes) {
            _this.subexamenes = examenes;
            console.log(_this.subexamenes);
            if (_this.subexamenes.length == 1 && _this.subexamenes[0].nombre == valor.target.value) {
                _this.examen.subexamenes[i].subexamenes[ii] = _this.subexamenes[0];
            }
        });
    };
    RegistrarComponent.prototype.asignarcod_area = function (i) {
        //alert(i.target.value)
        this.examen.area.cod_area = i.target.value;
    };
    RegistrarComponent.prototype.a = function () {
        event.preventDefault();
        window.location.href = 'http://www.google.com';
    };
    RegistrarComponent.prototype.skillsHandleEnter = function (event, skillString) {
        event.preventDefault();
        // ... your logic
    };
    RegistrarComponent.prototype.capitalize = function (s) {
        if (typeof s !== 'string')
            return '';
        return s.charAt(0).toUpperCase() + s.slice(1);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('nombre'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], RegistrarComponent.prototype, "nombre", void 0);
    RegistrarComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-registrar',
            template: __webpack_require__(/*! ./registrar.component.html */ "./src/app/examenes/registrar/registrar.component.html"),
            styles: [__webpack_require__(/*! ./registrar.component.css */ "./src/app/examenes/registrar/registrar.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_common__WEBPACK_IMPORTED_MODULE_5__["TitleCasePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["DatePipe"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"], _examenes_service__WEBPACK_IMPORTED_MODULE_2__["ExamenesService"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], RegistrarComponent);
    return RegistrarComponent;
}());



/***/ })

}]);
//# sourceMappingURL=app-examenes-examenes-module.js.map