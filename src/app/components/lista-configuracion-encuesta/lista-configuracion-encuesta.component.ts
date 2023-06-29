import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { encuestaConfigurada } from 'src/app/models/encuestaConfigurada';
import { EncuestaConfiguradaService } from 'src/app/service/encuestaConfigurada.service';

@Component({
  selector: 'app-lista-configuracion-encuesta',
  templateUrl: './lista-configuracion-encuesta.component.html',
  styleUrls: ['./lista-configuracion-encuesta.component.css']
})
export class ListaConfiguracionEncuestaComponent implements OnInit {
listaEncuestaConfigurada:encuestaConfigurada []=[];

  constructor(private _EncuestaCondfiguradaService:EncuestaConfiguradaService,
    private toastr: ToastrService, private router: Router) { }

  ngOnInit(): void {
    this.obtenerEncuestasConfiguradas();
  }
  obtenerEncuestasConfiguradas(){
    this._EncuestaCondfiguradaService.getEncuestaConfigurada().subscribe(data=>{
      console.log(data);
      this.listaEncuestaConfigurada=data;
    }, error=>{
    console.log(error)
    })
  }
  eliminarEncuestaConfigurada(id:any){
    this._EncuestaCondfiguradaService.deleteEncuestaConfigurada(id).subscribe(data=>  {
    this.toastr.error('La encuesta configurada fue eliminada con exito','Encuesta configurada eliminada');
    this.obtenerEncuestasConfiguradas();
    this.router.navigate(['/listaConfiguracionEncuesta'])
    },error=>{
      console.log(error)
    })
  }
}
