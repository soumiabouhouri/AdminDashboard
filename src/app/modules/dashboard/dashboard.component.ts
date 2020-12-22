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
  chart = [] as  any;
  chart2 = [] as  any;
  chart3 = [] as  any;
  chart4 = [] as  any;
  result = [] as  any;
    constructor(private httpClient: HttpClient) {}
  ngOnInit(): void {
    this.chart = this.chart1('myChart1', 'line');
    this.chart2 = this.chart1('myChart2', 'bar');
    this.chart3 = this.chart1('myChart3', 'doughnut');
    this.chart4 = this.chart1('myChart4', 'polarArea');
  }
  chart1(chartContainer: string, chartType?: string): any{
      return new Chart(chartContainer, {
      type: chartType,
      data: {
        labels:  ['Red', 'Yellow', 'Blue'],
        datasets: [
          {
            data:  [55,6,3,7,44,25,9,14],
            borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)'
                  ],
            fill: true,
            backgroundColor: [
              'rgba(255, 99, 132, 0.2)',
              'rgba(54, 162, 235, 0.2)',
              'rgba(255, 206, 86, 0.2)',
              'rgba(75, 192, 192, 0.2)',
              'rgba(153, 102, 255, 0.2)',
              'rgba(255, 159, 64, 0.2)'
            ],
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
