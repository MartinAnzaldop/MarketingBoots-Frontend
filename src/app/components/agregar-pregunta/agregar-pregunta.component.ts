import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { BancoPregu } from 'src/app/models/bancoPregu';
import { BancoPreguService } from 'src/app/service/bancoPregu.service';

@Component({
  selector: 'app-agregar-pregunta',
  templateUrl: './agregar-pregunta.component.html',
  styleUrls: ['./agregar-pregunta.component.css']
})
export class AgregarPreguntaComponent implements OnInit {
  bancoPreguForm: FormGroup;
  titulo = 'Agregar Pregunta';
  id:string | null;
    constructor(private fb: FormBuilder, private  router: Router, private toastr: ToastrService,
      private _BancoPreguService:BancoPreguService, private aRouter: ActivatedRoute) {
      this.bancoPreguForm=this.fb.group({
        pregunta:['', Validators.required],
        categoria:['', Validators.required],
        opcion:['', Validators.required],
      })
      this.id=this.aRouter.snapshot.paramMap.get('id')
     }
  
    ngOnInit(): void {
      this.esEditar()
    }

    agregarBancoPregu(){
      console.log(this.bancoPreguForm)
      const BANCOPREGU: BancoPregu ={
        pregunta: this.bancoPreguForm.get('pregunta')?.value,
        categoria: this.bancoPreguForm.get('categoria')?.value,
        opcion: this.bancoPreguForm.get('opcion')?.value,
      }
      
      if(this.id !==null){
        //editamos banco de pregunta
        this._BancoPreguService.editarBancoPregu(this.id, BANCOPREGU).subscribe(data=>{
          this.router.navigate(['/listaBancoPreguntas'])
          this.toastr.info('La pregunta fue editada con exito','Pregunta editada');
        },error=>{
      console.log(error)
        })
      }else{
      //agregamos banco de pregunta
      console.log(BANCOPREGU);
      this._BancoPreguService.guardarBancoPregu(BANCOPREGU).subscribe(dato=>{
        this.router.navigate(['/listaBancoPreguntas'])
        this.toastr.success('La pregunta fue registrada con exito!','Pregunta agregada');
      }, error=>{
      console.log(error);
      this.bancoPreguForm.reset()
      })
      }
      
      }


      esEditar(){
        if(this.id !==null){
          this.titulo='Editar pregunta';
          this._BancoPreguService.obtenerBancoPreguById(this.id).subscribe(data=>{
          this.bancoPreguForm.setValue({
              pregunta: data.pregunta,
              categoria: data.categoria,
              opcion: data.opcion,
          })
          },error=>{
            console.log(error)
          })
        }
      }

}
