import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { solicitudEncuesta } from 'src/app/models/solicitudEncuesta';
import { SolicitudService } from 'src/app/service/solicitud.service';

@Component({
  selector: 'app-lista-encuestas-user',
  templateUrl: './lista-encuestas-user.component.html',
  styleUrls: ['./lista-encuestas-user.component.css']
})
export class ListaEncuestasUserComponent implements OnInit {

 
  listaSolicitudes:solicitudEncuesta []=[];

  constructor(private _Solicitud: SolicitudService, private toastr: ToastrService,
    private router: Router) { }

  ngOnInit(): void {
    this.obetenerSolicitud()
  }
obetenerSolicitud(){
  this._Solicitud.getSolicitud().subscribe(data=>{
    console.log(data);
    this.listaSolicitudes=data;
  },error=>{
  console.log(error)
  })
}
  eliminarSolicitud(id:any){
    this._Solicitud.deleteSolcitud(id).subscribe(data=>{
    this.toastr.error('El pedido fue eliminado con exito','Pedido eliminado');
    this.obetenerSolicitud();
    this.router.navigate(['/listaSolicitud'])
    },error=>{
      console.log(error)
    })
  }
  editarSolicitud(id:any){

  }
}