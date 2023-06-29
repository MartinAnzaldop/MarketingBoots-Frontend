import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Toast, ToastrService } from 'ngx-toastr';
import { encuestaConfigurada } from 'src/app/models/encuestaConfigurada';
import { EncuestaConfiguradaService} from 'src/app/service/encuestaConfigurada.service';

@Component({
  selector: 'app-configuracion-encuesta',
  templateUrl: './encuesta-configurada.component.html',
  styleUrls: ['./encuesta-configurada.component.css']
})
export class ConfiguracionEncuestaComponent implements OnInit {
encuestaConfiguradaForm: FormGroup;
constructor(private fb: FormBuilder, private  router: Router, private toastr: ToastrService,
  private _EncuestaCondfiguradaService:EncuestaConfiguradaService) {
      this.encuestaConfiguradaForm = this.fb.group({
        fechaInicio:['', Validators.required],
        fechaFinal:['', Validators.required],
        titulo:['', Validators.required],
        poblacion:['', Validators.required],
        articulo:['', Validators.required],
        numeroEncuesta:['', Validators.required],
      })
    }
  ngOnInit(): void {
  }

  agregarEncuestaConfigurada(){
    console.log(this.encuestaConfiguradaForm)
    const ENCUESTACONFIGURADA: encuestaConfigurada ={
      fechaInicio: this.encuestaConfiguradaForm.get('fechaInicio')?.value,
      fechaFinal: this.encuestaConfiguradaForm.get('fechaFinal')?.value,
      titulo: this.encuestaConfiguradaForm.get('titulo')?.value,
      poblacion: this.encuestaConfiguradaForm.get('poblacion')?.value,
      articulo: this.encuestaConfiguradaForm.get('articulo')?.value,
      numeroEncuesta: this.encuestaConfiguradaForm.get('numeroEncuesta')?.value,
    
    }
    console.log(encuestaConfigurada);
    this._EncuestaCondfiguradaService.guardarEncuestaConfigurada(ENCUESTACONFIGURADA).subscribe(dato=>{
      this.router.navigate(['/acerca'])
    }, error=>{
    console.log(error);
    this.encuestaConfiguradaForm.reset()
    })
    }
}