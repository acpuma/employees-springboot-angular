import {Component, OnInit} from '@angular/core';
import {Employee} from "../employee.model";
import {EmployeesService} from "../employees.service";

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html'
})
export class EmployeesComponent implements OnInit{
  employees? : Employee[];

  constructor(protected service: EmployeesService) {
  }

  ngOnInit(): void {
    this.loadData();
  }

  loadData(): void {
    this.service.findAll().subscribe(emps => this.employees = emps);
  }

  delete(employee: Employee): void {

  }
}
