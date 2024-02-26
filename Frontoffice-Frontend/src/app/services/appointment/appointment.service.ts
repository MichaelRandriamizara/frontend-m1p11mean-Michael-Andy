import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {baseUrl} from '../../../configurations/server.config';

const APPOINTMENT_API = baseUrl('api/tasks/appointment/');

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class AppointmentService {

  constructor(private http: HttpClient) { }

  makeAppointment(data: any, next: () => void) {
    this.http.post(APPOINTMENT_API, data, httpOptions).subscribe(res => {
      next();
    });
  }

  createAppointment(data: any, next: () => void) {
    this.http.post(APPOINTMENT_API + 'confirm', data, httpOptions).subscribe(res => {
      next();
    });
  }
}
