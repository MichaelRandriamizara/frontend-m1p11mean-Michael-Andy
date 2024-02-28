import { Component, OnInit } from '@angular/core';
import {ServiceService} from '../services/service/service.service';
import { Router } from '@angular/router';


@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss']
})

export class HomeComponent implements OnInit {
    specialOffers: any = null;
    model = {
        left: true,
        middle: false,
        right: false
    };

    focus;
    focus1;
    constructor(private serviceService: ServiceService, private router: Router) { }

    ngOnInit() {
        this.findCurrentOffers();
    }

    findCurrentOffers() {
        this.serviceService.findCurrentOffers(data => {
            this.specialOffers = data;
            console.log(this.specialOffers);
        });
    }

    navigateToCreateAppointment() {
        this.router.navigate(['/appointment/create']);
    }
}
