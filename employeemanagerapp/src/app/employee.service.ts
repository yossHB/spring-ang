import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Employee} from "./employee";
import {environment} from "../environments/environment";
import { baseUrl } from './shared/baseUrl';
@Injectable({  providedIn: 'root'  })
export class EmployeeService {
  private apiServerUrl=environment.apiBaseUrl;

  constructor(private http: HttpClient) {}

  public getEmployee():Observable<Employee[]>{
    return this.http.get<Employee[]>(`${baseUrl}/employee/all`);

  }

  public addEmployee(employee:Employee):Observable<Employee>{
    return this.http.post<Employee>(`${this.apiServerUrl}/employee/add`,employee);
  }

  public updateEmployee(employee:Employee):Observable<Employee>{
    return this.http.post<Employee>(`${this.apiServerUrl}/employee/update`,employee);
  }

  public deleteEmployee(idEmployee:Employee):Observable<Employee>{
    return this.http.post<Employee>(`${this.apiServerUrl}/employee/delete`,`${idEmployee}`);
  }
}
