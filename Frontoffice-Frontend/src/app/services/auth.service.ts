import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Observable, Subject} from 'rxjs';
import {baseUrl} from '../../configurations/server.config';
import {EventEmitter} from 'protractor';
import {StorageService} from './storage.service';
import {startApiCall} from '../utils/sweet-alert.utils';
import {ObserverObject} from '../utils/error.handler';

const AUTH_API = baseUrl('api/auth/user/');

const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
    providedIn: 'root',
})
export class AuthService {
    loginStatusChanged: Subject<boolean> = new Subject<boolean>();
    constructor(private http: HttpClient, private storageService: StorageService) {}

    getLoginStatusChanged(): Observable<boolean> {
        return this.loginStatusChanged.asObservable();
    }

    emitLoginStatusChange(isLogged: boolean): void {
        this.loginStatusChanged.next(isLogged);
    }

    login(email: string, password: string, next: any ) {
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
                next(data);
                close();
            }));
        });

    }

    register(name: string, email: string, password: string): Observable<any> {
        return this.http.post(
            AUTH_API + 'signup',
            {
                name,
                email,
                password,
            },
            httpOptions
        );
    }

    logout(): Observable<any> {
        return this.http.post(AUTH_API + 'signout', { }, httpOptions);
    }
}
