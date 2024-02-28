import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AddSpecialServiceComponent} from "./add-special-service/add-special-service.component";
import {SpecialServiceComponent} from "./special-service/special-service.component";

const routes: Routes = [
  {
    path: '',
    component: SpecialServiceComponent,
    data: {
      title: 'Offres spéciales'
    }
  },
  {
    path: 'ajouter',
    component: AddSpecialServiceComponent,
    data: {
      title: 'Ajouter offre spéciale'
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SpecialServiceRoutingModule { }
