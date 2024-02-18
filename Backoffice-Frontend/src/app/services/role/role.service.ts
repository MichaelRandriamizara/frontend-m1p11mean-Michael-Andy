import { Injectable } from '@angular/core';
import {baseUrl} from "../../configurations/server.config";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {startApiCall} from "../../utils/sweet-alert.util";

const DEP_API = baseUrl('api/roles/');

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
@Injectable({
  providedIn: 'root'
})
export class RoleService {

  constructor(private http: HttpClient) { }

  getAll(next: (res: any) => void) {
    startApiCall(close => {
      this.http.get(DEP_API).subscribe(res => {
        close();
        next(res);
      })
    })
  }
}
