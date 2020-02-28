// import { GRPC_CHAT_SERVICE_CLIENT_SETTINGS } from './../proto/chat-service.pbconf';
// import { GrpcStandardClientFactory, GRPC_CLIENT_FACTORY } from '@ngx-grpc/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ChatService } from './chat.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NbThemeModule, NbLayoutModule, NbChatModule } from '@nebular/theme';
import { NbEvaIconsModule } from '@nebular/eva-icons';
import { ChatComponent } from './chat/chat.component';

@NgModule({
  declarations: [
    AppComponent,
    ChatComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NbThemeModule.forRoot({ name: 'cosmic' }),
    NbLayoutModule,
    NbEvaIconsModule,
    NbChatModule
  ],
  providers: [
    ChatService
    // { provide: GRPC_CLIENT_FACTORY, useClass: GrpcStandardClientFactory },
    // { provide: GRPC_CHAT_SERVICE_CLIENT_SETTINGS, useValue: { host: 'http://localhost:1337', format: 'binary' } },
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  bootstrap: [AppComponent]
})
export class AppModule { }
