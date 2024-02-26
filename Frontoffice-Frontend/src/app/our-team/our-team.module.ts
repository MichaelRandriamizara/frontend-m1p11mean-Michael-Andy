import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OurTeamRoutingModule } from './our-team-routing.module';
import {OurTeamComponent} from './our-team.component';
import {NgbRatingModule} from '@ng-bootstrap/ng-bootstrap';
import {ImageModalComponent} from '../image-modal/image-modal.component';


@NgModule({
  declarations: [OurTeamComponent,ImageModalComponent],
  imports: [
    CommonModule,
    OurTeamRoutingModule,
    NgbRatingModule
  ],
})
export class OurTeamModule { }
