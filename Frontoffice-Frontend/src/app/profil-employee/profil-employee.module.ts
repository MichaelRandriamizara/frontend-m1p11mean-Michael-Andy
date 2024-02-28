import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProfilEmployeeRoutingModule } from './profil-employee-routing.module';
import {ProfilEmployeeComponent} from './profil-employee.component';


@NgModule({
  declarations: [ProfilEmployeeComponent],
  imports: [
    CommonModule,
    ProfilEmployeeRoutingModule
  ]
})
export class ProfilEmployeeModule { }
