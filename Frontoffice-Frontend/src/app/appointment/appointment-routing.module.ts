import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {CreateAppointmentComponent} from './create-appointment/create-appointment.component';

const routes: Routes = [
  {
    path: 'create',
    component: CreateAppointmentComponent,
    data: {
      title: 'Prendre rendez-vous'
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AppointmentRoutingModule { }
