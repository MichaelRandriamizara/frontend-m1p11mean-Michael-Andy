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

@Component({
  selector: 'app-type-depense',
  // standalone: true,
  // imports: [
  //   CardComponent,
  //   CardHeaderComponent,
  //   CardBodyComponent,
  //   RowComponent,
  //   ButtonDirective,
  //   MatIcon,
  //   MatPaginator,
  //   MatTable,
  //   MatSort,
  //   MatHeaderCell,
  //   MatCell,
  //   MatSortHeader,
  //   MatColumnDef,
  //   MatHeaderCellDef,
  //   MatCellDef,
  //   NgForOf,
  //   MatIconButton,
  //   MatHeaderRow,
  //   MatRow,
  //   MatHeaderRowDef,
  //   MatRowDef,
  //   NgIf,
  //   MyButtonComponent
  // ],
  templateUrl: './type-depense.component.html',
  styleUrl: './type-depense.component.scss'
})
export class TypeDepenseComponent {
  actions !: RowAction[];
  getters: GetterFn[] = [];
  titles: string[] = ["Nom"];
  sorts: any = {};
  onRowClick?: (row: any) => any;
  dataSource: MatTableDataSource<any> = new MatTableDataSource();
  res: any = {};
    rowActions: RowAction[] = [
      {
        color: "primary",
        icon: "edit",
        onclick: (row: any, index: number) => {
          console.log("edit", row, index);
        },
        type: "edit"
      },
        {
            color: "warn",
            icon: "delete",
            onclick: (row) => askConfirmation(() => this.delete(row.id))
        }
    ];

  delete(id: string) {
      askConfirmation(() => {
          this.typeDepenseService.delete(id, () => {
              this.fetchList();
          })
      });
  }


  constructor(private typeDepenseService: TypeDepenseService) {
    this.actions = this.rowActions;
    this.getters = [(item: any) => item.name];
    this.fetchList();
  }

  click(row: any) {
    if (this.actions) return;
    if (this.onRowClick) this.onRowClick(row);
  }

  fetchList() {
      this.typeDepenseService.getAll(data => {
            this.res = data;
            this.dataSource = this.res;
      })
  }

  getSorted (title: string) {
    let keys = Object.keys(this.sorts)
    let i = keys.indexOf(title);
    if (i < 0) return undefined;
    return this.sorts[keys[i]];
  }

  add(){}

  search(){}

}
