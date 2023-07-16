import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { encuestaConfigurada } from 'src/app/models/encuestaConfigurada';
import { EncuestaConfiguradaService } from 'src/app/service/encuestaConfigurada.service';

@Component({
  selector: 'app-configuracion-encuesta-usuario',
  templateUrl: './configuracion-encuesta-usuario.component.html',
  styleUrls: ['./configuracion-encuesta-usuario.component.css']
})
export class ConfiguracionEncuestaUsuarioComponent implements OnInit {
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
