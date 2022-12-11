import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {UserRouteAccessService} from "../core/auth/user-route-access.service";
import {Authority} from "../core/config/authority.constants";
import {EmployeesComponent} from "./list/employees.component";
import {EmployeesDeleteComponent} from "./delete/employees-delete.component";

const routes: Routes = [
  {path: '', component: EmployeesComponent},
  {path: 'employee/:id/delete', component: EmployeesDeleteComponent,
    canActivate: [UserRouteAccessService], data: { role: Authority.EDITOR}},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmployeesRoutingModule { }
