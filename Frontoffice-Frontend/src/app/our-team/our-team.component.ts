import { Component, OnInit } from '@angular/core';
import {EmployeeService} from '../services/employee/employee.service';
import {ServiceService} from '../services/service/service.service';
import {GetterFn} from '../interfaces';
import {StorageService} from '../services/storage.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-service-notation',
  templateUrl: './our-team.component.html',
  styleUrls: ['./our-team.component.css']
})
export class OurTeamComponent implements OnInit {
  employees: any;
  services: any;
  constructor(private employeeService: EmployeeService, private serviceService: ServiceService, private storageService: StorageService, private router: Router) {
  }

  ngOnInit() {
    this.fetchList();
  }

  fetchList() {
    this.employeeService.getRanking(this.storageService.getUser()?.id, data => {
      this.employees = data;
    });
    this.serviceService.getRanking(this.storageService.getUser()?.id, data => {
      this.services = data;
    });
  }

  updateRating(rate: any) {
    if (this.storageService.getUser() == null) {
      this.router.navigate(['/login']);
    } else {
      const notes   = {
        employeeId: rate._id,
        userId: this.storageService.getUser().id,
        rating: rate.rating
      };
      this.employeeService.updateRating(notes, () => {
        this.fetchList();
      });
    }
  }

  updateServiceRating(rate: any) {
    if (this.storageService.getUser() == null) {
      this.router.navigate(['/login']);
    } else {
      const notes   = {
        serviceId: rate._id,
        userId: this.storageService.getUser().id,
        rating: rate.rating
      };
      this.serviceService.updateRating(notes, () => {
        this.fetchList();
      });
    }
  }

  navigateToEmployee(id: string) {
    this.router.navigate(['/profil-employee/' + id]);
  }
  navigateToService(id: string) {
    this.router.navigate(['/profil-service/' + id]);
  }

}
