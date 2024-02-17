import { Component } from '@angular/core';
import {GetterFn} from "../interface";
import {askConfirmation} from "../utils/sweet-alert.util";
import {TypeDepensePaymentService} from "../services/typeDepensePayment/type-depense-payment.service";
import {Router} from "@angular/router";
import {formatDate, transformMonthToFrench} from "../utils/string.util";
import {DepensePaymentService} from "../services/depensePayment/depense-payment.service";

@Component({
  selector: 'app-depense-payment',
  templateUrl: './depense-payment.component.html',
  styleUrl: './depense-payment.component.scss'
})
export class DepensePaymentComponent {
  nameFilter: string = '';
  count: number = 0;
  page: number = 1;
  totalPages: number = 1;
  getters: GetterFn[] = [];
  titles: string[] = ["Date", "Valeur", "Nom"];
  sorts: any = {};
  onRowClick?: (row: any) => any;
  res: any = {};



  delete(id: string) {
    askConfirmation(() => {
      this.depensePaymentService.delete(id, () => {
        this.fetchList();
      })
    });
  }

  edit(id: string) {
    this.router.navigate(['paiement-depense/modifier-occasionnel', id]);
  }


  constructor(private depensePaymentService: DepensePaymentService,private router:Router) {
    this.getters = [ (item: any) => formatDate(item.date), (item: any) => item.value, (item: any) => item.name];
    this.fetchList();
  }
  fetchList() {
    this.depensePaymentService.getAll(this.nameFilter, this.page,data => {
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

  pageChange(e: any) {
    this.page = e.pageIndex + 1;
    this.fetchList();
  }

  pageChanged(event: any) {
    this.page = event;
    this.fetchList();
  }

  add(){
    this.router.navigate(['paiement-depense/ajouter-occasionnel']);
  }

  search() {
    this.page = 1;
    this.fetchList();
  }

  protected readonly Array = Array;
}
