import { NgModule } from '@angular/core';
import { CommonModule, TitleCasePipe, DatePipe } from '@angular/common';
import {UsuariosService} from './usuarios.service'
import { UsuariosRoutingModule } from './usuarios.routing.module';
import { RegistrarComponent } from './registrar/registrar.component';
import { Observable } from 'rxjs';
//import {MatSelectModule} from '@angular/material/select'

//import {MatOptionModule} from '@angular/material'
import {FormsModule,  ReactiveFormsModule } from '@angular/forms';
import { ModificarComponent } from './modificar/modificar.component';

//import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { NgxPaginationModule } from 'ngx-pagination';
//import {MatFormFieldModule} from '@angular/material/form-field';
import { NgSelectModule } from '@ng-select/ng-select';
import { ListarComponent } from './listar/listar.component'

import { ButtonModule} from 'primeng/primeng';
import {DropdownModule} from 'primeng/dropdown';
import {TableModule} from 'primeng/table';

@NgModule({
  imports: [
    ButtonModule,
    DropdownModule,
    TableModule,
    CommonModule,
    FormsModule,
    UsuariosRoutingModule,
    ReactiveFormsModule,
    NgSelectModule,
    NgxPaginationModule
    
  ],
  declarations: [ RegistrarComponent, ModificarComponent, ListarComponent],
  
  providers: [UsuariosService, DatePipe, TitleCasePipe],
})
export class UsuariosModule { }
