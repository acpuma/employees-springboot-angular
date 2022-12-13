import {Component, Input, OnInit} from '@angular/core';
import {Employee} from "../employee.model";
import {EmployeeFormGroup, EmployeesFormService} from "./employees-form.service";
import {EmployeesService} from "../employees.service";
import {ActivatedRoute} from "@angular/router";
import {finalize, Observable} from "rxjs";
import {Department} from "../../departments/department.model";
import {DepartmentsService} from "../../departments/departments.service";

@Component({
  selector: 'app-employees-update',
  templateUrl: './employees-update.component.html'
})
export class EmployeesUpdateComponent implements OnInit{
  isSaving = false;
  employeeId?: number | null = null;
  departmentsSharedCollection: Department[] = [];
  @Input() employee?: Employee;
  editForm: EmployeeFormGroup = this.formService.createEmployeeFormGroup(this.employee);
  constructor(protected service: EmployeesService,
              protected route: ActivatedRoute,
              protected formService: EmployeesFormService,
              protected departmentService: DepartmentsService) {
  }

  ngOnInit(): void {
    console.log("ID param: " + this.route.snapshot.paramMap.get('id'));
    this.employeeId = Number(this.route.snapshot.paramMap.get('id'));
    if (this.employeeId) {
      this.service.find(this.employeeId).subscribe( emp => {
        this.employee = emp;
        console.log("Updating employee : " + JSON.stringify(this.employee));
        if (this.employee) {
          this.editForm = this.formService.createEmployeeFormGroup(this.employee);
        }
      });
    }
    this.departmentService.findAll().subscribe(deps => {
      this.departmentsSharedCollection = deps;
    })
  }

  previousState(): void {
    window.history.back();
  }

  save(): void {
    this.isSaving = true;
    const employee = this.formService.getEmployee(this.editForm);
    if (employee.id !== null) {
      this.subscribeToSaveResponse(this.service.update(employee));
    } else {
      this.subscribeToSaveResponse(this.service.create(employee));
    }
  }

  private subscribeToSaveResponse(result: Observable<Employee>) {
    result.pipe(finalize( () => this.isSaving = false)).subscribe({
      next: () => this.previousState(),
      error: () => console.error('subscribeToSaveResponse error')
    });
  }

  compareDepartment = (o1: Department | null, o2: Department | null): boolean => this.departmentService.compareDepartment(o1, o2);
}
