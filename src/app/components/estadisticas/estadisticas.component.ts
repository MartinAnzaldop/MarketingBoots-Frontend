import { Component, OnInit } from '@angular/core';

import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Encuesta } from 'src/app/models/encuesta';
import { BancoPreguService } from 'src/app/service/bancoPregu.service';
import { RespuestasService } from 'src/app/service/respuestas.service';
import { SolicitudService } from 'src/app/service/solicitud.service';
import {Chart, registerables} from 'node_modules/chart.js'

Chart.register(...registerables);

@Component({
  selector: 'app-estadisticas',
  templateUrl: './estadisticas.component.html',
  styleUrls: ['./estadisticas.component.css'],
})
export class EstadisticasComponent implements OnInit {

  EncuestaForm: FormGroup;
  listaEncuestas: Encuesta[] = [];
  objeto: any;
  id: string | null;
  empresa: string = '';
  titulo: string = '';
  pregunta1: string = '';
  nombreArticulo: string = '';
  pregunta3: string = '';
  pregunta4: string = '';
  pregunta5: string = '';
  pregunta6: string = '';
  pregunta7: string = '';
  pregunta8: string = '';
  pregunta9: string = '';
  pregunta10: string = '';
  pregunta2: string = '';
  precioArticulo: any;
  marca: any;

  opciones = [
    { valor: '1', texto: 'Totalmente desacuerdo' },
    { valor: '2', texto: 'Desacuerdo' },
    { valor: '3', texto: 'De acuerdo' },
    { valor: '4', texto: 'Muy de acuerdo' },
    { valor: '5', texto: 'Totalmente de acuerdo' },
    // Agrega más opciones según tus necesidades
  ];

  constructor(
    private activateRouter: ActivatedRoute,
    private _Solicitud: SolicitudService,
    private _BancoPreguService: BancoPreguService,
    private fb: FormBuilder,
    private router: Router,
    private toastr: ToastrService,
    private aRouter: ActivatedRoute,
    private _Encuesta: RespuestasService
  ) {
    this.EncuestaForm = this.fb.group({
      nombre: ['', Validators.required],
      edad: ['', Validators.required],
      empresa: ['', Validators.required],
      direccion: ['', Validators.required],
      nombreArticulo: ['', Validators.required],
      precioArticulo: ['', Validators.required],
      marcaArticulo: ['', Validators.required],
      titulo: ['', Validators.required],
      pregunta1: ['', Validators.required],
      respuesta1: ['', Validators.required],
      pregunta2: ['', Validators.required],
      respuesta2: ['', Validators.required],
      pregunta3: ['', Validators.required],
      respuesta3: ['', Validators.required],
      pregunta4: ['', Validators.required],
      respuesta4: ['', Validators.required],
      pregunta5: ['', Validators.required],
      respuesta5: ['', Validators.required],
      pregunta6: ['', Validators.required],
      respuesta6: ['', Validators.required],
      pregunta7: ['', Validators.required],
      respuesta7: ['', Validators.required],
      pregunta8: ['', Validators.required],
      respuesta8: ['', Validators.required],
      pregunta9: ['', Validators.required],
      respuesta9: ['', Validators.required],
      pregunta10: ['', Validators.required],
      respuesta10: ['', Validators.required],
    });
  }

  ngOnInit(): void {
    this.pregunta1Of3();
    this.obtenerObjeto();
    this.obtenerEncuestas();
    this.renderChart();
    this.renderChart2();
    this.renderChart3();
    this.renderChart4();
    this.renderChart5();
    this.renderChart6();
    this.renderChart7();
    this.renderChart8();
    this.renderChart9();
    this.renderChart10();
    
  }

  obtenerObjeto(): void {
    this.id = this.activateRouter.snapshot.paramMap.get('id');
    this.objeto = this._Solicitud
      .obtenerSolicitudById(this.id!)
      .subscribe((data) => {
        console.log(data.empresa);
        this.titulo = data.titulo;
        this.empresa = data.empresa;
        this.marca = data.marcaArticulo;
        this.nombreArticulo = data.nombreArticulo;
        this.precioArticulo = data.precioArticulo;
        this.pregunta1 = data.pregunta1;
        this.pregunta3 = data.pregunta3;
        this.pregunta4 = data.pregunta4;
        this.pregunta5 = data.pregunta5;
        this.pregunta6 = data.pregunta6;
        this.pregunta7 = data.pregunta7;
        this.pregunta8 = data.pregunta8;
        this.pregunta9 = data.pregunta9;
        this.pregunta10 = data.pregunta10;
        this.pregunta2 = data.pregunta2;
        this.pregunta2 = data.pregunta2;
      });
  }

  obtenerEncuestas() {
    this._Encuesta.getRespuestas().subscribe(
      (data) => {
        console.log(data);
        this.listaEncuestas = data;
      },
      (error) => {
        console.log(error);
      }
    );
  }

  //Pregunta 1
  pregunta1Of1(): number {
    return this.listaEncuestas.filter(
      (encuesta) =>
        encuesta.nombreArticulo === this.nombreArticulo &&
        encuesta.respuesta1 === 1
    ).length;
  }
  pregunta1Of2(): number {
    return this.listaEncuestas.filter(
      (encuesta) =>
        encuesta.nombreArticulo === this.nombreArticulo &&
        encuesta.respuesta1 === 2
    ).length;
  }
  pregunta1Of3(): number {
    return this.listaEncuestas.filter(
      (encuesta) =>
        encuesta.nombreArticulo === this.nombreArticulo &&
        encuesta.respuesta1 === 3
    ).length;
  }
  pregunta1Of4(): number {
    return this.listaEncuestas.filter(
      (encuesta) =>
        encuesta.nombreArticulo === this.nombreArticulo &&
        encuesta.respuesta1 === 4
    ).length;
  }

  //pregunta 2
  pregunta2Of1(): number {
    return this.listaEncuestas.filter(
      (encuesta) =>
        encuesta.nombreArticulo === this.nombreArticulo &&
        encuesta.respuesta2 === 1
    ).length;
  }
  pregunta2Of2(): number {
    return this.listaEncuestas.filter(
      (encuesta) =>
        encuesta.nombreArticulo === this.nombreArticulo &&
        encuesta.respuesta2 === 2
    ).length;
  }
  pregunta2Of3(): number {
    return this.listaEncuestas.filter(
      (encuesta) =>
        encuesta.nombreArticulo === this.nombreArticulo &&
        encuesta.respuesta2 === 3
    ).length;
  }

  pregunta2Of4(): number {
    return this.listaEncuestas.filter(
      (encuesta) =>
        encuesta.nombreArticulo === this.nombreArticulo &&
        encuesta.respuesta2 === 4
    ).length;
  }

  //pregunta 3
  pregunta3Of1(): number {
    return this.listaEncuestas.filter(
      (encuesta) =>
        encuesta.nombreArticulo === this.nombreArticulo &&
        encuesta.respuesta3 === 1
    ).length;
  }
  pregunta3Of2(): number {
    return this.listaEncuestas.filter(
      (encuesta) =>
        encuesta.nombreArticulo === this.nombreArticulo &&
        encuesta.respuesta3 === 2
    ).length;
  }
  pregunta3Of3(): number {
    return this.listaEncuestas.filter(
      (encuesta) =>
        encuesta.nombreArticulo === this.nombreArticulo &&
        encuesta.respuesta3 === 3
    ).length;
  }

  pregunta3Of4(): number {
    return this.listaEncuestas.filter(
      (encuesta) =>
        encuesta.nombreArticulo === this.nombreArticulo &&
        encuesta.respuesta3 === 4
    ).length;
  }
  //pregunta 4
  pregunta4Of1(): number {
    return this.listaEncuestas.filter(
      (encuesta) =>
        encuesta.nombreArticulo === this.nombreArticulo &&
        encuesta.respuesta4 === 1
    ).length;
  }
  pregunta4Of2(): number {
    return this.listaEncuestas.filter(
      (encuesta) =>
        encuesta.nombreArticulo === this.nombreArticulo &&
        encuesta.respuesta4 === 2
    ).length;
  }
  pregunta4Of3(): number {
    return this.listaEncuestas.filter(
      (encuesta) =>
        encuesta.nombreArticulo === this.nombreArticulo &&
        encuesta.respuesta4 === 3
    ).length;
  }

  pregunta4Of4(): number {
    return this.listaEncuestas.filter(
      (encuesta) =>
        encuesta.nombreArticulo === this.nombreArticulo &&
        encuesta.respuesta4 === 4
    ).length;
  }

  //pregunta 5
  pregunta5Of1(): number {
    return this.listaEncuestas.filter(
      (encuesta) =>
        encuesta.nombreArticulo === this.nombreArticulo &&
        encuesta.respuesta5 === 1
    ).length;
  }
  pregunta5Of2(): number {
    return this.listaEncuestas.filter(
      (encuesta) =>
        encuesta.nombreArticulo === this.nombreArticulo &&
        encuesta.respuesta5 === 2
    ).length;
  }
  pregunta5Of3(): number {
    return this.listaEncuestas.filter(
      (encuesta) =>
        encuesta.nombreArticulo === this.nombreArticulo &&
        encuesta.respuesta5 === 3
    ).length;
  }

  pregunta5Of4(): number {
    return this.listaEncuestas.filter(
      (encuesta) =>
        encuesta.nombreArticulo === this.nombreArticulo &&
        encuesta.respuesta5 === 4
    ).length;
  }
  //pregunta 6
  pregunta6Of1(): number {
    return this.listaEncuestas.filter(
      (encuesta) =>
        encuesta.nombreArticulo === this.nombreArticulo &&
        encuesta.respuesta6 === 1
    ).length;
  }
  pregunta6Of2(): number {
    return this.listaEncuestas.filter(
      (encuesta) =>
        encuesta.nombreArticulo === this.nombreArticulo &&
        encuesta.respuesta6 === 2
    ).length;
  }
  pregunta6Of3(): number {
    return this.listaEncuestas.filter(
      (encuesta) =>
        encuesta.nombreArticulo === this.nombreArticulo &&
        encuesta.respuesta6 === 3
    ).length;
  }

  pregunta6Of4(): number {
    return this.listaEncuestas.filter(
      (encuesta) =>
        encuesta.nombreArticulo === this.nombreArticulo &&
        encuesta.respuesta6 === 4
    ).length;
  }
  //pregunta 7
  pregunta7Of1(): number {
    return this.listaEncuestas.filter(
      (encuesta) =>
        encuesta.nombreArticulo === this.nombreArticulo &&
        encuesta.respuesta7 === 1
    ).length;
  }
  pregunta7Of2(): number {
    return this.listaEncuestas.filter(
      (encuesta) =>
        encuesta.nombreArticulo === this.nombreArticulo &&
        encuesta.respuesta7 === 2
    ).length;
  }
  pregunta7Of3(): number {
    return this.listaEncuestas.filter(
      (encuesta) =>
        encuesta.nombreArticulo === this.nombreArticulo &&
        encuesta.respuesta7 === 3
    ).length;
  }

  pregunta7Of4(): number {
    return this.listaEncuestas.filter(
      (encuesta) =>
        encuesta.nombreArticulo === this.nombreArticulo &&
        encuesta.respuesta7 === 4
    ).length;
  }
  //pregunta 8
  pregunta8Of1(): number {
    return this.listaEncuestas.filter(
      (encuesta) =>
        encuesta.nombreArticulo === this.nombreArticulo &&
        encuesta.respuesta8 === 1
    ).length;
  }
  pregunta8Of2(): number {
    return this.listaEncuestas.filter(
      (encuesta) =>
        encuesta.nombreArticulo === this.nombreArticulo &&
        encuesta.respuesta8 === 2
    ).length;
  }
  pregunta8Of3(): number {
    return this.listaEncuestas.filter(
      (encuesta) =>
        encuesta.nombreArticulo === this.nombreArticulo &&
        encuesta.respuesta8 === 3
    ).length;
  }

  pregunta8Of4(): number {
    return this.listaEncuestas.filter(
      (encuesta) =>
        encuesta.nombreArticulo === this.nombreArticulo &&
        encuesta.respuesta8 === 4
    ).length;
  }
  //pregunta 9
  pregunta9Of1(): number {
    return this.listaEncuestas.filter(
      (encuesta) =>
        encuesta.nombreArticulo === this.nombreArticulo &&
        encuesta.respuesta9 === 1
    ).length;
  }
  pregunta9Of2(): number {
    return this.listaEncuestas.filter(
      (encuesta) =>
        encuesta.nombreArticulo === this.nombreArticulo &&
        encuesta.respuesta9 === 2
    ).length;
  }
  pregunta9Of3(): number {
    return this.listaEncuestas.filter(
      (encuesta) =>
        encuesta.nombreArticulo === this.nombreArticulo &&
        encuesta.respuesta9 === 3
    ).length;
  }

  pregunta9Of4(): number {
    return this.listaEncuestas.filter(
      (encuesta) =>
        encuesta.nombreArticulo === this.nombreArticulo &&
        encuesta.respuesta9 === 4
    ).length;
  }
  //pregunta 10
  pregunta10Of1(): number {
    return this.listaEncuestas.filter(
      (encuesta) =>
        encuesta.nombreArticulo === this.nombreArticulo &&
        encuesta.respuesta10 === 1
    ).length;
  }
  pregunta10Of2(): number {
    return this.listaEncuestas.filter(
      (encuesta) =>
        encuesta.nombreArticulo === this.nombreArticulo &&
        encuesta.respuesta10 === 2
    ).length;
  }
  pregunta10Of3(): number {
    return this.listaEncuestas.filter(
      (encuesta) =>
        encuesta.nombreArticulo === this.nombreArticulo &&
        encuesta.respuesta10 === 3
    ).length;
  }

  pregunta10Of4(): number {
    return this.listaEncuestas.filter(
      (encuesta) =>
        encuesta.nombreArticulo === this.nombreArticulo &&
        encuesta.respuesta10 === 4
    ).length;
  }

  

  agregarEncuesta() {
    const ENCUESTA: Encuesta = {
      nombre: this.EncuestaForm.get('nombre')?.value,
      edad: this.EncuestaForm.get('edad')?.value,
      empresa: this.EncuestaForm.get('empresa')?.value,
      direccion: this.EncuestaForm.get('direccion')?.value,
      nombreArticulo: this.nombreArticulo,
      precioArticulo: this.precioArticulo,
      marcaArticulo: this.marca,
      titulo: this.titulo,
      pregunta1: this.pregunta1,
      respuesta1: this.EncuestaForm.get('respuesta1')?.value,
      pregunta2: this.pregunta2,
      respuesta2: this.EncuestaForm.get('respuesta2')?.value,
      pregunta3: this.pregunta3,
      respuesta3: this.EncuestaForm.get('respuesta3')?.value,
      pregunta4: this.pregunta4,
      respuesta4: this.EncuestaForm.get('respuesta4')?.value,
      pregunta5: this.pregunta5,
      respuesta5: this.EncuestaForm.get('respuesta5')?.value,
      pregunta6: this.pregunta6,
      respuesta6: this.EncuestaForm.get('respuesta6')?.value,
      pregunta7: this.pregunta7,
      respuesta7: this.EncuestaForm.get('respuesta7')?.value,
      pregunta8: this.pregunta8,
      respuesta8: this.EncuestaForm.get('respuesta8')?.value,
      pregunta9: this.pregunta9,
      respuesta9: this.EncuestaForm.get('respuesta9')?.value,
      pregunta10: this.pregunta10,
      respuesta10: this.EncuestaForm.get('respuesta10')?.value,
      ubicacion: this.EncuestaForm.get('ubicacion')?.value,
    };

    //agregamos pedido
    this._Encuesta.guardarRespuestas(ENCUESTA).subscribe(
      (dato) => {
        this.router.navigate(['/listasSolicitud']);
        this.toastr.success(
          'La encuesta fue contestada con exito',
          'Encuesta contestada'
        );
      },
      (error) => {
        console.log(error);
      }
    );
  }
//Respuesta 1
renderChart(){
  setTimeout(() =>{
  const ctx = new Chart("respuesta1", {
    type: 'bar',
    data: {
      labels: ['Desacuerdo', 'Neutral', 'De acuerdo', 'Muy de acuerdo'],
      datasets: [{
        label: '# of Votes',
        data: [this.pregunta1Of1(), this.pregunta1Of2(), this.pregunta1Of3(), this.pregunta1Of4()],
        borderWidth: 50,
       
      }]
    },
    options: {
      scales: {
        y: {
          beginAtZero: true,
          max: 20 //
        }
      },
      
    }
  });
}, 1000)};


//Respuesta 2
renderChart2(){
  setTimeout(() =>{
  const ctx = new Chart("respuesta2", {
    type: 'bar',
    data: {
      labels: ['Desacuerdo', 'Neutral', 'De acuerdo', 'Muy de acuerdo'],
      datasets: [{
        label: '# of Votes',
        data: [this.pregunta2Of1(), this.pregunta2Of2(), this.pregunta2Of3(), this.pregunta2Of4()],
        borderWidth: 50,
       
      }]
    },
    options: {
      scales: {
        y: {
          beginAtZero: true,
          max: 20 //
        }
      },
      
    }
  });
}, 1000)};
//Respuesta 3
renderChart3(){
  setTimeout(() =>{
  const ctx = new Chart("respuesta3", {
    type: 'bar',
    data: {
      labels: ['Desacuerdo', 'Neutral', 'De acuerdo', 'Muy de acuerdo'],
      datasets: [{
        label: '# of Votes',
        data: [this.pregunta3Of1(), this.pregunta3Of2(), this.pregunta3Of3(), this.pregunta3Of4()],
        borderWidth: 50,
       
      }]
    },
    options: {
      scales: {
        y: {
          beginAtZero: true,
          max: 20 //
        }
      },
      
    }
  });
}, 1000)};
//Respuesta 4
renderChart4(){
  setTimeout(() =>{
  const ctx = new Chart("respuesta4", {
    type: 'bar',
    data: {
      labels: ['Desacuerdo', 'Neutral', 'De acuerdo', 'Muy de acuerdo'],
      datasets: [{
        label: '# of Votes',
        data: [this.pregunta4Of1(), this.pregunta4Of2(), this.pregunta4Of3(), this.pregunta4Of4()],
        borderWidth: 50,
       
      }]
    },
    options: {
      scales: {
        y: {
          beginAtZero: true,
          max: 20 //
        }
      },
      
    }
  });
}, 1000)};
//Respuesta 5
renderChart5(){
  setTimeout(() =>{
  const ctx = new Chart("respuesta5", {
    type: 'bar',
    data: {
      labels: ['Desacuerdo', 'Neutral', 'De acuerdo', 'Muy de acuerdo'],
      datasets: [{
        label: '# of Votes',
        data: [this.pregunta5Of1(), this.pregunta5Of2(), this.pregunta5Of3(), this.pregunta5Of4()],
        borderWidth: 50,
       
      }]
    },
    options: {
      scales: {
        y: {
          beginAtZero: true,
          max: 20 //
        }
      },
      
    }
  });
}, 1000)};
//Respuesta 2
renderChart6(){
  setTimeout(() =>{
  const ctx = new Chart("respuesta6", {
    type: 'bar',
    data: {
      labels: ['Desacuerdo', 'Neutral', 'De acuerdo', 'Muy de acuerdo'],
      datasets: [{
        label: '# of Votes',
        data: [this.pregunta6Of1(), this.pregunta6Of2(), this.pregunta6Of3(), this.pregunta6Of4()],
        borderWidth: 50,
      }]
    },
    options: {
      scales: {
        y: {
          beginAtZero: true,
          max: 20 //
        }
      },
      
    }
  });
}, 1000)};
//Respuesta 7
renderChart7(){
  setTimeout(() =>{
  const ctx = new Chart("respuesta7", {
    type: 'bar',
    data: {
      labels: ['Desacuerdo', 'Neutral', 'De acuerdo', 'Muy de acuerdo'],
      datasets: [{
        label: '# of Votes',
        data: [this.pregunta7Of1(), this.pregunta7Of2(), this.pregunta7Of3(), this.pregunta7Of4()],
        borderWidth: 50,
      }]
    },
    options: {
      scales: {
        y: {
          beginAtZero: true,
          max: 20 //
        }
      },
      
    }
  });
}, 1000)};
//Respuesta 8
renderChart8(){
  setTimeout(() =>{
  const ctx = new Chart("respuesta8", {
    type: 'bar',
    data: {
      labels: ['Desacuerdo', 'Neutral', 'De acuerdo', 'Muy de acuerdo'],
      datasets: [{
        label: '# of Votes',
        data: [this.pregunta8Of1(), this.pregunta8Of2(), this.pregunta8Of3(), this.pregunta8Of4()],
        borderWidth: 50,
       
      }]
    },
    options: {
      scales: {
        y: {
          beginAtZero: true,
          max: 20 //
        }
      },
      
    }
  });
}, 1000)};
//Respuesta 9
renderChart9(){
  setTimeout(() =>{
  const ctx = new Chart("respuesta9", {
    type: 'bar',
    data: {
      labels: ['Desacuerdo', 'Neutral', 'De acuerdo', 'Muy de acuerdo'],
      datasets: [{
        label: '# of Votes',
        data: [this.pregunta9Of1(), this.pregunta9Of2(), this.pregunta9Of3(), this.pregunta9Of4()],
        borderWidth: 50,
       
      }]
    },
    options: {
      scales: {
        y: {
          beginAtZero: true,
          max: 20 //
        }
      },
      
    }
  });
}, 1000)};
//Respuesta 2
renderChart10(){
  setTimeout(() =>{
  const ctx = new Chart("respuesta10", {
    type: 'bar',
    data: {
      labels: ['Desacuerdo', 'Neutral', 'De acuerdo', 'Muy de acuerdo'],
      datasets: [{
        label: '# of Votes',
        data: [this.pregunta10Of1(), this.pregunta10Of2(), this.pregunta10Of3(), this.pregunta10Of4()],
        borderWidth: 50,
       
      }]
    },
    options: {
      scales: {
        y: {
          beginAtZero: true,
          max: 20 //
        }
      },
      
    }
  });
}, 1000)};
}
