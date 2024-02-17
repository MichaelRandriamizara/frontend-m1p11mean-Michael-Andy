import { Component } from '@angular/core';
import {GetterFn} from "../interface";
import {askConfirmation} from "../utils/sweet-alert.util";
import {Router} from "@angular/router";
import {ServiceService} from "../services/service/service.service";

@Component({
  selector: 'app-service',
  templateUrl: './service.component.html',
  styleUrl: './service.component.scss'
})
export class ServiceComponent {

  nameFilter: string = '';
  minPriceFilter!: number;
  maxPriceFilter!: number;
  minDurationFilter!: number;
  maxDurationFilter!: number;
  minCommissionFilter!: number;
  maxCommissionFilter!: number;
  count: number = 0;
  page: number = 1;
  size: number = 5;
  totalPages: number = 1;

  getters: GetterFn[] = [];
  titles: string[] = ["Nom", "Prix", "Durée (en Minutes)", "Commission (en %)"];
  sorts: any = {};
  onRowClick?: (row: any) => any;
  res: any = {};

  delete(id: string) {
    askConfirmation(() => {
      this.serviceService.delete(id, () => {
        this.fetchList();
      })
    });
  }

  edit(id: string) {
    this.router.navigate(['service/modifier', id]);
  }


  constructor(private serviceService: ServiceService,private router:Router) {
    this.getters = [(item: any) => item.name, (item: any) => item.price.toLocaleString(), (item: any) => item.duration, (item: any) => item.commission];
    this.fetchList();
  }
  fetchList() {
    this.serviceService.getAll(this.nameFilter, this.minPriceFilter, this.maxPriceFilter, this.minDurationFilter, this.maxDurationFilter, this.minCommissionFilter, this.maxCommissionFilter, this.page, this.size, data => {
      this.res = data.data;
      this.count = data.count;
      this.totalPages = data.totalPages;
    })
  }

  getSorted (title: string) {
    let keys = Object.keys(this.sorts)
    let i = keys.indexOf(title);
    if (i < 0) return undefined;
    return this.sorts[keys[i]];
  }

  add(){
    this.router.navigate(['service/ajouter']);
  }

  search() {
    this.page = 1;
    this.fetchList();
  }

  pageChanged(event: any) {
    this.page = event;
    this.fetchList();
  }

  protected readonly Array = Array;
}
