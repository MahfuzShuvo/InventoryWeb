import { HttpClient } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { ToastrModule, ToastrService } from 'ngx-toastr';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AlertService } from './common/alert/alert.service';
import { AuthGuard } from './common/auth/auth.guard';
import { AuthGuardService } from './common/auth/auth.guard.service';
import { HttpHelper } from './common/http/httpHelper';
import { MessageHelper } from './common/message/messageHelper';
import { HeaderService } from './services/header.service';
import { SharedModule } from './shared.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    SharedModule.forRoot(),
    ToastrModule.forRoot()
  ],
  providers: [
    AlertService,
    HttpHelper,
    MessageHelper,
    ToastrService,
    AuthGuard,
    AuthGuardService,
    HttpClient,
    HeaderService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
