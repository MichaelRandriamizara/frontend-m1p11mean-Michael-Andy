import { Component } from '@angular/core';
import {Router} from "@angular/router";
import {ServiceService} from "../../services/service/service.service";

@Component({
  selector: 'app-add-service',
  templateUrl: './add-service.component.html',
  styleUrl: './add-service.component.scss'
})
export class AddServiceComponent {

  form: any = {
    name: null,
    price: null,
    duration: null,
    commission: null,
    photos: ["aaaa", "bbbb"]
  };

  constructor(private serviceService: ServiceService, private router: Router) {

  }


  onSubmit(): void {
    const { name, price, duration, commission, photos } = this.form;
    this.serviceService.create({name, price, duration, commission, photos}, () => {
      this.router.navigate(['/service']);
    });

  }
}
