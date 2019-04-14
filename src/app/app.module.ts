import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {AppRoutingModule, routingComponents} from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import {FormsModule} from "@angular/forms";
import { AdminComponent } from './admin/admin.component';
import { RegisteremployeeComponent } from './registeremployee/registeremployee.component';

@NgModule({
  declarations: [
    AppComponent,
    routingComponents,
    LoginComponent,
    AdminComponent,
    RegisteremployeeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
