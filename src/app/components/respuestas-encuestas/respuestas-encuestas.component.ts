import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Toast, ToastrService } from 'ngx-toastr';
import { Respuestas } from 'src/app/models/respuestas';
import { RespuestasService } from 'src/app/service/respuestas.service';

@Component({
  selector: 'app-respuestas-encuestas',
  templateUrl: './respuestas-encuestas.component.html',
  styleUrls: ['./respuestas-encuestas.component.css']
})
export class RespuestasEncuestasComponent implements OnInit {
  respuestasForm: FormGroup;

  constructor(private fb: FormBuilder, private  router: Router, private toastr: ToastrService,
    private _RespuestasService:RespuestasService) {
      this.respuestasForm=this.fb.group({
        respuesta1:['', Validators.required],
        respuesta2:['', Validators.required],
        respuesta3:['', Validators.required],
        respuesta4:['', Validators.required],
        respuesta5:['', Validators.required],
        respuesta6:['', Validators.required],
        respuesta7:['', Validators.required],
        respuesta8:['', Validators.required],
        respuesta9:['', Validators.required],
        respuesta10:['', Validators.required],
      })
    }

  ngOnInit(): void {
  }

  agregarRespuestas(){
    console.log(this.respuestasForm)
    const RESPUESTAS: Respuestas ={
      respuesta1: this.respuestasForm.get('respuesta1')?.value,
      respuesta2: this.respuestasForm.get('respuesta2')?.value,
      respuesta3: this.respuestasForm.get('respuesta3')?.value,
      respuesta4: this.respuestasForm.get('respuesta4')?.value,
      respuesta5: this.respuestasForm.get('respuesta5')?.value,
      respuesta6: this.respuestasForm.get('respuesta6')?.value,
      respuesta7: this.respuestasForm.get('respuesta7')?.value,
      respuesta8: this.respuestasForm.get('respuesta8')?.value,
      respuesta9: this.respuestasForm.get('respuesta9')?.value,
      respuesta10: this.respuestasForm.get('respuesta10')?.value,

    }
    
    }
}
