import { Injectable } from '@angular/core';
import {baseUrl} from '../../../configurations/server.config';
import {HttpClient, HttpHeaders} from '@angular/common/http';

const EMPLOYEE_API = baseUrl('api/employees/');

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};



@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(private http: HttpClient) {}

  getAll(next: (res: any) => void) {
    this.http.get(EMPLOYEE_API).subscribe(res => {
      next(res);
    });
  }
}
