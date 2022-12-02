import { Injectable } from '@angular/core';
import {HttpClient, HttpResponse} from "@angular/common/http";
import {Observable, tap} from "rxjs";
import {Department, NewDepartment} from "./department.model";

export type EntityResponseType= HttpResponse<Department>;
@Injectable({
  providedIn: 'root'
})

export class DepartmentsService {
  protected resourceUrl = 'http://localhost:8080/api/departments/';
  constructor(protected http: HttpClient) { }

  find(id: number): Observable<Department> {
    return this.http.get<Department>(`${this.resourceUrl}${id}`);
  }

  findAll(): Observable<Department[]> {
    return this.http.get<Department[]>(this.resourceUrl);
  }

  create(department:NewDepartment): Observable<Department>{
    return this.http.post<Department>(this.resourceUrl, department);
  }

  delete(id:number): Observable<any> {
    return this.http.delete(`${this.resourceUrl}${id}`);
  }
}
