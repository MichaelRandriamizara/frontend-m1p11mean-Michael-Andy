import { Component, OnInit } from '@angular/core';
import {StatService} from "../../services/stat/stat.service";
import {formatDateInput, getYearFromDate} from "../../utils/string.util";


@Component({
  templateUrl: 'dashboard.component.html',
  styleUrls: ['dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  chartData: any;
  chartData2: any;
  todayTurnover: number = 0;
  turnOverTitle: string = "";
  taskAppointmentTitle: string = "";
  todayTaskAppointment: number = 0;
  todayTaskNonAppointment: number = 0;
  year: string = getYearFromDate(new Date()+"");
  yearStr: string = getYearFromDate(new Date()+"");
  year2: string = getYearFromDate(new Date()+"");
  yearStr2: string = getYearFromDate(new Date()+"");
  now = formatDateInput(new Date()+"");
  constructor(private statService:StatService) {
  }



  ngOnInit(): void {
    this.getTurnover("");
    this.getTaskAppointment("");
    this.getTurnoverPerYear(this.year);
    this.getTaskPerYear(this.year2);
  }


  getTurnover(date:string){
    if(date===""){
      const dateNow = new Date();
      const dateStr = formatDateInput(dateNow+"");
      this.statService.getTurnoverPerDay(dateStr, data => {
        console.log(data);
        this.turnOverTitle = "Chiffre d'affaire du "+dateStr;
        this.todayTurnover = data.data;
      });
    }else{
      this.statService.getTurnoverPerDay(date, data => {
        this.turnOverTitle = "Chiffre d'affaire du "+date;
        this.todayTurnover = data.data;
      });
    }
  }

  getTaskAppointment(date:string){
    if(date===""){
      const dateNow = new Date();
      const dateStr = formatDateInput(dateNow+"");
      this.statService.getTaskPerDay(dateStr, data => {
        this.taskAppointmentTitle = "Nombre de tâches du "+dateStr;
        this.todayTaskAppointment = data.data.nbTaskAppointment;
        this.todayTaskNonAppointment = data.data.nbTaskNonAppointment;
      });
    }else{
      this.statService.getTaskPerDay(date, data => {
        this.taskAppointmentTitle = "Nombre de tâches du "+date;
        this.todayTaskAppointment = data.data.nbTaskAppointment;
        this.todayTaskNonAppointment = data.data.nbTaskNonAppointment;
      });
    }
  }

  filterTurnover(){
    const date = formatDateInput(this.now);
    this.getTurnover(date);
    this.getTaskAppointment(date);
  }

  getMonth(data:any[]){
    let month = new Array();
    for(let i=0; i<data.length; i++){
      month.push(data[i].month);
    }
    return month;
  }

  getTurnovers(data:any[]){
    let turnover = new Array();
    for(let i=0; i<data.length; i++){
      turnover.push(data[i].amount);
    }
    return turnover;
  }

  getExpenses(data:any[]){
    let expense = new Array();
    for(let i=0; i<data.length; i++){
      expense.push(data[i].expenses);
    }
    return expense;
  }

    getBenefits(data:any[]){
        let turnover = new Array();
        for(let i=0; i<data.length; i++){
            turnover.push(data[i].benefits);
        }
        return turnover;
    }


    initChart(data:any[]){
      this.chartData = {
        labels: this.getMonth(data[0]),
        datasets: [
          {
            label: 'Chiffre d\'affaire',
            backgroundColor: 'rgba(255, 99, 132, 0.2)',
            borderColor: 'rgba(255, 99, 132, 1)',
            borderWidth: 2, // Épaisseur de la ligne
            lineTension: 0.4, // Courbure de la ligne
            data: this.getTurnovers(data[0])
          },
          {
            label: 'Dépenses',
            backgroundColor: 'rgba(54, 162, 235, 0.2)',
            borderColor: 'rgba(54, 162, 235, 1)',
            borderWidth: 2, // Épaisseur de la ligne
            lineTension: 0.4, // Courbure de la ligne
            data: this.getExpenses(data[1])
          },
          {
            label: 'Bénéfices',
            backgroundColor: 'rgba(255, 206, 86, 0.2)',
            borderColor: 'rgba(255, 206, 86, 1)',
            borderWidth: 2, // Épaisseur de la ligne
            lineTension: 0.4, // Courbure de la ligne
            data: this.getBenefits(data[2])
          }
        ]
      };

    }

  initChart2(data:any[]){
    this.chartData2 = {
      labels: this.getMonth(data[0]),
      datasets: [
        {
          label: 'Reservations',
          backgroundColor: 'rgba(255, 99, 132, 0.2)',
          borderColor: 'rgba(255, 99, 132, 1)',
          borderWidth: 2, // Épaisseur de la ligne
          lineTension: 0.4, // Courbure de la ligne
          data: this.getTaskAppointmentFromData(data[0])
        },
        {
          label: 'Demande sur place',
          backgroundColor: 'rgba(54, 162, 235, 0.2)',
          borderColor: 'rgba(54, 162, 235, 1)',
          borderWidth: 2, // Épaisseur de la ligne
          lineTension: 0.4, // Courbure de la ligne
          data: this.getTaskNonAppointmentFromData(data[0])
        },
      ]
    };

  }

  getTaskAppointmentFromData(data:any[]){
    let taskAppointment = new Array();
    for(let i=0; i<data.length; i++){
      taskAppointment.push(data[i].appointments);
    }
    return taskAppointment;
  }

  getTaskNonAppointmentFromData(data:any[]){
    let taskNonAppointment = new Array();
    for(let i=0; i<data.length; i++){
      taskNonAppointment.push(data[i].nonAppointments);
    }
    return taskNonAppointment;
  }

  handleChartRef($chartRef: any) {

  }

  getTurnoverPerYear(year:string){
    this.yearStr = year;
    const dataArray = new Array();
    this.statService.getTurnoverPerMonth(year, data => {
      dataArray.push(data.data);
    });
    this.statService.getExpensesPerMonth(year, data => {
      dataArray.push(data.data);
    });
    this.statService.getBenefitsPerMonth(year, data => {
      dataArray.push(data.data);
      this.initChart(dataArray);
    })
  }


  getTaskPerYear(year:string){
    this.yearStr2 = year;
    const dataArray = new Array();
    this.statService.getTaskPerMonth(year, data => {
      dataArray.push(data.data);
      this.initChart2(dataArray);
    });
  }

  filterPerYear(){
    this.getTurnoverPerYear(this.year);
  }

  filterAppointmentPerYear(){
    this.getTaskPerYear(this.year2);
  }


}
