import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {EmployeesComponent} from './employees/list/employees.component';
import {DepartmentsComponent} from './departments/list/departments.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {DepartmentsModule} from './departments/departments.module';
import {HttpClientModule} from '@angular/common/http';
import {NgbDropdown, NgbDropdownItem, NgbDropdownMenu, NgbDropdownToggle} from "@ng-bootstrap/ng-bootstrap";
import {EmployeesModule} from "./employees/employees.module";
import {LoginComponent} from "./login/login.component";
import {LoginModule} from "./login/login.module";

@NgModule({
  declarations: [
    AppComponent,
    EmployeesComponent,
    DepartmentsComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    DepartmentsModule,
    EmployeesModule,
    LoginModule,
    HttpClientModule,
    NgbDropdown,
    NgbDropdownMenu,
    NgbDropdownItem,
    NgbDropdownToggle,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]

})
export class AppModule {
}
