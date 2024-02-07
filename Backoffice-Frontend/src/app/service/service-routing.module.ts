import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ServiceComponent} from "./service.component";
import {AddServiceComponent} from "./add-service/add-service.component";
import {EditTypeDepenseComponent} from "../type-depense/edit-type-depense/edit-type-depense.component";
import {EditServiceComponent} from "./edit-service/edit-service.component";

const routes: Routes = [
  {
    path: '',
    component: ServiceComponent,
    data: {
      title: 'Service'
    }
  },
  {
    path: 'ajouter',
    component: AddServiceComponent,
    data: {
      title: 'Ajouter service'
    }
  },
  {
    path: 'modifier/:id',
    component: EditServiceComponent,
    data: {
      title: 'Modifier service'
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ServiceRoutingModule { }
