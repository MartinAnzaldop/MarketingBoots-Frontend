import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Respuestas } from 'src/app/models/respuestas';
import { RespuestasService } from 'src/app/service/respuestas.service';


@Component({
  selector: 'app-lista-respuestas-encuestas',
  templateUrl: './lista-respuestas-encuestas.component.html',
  styleUrls: ['./lista-respuestas-encuestas.component.css']
})
export class ListaRespuestasEncuestasComponent implements OnInit {
  listaRespuestas:Respuestas []=[];

  constructor(private _RespuestasService:RespuestasService, private toastr: ToastrService,
    private router: Router) { }

  ngOnInit(): void {
    this.obetenerRespuestas();
  }
  obetenerRespuestas(){
    this._RespuestasService.getRespuestas().subscribe(data=>{
      console.log(data);
      this.listaRespuestas=data;
    },error=>{
    console.log(error);
    })
  }
  eliminarRespuestas(id:any){
    this._RespuestasService.deleteRespuestas(id).subscribe(data=>{
    this.toastr.error('La respuesta fue eliminada con exito','Respuesta eliminado');
    this.obetenerRespuestas();
    this.router.navigate(['/listaRespuestas'])
    },error=>{
      console.log(error);
    })
  }

}
