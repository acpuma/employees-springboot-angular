import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DepartmentsRoutingModule } from './departments-routing.module';
import { DepartmentsDetailComponent } from './detail/departments-detail.component';
import {FormsModule} from "@angular/forms";
import { DepartmentsDeleteComponent } from './delete/departments-delete.component';


@NgModule({
  declarations: [
    DepartmentsDetailComponent,
    DepartmentsDeleteComponent
  ],
  exports: [
    DepartmentsDetailComponent
  ],
  imports: [
    CommonModule,
    DepartmentsRoutingModule,
    FormsModule
  ]
})
export class DepartmentsModule { }
