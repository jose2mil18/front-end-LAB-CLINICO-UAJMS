(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"app/app/app.module": [
		"./src/app/app/app.module.ts",
		"default~app-app-app-module~app-forms-forms-module",
		"common",
		"app-app-app-module"
	],
	"app/authentication/authentication.module": [
		"./src/app/authentication/authentication.module.ts",
		"app-authentication-authentication-module"
	],
	"app/dashboard/dashboard.module": [
		"./src/app/dashboard/dashboard.module.ts",
		"app-dashboard-dashboard-module"
	],
	"app/dosificaciones/dosificaciones.module": [
		"./src/app/dosificaciones/dosificaciones.module.ts",
		"default~app-dosificaciones-dosificaciones-module~app-examenes-examenes-module~app-pacientes-paciente~a01507b6",
		"common",
		"app-dosificaciones-dosificaciones-module"
	],
	"app/ecommerce/ecommerce.module": [
		"./src/app/ecommerce/ecommerce.module.ts",
		"app-ecommerce-ecommerce-module"
	],
	"app/examenes/examenes.module": [
		"./src/app/examenes/examenes.module.ts",
		"default~app-dosificaciones-dosificaciones-module~app-examenes-examenes-module~app-pacientes-paciente~a01507b6",
		"common",
		"app-examenes-examenes-module"
	],
	"app/forms/forms.module": [
		"./src/app/forms/forms.module.ts",
		"default~app-app-app-module~app-forms-forms-module",
		"common",
		"app-forms-forms-module"
	],
	"app/pacientes/pacientes.module": [
		"./src/app/pacientes/pacientes.module.ts",
		"default~app-dosificaciones-dosificaciones-module~app-examenes-examenes-module~app-pacientes-paciente~a01507b6",
		"common",
		"app-pacientes-pacientes-module"
	],
	"app/reportes/reportes.module": [
		"./src/app/reportes/reportes.module.ts",
		"default~app-dosificaciones-dosificaciones-module~app-examenes-examenes-module~app-pacientes-paciente~a01507b6",
		"default~app-reportes-reportes-module~app-resultados-resultados-module~app-usuarios-usuarios-module",
		"common",
		"app-reportes-reportes-module"
	],
	"app/resultados/resultados.module": [
		"./src/app/resultados/resultados.module.ts",
		"default~app-dosificaciones-dosificaciones-module~app-examenes-examenes-module~app-pacientes-paciente~a01507b6",
		"default~app-resultados-resultados-module~app-solicitudes-solicitudes-module~app-usuarios-usuarios-mo~9971e8e9",
		"default~app-reportes-reportes-module~app-resultados-resultados-module~app-usuarios-usuarios-module",
		"default~app-resultados-resultados-module~app-usuarios-usuarios-module",
		"common",
		"app-resultados-resultados-module"
	],
	"app/sample-pages/sample-pages.module": [
		"./src/app/sample-pages/sample-pages.module.ts",
		"app-sample-pages-sample-pages-module"
	],
	"app/solicitudes/solicitudes.module": [
		"./src/app/solicitudes/solicitudes.module.ts",
		"default~app-dosificaciones-dosificaciones-module~app-examenes-examenes-module~app-pacientes-paciente~a01507b6",
		"default~app-resultados-resultados-module~app-solicitudes-solicitudes-module~app-usuarios-usuarios-mo~9971e8e9",
		"default~app-solicitudes-solicitudes-module~app-usuarios-usuarios-module",
		"common",
		"app-solicitudes-solicitudes-module"
	],
	"app/usuarios/usuarios.module": [
		"./src/app/usuarios/usuarios.module.ts",
		"default~app-dosificaciones-dosificaciones-module~app-examenes-examenes-module~app-pacientes-paciente~a01507b6",
		"default~app-resultados-resultados-module~app-solicitudes-solicitudes-module~app-usuarios-usuarios-mo~9971e8e9",
		"default~app-reportes-reportes-module~app-resultados-resultados-module~app-usuarios-usuarios-module",
		"default~app-resultados-resultados-module~app-usuarios-usuarios-module",
		"default~app-solicitudes-solicitudes-module~app-usuarios-usuarios-module",
		"common",
		"app-usuarios-usuarios-module"
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids) {
		return Promise.resolve().then(function() {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}
	return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(function() {
		var id = ids[0];
		return __webpack_require__(id);
	});
}
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";
module.exports = webpackAsyncContext;

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _guard_auth_guard_service_guard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./guard/auth-guard-service.guard */ "./src/app/guard/auth-guard-service.guard.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    {
        path: 'dashboard',
        loadChildren: 'app/dashboard/dashboard.module#DashboardModule'
    },
    {
        path: 'usuarios',
        loadChildren: 'app/usuarios/usuarios.module#UsuariosModule', canActivate: [_guard_auth_guard_service_guard__WEBPACK_IMPORTED_MODULE_2__["AuthGuardServiceGuard"]]
    },
    {
        path: 'resultados',
        loadChildren: 'app/resultados/resultados.module#ResultadosModule'
    },
    {
        path: 'solicitudes',
        loadChildren: 'app/solicitudes/solicitudes.module#SolicitudesModule'
    },
    {
        path: 'reportes',
        loadChildren: 'app/reportes/reportes.module#ReportesModule'
    },
    {
        path: 'examenes',
        loadChildren: 'app/examenes/examenes.module#ExamenesModule'
    },
    {
        path: 'dosificaciones',
        loadChildren: 'app/dosificaciones/dosificaciones.module#DosificacionesModule'
    },
    // {
    // path: 'resultados',
    // loadChildren: 'app/resultados/resultados.module#ResultadosModule'
    // },
    {
        path: 'pacientes',
        loadChildren: 'app/pacientes/pacientes.module#PacientesModule'
    },
    {
        path: 'app',
        loadChildren: 'app/app/app.module#AppModule'
    },
    {
        path: 'ecommerce',
        loadChildren: 'app/ecommerce/ecommerce.module#EcommerceModule'
    },
    {
        path: 'forms',
        loadChildren: 'app/forms/forms.module#FormsModule'
    },
    {
        path: 'authentication',
        loadChildren: 'app/authentication/authentication.module#AuthenticationModule'
    },
    {
        path: 'sample-pages',
        loadChildren: 'app/sample-pages/sample-pages.module#SamplePagesModule'
    },
    {
        path: '',
        redirectTo: '/authentication/sign-in',
        pathMatch: 'full'
    }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/*!\n * Bootstrap-select v1.12.4 (http://silviomoreto.github.io/bootstrap-select)\n *\n * Copyright 2013-2017 bootstrap-select\n * Licensed under MIT (https://github.com/silviomoreto/bootstrap-select/blob/master/LICENSE)\n */\n.color-rojo{\n  background-color: red;\n}\nselect.bs-select-hidden,\nselect.selectpicker {\n  display: none !important;\n}\n.bootstrap-select {\n  width: 220px \\0;\n  /*IE9 and below*/\n}\n.bootstrap-select > .dropdown-toggle {\n  width: 100%;\n  padding-right: 25px;\n  z-index: 1;\n}\n.bootstrap-select > .dropdown-toggle.bs-placeholder,\n.bootstrap-select > .dropdown-toggle.bs-placeholder:hover,\n.bootstrap-select > .dropdown-toggle.bs-placeholder:focus,\n.bootstrap-select > .dropdown-toggle.bs-placeholder:active {\n  color: #999;\n}\n.bootstrap-select > select {\n  position: absolute !important;\n  bottom: 0;\n  left: 50%;\n  display: block !important;\n  width: 0.5px !important;\n  height: 100% !important;\n  padding: 0 !important;\n  opacity: 0 !important;\n  border: none;\n}\n.bootstrap-select > select.mobile-device {\n  top: 0;\n  left: 0;\n  display: block !important;\n  width: 100% !important;\n  z-index: 2;\n}\n.has-error .bootstrap-select .dropdown-toggle,\n.error .bootstrap-select .dropdown-toggle {\n  border-color: #b94a48;\n}\n.bootstrap-select.fit-width {\n  width: auto !important;\n}\n.bootstrap-select:not([class*=\"col-\"]):not([class*=\"form-control\"]):not(.input-group-btn) {\n  width: 220px;\n}\n.bootstrap-select .dropdown-toggle:focus {\n  outline: thin dotted #333333 !important;\n  outline: 5px auto -webkit-focus-ring-color !important;\n  outline-offset: -2px;\n}\n.bootstrap-select.form-control {\n  margin-bottom: 0;\n  padding: 0;\n  border: none;\n}\n.bootstrap-select.form-control:not([class*=\"col-\"]) {\n  width: 100%;\n}\n.bootstrap-select.form-control.input-group-btn {\n  z-index: auto;\n}\n.bootstrap-select.form-control.input-group-btn:not(:first-child):not(:last-child) > .btn {\n  border-radius: 0;\n}\n.bootstrap-select.btn-group:not(.input-group-btn),\n.bootstrap-select.btn-group[class*=\"col-\"] {\n  float: none;\n  display: inline-block;\n  margin-left: 0;\n}\n.bootstrap-select.btn-group.dropdown-menu-right,\n.bootstrap-select.btn-group[class*=\"col-\"].dropdown-menu-right,\n.row .bootstrap-select.btn-group[class*=\"col-\"].dropdown-menu-right {\n  float: right;\n}\n.form-inline .bootstrap-select.btn-group,\n.form-horizontal .bootstrap-select.btn-group,\n.form-group .bootstrap-select.btn-group {\n  margin-bottom: 0;\n}\n.form-group-lg .bootstrap-select.btn-group.form-control,\n.form-group-sm .bootstrap-select.btn-group.form-control {\n  padding: 0;\n}\n.form-group-lg .bootstrap-select.btn-group.form-control .dropdown-toggle,\n.form-group-sm .bootstrap-select.btn-group.form-control .dropdown-toggle {\n  height: 100%;\n  font-size: inherit;\n  line-height: inherit;\n  border-radius: inherit;\n}\n.form-inline .bootstrap-select.btn-group .form-control {\n  width: 100%;\n}\n.bootstrap-select.btn-group.disabled,\n.bootstrap-select.btn-group > .disabled {\n  cursor: not-allowed;\n}\n.bootstrap-select.btn-group.disabled:focus,\n.bootstrap-select.btn-group > .disabled:focus {\n  outline: none !important;\n}\n.bootstrap-select.btn-group.bs-container {\n  position: absolute;\n  height: 0 !important;\n  padding: 0 !important;\n}\n.bootstrap-select.btn-group.bs-container .dropdown-menu {\n  z-index: 1060;\n}\n.bootstrap-select.btn-group .dropdown-toggle .filter-option {\n  display: inline-block;\n  overflow: hidden;\n  width: 100%;\n  text-align: left;\n}\n.bootstrap-select.btn-group .dropdown-toggle .caret {\n  position: absolute;\n  top: 50%;\n  right: 12px;\n  margin-top: -2px;\n  vertical-align: middle;\n}\n.bootstrap-select.btn-group[class*=\"col-\"] .dropdown-toggle {\n  width: 100%;\n}\n.bootstrap-select.btn-group .dropdown-menu {\n  min-width: 100%;\n  box-sizing: border-box;\n}\n.bootstrap-select.btn-group .dropdown-menu.inner {\n  position: static;\n  float: none;\n  border: 0;\n  padding: 0;\n  margin: 0;\n  border-radius: 0;\n  box-shadow: none;\n}\n.bootstrap-select.btn-group .dropdown-menu li {\n  position: relative;\n}\n.bootstrap-select.btn-group .dropdown-menu li.active small {\n  color: #fff;\n}\n.bootstrap-select.btn-group .dropdown-menu li.disabled a {\n  cursor: not-allowed;\n}\n.bootstrap-select.btn-group .dropdown-menu li a {\n  cursor: pointer;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n}\n.bootstrap-select.btn-group .dropdown-menu li a.opt {\n  position: relative;\n  padding-left: 2.25em;\n}\n.bootstrap-select.btn-group .dropdown-menu li a span.check-mark {\n  display: none;\n}\n.bootstrap-select.btn-group .dropdown-menu li a span.text {\n  display: inline-block;\n}\n.bootstrap-select.btn-group .dropdown-menu li small {\n  padding-left: 0.5em;\n}\n.bootstrap-select.btn-group .dropdown-menu .notify {\n  position: absolute;\n  bottom: 5px;\n  width: 96%;\n  margin: 0 2%;\n  min-height: 26px;\n  padding: 3px 5px;\n  background: #f5f5f5;\n  border: 1px solid #e3e3e3;\n  box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.05);\n  pointer-events: none;\n  opacity: 0.9;\n  box-sizing: border-box;\n}\n.bootstrap-select.btn-group .no-results {\n  padding: 3px;\n  background: #f5f5f5;\n  margin: 0 5px;\n  white-space: nowrap;\n}\n.bootstrap-select.btn-group.fit-width .dropdown-toggle .filter-option {\n  position: static;\n}\n.bootstrap-select.btn-group.fit-width .dropdown-toggle .caret {\n  position: static;\n  top: auto;\n  margin-top: -1px;\n}\n.bootstrap-select.btn-group.show-tick .dropdown-menu li.selected a span.check-mark {\n  position: absolute;\n  display: inline-block;\n  right: 15px;\n  margin-top: 5px;\n}\n.bootstrap-select.btn-group.show-tick .dropdown-menu li a span.text {\n  margin-right: 34px;\n}\n.bootstrap-select.show-menu-arrow.open > .dropdown-toggle {\n  z-index: 1061;\n}\n.bootstrap-select.show-menu-arrow .dropdown-toggle:before {\n  content: '';\n  border-left: 7px solid transparent;\n  border-right: 7px solid transparent;\n  border-bottom: 7px solid rgba(204, 204, 204, 0.2);\n  position: absolute;\n  bottom: -4px;\n  left: 9px;\n  display: none;\n}\n.bootstrap-select.show-menu-arrow .dropdown-toggle:after {\n  content: '';\n  border-left: 6px solid transparent;\n  border-right: 6px solid transparent;\n  border-bottom: 6px solid white;\n  position: absolute;\n  bottom: -4px;\n  left: 10px;\n  display: none;\n}\n.bootstrap-select.show-menu-arrow.dropup .dropdown-toggle:before {\n  bottom: auto;\n  top: -3px;\n  border-top: 7px solid rgba(204, 204, 204, 0.2);\n  border-bottom: 0;\n}\n.bootstrap-select.show-menu-arrow.dropup .dropdown-toggle:after {\n  bottom: auto;\n  top: -3px;\n  border-top: 6px solid white;\n  border-bottom: 0;\n}\n.bootstrap-select.show-menu-arrow.pull-right .dropdown-toggle:before {\n  right: 12px;\n  left: auto;\n}\n.bootstrap-select.show-menu-arrow.pull-right .dropdown-toggle:after {\n  right: 13px;\n  left: auto;\n}\n.bootstrap-select.show-menu-arrow.open > .dropdown-toggle:before,\n.bootstrap-select.show-menu-arrow.open > .dropdown-toggle:after {\n  display: block;\n}\n.bs-searchbox,\n.bs-actionsbox,\n.bs-donebutton {\n  padding: 4px 8px;\n}\n.bs-actionsbox {\n  width: 100%;\n  box-sizing: border-box;\n}\n.bs-actionsbox .btn-group button {\n  width: 50%;\n}\n.bs-donebutton {\n  float: left;\n  width: 100%;\n  box-sizing: border-box;\n}\n.bs-donebutton .btn-group button {\n  width: 100%;\n}\n.bs-searchbox + .bs-actionsbox {\n  padding: 0 8px 4px;\n}\n.bs-searchbox .form-control {\n  margin-bottom: 0;\n  width: 100%;\n  float: none;\n}"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n    <router-outlet></router-outlet>\n\n<!-- Page Loader -->\n<div class=\"page-loader-wrapper\">\n    <div class=\"loader\">\n        <div class=\"m-t-30\"><img class=\"zmdi-hc-spin\" src=\"assets/images/logo.svg\" width=\"48\" height=\"48\" alt=\"Oreo\"></div>\n        <p>cargando...</p>\n    </div>\n</div>\n<!-- Overlay For Sidebars -->\n<div class=\"overlay\"></div>\n\n<div *ngIf=\"previousUrl != 'sign-in' && previousUrl != 'factura' && previousUrl != '' \">\n    <!-- Top Bar -->\n    <nav class=\"navbar p-l-5 p-r-5\">\n            <ul class=\"nav navbar-nav navbar-left\">\n                <li>\n                    <div class=\"navbar-header\">\n                        <a  class=\"bars\"></a>\n                        <a class=\"navbar-brand\" routerLink=\"/dashboard/main\"><img src=\"assets/images/left-bg.png\" width=\"45\" alt=\"Oreo\"><span class=\"m-l-10\">LAB-CLINICO-UAJMS</span></a>\n                    </div>\n                </li>\n                <li><a class=\"ls-toggle-btn\" data-close=\"true\"><i class=\"zmdi zmdi-swap\"></i></a></li>\n      \n                <li style=\"float:right\">\n                      \n                        \n                    <a href=\"javascript:void(0);\" class=\"fullscreen hidden-sm-down\" data-provide=\"fullscreen\" data-close=\"true\"><i class=\"zmdi zmdi-fullscreen\"></i></a>\n                    <a (click)=\"Logout()\" class=\"mega-menu\" data-close=\"true\"><i class=\"zmdi zmdi-power\"></i></a>\n                    <a   class=\"js-right-sidebar\" data-close=\"true\"><i class=\"zmdi zmdi-settings\"></i></a>\n     \n                </li>\n            </ul>\n        </nav>\n</div>\n<div >\n    <!-- Left Sidebar -->\n    <ng-container *ngIf=\"previousUrl !='factura' && previousUrl != 'sign-in'  && previousUrl != ''\"  >\n    <div >\n        <div >\n            <aside id=\"leftsidebar\" class=\"sidebar\" >\n                <ul class=\"nav nav-tabs\">\n                    <li class=\"nav-item\"><a class=\"nav-link active\" data-toggle=\"tab\" href=\"#dashboard\"><i class=\"zmdi zmdi-home m-r-5\"></i></a></li>\n                    <li class=\"nav-item\"><a class=\"nav-link\" data-toggle=\"tab\" href=\"#user\"><i class=\"zmdi zmdi-account m-r-5\"></i>Usuario</a></li>\n                </ul>\n                <div class=\"tab-content\">\n                    <div class=\"tab-pane stretchRight active\" id=\"dashboard\">\n                        <div class=\"menu\">\n                            <ul class=\"list\">\n                                <!--  \n                                <li>\n                                \n                                    <div class=\"user-info\">\n                                        <div class=\"image\"><a routerLink=\"/sample-pages/profile\"><img [src]=\"currentUser.personal_laboratorio.link_foto\" alt=\"User\"></a></div>\n                                        <div class=\"detail\">\n                                            <h4>{{currentUser.personal_laboratorio.persona.nombre}} {{currentUser.personal_laboratorio.persona.ap}} {{currentUser.personal_laboratorio.persona.am}}</h4>\n                                           {{currentUser.rol.nombre}}\n                                         \n                                        </div>\n                                        <a title=\"facebook\" href=\"#\"><i class=\"zmdi zmdi-facebook\"></i></a>\n                                        <a title=\"twitter\" href=\"#\"><i class=\"zmdi zmdi-twitter\"></i></a>\n                                        <a title=\"instagram\" href=\"#\"><i class=\"zmdi zmdi-instagram\"></i></a>\n                                    </div>\n                                </li>\n                            -->\n                                <li style=\"display:none\" routerLinkActive=\"active open\"> <a href=\"javascript:void(0);\" class=\"menu-toggle\"><i class=\"zmdi zmdi-home\"></i><span>Dashboard</span></a>\n                                    <ul class=\"ml-menu\">\n                                        <li routerLinkActive=\"active\"><a routerLink=\"/dashboard/main\">Main</a></li>\n                                        <li routerLinkActive=\"active\"><a routerLink=\"/dashboard/rtl\">RTL</a></li>\n                                        <li routerLinkActive=\"active\"><a routerLink=\"/dashboard/horizontal\">Horizontal</a></li>\n                                        <li routerLinkActive=\"active\"><a routerLink=\"/ecommerce/dashboard\">Ecommerce</a></li>\n                                        <li routerLinkActive=\"active\"><a routerLink=\"/app/blog-dashboard\">Blog</a></li>\n                                    </ul>\n                                </li>\n                                <li style=\"display:none\" > <a href=\"javascript:void(0);\" class=\"menu-toggle\"><i class=\"zmdi zmdi-apps\"></i><span>App</span> </a>\n                                    <ul class=\"ml-menu\">\n                                        <li routerLinkActive=\"active\"><a routerLink=\"/app/mail-inbox\">Inbox</a></li>\n                                        <li routerLinkActive=\"active\"><a routerLink=\"/app/chat\">Chat</a></li>\n                                        <li routerLinkActive=\"active\"><a routerLink=\"/app/calendar\">Calendar</a></li>\n                                        <li routerLinkActive=\"active\"><a routerLink=\"/app/file-dashboard\">File Manager</a></li>\n                                        <li routerLinkActive=\"active\"><a routerLink=\"/app/contact\">Contact list</a></li>\n                                        <li routerLinkActive=\"active\"><a routerLink=\"/app/blog-dashboard\">Blog</a></li>\n                                    </ul>\n                                </li>\n                                \n                              \n                                <li class=\"col-amber\" *ngIf=\"accesoMenu('pacientes')\"  routerLinkActive=\"active open\"> <a  class=\"menu-toggle\"><i class=\"zmdi zmdi-accounts  zmdi-hc-fw\"></i><span>Pacientes</span> </a>\n                                    <ul class=\"ml-menu\">\n                                        <li routerLinkActive=\"active\"> <a routerLink=\"/pacientes/listar\">Listar</a></li>\n                                        <li routerLinkActive=\"active\"> <a routerLink=\"/pacientes/registrar\">Registrar</a></li>\n                                    </ul>\n                                </li>   \n                                <li *ngIf=\"accesoMenu('solicitudes')\"   routerLinkActive=\"active open\"> <a href=\"javascript:void(0);\" class=\"menu-toggle\"><i class=\"zmdi zmdi-file\"></i><span>Solicitudes</span> </a>\n                                    <ul class=\"ml-menu\">\n                                        <li routerLinkActive=\"active\"> <a routerLink=\"/solicitudes/listar\">Listar</a></li>\n                                        <li routerLinkActive=\"active\"> <a routerLink=\"/solicitudes/registrar\">Registrar</a></li>\n                                    </ul>\n                                </li>   \n                                <li *ngIf=\"accesoMenu('resultados')\"   routerLinkActive=\"active open\"> <a href=\"javascript:void(0);\" class=\"menu-toggle\"><i class=\"zmdi zmdi-collection-text\"></i><span>Resultados</span> </a>\n                                    <ul class=\"ml-menu\">\n                                        <li routerLinkActive=\"active\"> <a routerLink=\"/resultados/ver\">Ver</a></li>\n                                        <li routerLinkActive=\"active\"> <a routerLink=\"/resultados/ingresar\">Ingresar</a></li>\n                                    </ul>\n                                </li>   \n                                <li *ngIf=\"accesoMenu('usuarios')\"   routerLinkActive=\"active open\"> <a href=\"javascript:void(0);\" class=\"menu-toggle\"><i class=\"zmdi zmdi-accounts zmdi-hc-fw\"></i><span>Usuarios</span> </a>\n                                    <ul class=\"ml-menu\">\n                                        \n                                        <li routerLinkActive=\"active\"> <a routerLink=\"/usuarios/listar\">Listar</a></li>\n                                        <li routerLinkActive=\"active\"> <a routerLink=\"/usuarios/registrar\">Registrar</a></li>\n                                    </ul>\n                                </li>       \n                              \n            \n                               \n                                <!---<li style=\"display:none\" *ngFor=\"let link of enlaces\">\n                                        <a class=\"menu-toggle\"><i class=\"zmdi zmdi-swap-alt\"></i><span>{{link.text}}</span> </a>\n                                      <ul class=\"ml-menu\">\n                                        <li *ngFor=\"let link of enlaces\" routerLinkActive=\"active\">\n                                          <a [routerLink]=\"link.path\">{{ link.text }}</a>\n                                        </li>\n                                      </ul>\n                                    </li>   -->\n\n\n\n\n\n                                   \n                                <li  *ngIf=\"accesoMenu('reportes')\"  routerLinkActive=\"active open\"> <a href=\"javascript:void(0);\" class=\"menu-toggle\"><i class=\"material-icons\">insert_chart</i> <span class=\"icon-name\">Reportes</span> </a>\n                                    <ul class=\"ml-menu\">\n                                        <li routerLinkActive=\"active\"> <a routerLink=\"/reportes/examenes-mensual\">Examenes mensual</a></li>\n                                        \n                                        <li routerLinkActive=\"active\"> <a routerLink=\"/reportes/examenes-anual\">Examenes anual</a></li>\n                                     \n                                    </ul>\n                                </li>\n                                <li *ngIf=\"accesoMenu('examenes')\"    routerLinkActive=\"active open\"> <a href=\"javascript:void(0);\" class=\"menu-toggle\"><i class=\"zmdi zmdi-assignment\"></i><span>Examenes</span> </a>\n                                    <ul class=\"ml-menu\">\n                                        <li routerLinkActive=\"active\"> <a routerLink=\"/examenes/listar\">Ofertados</a></li>\n                                        <li routerLinkActive=\"active\"> <a routerLink=\"/examenes/registrar\">Registrar</a></li>\n                                        \n                                        <li routerLinkActive=\"active\"> <a routerLink=\"/examenes/listar-examenes-solicitados\">Solicitados</a></li>\n                                     \n                                    </ul>\n                                </li>\n                              \n                    \n                                <li *ngIf=\"accesoMenu('administrar')\" style=\"display:block\" routerLinkActive=\"active open\"> <a href=\"javascript:void(0);\" class=\"menu-toggle\"><i class=\"zmdi zmdi-assignment\"></i><span>Administrar</span> </a>\n                                    <ul class=\"ml-menu\">\n\n                                        <li routerLinkActive=\"active\"><a (click)=\"crear_copia()\">Exportar datos</a> </li>\n                                        <li routerLinkActive=\"active\">\n                                            <input type=\"file\" class=\"d-none\" (change)=\"restaurar_copia($event)\" #photoInput>\n                                            <a  (click)=\"photoInput.click()\">\n                                            Importar datos</a> </li>\n            \n                                    </ul>\n                                </li>\n                                <li *ngIf=\"accesoMenu('dosificaciones')\"  routerLinkActive=\"active open\"> <a href=\"javascript:void(0);\" class=\"menu-toggle\"><i class=\"zmdi zmdi-grid\"></i><span>Dosificaciones</span> </a>\n                                    <ul class=\"ml-menu\">\n                                        <li routerLinkActive=\"active\"><a routerLink=\"/dosificaciones/listar\">Listar</a> </li>\n                                        <li routerLinkActive=\"active\"><a routerLink=\"/dosificaciones/registrar\">Registrar</a> </li>\n\n                                    </ul>\n                                </li>\n                             \n                                <li style=\"display:none\"  class=\"header\">EXTRA COMPONENTS</li>\n                                <li style=\"display:none\"  routerLinkActive=\"active open\"> <a href=\"javascript:void(0);\" class=\"menu-toggle\"><i class=\"zmdi zmdi-delicious\"></i><span>Widgets</span> </a>\n                                    <ul class=\"ml-menu\">\n                                        <li routerLinkActive=\"active\"><a routerLink=\"/widgets/app\">Apps Widgetse</a></li>\n                                        <li routerLinkActive=\"active\"><a routerLink=\"/widgets/data\">Data Widgetse</a></li>\n                                    </ul>\n                                </li>\n                                <li style=\"display:none\"  routerLinkActive=\"active open\"> <a href=\"javascript:void(0);\" class=\"menu-toggle\"><i class=\"zmdi zmdi-lock\"></i><span>Authentication</span> </a>\n                                    <ul class=\"ml-menu\">\n                                        <li routerLinkActive=\"active\"><a routerLink=\"/authentication/sign-in\">Sign In</a></li>\n                                        <li routerLinkActive=\"active\"><a routerLink=\"/authentication/sign-up\">Sign Up</a></li>\n                                        <li routerLinkActive=\"active\"><a routerLink=\"/authentication/forget-password\">Forgot Password</a> </li>\n                                        <li routerLinkActive=\"active\"><a routerLink=\"/authentication/404\">Page 404</a> </li>\n                                        <li routerLinkActive=\"active\"><a routerLink=\"/authentication/500\">Page 500</a> </li>\n                                        <li routerLinkActive=\"active\"><a routerLink=\"/authentication/page-offline\">Page Offline</a> </li>\n                                        <li routerLinkActive=\"active\"><a routerLink=\"/authentication/locked\">Locked Screen</a></li>\n                                    </ul>\n                                </li>\n                                <li style=\"display:none\"  routerLinkActive=\"active open\"> <a href=\"javascript:void(0);\" class=\"menu-toggle\"><i class=\"zmdi zmdi-copy\"></i><span>Sample Pages</span> </a>\n                                    <ul class=\"ml-menu\">\n                                        <li routerLinkActive=\"active\"><a routerLink=\"/sample-pages/blank-page\">Blank Page</a> </li>\n                                        <li routerLinkActive=\"active\"><a routerLink=\"/sample-pages/gallery\">Image Gallery</a></li>\n                                        <li routerLinkActive=\"active\"><a routerLink=\"/sample-pages/profile\">Profile</a></li>\n                                        <li routerLinkActive=\"active\"><a routerLink=\"/sample-pages/timeline\">Timeline</a></li>\n                                        <li routerLinkActive=\"active\"><a routerLink=\"/sample-pages/pricing\">Pricing</a></li>\n                                        <li routerLinkActive=\"active\"><a routerLink=\"/sample-pages/invoices\">Invoices</a></li>\n                                        <li routerLinkActive=\"active\"><a routerLink=\"/sample-pages/search-results\">Search Results</a></li>\n                                    </ul>\n                                </li>\n                                <li style=\"display:none\"  routerLinkActive=\"active open\"> <a href=\"javascript:void(0);\" class=\"menu-toggle\"><i class=\"zmdi zmdi-map\"></i><span>Maps</span> </a>\n                                    <ul class=\"ml-menu\">\n                                        <li routerLinkActive=\"active\"><a routerLink=\"/maps/google\">Google Map</a></li>\n                                        <li routerLinkActive=\"active\"><a routerLink=\"/maps/jvectormap\">jVectorMap</a></li>\n                                    </ul>\n                                </li>\n                                <li style=\"display:none\"  class=\"header\">Extra</li>\n                              \n                            </ul>\n                        </div>\n                    </div>\n                    <div class=\"tab-pane stretchLeft\" id=\"user\">\n                        <div class=\"menu\">\n                            <ul class=\"list\">\n                                \n                                <li>\n                                    <div class=\"user-info m-b-20 p-b-15\">\n                                        <div class=\"image\"><a routerLink=\"/sample-pages/profile\"><img [src]=\"currentUser.personal_laboratorio.link_foto\" alt=\"User\"></a></div>\n                                        <div class=\"detail\">\n                                            <h4>{{currentUser.personal_laboratorio.persona.nombre}} {{currentUser.personal_laboratorio.persona.ap}} {{currentUser.personal_laboratorio.persona.am}}</h4>\n                                           {{currentUser.rol.nombre}}\n                                        </div>\n                                        <a title=\"facebook\" href=\"#\"><i class=\"zmdi zmdi-facebook\"></i></a>\n                                        <a title=\"twitter\" href=\"#\"><i class=\"zmdi zmdi-twitter\"></i></a>\n                                        <a title=\"instagram\" href=\"#\"><i class=\"zmdi zmdi-instagram\"></i></a>\n                                        <p class=\"text-muted\">CI: {{currentUser.cedula}}</p>\n                                      \n                                    </div>\n                                </li>\n                            -->\n                              <li>\n                                    <div class=\"row clearfix\">\n                                            <div class=\"col-lg-2 col-md-2 col-sm-4 form-control-label\">\n                                            \n                                            </div>\n                                            <div class=\"col-lg-10 col-md-10 col-sm-8\">\n                                              <div class=\"form-group\">\n\n                                               </div>\n                                            </div>\n                                          </div>\n                                          <div class=\"row clearfix\">\n                                                <div class=\"col-lg-2 col-md-2 col-sm-4 form-control-label\">\n                                                \n                                                </div>\n                                                <div class=\"col-lg-10 col-md-10 col-sm-8\">\n                                                  <div class=\"form-group\">\n    \n                                               \n            <button type=\"button\" class=\"btn btn-round btn-info waves-effect\" data-toggle=\"modal\" data-target=\"#addevent\">Cambiar contraseña</button>     </div>\n                                                </div>\n                                              </div>\n                                          \n                                            \n                              </li>\n                            </ul>\n                           \n                        </div>\n                    </div>\n                </div>\n            </aside>\n        </div>\n\n     \n\n\n      \n\n      \n\n    </div>\n</ng-container>\n\n\n</div>\n\n\n<!-- Right Sidebar -->\n<aside id=\"rightsidebar\" class=\"right-sidebar\">\n    <ul class=\"nav nav-tabs\">\n        <li class=\"nav-item\"><a class=\"nav-link active\" data-toggle=\"tab\" href=\"#setting\"><i class=\"zmdi zmdi-settings zmdi-hc-spin\"></i></a></li>\n        <li class=\"nav-item\"><a class=\"nav-link\" data-toggle=\"tab\" href=\"#chat\"><i class=\"zmdi zmdi-comments\"></i></a></li>\n        <li class=\"nav-item\"><a class=\"nav-link\" data-toggle=\"tab\" href=\"#activity\">Activity</a></li>\n    </ul>\n    <div class=\"tab-content\">\n        <div class=\"tab-pane slideRight active\" id=\"setting\">\n            <div class=\"slim_scroll\">\n                <div class=\"card\">\n                    <h6>General Settings</h6>\n                 \n                </div>\n                <div class=\"card\">\n                    <h6>Skins</h6>\n                    <ul class=\"choose-skin list-unstyled\">\n                        <li data-theme=\"purple\" >\n                            <div class=\"purple\"></div>\n                        </li>\n                        <li data-theme=\"blue\">\n                            <div class=\"blue\"></div>\n                        </li>\n                        <li data-theme=\"cyan\">\n                            <div class=\"cyan\"></div>\n                        </li>\n                        <li data-theme=\"green\">\n                            <div class=\"green\"></div>\n                        </li>\n                        <li data-theme=\"orange\" class=\"active\">\n                            <div class=\"orange\"></div>\n                        </li>\n                        <li data-theme=\"blush\">\n                            <div class=\"blush\"></div>\n                        </li>\n                    </ul>\n                </div>\n              \n                <div class=\"card theme-light-dark\">\n                    <h6>Left Menu</h6>\n                    <button class=\"t-light btn btn-default btn-simple btn-round btn-block\">Light</button>\n                    <button class=\"t-dark btn btn-default btn-round btn-block\">Dark</button>\n                    <button class=\"m_img_btn btn btn-primary btn-round btn-block\">Sidebar Image</button>\n                </div>\n            </div>\n        </div>\n        <div class=\"tab-pane right_chat stretchLeft\" id=\"chat\">\n            <div class=\"slim_scroll\">\n                <div class=\"card\">\n                    <div class=\"search\">\n                        <div class=\"input-group\">\n                            <input type=\"text\" class=\"form-control\" placeholder=\"Search...\">\n                            <span class=\"input-group-addon\">\n                                <i class=\"zmdi zmdi-search\"></i>\n                            </span>\n                        </div>\n                    </div>\n                </div>\n                <div class=\"card\">\n                    <h6>Recent</h6>\n                   \n                </div>\n              \n            </div>\n        </div>\n      \n    </div>\n</aside>\n\n\n<div class=\"modal fade\" id=\"addevent\" tabindex=\"-1\" role=\"dialog\">\n        <div class=\"modal-dialog\" role=\"document\">\n          <div class=\"modal-content\">\n            <div class=\"modal-header\">\n              <h4 class=\"title\" id=\"defaultModalLabel\"></h4>\n            </div>\n            <div class=\"modal-body\">\n                  \n            <form ngNativeValidate   class=\"needs-validation\" #formu=\"ngForm\">\n              <div class=\"input-group input-lg\">\n                    <input   type=\"password\"  name =\"pass\" id=\"password\"   placeholder=\"contraseña nueva\" class=\"form-control\" required>\n                   \n                </div>\n                <div class=\"input-group input-lg\">\n                        <input type=\"password\" placeholder=\"repetir contraseña\"  id=\"password_confirmation\" class=\"form-control\" required>\n                       \n                    </div>\n            <div class=\"modal-footer\">\n              <button type=\"button\" (click)=\"guardar(formu)\" id=\"a\" class=\"btn btn-primary btn-round waves-effect\" data-dismiss=\"modal\" >Guardar</button>\n              <button type=\"button\" class=\"btn btn-simple btn-round waves-effect\" data-dismiss=\"modal\">Salir</button>\n            </div>\n            \n            </form>\n          </div>\n\n     \n        </div>\n      </div>\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _usuarios_usuarios_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./usuarios/usuarios.service */ "./src/app/usuarios/usuarios.service.ts");
/* harmony import */ var _authentication_authentication_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./authentication/authentication.service */ "./src/app/authentication/authentication.service.ts");
/* harmony import */ var _pacientes_pacientes_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pacientes/pacientes.service */ "./src/app/pacientes/pacientes.service.ts");
/* harmony import */ var _solicitudes_solicitudes_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./solicitudes/solicitudes.service */ "./src/app/solicitudes/solicitudes.service.ts");
/* harmony import */ var _servicio_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./servicio.service */ "./src/app/servicio.service.ts");
/* harmony import */ var _shared_variables_global__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./shared/variables_global */ "./src/app/shared/variables_global.ts");
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
var AppComponent = /** @class */ (function () {
    function AppComponent(serviciosService, authenticationService, pacienteService, solicitudesService, usuariosService, renderer, router) {
        var _this = this;
        this.serviciosService = serviciosService;
        this.authenticationService = authenticationService;
        this.pacienteService = pacienteService;
        this.solicitudesService = solicitudesService;
        this.usuariosService = usuariosService;
        this.renderer = renderer;
        this.router = router;
        this.url_del_backup = '' + _shared_variables_global__WEBPACK_IMPORTED_MODULE_7__["server"] + 'api/file/';
        this.roles = [];
        this.panels = [];
        this.links = [];
        this.enlaces = [];
        this.link_foto_perfil_usuario = "" + _shared_variables_global__WEBPACK_IMPORTED_MODULE_7__["server"] + "api/file/";
        this.imageUrl = "";
        this.estado_barra = false;
        this.bandera = false;
        this.file = null;
        console.log("appcomponente.html");
        pacienteService.contar().subscribe(function (data) {
            _this.num_pacientes = data;
        });
        solicitudesService.numSolicitudes().subscribe(function (data) {
            _this.num_solicitudes = data;
        });
        solicitudesService.numSolicitudesPendientes().subscribe(function (data) {
            _this.num_solicitudes_pendientes = data;
        });
        usuariosService.numDoctores().subscribe(function (data) {
            _this.num_doctores = data;
        });
        console.log('ejecutando el componente principal');
        this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
        this.i = 0;
        this.router.events.subscribe(function (event) {
            _this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
            //this.imageUrl=this.link_foto_perfil_usuario+this.currentUser.personal_laboratorio.foto
            //this.link_foto_perfil_usuario=this.currentUser.personal_laboratorio.foto
            // this.recuperar_foto_perfil();
            for (var i = 0; i < 1; i++)
                _this.i = 0;
            if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__["NavigationStart"]) {
                if (_this.previousUrl) {
                    _this.renderer.removeClass(document.body, _this.previousUrl);
                }
                var currentUrl = event.url.split('/');
                var currentUrlSlug = currentUrl[currentUrl.length - 1];
                if (currentUrlSlug) {
                    _this.renderer.addClass(document.body, currentUrlSlug);
                }
                _this.previousUrl = currentUrlSlug;
                if (_this.previousUrl != 'sing-in') {
                    //this.imageUrl=this.link_foto_perfil_usuario+this.currentUser.personal_laboratorio.foto
                    // alert(this.imageUrl)
                }
                // this.router.navigate(['/dashboard/main']);
            }
        });
        console.log(this.previousUrl + "klp");
    }
    AppComponent.prototype.cambiar = function () {
        console.log('hola' + this.previousUrl);
        this.router.navigate(['dashboard/main']);
        // this.router.navigate(['/dashboard/main']);
        $('body').removeClass(this.previousUrl);
        $('body').addClass('main');
    };
    AppComponent.prototype.Logout = function () {
        console.log(this.currentUser);
        localStorage.removeItem('currentUser');
        this.router.navigate(['/authentication/sign-in']);
        //window.location.href='http://localhost:4200/authentication/sign-in'
    };
    AppComponent.prototype.recuperar_foto_perfil = function () {
        this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
        console.log(this.currentUser.cedula);
        if (this.currentUser.personal_laboratorio.foto == '') {
            this.imageUrl = "assets/images/photo_profile_user.png";
            console.log(this.imageUrl);
        }
        else {
            this.imageUrl = this.imageUrl + this.currentUser.personal_laboratorio.foto;
            console.log(this.imageUrl);
        }
    };
    AppComponent.prototype.ngOnInit = function () {
        // ========
        $(function () {
            $('.selectpicker').selectpicker();
            // Datetimepicker plugin
            $('.datetimepicker').bootstrapMaterialDatePicker({
                format: 'dddd DD MMMM YYYY - HH:mm',
                clearButton: true,
                weekStart: 1
            });
            $('.datepicker').bootstrapMaterialDatePicker({
                format: 'dddd DD MMMM YYYY',
                clearButton: true,
                weekStart: 1,
                time: false
            });
            $('.timepicker').bootstrapMaterialDatePicker({
                format: 'HH:mm',
                clearButton: true,
                date: false
            });
        });
        $('.theme-light-dark .t-light').on('click', function () {
            $('body').removeClass('menu_dark');
        });
        $('.theme-light-dark .t-dark').on('click', function () {
            $('body').addClass('menu_dark');
        });
        $('.m_img_btn').on('click', function () {
            $('body').toggleClass('menu_img');
        });
        $('.boxs-close').on('click', function () {
            var element = $(this);
            var cards = element.parents('.card');
            cards.addClass('closed').fadeOut();
        });
        $('#add-event').submit(function (e) {
            e.preventDefault();
            var form = $(this);
            var newEvent = $('<div class="event-control p-10 mb-10">' + $('#event-title').val() + '<a class="pull-right text-muted event-remove"><i class="fa fa-trash-o"></i></a></div>');
            $('#external-events .event-control:last').after(newEvent);
            $('#external-events .event-control').each(function () {
                // store data so the calendar knows to render an event upon drop
                $(this).data('event', {
                    title: $.trim($(this).text()),
                    stick: true // maintain when user navigates (see docs on the renderEvent method)
                });
                // make the event draggable using jQuery UI
                $(this).draggable({
                    zIndex: 999,
                    revert: true,
                    revertDuration: 0 // original position after the drag
                });
            });
            $('#external-events .event-control .event-remove').on('click', function () {
                $(this).parent().remove();
            });
            form[0].reset();
            $('#cal-new-event').modal('hide');
        });
    };
    AppComponent.prototype.guardar = function (formu) {
        var _this = this;
        validatePassword();
        console.log(formu.valid);
        if (formu.valid && ($('#password_confirmation').val() == $('#password').val())) {
            this.usuariosService.cambiarContrasenia(this.currentUser.cedula, $('#password_confirmation').val()).subscribe(function (data) {
                _this.router.navigate(['/authentication/sign-in']);
                //window.location.href='http://localhost:4200/dashboard/main'
                console.log(data);
            });
        }
    };
    AppComponent.prototype.accesoMenu = function (nombreMenu) {
        var acceso = false;
        // let menusAux: Menu;
        for (var _i = 0, _a = this.currentUser.rol.menus; _i < _a.length; _i++) {
            var menu = _a[_i];
            if (nombreMenu === menu.nombre) {
                acceso = true;
            }
        }
        return acceso;
    };
    AppComponent.prototype.ver_barra_derecha = function () {
        alert("klp");
    };
    AppComponent.prototype.cambiarRol = function () {
    };
    AppComponent.prototype.crear_copia = function () {
        var _this = this;
        this.serviciosService.crearBackup()
            .subscribe(function (data) {
            console.log(_this.url_del_backup + data);
            alert("Backup realizado con exito");
            window.location.href = _this.url_del_backup + data;
        }, function (error) {
            alert("error");
        });
    };
    AppComponent.prototype.restaurar_copia = function (event) {
        var _this = this;
        console.log("hjhjkh");
        if (event.target.files && event.target.files[0]) { //verificando si por lomenos esta subiendouna foto
            this.file = event.target.files[0]; //ñaimagen guarda en file
            // image preview
            this.serviciosService.restaurarCopia(this.file.name)
                .subscribe(function (data) {
                console.log(data);
                alert("Restauracion realizado con exito");
                //window.location.href = this.url_del_backup+data
                _this.router.navigate(['/authentication/sign-in']);
            }, function (error) {
                alert("error");
            });
        }
        console.log("no se selecciono ningun archjkjkjlkivoooo");
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], AppComponent.prototype, "usuarioActual", void 0);
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")],
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None
        }),
        __metadata("design:paramtypes", [_servicio_service__WEBPACK_IMPORTED_MODULE_6__["ServicioService"], _authentication_authentication_service__WEBPACK_IMPORTED_MODULE_3__["AuthenticationService"], _pacientes_pacientes_service__WEBPACK_IMPORTED_MODULE_4__["PacientesService"], _solicitudes_solicitudes_service__WEBPACK_IMPORTED_MODULE_5__["SolicitudesService"], _usuarios_usuarios_service__WEBPACK_IMPORTED_MODULE_2__["UsuariosService"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! primeng/button */ "./node_modules/primeng/button.js");
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(primeng_button__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ng-select/ng-select */ "./node_modules/@ng-select/ng-select/fesm5/ng-select.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _servicio_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./servicio.service */ "./src/app/servicio.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};











var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]
            ],
            imports: [
                _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_7__["NgSelectModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_8__["ReactiveFormsModule"],
                primeng_button__WEBPACK_IMPORTED_MODULE_6__["ButtonModule"],
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__["BrowserAnimationsModule"]
            ],
            providers: [_angular_common__WEBPACK_IMPORTED_MODULE_9__["TitleCasePipe"], _servicio_service__WEBPACK_IMPORTED_MODULE_10__["ServicioService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/authentication/authentication.service.ts":
/*!**********************************************************!*\
  !*** ./src/app/authentication/authentication.service.ts ***!
  \**********************************************************/
/*! exports provided: AuthenticationService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthenticationService", function() { return AuthenticationService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _shared_variables_global__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shared/variables_global */ "./src/app/shared/variables_global.ts");
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
var AuthenticationService = /** @class */ (function () {
    function AuthenticationService(router, http) {
        this.router = router;
        this.http = http;
        this.httpHeaders = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({ 'Content-Type': 'application/json' });
    }
    AuthenticationService.prototype.login = function (form) {
        var _this = this;
        return this.http.post("" + ('' + _shared_variables_global__WEBPACK_IMPORTED_MODULE_4__["server"] + 'api/validarusuarios'), form, { headers: this.httpHeaders })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (user) {
            // login successful if there's a jwt token in the response
            // almacene los detalles del usuario y el token jwt en el almacenamiento local para mantener al usuario conectado entre las actualizaciones de la página
            // store user details and jwt token in local storage to keep user logged in between page refreshes
            localStorage.setItem('currentUser', JSON.stringify(user));
            _this.usuario = user;
            _this.isLoggedIn();
            return user;
        }));
    };
    AuthenticationService.prototype.logout = function () {
        // remove user from local storage to log user out
        localStorage.removeItem('currentUser');
    };
    AuthenticationService.prototype.isLoggedIn = function () {
        // const user = this.getUserDetails();
        this.usuario = JSON.parse(localStorage.getItem('currentUser'));
        if (this.usuario != null) {
            return true;
        }
        else {
            this.router.navigate(['/authentication/sign-in']);
            return false;
        }
    };
    AuthenticationService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], AuthenticationService);
    return AuthenticationService;
}());



/***/ }),

/***/ "./src/app/guard/auth-guard-service.guard.ts":
/*!***************************************************!*\
  !*** ./src/app/guard/auth-guard-service.guard.ts ***!
  \***************************************************/
/*! exports provided: AuthGuardServiceGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuardServiceGuard", function() { return AuthGuardServiceGuard; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _authentication_authentication_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../authentication/authentication.service */ "./src/app/authentication/authentication.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AuthGuardServiceGuard = /** @class */ (function () {
    function AuthGuardServiceGuard(authenticationService) {
        this.authenticationService = authenticationService;
    }
    AuthGuardServiceGuard.prototype.canActivate = function (next, state) {
        return this.authenticationService.isLoggedIn();
    };
    AuthGuardServiceGuard = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_authentication_authentication_service__WEBPACK_IMPORTED_MODULE_1__["AuthenticationService"]])
    ], AuthGuardServiceGuard);
    return AuthGuardServiceGuard;
}());



/***/ }),

/***/ "./src/app/pacientes/pacientes.service.ts":
/*!************************************************!*\
  !*** ./src/app/pacientes/pacientes.service.ts ***!
  \************************************************/
/*! exports provided: PacientesService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PacientesService", function() { return PacientesService; });
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
var PacientesService = /** @class */ (function () {
    function PacientesService(http) {
        this.http = http;
        this.usuario = {};
        this.httpHeaders = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({ 'Content-Type': 'application/json' });
    }
    PacientesService.prototype.filtro = function (procedencia, sexo, edad, cedula, nombres) {
        //'+global.server+'
        return this.http.get("" + ('' + _shared_variables_global__WEBPACK_IMPORTED_MODULE_2__["server"] + 'api/paciente?procedencia=') + procedencia + '&sexo=' + sexo + '&edad=' + edad + '&cedula=' + cedula + '&nombres=' + nombres, { headers: this.httpHeaders });
    };
    PacientesService.prototype.getAll = function () {
        return this.http.get("" + ('' + _shared_variables_global__WEBPACK_IMPORTED_MODULE_2__["server"] + 'api/pacientes'), { headers: this.httpHeaders });
    };
    PacientesService.prototype.getByCedula = function (cedula) {
        return this.http.post("" + ('' + _shared_variables_global__WEBPACK_IMPORTED_MODULE_2__["server"] + 'api/buscarpaciente'), { cedula: cedula }, { headers: this.httpHeaders });
    };
    PacientesService.prototype.update = function (paciente) {
        return this.http.put("" + ('' + _shared_variables_global__WEBPACK_IMPORTED_MODULE_2__["server"] + 'api/paciente'), paciente, { headers: this.httpHeaders });
    };
    PacientesService.prototype.register = function (paciente) {
        return this.http.post("" + ('' + _shared_variables_global__WEBPACK_IMPORTED_MODULE_2__["server"] + 'api/paciente'), paciente, { headers: this.httpHeaders });
    };
    PacientesService.prototype.contar = function () {
        return this.http.get("" + ('' + _shared_variables_global__WEBPACK_IMPORTED_MODULE_2__["server"] + 'api/contar-pacientes'), { headers: this.httpHeaders });
    };
    PacientesService.prototype.buscarPacientePorCaracterDeNombres = function (id, resultados) {
        return this.http.post("" + ('' + _shared_variables_global__WEBPACK_IMPORTED_MODULE_2__["server"] + 'api/buscar-paciente-por-caracter-de-nombres'), { id: id, resultados: resultados }, { headers: this.httpHeaders });
    };
    PacientesService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], PacientesService);
    return PacientesService;
}());



/***/ }),

/***/ "./src/app/servicio.service.ts":
/*!*************************************!*\
  !*** ./src/app/servicio.service.ts ***!
  \*************************************/
/*! exports provided: ServicioService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServicioService", function() { return ServicioService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _shared_variables_global__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./shared/variables_global */ "./src/app/shared/variables_global.ts");
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
var ServicioService = /** @class */ (function () {
    function ServicioService(http) {
        this.http = http;
        this.httpHeaders = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({ 'Content-Type': 'application/json' });
    }
    ServicioService.prototype.crearBackup = function () {
        return this.http.get("" + ('' + _shared_variables_global__WEBPACK_IMPORTED_MODULE_2__["server"] + 'api/backup'), { responseType: 'text' });
    };
    ServicioService.prototype.restaurarCopia = function (path) {
        return this.http.post("" + ('' + _shared_variables_global__WEBPACK_IMPORTED_MODULE_2__["server"] + 'api/restaurar'), { path: path }, { responseType: 'text' });
    };
    ServicioService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], ServicioService);
    return ServicioService;
}());



/***/ }),

/***/ "./src/app/shared/variables_global.ts":
/*!********************************************!*\
  !*** ./src/app/shared/variables_global.ts ***!
  \********************************************/
/*! exports provided: server, var2, var3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "server", function() { return server; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "var2", function() { return var2; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "var3", function() { return var3; });
var server = 'https://api-rest-lab-clinico-uajms.herokuapp.com/';
//export var server: string = 'http://localhost:8080/backend/';
var var2 = 2;
var var3 = 'var3';


/***/ }),

/***/ "./src/app/solicitudes/solicitudes.service.ts":
/*!****************************************************!*\
  !*** ./src/app/solicitudes/solicitudes.service.ts ***!
  \****************************************************/
/*! exports provided: SolicitudesService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SolicitudesService", function() { return SolicitudesService; });
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
var SolicitudesService = /** @class */ (function () {
    function SolicitudesService(http) {
        this.http = http;
        this.usuario = {};
        this.httpHeaders = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({ 'Content-Type': 'application/json' });
        this.httpHeaders2 = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({ 'Content-Type': 'text/plain; charset=utf-8' });
    }
    SolicitudesService.prototype.getPostas = function () {
        return this.http.get("" + ('' + _shared_variables_global__WEBPACK_IMPORTED_MODULE_2__["server"] + 'api/postas'), { headers: this.httpHeaders });
    };
    SolicitudesService.prototype.getAll = function () {
        return this.http.get("" + ('' + _shared_variables_global__WEBPACK_IMPORTED_MODULE_2__["server"] + 'api/solicitudes'), { headers: this.httpHeaders });
    };
    SolicitudesService.prototype.obtenerSolicitud = function (cod_solicitud) {
        console.log(cod_solicitud);
        return this.http.get("" + ('' + _shared_variables_global__WEBPACK_IMPORTED_MODULE_2__["server"] + 'api/solicitud/') + cod_solicitud, { headers: this.httpHeaders });
    };
    SolicitudesService.prototype.numSolicitudes = function () {
        return this.http.get("" + ('' + _shared_variables_global__WEBPACK_IMPORTED_MODULE_2__["server"] + 'api/contar-solicitudes'), { headers: this.httpHeaders });
    };
    SolicitudesService.prototype.minimaFecha = function () {
        return this.http.get("" + ('' + _shared_variables_global__WEBPACK_IMPORTED_MODULE_2__["server"] + 'api/minima-fecha-solicitud'), { responseType: 'text' });
    };
    SolicitudesService.prototype.numSolicitudesPendientes = function () {
        return this.http.get("" + ('' + _shared_variables_global__WEBPACK_IMPORTED_MODULE_2__["server"] + 'api/contar-solicitudes-pendientes'), { headers: this.httpHeaders });
    };
    SolicitudesService.prototype.filtrarPaciente = function (cedula, fecha_solicitud, fecha_inicio, fecha_fin, estado_solicitud, resultados) {
        return this.http.get("" + ('' + _shared_variables_global__WEBPACK_IMPORTED_MODULE_2__["server"] + 'api/solicitudes?cedula=') + cedula + '&fecha_solicitud=' + fecha_solicitud + '&fecha_inicio=' + fecha_inicio + '&fecha_fin=' + fecha_fin + '&estado_solicitud=' + estado_solicitud + '&resultados=' + resultados, { headers: this.httpHeaders });
    };
    SolicitudesService.prototype.filtrarSolicitudes_de_Paciente_por_area = function (cedula, nombre_area, caracter_nombre_examen, fecha_solicitud, fecha_inicio, fecha_fin, estado_solicitud) {
        return this.http.post("" + ('' + _shared_variables_global__WEBPACK_IMPORTED_MODULE_2__["server"] + 'api/filtrar-solicitudes-de-paciente-por-area-de-examen'), { cedula: cedula, nombre_area: nombre_area, caracter_nombre_examen: caracter_nombre_examen, fecha_solicitud: fecha_solicitud, fecha_inicio: fecha_inicio, fecha_fin: fecha_fin, estado_solicitud: estado_solicitud }, { headers: this.httpHeaders });
    };
    //-----------------------------------------
    SolicitudesService.prototype.filtrarSolicitudes_de_Paciente = function (cedula, nombre_area, caracter_nombre_examen, fecha_solicitud, fecha_inicio, fecha_fin, estado_solicitud) {
        return this.http.get("" + ('' + _shared_variables_global__WEBPACK_IMPORTED_MODULE_2__["server"] + 'api/examenes-solicitados?cedula=') + cedula + '&nombre_area=' + nombre_area + '&caracter_nombre_examen=' + caracter_nombre_examen + '&fecha_solicitud=' + fecha_solicitud + '&fecha_inicio=' + fecha_inicio + '&fecha_fin=' + fecha_fin + '&estado_solicitud=' + estado_solicitud, { headers: this.httpHeaders });
    };
    SolicitudesService.prototype.filtrarPacientePorCedula = function (cedula) {
        return this.http.post("" + ('' + _shared_variables_global__WEBPACK_IMPORTED_MODULE_2__["server"] + 'api/filtrar-solicitud-por-cedula-paciente'), { cedula: cedula }, { headers: this.httpHeaders });
    };
    SolicitudesService.prototype.filtrarPorFechaSolicitud = function (fecha) {
        return this.http.post("" + ('' + _shared_variables_global__WEBPACK_IMPORTED_MODULE_2__["server"] + 'api/filtrar-por-fecha-de-solicitud'), { fecha: fecha }, { headers: this.httpHeaders });
    };
    SolicitudesService.prototype.getAllAreas = function () {
        return this.http.get("" + ('' + _shared_variables_global__WEBPACK_IMPORTED_MODULE_2__["server"] + 'api/areas'), { headers: this.httpHeaders });
    };
    SolicitudesService.prototype.obtenerexamenesporarea = function (pe) {
        return this.http.post("" + ('' + _shared_variables_global__WEBPACK_IMPORTED_MODULE_2__["server"] + 'api/examenes-por-area-institucion'), pe, { headers: this.httpHeaders });
    };
    SolicitudesService.prototype.getByNameExamen = function (cod_examen) {
        return this.http.post("" + ('' + _shared_variables_global__WEBPACK_IMPORTED_MODULE_2__["server"] + 'api/obtenernombreexamen'), { cod_examen: cod_examen }, { headers: this.httpHeaders });
    };
    SolicitudesService.prototype.getByIdPrecio_examen = function (cod_precio_examen) {
        return this.http.post("" + ('' + _shared_variables_global__WEBPACK_IMPORTED_MODULE_2__["server"] + 'api/precio-examen'), { cod_precio_examen: cod_precio_examen }, { headers: this.httpHeaders });
    };
    SolicitudesService.prototype.modificar = function (solicitud) {
        return this.http.put("" + ('' + _shared_variables_global__WEBPACK_IMPORTED_MODULE_2__["server"] + 'api/solicitud'), solicitud, { headers: this.httpHeaders });
    };
    SolicitudesService.prototype.quitar_examen = function (cod_solicitud, cod_examen) {
        return this.http.post("" + ('' + _shared_variables_global__WEBPACK_IMPORTED_MODULE_2__["server"] + 'api/eliminar-examen-de-solicitud'), { cod_solicitud: cod_solicitud, cod_examen: cod_examen }, { headers: this.httpHeaders });
    };
    SolicitudesService.prototype.register = function (paciente) {
        return this.http.post("" + ('' + _shared_variables_global__WEBPACK_IMPORTED_MODULE_2__["server"] + 'api/solicitud'), paciente, { headers: this.httpHeaders });
    };
    SolicitudesService.prototype.guardar = function (solicitud) {
        return this.http.post("" + ('' + _shared_variables_global__WEBPACK_IMPORTED_MODULE_2__["server"] + 'api/solicitud'), solicitud, { headers: this.httpHeaders });
    };
    SolicitudesService.prototype.obtenerExamen = function (cod_examen) {
        return this.http.get("" + ('' + _shared_variables_global__WEBPACK_IMPORTED_MODULE_2__["server"] + 'api/examen/') + cod_examen, { headers: this.httpHeaders });
    };
    SolicitudesService.prototype.obtener_solicitud_con_resultados_examenes_cargados = function (solicitud) {
        return this.http.post("" + ('' + _shared_variables_global__WEBPACK_IMPORTED_MODULE_2__["server"] + 'api/solicitud-con-resultados-examenes'), solicitud, { headers: this.httpHeaders });
    };
    SolicitudesService.prototype.getInstitucionesFaltantes = function () {
        return this.http.get("" + ('' + _shared_variables_global__WEBPACK_IMPORTED_MODULE_2__["server"] + 'api/institucionesFaltantes'), { headers: this.httpHeaders });
    };
    SolicitudesService.prototype.getInstitucion = function (cod_institucion) {
        return this.http.post("" + ('' + _shared_variables_global__WEBPACK_IMPORTED_MODULE_2__["server"] + 'api/institucion'), { cod_institucion: cod_institucion }, { headers: this.httpHeaders });
    };
    SolicitudesService.prototype.filtrarPorRangoFecha = function (fe_in, fe_fin) {
        return this.http.post("" + ('' + _shared_variables_global__WEBPACK_IMPORTED_MODULE_2__["server"] + 'api/filtrar-por-rango-fecha'), { fe_in: fe_in, fe_fin: fe_fin }, { headers: this.httpHeaders });
    };
    SolicitudesService.prototype.getFecha = function (solicitud) {
        return this.http.post("" + ('' + _shared_variables_global__WEBPACK_IMPORTED_MODULE_2__["server"] + 'api/pruebita'), solicitud, { responseType: 'text' });
    };
    SolicitudesService.prototype.generarFactura = function (solicitud) {
        return this.http.post("" + ('' + _shared_variables_global__WEBPACK_IMPORTED_MODULE_2__["server"] + 'api/generar-factura'), solicitud, { headers: this.httpHeaders });
    };
    SolicitudesService.prototype.listarDoctorSolicitante = function () {
        return this.http.get("" + ('' + _shared_variables_global__WEBPACK_IMPORTED_MODULE_2__["server"] + 'api/listar-doctor-solicitante'), { headers: this.httpHeaders });
    };
    SolicitudesService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], SolicitudesService);
    return SolicitudesService;
}());



/***/ }),

/***/ "./src/app/usuarios/usuarios.service.ts":
/*!**********************************************!*\
  !*** ./src/app/usuarios/usuarios.service.ts ***!
  \**********************************************/
/*! exports provided: UsuariosService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UsuariosService", function() { return UsuariosService; });
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
var UsuariosService = /** @class */ (function () {
    function UsuariosService(http) {
        this.http = http;
        this.usuario = {};
        this.httpHeaders = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({ 'Content-Type': 'application/json' });
    }
    UsuariosService.prototype.getAll = function () {
        return this.http.get("" + ('' + _shared_variables_global__WEBPACK_IMPORTED_MODULE_2__["server"] + 'api/usuarios'), { headers: this.httpHeaders });
    };
    UsuariosService.prototype.getAllRoles = function () {
        return this.http.get("" + ('' + _shared_variables_global__WEBPACK_IMPORTED_MODULE_2__["server"] + 'api/roles'), { headers: this.httpHeaders });
    };
    UsuariosService.prototype.numDoctores = function () {
        return this.http.get("" + ('' + _shared_variables_global__WEBPACK_IMPORTED_MODULE_2__["server"] + 'api/num-doctores'), { headers: this.httpHeaders });
    };
    UsuariosService.prototype.register = function (usuario) {
        console.log(usuario);
        return this.http.post("" + ('' + _shared_variables_global__WEBPACK_IMPORTED_MODULE_2__["server"] + 'api/usuario'), usuario, { headers: this.httpHeaders });
    };
    UsuariosService.prototype.actualizarUsuario = function (usuario) {
        this.cadena = "klp";
        //const formData: FormData = new FormData();
        //formData.append('Image', fileToUpload, fileToUpload.name);
        //formData.append('parametro', this.cadena);
        return this.http.put("" + ('' + _shared_variables_global__WEBPACK_IMPORTED_MODULE_2__["server"] + 'api/actualizar-usuario'), usuario, { headers: this.httpHeaders });
    };
    UsuariosService.prototype.cambiarContrasenia = function (cedula, password) {
        return this.http.post("" + ('' + _shared_variables_global__WEBPACK_IMPORTED_MODULE_2__["server"] + 'api/actualizar-password'), { cedula: cedula, password: password }, { headers: this.httpHeaders });
    };
    UsuariosService.prototype.verificarCedula = function (cedula) {
        return this.http.post("" + ('' + _shared_variables_global__WEBPACK_IMPORTED_MODULE_2__["server"] + 'api/verificar-cedula'), { cedula: cedula }, { headers: this.httpHeaders });
    };
    UsuariosService.prototype.uploadImagen = function (fileToUpload) {
        var formData = new FormData();
        formData.append('imagen', fileToUpload);
        formData.append('nombreImagen', fileToUpload.name);
        return this.http.post("" + ('' + _shared_variables_global__WEBPACK_IMPORTED_MODULE_2__["server"] + 'api/upload-imagen'), formData);
    };
    UsuariosService.prototype.filtro = function (form) {
        return this.http.get("" + ('' + _shared_variables_global__WEBPACK_IMPORTED_MODULE_2__["server"] + 'api/usuarios?estado=') + form.estado + '&rol=' + form.rol.nombre + '&cedula=' + form.cedula + '&nombres=' + form.nombres, { headers: this.httpHeaders });
    };
    UsuariosService.prototype.actualizarEstado = function (user) {
        return this.http.put("" + ('' + _shared_variables_global__WEBPACK_IMPORTED_MODULE_2__["server"] + 'api/actualizar-estado-usuario'), user, { headers: this.httpHeaders });
    };
    UsuariosService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], UsuariosService);
    return UsuariosService;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");





if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\backup taller3\front-end-LAB-CLINICO-UAJMS\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map