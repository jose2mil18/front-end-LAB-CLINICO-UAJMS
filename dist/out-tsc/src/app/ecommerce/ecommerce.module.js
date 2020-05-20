var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EcommerceRoutingModule } from './ecommerce-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProductComponent } from './product/product.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { ProductListComponent } from './product-list/product-list.component';
var EcommerceModule = /** @class */ (function () {
    function EcommerceModule() {
    }
    EcommerceModule = __decorate([
        NgModule({
            imports: [
                CommonModule,
                EcommerceRoutingModule
            ],
            declarations: [DashboardComponent, ProductComponent, ProductDetailComponent, ProductListComponent]
        })
    ], EcommerceModule);
    return EcommerceModule;
}());
export { EcommerceModule };
//# sourceMappingURL=ecommerce.module.js.map