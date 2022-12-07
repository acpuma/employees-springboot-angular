import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DepartmentsRoutingModule } from './departments-routing.module';
import { DepartmentsDetailComponent } from './detail/departments-detail.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { DepartmentsDeleteComponent } from './delete/departments-delete.component';
import { DepartmentsUpdateComponent } from './update/departments-update.component';


@NgModule({
  declarations: [
    DepartmentsDetailComponent,
    DepartmentsDeleteComponent,
    DepartmentsUpdateComponent
  ],
    exports: [
        DepartmentsDetailComponent,
        DepartmentsUpdateComponent
    ],
    imports: [
        CommonModule,
        DepartmentsRoutingModule,
        FormsModule,
        ReactiveFormsModule
    ]
})
export class DepartmentsModule { }
