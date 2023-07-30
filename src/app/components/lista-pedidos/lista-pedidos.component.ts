import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Pedido } from 'src/app/models/pedido';
import { PedidoService } from 'src/app/service/pedido.service';

@Component({
  selector: 'app-lista-pedidos',
  templateUrl: './lista-pedidos.component.html',
  styleUrls: ['./lista-pedidos.component.css']
})
export class ListaPedidosComponent implements OnInit {
listaPedido:Pedido []=[];

  constructor(private _PedidoService: PedidoService, private toastr: ToastrService,
    private router: Router) { }

  ngOnInit(): void {
    this.obetenerPedidos()
  }
obetenerPedidos(){
  this._PedidoService.getPedidos().subscribe(data=>{
    console.log(data);
    this.listaPedido=data;
  },error=>{
  console.log(error)
  })
}
  eliminarPedido(id:any){
    this._PedidoService.deletePedido(id).subscribe(data=>{
    this.toastr.error('El pedido fue eliminado con exito','Pedido eliminado');
    this.obetenerPedidos();
    this.router.navigate(['/listaPedidos'])
    },error=>{
      console.log(error)
    })
  }
  editarPedido(id:any){

  }
}
