import { Component } from '@angular/core';
import {EmployeeService} from "../../services/employee/employee.service";
import {Router} from "@angular/router";
import {StorageService} from "../../services/auth/storage.service";

@Component({
  selector: 'app-update-pasword',
  templateUrl: './update-pasword.component.html',
  styleUrl: './update-pasword.component.scss'
})
export class UpdatePaswordComponent {

  form: any = {
    oldPassword: null,
    newPassword: null,
    confirmPassword: null,
  };


  constructor(private employeeService: EmployeeService, private storageService: StorageService, private router: Router) {
  }

  onSubmit(): void {
    const { oldPassword, newPassword, confirmPassword } = this.form;
    this.employeeService.updatePassword({oldPassword, newPassword, confirmPassword}, () => {
      this.storageService.clean();
      this.router.navigate(['/login']);
    });

  }
}
