import { Injectable } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {Department, NewDepartment} from "../department.model";

type DepartmentFormGroupContent = {
  id : FormControl<Department['id'] | NewDepartment['id']>;
  departmentName : FormControl<Department['departmentName']>;
}

type DepartmentFormDefaults = Pick<NewDepartment, 'id'>;

export type DepartmentFormGroup = FormGroup<DepartmentFormGroupContent>;

@Injectable({ providedIn: 'root' })
export class DepartmentsFormService {

  createDepartmentFormGroup(department: Department = {id: null}) : DepartmentFormGroup {
    const departmentRawValue = {
      ...this.getFormDefaults(),
      ...department
    }
    return new FormGroup<DepartmentFormGroupContent>({
      id: new FormControl({value:departmentRawValue.id, disabled: true},
        {nonNullable: true, validators: [Validators.required]}),
      departmentName: new FormControl(departmentRawValue.departmentName)
    });
  }

  getDepartment(form: DepartmentFormGroup): Department | NewDepartment {
    return form.getRawValue() as Department | NewDepartment;
  }

  private getFormDefaults(): DepartmentFormDefaults {
    return {
      id: null
    };
  }
}
