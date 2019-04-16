import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {AppRoutingModule, routingComponents} from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import {FormsModule} from "@angular/forms";
import { AdminComponent } from './admin/admin.component';
import { RegisteremployeeComponent } from './registeremployee/registeremployee.component';
import {HttpClientModule} from "@angular/common/http";
import { EmphomeComponent } from './emphome/emphome.component';
import { CreateaccountComponent } from './createaccount/createaccount.component';
import { WithdrawComponent } from './withdraw/withdraw.component';
import { SendmoneyComponent } from './sendmoney/sendmoney.component';

@NgModule({
  declarations: [
    AppComponent,
    routingComponents,
    LoginComponent,
    AdminComponent,
    RegisteremployeeComponent,
    EmphomeComponent,
    CreateaccountComponent,
    WithdrawComponent,
    SendmoneyComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
