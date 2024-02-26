import { Component, OnInit } from '@angular/core';
import {EmployeeService} from '../services/employee/employee.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-profil-employee',
  templateUrl: './profil-employee.component.html',
  styleUrls: ['./profil-employee.component.css']
})
export class ProfilEmployeeComponent implements OnInit {
  id: any;
  employee: any;

  constructor(private employeeService: EmployeeService, private router: ActivatedRoute) { }

  ngOnInit(): void {
    this.id = this.router.snapshot.paramMap.get('id');
    this.employeeService.getEmployee(this.id, (res) => {
      this.employee = res;
    });
  }

}
