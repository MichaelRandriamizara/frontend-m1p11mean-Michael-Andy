import { Component } from '@angular/core';
import {Router} from "@angular/router";
import {EmployeeService} from "../../services/employee/employee.service";

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrl: './add-employee.component.scss'
})
export class AddEmployeeComponent {

  form: any = {
    name: null,
    email: null,
    password: "1234",
    phone: null,
    photo: "aaaa",
  };


  constructor( private employeeService: EmployeeService, private router: Router) {
  }

  onSubmit(): void {
    const { name, email, password, phone, photo } = this.form;
    this.employeeService.create({name, email, password, phone, photo}, () => {
      this.router.navigate(['/employe']);
    });

  }
}
