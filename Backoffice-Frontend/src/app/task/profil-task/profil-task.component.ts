import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {TaskService} from "../../services/task/task.service";
import {formatDateTime, getStatus} from "../../utils/string.util";

@Component({
  selector: 'app-profil-task',
  templateUrl: './profil-task.component.html',
  styleUrl: './profil-task.component.scss'
})
export class ProfilTaskComponent implements OnInit{
  id: string = '';
  task!: any ;
  constructor(private taskService: TaskService, private router: Router, private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.id = this.route.snapshot.params["id"];
    this.taskService.get(this.id, data => {
      this.task = data;
      console.log(this.task);
    });
  }

  protected readonly formatDateTime = formatDateTime;
  protected readonly getStatus = getStatus;
}
