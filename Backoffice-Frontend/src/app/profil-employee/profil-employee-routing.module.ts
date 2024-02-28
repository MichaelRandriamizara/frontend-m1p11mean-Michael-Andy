import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ProfilEmployeeComponent} from "./profil-employee.component";

const routes: Routes = [
  {
    path: '',
    component: ProfilEmployeeComponent,
    data: {
      title: 'Profil'
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProfilEmployeeRoutingModule { }
