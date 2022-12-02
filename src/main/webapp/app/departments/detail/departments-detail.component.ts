import {Component, Input, OnInit} from '@angular/core';
import {Department} from "../department.model";
import {ActivatedRoute, Router} from "@angular/router";
import {DepartmentsService} from "../departments.service";

@Component({
  selector: 'app-departments-detail',
  templateUrl: './departments-detail.component.html'
})
export class DepartmentsDetailComponent implements OnInit{
  @Input() department?: Department;
  departmentId?: number | null = null;
  constructor(protected route: ActivatedRoute,
              protected service: DepartmentsService) {}
  ngOnInit(): void {
    this.departmentId = Number(this.route.snapshot.paramMap.get('id'));
    console.log('Department Id : ' + this.departmentId)
    this.service.find(this.departmentId).subscribe(dep => this.department=dep);
  }

  previousState(): void {
    window.history.back();
  }
}
