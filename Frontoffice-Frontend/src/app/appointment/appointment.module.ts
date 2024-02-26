import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AppointmentRoutingModule } from './appointment-routing.module';
import { CreateAppointmentComponent } from './create-appointment/create-appointment.component';


@NgModule({
  declarations: [
    CreateAppointmentComponent
  ],
  imports: [
    CommonModule,
    AppointmentRoutingModule
  ]
})
export class AppointmentModule { }
