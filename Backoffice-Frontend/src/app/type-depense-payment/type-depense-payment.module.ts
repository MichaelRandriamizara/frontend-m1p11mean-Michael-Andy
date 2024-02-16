import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TypeDepensePaymentRoutingModule } from './type-depense-payment-routing.module';
import {TypeDepensePaymentComponent} from "./type-depense-payment.component";
import {
  ButtonDirective,
  CardBodyComponent,
  CardComponent,
  CardHeaderComponent,
  FormControlDirective,
  RowComponent, TableDirective
} from "@coreui/angular";
import {FormsModule} from "@angular/forms";
import {MyButtonComponent} from "../my-button/my-button.component";
import {NgxPaginationModule} from "ngx-pagination";
import {AddTypeDepensePaymentComponent} from "./add-type-depense-payment/add-type-depense-payment.component";
import {EditTypeDepensePaymentComponent} from "./edit-type-depense-payment/edit-type-depense-payment.component";


@NgModule({
  declarations: [TypeDepensePaymentComponent,AddTypeDepensePaymentComponent,EditTypeDepensePaymentComponent],
  imports: [
    CommonModule,
    TypeDepensePaymentRoutingModule,
    CardBodyComponent,
    CardComponent,
    CardHeaderComponent,
    FormControlDirective,
    FormsModule,
    MyButtonComponent,
    NgxPaginationModule,
    RowComponent,
    TableDirective,
    ButtonDirective
  ]
})
export class TypeDepensePaymentModule { }
