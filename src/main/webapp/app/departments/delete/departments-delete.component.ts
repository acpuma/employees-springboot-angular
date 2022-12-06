import { Component } from '@angular/core';
import {Department} from "../department.model";
import {DepartmentsService} from "../departments.service";
import {NgbActiveModal} from "@ng-bootstrap/ng-bootstrap";
export const ITEM_DELETED_EVENT = 'deleted';
@Component({
  selector: 'app-departments-delete',
  templateUrl: './departments-delete.component.html'
})
export class DepartmentsDeleteComponent {
  department?: Department;
  constructor(protected service: DepartmentsService, protected activeModal: NgbActiveModal) {
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
