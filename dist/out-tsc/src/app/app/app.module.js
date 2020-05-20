var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from './app-routing.module';
import { MailInboxComponent } from './mail-inbox/mail-inbox.component';
import { MailComposeComponent } from './mail-compose/mail-compose.component';
import { MailSingleComponent } from './mail-single/mail-single.component';
import { ChatComponent } from './chat/chat.component';
import { ContactComponent } from './contact/contact.component';
import { CalendarComponent } from './calendar/calendar.component';
import { FileDashboardComponent } from './file-dashboard/file-dashboard.component';
import { FileDocumentsComponent } from './file-documents/file-documents.component';
import { FileImagesComponent } from './file-images/file-images.component';
import { FileMediaComponent } from './file-media/file-media.component';
import { BlogDashboardComponent } from './blog-dashboard/blog-dashboard.component';
import { BlogDetailsComponent } from './blog-details/blog-details.component';
import { BlogGridComponent } from './blog-grid/blog-grid.component';
import { BlogListComponent } from './blog-list/blog-list.component';
import { BlogPostComponent } from './blog-post/blog-post.component';
import { DropzoneModule } from 'ngx-dropzone-wrapper';
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        NgModule({
            imports: [
                CommonModule,
                AppRoutingModule,
                DropzoneModule
            ],
            declarations: [
                MailInboxComponent,
                MailComposeComponent,
                MailSingleComponent,
                ChatComponent,
                ContactComponent,
                CalendarComponent,
                FileDashboardComponent,
                FileDocumentsComponent,
                FileImagesComponent,
                FileMediaComponent,
                BlogDashboardComponent,
                BlogDetailsComponent,
                BlogGridComponent,
                BlogListComponent,
                BlogPostComponent,
            ],
            providers: []
        })
    ], AppModule);
    return AppModule;
}());
export { AppModule };
//# sourceMappingURL=app.module.js.map