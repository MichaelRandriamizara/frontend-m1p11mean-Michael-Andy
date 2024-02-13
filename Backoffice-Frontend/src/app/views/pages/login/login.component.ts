import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {AuthService} from "../../../services/auth/auth.service";
import {StorageService} from "../../../services/auth/storage.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit{
  form: any = {
    email: null,
    password: null
  };


  constructor(private router: Router, private formBuilder: FormBuilder, private authService: AuthService, private storageService: StorageService) { }

  ngOnInit() {
    if (this.storageService.isLoggedIn()) {
      this.router.navigate(['/']);
    }
  }

  login() {
    const { email, password } = this.form;
    this.authService.login(email, password).subscribe({
        next: data => {
          this.storageService.saveUser(data);
          this.router.navigate(['/']);
        },
        error: err => {
          console.log(err);
        }
      });
  }

}
