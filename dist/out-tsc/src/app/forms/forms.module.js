var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsRoutingModule } from './forms-routing.module';
import { FormBasicComponent } from './form-basic/form-basic.component';
import { FormAdvancedComponent } from './form-advanced/form-advanced.component';
import { FormExamplesComponent } from './form-examples/form-examples.component';
import { FormValidationComponent } from './form-validation/form-validation.component';
import { FormWizardComponent } from './form-wizard/form-wizard.component';
import { FormEditorsComponent } from './form-editors/form-editors.component';
import { FormUploadComponent } from './form-upload/form-upload.component';
import { DropzoneModule } from 'ngx-dropzone-wrapper';
var FormsModule = /** @class */ (function () {
    function FormsModule() {
    }
    FormsModule = __decorate([
        NgModule({
            imports: [
                CommonModule,
                FormsRoutingModule,
                DropzoneModule
            ],
            declarations: [
                FormBasicComponent,
                FormAdvancedComponent,
                FormExamplesComponent,
                FormValidationComponent,
                FormWizardComponent,
                FormEditorsComponent,
                FormUploadComponent
            ]
        })
    ], FormsModule);
    return FormsModule;
}());
export { FormsModule };
//# sourceMappingURL=forms.module.js.map