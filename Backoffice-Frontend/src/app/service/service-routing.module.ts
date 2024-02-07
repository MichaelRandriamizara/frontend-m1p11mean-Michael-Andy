import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ServiceComponent} from "./service.component";
import {AddServiceComponent} from "./add-service/add-service.component";

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
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ServiceRoutingModule { }
