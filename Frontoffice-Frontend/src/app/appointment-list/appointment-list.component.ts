import { Component, OnInit } from '@angular/core';
import {StorageService} from '../services/storage.service';
import {Router} from '@angular/router';
import {TaskService} from '../services/task/task.service';
import {formatDateTime} from '../utils/string.utils';

@Component({
  selector: 'app-appointment-list',
  templateUrl: './appointment-list.component.html',
  styleUrls: ['./appointment-list.component.css']
})
export class AppointmentListComponent implements OnInit {

  tasks: any;
  constructor(private storageService: StorageService, private router: Router, private taskService: TaskService) { }

  ngOnInit(): void {
    if (this.storageService.getUser() == null) {
      this.router.navigate(['/login']);
    }
    this.getTasks();
  }
  getTasks() {
    this.taskService.getForConnectedUser(data => {
      this.tasks = data.data;
      console.log(data.data);
    });
  }

  protected readonly formatDateTime = formatDateTime;
}
