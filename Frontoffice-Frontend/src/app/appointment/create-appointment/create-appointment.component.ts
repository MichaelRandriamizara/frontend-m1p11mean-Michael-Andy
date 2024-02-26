import { Component, OnInit } from '@angular/core';
import {ServiceService} from '../../services/service/service.service';

@Component({
  selector: 'app-create-appointment',
  templateUrl: './create-appointment.component.html',
  styleUrls: ['./create-appointment.component.css']
})
export class CreateAppointmentComponent implements OnInit {

  constructor(private serviceService: ServiceService) { }

  services: any;
  form: any = {
    employee: null,
    services: [],
    start: null,
    end: null
  };

  ngOnInit(): void {
    this.serviceService.getAll(true, data => {
      this.services = data;
    });
  }

}
