var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, ViewEncapsulation } from '@angular/core';
import { AuthenticationService } from '../authentication.service';
import { Router } from '@angular/router';
import { FormBuilder, Validators } from '@angular/forms';
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
        this.loginForm = this.fb.group({
            login: ['', Validators.required]
        });
    }
    SingInComponent.prototype.recargar = function () {
        return true;
    };
    SingInComponent.prototype.ngOnInit = function () {
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
    SingInComponent.prototype.validaruser = function () {
        var _this = this;
        this.authenticationService.login(this.form)
            .subscribe(function (data) {
            console.log(data);
            _this.router.navigate(['/dashboard/main']);
        }, function (error) {
            console.log('lafjkldfjasdkljf');
            _this.router.navigate(['/authentication/sign-in']);
            _this.mensaje = 'username o password incorrectos';
        });
    };
    SingInComponent = __decorate([
        Component({
            selector: 'app-sing-in',
            templateUrl: './sing-in.component.html',
            styleUrls: ['./sing-in.component.css'],
            encapsulation: ViewEncapsulation.None
        }),
        __metadata("design:paramtypes", [Router,
            AuthenticationService, FormBuilder])
    ], SingInComponent);
    return SingInComponent;
}());
export { SingInComponent };
//# sourceMappingURL=sing-in.component.js.map