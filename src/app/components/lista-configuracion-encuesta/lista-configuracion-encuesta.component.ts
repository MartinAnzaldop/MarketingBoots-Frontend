import { Component, OnInit } from '@angular/core';
import { encuestaConfigurada } from 'src/app/models/encuestaConfigurada';
import { EncuestaConfiguradaService } from 'src/app/service/encuestaConfigurada.service';

@Component({
  selector: 'app-lista-configuracion-encuesta',
  templateUrl: './lista-configuracion-encuesta.component.html',
  styleUrls: ['./lista-configuracion-encuesta.component.css']
})
export class ListaConfiguracionEncuestaComponent implements OnInit {
listaEncuestaConfigurada:encuestaConfigurada []=[];

  constructor(private _EncuestaCondfiguradaService:EncuestaConfiguradaService) { }

  ngOnInit(): void {
    this.obetenerEncuestasConfiguradas()
  }
  obetenerEncuestasConfiguradas(){
    this._EncuestaCondfiguradaService.getEncuestaConfigurada().subscribe(data=>{
      console.log(data);
      this.listaEncuestaConfigurada=data;
    }, error=>{
    console.log(error)
    })
  }
}
