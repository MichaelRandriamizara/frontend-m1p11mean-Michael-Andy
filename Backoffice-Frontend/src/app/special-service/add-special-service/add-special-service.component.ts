import { Component } from '@angular/core';
import {Router} from "@angular/router";
import {SpecialServiceService} from "../../services/special-service/special-service.service";

@Component({
  selector: 'app-add-special-service',
  templateUrl: './add-special-service.component.html',
  styleUrl: './add-special-service.component.scss'
})
export class AddSpecialServiceComponent {

  form: any = {
    services: ['65c7d400d7420b35dc133b90', '65c27a6621c99da805929711'],
    promotion: null,
    start: null,
    end: null,
  };


  constructor(private specialServiceService: SpecialServiceService, private router: Router) {
  }

  onSubmit(): void {
    const { services, promotion, start, end } = this.form;
    this.specialServiceService.create({services, promotion, start, end}, () => {
      this.router.navigate(['/special-service']);
    });

  }
}
