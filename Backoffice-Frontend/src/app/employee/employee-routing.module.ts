import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {CommonModule} from "@angular/common";
import {EmployeeComponent} from "./employee.component";
import {AddEmployeeComponent} from "./add-employee/add-employee.component";
import {EditEmployeeComponent} from "./edit-employee/edit-employee.component";
import {UpdatePaswordComponent} from "./update-pasword/update-pasword.component";

const routes: Routes = [
  {
    path: '',
    component: EmployeeComponent,
    data: {
      title: 'Employé'
    }
  },
  {
    path: 'ajouter',
    component: AddEmployeeComponent,
    data: {
      title: 'Ajouter employé'
    }
  },
  {
    path: 'modifier/:id',
    component: EditEmployeeComponent,
    data: {
      title: 'Modifier employé'
    }
  },
  {
    path: 'modifier-mot-de-passe',
    component: UpdatePaswordComponent,
    data: {
      title: 'Modifier mot de passe'
    }
  }
];

@NgModule({
  imports: [CommonModule,RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmployeeRoutingModule { }
