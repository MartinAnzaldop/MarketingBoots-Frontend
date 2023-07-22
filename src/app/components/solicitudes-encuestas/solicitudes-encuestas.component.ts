import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Toast, ToastrService } from 'ngx-toastr';
import { BancoPregu } from 'src/app/models/bancoPregu';
import { solicitudEncuesta } from 'src/app/models/solicitudEncuesta';
import { BancoPreguService } from 'src/app/service/bancoPregu.service';
import { SolicitudService } from 'src/app/service/solicitud.service';


@Component({
  selector: 'app-solicitudes-encuestas',
  templateUrl: './solicitudes-encuestas.component.html',
  styleUrls: ['./solicitudes-encuestas.component.css']
})
export class SolicitudesEncuestasComponent implements OnInit {
  solicitudEncuestaForm: FormGroup;
  id:string | null;
  titulo: string='Agregar solicitud';
  listaBancoPregu:BancoPregu []=[];

    constructor(private _BancoPreguService: BancoPreguService, private fb: FormBuilder, private  router: Router, private toastr: ToastrService,
     private aRouter: ActivatedRoute, private _Solicitud: SolicitudService) {

  this.solicitudEncuestaForm=this.fb.group({
    empresa:['', Validators.required],
    direccion:['', Validators.required],
    contacto:['', Validators.required],
    encargado:['', Validators.required],
    categoria:['', Validators.required],
    nombreArticulo:['', Validators.required],
    precioArticulo:['', Validators.required],
    marcaArticulo:['', Validators.required],
    descripcionArticulo:['', Validators.required],
    fechaInicio:['', Validators.required],
    fechaFinal:['', Validators.required],
    titulo:['', Validators.required],
    objetivo:['', Validators.required],
    numeroEncuesta:['', Validators.required],
    poblacion:['', Validators.required],
    pregunta1:['', Validators.required],
      pregunta2:['', Validators.required],
      pregunta3:['', Validators.required],
      pregunta4:['', Validators.required],
      pregunta5:['', Validators.required],
      pregunta6:['', Validators.required],
      pregunta7:['', Validators.required],
      pregunta8:['', Validators.required],
      pregunta9:['', Validators.required],
      pregunta10:['', Validators.required],
  })
  this.id=this.aRouter.snapshot.paramMap.get('id')
 }

  ngOnInit(): void {
    this.obtenerBancoPregu()
  }

  agregarSolicitud(){
    console.log(this.solicitudEncuestaForm)
    const SOLICITUD: solicitudEncuesta ={
      empresa: this.solicitudEncuestaForm.get('empresa')?.value,
      direccion: this.solicitudEncuestaForm.get('direccion')?.value,
      contacto: this.solicitudEncuestaForm.get('contacto')?.value,
      encargado: this.solicitudEncuestaForm.get('encargado')?.value,
      categoria: this.solicitudEncuestaForm.get('categoria')?.value,
      nombreArticulo: this.solicitudEncuestaForm.get('nombreArticulo')?.value,
      precioArticulo: this.solicitudEncuestaForm.get('precioArticulo')?.value,
      marcaArticulo: this.solicitudEncuestaForm.get('marcaArticulo')?.value,
      descripcionArticulo: this.solicitudEncuestaForm.get('descripcionArticulo')?.value,
      fechaInicio: this.solicitudEncuestaForm.get('fechaInicio')?.value,
      fechaFinal: this.solicitudEncuestaForm.get('fechaFinal')?.value,
      titulo: this.solicitudEncuestaForm.get('titulo')?.value,
      objetivo: this.solicitudEncuestaForm.get('objetivo')?.value,
      numeroEncuesta: this.solicitudEncuestaForm.get('numeroEncuesta')?.value,
      poblacion: this.solicitudEncuestaForm.get('poblacion')?.value,
      pregunta1: this.solicitudEncuestaForm.get('pregunta1')?.value,
      pregunta2: this.solicitudEncuestaForm.get('pregunta2')?.value,
      pregunta3: this.solicitudEncuestaForm.get('pregunta3')?.value,
      pregunta4: this.solicitudEncuestaForm.get('pregunta4')?.value,
      pregunta5: this.solicitudEncuestaForm.get('pregunta5')?.value,
      pregunta6: this.solicitudEncuestaForm.get('pregunta6')?.value,
      pregunta7: this.solicitudEncuestaForm.get('pregunta7')?.value,
      pregunta8: this.solicitudEncuestaForm.get('pregunta8')?.value,
      pregunta9: this.solicitudEncuestaForm.get('pregunta9')?.value,
      pregunta10: this.solicitudEncuestaForm.get('pregunta10')?.value,

    }
    if(this.id !==null){
      //editamos pedido
      this._Solicitud.editarSolicitud(this.id, SOLICITUD).subscribe(data=>{
        this.router.navigate(['/listaSolicitud'])
        this.toastr.info('La solicitud fue editado con exito','Pedido editado');
      },error=>{
    console.log(error)
      })
    }else{
      //agregamos pedido
      console.log(SOLICITUD);
      this._Solicitud.guardarSolicitud(SOLICITUD).subscribe(dato=>{
      this.router.navigate(['/listasSolicitud'])
      this.toastr.success('La solicitud fue agregado con exito','Pedido agregado');
    }, error=>{
    console.log(error);
    this.solicitudEncuestaForm.reset()
    })
    }
  }

  obtenerBancoPregu(){
    this._BancoPreguService.getBancoPregu().subscribe(data=>{
      console.log(data);
      this.listaBancoPregu=data;
    },error=>{
    console.log(error)
    })
  }

  esEditar(){
    if(this.id !==null){
      this.titulo='Editar solicitud';
      this._Solicitud.obtenerSolicitudById(this.id).subscribe(data=>{
      this.solicitudEncuestaForm.setValue({
          empresa: data.empresa,
          direccion: data.direccion,
          contacto: data.contacto,
          encargado: data.encargado,
          categoria: data.categoria,
          nombreArticulo: data.nombreArticulo,
          precioArticulo: data.precioArticulo,
          marcaArticulo: data.marcaArticulo,
          descripcionArticulo: data.descripcionArticulo,
          fechaInicio: data.fechaInicio,
          fechaFinal: data.fechaFinal,
          titulo: data.titulo,
          objetivo: data.objetivo,
          numeroEncuesta: data.numeroEncuesta,
          poblacion: data.poblacion,
          pregunta1: data.pregunta1,
          pregunta2: data.pregunta2,
          pregunta3: data.pregunta3,
          pregunta4: data.pregunta4,
          pregunta5: data.pregunta5,
          pregunta6: data.pregunta6,
          pregunta7: data.pregunta7,
          pregunta8: data.pregunta8,
          pregunta9: data.pregunta9,
          pregunta10: data.pregunta10,

      })
      },error=>{
        console.log(error)
      })
    }
  }


  }


