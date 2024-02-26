import { Injectable } from '@angular/core';
import {baseUrl} from "../../configurations/server.config";
import {HttpClient, HttpHeaders, HttpParams} from "@angular/common/http";
import {StorageService} from "../auth/storage.service";
import {startApiCall} from "../../utils/sweet-alert.util";
import {ObserverObject} from "../../utils/error.handler";

const STAT_API = baseUrl('api/stat/');

@Injectable({
  providedIn: 'root'
})
export class StatService {
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json' ,
      'employeeid': this.storageService.getUser().id,
    }),
  };


  constructor(private storageService:StorageService, private http:HttpClient) { }

  getTurnoverPerDay(date:string, next: (res: any) => void) {
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
      this.http.get(STAT_API + 'turnover/day', httpOptions).subscribe(ObserverObject(res => {
        close();
        next(res);
      }));
    })
  }

  getTurnoverPerMonth(date:string, next: (res: any) => void) {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'employeeid': this.storageService.getUser().id,
      }),
      params: new HttpParams()
    };

    if(date){
      httpOptions.params = httpOptions.params.set('year', date);
    }
    startApiCall(close => {
      this.http.get(STAT_API + 'turnover/month', httpOptions).subscribe(ObserverObject(res => {
        close();
        next(res);
      }));
    })
  }

  getBenefitsPerMonth(date:string, next: (res: any) => void) {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'employeeid': this.storageService.getUser().id,
      }),
      params: new HttpParams()
    };

    if(date){
      httpOptions.params = httpOptions.params.set('year', date);
    }
    startApiCall(close => {
      this.http.get(STAT_API + 'benefits/month', httpOptions).subscribe(ObserverObject(res => {
        close();
        next(res);
      }));
    })
  }

  getExpensesPerMonth(date:string, next: (res: any) => void) {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'employeeid': this.storageService.getUser().id,
      }),
      params: new HttpParams()
    };

    if(date){
      httpOptions.params = httpOptions.params.set('year', date);
    }
    startApiCall(close => {
      this.http.get(STAT_API + 'expense/month', httpOptions).subscribe(ObserverObject(res => {
        close();
        next(res);
      }));
    })
  }

  getTaskPerMonth(date:string, next: (res: any) => void) {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'employeeid': this.storageService.getUser().id,
      }),
      params: new HttpParams()
    };

    if(date){
      httpOptions.params = httpOptions.params.set('year', date);
    }
    startApiCall(close => {
      this.http.get(STAT_API + 'task/month', httpOptions).subscribe(ObserverObject(res => {
        close();
        next(res);
      }));
    })
  }

  getTaskPerDay(date:string, next: (res: any) => void) {
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
      this.http.get(STAT_API + 'task/day', httpOptions).subscribe(ObserverObject(res => {
        close();
        next(res);
      }));
    })
  }

  getEmployeeHours(startFilter:string, endFilter:string, next: (res: any) => void) {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'employeeid': this.storageService.getUser().id,
      }),
      params: new HttpParams()
    };

    if(startFilter){
      httpOptions.params = httpOptions.params.set('start', startFilter);
    }
    if(endFilter){
      httpOptions.params = httpOptions.params.set('end', endFilter);
    }
    startApiCall(close => {
      this.http.get(STAT_API + 'employee/nbhour', httpOptions).subscribe(ObserverObject(res => {
        close();
        next(res);
      }));
    })
  }
}
