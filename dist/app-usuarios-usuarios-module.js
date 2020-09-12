(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["app-usuarios-usuarios-module"],{

/***/ "./src/app/usuarios/listar/listar.component.css":
/*!******************************************************!*\
  !*** ./src/app/usuarios/listar/listar.component.css ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n.modal-login {\t\t\r\n    color: #636363;\r\n    width: 350px;\r\n}\r\n.modal-login .modal-content {\r\n    padding: 20px;\r\n    border-radius: 5px;\r\n    border: none;\r\n}\r\n.modal-login .modal-header {\r\n    border-bottom: none;   \r\n    position: relative;\r\n    justify-content: center;\r\n}\r\n.modal-login h4 {\r\n    text-align: center;\r\n    font-size: 26px;\r\n    margin: 30px 0 -15px;\r\n}\r\n.modal-login .form-control:focus {\r\n    border-color: #70c5c0;\r\n}\r\n.modal-login .form-control, .modal-login .btn {\r\n    min-height: 40px;\r\n    border-radius: 3px; \r\n}\r\n.modal-login .close {\r\n    position: absolute;\r\n    top: -5px;\r\n    right: -5px;\r\n}\r\n.modal-login .modal-footer {\r\n \r\n    text-align: center;\r\n    justify-content: center;\r\n    margin: 0 -20px -20px;\r\n    border-radius: 5px;\r\n    font-size: 13px;\r\n}\r\n.modal-login .modal-footer a {\r\n    color: #999;\r\n}\r\n.modal-login .avatar {\r\n    position: absolute;\r\n    margin: 0 auto;\r\n    left: 0;\r\n    right: 0;\r\n    top: -65px;/* valor por defecto -60px y mueve la imagen hacia arriba y abajo*/\r\n    width: 95px;\r\n    height: 95px;\r\n    border-radius: 50%;\r\n    z-index: 9;\r\n  \r\n\r\n    box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.1);\r\n}\r\n.modal-login.modal-dialog {\r\n    margin-top: 80px;\r\n}\r\n.modal-login .btn {\r\n    color: #fff;\r\n    border-radius: 4px;\r\n    text-decoration: none;\r\n    transition: all 0.4s;\r\n    line-height: normal;\r\n    border: none;\r\n}\r\n.modal-login .btn:hover, .modal-login .btn:focus {\r\n   \r\n    outline: none;\r\n}\r\n.trigger-btn {\r\n    display: inline-block;\r\n    margin: 100px auto;\r\n}\r\n.imgRedonda {\r\n    width:95px;\r\n    height:95px;\r\n    border-radius:50%;\r\n}\r\n.link{\r\n \r\n  \r\n    cursor: pointer\r\n  }\r\n.btn-pequeño{height:1.675rem;min-width:1.675rem;width:1.675rem;padding:0;\r\n    font-size:.9375rem;overflow:hidden;position:relative;line-height:normal}\r\n.btn-light {\r\n        color: #212529;\r\n        background-color: #f8f9fa;\r\n        border-color: #f8f9fa;\r\n      }\r\ninput{\r\n    width:100%\r\n}\r\n.titulo{\r\n   \r\n    text-transform: capitalize;\r\n  }"

/***/ }),

/***/ "./src/app/usuarios/listar/listar.component.html":
/*!*******************************************************!*\
  !*** ./src/app/usuarios/listar/listar.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section class=\"content\">\n  <div class=\"block-header\">\n    <div class=\"row\">\n      <div class=\"col-lg-7 col-md-6 col-sm-12\">\n        <h2>Usuarios\n          \n        </h2>\n      </div>\n      <div class=\"col-lg-5 col-md-6 col-sm-12\">\n        <ul class=\"breadcrumb float-md-right\">\n          <li class=\"breadcrumb-item\"><a routerLink=\"/dashboard/main\"><i class=\"zmdi zmdi-home\"></i> </a></li>\n          <li class=\"breadcrumb-item\"><a href=\"javascript:void(0);\">usuarios</a></li>\n           <li class=\"breadcrumb-item active\">lista-usuarios</li>\n        </ul>\n      </div>\n    </div>\n  </div>\n  <div class=\"container-fluid\">\n    <!-- Basic Examples -->\n    <div class=\"row clearfix\">\n      <div class=\"col-lg-12\">\n        <div class=\"card\">\n          <div class=\"header\">\n            \n              <button type=\"button\" routerLink=\"/usuarios/registrar\" class=\"btn btn-raised btn-primary btn-round waves-effect\">Registrar</button>\n            <ul class=\"header-dropdown\">\n              <li class=\"dropdown\"> <a href=\"javascript:void(0);\" class=\"dropdown-toggle\" data-toggle=\"dropdown\" role=\"button\" aria-haspopup=\"true\" aria-expanded=\"false\"> <i class=\"zmdi zmdi-more\"></i> </a>\n                <ul class=\"dropdown-menu dropdown-menu-right slideUp float-right\">\n                  <li><a href=\"javascript:void(0);\">Action</a></li>\n                  <li><a href=\"javascript:void(0);\">Another action</a></li>\n                  <li><a href=\"javascript:void(0);\">Something else</a></li>\n                </ul>\n              </li>\n              <li class=\"remove\">\n                <a role=\"button\" class=\"boxs-close\"><i class=\"zmdi zmdi-close\"></i></a>\n              </li>\n            </ul>\n          </div>\n          <div class=\"body\">\n            <p-table  #dd [value]=\"usuarios\" [paginator]=\"true\" [rows]=\"5\" [pageLinks]=\"2\" [rowsPerPageOptions]=\"[5,10,20]\" selectionMode=\"multiple\" [columns]=\"cols\">\n              <ng-template pTemplate=\"caption\">\n                <div class=\"ui-helper-clearfix\" style=\"text-align: left\">\n                 \n                  <button type=\"button\" pButton icon=\"pi pi-file\" iconPos=\"left\" label=\"PDF\" (click)=\"exportPdf()\" class=\"btn btn-warning\"></button>\n                   \n                  </div>\n            </ng-template>\n              <ng-template pTemplate=\"header\" let-solicitud=\"rowData\">\n                  <tr><th style=\"width:30px\">#</th>\n                      <th *ngFor=\"let col of cols\" >\n                          {{col.header}}\n                      </th>\n                      \n                      <th>Estado</th>\n                      <th>Rol</th>\n                      <th style=\"width:120px\">Acciones</th>\n                  </tr>\n                  <tr>\n                    <th></th>\n                      <th  style=\"width:auto\" *ngFor=\"let col of cols\" [ngSwitch]=\"col.field\">\n                        \n                          <input *ngSwitchCase=\"'cedula'\" [(ngModel)]=\"form.cedula\" pInputText type=\"text\" (input)=\"filtro_completo()\">\n                          <input  *ngSwitchCase=\"'nombres'\" [(ngModel)]=\"form.nombres\" pInputText type=\"text\" (input)=\"filtro_completo()\">\n                        \n                     \n                      </th>\n                      <th> <ng-select   placeholder=\"Selecciona un estado\"   [(ngModel)]=\"form.estado\" class=\"\" (ngModelChange)=\"filtro_completo()\"   name=\"estado\" required>\n                        <ng-option  *ngFor=\" let rol of brands\" [value]=\"rol.value\" >{{rol.label}}</ng-option>\n                       \n                       </ng-select>\n                       </th>\n                      <th>  \n                        <ng-select  placeholder=\"Selecciona un rol\"   [(ngModel)]=\"form.rol\" class=\"\" (ngModelChange)=\"filtro_completo()\"   name=\"estado\" required>\n                        <ng-option  *ngFor=\" let rol of roles\" [value]=\"rol\" >{{rol.nombre}}</ng-option>\n                       \n                       </ng-select>  </th>\n                      <th></th>\n                  </tr>\n              </ng-template>\n              <ng-template pTemplate=\"body\"   let-i=\"rowIndex\" let-usuario>\n                  <tr>\n                    <td>\n                            {{i+1}}\n                    <!-- pas-->\n                    </td>\n                      <td *ngFor=\"let col of cols; index as i\" [style]=\"{'width':'100%'}\">\n                          {{usuario[col.field]}}\n                      </td>\n                      <td class=\"titulo\">\n                        {{usuario.estado}}\n                        </td>\n                      <td>\n                      {{usuario.rol.nombre}}\n                      </td>\n                     \n                         <td class=\"body data text-center container\">\n                          <div class=\"row\">\n                          \n                            <div class=\"col-md-1\">\n                             <button  rel=\"tooltip\" data-placement=\"top\" title=\"Ver Datos\" (click)=\"ver(usuario)\" data-toggle=\"modal\" data-target=\"#defaultModal\" class=\"btn btn-info btn-pequeño  btn-icon-mini btn-round\">\n                              <i class=\"zmdi zmdi-eye col-white\" style=\"color:white; font-size:17px\"></i>\n                              </button>\n                      </div>\n\n                      \n                          \n                      <div  rel=\"tooltip\" data-placement=\"top\" title=\"Modificar\" class=\"col-md-1\">\n                           \n                              <button (click)=\"actualizar(usuario)\"  routerLink=\"/usuarios/modificar\"  class=\"btn btn-warning btn-pequeño  btn-icon-mini btn-round\">\n                                <i class=\"zmdi zmdi-edit col-white\" style=\"color:white; font-size:17px\"></i>\n                                </button>\n                        </div>\n                        <div class=\"col-md-1\" *ngIf=\"usuario.estado=='deshabilitado'\">\n                          <button  (click)=\"actualizarEstado(usuario, 'habilitado')\"  rel=\"tooltip\" data-placement=\"top\" title=\"Habilitar\"  class=\"btn btn-success btn-pequeño  btn-icon-mini btn-round\">\n                            <i class=\"material-icons\" style=\"color:white; font-size:17px\">thumb_up</i>\n                            </button>\n                      </div>\n                      <div    rel=\"tooltip\" data-placement=\"top\" title=\"Deshabilitar\"  class=\"col-md-1\" *ngIf=\"usuario.estado=='habilitado'\">\n                        <button   (click)=\"actualizarEstado(usuario, 'deshabilitado')\" class=\"btn btn-danger btn-pequeño  btn-icon-mini btn-round\">\n                          <i class=\"material-icons\" style=\"color:white; font-size:17px\">thumb_down</i>\n                          </button> </div>\n                      \n                        \n                      </div>\n                  </tr>\n              </ng-template>\n                \n                \n            </p-table>\n\n<!--\n            <div class=\"table-responsive\">\n              <table class=\"table table-bordered table-striped table-hover js-basic-example dataTable\">\n                <thead>\n                  <tr>\n                      <th>#</th>\n                      <th>USUARIO</th>\n                    <th>ROL</th>\n                      <th>ESTADO</th>\n                      <TH>MODIFICAR</TH>\n                  </tr>\n                </thead>\n                <tbody>\n                  <tr *ngFor=\"let user of usuarios  | paginate: {itemsPerPage: 5, currentPage: pageActual}; index as i\">\n                    <th scope=\"row\">{{i+1}}</th>\n                    <td>     {{user.personal_laboratorio.persona.nombre}} {{user.personal_laboratorio.persona.ap}} {{user.personal_laboratorio.persona.am}}\n                      <td>\n                        <ng-select   placeholder=\"Selecciona un rol\" [closeOnSelect]=\"false\"  [(ngModel)]=\"user.roles[0].cod_rol\" class=\"\" (ngModelChange)=\"rolseleccionar($event)\" multiple  name=\"rol\" required>\n                          <ng-option  *ngFor=\" let rol of user.roles\" [value]=\"rol.cod_rol\" >{{rol.nombre}}</ng-option>\n                         \n                         </ng-select>\n                 </td>\n                      <td>{{user.estado}}</td>\n                      <td><a routerLink=\"/usuarios/modificar\" (click)=\"modificarUsuario(user)\" class=\" waves-effect waves-float waves-green\"><i class=\"zmdi zmdi-edit\"></i></a>\n                      </td>\n                  </tr>\n         </tbody>\n              </table>\n              <pagination-controls (pageChange)=\"pageActual = $event\"   previousLabel=\"Atras\" nextLabel=\"Siguiente\"></pagination-controls>\n        \n\n            </div>\n          -->\n          </div>\n        </div>\n      </div>\n    </div>\n    <!-- #END# Basic Examples -->\n    <!-- Exportable Table -->\n    \n    <!-- #END# Exportable Table -->\n  </div>\n</section>\n<div class=\"modal fade\" id=\"defaultModal\" >\n  <div class=\"modal-dialog modal-login\">\n    <div class=\"modal-content\">\n      <div class=\"modal-header\">\n        <div class=\"avatar\">\n\t\t\t\t\t<img [src]=\"usuario.personal_laboratorio.link_foto\" class=\"rounded-circle img-raised imgRedonda\"  alt=\"Avatar\">\n        </div>\t\n        <!-- \n        <h4 class=\"title\" id=\"defaultModalLabel\">Datos del Paciente</h4>usuario.personal_laboratorio.link_foto\n      -->\n      </div>\n      <div class=\"modal-body\">\n        <div class=\"container text-center\">\n         \n          <div class=\"row\">\n            <div class=\"col \">\n                <p class=\"font-weight-bold\">Cedula de Identidad: \n                    <span class=\"font-weight-normal\">{{usuario.cedula}}</span>\n                </p>\n            </div>\n        </div>\n        <div class=\"row\">\n          <div class=\"col \">\n              <p class=\"font-weight-bold\">Nombres: \n                  <span class=\"font-weight-normal\">{{usuario.personal_laboratorio.persona.nombre}}</span>\n              </p>\n          </div>\n      </div>\n      <div class=\"row\">\n        <div class=\"col \">\n            <p class=\"font-weight-bold\">Apellidos: \n                <span class=\"font-weight-normal\">{{usuario.personal_laboratorio.persona.ap}} {{usuario.personal_laboratorio.persona.am}}</span>\n            </p>\n        </div>\n    </div>\n    <div class=\"row\">\n      <div class=\"col \">\n          <p class=\"font-weight-bold\">Profesión: \n              <span class=\"font-weight-normal\">{{usuario.personal_laboratorio.profesion}}</span>\n          </p>\n      </div>\n  </div>\n  <div class=\"row\">\n    <div class=\"col \">\n        <p class=\"font-weight-bold\">Rol: \n            <span class=\"font-weight-normal\">{{usuario.rol.nombre}}</span>\n        </p>\n    </div>\n</div>\n<div class=\"row\">\n  <div class=\"col \">\n      <p class=\"font-weight-bold\">Estado: \n          <span class=\"font-weight-normal\">{{usuario.estado}}</span>\n      </p>\n  </div>\n</div>\n      \n\n    \n\n\n\n\n\n\n\n\n\n</div>\n       </div>\n      <div class=\"modal-footer\">\n        <button type=\"button\" class=\"btn btn-danger btn-round waves-effect\" data-dismiss=\"modal\">CERRAR</button>\n       \n      </div>\n    </div>\n\n    \n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/usuarios/listar/listar.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/usuarios/listar/listar.component.ts ***!
  \*****************************************************/
/*! exports provided: ListarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListarComponent", function() { return ListarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _usuarios_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../usuarios.service */ "./src/app/usuarios/usuarios.service.ts");
/* harmony import */ var _models__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../models */ "./src/app/models/index.ts");
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
    function ListarComponent(usuariosService, router, node) {
        var _this = this;
        this.usuariosService = usuariosService;
        this.router = router;
        this.node = node;
        this.pageActual = 1;
        this.roles = [];
        this.usuario = new _models__WEBPACK_IMPORTED_MODULE_3__["Usuario"]();
        this.imageUrl = "http://localhost:9898/api/file/";
        this.mensaje = "";
        this.color = '';
        this.usuariosService.getAllRoles().subscribe(function (data) {
            _this.roles = data;
            console.log(_this.roles);
        });
        this.form = new _models__WEBPACK_IMPORTED_MODULE_3__["Usuario"]();
        this.numero = 1;
        this.rootNode = node;
        usuariosService.filtro(this.form).subscribe(function (data) {
            _this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
            _this.usuarios = data;
            for (var i = 0; i < _this.usuarios.length; i++) {
                _this.usuarios[i].nombres = _this.usuarios[i].personal_laboratorio.persona.nombre + " " + _this.usuarios[i].personal_laboratorio.persona.ap + " " + _this.usuarios[i].personal_laboratorio.persona.am;
            }
        });
    }
    ListarComponent.prototype.ngOnInit = function () {
        this.cols = [
            { field: 'cedula', header: 'Cedula' },
            { field: 'nombres', header: 'Usuario' }
        ];
        this.brands = [
            { label: 'Habilitado', value: 'habilitado' },
            { label: 'Deshabilitado', value: 'deshabilitado' }
        ];
        //var el=$(this.rootNodhje.nativeElemnt).find('.js-basic-example')[0]
        $('.js-sweetalert button').on('click', function () {
        });
        // These codes takes from http://t4t5.github.io/sweetalert/
    };
    ListarComponent.prototype.mostrarformparamodificar = function (paciente) {
        localStorage.setItem('paciente', JSON.stringify(paciente));
    };
    ListarComponent.prototype.actualizar = function (user) {
        localStorage.setItem('usuarioamodificar', JSON.stringify(user));
    };
    ListarComponent.prototype.ver = function (user) {
        this.usuario = user;
        this.imageUrl = this.imageUrl + this.usuario.personal_laboratorio.foto;
    };
    ListarComponent.prototype.exportPdf = function () {
        window.location.href = 'http://localhost:8080/jasperserver/rest_v2/reports/reports/usuarios.pdf?am_usuario=' + this.currentUser.personal_laboratorio.persona.am + '&estado=' + this.form.estado + '&ap_usuario=' + this.currentUser.personal_laboratorio.persona.ap + '&cedula=' + this.form.cedula + '&nombre_usuario=' + this.currentUser.personal_laboratorio.persona.nombre + '&rol=' + this.form.rol.nombre + '&nombres=' + this.form.nombres + '&j_username=' + 'jasperadmin' + '&j_password=' + 'jasperadmin';
        /*
        let doc = new jsPDF();
    let col = ["#", "Cedula", "Usuario","Rol","estado"];
    let rows = [];
    for(let i=0; i<this.usuarios.length; i++){
        let temp = [i+1,this.usuarios[i].cedula, this.usuarios[i].nombres,this.usuarios[i].rol.nombre,this.usuarios[i].estado];
        rows.push(temp);
    }
    doc.autoTable(col, rows);
    doc.save('usuarios.pdf');
    */
    };
    ListarComponent.prototype.filtro_completo = function () {
        var _this = this;
        console.log(this.form.cedula);
        if (this.form.estado == null) {
            this.form.estado = "";
        }
        if (this.form.rol == null) {
            this.form.rol = new _models__WEBPACK_IMPORTED_MODULE_3__["Rol"]();
            this.form.rol.nombre = "";
        }
        this.usuariosService.filtro(this.form).subscribe(function (data) {
            _this.usuarios = data;
            console.log(data);
            for (var i = 0; i < _this.usuarios.length; i++) {
                _this.usuarios[i].nombres = _this.usuarios[i].personal_laboratorio.persona.nombre + " " + _this.usuarios[i].personal_laboratorio.persona.ap + " " + _this.usuarios[i].personal_laboratorio.persona.am;
            }
        });
    };
    ListarComponent.prototype.actualizarEstados = function (usuario, estado) {
        var _this = this;
        usuario.estado = estado;
        this.usuariosService.actualizarEstado(usuario).subscribe(function (data) {
            _this.filtro_completo();
        });
    };
    ListarComponent.prototype.c = function () {
        alert(this.numero);
        //window.location.href = 'http://localhost:8080/jasperserver/rest_v2/reports/reports/areas.pdf'
        //.html?parametro=5
        window.location.href = 'http://localhost:8080/jasperserver/rest_v2/reports/reports/areas.pdf?parametro=' + this.numero;
        /*
        console.log('Loading Designer view');
      
          console.log('Set full screen mode for the designer');
          this.options = new Stimulsoft.Designer.StiDesignerOptions();
          this.options.appearance.fullScreenMode = false;
      
          console.log('Create the report designer with specified options');
          this.designer = new Stimulsoft.Designer.StiDesigner(this.options, 'StiDesigner', false);
      
          console.log('Edit report template in the designer');
          this.designer.report = new Stimulsoft.Report.StiReport();
      
          console.log('Load report from url');
          this.designer.report.loadFile('/reports/Report.mrt');
          this.designer.report.renderAsync(function () {
                  var data = this.designer.report.exportDocument(Stimulsoft.Report.StiExportFormat.Pdf);
                  (<any>Object).saveAs(data, "Report.pdf", "application/pdf");
              })
          console.log('Rendering the designer to selected element');
          this.designer.renderHtml('designer');
      
          console.log('Loading completed successfully!');
          */
    };
    ListarComponent.prototype.actualizarEstado = function (usuario, estado) {
        var _this = this;
        if (estado == 'habilitado') {
            this.color = '#5cb85c';
            this.mensaje = "habilitar";
        }
        else {
            this.color = '#d9534f';
            this.mensaje = "deshabilitar";
        }
        //showConfirmMessage();
        Swal({
            title: 'Esta seguro de ' + this.mensaje + ' al usuario?',
            text: usuario.personal_laboratorio.persona.nombre + ' ' + usuario.personal_laboratorio.persona.ap + ' ' + usuario.personal_laboratorio.persona.am + ' sera ' + estado,
            type: 'warning',
            showCancelButton: true,
            confirmButtonColor: this.color,
            confirmButtonText: 'Si',
            cancelButtonText: 'No',
            closeOnConfirm: false
        }).then(function (result) {
            if (result.value) {
                console.log("ELEMINIADO");
                usuario.estado = estado;
                _this.usuariosService.actualizarEstado(usuario).subscribe(function (data) {
                    _this.filtro_completo();
                });
                Swal.fire(estado, 'El usuario ha sido ' + estado, 'success');
            }
            else {
                console.log("no eliminado");
            }
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('dataTable'),
        __metadata("design:type", Object)
    ], ListarComponent.prototype, "table", void 0);
    ListarComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-listar',
            template: __webpack_require__(/*! ./listar.component.html */ "./src/app/usuarios/listar/listar.component.html"),
            styles: [__webpack_require__(/*! ./listar.component.css */ "./src/app/usuarios/listar/listar.component.css")]
        }),
        __metadata("design:paramtypes", [_usuarios_service__WEBPACK_IMPORTED_MODULE_2__["UsuariosService"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]])
    ], ListarComponent);
    return ListarComponent;
}());



/***/ }),

/***/ "./src/app/usuarios/modificar/modificar.component.css":
/*!************************************************************!*\
  !*** ./src/app/usuarios/modificar/modificar.component.css ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".titulo{\r\n   \r\n    text-transform: capitalize;\r\n  }\r\n  .imageupload {\r\n    margin: 20px 0;\r\n}\r\n  .container {\r\n  max-width: 960px;\r\n  margin: 30px auto;\r\n  padding: 20px;\r\n}\r\n  h1 {\r\n  font-size: 20px;\r\n  text-align: center;\r\n  margin: 20px 0 20px;\r\n}\r\n  small {\r\n      display: block;\r\n      font-size: 15px;\r\n      padding-top: 8px;\r\n      color: gray;\r\n  }\r\n  .avatar-upload {\r\n  position: relative;\r\n  max-width: 205px;\r\n  margin: 50px auto;\r\n}\r\n  .avatar-edit {\r\n      position: absolute;\r\n      right: 12px;\r\n      z-index: 1;\r\n      top: 10px;\r\n  }\r\n  .avatar-preview {\r\n      width: 192px;\r\n      height: 192px;\r\n      position: relative;\r\n      border-radius: 100%;\r\n      border: 6px solid #F8F8F8;\r\n      box-shadow: 0px 2px 4px 0px rgba(0, 0, 0, 0.1);\r\n  }\r\n  .imgRedonda {\r\n    width:120px;\r\n    height:120px;\r\n    border-radius:50%;\r\n}\r\n"

/***/ }),

/***/ "./src/app/usuarios/modificar/modificar.component.html":
/*!*************************************************************!*\
  !*** ./src/app/usuarios/modificar/modificar.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section class=\"content \">\n  <div class=\"block-header m_img_btn\">\n    <div class=\"row\">\n      <div class=\"col-lg-7 col-md-6 col-sm-12\">\n        <h2>Usuarios\n          <small></small>\n        </h2>\n      </div>\n      <div class=\"col-lg-5 col-md-6 col-sm-12\">\n        <ul class=\"breadcrumb float-md-right\">\n          <li class=\"breadcrumb-item\"><a routerLink=\"/dashboard/main\"><i class=\"zmdi zmdi-home\"></i></a></li>\n          <li class=\"breadcrumb-item\"><a href=\"javascript:void(0);\">usuarios</a></li>\n          <li class=\"breadcrumb-item active\">modificar</li>\n        </ul>\n      </div>\n    </div>\n  </div>\n  <div class=\"container-fluid\">\n \n    <!-- Horizontal Layout -->\n    <div class=\"row clearfix\">\n      <div class=\"col-lg-12 col-md-12 col-sm-12\">\n        <div class=\"card\">\n          <div class=\"header\">\n            \n            <h2><strong>Modificar</strong> Usuario</h2>\n        \n            <ul class=\"header-dropdown\">\n              <li class=\"dropdown\"> <a href=\"javascript:void(0);\" class=\"dropdown-toggle\" data-toggle=\"dropdown\" role=\"button\" aria-haspopup=\"true\" aria-expanded=\"false\"> <i class=\"zmdi zmdi-more\"></i> </a>\n                <ul class=\"dropdown-menu dropdown-menu-right\">\n                  <li><a href=\"javascript:void(0);\">Action</a></li>\n                  <li><a href=\"javascript:void(0);\">Another action</a></li>\n                  <li><a href=\"javascript:void(0);\">Something else</a></li>\n                </ul>\n              </li>\n              <li class=\"remove\">\n                <a role=\"button\" class=\"boxs-close\"><i class=\"zmdi zmdi-close\"></i></a>\n              </li>\n            </ul>\n          </div>\n          <div class=\"body\">   \n             <form class=\"needs-validation\"   autocomplete=\"off\" ngNativeValidate  #formulario=ngForm>\n\n            <div class=\"row clearfix\">\n              <div class=\"col-lg-2 col-md-2 col-sm-4 form-control-label\">\n                <label for=\"cedula\">Cedula</label>\n              </div>\n              <div class=\"col-lg-10 col-md-10 col-sm-8\">\n                <div class=\"form-group\">\n                  <input  type=\"text\" id=\"cedula\" [(ngModel)]=\"form.cedula\" name=\"cedula\"  class=\"form-control\" placeholder=\"Entra tu cedula\"required>\n                \n                \n                </div>\n                \n\n              </div>\n            </div>\n\n            <div class=\"row clearfix\">\n              <div class=\"col-lg-2 col-md-2 col-sm-4 form-control-label\">\n                <label for=\"nombre\">Nombre</label>\n              </div>\n              <div class=\"col-lg-10 col-md-10 col-sm-8\">\n                <div class=\"form-group\">\n                  <input  type=\"text\" id=\"nombre\" [(ngModel)]=\"form.personal_laboratorio.persona.nombre\" name=\"nombre\" #nombre=\"ngModel\"  class=\"form-control titulo\" placeholder=\"Entra tu nombre\" required>\n                </div>\n\n              \n              </div>\n            </div>\n\n<div class=\"row clearfix\">\n<div class=\"col-lg-2 col-md-2 col-sm-4 form-control-label\">\n  <label for=\"ap\">Apellido Paterno</label>\n</div>\n<div class=\"col-lg-10 col-md-10 col-sm-8\">\n  <div class=\"form-group\">\n    <input [(ngModel)]=\"form.personal_laboratorio.persona.ap\" name=\"ap\" #ap=\"ngModel\" class=\"form-control titulo\" placeholder=\"Entra apellido paterno\" required>\n  </div>\n \n</div>\n</div>\n\n<div class=\"row clearfix\">\n<div class=\"col-lg-2 col-md-2 col-sm-4 form-control-label\">\n  <label for=\"ap\">Apellido Materno </label>\n</div>\n<div class=\"col-lg-10 col-md-10 col-sm-8\">\n  <div class=\"form-group\">\n    <input [(ngModel)]=\"form.personal_laboratorio.persona.am\" name=\"am\" #am=\"ngModel\" class=\"form-control titulo\" placeholder=\"Entra tu apellido materno\" >\n  </div>\n\n</div>\n</div>\n\n<div class=\"row clearfix\">\n<div class=\"col-lg-2 col-md-2 col-sm-4 form-control-label\">\n  <label for=\"ap\">Profesión </label>\n</div>\n<div class=\"col-lg-10 col-md-10 col-sm-8\">\n  <div class=\"form-group\">\n    <input [(ngModel)]=\"form.personal_laboratorio.profesion\" name=\"profesion\" #profesion=\"ngModel\" class=\"titulo form-control\" placeholder=\"Entra tu apellido materno\" required >\n  </div>\n \n</div>\n</div>\n\n\n<div class=\"row clearfix\">\n<div class=\"col-lg-2 col-md-2 col-sm-4\">\n  <label for=\"estado\">Rol </label>\n</div>\n<div class=\"col-lg-10 col-md-10 col-sm-8\">\n\n    <select id=rol placeholder=\"selecciona\"  [(ngModel)]=\"form.rol.cod_rol\"  class=\"form-control\"   name=\"rol\" required>\n      <option selected disabled value=\"Selecciona\">Choose...</option>\n      <option  *ngFor=\" let rol of roles\" [value]=\"rol.cod_rol\" >{{rol.nombre}}</option>\n     \n     </select>\n\n</div>\n</div>\n   \n  \n    <br>\n    \n<div class=\"row clearfix\">\n  <div class=\"col-lg-2 col-md-2 col-sm-4 form-control-label\">\n    <label for=\"estado\">Estado </label>\n  </div>\n  <div class=\"col-lg-10 col-md-10 col-sm-8\">\n    \n      <select  [(ngModel)]=\"form.estado\" class=\"form-control\"  (ngModelChange)=\"setestado($event)\"   name=\"estado\" required>\n        <option  [value]=\"e\" *ngFor=\" let e of ['habilitado', 'deshabilitado']\">{{e}}</option>\n       \n       </select>\n    \n    \n  </div>\n</div>\n\n<br>\n\n<div class=\"row clearfix\">\n  <div class=\"col-lg-2 col-md-2 col-sm-4 form-control-label\">\n    <label for=\"estado\">Foto </label>\n  </div>\n  <div class=\"col-lg-2 col-md-10 col-sm-8 card-img text-center p-2\">\n  <!--  \n    <img [src]=\"form.personal_laboratorio.foto\"  style=\"width:250px;height:145px; border-radius: 50%\"  >\n  -->\n    <input type=\"file\" class=\"d-none\" (change)=\"onPhotoSelected($event)\" #photoInput>\n    <img [src]=\"photoSelected || imageUrl\" class=\"img-raised imgRedonda\" \n        (click)=\"photoInput.click()\"><!-- al hacer click en la imagen el input oculto funciona -->\n        <!-- \n    <input type=\"file\" #Image accept=\"image/*hjhjkh\" (change)=\"handleFileInput($event.target.files)\">\n  -->\n    \n    \n  </div>\n</div>\n\n<!--\n<div class=\"row clearfix\">\n  <div class=\"col-lg-2 col-md-2 col-sm-4 form-control-label\">\n    <label for=\"login\">Usuario</label>\n  </div>\n  <div class=\"col-lg-10 col-md-10 col-sm-8\">\n    <div class=\"form-group\">\n      <input type=\"password\" [(ngModel)]=\"form.login\" name=\"login\" id=\"login\" #login=\"ngModel\" class=\"form-control\" placeholder=\"Entra nombre de usuario con el que se autentificara al iniciar sesion\" required>\n    </div>\n    <div *ngIf=\"login.invalid && (login.dirty || login.touched)\" class=\"alert alert-danger\">\n                  \n      <div *ngIf=\"login.errors.required\">\n     username  es requerido.\n      </div>\n                          </div>\n  </div>\n</div>\n\n<div class=\"row clearfix\">\n  <div class=\"col-lg-2 col-md-2 col-sm-4 form-control-label\">\n    <label for=\"ap\">contraseña Antigua</label>\n  </div>\n  <div class=\"col-lg-10 col-md-10 col-sm-8\">\n    <div class=\"form-group\">\n      <input [(ngModel)]=\"form3.password\" name=\"password\"  type=\"password\" #password=\"ngModel\" class=\"form-control\" placeholder=\"Entra tu apellido paterno\" required>\n    </div>\n    <div *ngIf=\"password.invalid && (password.dirty || password.touched)\" class=\"alert alert-danger\">\n                  \n      <div *ngIf=\"password.errors.required\">\ncontraseña es requerido.\n     \n                   </div>       </div>\n                          \n                          \n  </div>\n</div>\n<div class=\"row clearfix\">\n  <div class=\"col-lg-2 col-md-2 col-sm-4 form-control-label\">\n    <label for=\"ap\">Contraseña Nueva</label>\n  </div>\n  <div class=\"col-lg-10 col-md-10 col-sm-8\">\n    <div class=\"form-group\">\n      <input [(ngModel)]=\"form.password\" type=\"password\" name=\"password\" #password=\"ngModel\" class=\"form-control\" placeholder=\"Entra tu apellido paterno\" required>\n    </div>\n    <div *ngIf=\"password.invalid && (password.dirty || password.touched)\" class=\"alert alert-danger\">\n                  \n      <div *ngIf=\"password.errors.required\">\n      contraseña es requerido.\n      </div>\n                          </div>\n  </div>\n</div>\n\n<div class=\"row clearfix\">\n  <div class=\"col-lg-2 col-md-2 col-sm-4 form-control-label\">\n    <label for=\"ap\">repetir contraseña</label>\n  </div>\n  <div class=\"col-lg-10 col-md-10 col-sm-8\">\n    <div class=\"form-group\">\n      <input [(ngModel)]=\"form2.pass\" name=\"pass\" type=\"password\" #pass=\"ngModel\" class=\"form-control\" placeholder=\"Entra tu apellido paterno\" required>\n    </div>\n    <div *ngIf=\"pass.invalid && (pass.dirty || pass.touched)\" class=\"alert alert-danger\">\n                  \n      <div *ngIf=\"pass.errors.required\">\n      contraseña es requerido.\n      </div>\n                          </div>\n                          <div *ngIf=\"form2.pass!=form.password && pass.valid\" class=\"alert alert-danger\">\n                            no coinciden passwords. \n                            </div>\n  </div>\n</div>\n\n-->\n              \n<div class=\"row clearfix\">\n  <div class=\"col-sm-8 offset-sm-2\">\n    \n  </div>\n  <div class=\"col-sm-8 offset-sm-2\">\n    <button   data-type=\"autoclose-timer\" type=\"submit\" (click)=\"guardar_modificacion(formulario)\"  class=\"btn btn-raised btn-primary btn-round waves-effect\"   >Guardar</button>\n  </div>\n</div>\n\n            </form>\n            <!-- \n            <form  form ngNativeValidate id=\"sign_up\" method=\"post\" action=\"/auth/identity/register\">\n              <h1>Password check</h1>\n              <div class=\"field\">\n                  <input id=\"name\" class=\"username\" type=\"text\" placeholder=\"Full name\" name=\"name\" required>\n              </div>\n              <div class=\"field\">\n                  <input id=\"email\" class=\"username\" type=\"email\" placeholder=\"Email address\" name=\"email\" required>\n              </div>\n              <div class=\"field\">\n                  <input id=\"password\" class=\"username\" type=\"password\" placeholder=\"Password\" name=\"password\" required>\n              </div>\n              <div class=\"field\">\n                  <input id=\"password_confirmation\" class=\"username\" type=\"password\" placeholder=\"Password confirmation\" name=\"password_confirmation\" required>\n              </div>\n              <div class=\"field\">\n                  <input class=\"btn btn-primary\" type=\"submit\" value=\"Sign up\" (click)=\"validatePassword()\" name=\"commit\">\n              </div>\n          </form>\n        -->\n\n          </div>\n        </div>\n      </div>\n    </div>\n \n  </div>\n</section>\n"

/***/ }),

/***/ "./src/app/usuarios/modificar/modificar.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/usuarios/modificar/modificar.component.ts ***!
  \***********************************************************/
/*! exports provided: ModificarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModificarComponent", function() { return ModificarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _usuarios_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../usuarios.service */ "./src/app/usuarios/usuarios.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
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
    function ModificarComponent(titleCasePipe, router, usuarioService) {
        var _this = this;
        this.titleCasePipe = titleCasePipe;
        this.router = router;
        this.usuarioService = usuarioService;
        this.imageUrl = "http://localhost:9898/api/file/";
        this.fileToUpload = null;
        this.bandera = false;
        this.file = null;
        this.usuarioService.getAllRoles().subscribe(function (data) {
            _this.roles = data;
            console.log(_this.roles);
        });
        this.estados = ['habilitado', 'deshabilitado'];
        this.form = JSON.parse(localStorage.getItem('usuarioamodificar'));
        this.imageUrl = this.imageUrl + this.form.personal_laboratorio.foto;
        //if(this.form.personal_laboratorio.foto ==''){
        // this.imageUrl="assets/images/photo_profile_user.png"
        /// }
        this.rolSeleccionado = this.form.rol.nombre;
        this.form.login = '';
        this.contraseña = this.form.password;
        this.form3 = { password: '' };
        //this.form.password3=this.form.password;
        console.log(this.form);
        this.form2 = {
            pass: ''
        };
        this.form.password = '';
    }
    ModificarComponent.prototype.onPhotoSelected = function (event) {
        var _this = this;
        if (event.target.files && event.target.files[0]) { //verificando si por lomenos esta subiendouna foto
            this.file = event.target.files[0]; //ñaimagen guarda en file
            // image preview
            var reader_1 = new FileReader(); //lee un archivo
            reader_1.onload = function (e) {
                return _this.photoSelected = reader_1.result;
            }; //llena photoselect con el resultado que esta leendo
            reader_1.readAsDataURL(this.file);
            console.log(this.file.name);
            this.form.personal_laboratorio.foto = this.file.name;
        }
    };
    ModificarComponent.prototype.handleFileInput = function (file) {
        var _this = this;
        this.fileToUpload = file.item(0);
        //Show image preview
        var reader = new FileReader();
        reader.onload = function (e) {
            //this.imageUrl = event.target.result;
            _this.photoSelected = reader.result; // reader.result lee el archivo y lo asigna a photo selected
            reader.readAsDataURL;
        };
        reader.readAsDataURL(this.fileToUpload);
        //alert(this.fileToUpload.name)
        this.form.personal_laboratorio.foto = "http://localhost:9898/api/file/" + this.fileToUpload.name;
        alert(this.form.personal_laboratorio.foto);
        //this.form.personal_laboratorio.foto=this.fileToUpload.name;
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
    ModificarComponent.prototype.guardar_modificacion = function (formu) {
        var _this = this;
        //this.form.personal_laboratorio.archivo=this.fileToUpload;
        //this.form.personal_laboratorio.foto=this.fileToUpload.name;
        //console.log(this.form.personal_laboratorio.foto)
        this.form.personal_laboratorio.persona.nombre = (this.titleCasePipe.transform(this.form.personal_laboratorio.persona.nombre));
        this.form.personal_laboratorio.persona.ap = (this.titleCasePipe.transform(this.form.personal_laboratorio.persona.ap));
        this.form.personal_laboratorio.persona.am = (this.titleCasePipe.transform(this.form.personal_laboratorio.persona.am));
        this.form.personal_laboratorio.profesion = (this.titleCasePipe.transform(this.form.personal_laboratorio.profesion));
        console.log(this.form);
        if (formu.valid) {
            console.log(this.file != null);
            if (this.form.personal_laboratorio.foto != '' && this.file != null) {
                this.usuarioService.uploadImagen(this.file).subscribe(function (data) {
                    console.log("imagen guardada");
                });
            }
            this.usuarioService.actualizarUsuario(this.form).subscribe(function (data) {
                alert("Usuario actualizado");
                _this.router.navigate(['/usuarios/listar']);
            });
        }
    };
    ModificarComponent.prototype.rolseleccionar = function (d) {
        console.log(d);
    };
    ModificarComponent.prototype.setestado = function (newestad) {
        this.form.estado = newestad;
    };
    ModificarComponent.prototype.validatePassword = function () {
        console.log("jfajf");
        validatePassword();
    };
    ModificarComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-modificar',
            template: __webpack_require__(/*! ./modificar.component.html */ "./src/app/usuarios/modificar/modificar.component.html"),
            styles: [__webpack_require__(/*! ./modificar.component.css */ "./src/app/usuarios/modificar/modificar.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_common__WEBPACK_IMPORTED_MODULE_3__["TitleCasePipe"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _usuarios_service__WEBPACK_IMPORTED_MODULE_2__["UsuariosService"]])
    ], ModificarComponent);
    return ModificarComponent;
}());



/***/ }),

/***/ "./src/app/usuarios/registrar/registrar.component.css":
/*!************************************************************!*\
  !*** ./src/app/usuarios/registrar/registrar.component.css ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/*!\n * Bootstrap Colorpicker v2.3.3\n * http://mjolnic.github.io/bootstrap-colorpicker/\n *\n * Originally written by (c) 2012 Stefan Petre\n * Licensed under the Apache License v2.0\n * http://www.apache.org/licenses/LICENSE-2.0.txt\n *\n */\n.colorpicker-saturation {\n  width: 100px;\n  height: 100px;\n  background-image: url(\"data:image/png;base64,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\");\n  cursor: crosshair;\n  float: left;\n}\n.colorpicker-saturation i {\n  display: block;\n  height: 5px;\n  width: 5px;\n  border: 1px solid #000;\n  border-radius: 5px;\n  position: absolute;\n  top: 0;\n  left: 0;\n  margin: -4px 0 0 -4px;\n}\n.colorpicker-saturation i b {\n  display: block;\n  height: 5px;\n  width: 5px;\n  border: 1px solid #fff;\n  border-radius: 5px;\n}\n.colorpicker-hue,\n.colorpicker-alpha {\n  width: 15px;\n  height: 100px;\n  float: left;\n  cursor: row-resize;\n  margin-left: 4px;\n  margin-bottom: 4px;\n}\n.colorpicker-hue i,\n.colorpicker-alpha i {\n  display: block;\n  height: 1px;\n  background: #000;\n  border-top: 1px solid #fff;\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  margin-top: -1px;\n}\n.colorpicker-hue {\n  background-image: url(\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAABkCAMAAABw8qpSAAABLFBMVEXqFBb/ABH/ACL/ADH/AEH/AFD/AGD/AG7/AH7/AI3/AJ3/AKz/ALz/AMr/ANv/AOr/APr2AP/mAP/XAP/HAP+4AP+oAP+aAP+JAP97AP9rAP9cAP9MAP8+AP8tAP8fAP8PAP8BAv8AEP8AH/8AL/8APv8ATv8AXP8Abf8Ae/8Ai/8Amv8Aqv8AuP8Ayf8A1/8A5/8A9/8A//gA/+kA/9kA/8oA/7oA/6wA/5sA/40A/30A/24A/14A/1AA/z8A/zEA/yEA/xEB/wMN/wAd/wAs/wA8/wBK/wBb/wBp/wB5/wCI/wCY/wCm/wC3/wDF/wDV/wDk/wD1/wD/+gD/7AD/3AD/zAD/vgD/rQD/nwD/jgD/gAD/cAD/YgD/UQD/QwD/MgD/JAD/FAD4Eg42qAedAAAAh0lEQVR4XgXAg3EDAAAAwI9to7Zt27a1/w49BASFhEVExcQlJKWkZWTl5BUUlZRVVNXUNTS1tHXo1KVbj159+g0YNGTYiFFjxk2YNGXajFlz5i1YtGTZilVr1m3YtGXbjl179h04dOTYiVNnzl24dOXajVt37j149OTZi1dv3n349OXbj19//wOxE1dQ8reGAAAAAElFTkSuQmCC\");\n}\n.colorpicker-alpha {\n  background-image: url(\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAABkCAQAAAAVxWkcAAABr0lEQVR4Xo2VwU0DQQxF7dmRuNIFlzlSAR3QAaXQQdIBJVABFXDcOVAAd67cjJLR07dkhcSrkZKfb/t7bG88rFo3B5gZPMNycItu2xloGV7MWHzM9zuzFWCkmA0nK6AszCUJDW6+mG6R03ncw5v8EMTEvZ2O3AliYjpslblc0RF9LmZYWxURU6aKytWZYsoWCAe+xwOZp1GsEukGiIkYxcQCHck99+gRgB7JncyIB5SGEhP3Yh5P6JwX+u6AnYot104d8DJT7uH7M9JH6OZbimj0vfMVaYnJIZFJDBW9kHlerL2C6JV4mSt7uuo2N57RxnZ+usQjn0R1jwBJBrNO3evJpVYUWsJ/E3UiXRlv24/7YZ04xmEdWlzcKS+B/eapeyMvFd2k0+hRk/T0AmTW8h69s2sjYMsdPntECiILhAeIMZAeH4QvUwfn6ijC0tTV+fT9ky8jM9nK2g7Ly1VjSpKYq6IvsAm7MtNu1orEqa/K3KNvgMFdhfquPfJmp2dbh0/8Gzb6Y22ViaNr6n5410zXdngVhbu6XqdOtWOuin5hjABGp4a2uotZ71MVCfwDBt2/v37yo6AAAAAASUVORK5CYII=\");\n  display: none;\n}\n.colorpicker-saturation,\n.colorpicker-hue,\n.colorpicker-alpha {\n  background-size: contain;\n}\n.colorpicker {\n  padding: 4px;\n  min-width: 130px;\n  margin-top: 1px;\n  border-radius: 4px;\n  z-index: 2500;\n}\n.colorpicker:before,\n.colorpicker:after {\n  display: table;\n  content: \"\";\n  line-height: 0;\n}\n.colorpicker:after {\n  clear: both;\n}\n.colorpicker:before {\n  content: '';\n  display: inline-block;\n  border-left: 7px solid transparent;\n  border-right: 7px solid transparent;\n  border-bottom: 7px solid #ccc;\n  border-bottom-color: rgba(0, 0, 0, 0.2);\n  position: absolute;\n  top: -7px;\n  left: 6px;\n}\n.colorpicker:after {\n  content: '';\n  display: inline-block;\n  border-left: 6px solid transparent;\n  border-right: 6px solid transparent;\n  border-bottom: 6px solid #ffffff;\n  position: absolute;\n  top: -6px;\n  left: 7px;\n}\n.colorpicker div {\n  position: relative;\n}\n.colorpicker.colorpicker-with-alpha {\n  min-width: 140px;\n}\n.colorpicker.colorpicker-with-alpha .colorpicker-alpha {\n  display: block;\n}\n.colorpicker-color {\n  height: 10px;\n  margin-top: 5px;\n  clear: both;\n  background-image: url(\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAABkCAQAAAAVxWkcAAABr0lEQVR4Xo2VwU0DQQxF7dmRuNIFlzlSAR3QAaXQQdIBJVABFXDcOVAAd67cjJLR07dkhcSrkZKfb/t7bG88rFo3B5gZPMNycItu2xloGV7MWHzM9zuzFWCkmA0nK6AszCUJDW6+mG6R03ncw5v8EMTEvZ2O3AliYjpslblc0RF9LmZYWxURU6aKytWZYsoWCAe+xwOZp1GsEukGiIkYxcQCHck99+gRgB7JncyIB5SGEhP3Yh5P6JwX+u6AnYot104d8DJT7uH7M9JH6OZbimj0vfMVaYnJIZFJDBW9kHlerL2C6JV4mSt7uuo2N57RxnZ+usQjn0R1jwBJBrNO3evJpVYUWsJ/E3UiXRlv24/7YZ04xmEdWlzcKS+B/eapeyMvFd2k0+hRk/T0AmTW8h69s2sjYMsdPntECiILhAeIMZAeH4QvUwfn6ijC0tTV+fT9ky8jM9nK2g7Ly1VjSpKYq6IvsAm7MtNu1orEqa/K3KNvgMFdhfquPfJmp2dbh0/8Gzb6Y22ViaNr6n5410zXdngVhbu6XqdOtWOuin5hjABGp4a2uotZ71MVCfwDBt2/v37yo6AAAAAASUVORK5CYII=\");\n  background-position: 0 100%;\n}\n.colorpicker-color div {\n  height: 10px;\n}\n.colorpicker-selectors {\n  display: none;\n  height: 10px;\n  margin-top: 5px;\n  clear: both;\n}\n.colorpicker-selectors i {\n  cursor: pointer;\n  float: left;\n  height: 10px;\n  width: 10px;\n}\n.colorpicker-selectors i + i {\n  margin-left: 3px;\n}\n.colorpicker-element .input-group-addon i,\n.colorpicker-element .add-on i {\n  display: inline-block;\n  cursor: pointer;\n  height: 16px;\n  vertical-align: text-top;\n  width: 16px;\n}\n.colorpicker.colorpicker-inline {\n  position: relative;\n  display: inline-block;\n  float: none;\n  z-index: auto;\n}\n.colorpicker.colorpicker-horizontal {\n  width: 110px;\n  min-width: 110px;\n  height: auto;\n}\n.colorpicker.colorpicker-horizontal .colorpicker-saturation {\n  margin-bottom: 4px;\n}\n.colorpicker.colorpicker-horizontal .colorpicker-color {\n  width: 100px;\n}\n.colorpicker.colorpicker-horizontal .colorpicker-hue,\n.colorpicker.colorpicker-horizontal .colorpicker-alpha {\n  width: 100px;\n  height: 15px;\n  float: left;\n  cursor: col-resize;\n  margin-left: 0px;\n  margin-bottom: 4px;\n}\n.colorpicker.colorpicker-horizontal .colorpicker-hue i,\n.colorpicker.colorpicker-horizontal .colorpicker-alpha i {\n  display: block;\n  height: 15px;\n  background: #ffffff;\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 1px;\n  border: none;\n  margin-top: 0px;\n}\n.colorpicker.colorpicker-horizontal .colorpicker-hue {\n  background-image: url(\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAAABCAMAAAAfBfuPAAABLFBMVEXqFBb/ABH/ACL/ADH/AEH/AFD/AGD/AG7/AH7/AI3/AJ3/AKz/ALz/AMr/ANv/AOr/APr2AP/mAP/XAP/HAP+4AP+oAP+aAP+JAP97AP9rAP9cAP9MAP8+AP8tAP8fAP8PAP8BAv8AEP8AH/8AL/8APv8ATv8AXP8Abf8Ae/8Ai/8Amv8Aqv8AuP8Ayf8A1/8A5/8A9/8A//gA/+kA/9kA/8oA/7oA/6wA/5sA/40A/30A/24A/14A/1AA/z8A/zEA/yEA/xEB/wMN/wAd/wAs/wA8/wBK/wBb/wBp/wB5/wCI/wCY/wCm/wC3/wDF/wDV/wDk/wD1/wD/+gD/7AD/3AD/zAD/vgD/rQD/nwD/jgD/gAD/cAD/YgD/UQD/QwD/MgD/JAD/FAD4Eg42qAedAAAAbUlEQVR4XgXAghEDsbxtlrZt27ax/w49ACAYQTGcICmaYTleECVZUTXdMC1Wm93hdLk9Xp8/EAyFI9FYPJFMpTPZXL5QLJUr1Vq90Wy1O91efzAcjSfT2XyxXK03293+cDydL9fb/fF8vT/f3x+LfRNXARMbCAAAAABJRU5ErkJggg==\");\n}\n.colorpicker.colorpicker-horizontal .colorpicker-alpha {\n  background-image: url(\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAAAKCAQAAADoFTP1AAAB9ElEQVR4XoWTQW4VMRBEu9qWEimL7DhEMp8NF+ASnJJLcAQgE1bcgBUSkYKUuHCrZ9pjeqSU5Yn9LPu7umJQBIIv+k7vIOrtK66L4lmr3pVOrOv3otp619KZ0/KjdNI79L52Uo09FBQWrU0vfe5trezU+hLsoUKd3Repovte+0vbq/7Lj5XbaHECKasR9G4MPlbp+gzZxd6koPEJCkAYC5SjcOTAIIOK90Dja1IfIZ8Z+zAY9jm3b5Ia+MT5sFcqRJrR2AYYA8Kua5BzYRrFPNmD4PQMegGJMOffJJUsWiI3nCHZZjInNdffLWOufzbc3JaboCAVxwmnRHbhLSPwRJ4wU0BRSc6HkECYYVw95nMKgJOcylxrJttE5Ibzf9Xq9GPvP+WX3MiV/MGHfRu/SentRQrfG1GzsIrytdNXucSRKxQNIGHM9YhGFQJcdjNcBZvfJayuYe4Sia1CzwW+19mWOhe37HsxJWKwbu/jluEU15QzAQjAqCEbhMJc78GYV2E0kooHDubUImWkTOhGpgv8PoT8DJG/bzxna4BZ0eOFSOaLADGeSpFsg5AzeaDZIDQQXjZ4y/8ryfzUXBwdELRjTjCNvOeT0rNlrJz90vwy6N9pXXQEluX0inElpPWokSdiLCfiNJJjMKQ8Qsh8GEKQKMo/eiHrNbI9UksAAAAASUVORK5CYII=\");\n}\n.colorpicker.colorpicker-hidden {\n  display: none;\n}\n.colorpicker.colorpicker-visible {\n  display: block;\n}\n.colorpicker-inline.colorpicker-visible {\n  display: inline-block;\n}\n.colorpicker-right:before {\n  left: auto;\n  right: 6px;\n}\n.colorpicker-right:after {\n  left: auto;\n  right: 7px;\n}\n.colorpicker-no-arrow:before {\n  border-right: 0;\n  border-left: 0;\n}\n.colorpicker-no-arrow:after {\n  border-right: 0;\n  border-left: 0;\n}\n.ms-container{\n  background: transparent url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABUAAAAVCAYAAACpF6WWAAAB40lEQVR4AWIgG4wCAKvkAPJXFAXwGRnLrqVlj5kva7bDZ+Nv27ZtG7kpY3zZC7Pe2T13Nq/5OxQKhasqlcrzX6FyudyRy+VArVZn/xtUKpU6isUi5PN50Ol03d/5sz0Wi73JZDLch55Op7lUKsUlk0kukUjgDAgtFAqAGhuNxuu/gu7ED41GA+r1Ou21Wg2q1SpUKhUolUpAhEA8HodwOAzBYBACgQBIJJLBN6S1tTWGBODiV1AKQ83wo9PpBIvFAlarFex2O9273W5wOBxvrl69uvgFkM/nnyIgzmAwpMh2q0KhKBJfdbCLRKK8QCBIkzdpnLETn95CmMfjQfir8+fPH/8aOIkOR40o9DfK9PS0yOfzocbPjhw5cuiLS6KFEB2NfkKTiTmPlUolS3KQ1Wg0rFarZYm2LBHGkmDgfActmZ+fl5hMpof79u3b/QVQLBZbSGRpWmSzWXgvGWw2G/oIXC4XNQ873qFPcUafMwyzh5Rd38u1McIQjJDvBIACvV4v+P1+GmWcEfoz12xaX19PIshsNlOgXq9/u7fA3HILGAS3gEEAxsBccwsYDLeAwQCir4LSMaEwZ0xMTKwAhtdfkKHAIJlOtWwXERERBYyE32BDqQn8/f3tcnNzg8k2YBQAAOLgc5CbVSwBAAAAAElFTkSuQmCC') no-repeat 50% 50%;\n  width: 370px;\n}\n.ms-container:after{\n  content: \".\";\n  display: block;\n  height: 0;\n  line-height: 0;\n  font-size: 0;\n  clear: both;\n  min-height: 0;\n  visibility: hidden;\n}\n.ms-container .ms-selectable, .ms-container .ms-selection{\n  background: #fff;\n  color: #555555;\n  float: left;\n  width: 45%;\n}\n.ms-container .ms-selection{\n  float: right;\n}\n.ms-container .ms-list{\n  box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075);\n  transition: border linear 0.2s, box-shadow linear 0.2s;\n  border: 1px solid #ccc;\n  border-radius: 3px;\n  position: relative;\n  height: 200px;\n  padding: 0;\n  overflow-y: auto;\n}\n.ms-container .ms-list.ms-focus{\n  border-color: rgba(82, 168, 236, 0.8);\n  box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075), 0 0 8px rgba(82, 168, 236, 0.6);\n  outline: 0;\n  outline: thin dotted \\9;\n}\n.ms-container ul{\n  margin: 0;\n  list-style-type: none;\n  padding: 0;\n}\n.ms-container .ms-optgroup-container{\n  width: 100%;\n}\n.ms-container .ms-optgroup-label{\n  margin: 0;\n  padding: 5px 0px 0px 5px;\n  cursor: pointer;\n  color: #999;\n}\n.ms-container .ms-selectable li.ms-elem-selectable,\n.ms-container .ms-selection li.ms-elem-selection{\n  border-bottom: 1px #eee solid;\n  padding: 2px 10px;\n  color: #555;\n  font-size: 14px;\n}\n.ms-container .ms-selectable li.ms-hover,\n.ms-container .ms-selection li.ms-hover{\n  cursor: pointer;\n  color: #fff;\n  text-decoration: none;\n  background-color: #08c;\n}\n.ms-container .ms-selectable li.disabled,\n.ms-container .ms-selection li.disabled{\n  background-color: #eee;\n  color: #aaa;\n  cursor: text;\n}\n.spinner.input-group .input-group-addon .spin-up,\n.spinner.input-group .input-group-addon .spin-down {\n  height: 10px;\n  width: 10px;\n  overflow: hidden;\n  display: block;\n  text-align: center;\n  color: #999;\n}\n.spinner.input-group .input-group-addon .spin-up:hover,\n.spinner.input-group .input-group-addon .spin-down:hover {\n  color: #555;\n}\n.spinner.input-group .input-group-addon .spin-up .fa,\n.spinner.input-group .input-group-addon .spin-down .fa {\n  margin-top: -8px;\n  vertical-align: middle;\n}\n.spinner.input-group .input-group-addon .spin-up .glyphicon,\n.spinner.input-group .input-group-addon .spin-down .glyphicon {\n  font-size: 10px;\n  top: -2px;\n}\n.spinner.input-group .input-group-addon a.spin-up,\n.spinner.input-group .input-group-addon a.spin-down {\n  text-decoration: none;\n}\n.spinner.input-group .input-group-addon button.spin-up,\n.spinner.input-group .input-group-addon button.spin-down {\n  background: none;\n  border: none;\n  padding: 0;\n}\n.spinner.input-group.input-group-sm .input-group-addon .spin-up,\n.spinner.input-group.input-group-sm .input-group-addon .spin-down {\n  height: 8px;\n}\n.spinner.input-group.input-group-sm .input-group-addon .spin-up .fa,\n.spinner.input-group.input-group-sm .input-group-addon .spin-down .fa {\n  margin-top: -12px;\n}\n.spinner.input-group.input-group-sm .input-group-addon .spin-up .glyphicon,\n.spinner.input-group.input-group-sm .input-group-addon .spin-down .glyphicon {\n  font-size: 8px;\n  top: -5px;\n}\n.spinner.input-group.input-group-lg .input-group-addon .spin-up,\n.spinner.input-group.input-group-lg .input-group-addon .spin-down {\n  height: 12px;\n  width: 12px;\n}\n.spinner.input-group.input-group-lg .input-group-addon .spin-up .fa,\n.spinner.input-group.input-group-lg .input-group-addon .spin-down .fa {\n  margin-top: -16px;\n}\n.spinner.input-group.input-group-lg .input-group-addon .spin-up .glyphicon,\n.spinner.input-group.input-group-lg .input-group-addon .spin-down .glyphicon {\n  font-size: 12px;\n  top: -6px;\n}\n.bootstrap-tagsinput {\n  background-color: #fff;\n  border: 1px solid #ccc;\n  box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075);\n  display: inline-block;\n  padding: 4px 6px;\n  color: #555;\n  vertical-align: middle;\n  border-radius: 4px;\n  max-width: 100%;\n  line-height: 22px;\n  cursor: text;\n}\n.bootstrap-tagsinput input {\n  border: none;\n  box-shadow: none;\n  outline: none;\n  background-color: transparent;\n  padding: 0 6px;\n  margin: 0;\n  width: auto;\n  max-width: inherit;\n}\n.bootstrap-tagsinput.form-control input::-moz-placeholder {\n  color: #777;\n  opacity: 1;\n}\n.bootstrap-tagsinput.form-control input:-ms-input-placeholder {\n  color: #777;\n}\n.bootstrap-tagsinput.form-control input::-webkit-input-placeholder {\n  color: #777;\n}\n.bootstrap-tagsinput input:focus {\n  border: none;\n  box-shadow: none;\n}\n.bootstrap-tagsinput .tag {\n  margin-right: 2px;  \n}\n.bootstrap-tagsinput .tag [data-role=\"remove\"] {\n  margin-left: 8px;\n  cursor: pointer;\n}\n.bootstrap-tagsinput .tag [data-role=\"remove\"]:after {\n  content: \"x\";\n  padding: 0px 2px;\n}\n.bootstrap-tagsinput .tag [data-role=\"remove\"]:hover {\n  box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.2), 0 1px 2px rgba(0, 0, 0, 0.05);\n}\n.bootstrap-tagsinput .tag [data-role=\"remove\"]:hover:active {\n  box-shadow: inset 0 3px 5px rgba(0, 0, 0, 0.125);\n}\n/*!\n * Bootstrap-select v1.12.4 (http://silviomoreto.github.io/bootstrap-select)\n *\n * Copyright 2013-2017 bootstrap-select\n * Licensed under MIT (https://github.com/silviomoreto/bootstrap-select/blob/master/LICENSE)\n */\n.color-rojo{\n  background-color: red;\n}\nselect.bs-select-hidden,\nselect.selectpicker {\n  display: none !important;\n}\n.bootstrap-select {\n  width: 220px \\0;\n  /*IE9 and below*/\n}\n.bootstrap-select > .dropdown-toggle {\n  width: 100%;\n  padding-right: 25px;\n  z-index: 1;\n}\n.bootstrap-select > .dropdown-toggle.bs-placeholder,\n.bootstrap-select > .dropdown-toggle.bs-placeholder:hover,\n.bootstrap-select > .dropdown-toggle.bs-placeholder:focus,\n.bootstrap-select > .dropdown-toggle.bs-placeholder:active {\n  color: #999;\n}\n.bootstrap-select > select {\n  position: absolute !important;\n  bottom: 0;\n  left: 50%;\n  display: block !important;\n  width: 0.5px !important;\n  height: 100% !important;\n  padding: 0 !important;\n  opacity: 0 !important;\n  border: none;\n}\n.bootstrap-select > select.mobile-device {\n  top: 0;\n  left: 0;\n  display: block !important;\n  width: 100% !important;\n  z-index: 2;\n}\n.has-error .bootstrap-select .dropdown-toggle,\n.error .bootstrap-select .dropdown-toggle {\n  border-color: #b94a48;\n}\n.bootstrap-select.fit-width {\n  width: auto !important;\n}\n.bootstrap-select:not([class*=\"col-\"]):not([class*=\"form-control\"]):not(.input-group-btn) {\n  width: 220px;\n}\n.bootstrap-select .dropdown-toggle:focus {\n  outline: thin dotted #333333 !important;\n  outline: 5px auto -webkit-focus-ring-color !important;\n  outline-offset: -2px;\n}\n.bootstrap-select.form-control {\n  margin-bottom: 0;\n  padding: 0;\n  border: none;\n}\n.bootstrap-select.form-control:not([class*=\"col-\"]) {\n  width: 100%;\n}\n.bootstrap-select.form-control.input-group-btn {\n  z-index: auto;\n}\n.bootstrap-select.form-control.input-group-btn:not(:first-child):not(:last-child) > .btn {\n  border-radius: 0;\n}\n.bootstrap-select.btn-group:not(.input-group-btn),\n.bootstrap-select.btn-group[class*=\"col-\"] {\n  float: none;\n  display: inline-block;\n  margin-left: 0;\n}\n.bootstrap-select.btn-group.dropdown-menu-right,\n.bootstrap-select.btn-group[class*=\"col-\"].dropdown-menu-right,\n.row .bootstrap-select.btn-group[class*=\"col-\"].dropdown-menu-right {\n  float: right;\n}\n.form-inline .bootstrap-select.btn-group,\n.form-horizontal .bootstrap-select.btn-group,\n.form-group .bootstrap-select.btn-group {\n  margin-bottom: 0;\n}\n.form-group-lg .bootstrap-select.btn-group.form-control,\n.form-group-sm .bootstrap-select.btn-group.form-control {\n  padding: 0;\n}\n.form-group-lg .bootstrap-select.btn-group.form-control .dropdown-toggle,\n.form-group-sm .bootstrap-select.btn-group.form-control .dropdown-toggle {\n  height: 100%;\n  font-size: inherit;\n  line-height: inherit;\n  border-radius: inherit;\n}\n.form-inline .bootstrap-select.btn-group .form-control {\n  width: 100%;\n}\n.bootstrap-select.btn-group.disabled,\n.bootstrap-select.btn-group > .disabled {\n  cursor: not-allowed;\n}\n.bootstrap-select.btn-group.disabled:focus,\n.bootstrap-select.btn-group > .disabled:focus {\n  outline: none !important;\n}\n.bootstrap-select.btn-group.bs-container {\n  position: absolute;\n  height: 0 !important;\n  padding: 0 !important;\n}\n.bootstrap-select.btn-group.bs-container .dropdown-menu {\n  z-index: 1060;\n}\n.bootstrap-select.btn-group .dropdown-toggle .filter-option {\n  display: inline-block;\n  overflow: hidden;\n  width: 100%;\n  text-align: left;\n}\n.bootstrap-select.btn-group .dropdown-toggle .caret {\n  position: absolute;\n  top: 50%;\n  right: 12px;\n  margin-top: -2px;\n  vertical-align: middle;\n}\n.bootstrap-select.btn-group[class*=\"col-\"] .dropdown-toggle {\n  width: 100%;\n}\n.bootstrap-select.btn-group .dropdown-menu {\n  min-width: 100%;\n  box-sizing: border-box;\n}\n.bootstrap-select.btn-group .dropdown-menu.inner {\n  position: static;\n  float: none;\n  border: 0;\n  padding: 0;\n  margin: 0;\n  border-radius: 0;\n  box-shadow: none;\n}\n.bootstrap-select.btn-group .dropdown-menu li {\n  position: relative;\n}\n.bootstrap-select.btn-group .dropdown-menu li.active small {\n  color: #fff;\n}\n.bootstrap-select.btn-group .dropdown-menu li.disabled a {\n  cursor: not-allowed;\n}\n.bootstrap-select.btn-group .dropdown-menu li a {\n  cursor: pointer;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n}\n.bootstrap-select.btn-group .dropdown-menu li a.opt {\n  position: relative;\n  padding-left: 2.25em;\n}\n.bootstrap-select.btn-group .dropdown-menu li a span.check-mark {\n  display: none;\n}\n.bootstrap-select.btn-group .dropdown-menu li a span.text {\n  display: inline-block;\n}\n.bootstrap-select.btn-group .dropdown-menu li small {\n  padding-left: 0.5em;\n}\n.bootstrap-select.btn-group .dropdown-menu .notify {\n  position: absolute;\n  bottom: 5px;\n  width: 96%;\n  margin: 0 2%;\n  min-height: 26px;\n  padding: 3px 5px;\n  background: #f5f5f5;\n  border: 1px solid #e3e3e3;\n  box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.05);\n  pointer-events: none;\n  opacity: 0.9;\n  box-sizing: border-box;\n}\n.bootstrap-select.btn-group .no-results {\n  padding: 3px;\n  background: #f5f5f5;\n  margin: 0 5px;\n  white-space: nowrap;\n}\n.bootstrap-select.btn-group.fit-width .dropdown-toggle .filter-option {\n  position: static;\n}\n.bootstrap-select.btn-group.fit-width .dropdown-toggle .caret {\n  position: static;\n  top: auto;\n  margin-top: -1px;\n}\n.bootstrap-select.btn-group.show-tick .dropdown-menu li.selected a span.check-mark {\n  position: absolute;\n  display: inline-block;\n  right: 15px;\n  margin-top: 5px;\n}\n.bootstrap-select.btn-group.show-tick .dropdown-menu li a span.text {\n  margin-right: 34px;\n}\n.bootstrap-select.show-menu-arrow.open > .dropdown-toggle {\n  z-index: 1061;\n}\n.bootstrap-select.show-menu-arrow .dropdown-toggle:before {\n  content: '';\n  border-left: 7px solid transparent;\n  border-right: 7px solid transparent;\n  border-bottom: 7px solid rgba(204, 204, 204, 0.2);\n  position: absolute;\n  bottom: -4px;\n  left: 9px;\n  display: none;\n}\n.bootstrap-select.show-menu-arrow .dropdown-toggle:after {\n  content: '';\n  border-left: 6px solid transparent;\n  border-right: 6px solid transparent;\n  border-bottom: 6px solid white;\n  position: absolute;\n  bottom: -4px;\n  left: 10px;\n  display: none;\n}\n.bootstrap-select.show-menu-arrow.dropup .dropdown-toggle:before {\n  bottom: auto;\n  top: -3px;\n  border-top: 7px solid rgba(204, 204, 204, 0.2);\n  border-bottom: 0;\n}\n.bootstrap-select.show-menu-arrow.dropup .dropdown-toggle:after {\n  bottom: auto;\n  top: -3px;\n  border-top: 6px solid white;\n  border-bottom: 0;\n}\n.bootstrap-select.show-menu-arrow.pull-right .dropdown-toggle:before {\n  right: 12px;\n  left: auto;\n}\n.bootstrap-select.show-menu-arrow.pull-right .dropdown-toggle:after {\n  right: 13px;\n  left: auto;\n}\n.bootstrap-select.show-menu-arrow.open > .dropdown-toggle:before,\n.bootstrap-select.show-menu-arrow.open > .dropdown-toggle:after {\n  display: block;\n}\n.bs-searchbox,\n.bs-actionsbox,\n.bs-donebutton {\n  padding: 4px 8px;\n}\n.bs-actionsbox {\n  width: 100%;\n  box-sizing: border-box;\n}\n.bs-actionsbox .btn-group button {\n  width: 50%;\n}\n.bs-donebutton {\n  float: left;\n  width: 100%;\n  box-sizing: border-box;\n}\n.bs-donebutton .btn-group button {\n  width: 100%;\n}\n.bs-searchbox + .bs-actionsbox {\n  padding: 0 8px 4px;\n}\n.bs-searchbox .form-control {\n  margin-bottom: 0;\n  width: 100%;\n  float: none;\n}\n.titulo{\r\n   \r\n    text-transform: capitalize;\r\n  }\n.imgRedonda {\r\n    width:120px;\r\n    height:120px;\r\n    border-radius:50%;\r\n}"

/***/ }),

/***/ "./src/app/usuarios/registrar/registrar.component.html":
/*!*************************************************************!*\
  !*** ./src/app/usuarios/registrar/registrar.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section class=\"content \">\n  <div class=\"block-header m_img_btn\">\n    <div class=\"row\">\n      <div class=\"col-lg-7 col-md-6 col-sm-12\">\n        <h2>Usuarios\n          <small></small>\n        </h2>\n      </div>\n      <div class=\"col-lg-5 col-md-6 col-sm-12\">\n        <ul class=\"breadcrumb float-md-right\">\n          <li class=\"breadcrumb-item\"><a routerLink=\"/dashboard/main\"><i class=\"zmdi zmdi-home\"></i> </a></li>\n          <li class=\"breadcrumb-item\"><a href=\"javascript:void(0);\">usuarios</a></li>\n          <li class=\"breadcrumb-item active\">registrar</li>\n        </ul>\n      </div>\n    </div>\n  </div>\n  <div class=\"container-fluid\">\n \n    <!-- Horizontal Layout -->\n    <div class=\"row clearfix\">\n      <div class=\"col-lg-12 col-md-12 col-sm-12\">\n        <div class=\"card\">\n          <div class=\"header\">\n            <h2><strong>Registrar</strong> Usuario</h2>\n            <ul class=\"header-dropdown\">\n              <li class=\"dropdown\"> <a href=\"javascript:void(0);\" class=\"dropdown-toggle\" data-toggle=\"dropdown\" role=\"button\" aria-haspopup=\"true\" aria-expanded=\"false\"> <i class=\"zmdi zmdi-more\"></i> </a>\n                <ul class=\"dropdown-menu dropdown-menu-right\">\n                  <li><a href=\"javascript:void(0);\">Action</a></li>\n                  <li><a href=\"javascript:void(0);\">Another action</a></li>\n                  <li><a href=\"javascript:void(0);\">Something else</a></li>\n                </ul>\n              </li>\n              <li class=\"remove\">\n                <a role=\"button\" class=\"boxs-close\"><i class=\"zmdi zmdi-close\"></i></a>\n              </li>\n            </ul>\n          </div>\n          <div class=\"body\">\n\n          \n          \n            <form class=\"needs-validation\" ngNativeValidate  #formulario=ngForm autocomplete=\"off\">\n\n              <div class=\"row clearfix\">\n                <div class=\"col-lg-2 col-md-2 col-sm-4 form-control-label\">\n                  <label for=\"cedula\">Cedula</label>\n                </div>\n                <div class=\"col-lg-10 col-md-10 col-sm-8\">\n                  <div class=\"form-group\">\n                    <input  type=\"text\" id=\"cedula\" [(ngModel)]=\"form.cedula\" name=\"cedula\"  class=\"form-control \" placeholder=\"Entra  cedula\"required>\n                  \n                  \n                  </div>\n                  \n\n                </div>\n              </div>\n              <div class=\"row clearfix\">\n                <div class=\"col-lg-2 col-md-2 col-sm-4 form-control-label\">\n                  <label for=\"nombre\">Nombre</label>\n                </div>\n                <div class=\"col-lg-10 col-md-10 col-sm-8\">\n                  <div class=\"form-group\">\n                    <input  type=\"text\" id=\"nombre\" [(ngModel)]=\"form.personal_laboratorio.persona.nombre\" name=\"nombre\" #nombre=\"ngModel\"  class=\"form-control titulo\" placeholder=\"Entra nombre\" required>\n                  </div>\n\n                \n                </div>\n              </div>\n\n<div class=\"row clearfix\">\n  <div class=\"col-lg-2 col-md-2 col-sm-4 form-control-label\">\n    <label for=\"ap\">Apellido Paterno</label>\n  </div>\n  <div class=\"col-lg-10 col-md-10 col-sm-8\">\n    <div class=\"form-group\">\n      <input [(ngModel)]=\"form.personal_laboratorio.persona.ap\" name=\"ap\" #ap=\"ngModel\" class=\"form-control titulo\" placeholder=\"Entra apellido paterno\" required>\n    </div>\n   \n  </div>\n</div>\n\n<div class=\"row clearfix\">\n  <div class=\"col-lg-2 col-md-2 col-sm-4 form-control-label\">\n    <label for=\"ap\">Apellido Materno </label>\n  </div>\n  <div class=\"col-lg-10 col-md-10 col-sm-8\">\n    <div class=\"form-group\">\n      <input [(ngModel)]=\"form.personal_laboratorio.persona.am\" name=\"am\" #am=\"ngModel\" class=\"form-control titulo\" placeholder=\"Entra  apellido materno\" >\n    </div>\n  \n  </div>\n</div>\n\n<div class=\"row clearfix\">\n  <div class=\"col-lg-2 col-md-2 col-sm-4 form-control-label\">\n    <label for=\"ap\">Profesión </label>\n  </div>\n  <div class=\"col-lg-10 col-md-10 col-sm-8\">\n    <div class=\"form-group\">\n      <input [(ngModel)]=\"form.personal_laboratorio.profesion\" name=\"profesion\" #profesion=\"ngModel\" class=\"titulo form-control\" placeholder=\"Entra  profesion\" required >\n    </div>\n   \n  </div>\n</div>\n\n\n<div class=\"row clearfix\">\n  <div class=\"col-lg-2 col-md-2 col-sm-4\">\n    <label for=\"estado\">Rol </label>\n  </div>\n  <div class=\"col-lg-10 col-md-10 col-sm-8\">\n  \n      <select id=rol placeholder=\"selecciona\"  [(ngModel)]=\"form.rol.cod_rol\"  class=\"form-control\"   name=\"rol\" required>\n        <option selected disabled value=\"Selecciona\">Selecciona</option>\n        <option  *ngFor=\" let rol of roles\" [value]=\"rol.cod_rol\" >{{rol.nombre}}</option>\n       \n       </select>\n\n  </div>\n</div>\n<br>\n\n\n\n<div class=\"row clearfix\">\n  <div class=\"col-lg-2 col-md-2 col-sm-4 form-control-label\">\n    <label for=\"login\">Usuario</label>\n  </div>\n  <div class=\"col-lg-10 col-md-10 col-sm-8\">\n    <div class=\"form-group\">\n      <input [(ngModel)]=\"form.login\" name=\"login\" type=\"password\" id=\"login\" #login=\"ngModel\" class=\"form-control\" placeholder=\"Entra usuario\" required>\n    </div>\n   \n  </div>\n</div>\n\n<div class=\"row clearfix\">\n  <div class=\"col-lg-2 col-md-2 col-sm-4 form-control-label\">\n    <label for=\"ap\">Contraseña</label>\n  </div>\n  <div class=\"col-lg-10 col-md-10 col-sm-8\">\n    <div class=\"form-group\">\n      <input [(ngModel)]=\"form.password\" id=\"password\" name=\"password\" type=\"password\"  class=\"form-control\" placeholder=\"contraseña\" required>\n     \n    </div>\n  \n  </div>\n</div>\n\n\n<div class=\"row clearfix\">\n  <div class=\"col-lg-2 col-md-2 col-sm-4 form-control-label\">\n    <label for=\"ap\">Confirmar contraseña</label>\n  </div>\n  <div class=\"col-lg-10 col-md-10 col-sm-8\">\n    <div class=\"form-group\">\n      <input  type=\"password\"   id=\"password_confirmation\"   name=\"pass\" class=\"form-control\" placeholder=\"contraseña\" required>\n    \n      <!--   \n      <div *ngIf=\"form2.pass!=form.password && pass.valid\" class=\"alert alert-danger\">\n        no coinciden las contraseñas. \n        </div>\n      -->\n    </div>\n    <!---\n    <div *ngIf=\"pass.invalid && (pass.dirty || pass.touched)\" class=\"alert alert-danger\">\n                  \n      <div *ngIf=\"pass.errors.required\">\n      contraseña es requerido.\n      </div>\n                          </div>\n                          <div *ngIf=\"form2.pass!=form.password && pass.valid\" class=\"alert alert-danger\">\n                            no coinciden las contraseñas. \n                            </div>\n                          -->\n  </div>\n</div>\n<div class=\"row clearfix\">\n  <div class=\"col-lg-2 col-md-2 col-sm-4 form-control-label\">\n    <label for=\"estado\">Foto </label>\n  </div>\n  <div class=\"col-lg-2 col-md-10 col-sm-8 card-img text-center p-2\">\n  <!--  \n    <img [src]=\"form.personal_laboratorio.foto\"  style=\"width:250px;height:145px; border-radius: 50%\"  >\n  -->\n    <input type=\"file\" class=\"d-none\" (change)=\"onPhotoSelected($event)\" #photoInput>\n    <img [src]=\"photoSelected || imageUrl\"  class=\"rounded-circle img-raised imgRedonda\"\n        (click)=\"photoInput.click()\"><!-- al hacer click en la imagen el input oculto funciona -->\n        <!-- \n    <input type=\"file\" #Image accept=\"image/*\" (change)=\"handleFileInput($event.target.files)\">\n  -->\n    \n    \n  </div>\n</div> \n<div class=\"row clearfix\">\n  <div class=\"col-sm-8 offset-sm-2\">\n    \n  </div>\n  <div class=\"col-sm-8 offset-sm-2\">\n    <button   data-type=\"autoclose-timer\" type=\"submit\" (click)=\"onSubmit(formulario)\"  class=\"btn btn-raised btn-primary btn-round waves-effect\"   >Guardar</button>\n  </div>\n</div>\n\n            </form>\n          </div>\n        </div>\n      </div>\n    </div>\n \n  </div>\n  \n</section>"

/***/ }),

/***/ "./src/app/usuarios/registrar/registrar.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/usuarios/registrar/registrar.component.ts ***!
  \***********************************************************/
/*! exports provided: RegistrarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegistrarComponent", function() { return RegistrarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _usuarios_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../usuarios.service */ "./src/app/usuarios/usuarios.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _models__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../models */ "./src/app/models/index.ts");
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






var RegistrarComponent = /** @class */ (function () {
    function RegistrarComponent(titleCasePipe, formBuilder, usuarioService, router) {
        var _this = this;
        this.titleCasePipe = titleCasePipe;
        this.formBuilder = formBuilder;
        this.usuarioService = usuarioService;
        this.router = router;
        this.imageUrl = "http://localhost:9898/api/file/";
        this.fileToUpload = null;
        this.bandera = true;
        this.file = null;
        this.form = new _models__WEBPACK_IMPORTED_MODULE_4__["Usuario"]();
        this.imageUrl = this.imageUrl + "photo_profile_user.png";
        console.log(this.imageUrl);
        this.usuarioService.getAllRoles().subscribe(function (data) {
            _this.roles = data;
            console.log(_this.roles);
        });
        this.form2 = {
            pass: ''
        };
        this.form4 = {};
    }
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
        this.addForm = this.formBuilder.group({
            id: [],
            firstName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            lastName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            email: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]
        });
        $('.selectpicker').selectpicker();
        $(function () {
            $('.colorpicker').colorpicker();
            // Masked Input
            var $demoMaskedInput = $('.demo-masked-input');
            // Date
            $demoMaskedInput.find('.date').inputmask('dd/mm/yyyy', { placeholder: '__/__/____' });
            // Time
            $demoMaskedInput.find('.time12').inputmask('hh:mm t', { placeholder: '__:__ _m', alias: 'time12', hourFormat: '12' });
            $demoMaskedInput.find('.time24').inputmask('hh:mm', { placeholder: '__:__ _m', alias: 'time24', hourFormat: '24' });
            // Date Time
            $demoMaskedInput.find('.datetime').inputmask('d/m/y h:s', { placeholder: '__/__/____ __:__', alias: 'datetime', hourFormat: '24' });
            // Mobile Phone Number
            $demoMaskedInput.find('.mobile-phone-number').inputmask('+99 (999) 999-99-99', { placeholder: '+__ (___) ___-__-__' });
            // Phone Number
            $demoMaskedInput.find('.phone-number').inputmask('+99 (999) 999-99-99', { placeholder: '+__ (___) ___-__-__' });
            // Dollar Money
            $demoMaskedInput.find('.money-dollar').inputmask('99,99 $', { placeholder: '__,__ $' });
            // IP Address
            $demoMaskedInput.find('.ip').inputmask('999.999.999.999', { placeholder: '___.___.___.___' });
            // Credit Card
            $demoMaskedInput.find('.credit-card').inputmask('9999 9999 9999 9999', { placeholder: '____ ____ ____ ____' });
            // Email
            $demoMaskedInput.find('.email').inputmask({ alias: 'email' });
            // Serial Key
            $demoMaskedInput.find('.key').inputmask('****-****-****-****', { placeholder: '____-____-____-____' });
            // Multi-select
            $('#optgroup').multiSelect({ selectableOptgroup: true });
            // noUISlider
            var sliderBasic = document.getElementById('nouislider_basic_example');
            noUiSlider.create(sliderBasic, {
                start: [30],
                connect: 'lower',
                step: 1,
                range: {
                    'min': [0],
                    'max': [100]
                }
            });
            getNoUISliderValue(sliderBasic, true);
            // Range Example
            var rangeSlider = document.getElementById('nouislider_range_example');
            noUiSlider.create(rangeSlider, {
                start: [32500, 62500],
                connect: true,
                range: {
                    'min': 25000,
                    'max': 100000
                }
            });
            getNoUISliderValue(rangeSlider, false);
        });
        // Get noUISlider Value and write on
        function getNoUISliderValue(slider, percentage) {
            slider.noUiSlider.on('update', function () {
                var val = slider.noUiSlider.get();
                if (percentage) {
                    // val = parseInt(val);
                    val += '%';
                }
                $(slider).parent().find('span.js-nouislider-value').text(val);
            });
        }
    };
    RegistrarComponent.prototype.registrar = function () {
        console.log(this.cedula);
    };
    RegistrarComponent.prototype.onSubmit = function (formulario) {
        var _this = this;
        console.log($('#password_confirmation').val());
        if ($('#password').val() != '' && $('#password_confirmation').val() != '') {
            validatePassword();
        }
        this.usuarioService.verificarCedula(this.form.cedula).subscribe(function (data) {
            console.log(data);
            console.log("klp");
            _this.bandera = false;
            validateCedulaUnica();
        }, function (error) {
            _this.bandera = true;
            validateCedula();
            console.log('cedula no esta registrado en el sistema');
            _this.form.personal_laboratorio.persona.nombre = (_this.titleCasePipe.transform(_this.form.personal_laboratorio.persona.nombre));
            _this.form.personal_laboratorio.persona.ap = (_this.titleCasePipe.transform(_this.form.personal_laboratorio.persona.ap));
            _this.form.personal_laboratorio.persona.am = (_this.titleCasePipe.transform(_this.form.personal_laboratorio.persona.am));
            _this.form.personal_laboratorio.profesion = (_this.titleCasePipe.transform(_this.form.personal_laboratorio.profesion));
            console.log(_this.form);
            console.log($('#password').val() == $('#password_confirmation').val());
            console.log($('#password').val() + "   " + $('#password_confirmation').val());
            if (_this.bandera && formulario.valid && ($('#password').val() == $('#password_confirmation').val())) {
                if (_this.form.personal_laboratorio.foto != '' && _this.file != null) {
                    _this.usuarioService.uploadImagen(_this.file).subscribe(function (data) {
                        console.log("imagen guardada");
                    });
                }
                _this.usuarioService.register(_this.form)
                    .subscribe(function (data) {
                    alert("Usuario guardado");
                    _this.router.navigate(['/usuarios/listar']);
                }, function (error) {
                    _this.router.navigate(['/usuarios/registrar']);
                });
            }
            else {
                console.log("ofrormicoreecto opasswordno coinciden");
            }
        });
        //validateCedulaUnica(this.form.cedula);
        // this.form.personal_laboratorio.foto=this.fileToUpload.name;
    };
    RegistrarComponent.prototype.handleFileInput = function (file) {
        var _this = this;
        this.fileToUpload = file.item(0);
        console.log(file.item.length);
        //Show image preview
        var reader = new FileReader();
        reader.onload = function (event) {
            _this.imageUrl = event.target.result;
        };
        reader.readAsDataURL(this.fileToUpload);
        this.form.personal_laboratorio.foto = this.fileToUpload.name;
        console.log(this.form.personal_laboratorio.foto);
    };
    RegistrarComponent.prototype.onPhotoSelected = function (event) {
        var _this = this;
        if (event.target.files && event.target.files[0]) { //verificando si por lomenos esta subiendouna foto
            this.file = event.target.files[0]; //ñaimagen guarda en file
            // image preview
            var reader_1 = new FileReader(); //lee un archivo
            reader_1.onload = function (e) {
                return _this.photoSelected = reader_1.result;
            }; //llena photoselect con el resultado que esta leendo
            reader_1.readAsDataURL(this.file);
            console.log(this.file.name);
            this.form.personal_laboratorio.foto = this.file.name;
        }
    };
    RegistrarComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-registrar',
            template: __webpack_require__(/*! ./registrar.component.html */ "./src/app/usuarios/registrar/registrar.component.html"),
            styles: [__webpack_require__(/*! ./registrar.component.css */ "./src/app/usuarios/registrar/registrar.component.css")],
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None
        }),
        __metadata("design:paramtypes", [_angular_common__WEBPACK_IMPORTED_MODULE_5__["TitleCasePipe"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"], _usuarios_service__WEBPACK_IMPORTED_MODULE_2__["UsuariosService"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], RegistrarComponent);
    return RegistrarComponent;
}());



/***/ }),

/***/ "./src/app/usuarios/usuarios.module.ts":
/*!*********************************************!*\
  !*** ./src/app/usuarios/usuarios.module.ts ***!
  \*********************************************/
/*! exports provided: UsuariosModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UsuariosModule", function() { return UsuariosModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _usuarios_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./usuarios.service */ "./src/app/usuarios/usuarios.service.ts");
/* harmony import */ var _usuarios_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./usuarios.routing.module */ "./src/app/usuarios/usuarios.routing.module.ts");
/* harmony import */ var _registrar_registrar_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./registrar/registrar.component */ "./src/app/usuarios/registrar/registrar.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _modificar_modificar_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modificar/modificar.component */ "./src/app/usuarios/modificar/modificar.component.ts");
/* harmony import */ var ngx_pagination__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-pagination */ "./node_modules/ngx-pagination/dist/ngx-pagination.js");
/* harmony import */ var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ng-select/ng-select */ "./node_modules/@ng-select/ng-select/fesm5/ng-select.js");
/* harmony import */ var _listar_listar_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./listar/listar.component */ "./src/app/usuarios/listar/listar.component.ts");
/* harmony import */ var primeng_inputtext__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! primeng/inputtext */ "./node_modules/primeng/inputtext.js");
/* harmony import */ var primeng_inputtext__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(primeng_inputtext__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var primeng_primeng__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! primeng/primeng */ "./node_modules/primeng/primeng.js");
/* harmony import */ var primeng_primeng__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(primeng_primeng__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var primeng_dropdown__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! primeng/dropdown */ "./node_modules/primeng/dropdown.js");
/* harmony import */ var primeng_dropdown__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(primeng_dropdown__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var primeng_table__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! primeng/table */ "./node_modules/primeng/table.js");
/* harmony import */ var primeng_table__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(primeng_table__WEBPACK_IMPORTED_MODULE_13__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





//import {MatSelectModule} from '@angular/material/select'
//import {MatOptionModule} from '@angular/material'


//import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

//import {MatFormFieldModule} from '@angular/material/form-field';






var UsuariosModule = /** @class */ (function () {
    function UsuariosModule() {
    }
    UsuariosModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                primeng_inputtext__WEBPACK_IMPORTED_MODULE_10__["InputTextModule"],
                primeng_primeng__WEBPACK_IMPORTED_MODULE_11__["ButtonModule"],
                primeng_dropdown__WEBPACK_IMPORTED_MODULE_12__["DropdownModule"],
                primeng_table__WEBPACK_IMPORTED_MODULE_13__["TableModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
                _usuarios_routing_module__WEBPACK_IMPORTED_MODULE_3__["UsuariosRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"],
                _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_8__["NgSelectModule"],
                ngx_pagination__WEBPACK_IMPORTED_MODULE_7__["NgxPaginationModule"]
            ],
            declarations: [_registrar_registrar_component__WEBPACK_IMPORTED_MODULE_4__["RegistrarComponent"], _modificar_modificar_component__WEBPACK_IMPORTED_MODULE_6__["ModificarComponent"], _listar_listar_component__WEBPACK_IMPORTED_MODULE_9__["ListarComponent"]],
            providers: [_usuarios_service__WEBPACK_IMPORTED_MODULE_2__["UsuariosService"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["DatePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["TitleCasePipe"]],
        })
    ], UsuariosModule);
    return UsuariosModule;
}());



/***/ }),

/***/ "./src/app/usuarios/usuarios.routing.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/usuarios/usuarios.routing.module.ts ***!
  \*****************************************************/
/*! exports provided: UsuariosRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UsuariosRoutingModule", function() { return UsuariosRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _registrar_registrar_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./registrar/registrar.component */ "./src/app/usuarios/registrar/registrar.component.ts");
/* harmony import */ var _modificar_modificar_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modificar/modificar.component */ "./src/app/usuarios/modificar/modificar.component.ts");
/* harmony import */ var _listar_listar_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./listar/listar.component */ "./src/app/usuarios/listar/listar.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var routes = [
    {
        path: 'listar',
        component: _listar_listar_component__WEBPACK_IMPORTED_MODULE_4__["ListarComponent"]
    },
    {
        path: 'registrar',
        component: _registrar_registrar_component__WEBPACK_IMPORTED_MODULE_2__["RegistrarComponent"]
    },
    {
        path: 'modificar',
        component: _modificar_modificar_component__WEBPACK_IMPORTED_MODULE_3__["ModificarComponent"]
    },
    {
        path: '',
        redirectTo: 'normal',
        pathMatch: 'full'
    }
];
var UsuariosRoutingModule = /** @class */ (function () {
    function UsuariosRoutingModule() {
    }
    UsuariosRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], UsuariosRoutingModule);
    return UsuariosRoutingModule;
}());



/***/ })

}]);
//# sourceMappingURL=app-usuarios-usuarios-module.js.map