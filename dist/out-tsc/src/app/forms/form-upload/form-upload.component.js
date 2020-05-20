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
var FormUploadComponent = /** @class */ (function () {
    function FormUploadComponent() {
        this.config = {
            url: 'https://httpbin.org/post',
            maxFiles: 10,
            clickable: true,
            uploadMultiple: true,
            acceptedFiles: 'image/*',
            createImageThumbnails: true
        };
    }
    FormUploadComponent.prototype.ngOnInit = function () {
    };
    FormUploadComponent = __decorate([
        Component({
            selector: 'app-form-upload',
            templateUrl: './form-upload.component.html',
            styleUrls: ['./form-upload.component.css'],
            encapsulation: ViewEncapsulation.None
        }),
        __metadata("design:paramtypes", [])
    ], FormUploadComponent);
    return FormUploadComponent;
}());
export { FormUploadComponent };
//# sourceMappingURL=form-upload.component.js.map