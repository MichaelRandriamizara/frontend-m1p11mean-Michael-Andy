import { Component, OnInit } from '@angular/core';
import {EmployeeService} from '../services/employee/employee.service';
import {ServiceService} from '../services/service/service.service';
import {GetterFn} from '../interfaces';

@Component({
  selector: 'app-service-notation',
  templateUrl: './our-team.component.html',
  styleUrls: ['./our-team.component.css']
})
export class OurTeamComponent implements OnInit {
  getters: GetterFn[] = [];
  starRating = 0;
  employees: any;
  services: any;
  constructor(private employeeService: EmployeeService, private serviceService: ServiceService) {
  }

  ngOnInit() {
    this.fetchList();
  }

  fetchList() {
    this.employeeService.getAll(data => {
      this.employees = data;
    });
    this.serviceService.getAll(data => {
      this.services = data;
    });
  }

}
