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
var MailSingleComponent = /** @class */ (function () {
    function MailSingleComponent() {
    }
    MailSingleComponent.prototype.ngOnInit = function () {
        // Collapse or Expand Menu
        $('.menu-toggle').on('click', function (e) {
            var $this = $(this);
            var $content = $this.next();
            if ($($this.parents('ul')[0]).hasClass('list')) {
                var $not = $(e.target).hasClass('menu-toggle') ? e.target : $(e.target).parents('.menu-toggle');
                $.each($('.menu-toggle.toggled').not($not).next(), function (i, val) {
                    if ($(val).is(':visible')) {
                        $(val).prev().toggleClass('toggled');
                        $(val).slideUp();
                    }
                });
            }
            $this.toggleClass('toggled');
            $content.slideToggle(320);
        });
        $('.sidebar .menu .list').slimscroll({
            height: 'calc(100vh - 65px)',
            color: 'rgba(0,0,0,0.2)',
            position: 'left',
            size: '2px',
            alwaysVisible: false,
            borderRadius: '3px',
            railBorderRadius: '0'
        });
    };
    MailSingleComponent = __decorate([
        Component({
            selector: 'app-mail-single',
            templateUrl: './mail-single.component.html',
            styleUrls: ['./mail-single.component.css']
        }),
        __metadata("design:paramtypes", [])
    ], MailSingleComponent);
    return MailSingleComponent;
}());
export { MailSingleComponent };
//# sourceMappingURL=mail-single.component.js.map