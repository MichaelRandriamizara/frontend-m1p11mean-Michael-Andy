import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {TaskService} from "../../services/task/task.service";
import {formatDateInput, formatDateTime} from "../../utils/string.util";
import {ServiceService} from "../../services/service/service.service";

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrl: './add-task.component.scss'
})
export class AddTaskComponent implements OnInit{
  services: any[] = [];
  selectedServices: any[] = [];
  gmtPlus3Offset = 3 * 60 * 60 * 1000; // GMT+3 offset in milliseconds
  now = new Date(Date.now() + this.gmtPlus3Offset);
  start = this.now.toISOString().slice(0, 16);
  form: any = {
    //default datetime now
    start: this.start
  };

  constructor(private taskService: TaskService, private router: Router, private serviceService:ServiceService) {
  }


  onSubmit(): void {
    let { start } = this.form;
    const services = this.selectedServices.map((service) => service._id);
    this.taskService.create({start, services}, () => {
      this.router.navigate(['/tache']);
    });

  }

  onMaterialGroupChange(event: any) {
    this.selectedServices = event;
  }

  selectAllForDropdownItems(items: any[]) {
    let allSelect = (items: any[]) => {
      items.forEach((element) => {
        element['selectedAllGroup'] = 'selectedAllGroup';
      });
    };

    allSelect(items);
  }

  ngOnInit(): void {
    this.serviceService.getAll(undefined, undefined, undefined, undefined, undefined, undefined, undefined, 0,  0, true, data => {
      this.services = data.data;
      this.selectAllForDropdownItems(this.services);
    });
  }
}
