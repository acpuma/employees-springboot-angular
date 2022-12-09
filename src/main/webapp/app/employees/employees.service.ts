import { Injectable } from '@angular/core';
import {HttpClient, HttpResponse} from "@angular/common/http";
import {Observable, tap} from "rxjs";
import {Employee, NewEmployee} from "./employee.model";

export type EntityResponseType= HttpResponse<Employee>;
@Injectable({
  providedIn: 'root'
})

export class EmployeesService {
  protected resourceUrl = 'http://localhost:8080/api/employees/';
  constructor(protected http: HttpClient) { }

  find(id: number): Observable<Employee> {
    return this.http.get<Employee>(`${this.resourceUrl}${id}`);
  }

  findAll(): Observable<Employee[]> {
    return this.http.get<Employee[]>(this.resourceUrl);
  }

  create(employee: Employee | (Omit<Employee, "id"> & { id: null })): Observable<Employee>{
    console.log("Employee :" + JSON.stringify(employee));
    return this.http.post<Employee>(this.resourceUrl, employee);
  }

  delete(id: number | null): Observable<any> {
    return this.http.delete(`${this.resourceUrl}${id}`);
  }

  update(employee: Employee): Observable<Employee> {
    return this.http.put<Employee>(`${this.resourceUrl}${this.getEmployeeIdentifier(employee)}`,employee);
  }

  getEmployeeIdentifier(employee: Pick<Employee,  'id'>): number | null {
    return employee.id;
  }
}
