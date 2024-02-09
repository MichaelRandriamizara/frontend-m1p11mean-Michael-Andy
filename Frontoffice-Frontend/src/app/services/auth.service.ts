import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Observable, Subject} from 'rxjs';
import {baseUrl} from '../../configurations/server.config';
import {EventEmitter} from 'protractor';

const AUTH_API = baseUrl('api/auth/user/');

const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
    providedIn: 'root',
})
export class AuthService {
    loginStatusChanged: Subject<boolean> = new Subject<boolean>();
    constructor(private http: HttpClient) {}

    getLoginStatusChanged(): Observable<boolean> {
        return this.loginStatusChanged.asObservable();
    }

    emitLoginStatusChange(isLogged: boolean): void {
        this.loginStatusChanged.next(isLogged);
    }

    login(email: string, password: string): Observable<any> {
        return this.http.post(
            AUTH_API + 'signin',
            {
                email,
                password,
            },
            httpOptions
        );
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
