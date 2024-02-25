import { Component, OnInit } from '@angular/core';
import {StatService} from "../../services/stat/stat.service";
import {formatDateInput, getYearFromDate} from "../../utils/string.util";


@Component({
  templateUrl: 'dashboard.component.html',
  styleUrls: ['dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  chartData: any;
  todayTurnover: number = 0;
  turnOverTitle: string = "";
  year: string = getYearFromDate(new Date()+"");
  yearStr: string = getYearFromDate(new Date()+"");
  now = formatDateInput(new Date()+"");
  constructor(private statService:StatService) {
  }



  ngOnInit(): void {
    this.getTurnover("");
    this.getTurnoverPerYear(this.year);
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

  filterTurnover(){
    const date = formatDateInput(this.now);
    this.getTurnover(date);
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

  initChart(data:any[]){
    this.chartData = {
      labels: this.getMonth(data),
      datasets: [
        {
          label: 'Chiffre d\'affaire',
          backgroundColor: 'rgba(220,220,220,0.2)',
          borderColor: 'rgba(220,220,220,1)',
          pointBackgroundColor: 'rgba(220,220,220,1)',
          pointBorderColor: '#fff',
          data: this.getTurnovers(data)
        }
      ]
    };

  }

  handleChartRef($chartRef: any) {

  }

  getTurnoverPerYear(year:string){
    this.yearStr = year;
    this.statService.getTurnoverPerMonth(year, data => {
      this.initChart(data.data);
    });
  }

  filterPerYear(){
    this.getTurnoverPerYear(this.year);
  }


}
