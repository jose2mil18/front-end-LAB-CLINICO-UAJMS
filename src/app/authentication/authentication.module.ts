import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthenticationRoutingModule } from './authentication-routing.module';
import { SingInComponent } from './sing-in/sing-in.component';
import { SingUpComponent } from './sing-up/sing-up.component';
import { ForgetPasswordComponent } from './forget-password/forget-password.component';
import { Page404Component } from './page404/page404.component';
import { Page500Component } from './page500/page500.component';
import { PageOfflineComponent } from './page-offline/page-offline.component';
import { LockedComponent } from './locked/locked.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import {AuthenticationService} from './authentication.service';

import {FormBuilder, FormGroup, Validators, FormsModule, ReactiveFormsModule } from '@angular/forms';
@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    AuthenticationRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  
  
    
    ReactiveFormsModule
  ],
  declarations: [ SingInComponent, SingUpComponent, ForgetPasswordComponent, Page404Component, Page500Component, PageOfflineComponent, LockedComponent],
    
  providers: [
     
      AuthenticationService
  ],
})
export class AuthenticationModule { }
