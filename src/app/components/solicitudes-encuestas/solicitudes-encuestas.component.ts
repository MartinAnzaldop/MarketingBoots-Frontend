import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Toast, ToastrService } from 'ngx-toastr';
import { BancoPregu } from 'src/app/models/bancoPregu';
import { encuestaConfigurada } from 'src/app/models/encuestaConfigurada';
import { Pedido } from 'src/app/models/pedido';
import { PreguntaSelec } from 'src/app/models/preguntaSelec';
import { BancoPreguService } from 'src/app/service/bancoPregu.service';
import { EncuestaConfiguradaService } from 'src/app/service/encuestaConfigurada.service';
import { PedidoService } from 'src/app/service/pedido.service';
import { PreguntaSelecService } from 'src/app/service/preguntaSelec.service';

@Component({
  selector: 'app-solicitudes-encuestas',
  templateUrl: './solicitudes-encuestas.component.html',
  styleUrls: ['./solicitudes-encuestas.component.css']
})
export class SolicitudesEncuestasComponent implements OnInit {
  pedidoForm: FormGroup;
  encuestaConfiguradaForm: FormGroup;
  preguntaSelecForm: FormGroup;
  listaBancoPregu:BancoPregu []=[];
  titulo = 'Pregunta Seleccionada';
  id:string | null;
  constructor(private fb: FormBuilder, private  router: Router, private toastr: ToastrService,
    private _PedidoService:PedidoService, private _EncuestaCondfiguradaService:EncuestaConfiguradaService,     private _PreguntaSelecService:PreguntaSelecService, private aRouter: ActivatedRoute,
    private _BancoPreguService: BancoPreguService) {
    this.pedidoForm=this.fb.group({
      empresa:['', Validators.required],
      direccion:['', Validators.required],
      contacto:['', Validators.required],
      encargado:['', Validators.required],
      categoria:['', Validators.required],
      nombreArticulo:['', Validators.required],
      precioArticulo:['', Validators.required],
      marcaArticulo:['', Validators.required],
      descripcionArticulo:['', Validators.required],
    })
    //Encuesta configurada
    const questions: FormArray = this.encuestaConfiguradaForm.get('questions') as FormArray
    this.encuestaConfiguradaForm = this.fb.group({
      fechaInicio:['', Validators.required],
      fechaFinal:['', Validators.required],
      titulo:['', Validators.required],
      poblacion:['', Validators.required],

      numeroEncuesta:['', Validators.required],
    })
    //Selección de preguntas
    this.preguntaSelecForm=this.fb.group({
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
    this.esEditar()
  }

  agregarPedido(){
    console.log(this.pedidoForm)
    const PEDIDO: Pedido ={
      empresa: this.pedidoForm.get('empresa')?.value,
      direccion: this.pedidoForm.get('direccion')?.value,
      contacto: this.pedidoForm.get('contacto')?.value,
      encargado: this.pedidoForm.get('encargado')?.value,
      categoria: this.pedidoForm.get('categoria')?.value,
      nombreArticulo: this.pedidoForm.get('nombreArticulo')?.value,
      precioArticulo: this.pedidoForm.get('precioArticulo')?.value,
      marcaArticulo: this.pedidoForm.get('marcaArticulo')?.value,
      descripcionArticulo: this.pedidoForm.get('descripcionArticulo')?.value,
    }
    console.log(PEDIDO);
    this._PedidoService.guardarPedido(PEDIDO).subscribe(dato=>{
      this.router.navigate(['/acerca'])
    }, error=>{
    console.log(error);
    this.pedidoForm.reset()
    })
    }
    //Encuesta configurada
    agregarEncuestaConfigurada(){
      console.log(this.encuestaConfiguradaForm)
      const ENCUESTACONFIGURADA: encuestaConfigurada ={
        fechaInicio: this.encuestaConfiguradaForm.get('fechaInicio')?.value,
        fechaFinal: this.encuestaConfiguradaForm.get('fechaFinal')?.value,
        titulo: this.encuestaConfiguradaForm.get('titulo')?.value,
        poblacion: this.encuestaConfiguradaForm.get('poblacion')?.value,

        numeroEncuesta: this.encuestaConfiguradaForm.get('numeroEncuesta')?.value,

      }
      console.log(ENCUESTACONFIGURADA);
      this._EncuestaCondfiguradaService.guardarEncuestaConfigurada(ENCUESTACONFIGURADA).subscribe(dato=>{
      this.toastr.success('La encuesta configurada fue agregada con exito','Encuesta configurada agregada');
        this.router.navigate(['/preguntasSeleccionadasUser'])
      }, error=>{
      console.log(error);
      this.encuestaConfiguradaForm.reset()
      })
      }
      //Selección de preguntas
      obtenerBancoPregu(){
        this._BancoPreguService.getBancoPregu().subscribe(data=>{
          console.log(data);
          this.listaBancoPregu=data;
        },error=>{
        console.log(error)
        })
      }
      agregarPreguntaSelec(){
        console.log(this.preguntaSelecForm)
        const PREGUNTASELEC: PreguntaSelec ={
          pregunta1: this.preguntaSelecForm.get('pregunta1')?.value,
          pregunta2: this.preguntaSelecForm.get('pregunta2')?.value,
          pregunta3: this.preguntaSelecForm.get('pregunta3')?.value,
          pregunta4: this.preguntaSelecForm.get('pregunta4')?.value,
          pregunta5: this.preguntaSelecForm.get('pregunta5')?.value,
          pregunta6: this.preguntaSelecForm.get('pregunta6')?.value,
          pregunta7: this.preguntaSelecForm.get('pregunta7')?.value,
          pregunta8: this.preguntaSelecForm.get('pregunta8')?.value,
          pregunta9: this.preguntaSelecForm.get('pregunta9')?.value,
          pregunta10: this.preguntaSelecForm.get('pregunta10')?.value,
        }

        if(this.id !==null){
          //editamos pregunta seleccionada
          this._PreguntaSelecService.editarPreguntaSelec(this.id, PREGUNTASELEC).subscribe(data=>{
            this.router.navigate(['/uservista'])
            this.toastr.info('La preguntas seleccionada fue editada con exito','Pregunta editada');
          },error=>{
        console.log(error)
          })
        }else{
        //agregamos pregunta seleccionada
        console.log(PREGUNTASELEC);
        this._PreguntaSelecService.guardarPreguntaSelec(PREGUNTASELEC).subscribe(dato=>{
          this.router.navigate(['/userVista'])
          this.toastr.success('Listo, ya esta realizada su encuesta','La preguntas seleccionadas fueron registradas con exito!');
        }, error=>{
        console.log(error);
        this.preguntaSelecForm.reset()
        })
        }

        }

        esEditar(){
          if(this.id !==null){
            this.titulo='Editar pregunta seleccionada';
            this._PreguntaSelecService.obtenerPreguntaSelecById(this.id).subscribe(data=>{
            this.preguntaSelecForm.setValue({
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
