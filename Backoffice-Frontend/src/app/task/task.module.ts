import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TaskRoutingModule } from './task-routing.module';
import {TaskComponent} from "./task.component";
import {AddTaskComponent} from "./add-task/add-task.component";
import {
    ButtonDirective,
    CardBodyComponent,
    CardComponent,
    CardHeaderComponent,
    FormControlDirective, FormDirective,
    RowComponent, TableDirective
} from "@coreui/angular";
import {MyButtonComponent} from "../my-button/my-button.component";
import {NgxPaginationModule} from "ngx-pagination";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {NgSelectModule} from "@ng-select/ng-select";
import {ProfilTaskComponent} from "./profil-task/profil-task.component";


@NgModule({
  declarations: [TaskComponent,AddTaskComponent,ProfilTaskComponent],
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
    TableDirective,
    ButtonDirective,
    FormDirective,
    FormsModule,
    NgSelectModule
  ]
})
export class TaskModule { }
