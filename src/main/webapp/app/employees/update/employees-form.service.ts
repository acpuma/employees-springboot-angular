import { Injectable } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {Employee, NewEmployee} from "../employee.model";

type EmployeeFormGroupContent = {
  id: FormControl<Employee['id'] | NewEmployee['id']>;
  firstName: FormControl<Employee['firstName']>;
  lastName: FormControl<Employee['lastName']>;
  salary: FormControl<Employee['salary']>;
  birthDate: FormControl<Employee['birthDate']>;
  department: FormControl<Employee['department']>;
  active: FormControl<Employee['active']>;
}

type EmployeeFormDefaults = Pick<NewEmployee, 'id'>;

export type EmployeeFormGroup = FormGroup<EmployeeFormGroupContent>;

@Injectable({providedIn: 'root'})
export class EmployeesFormService {
  createEmployeeFormGroup(employee: Employee = {id: null}): EmployeeFormGroup {
    const employeeRawValue = {
      ...this.getFormDefaults(),
      ...employee
    }
    return new FormGroup<EmployeeFormGroupContent>({
      id: new FormControl({value: employeeRawValue.id, disabled:true},
        {nonNullable:true, validators:[Validators.required]}),
      firstName: new FormControl(employeeRawValue.firstName),
      lastName: new FormControl(employeeRawValue.lastName),
      salary: new FormControl(employeeRawValue.salary),
      birthDate: new FormControl(employeeRawValue.birthDate),
      department: new FormControl(employeeRawValue.department),
      active: new FormControl(employeeRawValue.active)
    });
  }

  getEmployee(form: EmployeeFormGroup): Employee | NewEmployee {
    return form.getRawValue() as Employee | NewEmployee;
  }

  private getFormDefaults(): EmployeeFormDefaults {
    return {
      id: null
    };
  }
}
