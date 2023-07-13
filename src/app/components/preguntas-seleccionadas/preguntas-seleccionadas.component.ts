import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { PreguntaSelec } from 'src/app/models/preguntaSelec';
import { PreguntaSelecService } from 'src/app/service/preguntaSelec.service';

@Component({
  selector: 'app-preguntaSelec',
  templateUrl: './preguntas-seleccionadas.component.html',
  styleUrls: ['./preguntas-seleccionadas.component.css']
})
export class PreguntasSeleccionadasComponent implements OnInit {
preguntaSelecForm: FormGroup;
  constructor(private fb: FormBuilder, private  router: Router, private toastr: ToastrService,
    private PreguntaSelecService:PreguntaSelecService) {
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
   }

  ngOnInit(): void {
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
  console.log(PREGUNTASELEC);
  this.toastr.success('la pregunta fue registrada!');
  this.PreguntaSelecService.guardarPreguntaSelec(PREGUNTASELEC).subscribe(dato=>{
    this.router.navigate(['/acerca'])
  }, error=>{
  console.log(error);
  this.preguntaSelecForm.reset()
  })
  }
}
