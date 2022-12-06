import {Component, OnInit} from '@angular/core';
import {Department} from "../department.model";
import {DepartmentsService} from "../departments.service";
import {ActivatedRoute} from "@angular/router";
import {DepartmentFormGroup, DepartmentsFormService} from "./departments-form.service";
import {finalize, Observable} from "rxjs";

@Component({
  selector: 'app-departments-update',
  templateUrl: './departments-update.component.html'
})
export class DepartmentsUpdateComponent implements OnInit{
  isSaving = false;
  department: Department | null = null;
  editForm: DepartmentFormGroup = this.formService.createDepartmentFormGroup();
  constructor(protected service: DepartmentsService,
              protected route : ActivatedRoute,
              protected formService: DepartmentsFormService) {
  }

  ngOnInit(): void {
    this.route.data.subscribe(({department}) => {
      this.department = department;
      console.log("Updating department : " + JSON.stringify(department))
      if (department) {
        this.updateForm(department);
      }
    });
  }

  previousState(): void {
    window.history.back();
  }

  save(): void {
    this.isSaving = true;
    const department = this.formService.getDepartment(this.editForm);
    if (department.id !== null) {
      this.subscribeToSaveResponse(this.service.update(department));
    } else {
      this.subscribeToSaveResponse(this.service.create(department))
    }
  }

  private subscribeToSaveResponse(result: Observable<Department>): void {
    result.pipe(finalize(() => this.isSaving =false)).subscribe({
      next: () => this.previousState(),
      error: () => console.error('subscribeToSaveResponse error')
    });
  }


  private updateForm(department: Department) {
    this.department = department;
    this.formService.resetForm(this.editForm, department);
  }
}
