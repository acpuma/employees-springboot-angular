import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmployeesDeleteComponent } from './delete/employees-delete.component';
import {EmployeesRoutingModule} from "./employees-routing.module";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {AccountService} from "../core/auth/account.service";
import { EmployeesDetailComponent } from './detail/employees-detail.component';

@NgModule({
  declarations: [
    EmployeesDeleteComponent,
    EmployeesDetailComponent
  ],
  imports: [
    CommonModule,
    EmployeesRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [AccountService]
})
export class EmployeesModule { }
