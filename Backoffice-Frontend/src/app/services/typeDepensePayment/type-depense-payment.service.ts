import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from "@angular/common/http";
import {StorageService} from "../auth/storage.service";
import {startApiCall} from "../../utils/sweet-alert.util";
import {ObserverObject} from "../../utils/error.handler";
import {baseUrl} from "../../configurations/server.config";

const DEP_API = baseUrl('api/typeDepensePayments/');

@Injectable({
  providedIn: 'root'
})
export class TypeDepensePaymentService {
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json' ,
      'employeeid': this.storageService.getUser().id,
    }),
  };

  constructor(private http: HttpClient, private storageService:StorageService) { }

  getAll(monthFilter: number, yearFilter:number, page: number, next: (res: any) => void) {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'employeeid': this.storageService.getUser().id,
      }),
      params: new HttpParams()
        .set('page', page)
        .set('size', 10)
    };

    // Set filters if provided
    if (monthFilter!==0) {
      httpOptions.params = httpOptions.params.set('month', monthFilter);
    }

    if (yearFilter!==0) {
      httpOptions.params = httpOptions.params.set('year', yearFilter);
    }

    console.log("HTTP Options:", httpOptions);

    startApiCall(close => {
      this.http.get(DEP_API, httpOptions).subscribe(ObserverObject(res => {
        close();
        next(res);
      }));
    });
  }


  get(id: string, next: (res: any) => void) {
    startApiCall(close => {
      this.http.get(DEP_API + id, this.httpOptions).subscribe(ObserverObject(res => {
        close();
        next(res);
      }))
    })
  }

  create(data: any, next: (res: any) => void) {
    startApiCall(close => {
      this.http.post(DEP_API, data, this.httpOptions).subscribe(ObserverObject(res => {
        close();
        next(res);
      }))
    })
  }

  update(id: string, data: any, next: (res: any) => void) {
    startApiCall(close => {
      this.http.put(DEP_API + id, data, this.httpOptions).subscribe(ObserverObject(res => {
        close();
        next(res);
      }))
    })
  }

  delete(id: string, next: (res: any) => void) {
    startApiCall(close => {
      this.http.delete(DEP_API + id, this.httpOptions).subscribe(ObserverObject(res => {
        close();
        next(res);
      }))
    })
  }
}
