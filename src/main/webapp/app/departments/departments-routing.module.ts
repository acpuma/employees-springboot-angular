import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {DepartmentsDetailComponent} from "./detail/departments-detail.component";
import {DepartmentsComponent} from "./list/departments.component";

const routes: Routes = [
  {path: '', component: DepartmentsComponent},
  {path: 'department/:id/view', component: DepartmentsDetailComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DepartmentsRoutingModule { }
