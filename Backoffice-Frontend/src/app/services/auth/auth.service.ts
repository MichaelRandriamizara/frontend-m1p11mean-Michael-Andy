import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import {baseUrl} from '../../configurations/server.config';
import {ObserverObject} from "../../utils/error.handler";
import {startApiCall} from "../../utils/sweet-alert.util";
import {StorageService} from "./storage.service";

const AUTH_API = baseUrl('api/auth/employee/');

const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
    providedIn: 'root',
})
export class AuthService {
    constructor(private http: HttpClient,private storageService:StorageService) {}

    login(email: string, password: string, next: any ){
      startApiCall(close => {
        return this.http.post(
          AUTH_API + 'signin',
          {
            email,
            password,
          },
          httpOptions
        ).subscribe(ObserverObject((data) => {
          this.storageService.saveUser(data);
          window.sessionStorage.setItem("ROLE", JSON.stringify(data.role));
          next(data);
          close();
        }));
      });

    }

    logout(): Observable<any> {
        return this.http.post(AUTH_API + 'signout', { }, httpOptions);
    }
}
