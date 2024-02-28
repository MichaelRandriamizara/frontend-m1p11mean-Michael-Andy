import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {EmployeeService} from "../services/employee/employee.service";
import {formatDateInput, formatDouble} from "../utils/string.util";
import {TaskService} from "../services/task/task.service";

@Component({
  selector: 'app-profil-employee',
  templateUrl: './profil-employee.component.html',
  styleUrl: './profil-employee.component.scss'
})
export class ProfilEmployeeComponent implements OnInit{
  id: string = "";
  employee: any ;
  latestHoursOfWorker: null | number = null;
  dailyCommisson: null | number = null;
  hourOfWork: null | number = null;

  beginFilter: string = "";
  endFilter: string = "";


  form: any = {
    start: null,
    end: null
  }


  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      const employeeId = params['id'];

      if (employeeId) {
        this.employeeService.get(employeeId, data => {
          this.id = employeeId;
          this.getLatestHoursOfWorker(employeeId);
          this.getDailyCommisson(employeeId);
          this.employee = data;
        });
      }else{
        this.employeeService.getConnectedEmployee(data => {
          this.employee = data;
          this.id = this.employee._id;
          this.getDailyCommisson(this.employee._id);
          this.getLatestHoursOfWorker(this.employee._id);
        })
      }
    });
  }


  constructor(private employeeService: EmployeeService, private router: Router, private route: ActivatedRoute, private taskService: TaskService) {
  }

  getLatestHoursOfWorker(id: string) {
    const date = new Date();
    //convert date to format yyyy-mm-dd
    const dataminus30 = new Date();
    dataminus30.setDate(dataminus30.getDate() - 30);
    const dateStr = formatDateInput(date+"");
    const dateStrMinus30 = formatDateInput(dataminus30+"");
    let duration = 0;
    this.employeeService.getHoursOfWorker(id, dateStrMinus30, dateStr, data => {
      for(let i=0; i<data.length; i++){
        duration += data[i].duration;
      }
      this.latestHoursOfWorker = duration;
    });
  }

  protected readonly formatDouble = formatDouble;

  filterHours() {
    const start = formatDateInput(this.form.start);
    const end = formatDateInput(this.form.end);
    this.beginFilter = start;
    this.endFilter = end;
    let duration = 0;
    this.employeeService.getHoursOfWorker(this.id, start, end, data => {
      for(let i=0; i<data.length; i++){
        duration += data[i].duration;
      }
      this.hourOfWork = duration;
    });

  }

  getDailyCommisson(id:string) {
    this.taskService.getDailyCommission(id, formatDateInput(new Date()+""), data => {
      this.dailyCommisson = data.data;
    });
  }
}
