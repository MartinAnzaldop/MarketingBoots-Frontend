import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { BancoPreguUser } from 'src/app/models/bancoPreguUser';
import { BancoPreguUserService } from 'src/app/service/bancoPreguUser.service';

@Component({
  selector: 'app-agregar-pregunta-user',
  templateUrl: './agregar-pregunta-user.component.html',
  styleUrls: ['./agregar-pregunta-user.component.css']
})

export class AgregarPreguntaUserComponent implements OnInit {
  bancoPreguUserForm: FormGroup;
  titulo = 'Agregar Pregunta';
  id:string | null;
    constructor(private fb: FormBuilder, private  router: Router, private toastr: ToastrService,
      private _BancoPreguUserService:BancoPreguUserService, private aRouter: ActivatedRoute) {
      this.bancoPreguUserForm=this.fb.group({
        pregunta:['', Validators.required],
        categoria:['', Validators.required],
        opcion:['', Validators.required],
      })
      this.id=this.aRouter.snapshot.paramMap.get('id')
     }
  
    ngOnInit(): void {
      this.esEditar()
    }

    agregarBancoPreguUser(){
      console.log(this.bancoPreguUserForm)
      const BANCOPREGUUSER: BancoPreguUser ={
        pregunta: this.bancoPreguUserForm.get('pregunta')?.value,
        categoria: this.bancoPreguUserForm.get('categoria')?.value,
        opcion: this.bancoPreguUserForm.get('opcion')?.value,
      }
      
      if(this.id !==null){
        //editamos banco de pregunta
        this._BancoPreguUserService.editarBancoPreguUser(this.id, BANCOPREGUUSER).subscribe(data=>{
          this.router.navigate(['/solicitudEncuesta'])
          this.toastr.info('La pregunta fue editada con exito','Pregunta editada');
        },error=>{
      console.log(error)
        })
      }else{
      //agregamos banco de pregunta
      console.log(BANCOPREGUUSER);
      this._BancoPreguUserService.guardarBancoPreguUser(BANCOPREGUUSER).subscribe(dato=>{
        this.router.navigate(['/solicitudEncuesta'])
        this.toastr.success('La pregunta fue registrada con exito!','Pregunta agregada');
      }, error=>{
      console.log(error);
      this.bancoPreguUserForm.reset()
      })
      }
      
      }


      esEditar(){
        if(this.id !==null){
          this.titulo='Editar pregunta';
          this._BancoPreguUserService.obtenerBancoPreguUserById(this.id).subscribe(data=>{
          this.bancoPreguUserForm.setValue({
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
