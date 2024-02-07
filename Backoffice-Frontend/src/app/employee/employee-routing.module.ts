import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {CommonModule} from "@angular/common";
import {EmployeeComponent} from "./employee.component";

const routes: Routes = [
  {
    path: '',
    component: EmployeeComponent,
    data: {
      title: 'Employé'
    }
  },
];

@NgModule({
  imports: [CommonModule,RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmployeeRoutingModule { }
