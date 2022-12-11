import {Component, OnInit} from '@angular/core';
import {Employee} from "../employee.model";
import {EmployeesService} from "../employees.service";
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {EmployeesDeleteComponent} from "../delete/employees-delete.component";
import {AccountService} from "../../core/auth/account.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html'
})
export class EmployeesComponent implements OnInit{
  employees? : Employee[];

  constructor(protected service: EmployeesService,
              protected modalService: NgbModal,
              protected accountService: AccountService,
              protected activatedRoute: ActivatedRoute,) {
  }

  ngOnInit(): void {
    this.loadData();
  }

  loadData(): void {
    this.service.findAll().subscribe(emps => this.employees = emps);
  }

  delete(employee: Employee): void {
    const modalRef= this.modalService.open(EmployeesDeleteComponent, {size : 'lg', backdrop: 'static'})
    modalRef.componentInstance.employee = employee;
    modalRef.closed.pipe().subscribe( () =>{
      this.loadData();
    })
  }
}
