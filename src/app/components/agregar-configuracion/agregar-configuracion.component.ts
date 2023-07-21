import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { encuestaConfigurada } from 'src/app/models/encuestaConfigurada';
import { EncuestaConfiguradaService } from 'src/app/service/encuestaConfigurada.service';

@Component({
  selector: 'app-agregar-configuracion',
  templateUrl: './agregar-configuracion.component.html',
  styleUrls: ['./agregar-configuracion.component.css']
})
export class AgregarConfiguracionComponent implements OnInit {

  encuestaConfiguradaForm: FormGroup;
  titulo = 'Agregar configuración de encuesta';
  id:string | null;
constructor(private fb: FormBuilder, private  router: Router, private toastr: ToastrService,
  private _EncuestaCondfiguradaService:EncuestaConfiguradaService, private aRouter: ActivatedRoute) {
      this.encuestaConfiguradaForm = this.fb.group({
        fechaInicio:['', Validators.required],
        fechaFinal:['', Validators.required],
        titulo:['', Validators.required],
        poblacion:['', Validators.required],
        
        numeroEncuesta:['', Validators.required],
      })
      this.id = this.aRouter.snapshot.paramMap.get('id');
    }
  ngOnInit(): void {
    this.esEditar()
  }

  agregarEncuestaConfigurada(){
    console.log(this.encuestaConfiguradaForm)
    const ENCUESTACONFIGURADA: encuestaConfigurada ={
      fechaInicio: this.encuestaConfiguradaForm.get('fechaInicio')?.value,
      fechaFinal: this.encuestaConfiguradaForm.get('fechaFinal')?.value,
      titulo: this.encuestaConfiguradaForm.get('titulo')?.value,
      poblacion: this.encuestaConfiguradaForm.get('poblacion')?.value,
      numeroEncuesta: this.encuestaConfiguradaForm.get('numeroEncuesta')?.value,

    }

    if(this.id !==null){
      //editamos encuesta configurada//
      this._EncuestaCondfiguradaService.editarEncuestaConfigurada(this.id, ENCUESTACONFIGURADA).subscribe(data=>{
        this.router.navigate(['/listaConfiguracionEncuesta'])
        this.toastr.info('La encuesta configurada fue editada con exito','Encuesta configurada editada');
      }, error=>{
        console.log(error);
        })
    }else {
      //agregamos encuesta configurada//
      console.log(ENCUESTACONFIGURADA);
      this._EncuestaCondfiguradaService.guardarEncuestaConfigurada(ENCUESTACONFIGURADA).subscribe(dato=>{
        this.router.navigate(['/listaConfiguracionEncuesta'])
        this.toastr.success('La configuración de encuesta fue agregada con exito', 'Configuración de encuesta agregada');
      }, error=>{
        console.log(error);
        this.encuestaConfiguradaForm.reset()
      })
    }
    }

    esEditar(){

      if(this.id !==null){
        this.titulo='Editar encuesta configurada';
        this._EncuestaCondfiguradaService.obtenerEncuestaConfiguradaById(this.id).subscribe(data=>{
        this.encuestaConfiguradaForm.setValue({
            fechaInicio: data.fechaInicio,
            fechaFinal: data.fechaFinal,
            titulo: data.titulo,
            poblacion: data.poblacion,
            
            numeroEncuesta: data.numeroEncuesta,
        })
        },error=>{
          console.log(error)
        })
      }
    }
  }
