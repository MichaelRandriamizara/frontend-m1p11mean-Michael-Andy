import { Injectable } from '@angular/core';
import {baseUrl} from "../../configurations/server.config";
import {HttpClient, HttpHeaders, HttpParams} from "@angular/common/http";
import {startApiCall} from "../../utils/sweet-alert.util";
import {StorageService} from "../auth/storage.service";
import {ObserverObject} from "../../utils/error.handler";


const DEP_API = baseUrl('api/employees/');



@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'employeeid': this.storageService.getUser().id,
    })
  };

  constructor(private http: HttpClient, private storageService:StorageService) { }

  getAll(keyWordFilter: string, page: number, size:number, ignorePhoto: boolean, next: (res: any) => void) {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      }),
      params: new HttpParams()
    };

    if(page!=0){
      httpOptions.params = httpOptions.params.set('page', page);
    }
    if(size!=0){
      httpOptions.params = httpOptions.params.set('size', size);
    }

    // Set filters if provided
    if (keyWordFilter) {
      httpOptions.params = httpOptions.params.set('keyWord', keyWordFilter);
    }
    httpOptions.params = httpOptions.params.set('ignorePhoto', ignorePhoto);

    startApiCall(close => {
      this.http.get(DEP_API, httpOptions).subscribe(ObserverObject(res => {
        close();
        next(res);
      }))
    })
  }

  get(id: string, next: (res: any) => void) {
    startApiCall(close => {
      this.http.get(DEP_API + id, {responseType: 'text'}).subscribe(ObserverObject (res => {
        close();
        next(JSON.parse(res));
      }))
    })
  }

  create(data: any, next: (res: any) => void) {
    startApiCall(close => {
      this.http.post(DEP_API, data, this.httpOptions).subscribe(ObserverObject (res => {
        close();
        next(res);
      }))
    })
  }

  update(id: string, data: any, next: (res: any) => void) {
    startApiCall(close => {
      this.http.put(DEP_API + id, data, this.httpOptions).subscribe(ObserverObject (res => {
        close();
        next(res);
      }))
    })
  }

  delete(id: string, next: (res: any) => void) {
    startApiCall(close => {
      this.http.delete(DEP_API + id, this.httpOptions).subscribe(ObserverObject (res => {
        close();
        next(res);
      }))
    })
  }
}
