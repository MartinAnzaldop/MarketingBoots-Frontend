import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PreguntaSelec } from 'src/app/models/preguntaSelec';
import { PreguntaSelecService } from 'src/app/service/preguntaSelec.service';

@Component({
  selector: 'app-lista-preguntas-user',
  templateUrl: './lista-preguntas-user.component.html',
  styleUrls: ['./lista-preguntas-user.component.css']
})
export class ListaPreguntasUserComponent implements OnInit {
  listaPreguntaSelec:PreguntaSelec []=[];
  
  constructor(private _PreguntaSelecService: PreguntaSelecService,
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
  this.obtenerPreguntaSelec();
  this.router.navigate(['/listaPreguntasSeleccionadas'])
  },error=>{
    console.log(error)
  })
}
}
