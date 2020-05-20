var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChartsRoutingModule } from './charts-routing.module';
import { MorrisComponent } from './morris/morris.component';
import { FlotComponent } from './flot/flot.component';
import { ChartjsComponent } from './chartjs/chartjs.component';
import { SparklineComponent } from './sparkline/sparkline.component';
import { JqueryKnobComponent } from './jquery-knob/jquery-knob.component';
var ChartsModule = /** @class */ (function () {
    function ChartsModule() {
    }
    ChartsModule = __decorate([
        NgModule({
            imports: [
                CommonModule,
                ChartsRoutingModule
            ],
            declarations: [MorrisComponent, FlotComponent, ChartjsComponent, SparklineComponent, JqueryKnobComponent]
        })
    ], ChartsModule);
    return ChartsModule;
}());
export { ChartsModule };
//# sourceMappingURL=charts.module.js.map