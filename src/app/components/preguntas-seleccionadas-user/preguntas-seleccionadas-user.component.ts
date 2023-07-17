import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { PreguntaSelecUser } from 'src/app/models/preguntaSelecUser';
import { PreguntaSelecUserService } from 'src/app/service/preguntaSelecUser.service';

@Component({
  selector: 'app-preguntas-seleccionadas-user',
  templateUrl: './preguntas-seleccionadas-user.component.html',
  styleUrls: ['./preguntas-seleccionadas-user.component.css']
})

export class PreguntasSeleccionadasUserComponent implements OnInit {
  preguntaSelecUserForm: FormGroup;
  titulo = 'Pregunta Seleccionada User';
  id:string | null;
  constructor(private fb: FormBuilder, private  router: Router, private toastr: ToastrService,
    private _PreguntaSelecUserService:PreguntaSelecUserService, private aRouter: ActivatedRoute) {
    this.preguntaSelecUserForm=this.fb.group({
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
    this.esEditar()
  }

  agregarPreguntaSelecUser(){
  console.log(this.preguntaSelecUserForm)
  const PREGUNTASELECUSER: PreguntaSelecUser ={
    pregunta1: this.preguntaSelecUserForm.get('pregunta1')?.value,
    pregunta2: this.preguntaSelecUserForm.get('pregunta2')?.value,
    pregunta3: this.preguntaSelecUserForm.get('pregunta3')?.value,
    pregunta4: this.preguntaSelecUserForm.get('pregunta4')?.value,
    pregunta5: this.preguntaSelecUserForm.get('pregunta5')?.value,
    pregunta6: this.preguntaSelecUserForm.get('pregunta6')?.value,
    pregunta7: this.preguntaSelecUserForm.get('pregunta7')?.value,
    pregunta8: this.preguntaSelecUserForm.get('pregunta8')?.value,
    pregunta9: this.preguntaSelecUserForm.get('pregunta9')?.value,
    pregunta10: this.preguntaSelecUserForm.get('pregunta10')?.value,
  }

  if(this.id !==null){
    //editamos pregunta seleccionada
    this._PreguntaSelecUserService.editarPreguntaSelecUser(this.id, PREGUNTASELECUSER).subscribe(data=>{
      this.router.navigate(['/listaPreguntasSeleccionadasUser'])
      this.toastr.info('La pregunta seleccionada fue editada con exito','Pregunta editada');
    },error=>{
  console.log(error)
    })
  }else{
  //agregamos pregunta seleccionada
  console.log(PREGUNTASELECUSER);
  this._PreguntaSelecUserService.guardarPreguntaSelecUser(PREGUNTASELECUSER).subscribe(dato=>{
    this.router.navigate(['/listaPreguntasSeleccionadasUser'])
    this.toastr.success('La pregunta seleccionada fue registrada con exito!','Pregunta agregada');
  }, error=>{
  console.log(error);
  this.preguntaSelecUserForm.reset()
  })
  }
  
  }

  esEditar(){
    if(this.id !==null){
      this.titulo='Editar pregunta seleccionada';
      this._PreguntaSelecUserService.obtenerPreguntaSelecUserById(this.id).subscribe(data=>{
      this.preguntaSelecUserForm.setValue({
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
