import { Component } from '@angular/core';
import {GetterFn} from "../interface";
import {askConfirmation} from "../utils/sweet-alert.util";
import {TypeDepenseService} from "../services/depenses/type-depense.service";
import {Router} from "@angular/router";
import {TypeDepensePaymentService} from "../services/typeDepensePayment/type-depense-payment.service";
import {transformMonthToFrench} from "../utils/string.util";

@Component({
  selector: 'app-type-depense-payment',
  templateUrl: './type-depense-payment.component.html',
  styleUrl: './type-depense-payment.component.scss'
})
export class TypeDepensePaymentComponent {
  monthFilter: number = 0;
  yearFilter: number = 0;
  count: number = 0;
  page: number = 1;
  totalPages: number = 1;
  getters: GetterFn[] = [];
  titles: string[] = ["Mois", "Année", "Valeur", "Type de dépense"];
  sorts: any = {};
  onRowClick?: (row: any) => any;
  res: any = {};



  delete(id: string) {
    askConfirmation(() => {
      this.typeDepensePaymentService.delete(id, () => {
        this.fetchList();
      })
    });
  }

  edit(id: string) {
    this.router.navigate(['paiement-depense/modifier-mensuel', id]);
  }


  constructor(private typeDepensePaymentService: TypeDepensePaymentService,private router:Router) {
    this.getters = [(item: any) => transformMonthToFrench(item.month), (item: any) => item.year, (item: any) => item.value, (item: any) => item.typeDepense.name];
    this.fetchList();
  }
  fetchList() {
    this.typeDepensePaymentService.getAll(this.monthFilter, this.yearFilter, this.page,data => {
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
    this.router.navigate(['paiement-depense/ajouter-mensuel']);
  }

  search() {
    this.page = 1;
    this.fetchList();
  }

  protected readonly Array = Array;
}
