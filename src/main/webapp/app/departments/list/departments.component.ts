import {Component, OnInit} from '@angular/core';
import {Department} from '../department.model';
import { ActivatedRoute } from '@angular/router';
import {DepartmentsService} from "../departments.service";
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {DepartmentsDeleteComponent} from "../delete/departments-delete.component";

@Component({
  selector: 'app-departments',
  templateUrl: './departments.component.html'
})
export class DepartmentsComponent implements OnInit{
  selectedDepartment? : Department;
  departments? : Department[];
  constructor(protected activatedRoute: ActivatedRoute,
              protected service: DepartmentsService,
              protected modalService: NgbModal) {}
  ngOnInit(): void {
    this.loadData();
  }
  onSelect(department: Department): void {
    this.selectedDepartment = department;
  }

  delete(department: Department): void {
    const modalRef= this.modalService.open(DepartmentsDeleteComponent, {size : 'lg', backdrop: 'static'})
    modalRef.componentInstance.department = department;
    modalRef.closed.pipe().subscribe( () =>{
      this.loadData();
    })
  }

  loadData(): void {
    this.service.findAll().subscribe(dep => this.departments=dep);
  }
}
