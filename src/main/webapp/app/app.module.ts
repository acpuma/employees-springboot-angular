import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmployeesComponent } from './employees/list/employees.component';
import { DepartmentsComponent } from './departments/list/departments.component';
import {FormsModule} from "@angular/forms";
import { DepartmentsModule } from './departments/departments.module';
import { HttpClientModule } from '@angular/common/http';
import {NgbDropdown, NgbDropdownItem, NgbDropdownMenu, NgbDropdownToggle} from "@ng-bootstrap/ng-bootstrap";

@NgModule({
  declarations: [
    AppComponent,
    EmployeesComponent,
    DepartmentsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    DepartmentsModule,
    HttpClientModule,
    NgbDropdown,
    NgbDropdownMenu,
    NgbDropdownItem,
    NgbDropdownToggle
  ],
  providers: [],
  bootstrap: [AppComponent]

})
export class AppModule {
}
