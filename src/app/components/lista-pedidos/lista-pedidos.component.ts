import { Component, OnInit } from '@angular/core';
import { Pedido } from 'src/app/models/pedido';
import { PedidoService } from 'src/app/service/pedido.service';

@Component({
  selector: 'app-lista-pedidos',
  templateUrl: './lista-pedidos.component.html',
  styleUrls: ['./lista-pedidos.component.css']
})
export class ListaPedidosComponent implements OnInit {
listaPedido:Pedido []=[];

  constructor(private _PedidosService: PedidoService) { }

  ngOnInit(): void {
    this.obetenerPedidos()
  }
obetenerPedidos(){
  this._PedidosService.getPedidos().subscribe(data=>{
    console.log(data);
    this.listaPedido=data;
  },error=>{
  console.log(error)
  })
}
}
