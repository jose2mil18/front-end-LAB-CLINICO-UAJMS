var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SamplePagesRoutingModule } from './sample-pages-routing.module';
import { BlankPageComponent } from './blank-page/blank-page.component';
import { ProfileComponent } from './profile/profile.component';
import { TimelineComponent } from './timeline/timeline.component';
import { InvoiceComponent } from './invoice/invoice.component';
import { SearchResultsComponent } from './search-results/search-results.component';
import { PricingComponent } from './pricing/pricing.component';
import { GalleryComponent } from './gallery/gallery.component';
var SamplePagesModule = /** @class */ (function () {
    function SamplePagesModule() {
    }
    SamplePagesModule = __decorate([
        NgModule({
            imports: [
                CommonModule,
                SamplePagesRoutingModule
            ],
            declarations: [BlankPageComponent, ProfileComponent, TimelineComponent, InvoiceComponent, SearchResultsComponent, PricingComponent, GalleryComponent]
        })
    ], SamplePagesModule);
    return SamplePagesModule;
}());
export { SamplePagesModule };
//# sourceMappingURL=sample-pages.module.js.map