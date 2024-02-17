import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DepensePaymentRoutingModule } from './depense-payment-routing.module';
import {DepensePaymentComponent} from "./depense-payment.component";
import {
  CardBodyComponent,
  CardComponent,
  CardHeaderComponent,
  FormControlDirective,
  RowComponent, TableDirective
} from "@coreui/angular";
import {MyButtonComponent} from "../my-button/my-button.component";
import {NgxPaginationModule} from "ngx-pagination";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    DepensePaymentRoutingModule,
    CardBodyComponent,
    CardComponent,
    CardHeaderComponent,
    FormControlDirective,
    MyButtonComponent,
    NgxPaginationModule,
    ReactiveFormsModule,
    RowComponent,
    TableDirective,
    FormsModule
  ]
})
export class DepensePaymentModule { }
