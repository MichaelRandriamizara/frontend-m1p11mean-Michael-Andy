import {Component, EventEmitter} from '@angular/core';
import {GetterFn, RowAction, SortResult} from "../interface";
import {askConfirmation} from "../utils/sweet-alert.util";
import {TypeDepenseService} from "../services/depenses/type-depense.service";
import {MyButtonComponent} from "../my-button/my-button.component";
import {Router} from "@angular/router";

@Component({
  selector: 'app-type-depense',
  templateUrl: './type-depense.component.html',
  styleUrl: './type-depense.component.scss'
})
export class TypeDepenseComponent {
  nameFilter: string = '';
  count: number = 0;
  page: number = 1;
  totalPages: number = 1;
  getters: GetterFn[] = [];
  titles: string[] = ["Nom"];
  sorts: any = {};
  onRowClick?: (row: any) => any;
  res: any = {};



  delete(id: string) {
      askConfirmation(() => {
          this.typeDepenseService.delete(id, () => {
              this.fetchList();
          })
      });
  }

  edit(id: string) {
    this.router.navigate(['type-depense/modifier', id]);
  }


  constructor(private typeDepenseService: TypeDepenseService,private router:Router) {
    this.getters = [(item: any) => item.name];
    this.fetchList();
  }
  fetchList() {
    this.typeDepenseService.getAll(this.nameFilter, this.page,data => {
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
    this.router.navigate(['type-depense/ajouter']);
  }

  search() {
    this.page = 1;
    this.fetchList();
  }

  protected readonly Array = Array;
}
