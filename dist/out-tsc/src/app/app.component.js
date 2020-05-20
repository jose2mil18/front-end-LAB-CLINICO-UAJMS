var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, Renderer2, Input, ViewEncapsulation } from '@angular/core';
import { NavigationStart, Router } from '@angular/router';
var AppComponent = /** @class */ (function () {
    function AppComponent(renderer, router) {
        var _this = this;
        this.renderer = renderer;
        this.router = router;
        this.router.events
            .subscribe(function (event) {
            _this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
            _this.i = 0;
            // this.router.navigate(['/dashboard/main']);
            if (event instanceof NavigationStart) {
                if (_this.previousUrl) {
                    _this.renderer.removeClass(document.body, _this.previousUrl);
                }
                var currentUrl = event.url.split('/');
                var currentUrlSlug = currentUrl[currentUrl.length - 1];
                if (currentUrlSlug) {
                    _this.renderer.addClass(document.body, currentUrlSlug);
                }
                _this.previousUrl = currentUrlSlug;
                // this.router.navigate(['/dashboard/main']);
            }
        });
    }
    AppComponent.prototype.Logout = function () {
        localStorage.removeItem('currentUser');
        this.router.navigate(['/authentication/sign-in']);
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
    };
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], AppComponent.prototype, "usuarioActual", void 0);
    AppComponent = __decorate([
        Component({
            selector: 'app-root',
            templateUrl: './app.component.html',
            styleUrls: ['./app.component.css'],
            encapsulation: ViewEncapsulation.None
        }),
        __metadata("design:paramtypes", [Renderer2, Router])
    ], AppComponent);
    return AppComponent;
}());
export { AppComponent };
//# sourceMappingURL=app.component.js.map