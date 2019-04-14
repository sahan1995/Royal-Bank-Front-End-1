import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LoginComponent} from "./login/login.component";
import {AdminComponent} from "./admin/admin.component";
import {RegisteremployeeComponent} from "./registeremployee/registeremployee.component";

const routes: Routes = [
  {path:'',redirectTo:'home',pathMatch:'full'},
  {path:'',component:LoginComponent},
  {path:'admin',component:AdminComponent},
  {path:'empRegister',component:RegisteremployeeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [LoginComponent,AdminComponent,RegisteremployeeComponent];
