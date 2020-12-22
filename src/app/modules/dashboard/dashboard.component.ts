import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Chart } from 'chart.js';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  url = 'http://localhost:4001/results';
  nbrHoursOfStudy = [];
  grade = [];
  // chartContainer
  chart = [];
  chart2 = [];
  chart3 = [];
  chart4 = [];
  constructor(private httpClient: HttpClient) {}
  ngOnInit(): void {
    this.chart = this.chart1('myChart1','line');
    this.chart2 = this.chart1('myChart2','bar');
    this.chart3 = this.chart1('myChart3', 'doughnut');
    this.chart4 = this.chart1('myChart4', 'polarArea');
  }
  chart1(chartContainer: string, chartType?: string){
      return new Chart(chartContainer, {
      type: chartType,
      data: {
        labels:  ['Red', 'Yellow', 'Blue'],
        datasets: [
          {
            data:  [55,6,3,7,44,25,9,14],
            borderColor: 'deepPink',
            fill: true,
            backgroundColor:'deepPink'
          }
        ]
      },
      options: {
        scales: {
          xAxes: [{
            scaleLabel: {
              labelString: 'number hours of working '
            }
          }],
          yAxes: [{
            scaleLabel: {
              display: false,
              labelString: 'grade'
            }
          }]
        }
      }
    });
  }
}
