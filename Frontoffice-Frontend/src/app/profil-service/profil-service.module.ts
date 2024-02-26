import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProfilServiceRoutingModule } from './profil-service-routing.module';
import {ProfilServiceComponent} from './profil-service.component';


@NgModule({
  declarations: [ProfilServiceComponent],
  imports: [
    CommonModule,
    ProfilServiceRoutingModule
  ]
})
export class ProfilServiceModule { }
