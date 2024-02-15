import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {TypeDepenseRoutingModule} from "./type-depense-routing.module";
import {TypeDepenseComponent} from "./type-depense.component";
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
import {AddTypeDepenseComponent} from "./add-type-depense/add-type-depense.component";
import {FormsModule} from "@angular/forms";
import {EditTypeDepenseComponent} from "./edit-type-depense/edit-type-depense.component";
import {MatPaginator} from "@angular/material/paginator";
import {MatIconModule} from "@angular/material/icon";
import {NgxPaginationModule} from "ngx-pagination";



@NgModule({
  declarations: [TypeDepenseComponent,AddTypeDepenseComponent,EditTypeDepenseComponent],
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
    TableDirective,
    FormDirective,
    FormLabelDirective,
    FormControlDirective,
    FormsModule,
    ButtonDirective,
    MatPaginator,
    MatIconModule,
    NgxPaginationModule
  ]
})
export class TypeDepenseModule { }
