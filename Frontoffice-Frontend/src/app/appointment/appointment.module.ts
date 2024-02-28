import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AppointmentRoutingModule } from './appointment-routing.module';
import { CreateAppointmentComponent } from './create-appointment/create-appointment.component';
import {FormsModule} from '@angular/forms';
import {NgSelectModule} from '@ng-select/ng-select';


@NgModule({
  declarations: [
    CreateAppointmentComponent
  ],
  imports: [
    CommonModule,
    AppointmentRoutingModule,
    FormsModule,
    NgSelectModule
  ]
})
export class AppointmentModule { }
