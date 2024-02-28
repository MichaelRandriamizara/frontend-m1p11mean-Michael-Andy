import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SpecialServiceRoutingModule } from './special-service-routing.module';
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
import {AddSpecialServiceComponent} from "./add-special-service/add-special-service.component";
import {NgSelectModule} from "@ng-select/ng-select";
import {SpecialServiceComponent} from "./special-service/special-service.component";
import {NgxPaginationModule} from "ngx-pagination";


@NgModule({
  declarations: [AddSpecialServiceComponent,SpecialServiceComponent],
  imports: [
    CommonModule,
    SpecialServiceRoutingModule,
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
    NgSelectModule,
    NgxPaginationModule
  ]
})
export class SpecialServiceModule { }
