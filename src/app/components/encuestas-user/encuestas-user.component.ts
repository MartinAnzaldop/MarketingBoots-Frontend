import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { BancoPregu } from 'src/app/models/bancoPregu';
import { PreguntaSelec } from 'src/app/models/preguntaSelec';
import { BancoPreguService } from 'src/app/service/bancoPregu.service';
import { PreguntaSelecService } from 'src/app/service/preguntaSelec.service';

@Component({
  selector: 'app-encuestas-user',
  templateUrl: './encuestas-user.component.html',
  styleUrls: ['./encuestas-user.component.css']
})
export class EncuestasUserComponent implements OnInit {
  preguntaSelecForm: FormGroup;
  listaBancoPregu:BancoPregu []=[];
  titulo = 'Pregunta Seleccionada';
  id:string | null;
  constructor(private fb: FormBuilder, private  router: Router, private toastr: ToastrService,
    private _PreguntaSelecService:PreguntaSelecService, private aRouter: ActivatedRoute,
    private _BancoPreguService: BancoPreguService) {
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
      this.router.navigate(['/listaPreguntasSeleccionadas'])
      this.toastr.info('La pregunta seleccionada fue editada con exito','Pregunta editada');
    },error=>{
  console.log(error)
    })
  }else{
  //agregamos pregunta seleccionada
  console.log(PREGUNTASELEC);
  this._PreguntaSelecService.guardarPreguntaSelec(PREGUNTASELEC).subscribe(dato=>{
    this.router.navigate(['/listaPreguntasSeleccionadas'])
    this.toastr.success('La pregunta seleccionada fue registrada con exito!','Pregunta agregada');
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
