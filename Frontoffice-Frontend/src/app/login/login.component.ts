import { Component, OnInit } from '@angular/core';
import {AuthService} from '../services/auth.service';
import {StorageService} from '../services/storage.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  focus;
  focus1;
  form: any = {
    email: null,
    password: null
  };
  isLoggedIn = false;
  isLoginFailed = false;
  errorMessage = '';
  // roles: string[] = [];
  constructor(private authService: AuthService, private storageService: StorageService,private router:Router) { }

  ngOnInit(): void {
    if (this.storageService.isLoggedIn()) {
      this.isLoggedIn = true;
      // this.roles = this.storageService.getUser().roles;
    }
  }

  onSubmit(): void {
    const { email, password } = this.form;
    console.log(email, password);
    this.authService.login(email, password).subscribe({
      next: data => {
        this.storageService.saveUser(data);

        this.isLoginFailed = false;
        this.isLoggedIn = true;
        // this.roles = this.storageService.getUser().roles;
        // this.reloadPage();
        this.router.navigate(['/home']);
      },
      error: err => {
        this.errorMessage = err.error.message;
        this.isLoginFailed = true;
      }
    });
  }

  reloadPage(): void {
    window.location.reload();
  }

}
