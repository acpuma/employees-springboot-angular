import {Component, Input, OnInit} from '@angular/core';
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
  departmentId?: number | null = null;
  @Input() department?: Department;
  editForm: DepartmentFormGroup = this.formService.createDepartmentFormGroup(this.department);
  constructor(protected service: DepartmentsService,
              protected route : ActivatedRoute,
              protected formService: DepartmentsFormService) {
  }

  ngOnInit(): void {
    console.log(" ID param : " + this.route.snapshot.paramMap.get('id'));
    this.departmentId = Number(this.route.snapshot.paramMap.get('id'));
    if (this.departmentId) {
      this.service.find(this.departmentId).subscribe(dep => {
        this.department = dep;
        console.log("Updating department : " + JSON.stringify(this.department));
        if (this.department) {
          this.editForm = this.formService.createDepartmentFormGroup(this.department);
        }
      });
    }
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
}
