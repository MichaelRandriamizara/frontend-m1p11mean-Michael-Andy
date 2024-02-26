import { Component, OnInit } from '@angular/core';
import {ServiceService} from '../../services/service/service.service';
import {EmployeeService} from '../../services/employee/employee.service';

@Component({
  selector: 'app-create-appointment',
  templateUrl: './create-appointment.component.html',
  styleUrls: ['./create-appointment.component.css']
})
export class CreateAppointmentComponent implements OnInit {

  constructor(private serviceService: ServiceService, private employeeService: EmployeeService) { }
  focus;
  focus1;
  focus2;
  focus3;

  employees: any;
  services: any;
  form: any = {
    employee: null,
    services: [],
    start: null,
    end: null
  };

  ngOnInit(): void {
    this.serviceService.getAll(true, data => {
      this.services = data.data;
      console.log(this.services);
    });
    this.employeeService.getAll(true, data => {
      this.employees = data.data;
    }
    );
  }

  onSubmit() {
    console.log(this.form);
  }

}
