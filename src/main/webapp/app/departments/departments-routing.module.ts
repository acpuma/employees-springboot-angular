import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {DepartmentsDetailComponent} from "./detail/departments-detail.component";
import {DepartmentsComponent} from "./list/departments.component";
import {DepartmentsUpdateComponent} from "./update/departments-update.component";

const routes: Routes = [
  {path: '', component: DepartmentsComponent},
  {path: 'department/:id/view', component: DepartmentsDetailComponent},
  {path: 'department/:id/delete', component: DepartmentsDetailComponent},
  {path: 'department/:id/edit', component: DepartmentsUpdateComponent},
  {path: 'department/new', component: DepartmentsUpdateComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DepartmentsRoutingModule { }
