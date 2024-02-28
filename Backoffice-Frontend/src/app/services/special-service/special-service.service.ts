import { Injectable } from '@angular/core';
import {baseUrl} from "../../configurations/server.config";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {startApiCall} from "../../utils/sweet-alert.util";
import {StorageService} from "../auth/storage.service";

const DEP_API = baseUrl('api/specialServices/');

@Injectable({
  providedIn: 'root'
})
export class SpecialServiceService {

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json' ,
      'employeeid': this.storageService.getUser().id,
    }),
  };

  constructor(private http: HttpClient, private storageService:StorageService) { }

  create(data: any, next: (res: any) => void) {
    startApiCall(close => {
      this.http.post(DEP_API, data, this.httpOptions).subscribe(res => {
        close();
        next(res);
      })
    })
  }

  findCurrent(next: (res: any) => void) {
    startApiCall(close => {
      this.http.get(DEP_API + 'currents', this.httpOptions).subscribe(res => {
        close();
        next(res);
      })
    })
  }

  findAll(next: (res: any) => void) {
    startApiCall(close => {
      this.http.get(DEP_API, this.httpOptions).subscribe(res => {
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
