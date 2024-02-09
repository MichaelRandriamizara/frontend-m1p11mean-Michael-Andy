import { Injectable } from '@angular/core';
import {baseUrl} from '../../../configurations/server.config';
import {HttpClient, HttpHeaders} from '@angular/common/http';


const SERVICE_API = baseUrl('api/services/');

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(private http: HttpClient) {}

    getAll(next: (res: any) => void) {
        this.http.get(SERVICE_API).subscribe(res => {
        next(res);
        });
    }
}
