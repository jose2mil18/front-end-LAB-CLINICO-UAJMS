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
var FormEditorsComponent = /** @class */ (function () {
    function FormEditorsComponent() {
    }
    FormEditorsComponent.prototype.ngOnInit = function () {
        $(function () {
            // CKEditor
            CKEDITOR.replace('ckeditor');
            CKEDITOR.config.height = 300;
        });
    };
    FormEditorsComponent = __decorate([
        Component({
            selector: 'app-form-editors',
            templateUrl: './form-editors.component.html',
            styleUrls: ['./form-editors.component.css']
        }),
        __metadata("design:paramtypes", [])
    ], FormEditorsComponent);
    return FormEditorsComponent;
}());
export { FormEditorsComponent };
//# sourceMappingURL=form-editors.component.js.map