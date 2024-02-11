import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ServiceRoutingModule } from './service-routing.module';
import {
  ButtonCloseDirective,
  ButtonDirective,
  CardBodyComponent,
  CardComponent,
  CardHeaderComponent, CardImgDirective, FormControlDirective,
  FormDirective, FormLabelDirective,
  RowComponent,
  TableDirective
} from "@coreui/angular";
import {MyButtonComponent} from "../my-button/my-button.component";
import {MatColumnDef, MatTable} from "@angular/material/table";
import {FormsModule} from "@angular/forms";
import {ServiceComponent} from "./service.component";
import {AddServiceComponent} from "./add-service/add-service.component";
import {EditServiceComponent} from "./edit-service/edit-service.component";


@NgModule({
  declarations: [ServiceComponent, AddServiceComponent, EditServiceComponent],
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
    ButtonDirective,
    ButtonCloseDirective,
    CardImgDirective
  ]
})
export class ServiceModule { }
