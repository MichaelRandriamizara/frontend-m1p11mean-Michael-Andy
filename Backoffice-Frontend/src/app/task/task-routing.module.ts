import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {TaskComponent} from "./task.component";
import {AddTaskComponent} from "./add-task/add-task.component";

const routes: Routes = [
  {
    path: '',
    component: TaskComponent,
    data: {
      title: 'Tâches'
    }
  },
  {
    path: 'ajouter',
    component : AddTaskComponent,
    data: {
      title: 'Ajouter tâche'
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TaskRoutingModule { }
