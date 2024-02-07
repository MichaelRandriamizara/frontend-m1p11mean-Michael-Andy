import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ServiceRoutingModule } from './service-routing.module';
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
import {ServiceComponent} from "./service.component";


@NgModule({
  declarations: [ServiceComponent],
  imports: [
    CommonModule,
    ServiceRoutingModule,
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
export class ServiceModule { }
