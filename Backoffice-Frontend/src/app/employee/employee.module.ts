import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmployeeRoutingModule } from './employee-routing.module';
import {EmployeeComponent} from "./employee.component";
import {
  ButtonDirective,
  CardBodyComponent,
  CardComponent,
  CardHeaderComponent, FormControlDirective,
  FormDirective, FormLabelDirective,
  RowComponent,
  TableDirective
} from "@coreui/angular";
import {MyButtonComponent} from "../my-button/my-button.component";
import {MatColumnDef, MatTable} from "@angular/material/table";
import {FormsModule} from "@angular/forms";
import {AddEmployeeComponent} from "./add-employee/add-employee.component";
import {EditEmployeeComponent} from "./edit-employee/edit-employee.component";


@NgModule({
  declarations: [EmployeeComponent, AddEmployeeComponent, EditEmployeeComponent],
  imports: [
    CommonModule,
    EmployeeRoutingModule,
    CardHeaderComponent,
    CardBodyComponent,
    CardComponent,
    MyButtonComponent,
    RowComponent,
    MatTable,
    MatColumnDef,
    TableDirective,
    FormDirective,
    FormLabelDirective,
    FormControlDirective,
    FormsModule,
    ButtonDirective
  ]
})
export class EmployeeModule { }
