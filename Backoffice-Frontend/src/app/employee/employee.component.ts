import { Component } from '@angular/core';
import {GetterFn} from "../interface";
import {askConfirmation} from "../utils/sweet-alert.util";
import {EmployeeService} from "../services/employee/employee.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrl: './employee.component.scss'
})
export class EmployeeComponent {

  keyWordFilter: string = '';
  count: number = 0;
  page: number = 1;
  size: number = 10;

  totalPages: number = 1;
  getters: GetterFn[] = [];
  titles: string[] = ["Nom", "Email", "Contact", "Rôle"];
  sorts: any = {};
  onRowClick?: (row: any) => any;
  res: any = {};


  constructor(private employeeService: EmployeeService,private router:Router) {
    this.getters = [(item: any) => item.name, (item: any) => item.email, (item: any) => item.phone, (item: any) => item.role.name];
    this.fetchList();
  }

  fetchList() {
    this.employeeService.getAll(this.keyWordFilter, this.page, this.size, true, data => {
      this.res = data.data;
      this.count = data.count;
      this.totalPages = data.totalPages;
    })
  }

  delete(id: string) {
    askConfirmation(() => {
      this.employeeService.delete(id, () => {
        this.fetchList();
      })
    });
  }

  edit(id: string) {
    this.router.navigate(['employe/modifier', id]);
  }

  add(){
    this.router.navigate(['employe/ajouter']);
  }

  search() {
    this.page = 1;
    this.fetchList();
  }

  getSorted (title: string) {
    let keys = Object.keys(this.sorts)
    let i = keys.indexOf(title);
    if (i < 0) return undefined;
    return this.sorts[keys[i]];
  }

  pageChanged(event: any) {
    this.page = event;
    this.fetchList();
  }


  protected readonly Array = Array;
}
