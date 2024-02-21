import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from "@angular/common/http";
import {baseUrl} from "../../configurations/server.config";
import {StorageService} from "../auth/storage.service";
import {startApiCall} from "../../utils/sweet-alert.util";
import {ObserverObject} from "../../utils/error.handler";

const TASK_API = baseUrl('api/tasks/');

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json' ,
      'employeeid': this.storageService.getUser().id,
    }),
  };



  constructor(private http: HttpClient, private storageService:StorageService) { }

  create(task: any, next: (res: any) => void) {
    startApiCall(close => {
      this.http.post(TASK_API, task, this.httpOptions).subscribe(ObserverObject(res => {
        close();
        next(res);
      }));
    })
  }

  getForLoggedUser(page: number, next: (res: any) => void) {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'employeeid': this.storageService.getUser().id,
      }),
      params: new HttpParams()
        .set('page', page)
        .set('size', 10)
    };

    startApiCall(close => {
      this.http.get(TASK_API + 'employee', httpOptions).subscribe(ObserverObject(res => {
        close();
        next(res);
      }));
    })
  }
}
