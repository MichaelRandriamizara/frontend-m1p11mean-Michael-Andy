import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {EmployeeService} from "../../services/employee/employee.service";

@Component({
  selector: 'app-edit-employee',
  templateUrl: './edit-employee.component.html',
  styleUrl: './edit-employee.component.scss'
})
export class EditEmployeeComponent implements OnInit{
  constructor(private router:ActivatedRoute, private employeeService: EmployeeService, private route: Router) {

  }

  id: string = '';
  form: any = {
    name: null,
    email: null,
    phone: null,
    photo: "aaaa",
  };


  ngOnInit(): void {
    this.id = this.router.snapshot.paramMap.get('id')!;
    this.employeeService.get(this.id, data => {
      this.form = data;
    });
  }

  onSubmit(): void {
    const { name, email, phone, photo } = this.form;
    this.employeeService.update(this.id, {name, email, phone, photo}, () => {
      this.route.navigate(['/employe']);
    })
  }

}
