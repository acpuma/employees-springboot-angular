import {Component, OnInit} from '@angular/core';
import {Department} from '../department.model';
import { ActivatedRoute } from '@angular/router';
import {DepartmentsService} from "../departments.service";

@Component({
  selector: 'app-departments',
  templateUrl: './departments.component.html'
})
export class DepartmentsComponent implements OnInit{
  selectedDepartment? : Department;
  departments? : Department[];
  constructor(protected activatedRoute: ActivatedRoute,
              protected service: DepartmentsService) {}
  ngOnInit(): void {
    this.service.findAll().subscribe(dep => this.departments=dep);
  }
  onSelect(department: Department): void {
    this.selectedDepartment = department;
  }
}
