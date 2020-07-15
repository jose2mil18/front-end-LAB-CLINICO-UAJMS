import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';

import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {ButtonModule} from 'primeng/button';
import { NgSelectModule } from '@ng-select/ng-select';
import {FormBuilder, FormGroup, Validators, FormsModule, ReactiveFormsModule } from '@angular/forms';

import { CommonModule, DatePipe, TitleCasePipe} from '@angular/common';
import { ServicioService } from './servicio.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    NgSelectModule,
    FormsModule,
    ReactiveFormsModule,
    ButtonModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule
  ],
  providers: [TitleCasePipe, ServicioService],
  bootstrap: [AppComponent]
})
export class AppModule { }
