var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { UiKitComponent } from './ui-kit/ui-kit.component';
import { AlertComponent } from './alert/alert.component';
import { CollapsedComponent } from './collapsed/collapsed.component';
import { ColorsComponent } from './colors/colors.component';
import { DialogsComponent } from './dialogs/dialogs.component';
import { IconsComponent } from './icons/icons.component';
import { ListGroupComponent } from './list-group/list-group.component';
import { MediaObjectComponent } from './media-object/media-object.component';
import { ModalsComponent } from './modals/modals.component';
import { NotificationsComponent } from './notifications/notifications.component';
import { ProgressBarsComponent } from './progress-bars/progress-bars.component';
import { RangeSlidersComponent } from './range-sliders/range-sliders.component';
import { SortableComponent } from './sortable/sortable.component';
import { TabsComponent } from './tabs/tabs.component';
import { WavesComponent } from './waves/waves.component';
var routes = [
    {
        path: 'ui-kit',
        component: UiKitComponent
    },
    {
        path: 'alerts',
        component: AlertComponent
    },
    {
        path: 'collapsed',
        component: CollapsedComponent
    },
    {
        path: 'colors',
        component: ColorsComponent
    },
    {
        path: 'dialogs',
        component: DialogsComponent
    },
    {
        path: 'icons',
        component: IconsComponent
    },
    {
        path: 'list-groups',
        component: ListGroupComponent
    },
    {
        path: 'media-object',
        component: MediaObjectComponent
    },
    {
        path: 'modals',
        component: ModalsComponent
    },
    {
        path: 'notifications',
        component: NotificationsComponent
    },
    {
        path: 'progressbars',
        component: ProgressBarsComponent
    },
    {
        path: 'range-sliders',
        component: RangeSlidersComponent
    },
    {
        path: 'sortable',
        component: SortableComponent
    },
    {
        path: 'tabs',
        component: TabsComponent
    },
    {
        path: 'waves',
        component: WavesComponent
    },
    {
        path: '',
        redirectTo: 'ui-kit',
        pathMatch: 'full'
    }
];
var UserInterfaceRoutingModule = /** @class */ (function () {
    function UserInterfaceRoutingModule() {
    }
    UserInterfaceRoutingModule = __decorate([
        NgModule({
            imports: [RouterModule.forChild(routes)],
            exports: [RouterModule]
        })
    ], UserInterfaceRoutingModule);
    return UserInterfaceRoutingModule;
}());
export { UserInterfaceRoutingModule };
//# sourceMappingURL=user-interface-routing.module.js.map