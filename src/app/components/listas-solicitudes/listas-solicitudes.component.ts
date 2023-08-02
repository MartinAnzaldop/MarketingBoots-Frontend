import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { solicitudEncuesta } from 'src/app/models/solicitudEncuesta';
import { DatosUsuarioService } from 'src/app/service/DatosUsuario.service';
import { SolicitudService } from 'src/app/service/solicitud.service';

@Component({
  selector: 'app-listas-solicitudes',
  templateUrl: './listas-solicitudes.component.html',
  styleUrls: ['./listas-solicitudes.component.css']
})
export class ListasSolicitudesComponent implements OnInit {
  correo:string;
  usuario:string;

 
  listaSolicitudes:solicitudEncuesta []=[];

  constructor(private _Solicitud: SolicitudService, private toastr: ToastrService,
    private router: Router, private _DatosUsuario: DatosUsuarioService) { }

  ngOnInit(): void {
    this.obetenerSolicitud();
    
  }
  

  isChatbotVisible = false;
  toggleChatbot(): void {
    this.isChatbotVisible = !this.isChatbotVisible;
  }
obetenerSolicitud(){
  this._Solicitud.getSolicitud().subscribe(data=>{
    console.log(data);
    this.listaSolicitudes=data;
    this.correo=this._DatosUsuario.getEmail();
    console.log('el siguiente correo'+this.correo);
  },error=>{
  console.log(error)
  })
}
  eliminarSolicitud(id:any){
    this._Solicitud.deleteSolcitud(id).subscribe(data=>{
    this.toastr.error('El pedido fue eliminado con exito','Pedido eliminado');
    this.obetenerSolicitud();
    this.router.navigate(['/listaSolicitudesUser'])
    },error=>{
      console.log(error)
    })
  }
  editarSolicitud(id:any){

  }
}