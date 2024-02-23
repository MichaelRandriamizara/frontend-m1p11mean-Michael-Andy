import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {EmployeeService} from "../services/employee/employee.service";

@Component({
  selector: 'app-profil-employee',
  templateUrl: './profil-employee.component.html',
  styleUrl: './profil-employee.component.scss'
})
export class ProfilEmployeeComponent implements OnInit{
  employee: any ;

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      const employeeId = params['id'];
      if (employeeId) {
        this.employeeService.get(employeeId, data => {
          this.employee = data;
        });
      }else{
        this.employeeService.getConnectedEmployee(data => {
          this.employee = data;
        })
      }
    });
  }


  constructor(private employeeService: EmployeeService, private router: Router, private route: ActivatedRoute) {
  }
}
