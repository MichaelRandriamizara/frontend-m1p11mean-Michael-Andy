import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TaskRoutingModule } from './task-routing.module';
import {TaskComponent} from "./task.component";
import {AddTaskComponent} from "./add-task/add-task.component";
import {
  CardBodyComponent,
  CardComponent,
  CardHeaderComponent,
  FormControlDirective,
  RowComponent, TableDirective
} from "@coreui/angular";
import {MyButtonComponent} from "../my-button/my-button.component";
import {NgxPaginationModule} from "ngx-pagination";
import {ReactiveFormsModule} from "@angular/forms";


@NgModule({
  declarations: [TaskComponent,AddTaskComponent],
  imports: [
    CommonModule,
    TaskRoutingModule,
    CardBodyComponent,
    CardComponent,
    CardHeaderComponent,
    FormControlDirective,
    MyButtonComponent,
    NgxPaginationModule,
    ReactiveFormsModule,
    RowComponent,
    TableDirective
  ]
})
export class TaskModule { }
