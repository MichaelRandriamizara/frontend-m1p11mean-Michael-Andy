import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {EmployeeService} from "../../services/employee/employee.service";
import {RoleService} from "../../services/role/role.service";

@Component({
  selector: 'app-edit-employee',
  templateUrl: './edit-employee.component.html',
  styleUrl: './edit-employee.component.scss'
})
export class EditEmployeeComponent implements OnInit{
  constructor(private router:ActivatedRoute, private employeeService: EmployeeService, private roleService: RoleService, private route: Router) {

  }

  id: string = '';
  form: any = {
    name: null,
    email: null,
    phone: null,
    photo: "aaaa",
    role: null
  };

  roles: any = [];

  ngOnInit(): void {
    this.id = this.router.snapshot.paramMap.get('id')!;
    this.employeeService.get(this.id, data => {
      this.form = data;
      this.form.role = data.role['_id'];
    });
    this.roleService.getAll(data => {
      this.roles = data;
    });
  }

  onSubmit(): void {
    const { name, email, phone, photo, role } = this.form;
    this.employeeService.update(this.id, {name, email, phone, photo, role}, () => {
      this.route.navigate(['/employe']);
    })
  }

}
