import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {EmployeesComponent} from "./employees/list/employees.component";
import {DepartmentsComponent} from "./departments/list/departments.component";

const routes: Routes = [
  { path: 'employees-component', component: EmployeesComponent},
  { path: 'departments-component', component: DepartmentsComponent},
  { path: '', redirectTo: '/employees-component', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
