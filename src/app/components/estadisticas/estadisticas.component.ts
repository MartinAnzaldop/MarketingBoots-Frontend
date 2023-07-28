import { Component, OnInit } from '@angular/core';
import { Chart, registerables } from 'node_modules/chart.js'
Chart.register(...registerables);

@Component({
  selector: 'app-estadisticas',
  templateUrl: './estadisticas.component.html',
  styleUrls: ['./estadisticas.component.css']
})
export class EstadisticasComponent implements OnInit {
 respuesta1:number=1;
 respuesta2:number=10;
  constructor() { }

  ngOnInit(): void {
    this.RenderChart();
    this.RenderCharts();
    this.RenderBubblechart();
    this.Renderdoughnut();
  }

  RenderChart() {
    const myChart = new Chart("piechart", {
      type: 'bar',
      data: {
        labels: ['1', '5', '10'],
        datasets: [{
          label: '# of Votes',
          data: [12, 19, 3],
          borderWidth: 1
        }]
      },
      options: {
        scales: {
          y: {
            beginAtZero: true
          }
        }
      }
    });

  }

  RenderCharts() {
    const myChart = new Chart("piechart2", {
      type: 'bar',
      data: {
        labels: ['1-10', '1-10', '1-10', '1-10', '1-10', '1-10'],
        datasets: [{
          label: '# of Votes',
          data: [this.respuesta1, this.respuesta2, 3, 8, 5, 6],
          borderWidth: 1
        }]
      },
      options: {
        scales: {
          y: {
            beginAtZero: true
          }
        }
      }
    });
  }

  RenderBubblechart(){
    const  data = {
      datasets: [{
        label: 'First Dataset',
        data: [{
          x: 20,
          y: 30,
          r: 15
        }, {
          x: 40,
          y: 10,
          r: 10
        }],
        backgroundColor: 'rgb(255, 99, 132)'
      }]
    };
    const myChart = new Chart('bubchart', {
      type: 'bubble',
      data: data,
      options: {

      }
    });
  }
  Renderdoughnut(){
  const data = {
    labels: [
      'Bueno',
      'Malo',
      'Horrible'
    ],
    datasets: [{
      label: 'My First Dataset',
      data: [300, 50, 100],
      backgroundColor: [
        'rgb(255, 99, 132)',
        'rgb(54, 162, 235)',
        'rgb(255, 205, 86)'
      ],
      hoverOffset: 4
    }]
  };
  const myChart = new Chart('doughnut', {
    type: 'doughnut',
    data: data,
    options: {

    }
  });
}


}
