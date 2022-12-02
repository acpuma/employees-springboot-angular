import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DepartmentsRoutingModule } from './departments-routing.module';
import { DepartmentsDetailComponent } from './detail/departments-detail.component';
import {FormsModule} from "@angular/forms";
import {FontAwesomeModule} from "@fortawesome/angular-fontawesome";


@NgModule({
  declarations: [
    DepartmentsDetailComponent
  ],
  exports: [
    DepartmentsDetailComponent
  ],
  imports: [
    CommonModule,
    DepartmentsRoutingModule,
    FormsModule,
    FontAwesomeModule
  ]
})
export class DepartmentsModule { }
