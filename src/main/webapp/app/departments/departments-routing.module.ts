import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {DepartmentsDetailComponent} from "./detail/departments-detail.component";
import {DepartmentsComponent} from "./list/departments.component";
import {DepartmentsUpdateComponent} from "./update/departments-update.component";
import {UserRouteAccessService} from "../core/auth/user-route-access.service";
import {Authority} from "../core/config/authority.constants";

const routes: Routes = [
  {path: '', component: DepartmentsComponent},
  {path: 'department/:id/view', component: DepartmentsDetailComponent,
    canActivate: [UserRouteAccessService]},
  {path: 'department/:id/delete', component: DepartmentsDetailComponent,
    canActivate: [UserRouteAccessService], data: { role: Authority.EDITOR}},
  {path: 'department/:id/edit', component: DepartmentsUpdateComponent,
    canActivate: [UserRouteAccessService], data: { role: Authority.EDITOR}},
  {path: 'department/new', component: DepartmentsUpdateComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DepartmentsRoutingModule { }
