import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Encuesta } from 'src/app/models/encuesta';
import { BancoPreguService } from 'src/app/service/bancoPregu.service';
import { RespuestasService } from 'src/app/service/respuestas.service';
import { SolicitudService } from 'src/app/service/solicitud.service';

@Component({
  selector: 'app-prueba',
  templateUrl: './prueba.component.html',
  styleUrls: ['./prueba.component.css']
})
export class PruebaComponent implements OnInit {
  EncuestaForm: FormGroup;
  objeto:  any;
  id:string | null;
  empresa: string = '';
  titulo: string = '';
  pregunta1: string = '';
  nombreArticulo: any;
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

  constructor(private activateRouter: ActivatedRoute, private _Solicitud: SolicitudService,
     private _BancoPreguService: BancoPreguService, private fb: FormBuilder, private  router: Router, private toastr: ToastrService,
    private aRouter: ActivatedRoute, private _Encuesta: RespuestasService) {
  
    this.EncuestaForm=this.fb.group({
      nombre:['', Validators.required],
      edad:['', Validators.required],
      empresa:['', Validators.required],
      direccion:['', Validators.required],
      nombreArticulo:['', Validators.required],
      precioArticulo:['', Validators.required],
      marcaArticulo:['', Validators.required],
      titulo:['', Validators.required],
      pregunta1:['', Validators.required],
      respuesta1:['', Validators.required],
        pregunta2:['', Validators.required],
        respuesta2:['', Validators.required],
        pregunta3:['', Validators.required],
        respuesta3:['', Validators.required],
        pregunta4:['', Validators.required],
        respuesta4:['', Validators.required],
        pregunta5:['', Validators.required],
        respuesta5:['', Validators.required],
        pregunta6:['', Validators.required],
        respuesta6:['', Validators.required],
        pregunta7:['', Validators.required],
        respuesta7:['', Validators.required],
        pregunta8:['', Validators.required],
        respuesta8:['', Validators.required],
        pregunta9:['', Validators.required],
        respuesta9:['', Validators.required],
        pregunta10:['', Validators.required],
        respuesta10:['', Validators.required],
    })
   }
  
  
    

  ngOnInit(): void {
    this.obtenerObjeto();
    
    
}

obtenerObjeto(): void {
     this.id = this.activateRouter.snapshot.paramMap.get('id');
    this.objeto = this._Solicitud.obtenerSolicitudById(this.id!).subscribe(data => {
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
    })

   
    
}
agregarEncuesta(){
  const ENCUESTA: Encuesta ={
    nombre: this.EncuestaForm.get('nombre')?.value,
    edad: this.EncuestaForm.get('edad')?.value,
    empresa: this.EncuestaForm.get('empresa')?.value,
    direccion: this.EncuestaForm.get('direccion')?.value,
    nombreArticulo: this.EncuestaForm.get('nombreArticulo')?.value,
    precioArticulo: this.EncuestaForm.get('precioArticulo')?.value,
    marcaArticulo: this.EncuestaForm.get('marcaArticulo')?.value,
    titulo: this.EncuestaForm.get('titulo')?.value,
    pregunta1: this.EncuestaForm.get('pregunta1')?.value,
    respuesta1: this.EncuestaForm.get('respuesta1')?.value,
    pregunta2: this.EncuestaForm.get('pregunta2')?.value,
    respuesta2: this.EncuestaForm.get('respuesta2')?.value,
    pregunta3: this.EncuestaForm.get('pregunta3')?.value,
    respuesta3: this.EncuestaForm.get('respuesta3')?.value,
    pregunta4: this.EncuestaForm.get('pregunta4')?.value,
    respuesta4: this.EncuestaForm.get('respuesta4')?.value,
    pregunta5: this.EncuestaForm.get('pregunta5')?.value,
    respuesta5: this.EncuestaForm.get('respuesta5')?.value,
    pregunta6: this.EncuestaForm.get('pregunta6')?.value,
    respuesta6: this.EncuestaForm.get('respuesta6')?.value,
    pregunta7: this.EncuestaForm.get('pregunta7')?.value,
    respuesta7: this.EncuestaForm.get('respuesta7')?.value,
    pregunta8: this.EncuestaForm.get('pregunta8')?.value,
    respuesta8: this.EncuestaForm.get('respuesta8')?.value,
    pregunta9: this.EncuestaForm.get('pregunta9')?.value,
    respuesta9: this.EncuestaForm.get('respuesta9')?.value,
    pregunta10: this.EncuestaForm.get('pregunta10')?.value,
    respuesta10: this.EncuestaForm.get('respuesta10')?.value,
   ubicacion:this.EncuestaForm.get('ubicacion')?.value,
  }
  
    //agregamos pedido
    this._Encuesta.guardarRespuestas(ENCUESTA).subscribe(dato=>{
    this.router.navigate(['/listasSolicitud'])
    this.toastr.success('La solicitud fue agregado con exito','Pedido agregado');
  }, error=>{
  console.log(error);
  
  })
  }
}
