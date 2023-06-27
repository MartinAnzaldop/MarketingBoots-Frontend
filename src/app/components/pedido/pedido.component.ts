import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Toast, ToastrService } from 'ngx-toastr';
import { Pedido } from 'src/app/models/pedido';
import { PedidoService } from 'src/app/service/pedido.service';

@Component({
  selector: 'app-pedido',
  templateUrl: './pedido.component.html',
  styleUrls: ['./pedido.component.css']
})
export class PedidoComponent implements OnInit {
pedidoForm: FormGroup;
  constructor(private fb: FormBuilder, private  router: Router, private toastr: ToastrService,
    private _PedidoService:PedidoService) {
    this.pedidoForm=this.fb.group({
      empresa:['', Validators.required],
      direccion:['', Validators.required],
      contacto:['', Validators.required],
      encargado:['', Validators.required],
      categoria:['', Validators.required],
      nombreArticulo:['', Validators.required],
      precioArticulo:['', Validators.required],
      marcaArticulo:['', Validators.required],
      descripcionArticulo:['', Validators.required],
    })
   }

  ngOnInit(): void {
  }

  agregarPedido(){
  console.log(this.pedidoForm)
  const PEDIDO: Pedido ={
    empresa: this.pedidoForm.get('empresa')?.value,
    direccion: this.pedidoForm.get('direccion')?.value,
    contacto: this.pedidoForm.get('contacto')?.value,
    encargado: this.pedidoForm.get('encargado')?.value,
    categoria: this.pedidoForm.get('categoria')?.value,
    nombreArticulo: this.pedidoForm.get('nombreArticulo')?.value,
    precioArticulo: this.pedidoForm.get('precioArticulo')?.value,
    marcaArticulo: this.pedidoForm.get('marcaArticulo')?.value,
    descripcionArticulo: this.pedidoForm.get('descripcionArticulo')?.value,
  }
  console.log(PEDIDO);
  this._PedidoService.guardarPedido(PEDIDO).subscribe(dato=>{
    this.router.navigate(['/acerca'])
  }, error=>{
  console.log(error);
  this.pedidoForm.reset()
  })
  }
}
