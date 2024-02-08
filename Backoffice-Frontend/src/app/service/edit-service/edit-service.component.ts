import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {ServiceService} from "../../services/service/service.service";

@Component({
  selector: 'app-edit-service',
  templateUrl: './edit-service.component.html',
  styleUrl: './edit-service.component.scss'
})
export class EditServiceComponent implements OnInit{

  id: string = '';
  form: any = {
    name: null,
    price: null,
    duration: null,
    commission: null,
    photos: ["aaaa", "bbbb"]
  };
  constructor(private router:ActivatedRoute,private serviceService: ServiceService,private route: Router) {
  }
  ngOnInit(): void {
    this.id = this.router.snapshot.paramMap.get('id')!;
    this.serviceService.get(this.id, data => {
      this.form = data;
    });
  }

  onSubmit(): void {
    const { name, price, duration, commission, photos } = this.form;
    this.serviceService.update(this.id, {name, price, duration, commission, photos}, () => {
      this.route.navigate(['/service']);
    })
  }

}
