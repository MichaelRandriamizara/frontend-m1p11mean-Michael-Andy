import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProfilEmployeeRoutingModule } from './profil-employee-routing.module';
import {ProfilEmployeeComponent} from "./profil-employee.component";
import {CardComponent} from "@coreui/angular";


@NgModule({
  declarations: [ProfilEmployeeComponent],
  imports: [
    CommonModule,
    ProfilEmployeeRoutingModule,
    CardComponent
  ]
})
export class ProfilEmployeeModule { }
