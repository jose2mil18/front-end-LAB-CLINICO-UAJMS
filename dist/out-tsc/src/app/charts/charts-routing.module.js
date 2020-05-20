var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MorrisComponent } from './morris/morris.component';
import { FlotComponent } from './flot/flot.component';
import { ChartjsComponent } from './chartjs/chartjs.component';
import { SparklineComponent } from './sparkline/sparkline.component';
import { JqueryKnobComponent } from './jquery-knob/jquery-knob.component';
var routes = [
    {
        path: 'morris',
        component: MorrisComponent
    },
    {
        path: 'flot',
        component: FlotComponent
    },
    {
        path: 'chartjs',
        component: ChartjsComponent
    },
    {
        path: 'sparklines',
        component: SparklineComponent
    },
    {
        path: 'jquery-knob',
        component: JqueryKnobComponent
    },
    {
        path: '',
        redirectTo: 'morris',
        pathMatch: 'full'
    }
];
var ChartsRoutingModule = /** @class */ (function () {
    function ChartsRoutingModule() {
    }
    ChartsRoutingModule = __decorate([
        NgModule({
            imports: [RouterModule.forChild(routes)],
            exports: [RouterModule]
        })
    ], ChartsRoutingModule);
    return ChartsRoutingModule;
}());
export { ChartsRoutingModule };
//# sourceMappingURL=charts-routing.module.js.map