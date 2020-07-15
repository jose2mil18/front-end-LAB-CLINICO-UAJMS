(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["app-authentication-authentication-module"],{

/***/ "./src/app/authentication/authentication-routing.module.ts":
/*!*****************************************************************!*\
  !*** ./src/app/authentication/authentication-routing.module.ts ***!
  \*****************************************************************/
/*! exports provided: AuthenticationRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthenticationRoutingModule", function() { return AuthenticationRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _sing_in_sing_in_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./sing-in/sing-in.component */ "./src/app/authentication/sing-in/sing-in.component.ts");
/* harmony import */ var _sing_up_sing_up_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./sing-up/sing-up.component */ "./src/app/authentication/sing-up/sing-up.component.ts");
/* harmony import */ var _forget_password_forget_password_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./forget-password/forget-password.component */ "./src/app/authentication/forget-password/forget-password.component.ts");
/* harmony import */ var _page404_page404_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./page404/page404.component */ "./src/app/authentication/page404/page404.component.ts");
/* harmony import */ var _page500_page500_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./page500/page500.component */ "./src/app/authentication/page500/page500.component.ts");
/* harmony import */ var _page_offline_page_offline_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./page-offline/page-offline.component */ "./src/app/authentication/page-offline/page-offline.component.ts");
/* harmony import */ var _locked_locked_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./locked/locked.component */ "./src/app/authentication/locked/locked.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









var routes = [
    {
        path: 'sign-in',
        component: _sing_in_sing_in_component__WEBPACK_IMPORTED_MODULE_2__["SingInComponent"]
    },
    {
        path: 'sign-up',
        component: _sing_up_sing_up_component__WEBPACK_IMPORTED_MODULE_3__["SingUpComponent"]
    },
    {
        path: 'forget-password',
        component: _forget_password_forget_password_component__WEBPACK_IMPORTED_MODULE_4__["ForgetPasswordComponent"]
    },
    {
        path: '404',
        component: _page404_page404_component__WEBPACK_IMPORTED_MODULE_5__["Page404Component"]
    },
    {
        path: '500',
        component: _page500_page500_component__WEBPACK_IMPORTED_MODULE_6__["Page500Component"]
    },
    {
        path: 'page-offline',
        component: _page_offline_page_offline_component__WEBPACK_IMPORTED_MODULE_7__["PageOfflineComponent"]
    },
    {
        path: 'locked',
        component: _locked_locked_component__WEBPACK_IMPORTED_MODULE_8__["LockedComponent"]
    },
    {
        path: '',
        redirectTo: 'sign-in',
        pathMatch: 'full'
    }
];
var AuthenticationRoutingModule = /** @class */ (function () {
    function AuthenticationRoutingModule() {
    }
    AuthenticationRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], AuthenticationRoutingModule);
    return AuthenticationRoutingModule;
}());



/***/ }),

/***/ "./src/app/authentication/authentication.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/authentication/authentication.module.ts ***!
  \*********************************************************/
/*! exports provided: AuthenticationModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthenticationModule", function() { return AuthenticationModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _authentication_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./authentication-routing.module */ "./src/app/authentication/authentication-routing.module.ts");
/* harmony import */ var _sing_in_sing_in_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./sing-in/sing-in.component */ "./src/app/authentication/sing-in/sing-in.component.ts");
/* harmony import */ var _sing_up_sing_up_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./sing-up/sing-up.component */ "./src/app/authentication/sing-up/sing-up.component.ts");
/* harmony import */ var _forget_password_forget_password_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./forget-password/forget-password.component */ "./src/app/authentication/forget-password/forget-password.component.ts");
/* harmony import */ var _page404_page404_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./page404/page404.component */ "./src/app/authentication/page404/page404.component.ts");
/* harmony import */ var _page500_page500_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./page500/page500.component */ "./src/app/authentication/page500/page500.component.ts");
/* harmony import */ var _page_offline_page_offline_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./page-offline/page-offline.component */ "./src/app/authentication/page-offline/page-offline.component.ts");
/* harmony import */ var _locked_locked_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./locked/locked.component */ "./src/app/authentication/locked/locked.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _authentication_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./authentication.service */ "./src/app/authentication/authentication.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};













var AuthenticationModule = /** @class */ (function () {
    function AuthenticationModule() {
    }
    AuthenticationModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_10__["HttpClientModule"],
                _authentication_routing_module__WEBPACK_IMPORTED_MODULE_2__["AuthenticationRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_12__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_12__["ReactiveFormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_12__["ReactiveFormsModule"]
            ],
            declarations: [_sing_in_sing_in_component__WEBPACK_IMPORTED_MODULE_3__["SingInComponent"], _sing_up_sing_up_component__WEBPACK_IMPORTED_MODULE_4__["SingUpComponent"], _forget_password_forget_password_component__WEBPACK_IMPORTED_MODULE_5__["ForgetPasswordComponent"], _page404_page404_component__WEBPACK_IMPORTED_MODULE_6__["Page404Component"], _page500_page500_component__WEBPACK_IMPORTED_MODULE_7__["Page500Component"], _page_offline_page_offline_component__WEBPACK_IMPORTED_MODULE_8__["PageOfflineComponent"], _locked_locked_component__WEBPACK_IMPORTED_MODULE_9__["LockedComponent"]],
            providers: [
                _authentication_service__WEBPACK_IMPORTED_MODULE_11__["AuthenticationService"]
            ],
        })
    ], AuthenticationModule);
    return AuthenticationModule;
}());



/***/ }),

/***/ "./src/app/authentication/forget-password/forget-password.component.css":
/*!******************************************************************************!*\
  !*** ./src/app/authentication/forget-password/forget-password.component.css ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".authentication .n_logo{display:inline-block}.authentication .navbar{width:100%;background:transparent !important}.authentication .navbar a:not(.btn){font-size:14px !important;text-transform:none !important}.authentication .navbar-nav li a i{vertical-align:middle}.authentication .navbar-nav li .btn{line-height:20px !important}.authentication .checkbox label{font-size:13px}@media screen and (min-width: 992px){.authentication .navbar-collapse{float:right}.authentication .navbar-collapse .navbar-nav{display:inline-block}.authentication .navbar-collapse .navbar-nav li{display:inline-block}}@media only screen and (max-width: 767px){.authentication .footer nav{display:block;float:none}}"

/***/ }),

/***/ "./src/app/authentication/forget-password/forget-password.component.html":
/*!*******************************************************************************!*\
  !*** ./src/app/authentication/forget-password/forget-password.component.html ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- Navbar -->\n<nav class=\"navbar navbar-expand-lg fixed-top navbar-transparent\">\n    <div class=\"container\">        \n        <div class=\"navbar-translate n_logo\">\n            <a class=\"navbar-brand\" href=\"javascript:void(0);\" title=\"\" target=\"_blank\">Oreo</a>\n            <button class=\"navbar-toggler\" type=\"button\">\n                <span class=\"navbar-toggler-bar bar1\"></span>\n                <span class=\"navbar-toggler-bar bar2\"></span>\n                <span class=\"navbar-toggler-bar bar3\"></span>\n            </button>\n        </div>\n        <div class=\"navbar-collapse\">\n            <ul class=\"navbar-nav\">\n                <li class=\"nav-item\">\n                    <a class=\"nav-link\" routerLink=\"/dashboard/main\">Home</a>\n                </li>\n                <li class=\"nav-item\">\n                    <a class=\"nav-link\" href=\"javascript:void(0);\">Search Result</a>\n                </li>\n                <li class=\"nav-item\">\n                    <a class=\"nav-link\" title=\"Follow us on Twitter\" href=\"javascript:void(0);\" target=\"_blank\">\n                        <i class=\"zmdi zmdi-twitter\"></i>\n                        <p class=\"d-lg-none d-xl-none\">Twitter</p>\n                    </a>\n                </li>\n                <li class=\"nav-item\">\n                    <a class=\"nav-link\" title=\"Like us on Facebook\" href=\"javascript:void(0);\" target=\"_blank\">\n                        <i class=\"zmdi zmdi-facebook\"></i>\n                        <p class=\"d-lg-none d-xl-none\">Facebook</p>\n                    </a>\n                </li>\n                <li class=\"nav-item\">\n                    <a class=\"nav-link\" title=\"Follow us on Instagram\" href=\"javascript:void(0);\" target=\"_blank\">                        \n                        <i class=\"zmdi zmdi-instagram\"></i>\n                        <p class=\"d-lg-none d-xl-none\">Instagram</p>\n                    </a>\n                </li>                \n                <li class=\"nav-item\">\n                    <a class=\"nav-link btn btn-white btn-round\" routerLink=\"/authentication/sign-in\">SIGN IN</a>\n                </li>\n            </ul>\n        </div>\n    </div>\n</nav>\n<!-- End Navbar -->\n<div class=\"page-header\">\n    <div class=\"page-header-image\" style=\"background-image:url(assets/images/login.jpg)\"></div>\n    <div class=\"container\">\n        <div class=\"col-md-12 content-center\">\n            <div class=\"card-plain\">\n                <form class=\"form\" method=\"\" action=\"\">\n                    <div class=\"header\">\n                        <div class=\"logo-container\">\n                            <img src=\"assets/images/logo.svg\" alt=\"\">\n                        </div>\n                        <h5>Forgot Password?</h5>\n                        <span>Enter your e-mail address below to reset your password.</span>\n                    </div>\n                    <div class=\"content\">\n                        <div class=\"input-group input-lg\">\n                            <input type=\"text\" class=\"form-control\" placeholder=\"Enter Email\">\n                            <span class=\"input-group-addon\">\n                                <i class=\"zmdi zmdi-email\"></i>\n                            </span>\n                        </div>\n                    </div>\n                    <div class=\"footer text-center\">\n                        <a routerLink=\"/dashboard/main\" class=\"btn btn-primary btn-round btn-lg btn-block waves-effect waves-light\">SUBMIT</a>\n                        <h5><a href=\"javascript:void(0);\" class=\"link\">Need Help?</a></h5>\n                    </div>\n                </form>\n            </div>\n        </div>\n    </div>\n    <footer class=\"footer\">\n        <div class=\"container\">\n            <nav>\n                <ul>\n                    <li><a href=\"http://thememakker.com/contact/\" target=\"_blank\">Contact Us</a></li>\n                    <li><a href=\"http://thememakker.com/about/\" target=\"_blank\">About Us</a></li>\n                    <li><a href=\"javascript:void(0);\">FAQ</a></li>\n                </ul>\n            </nav>\n            <div class=\"copyright\">\n                &copy; {{year}},\n                <span>Designed by <a href=\"http://thememakker.com/\" target=\"_blank\">ThemeMakker</a></span>\n            </div>\n        </div>\n    </footer>\n</div>"

/***/ }),

/***/ "./src/app/authentication/forget-password/forget-password.component.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/authentication/forget-password/forget-password.component.ts ***!
  \*****************************************************************************/
/*! exports provided: ForgetPasswordComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ForgetPasswordComponent", function() { return ForgetPasswordComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ForgetPasswordComponent = /** @class */ (function () {
    function ForgetPasswordComponent() {
        this.year = (new Date()).getFullYear();
    }
    ForgetPasswordComponent.prototype.ngOnInit = function () {
        $(".navbar-toggler").on('click', function () {
            $("html").toggleClass("nav-open");
        });
        $("body").addClass("authentication sidebar-collapse");
    };
    ForgetPasswordComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-forget-password',
            template: __webpack_require__(/*! ./forget-password.component.html */ "./src/app/authentication/forget-password/forget-password.component.html"),
            styles: [__webpack_require__(/*! ./forget-password.component.css */ "./src/app/authentication/forget-password/forget-password.component.css")],
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None
        }),
        __metadata("design:paramtypes", [])
    ], ForgetPasswordComponent);
    return ForgetPasswordComponent;
}());



/***/ }),

/***/ "./src/app/authentication/locked/locked.component.css":
/*!************************************************************!*\
  !*** ./src/app/authentication/locked/locked.component.css ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".authentication .n_logo{display:inline-block}.authentication .navbar{width:100%;background:transparent !important}.authentication .navbar a:not(.btn){font-size:14px !important;text-transform:none !important}.authentication .navbar-nav li a i{vertical-align:middle}.authentication .navbar-nav li .btn{line-height:20px !important}.authentication .checkbox label{font-size:13px}@media screen and (min-width: 992px){.authentication .navbar-collapse{float:right}.authentication .navbar-collapse .navbar-nav{display:inline-block}.authentication .navbar-collapse .navbar-nav li{display:inline-block}}@media only screen and (max-width: 767px){.authentication .footer nav{display:block;float:none}}"

/***/ }),

/***/ "./src/app/authentication/locked/locked.component.html":
/*!*************************************************************!*\
  !*** ./src/app/authentication/locked/locked.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- Navbar -->\n<nav class=\"navbar navbar-expand-lg fixed-top navbar-transparent\">\n  <div class=\"container\">        \n      <div class=\"navbar-translate n_logo\">\n          <a class=\"navbar-brand\" href=\"javascript:void(0);\" title=\"\" target=\"_blank\">Oreo</a>\n          <button class=\"navbar-toggler\" type=\"button\">\n              <span class=\"navbar-toggler-bar bar1\"></span>\n              <span class=\"navbar-toggler-bar bar2\"></span>\n              <span class=\"navbar-toggler-bar bar3\"></span>\n          </button>\n      </div>\n      <div class=\"navbar-collapse\">\n          <ul class=\"navbar-nav\">\n              <li class=\"nav-item\">\n                  <a class=\"nav-link\" routerLink=\"/dashboard/main\">Home</a>\n              </li>\n              <li class=\"nav-item\">\n                  <a class=\"nav-link\" href=\"javascript:void(0);\">Search Result</a>\n              </li>\n              <li class=\"nav-item\">\n                  <a class=\"nav-link\" title=\"Follow us on Twitter\" href=\"javascript:void(0);\" target=\"_blank\">\n                      <i class=\"zmdi zmdi-twitter\"></i>\n                      <p class=\"d-lg-none d-xl-none\">Twitter</p>\n                  </a>\n              </li>\n              <li class=\"nav-item\">\n                  <a class=\"nav-link\" title=\"Like us on Facebook\" href=\"javascript:void(0);\" target=\"_blank\">\n                      <i class=\"zmdi zmdi-facebook\"></i>\n                      <p class=\"d-lg-none d-xl-none\">Facebook</p>\n                  </a>\n              </li>\n              <li class=\"nav-item\">\n                  <a class=\"nav-link\" title=\"Follow us on Instagram\" href=\"javascript:void(0);\" target=\"_blank\">                        \n                      <i class=\"zmdi zmdi-instagram\"></i>\n                      <p class=\"d-lg-none d-xl-none\">Instagram</p>\n                  </a>\n              </li>                \n              <li class=\"nav-item\">\n                  <a class=\"nav-link btn btn-white btn-round\" routerLink=\"/authentication/sign-in\">SIGN IN</a>\n              </li>\n          </ul>\n      </div>\n  </div>\n</nav>\n<!-- End Navbar -->\n<div class=\"page-header\">\n  <div class=\"page-header-image\" style=\"background-image:url(assets/images/login.jpg)\"></div>\n  <div class=\"container\">\n      <div class=\"col-md-12 content-center\">\n          <div class=\"card-plain\">\n              <form class=\"form\" method=\"\" action=\"\">\n                  <div class=\"header\">\n                      <div class=\"logo-container\">\n                          <img class=\"rounded-circle img-raised\" src=\"assets/images/profile_av.jpg\" alt=\"\">\n                      </div>\n                      <h5>Michael</h5>\n                      <span>Locked</span>\n                  </div>\n                  <div class=\"content\">\n                      <div class=\"input-group input-lg\">\n                          <input type=\"password\" class=\"form-control\" placeholder=\"Enter your Password\">\n                          <span class=\"input-group-addon\">\n                              <i class=\"zmdi zmdi-lock\"></i>\n                          </span>\n                      </div>\n                  </div>\n                  <div class=\"footer text-center\">\n                      <a routerLink=\"/authentication/sign-in\" class=\"btn btn-primary btn-round btn-lg btn-block waves-effect waves-light\">LOG IN</a>\n                      <h5><a href=\"javascript:void(0);\" class=\"link\">Need Help?</a></h5>\n                  </div>\n              </form>\n          </div>\n      </div>\n  </div>\n  <footer class=\"footer\">\n      <div class=\"container\">\n          <nav>\n              <ul>\n                  <li><a href=\"http://thememakker.com/contact/\" target=\"_blank\">Contact Us</a></li>\n                  <li><a href=\"http://thememakker.com/about/\" target=\"_blank\">About Us</a></li>\n                  <li><a href=\"javascript:void(0);\">FAQ</a></li>\n              </ul>\n          </nav>\n          <div class=\"copyright\">\n              &copy; {{year}},\n              <span>Designed by <a href=\"http://thememakker.com/\" target=\"_blank\">ThemeMakker</a></span>\n          </div>\n      </div>\n  </footer>\n</div>"

/***/ }),

/***/ "./src/app/authentication/locked/locked.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/authentication/locked/locked.component.ts ***!
  \***********************************************************/
/*! exports provided: LockedComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LockedComponent", function() { return LockedComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var LockedComponent = /** @class */ (function () {
    function LockedComponent() {
        this.year = (new Date()).getFullYear();
    }
    LockedComponent.prototype.ngOnInit = function () {
        $(".navbar-toggler").on('click', function () {
            $("html").toggleClass("nav-open");
        });
        $("body").addClass("authentication sidebar-collapse");
    };
    LockedComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-locked',
            template: __webpack_require__(/*! ./locked.component.html */ "./src/app/authentication/locked/locked.component.html"),
            styles: [__webpack_require__(/*! ./locked.component.css */ "./src/app/authentication/locked/locked.component.css")],
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None
        }),
        __metadata("design:paramtypes", [])
    ], LockedComponent);
    return LockedComponent;
}());



/***/ }),

/***/ "./src/app/authentication/page-offline/page-offline.component.css":
/*!************************************************************************!*\
  !*** ./src/app/authentication/page-offline/page-offline.component.css ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".authentication .n_logo{display:inline-block}.authentication .navbar{width:100%;background:transparent !important}.authentication .navbar a:not(.btn){font-size:14px !important;text-transform:none !important}.authentication .navbar-nav li a i{vertical-align:middle}.authentication .navbar-nav li .btn{line-height:20px !important}.authentication .checkbox label{font-size:13px}@media screen and (min-width: 992px){.authentication .navbar-collapse{float:right}.authentication .navbar-collapse .navbar-nav{display:inline-block}.authentication .navbar-collapse .navbar-nav li{display:inline-block}}@media only screen and (max-width: 767px){.authentication .footer nav{display:block;float:none}}"

/***/ }),

/***/ "./src/app/authentication/page-offline/page-offline.component.html":
/*!*************************************************************************!*\
  !*** ./src/app/authentication/page-offline/page-offline.component.html ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- Navbar -->\n<nav class=\"navbar navbar-expand-lg fixed-top navbar-transparent\">\n    <div class=\"container\">        \n        <div class=\"navbar-translate n_logo\">\n            <a class=\"navbar-brand\" href=\"javascript:void(0);\" title=\"\" target=\"_blank\">Oreo</a>\n            <button class=\"navbar-toggler\" type=\"button\">\n                <span class=\"navbar-toggler-bar bar1\"></span>\n                <span class=\"navbar-toggler-bar bar2\"></span>\n                <span class=\"navbar-toggler-bar bar3\"></span>\n            </button>\n        </div>\n        <div class=\"navbar-collapse\">\n            <ul class=\"navbar-nav\">\n                <li class=\"nav-item\">\n                    <a class=\"nav-link\" routerLink=\"/dashboard/main\">Home</a>\n                </li>\n                <li class=\"nav-item\">\n                    <a class=\"nav-link\" href=\"javascript:void(0);\">Search Result</a>\n                </li>\n                <li class=\"nav-item\">\n                    <a class=\"nav-link\" title=\"Follow us on Twitter\" href=\"javascript:void(0);\" target=\"_blank\">\n                        <i class=\"zmdi zmdi-twitter\"></i>\n                        <p class=\"d-lg-none d-xl-none\">Twitter</p>\n                    </a>\n                </li>\n                <li class=\"nav-item\">\n                    <a class=\"nav-link\" title=\"Like us on Facebook\" href=\"javascript:void(0);\" target=\"_blank\">\n                        <i class=\"zmdi zmdi-facebook\"></i>\n                        <p class=\"d-lg-none d-xl-none\">Facebook</p>\n                    </a>\n                </li>\n                <li class=\"nav-item\">\n                    <a class=\"nav-link\" title=\"Follow us on Instagram\" href=\"javascript:void(0);\" target=\"_blank\">                        \n                        <i class=\"zmdi zmdi-instagram\"></i>\n                        <p class=\"d-lg-none d-xl-none\">Instagram</p>\n                    </a>\n                </li>                \n                <li class=\"nav-item\">\n                    <a class=\"nav-link btn btn-white btn-round\" routerLink=\"/authentication/sign-in\">SIGN IN</a>\n                </li>\n            </ul>\n        </div>\n    </div>\n</nav>\n<!-- End Navbar -->\n<div class=\"page-header\">\n    <div class=\"page-header-image\" style=\"background-image:url(assets/images/login.jpg)\"></div>\n    <div class=\"container\">\n        <div class=\"col-md-12 content-center\">\n            <div class=\"card-plain\">\n                <form class=\"form\" method=\"\" action=\"\">\n                    <div class=\"header\">\n                        <div class=\"logo-container\">\n                            <img src=\"assets/images/logo.svg\" alt=\"\">\n                        </div>\n                        <h5>The General Shutdown</h5>\n                        <span>Maintanance or not?</span>\n                    </div>\n                    <div class=\"content\">\n                        <div class=\"input-group input-lg\">\n                            <input type=\"text\" class=\"form-control\" placeholder=\"Search...\">\n                            <span class=\"input-group-addon\">\n                                <i class=\"zmdi zmdi-search\"></i>\n                            </span>\n                        </div>\n                    </div>\n                    <div class=\"footer text-center\">\n                        <a routerLink=\"/dashboard/main\" class=\"btn btn-primary btn-round btn-lg btn-block waves-effect waves-light\">GO TO HOMEPAGE</a>\n                        <h5><a href=\"javascript:void(0);\" class=\"link\">Need Help?</a></h5>\n                    </div>\n                </form>\n            </div>\n        </div>\n    </div>\n    <footer class=\"footer\">\n        <div class=\"container\">\n            <nav>\n                <ul>\n                    <li><a href=\"http://thememakker.com/contact/\" target=\"_blank\">Contact Us</a></li>\n                    <li><a href=\"http://thememakker.com/about/\" target=\"_blank\">About Us</a></li>\n                    <li><a href=\"javascript:void(0);\">FAQ</a></li>\n                </ul>\n            </nav>\n            <div class=\"copyright\">\n                &copy; {{year}},\n                <span>Designed by <a href=\"http://thememakker.com/\" target=\"_blank\">ThemeMakker</a></span>\n            </div>\n        </div>\n    </footer>\n</div>"

/***/ }),

/***/ "./src/app/authentication/page-offline/page-offline.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/authentication/page-offline/page-offline.component.ts ***!
  \***********************************************************************/
/*! exports provided: PageOfflineComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageOfflineComponent", function() { return PageOfflineComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var PageOfflineComponent = /** @class */ (function () {
    function PageOfflineComponent() {
        this.year = (new Date()).getFullYear();
    }
    PageOfflineComponent.prototype.ngOnInit = function () {
        $(".navbar-toggler").on('click', function () {
            $("html").toggleClass("nav-open");
        });
        $("body").addClass("authentication sidebar-collapse");
    };
    PageOfflineComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-page-offline',
            template: __webpack_require__(/*! ./page-offline.component.html */ "./src/app/authentication/page-offline/page-offline.component.html"),
            styles: [__webpack_require__(/*! ./page-offline.component.css */ "./src/app/authentication/page-offline/page-offline.component.css")],
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None
        }),
        __metadata("design:paramtypes", [])
    ], PageOfflineComponent);
    return PageOfflineComponent;
}());



/***/ }),

/***/ "./src/app/authentication/page404/page404.component.css":
/*!**************************************************************!*\
  !*** ./src/app/authentication/page404/page404.component.css ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".authentication .n_logo{display:inline-block}.authentication .navbar{width:100%;background:transparent !important}.authentication .navbar a:not(.btn){font-size:14px !important;text-transform:none !important}.authentication .navbar-nav li a i{vertical-align:middle}.authentication .navbar-nav li .btn{line-height:20px !important}.authentication .checkbox label{font-size:13px}@media screen and (min-width: 992px){.authentication .navbar-collapse{float:right}.authentication .navbar-collapse .navbar-nav{display:inline-block}.authentication .navbar-collapse .navbar-nav li{display:inline-block}}@media only screen and (max-width: 767px){.authentication .footer nav{display:block;float:none}}"

/***/ }),

/***/ "./src/app/authentication/page404/page404.component.html":
/*!***************************************************************!*\
  !*** ./src/app/authentication/page404/page404.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- Navbar -->\n<nav class=\"navbar navbar-expand-lg fixed-top navbar-transparent\">\n    <div class=\"container\">        \n        <div class=\"navbar-translate n_logo\">\n            <a class=\"navbar-brand\" href=\"javascript:void(0);\" title=\"\" target=\"_blank\">Oreo</a>\n            <button class=\"navbar-toggler\" type=\"button\">\n                <span class=\"navbar-toggler-bar bar1\"></span>\n                <span class=\"navbar-toggler-bar bar2\"></span>\n                <span class=\"navbar-toggler-bar bar3\"></span>\n            </button>\n        </div>\n        <div class=\"navbar-collapse\">\n            <ul class=\"navbar-nav\">\n                <li class=\"nav-item\">\n                    <a class=\"nav-link\" routerLink=\"/dashboard/main\">Home</a>\n                </li>\n                <li class=\"nav-item\">\n                    <a class=\"nav-link\" href=\"javascript:void(0);\">Search Result</a>\n                </li>\n                <li class=\"nav-item\">\n                    <a class=\"nav-link\" title=\"Follow us on Twitter\" href=\"javascript:void(0);\" target=\"_blank\">\n                        <i class=\"zmdi zmdi-twitter\"></i>\n                        <p class=\"d-lg-none d-xl-none\">Twitter</p>\n                    </a>\n                </li>\n                <li class=\"nav-item\">\n                    <a class=\"nav-link\" title=\"Like us on Facebook\" href=\"javascript:void(0);\" target=\"_blank\">\n                        <i class=\"zmdi zmdi-facebook\"></i>\n                        <p class=\"d-lg-none d-xl-none\">Facebook</p>\n                    </a>\n                </li>\n                <li class=\"nav-item\">\n                    <a class=\"nav-link\" title=\"Follow us on Instagram\" href=\"javascript:void(0);\" target=\"_blank\">                        \n                        <i class=\"zmdi zmdi-instagram\"></i>\n                        <p class=\"d-lg-none d-xl-none\">Instagram</p>\n                    </a>\n                </li>                \n                <li class=\"nav-item\">\n                    <a class=\"nav-link btn btn-white btn-round\" routerLink=\"/authentication/sign-in\">SIGN IN</a>\n                </li>\n            </ul>\n        </div>\n    </div>\n</nav>\n<!-- End Navbar -->\n<div class=\"page-header\">\n    <div class=\"page-header-image\" style=\"background-image:url(assets/images/login.jpg)\"></div>\n    <div class=\"container\">\n        <div class=\"col-md-12 content-center\">\n            <div class=\"card-plain\">\n                <form class=\"form\" method=\"\" action=\"\">\n                    <div class=\"header\">\n                        <div class=\"logo-container\">\n                            <img src=\"assets/images/logo.svg\" alt=\"\">\n                        </div>\n                        <h5>Error 404</h5>\n                        <span>Page not found</span>\n                    </div>\n                    <div class=\"content\">\n                        <div class=\"input-group input-lg\">\n                            <input type=\"text\" class=\"form-control\" placeholder=\"Search...\">\n                            <span class=\"input-group-addon\">\n                                <i class=\"zmdi zmdi-search\"></i>\n                            </span>\n                        </div>\n                    </div>\n                    <div class=\"footer text-center\">\n                        <a routerLink=\"/dashboard/main\" class=\"btn btn-primary btn-round btn-lg btn-block waves-effect waves-light\">GO TO HOMEPAGE</a>\n                        <h5><a href=\"javascript:void(0);\" class=\"link\">Need Help?</a></h5>\n                    </div>\n                </form>\n            </div>\n        </div>\n    </div>\n    <footer class=\"footer\">\n        <div class=\"container\">\n            <nav>\n                <ul>\n                    <li><a href=\"http://thememakker.com/contact/\" target=\"_blank\">Contact Us</a></li>\n                    <li><a href=\"http://thememakker.com/about/\" target=\"_blank\">About Us</a></li>\n                    <li><a href=\"javascript:void(0);\">FAQ</a></li>\n                </ul>\n            </nav>\n            <div class=\"copyright\">\n                &copy; {{year}},\n                <span>Designed by <a href=\"http://thememakker.com/\" target=\"_blank\">ThemeMakker</a></span>\n            </div>\n        </div>\n    </footer>\n</div>"

/***/ }),

/***/ "./src/app/authentication/page404/page404.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/authentication/page404/page404.component.ts ***!
  \*************************************************************/
/*! exports provided: Page404Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Page404Component", function() { return Page404Component; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var Page404Component = /** @class */ (function () {
    function Page404Component() {
        this.year = (new Date()).getFullYear();
    }
    Page404Component.prototype.ngOnInit = function () {
        $("body").addClass("authentication sidebar-collapse");
        $(".navbar-toggler").on('click', function () {
            $("html").toggleClass("nav-open");
        });
    };
    Page404Component = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-page404',
            template: __webpack_require__(/*! ./page404.component.html */ "./src/app/authentication/page404/page404.component.html"),
            styles: [__webpack_require__(/*! ./page404.component.css */ "./src/app/authentication/page404/page404.component.css")],
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None
        }),
        __metadata("design:paramtypes", [])
    ], Page404Component);
    return Page404Component;
}());



/***/ }),

/***/ "./src/app/authentication/page500/page500.component.css":
/*!**************************************************************!*\
  !*** ./src/app/authentication/page500/page500.component.css ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".authentication .n_logo{display:inline-block}.authentication .navbar{width:100%;background:transparent !important}.authentication .navbar a:not(.btn){font-size:14px !important;text-transform:none !important}.authentication .navbar-nav li a i{vertical-align:middle}.authentication .navbar-nav li .btn{line-height:20px !important}.authentication .checkbox label{font-size:13px}@media screen and (min-width: 992px){.authentication .navbar-collapse{float:right}.authentication .navbar-collapse .navbar-nav{display:inline-block}.authentication .navbar-collapse .navbar-nav li{display:inline-block}}@media only screen and (max-width: 767px){.authentication .footer nav{display:block;float:none}}"

/***/ }),

/***/ "./src/app/authentication/page500/page500.component.html":
/*!***************************************************************!*\
  !*** ./src/app/authentication/page500/page500.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- Navbar -->\n<nav class=\"navbar navbar-expand-lg fixed-top navbar-transparent\">\n    <div class=\"container\">        \n        <div class=\"navbar-translate n_logo\">\n            <a class=\"navbar-brand\" href=\"javascript:void(0);\" title=\"\" target=\"_blank\">Oreo</a>\n            <button class=\"navbar-toggler\" type=\"button\">\n                <span class=\"navbar-toggler-bar bar1\"></span>\n                <span class=\"navbar-toggler-bar bar2\"></span>\n                <span class=\"navbar-toggler-bar bar3\"></span>\n            </button>\n        </div>\n        <div class=\"navbar-collapse\">\n            <ul class=\"navbar-nav\">\n                <li class=\"nav-item\">\n                    <a class=\"nav-link\" routerLink=\"/dashboard/main\">Home</a>\n                </li>\n                <li class=\"nav-item\">\n                    <a class=\"nav-link\" href=\"javascript:void(0);\">Search Result</a>\n                </li>\n                <li class=\"nav-item\">\n                    <a class=\"nav-link\" title=\"Follow us on Twitter\" href=\"javascript:void(0);\" target=\"_blank\">\n                        <i class=\"zmdi zmdi-twitter\"></i>\n                        <p class=\"d-lg-none d-xl-none\">Twitter</p>\n                    </a>\n                </li>\n                <li class=\"nav-item\">\n                    <a class=\"nav-link\" title=\"Like us on Facebook\" href=\"javascript:void(0);\" target=\"_blank\">\n                        <i class=\"zmdi zmdi-facebook\"></i>\n                        <p class=\"d-lg-none d-xl-none\">Facebook</p>\n                    </a>\n                </li>\n                <li class=\"nav-item\">\n                    <a class=\"nav-link\" title=\"Follow us on Instagram\" href=\"javascript:void(0);\" target=\"_blank\">                        \n                        <i class=\"zmdi zmdi-instagram\"></i>\n                        <p class=\"d-lg-none d-xl-none\">Instagram</p>\n                    </a>\n                </li>                \n                <li class=\"nav-item\">\n                    <a class=\"nav-link btn btn-white btn-round\" routerLink=\"/authentication/sign-in\">SIGN IN</a>\n                </li>\n            </ul>\n        </div>\n    </div>\n</nav>\n<!-- End Navbar -->\n<div class=\"page-header\">\n    <div class=\"page-header-image\" style=\"background-image:url(assets/images/login.jpg)\"></div>\n    <div class=\"container\">\n        <div class=\"col-md-12 content-center\">\n            <div class=\"card-plain\">\n                <form class=\"form\" method=\"\" action=\"\">\n                    <div class=\"header\">\n                        <div class=\"logo-container\">\n                            <img src=\"assets/images/logo.svg\" alt=\"\">\n                        </div>\n                        <h5>Error 500</h5>\n                        <span>Something's broken :-(</span>\n                    </div>\n                    <div class=\"content\">\n                        <div class=\"input-group input-lg\">\n                            <input type=\"text\" class=\"form-control\" placeholder=\"Search...\">\n                            <span class=\"input-group-addon\">\n                                <i class=\"zmdi zmdi-search\"></i>\n                            </span>\n                        </div>\n                    </div>\n                    <div class=\"footer text-center\">\n                        <a routerLink=\"/dashboard/main\" class=\"btn btn-primary btn-round btn-lg btn-block waves-effect waves-light\">GO TO HOMEPAGE</a>\n                        <h5><a href=\"javascript:void(0);\" class=\"link\">Need Help?</a></h5>\n                    </div>\n                </form>\n            </div>\n        </div>\n    </div>\n    <footer class=\"footer\">\n        <div class=\"container\">\n            <nav>\n                <ul>\n                    <li><a href=\"http://thememakker.com/contact/\" target=\"_blank\">Contact Us</a></li>\n                    <li><a href=\"http://thememakker.com/about/\" target=\"_blank\">About Us</a></li>\n                    <li><a href=\"javascript:void(0);\">FAQ</a></li>\n                </ul>\n            </nav>\n            <div class=\"copyright\">\n                &copy; {{year}},\n                <span>Designed by <a href=\"http://thememakker.com/\" target=\"_blank\">ThemeMakker</a></span>\n            </div>\n        </div>\n    </footer>\n</div>"

/***/ }),

/***/ "./src/app/authentication/page500/page500.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/authentication/page500/page500.component.ts ***!
  \*************************************************************/
/*! exports provided: Page500Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Page500Component", function() { return Page500Component; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var Page500Component = /** @class */ (function () {
    function Page500Component() {
        this.year = (new Date()).getFullYear();
    }
    Page500Component.prototype.ngOnInit = function () {
        $(".navbar-toggler").on('click', function () {
            $("html").toggleClass("nav-open");
        });
        $("body").addClass("authentication sidebar-collapse");
    };
    Page500Component = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-page500',
            template: __webpack_require__(/*! ./page500.component.html */ "./src/app/authentication/page500/page500.component.html"),
            styles: [__webpack_require__(/*! ./page500.component.css */ "./src/app/authentication/page500/page500.component.css")],
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None
        }),
        __metadata("design:paramtypes", [])
    ], Page500Component);
    return Page500Component;
}());



/***/ }),

/***/ "./src/app/authentication/sing-in/sing-in.component.css":
/*!**************************************************************!*\
  !*** ./src/app/authentication/sing-in/sing-in.component.css ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".authentication .n_logo{display:inline-block}.authentication .navbar{width:100%;background:transparent !important}.authentication .navbar a:not(.btn){font-size:14px !important;text-transform:none !important}.authentication .navbar-nav li a i{vertical-align:middle}.authentication .navbar-nav li .btn{line-height:20px !important}.authentication .checkbox label{font-size:13px}@media screen and (min-width: 992px){.authentication .navbar-collapse{float:right}.authentication .navbar-collapse .navbar-nav{display:inline-block}.authentication .navbar-collapse .navbar-nav li{display:inline-block}}@media only screen and (max-width: 767px){.authentication .footer nav{display:block;float:none}}"

/***/ }),

/***/ "./src/app/authentication/sing-in/sing-in.component.html":
/*!***************************************************************!*\
  !*** ./src/app/authentication/sing-in/sing-in.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- Navbar -->\n\n    <!-- End Navbar -->\n    <div class=\"page-header\">\n    <div class=\"page-header-image\" style=\"background-image:url(assets/images/login.jpg)\"></div>\n    <div class=\"container\">\n        \n        <div class=\"col-md-12 content-center\">\n            <div class=\"card-plain\">\n              \n                  \n                \n                <form  ngNativeValidate   class=\"needs-validation\" #formu=\"ngForm\">\n                    \n                    <div class=\"header\">\n                        <div class=\"logo-container\">\n                            <img src=\"assets/images/logo.svg\" alt=\"\">\n                        </div>\n                        <h5>Log in</h5>\n                    </div>\n                    \n            <p *ngIf=\"mensaje\" class=\"alert alert-danger\" role=\"alert\">{{mensaje}}</p>\n                    <div class=\"content\">                                                \n                        <div class=\"input-group input-lg\">\n                            <input [(ngModel)]=\"form.login\"     name=\"login\" type=\"password\" class=\"form-control\" placeholder=\"Usuario\" required>\n                          \n                            <span class=\"input-group-addon\">\n                                <i class=\"zmdi zmdi-account-circle\"></i>\n                            </span>\n                        </div>\n         \n                            <!--  <hr>       <pre> Estado Dirty: {{ form.login.dirty }}</pre>       <pre> Estado Pristine: {{ form.login.pristine }}</pre>       <pre> Estado Touched: {{ form.login.touched }}</pre>       <pre> Estado Valid: {{ form.login.valid }}</pre>       <pre> Estado Invalid: {{ form.login.invalid}}</pre> -->\n                        \n                            <div class=\"input-group input-lg\">\n                                <input type=\"password\"  [(ngModel)]=\"form.password\" name =\"password\"  placeholder=\"contraseña\" class=\"form-control\" required>\n                                <span class=\"input-group-addon\">\n                                    <i class=\"zmdi zmdi-lock\"></i>\n                                </span>\n                            </div>\n    \n                       \n                    </div>\n                    <div class=\"footer text-center\">\n                        <button type=\"submit\" (click)=\"validaruser(formu)\" class=\"btn btn-primary btn-round btn-lg btn-block \">INICIAR SESION</button>\n                     </div>\n                </form>\n             \n\n                \n                \n            </div>\n        </div>\n    </div>\n    <footer class=\"footer\">\n        <div class=\"container\">\n           \n            <div class=\"copyright\">\n                &copy;{{year}},\n                <span>Desarrollado por Jose Flores V.</span>\n            </div>\n        </div>\n        \n    </footer>\n    </div>"

/***/ }),

/***/ "./src/app/authentication/sing-in/sing-in.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/authentication/sing-in/sing-in.component.ts ***!
  \*************************************************************/
/*! exports provided: SingInComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SingInComponent", function() { return SingInComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _authentication_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../authentication.service */ "./src/app/authentication/authentication.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var SingInComponent = /** @class */ (function () {
    function SingInComponent(router, authenticationService, fb) {
        this.router = router;
        this.authenticationService = authenticationService;
        this.fb = fb;
        this.login = '';
        this.form = {
            login: '',
            password: ''
        };
        this.year = (new Date()).getFullYear();
        this.yearold = new Date("2013-09-02").getFullYear();
        this.mivariable = 'd3';
        console.log(this.mivariable);
    }
    SingInComponent.prototype.recargar = function () {
        return true;
    };
    SingInComponent.prototype.ngOnInit = function () {
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
        $("body").addClass("authentication sidebar-collapse");
        $(".navbar-toggler").on('click', function () {
            $("html").toggleClass("nav-open");
        });
        $('.form-control').on("focus", function () {
            $(this).parent('.input-group').addClass("input-group-focus");
        }).on("blur", function () {
            $(this).parent(".input-group").removeClass("input-group-focus");
        });
    };
    SingInComponent.prototype.validaruser = function (formu) {
        var _this = this;
        console.log(this.form.login + " " + this.form.password);
        if (formu.valid) {
            this.authenticationService.login(this.form).subscribe(function (user) {
                if (user != null) {
                    console.log(user);
                    _this.router.navigate(['/dashboard/main']);
                    // window.location.href='http://localhost:4200/dashboard/main'
                }
                else {
                    console.log('lafjkldfjasdkljf');
                    _this.router.navigate(['/authentication/sign-in']);
                    _this.mensaje = 'usuario/contraseña incorrectos';
                }
            }, function (error) {
                console.log('lpm');
                _this.router.navigate(['/authentication/sign-in']);
                _this.mensaje = 'usuario/contraseña incorrectos';
            });
        }
        else {
            console.log("klp");
        }
    };
    SingInComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-sing-in',
            template: __webpack_require__(/*! ./sing-in.component.html */ "./src/app/authentication/sing-in/sing-in.component.html"),
            styles: [__webpack_require__(/*! ./sing-in.component.css */ "./src/app/authentication/sing-in/sing-in.component.css")],
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _authentication_service__WEBPACK_IMPORTED_MODULE_1__["AuthenticationService"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"]])
    ], SingInComponent);
    return SingInComponent;
}());



/***/ }),

/***/ "./src/app/authentication/sing-up/sing-up.component.css":
/*!**************************************************************!*\
  !*** ./src/app/authentication/sing-up/sing-up.component.css ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".authentication .n_logo{display:inline-block}.authentication .navbar{width:100%;background:transparent !important}.authentication .navbar a:not(.btn){font-size:14px !important;text-transform:none !important}.authentication .navbar-nav li a i{vertical-align:middle}.authentication .navbar-nav li .btn{line-height:20px !important}.authentication .checkbox label{font-size:13px}@media screen and (min-width: 992px){.authentication .navbar-collapse{float:right}.authentication .navbar-collapse .navbar-nav{display:inline-block}.authentication .navbar-collapse .navbar-nav li{display:inline-block}}@media only screen and (max-width: 767px){.authentication .footer nav{display:block;float:none}}"

/***/ }),

/***/ "./src/app/authentication/sing-up/sing-up.component.html":
/*!***************************************************************!*\
  !*** ./src/app/authentication/sing-up/sing-up.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- Navbar -->\n<nav class=\"navbar navbar-expand-lg fixed-top navbar-transparent\">\n<div class=\"container\">        \n    <div class=\"navbar-translate n_logo\">\n        <a class=\"navbar-brand\" href=\"javascript:void(0);\" title=\"\" target=\"_blank\">Oreo</a>\n        <button class=\"navbar-toggler\" type=\"button\">\n            <span class=\"navbar-toggler-bar bar1\"></span>\n            <span class=\"navbar-toggler-bar bar2\"></span>\n            <span class=\"navbar-toggler-bar bar3\"></span>\n        </button>\n    </div>\n    <div class=\"navbar-collapse\">\n        <ul class=\"navbar-nav\">\n            <li class=\"nav-item\">\n                <a class=\"nav-link\" routerLink=\"/dashboard/main\">Home</a>\n            </li>\n            <li class=\"nav-item\">\n                <a class=\"nav-link\" href=\"javascript:void(0);\">Search Result</a>\n            </li>\n            <li class=\"nav-item\">\n                <a class=\"nav-link\" title=\"Follow us on Twitter\" href=\"javascript:void(0);\" target=\"_blank\">\n                    <i class=\"zmdi zmdi-twitter\"></i>\n                    <p class=\"d-lg-none d-xl-none\">Twitter</p>\n                </a>\n            </li>\n            <li class=\"nav-item\">\n                <a class=\"nav-link\" title=\"Like us on Facebook\" href=\"javascript:void(0);\" target=\"_blank\">\n                    <i class=\"zmdi zmdi-facebook\"></i>\n                    <p class=\"d-lg-none d-xl-none\">Facebook</p>\n                </a>\n            </li>\n            <li class=\"nav-item\">\n                <a class=\"nav-link\" title=\"Follow us on Instagram\" href=\"javascript:void(0);\" target=\"_blank\">                        \n                    <i class=\"zmdi zmdi-instagram\"></i>\n                    <p class=\"d-lg-none d-xl-none\">Instagram</p>\n                </a>\n            </li>                \n            <li class=\"nav-item\">\n                <a class=\"nav-link btn btn-white btn-round\" routerLink=\"/authentication/sign-in\">SIGN IN</a>\n            </li>\n        </ul>\n    </div>\n</div>\n</nav>\n<!-- End Navbar -->\n<div class=\"page-header\">\n<div class=\"page-header-image\" style=\"background-image:url(assets/images/login.jpg)\"></div>\n<div class=\"container\">\n    <div class=\"col-md-12 content-center\">\n        <div class=\"card-plain\">\n            <form  ngNativeValidate   class=\"needs-validation\">\n                <div class=\"header\">\n                    <div class=\"logo-container\">\n                        <img src=\"assets/images/logo.svg\" alt=\"\">\n                    </div>\n                    <h5>Sign Up</h5>\n                    <span>Register a new membership</span>\n                </div>\n                <div class=\"content\">                                                \n                    <div class=\"input-group\">\n                        <input type=\"text\" class=\"form-control\" placeholder=\"Enter User Name\">\n                        <span class=\"input-group-addon\">\n                            <i class=\"zmdi zmdi-account-circle\"></i>\n                        </span>\n                    </div>\n                    <div class=\"input-group\">\n                        <input type=\"text\" class=\"form-control\" placeholder=\"Enter Email\">\n                        <span class=\"input-group-addon\">\n                            <i class=\"zmdi zmdi-email\"></i>\n                        </span>\n                    </div>\n                    <div class=\"input-group\">\n                        <input type=\"password\" placeholder=\"Password\" class=\"form-control\" />\n                        <span class=\"input-group-addon\">\n                            <i class=\"zmdi zmdi-lock\"></i>\n                        </span>\n                    </div>\n                    <div class=\"input-group\">\n                        <input type=\"password\" placeholder=\"Confirm Password\" class=\"form-control\" />\n                        <span class=\"input-group-addon\">\n                            <i class=\"zmdi zmdi-lock\"></i>\n                        </span>\n                    </div>                        \n                </div>\n                <div class=\"checkbox\">\n                        <input id=\"terms\" type=\"checkbox\">\n                        <label for=\"terms\">\n                                I read and agree to the <a href=\"javascript:void(0);\">terms of usage</a>\n                        </label>\n                    </div>\n                <div class=\"footer text-center\">\n                    <a routerLink=\"/dashboard/main\" class=\"btn btn-primary btn-round btn-lg btn-block waves-effect waves-light\">SIGN UP</a>\n                    <h5><a class=\"link\" routerLink=\"/authentication/sign-in\">You already have a membership?</a></h5>\n                </div>\n            </form>\n        </div>\n    </div>\n</div>\n<footer class=\"footer\">\n    <div class=\"container\">\n        <nav>\n            <ul>\n                <li><a href=\"http://thememakker.com/contact/\" target=\"_blank\">Contact Us</a></li>\n                <li><a href=\"http://thememakker.com/about/\" target=\"_blank\">About Us</a></li>\n                <li><a href=\"javascript:void(0);\">FAQ</a></li>\n            </ul>\n        </nav>\n        <div class=\"copyright\">\n            &copy; {{year}},\n            <span>Designed by <a href=\"http://thememakker.com/\" target=\"_blank\">ThemeMakker</a></span>\n        </div>\n    </div>\n</footer>\n</div>\n"

/***/ }),

/***/ "./src/app/authentication/sing-up/sing-up.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/authentication/sing-up/sing-up.component.ts ***!
  \*************************************************************/
/*! exports provided: SingUpComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SingUpComponent", function() { return SingUpComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SingUpComponent = /** @class */ (function () {
    function SingUpComponent() {
        this.year = (new Date()).getFullYear();
    }
    SingUpComponent.prototype.ngOnInit = function () {
        $(".navbar-toggler").on('click', function () {
            $("html").toggleClass("nav-open");
        });
        $("body").addClass("authentication sidebar-collapse");
    };
    SingUpComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-sing-up',
            template: __webpack_require__(/*! ./sing-up.component.html */ "./src/app/authentication/sing-up/sing-up.component.html"),
            styles: [__webpack_require__(/*! ./sing-up.component.css */ "./src/app/authentication/sing-up/sing-up.component.css")],
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None
        }),
        __metadata("design:paramtypes", [])
    ], SingUpComponent);
    return SingUpComponent;
}());



/***/ })

}]);
//# sourceMappingURL=app-authentication-authentication-module.js.map