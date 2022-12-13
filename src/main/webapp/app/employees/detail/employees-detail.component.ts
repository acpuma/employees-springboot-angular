import {Component, Input, OnInit} from '@angular/core';
import {Employee} from "../employee.model";
import {ActivatedRoute} from "@angular/router";
import {EmployeesService} from "../employees.service";

@Component({
  selector: 'app-employees-detail',
  templateUrl: './employees-detail.component.html'
})
export class EmployeesDetailComponent implements OnInit{
  @Input() employee?: Employee;
  employeeId?: number | null = null;

  constructor(protected activatedRoute: ActivatedRoute,
              protected service: EmployeesService) {}

  ngOnInit(): void {
    this.employeeId = Number(this.activatedRoute.snapshot.paramMap.get('id'));
    console.log('Employee Id : ' + this.employeeId);
    this.service.find(this.employeeId).subscribe( emp => this.employee = emp);
  }

  previousState(): void {
    window.history.back();
  }
}
