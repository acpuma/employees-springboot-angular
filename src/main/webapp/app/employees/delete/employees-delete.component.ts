import { Component } from '@angular/core';
import {Employee} from "../employee.model";
import {EmployeesService} from "../employees.service";
import {NgbActiveModal} from "@ng-bootstrap/ng-bootstrap";

export const ITEM_DELETED_EVENT = 'deleted';

@Component({
  selector: 'app-employees-delete',
  templateUrl: './employees-delete.component.html'
})
export class EmployeesDeleteComponent {
  employee?: Employee | null;
  constructor(protected service: EmployeesService,
              protected activeModal: NgbActiveModal) {
  }

  cancel(): void{
    this.activeModal.dismiss();
  }

  confirmDelete(id: number | null): void {
    this.service.delete(id).subscribe( () => {
      this.activeModal.close(ITEM_DELETED_EVENT)
    })
  }
}
