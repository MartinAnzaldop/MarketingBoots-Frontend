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
    this.pregunta1ChangeWidthGraph();
    this.renderChart();
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

  pregunta1ChangeWidthGraph() {
    setTimeout(() => {
      const barra1: any = document.getElementById('barra1');
      const barra2: any = document.getElementById('barra2');
      const barra3: any = document.getElementById('barra3');
      const barra4: any = document.getElementById('barra4');
      //Respuesta 2
      const barra5: any = document.getElementById('barra5');
      const barra6: any = document.getElementById('barra6');
      const barra7: any = document.getElementById('barra7');
      const barra8: any = document.getElementById('barra8');
      //Respuesta 3
      const barra9: any = document.getElementById('barra9');
      const barra10: any = document.getElementById('barra10');
      const barra11: any = document.getElementById('barra11');
      const barra12: any = document.getElementById('barra12');
      //Respuesta 4
      const barra13: any = document.getElementById('barra13');
      const barra14: any = document.getElementById('barra14');
      const barra15: any = document.getElementById('barra15');
      const barra16: any = document.getElementById('barra16');
      //Respuesta 5
      const barra17: any = document.getElementById('barra17');
      const barra18: any = document.getElementById('barra18');
      const barra19: any = document.getElementById('barra19');
      const barra20: any = document.getElementById('barra20');
      //Respuesta 6
      const barra21: any = document.getElementById('barra21');
      const barra22: any = document.getElementById('barra22');
      const barra23: any = document.getElementById('barra23');
      const barra24: any = document.getElementById('barra24');
      //Respuesta 7
      const barra25: any = document.getElementById('barra25');
      const barra26: any = document.getElementById('barra26');
      const barra27: any = document.getElementById('barra27');
      const barra28: any = document.getElementById('barra28');
      //Respuesta 8
      const barra29: any = document.getElementById('barra29');
      const barra30: any = document.getElementById('barra30');
      const barra31: any = document.getElementById('barra31');
      const barra32: any = document.getElementById('barra32');
      //Respuesta 9
      const barra33: any = document.getElementById('barra33');
      const barra34: any = document.getElementById('barra34');
      const barra35: any = document.getElementById('barra35');
      const barra36: any = document.getElementById('barra36');
      //Respuesta 10
      const barra37: any = document.getElementById('barra37');
      const barra38: any = document.getElementById('barra38');
      const barra39: any = document.getElementById('barra39');
      const barra40: any = document.getElementById('barra40');

      barra1.style.width = this.pregunta1Of1() + '00' + '%';
      barra2.style.width = this.pregunta1Of2() + '00' + '%';
      barra3.style.width = this.pregunta1Of3() + '00' + '%';
      barra4.style.width = this.pregunta1Of4() + '00' + '%';
      //Respuesta 2
      barra5.style.width = this.pregunta2Of1() + '00' + '%';
      barra6.style.width = this.pregunta2Of2() + '00' + '%';
      barra7.style.width = this.pregunta2Of3() + '00' + '%';
      barra8.style.width = this.pregunta2Of4() + '00' + '%';
      //Respuesta 3
      barra9.style.width = this.pregunta3Of1() + '00' + '%';
      barra10.style.width = this.pregunta3Of2() + '00' + '%';
      barra11.style.width = this.pregunta3Of3() + '00' + '%';
      barra12.style.width = this.pregunta3Of4() + '00' + '%';
      //Respuesta 4
      barra13.style.width = this.pregunta4Of1() + '00' + '%';
      barra14.style.width = this.pregunta4Of2() + '00' + '%';
      barra15.style.width = this.pregunta4Of3() + '00' + '%';
      barra16.style.width = this.pregunta4Of4() + '00' + '%';
      //Respuesta 5
      barra17.style.width = this.pregunta5Of1() + '00' + '%';
      barra18.style.width = this.pregunta5Of2() + '00' + '%';
      barra19.style.width = this.pregunta5Of3() + '00' + '%';
      barra20.style.width = this.pregunta5Of4() + '00' + '%';
      //Respuesta 6
      barra21.style.width = this.pregunta6Of1() + '00' + '%';
      barra22.style.width = this.pregunta6Of2() + '00' + '%';
      barra23.style.width = this.pregunta6Of3() + '00' + '%';
      barra24.style.width = this.pregunta6Of4() + '00' + '%';
      //Respuesta 7
      barra25.style.width = this.pregunta7Of1() + '00' + '%';
      barra26.style.width = this.pregunta7Of2() + '00' + '%';
      barra27.style.width = this.pregunta7Of3() + '00' + '%';
      barra28.style.width = this.pregunta7Of4() + '00' + '%';
      //Respuesta 8
      barra29.style.width = this.pregunta8Of1() + '00' + '%';
      barra30.style.width = this.pregunta8Of2() + '00' + '%';
      barra31.style.width = this.pregunta8Of3() + '00' + '%';
      barra32.style.width = this.pregunta8Of4() + '00' + '%';
      //Respuesta 9
      barra33.style.width = this.pregunta9Of1() + '00' + '%';
      barra34.style.width = this.pregunta9Of2() + '00' + '%';
      barra35.style.width = this.pregunta9Of3() + '00' + '%';
      barra36.style.width = this.pregunta9Of4() + '00' + '%';
      //Respuesta 10
      barra37.style.width = this.pregunta10Of1() + '00' + '%';
      barra38.style.width = this.pregunta10Of2() + '00' + '%';
      barra39.style.width = this.pregunta10Of3() + '00' + '%';
      barra40.style.width = this.pregunta10Of4() + '00' + '%';
    }, 1000);
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
}