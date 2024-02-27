import { Injectable } from '@angular/core';
import {baseUrl} from '../../../configurations/server.config';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import {StorageService} from '../storage.service';
import {startApiCall} from '../../utils/sweet-alert.utils';

const TASK_API = baseUrl('api/tasks/');


@Injectable({
  providedIn: 'root'
})
export class TaskService {

  constructor(private http: HttpClient, private storageService: StorageService) { }
  getForConnectedUser(next: (res: any) => void) {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'userId': this.storageService.getUser().id,
      }),
      params: new HttpParams()
    };
    startApiCall(close => {
        this.http.get(TASK_API + 'get/user', httpOptions).subscribe(res => {
            next(res);
            close();
        });
    });
  }
}
