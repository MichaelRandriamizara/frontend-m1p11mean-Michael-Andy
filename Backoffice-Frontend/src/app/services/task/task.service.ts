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

  get(id: string, next: (res: any) => void) {
    startApiCall(close => {
      this.http.get(TASK_API + id, this.httpOptions).subscribe(ObserverObject(res => {
        close();
        next(res);
      }));
    })
  }

  updateStatus(id: string, status: number, next: (res: any) => void) {
    startApiCall(close => {
      this.http.put(TASK_API + id + '/status', {status}, this.httpOptions).subscribe(ObserverObject(res => {
        close();
        next(res);
      }));
    })
  }

  pay(totalPrice:number, id: string, next: (res: any) => void) {
    startApiCall(close => {
      this.http.put(TASK_API + id + '/payment', {totalPrice}, this.httpOptions).subscribe(ObserverObject(res => {
        close();
        next(res);
      }));
    })
  }

  getDailyCommission(id:string,date: string, next: (res: any) => void) {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'employeeid': this.storageService.getUser().id,
      }),
      params: new HttpParams()
    };

    if(date){
      httpOptions.params = httpOptions.params.set('start', date);
    }
    startApiCall(close => {
      this.http.get(TASK_API + 'commission/'+id, httpOptions).subscribe(ObserverObject(res => {
        close();
        next(res);
      }));
    })
  }
}
