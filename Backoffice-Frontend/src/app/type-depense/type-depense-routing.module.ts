import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {TypeDepenseComponent} from "./type-depense.component";
import {RouterModule, Routes} from "@angular/router";


const routes: Routes = [
  {
    path: '',
    component: TypeDepenseComponent,
    data: {
      title: 'Type de dépense'
    }
  }
]
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class TypeDepenseRoutingModule {

}
