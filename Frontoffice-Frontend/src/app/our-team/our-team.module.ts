import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OurTeamRoutingModule } from './our-team-routing.module';
import {OurTeamComponent} from './our-team.component';
import {NgbRatingModule} from '@ng-bootstrap/ng-bootstrap';


@NgModule({
  declarations: [OurTeamComponent],
  imports: [
    CommonModule,
    OurTeamRoutingModule,
    NgbRatingModule
  ],
})
export class OurTeamModule { }
