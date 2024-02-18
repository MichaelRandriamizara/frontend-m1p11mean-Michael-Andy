import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {OurTeamComponent} from './our-team.component';

const routes: Routes = [
  {
    path: '',
    component: OurTeamComponent,
    data: {
        title: 'Notation des services'
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OurTeamRoutingModule { }
