var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BlankPageComponent } from './blank-page/blank-page.component';
import { ProfileComponent } from './profile/profile.component';
import { TimelineComponent } from './timeline/timeline.component';
import { PricingComponent } from './pricing/pricing.component';
import { InvoiceComponent } from './invoice/invoice.component';
import { SearchResultsComponent } from './search-results/search-results.component';
import { GalleryComponent } from './gallery/gallery.component';
var routes = [
    {
        path: 'blank-page',
        component: BlankPageComponent
    },
    {
        path: 'profile',
        component: ProfileComponent
    },
    {
        path: 'gallery',
        component: GalleryComponent
    },
    {
        path: 'timeline',
        component: TimelineComponent
    },
    {
        path: 'pricing',
        component: PricingComponent
    },
    {
        path: 'invoices',
        component: InvoiceComponent
    },
    {
        path: 'search-results',
        component: SearchResultsComponent
    },
    {
        path: '',
        redirectTo: 'blank-page',
        pathMatch: 'full'
    }
];
var SamplePagesRoutingModule = /** @class */ (function () {
    function SamplePagesRoutingModule() {
    }
    SamplePagesRoutingModule = __decorate([
        NgModule({
            imports: [RouterModule.forChild(routes)],
            exports: [RouterModule]
        })
    ], SamplePagesRoutingModule);
    return SamplePagesRoutingModule;
}());
export { SamplePagesRoutingModule };
//# sourceMappingURL=sample-pages-routing.module.js.map