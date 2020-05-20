var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormAdvancedComponent } from './form-advanced/form-advanced.component';
import { FormBasicComponent } from './form-basic/form-basic.component';
import { FormExamplesComponent } from './form-examples/form-examples.component';
import { FormUploadComponent } from './form-upload/form-upload.component';
import { FormValidationComponent } from './form-validation/form-validation.component';
import { FormWizardComponent } from './form-wizard/form-wizard.component';
import { FormEditorsComponent } from './form-editors/form-editors.component';
var routes = [
    {
        path: 'form-advanced',
        component: FormAdvancedComponent
    },
    {
        path: 'form-basic',
        component: FormBasicComponent
    },
    {
        path: 'form-examples',
        component: FormExamplesComponent
    },
    {
        path: 'form-editors',
        component: FormEditorsComponent
    },
    {
        path: 'form-upload',
        component: FormUploadComponent
    },
    {
        path: 'form-validation',
        component: FormValidationComponent
    },
    {
        path: 'form-wizard',
        component: FormWizardComponent
    },
    {
        path: '',
        redirectTo: 'dashboard',
        pathMatch: 'full'
    }
];
var FormsRoutingModule = /** @class */ (function () {
    function FormsRoutingModule() {
    }
    FormsRoutingModule = __decorate([
        NgModule({
            imports: [RouterModule.forChild(routes)],
            exports: [RouterModule]
        })
    ], FormsRoutingModule);
    return FormsRoutingModule;
}());
export { FormsRoutingModule };
//# sourceMappingURL=forms-routing.module.js.map