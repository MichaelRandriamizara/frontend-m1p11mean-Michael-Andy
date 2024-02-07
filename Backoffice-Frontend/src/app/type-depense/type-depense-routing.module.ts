import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {TypeDepenseComponent} from "./type-depense.component";
import {RouterModule, Routes} from "@angular/router";
import {AddTypeDepenseComponent} from "./add-type-depense/add-type-depense.component";
import {EditTypeDepenseComponent} from "./edit-type-depense/edit-type-depense.component";


const routes: Routes = [
  {
    path: '',
    component: TypeDepenseComponent,
    data: {
      title: 'Type de dépense'
    }
  },
  {
    path: 'ajouter',
    component: AddTypeDepenseComponent,
    data: {
      title: 'Ajouter type de dépense'
    }
  },
  {
    path: 'modifier/:id',
    component: EditTypeDepenseComponent,
    data: {
      title: 'Modifier type de dépense'
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
