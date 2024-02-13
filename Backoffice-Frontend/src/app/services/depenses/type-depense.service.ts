import { Injectable } from '@angular/core';
import {baseUrl} from "../../configurations/server.config";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {startApiCall} from "../../utils/sweet-alert.util";
import {StorageService} from "../auth/storage.service";

const DEP_API = baseUrl('api/typeDepenses/');


@Injectable({
  providedIn: 'root'
})
export class TypeDepenseService {
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json' ,
      'employeeid': this.storageService.getUser().id,
    }),
  };

  constructor(private http: HttpClient, private storageService:StorageService) { }

  getAll(next: (res: any) => void) {
    console.log("HTTP Options:", this.httpOptions);
    startApiCall(close => {
      this.http.get(DEP_API, this.httpOptions).subscribe(res => {
        close();
        next(res);
      })
    })
  }

  get(id: string, next: (res: any) => void) {
    startApiCall(close => {
      this.http.get(DEP_API + id, this.httpOptions).subscribe(res => {
        close();
        next(res);
      })
    })
  }

  create(data: any, next: (res: any) => void) {
    startApiCall(close => {
      this.http.post(DEP_API, data, this.httpOptions).subscribe(res => {
        close();
        next(res);
      })
    })
  }

  update(id: string, data: any, next: (res: any) => void) {
    startApiCall(close => {
      this.http.put(DEP_API + id, data, this.httpOptions).subscribe(res => {
        close();
        next(res);
      })
    })
  }

  delete(id: string, next: (res: any) => void) {
    startApiCall(close => {
      this.http.delete(DEP_API + id, this.httpOptions).subscribe(res => {
        close();
        next(res);
      })
    })
  }
}
