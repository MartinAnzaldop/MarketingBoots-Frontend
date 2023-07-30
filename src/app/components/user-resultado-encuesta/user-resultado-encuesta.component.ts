import { Component, OnInit} from '@angular/core';
import { Chart, registerables } from 'node_modules/chart.js'
Chart.register(...registerables);

@Component({
  selector: 'app-user-resultado-encuesta',
  templateUrl: './user-resultado-encuesta.component.html',
  styleUrls: ['./user-resultado-encuesta.component.css']
})
export class UserResultadoEncuestaComponent implements OnInit{

  constructor(){}

  ngOnInit(): void {
    this.RenderChart();
  }


  RenderChart() {
    const myChart = new Chart("piechart", {
      type: 'bar',
      data: {
        labels: ['Pregunta1', 'Pregunta2', 'Pregunta3', 'Pregunta4', 'Pregunta5', 'Preunta6', 'Pregunta7','Pregunta8','Pregunta9','Pregunta10'],
        datasets: [{
          label: '# of Votes',
          data: [12, 19, 3,20,15, 5, 2, 3,9,6,7],
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


}
