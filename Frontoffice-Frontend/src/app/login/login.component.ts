import { Component, OnInit } from '@angular/core';
import {AuthService} from '../services/auth.service';
import {StorageService} from '../services/storage.service';
import { Router } from '@angular/router';
import {Location} from '@angular/common';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  focus;
  focus1;
  form: any = {
    email: 'mkrandriamizara@gmail.com',
    password: '0000'
  };
  isLoggedIn = false;
  isLoginFailed = false;
  errorMessage = '';
  // roles: string[] = [];
  constructor(private authService: AuthService, private storageService: StorageService, private router: Router, public location: Location) { }

  ngOnInit(): void {
    if (this.storageService.isLoggedIn()) {
      this.isLoggedIn = true;
      this.router.navigate(['/home']);
      // this.roles = this.storageService.getUser().roles;
    }
  }

  onSubmit(): void {
    const { email, password } = this.form;
    this.authService.login(email, password, (data: any) => {
      this.authService.emitLoginStatusChange(true);

      this.router.navigate(['/']);
    });

  }

  reloadPage(): void {
    window.location.reload();
  }

}
