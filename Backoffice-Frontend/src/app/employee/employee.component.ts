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

  getters: GetterFn[] = [];
  titles: string[] = ["Nom", "Email", "Contact", "Role"];
  sorts: any = {};
  onRowClick?: (row: any) => any;
  res: any = {};


  constructor(private employeeService: EmployeeService,private router:Router) {
    this.getters = [(item: any) => item.name, (item: any) => item.email, (item: any) => item.phone, (item: any) => item.role.name];
    this.fetchList();
  }

  fetchList() {
    this.employeeService.getAll(data => {
      this.res = data;
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

  search(){}
  protected readonly Array = Array;
}
