import { Component, OnInit } from '@angular/core';
import {ServiceService} from '../services/service/service.service';

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
    constructor(private serviceService: ServiceService) { }

    ngOnInit() {
        this.findCurrentOffers();
    }

    findCurrentOffers() {
        this.serviceService.findCurrentOffers(data => {
            this.specialOffers = data;
            console.log(this.specialOffers);
        });
    }
}
