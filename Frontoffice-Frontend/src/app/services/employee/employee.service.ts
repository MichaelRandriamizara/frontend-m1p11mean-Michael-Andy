import { Injectable } from '@angular/core';
import {baseUrl} from '../../../configurations/server.config';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {startApiCall} from '../../utils/sweet-alert.utils';

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

  getRanking(id: string, next: (res: any) => void) {
    this.http.get(baseUrl('api/employeeRatings/') + id).subscribe(res => {
      next(res);
    });
  }

  updateRating(rating: any, next: () => void) {
    console.log(rating);
    this.http.post(baseUrl('api/employeeRatings/'), rating, httpOptions).subscribe(res => {
      next();
    });
  }
  getEmployee(id: string, next: (res: any) => void) {
    startApiCall(close => {
        this.http.get(EMPLOYEE_API + id).subscribe(res => {
            next(res);
            close();
        });
    });
  }
}
