import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {TypeDepenseRoutingModule} from "./type-depense-routing.module";
import {TypeDepenseComponent} from "./type-depense.component";
import {CardBodyComponent, CardComponent, CardHeaderComponent, RowComponent, TableDirective} from "@coreui/angular";
import {MyButtonComponent} from "../my-button/my-button.component";
import {MatColumnDef, MatTable} from "@angular/material/table";



@NgModule({
  declarations: [TypeDepenseComponent],
  imports: [
    CommonModule,
    TypeDepenseRoutingModule,
    CardHeaderComponent,
    CardBodyComponent,
    CardComponent,
    MyButtonComponent,
    RowComponent,
    MatTable,
    MatColumnDef,
    TableDirective
  ]
})
export class TypeDepenseModule { }
