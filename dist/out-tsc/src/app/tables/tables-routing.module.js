var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { EditableTableComponent } from './editable-table/editable-table.component';
import { NormalComponent } from './normal/normal.component';
import { JqueryDatatableComponent } from './jquery-datatable/jquery-datatable.component';
import { TableColorComponent } from './table-color/table-color.component';
import { FootableComponent } from './footable/footable.component';
var routes = [
    {
        path: 'editable-table',
        component: EditableTableComponent
    },
    {
        path: 'normal',
        component: NormalComponent
    },
    {
        path: 'jquery-datatable',
        component: JqueryDatatableComponent
    },
    {
        path: 'table-color',
        component: TableColorComponent
    },
    {
        path: 'footables',
        component: FootableComponent
    },
    {
        path: '',
        redirectTo: 'normal',
        pathMatch: 'full'
    }
];
var TablesRoutingModule = /** @class */ (function () {
    function TablesRoutingModule() {
    }
    TablesRoutingModule = __decorate([
        NgModule({
            imports: [RouterModule.forChild(routes)],
            exports: [RouterModule]
        })
    ], TablesRoutingModule);
    return TablesRoutingModule;
}());
export { TablesRoutingModule };
//# sourceMappingURL=tables-routing.module.js.map