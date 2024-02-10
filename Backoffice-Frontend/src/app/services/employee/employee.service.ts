import { Injectable } from '@angular/core';
import {baseUrl} from "../../configurations/server.config";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {startApiCall} from "../../utils/sweet-alert.util";

const DEP_API = baseUrl('api/employees/');

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(private http: HttpClient) { }

  getAll(next: (res: any) => void) {
    startApiCall(close => {
      this.http.get(DEP_API).subscribe(res => {
        close();
        next(res);
      })
    })
  }

  get(id: string, next: (res: any) => void) {
    startApiCall(close => {
      this.http.get(DEP_API + id, {responseType: 'text'}).subscribe(res => {
        close();
        next(JSON.parse(res));
      })
    })
  }

  create(data: any, next: (res: any) => void) {
    startApiCall(close => {
      this.http.post(DEP_API, data, httpOptions).subscribe(res => {
        close();
        next(res);
      })
    })
  }

  update(id: string, data: any, next: (res: any) => void) {
    startApiCall(close => {
      this.http.put(DEP_API + id, data, httpOptions).subscribe(res => {
        close();
        next(res);
      })
    })
  }

  delete(id: string, next: (res: any) => void) {
    startApiCall(close => {
      this.http.delete(DEP_API + id).subscribe(res => {
        close();
        next(res);
      })
    })
  }
}
