import { Component, OnInit } from '@angular/core';
import {ServiceService} from '../../services/service/service.service';
import {EmployeeService} from '../../services/employee/employee.service';
import {AppointmentService} from '../../services/appointment/appointment.service';
import {formatDateTime} from '../../utils/string.utils';
import {Router} from '@angular/router';


@Component({
  selector: 'app-create-appointment',
  templateUrl: './create-appointment.component.html',
  styleUrls: ['./create-appointment.component.css']
})
export class CreateAppointmentComponent implements OnInit {

  constructor(private serviceService: ServiceService, private employeeService: EmployeeService, private appointmentService: AppointmentService, private router: Router) { }
  focus;
  focus1;
  focus2;
  focus3;
  focus4;

  employees: any;
  services: any;
  selectedServices: any;
  propositions: any[];

 selectedProposition: any;
  form: any = {
    employee: null,
    services: [],
    start: null,
    end: null,
    phone: null
  };

  ngOnInit(): void {
    this.serviceService.getAll(true, data => {
      this.services = data.data;
    });
    this.employeeService.getAll(true, data => {
      this.employees = data.data;
    }
    );
  }

  onServiceSelect(item: any) {
    this.selectedServices = item;
  }
  onSubmit() {
    this.form.services = this.selectedServices.map((service) => service._id);
    const {employee, services, start, end, phone } = this.form;
    this.appointmentService.makeAppointment({employee, services, start, end, phone}, (data) => {
        this.propositions = data;
    }
    );
  }
  selectProposition(proposition: any) {
    this.selectedProposition = proposition;
  }
  onConfirm() {
    this.form.employee = this.selectedProposition.employee._id;
    this.form.start = this.selectedProposition.date.slice(0, -1);
    const {employee, services, start, phone } = this.form;
    this.appointmentService.createAppointment({employee, services, start, phone }, (data) => {
      console.log('confirmed');
        this.router.navigate(['/liste-rendez-vous']);
    });
      console.log({employee, services, start, phone });
  }
  protected readonly formatDateTime = formatDateTime;

}
