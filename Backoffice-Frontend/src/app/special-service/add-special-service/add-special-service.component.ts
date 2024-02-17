import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {SpecialServiceService} from "../../services/special-service/special-service.service";
import {ServiceService} from "../../services/service/service.service";


@Component({
  selector: 'app-add-special-service',
  templateUrl: './add-special-service.component.html',
  styleUrl: './add-special-service.component.scss'
})
export class AddSpecialServiceComponent implements OnInit {

  form: any = {
    services: [],
    promotion: null,
    start: null,
    end: null,
  };

  services: any =[];

  constructor(private specialServiceService: SpecialServiceService, private serviceService: ServiceService, private router: Router) {
  }

  onSubmit(): void {
    const { services, promotion, start, end } = this.form;
    this.specialServiceService.create({services, promotion, start, end}, () => {
      this.router.navigate(['/special-service']);
    });

  }

  ngOnInit(): void {
    this.serviceService.getAll(undefined, undefined, undefined, undefined, undefined, undefined, undefined, 0,  0, true, data => {
      this.services = data.data;
    });
  }

  onItemSelect(item: any) {
    this.form.services.push(item._id);
  }

  onItemRemove(item: any) {
    this.form.services.splice(this.form.services.indexOf(item._id), 1);
  }
}
