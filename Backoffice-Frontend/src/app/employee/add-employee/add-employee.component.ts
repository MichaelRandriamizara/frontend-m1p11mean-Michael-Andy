import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {EmployeeService} from "../../services/employee/employee.service";
import {RoleService} from "../../services/role/role.service";

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrl: './add-employee.component.scss'
})
export class AddEmployeeComponent implements OnInit{

  form: any = {
    name: null,
    email: null,
    password: "1234",
    phone: null,
    photo: "aaaa",
    role: null
  };

  roles: any = [];


  constructor( private employeeService: EmployeeService, private roleService: RoleService, private router: Router) {
  }

  onSubmit(): void {
    const { name, email, password, phone, photo, role } = this.form;
    this.employeeService.create({name, email, password, phone, photo, role}, () => {
      this.router.navigate(['/employe']);
    });

  }

  ngOnInit(): void {
    this.roleService.getAll(data => {
      this.roles = data;
    });
  }
}
