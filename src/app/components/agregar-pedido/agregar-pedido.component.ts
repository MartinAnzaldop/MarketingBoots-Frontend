import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Pedido } from 'src/app/models/pedido';
import { PedidoService } from 'src/app/service/pedido.service';

@Component({
  selector: 'app-agregar-pedido',
  templateUrl: './agregar-pedido.component.html',
  styleUrls: ['./agregar-pedido.component.css']
})
export class AgregarPedidoComponent implements OnInit {
  pedidoForm: FormGroup;
  titulo = 'Agregar solicitud';
  id:string | null;
  constructor(private fb: FormBuilder, private  router: Router, private toastr: ToastrService,
    private _PedidoService:PedidoService, private aRouter: ActivatedRoute) {
      
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
    this.id=this.aRouter.snapshot.paramMap.get('id')
   }

  ngOnInit(): void {
    this.esEditar()
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

  if(this.id !==null){
    //editamos pedido
    this._PedidoService.editarPedido(this.id, PEDIDO).subscribe(data=>{
      this.router.navigate(['/listaPedidos'])
      this.toastr.info('El pedido fue editado con exito','Pedido editado');
    },error=>{
  console.log(error)
    })
  }else{
    //agregamos pedido
    console.log(PEDIDO);
    this._PedidoService.guardarPedido(PEDIDO).subscribe(dato=>{
    this.router.navigate(['/listaPedidos'])
    this.toastr.success('El pedido fue agregado con exito','Pedido agregado');
  }, error=>{
  console.log(error);
  this.pedidoForm.reset()
  })
  }
  
  }

  esEditar(){
  
    if(this.id !==null){
      this.titulo='Editar solicitud';
      this._PedidoService.obtenerPedidoById(this.id).subscribe(data=>{
      this.pedidoForm.setValue({
          empresa: data.empresa,
          direccion: data.direccion,
          contacto: data.contacto,
          encargado: data.encargado,
          categoria: data.categoria,
          nombreArticulo: data.nombreArticulo,
          precioArticulo: data.precioArticulo,
          marcaArticulo: data.marcaArticulo,
          descripcionArticulo: data.descripcionArticulo,
      })
      },error=>{
        console.log(error)
      })
    }
  }
}

 