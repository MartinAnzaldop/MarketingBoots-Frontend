import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { PreguntaSelec } from 'src/app/models/preguntaSelec';
import { PreguntaSelecService } from 'src/app/service/preguntaSelec.service';

@Component({
  selector: 'app-lista-preguntas-seleccionadas',
  templateUrl: './lista-preguntas-seleccionadas.component.html',
  styleUrls: ['./lista-preguntas-seleccionadas.component.css']
})
export class ListaPreguntasSeleccionadasComponent implements OnInit {
  listaPreguntaSelec:PreguntaSelec []=[];
  
    constructor(private _PreguntaSelecService: PreguntaSelecService, private toastr: ToastrService,
      private router: Router){ }
  
    ngOnInit(): void {
      this.obtenerPreguntaSelec()
    }

    obtenerPreguntaSelec(){
    this._PreguntaSelecService.getPreguntaSelec().subscribe(data=>{
      console.log(data);
      this.listaPreguntaSelec=data;
    },error=>{
    console.log(error)
    })
  }

  eliminarPreguntaSelec(id:any){
    this._PreguntaSelecService.deletePreguntaSelec(id).subscribe(data=>{
    this.toastr.error('La pregunta seleccionada fue eliminada con exito','Pregunta eliminada');
    this.obtenerPreguntaSelec();
    this.router.navigate(['/listaPreguntasSeleccionadas'])
    },error=>{
      console.log(error)
    })
  }
}
