var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserInterfaceRoutingModule } from './user-interface-routing.module';
import { UiKitComponent } from './ui-kit/ui-kit.component';
import { AlertComponent } from './alert/alert.component';
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
import { CollapsedComponent } from './collapsed/collapsed.component';
var UserInterfaceModule = /** @class */ (function () {
    function UserInterfaceModule() {
    }
    UserInterfaceModule = __decorate([
        NgModule({
            imports: [
                CommonModule,
                UserInterfaceRoutingModule
            ],
            declarations: [UiKitComponent,
                AlertComponent,
                ColorsComponent,
                DialogsComponent,
                IconsComponent,
                ListGroupComponent,
                MediaObjectComponent,
                ModalsComponent,
                NotificationsComponent,
                ProgressBarsComponent,
                RangeSlidersComponent,
                SortableComponent,
                TabsComponent,
                WavesComponent,
                CollapsedComponent]
        })
    ], UserInterfaceModule);
    return UserInterfaceModule;
}());
export { UserInterfaceModule };
//# sourceMappingURL=user-interface.module.js.map