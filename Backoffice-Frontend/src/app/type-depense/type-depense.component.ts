import {Component, EventEmitter} from '@angular/core';
import {ButtonDirective, CardBodyComponent, CardComponent, CardHeaderComponent, RowComponent} from "@coreui/angular";
import {MatIcon} from "@angular/material/icon";
import {MatPaginator} from "@angular/material/paginator";
import {
  MatCell,
  MatCellDef,
  MatColumnDef,
  MatHeaderCell,
  MatHeaderCellDef,
  MatHeaderRow, MatHeaderRowDef, MatRow, MatRowDef,
  MatTable, MatTableDataSource
} from "@angular/material/table";
import {MatSort, MatSortHeader, Sort} from "@angular/material/sort";
import {NgForOf, NgIf} from "@angular/common";
import {MatIconButton} from "@angular/material/button";
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
      this.typeDepenseService.getAll(data => {
        this.res = data;
      })
  }

  getSorted (title: string) {
    let keys = Object.keys(this.sorts)
    let i = keys.indexOf(title);
    if (i < 0) return undefined;
    return this.sorts[keys[i]];
  }

  add(){
    this.router.navigate(['type-depense/ajouter']);
  }

  search(){}

  protected readonly Array = Array;
}
