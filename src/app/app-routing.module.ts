import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LoginComponent} from "./login/login.component";
import {AdminComponent} from "./admin/admin.component";
import {RegisteremployeeComponent} from "./registeremployee/registeremployee.component";
import {EmphomeComponent} from "./emphome/emphome.component";
import {CreateaccountComponent} from "./createaccount/createaccount.component";
import {WithdrawComponent} from "./withdraw/withdraw.component";
import {SendmoneyComponent} from "./sendmoney/sendmoney.component";

const routes: Routes = [
  {path:'',redirectTo:'home',pathMatch:'full'},
  {path:'',component:LoginComponent},
  {path:'admin',component:AdminComponent},
  {path:'empRegister',component:RegisteremployeeComponent},
  {path:'dashboard',component:EmphomeComponent},
  {path:'createAccount',component:CreateaccountComponent},
  {path:'withdraw',component:WithdrawComponent},
  {path:'sendmoney',component:SendmoneyComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [LoginComponent,AdminComponent,RegisteremployeeComponent,EmphomeComponent,CreateaccountComponent,WithdrawComponent,SendmoneyComponent];
