import { Component, OnInit } from '@angular/core';
import {AuthService} from '../services/auth.service';
import { Router } from '@angular/router';


@Component({
    selector: 'app-signup',
    templateUrl: './signup.component.html',
    styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
    test : Date = new Date();
    focus;
    focus1;
    focus2;
    form: any = {
        name: null,
        email: null,
        password: null
    };
    isSuccessful = false;
    isSignUpFailed = false;
    errorMessage = '';

    constructor(private authService: AuthService,private router: Router) { }

    ngOnInit(): void {
    }

    onSubmit(): void {
        const { name, email, password } = this.form;
        console.log(name, email, password);
        this.authService.register(name, email, password).subscribe({
            next: data => {
                console.log(data);
                this.isSuccessful = true;
                this.isSignUpFailed = false;
                this.authService.emitLoginStatusChange(true);
                this.router.navigate(['/home']);
            },
            error: err => {
                this.errorMessage = err.error.message;
                this.isSignUpFailed = true;
            }
        });
    }
}
