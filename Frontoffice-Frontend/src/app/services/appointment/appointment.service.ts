import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import {baseUrl} from '../../../configurations/server.config';
import {startApiCall} from '../../utils/sweet-alert.utils';
import {ObserverObject} from '../../utils/error.handler';
import {StorageService} from '../storage.service';

const APPOINTMENT_API = baseUrl('api/tasks/appointment/');

@Injectable({
  providedIn: 'root'
})
export class AppointmentService {

  constructor(private http: HttpClient, private storageService: StorageService) { }

  makeAppointment(data: any, next: (res: any) => void) {
      const httpOptions = {
          headers: new HttpHeaders({
              'Content-Type': 'application/json',
              'userid': this.storageService.getUser().id,
          }),
      };
    startApiCall(close => {
        this.http.post(APPOINTMENT_API, data, httpOptions).subscribe(res => {
            next(res);
            close();
        });
    });
  }

  createAppointment(data: any, next: (res: any) => void) {
      const httpOptions = {
          headers: new HttpHeaders({
              'Content-Type': 'application/json',
              'userid': this.storageService.getUser().id,
          }),
      };
      startApiCall(close => {
          this.http.post(APPOINTMENT_API + 'confirm', data, httpOptions).subscribe(res => {
              next(res);
              close();
          });
      });
  }
}
