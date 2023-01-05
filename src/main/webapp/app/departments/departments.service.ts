import { Injectable } from '@angular/core';
import {HttpClient, HttpResponse} from "@angular/common/http";
import {Observable} from "rxjs";
import {Department} from "./department.model";
import {environment} from "../../environments/environment";

export type EntityResponseType= HttpResponse<Department>;
@Injectable({
  providedIn: 'root'
})

export class DepartmentsService {
  protected resourceUrl = environment.apiUrl + '/api/departments/';
  constructor(protected http: HttpClient) { }

  find(id: number): Observable<Department> {
    return this.http.get<Department>(`${this.resourceUrl}${id}`);
  }

  findAll(): Observable<Department[]> {
    return this.http.get<Department[]>(this.resourceUrl);
  }

  create(department: Department | (Omit<Department, "id"> & { id: null })): Observable<Department>{
    console.log("Department :" + JSON.stringify(department));
    return this.http.post<Department>(this.resourceUrl, department);
  }

  delete(id: number | null): Observable<any> {
    return this.http.delete(`${this.resourceUrl}${id}`);
  }

  update(department: Department): Observable<Department> {
    return this.http.put<Department>(`${this.resourceUrl}${this.getDepartmentIdentifier(department)}`,department);
  }

  getDepartmentIdentifier(department: Pick<Department,  'id'>): number | null {
    return department.id;
  }

  compareDepartment(o1: Pick<Department, 'id'> | null, o2: Pick<Department, 'id'> | null): boolean {
    return o1 && o2 ? this.getDepartmentIdentifier(o1) === this.getDepartmentIdentifier(o2) : o1 === o2;
  }
}
