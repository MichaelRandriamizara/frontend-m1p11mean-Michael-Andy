import {Component, OnInit} from '@angular/core';
import {GetterFn} from "../interface";
import {TaskService} from "../services/task/task.service";
import {Router} from "@angular/router";
import {formatDateTime, getStatus} from "../utils/string.util";

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrl: './task.component.scss'
})
export class TaskComponent implements OnInit{
  count: number = 0;
  page: number = 1;
  size: number = 10;
  totalPages: number = 1;
  getters: GetterFn[] = [];
  titles: string[] = ["Date","Client","Status"];
  res: any = {};

  constructor(private taskService: TaskService, private router: Router) {
  }

  fetchList() {
    this.taskService.getForLoggedUser(this.page, data => {
        this.res = data.data;
        this.count = data.count;
        this.totalPages = data.totalPages;
      })
  }

  ngOnInit(): void {
    this.getters = [
      (item: any) => formatDateTime(item.date),
      (item: any) => item?.user?.name,
      (item: any) => getStatus(item.status),
    ];
    this.fetchList();
  }

  pageChanged(event: any) {
    this.page = event;
    this.fetchList();
  }

  add(){
    this.router.navigate(['tache/ajouter']);
  }

  protected readonly Array = Array;


}
