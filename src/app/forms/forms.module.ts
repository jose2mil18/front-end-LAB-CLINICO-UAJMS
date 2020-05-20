import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsRoutingModule } from './forms-routing.module';
import { FormBasicComponent } from './form-basic/form-basic.component';
import { FormAdvancedComponent } from './form-advanced/form-advanced.component';
import { FormExamplesComponent } from './form-examples/form-examples.component';
import { FormValidationComponent } from './form-validation/form-validation.component';
import { FormEditorsComponent } from './form-editors/form-editors.component';

import { DropzoneModule } from 'ngx-dropzone-wrapper';

@NgModule({
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
  
      FormEditorsComponent
  ]
})
export class FormsModule { }
