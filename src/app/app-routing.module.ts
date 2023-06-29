import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './components/inicio/inicio.component';
import { NavbarAdminComponent } from './components/navbar-admin/navbar-admin.component';
import { ListaProductoComponent } from './components/lista-producto/lista-producto.component';
import { PedidoComponent } from './components/pedido/pedido.component';
import { ListaPedidosComponent } from './components/lista-pedidos/lista-pedidos.component';
import { AgregarPedidoComponent } from './components/agregar-pedido/agregar-pedido.component';
import { PreguntasSeleccionadasComponent } from './components/preguntas-seleccionadas/preguntas-seleccionadas.component';


const routes: Routes = [
  {path:'', redirectTo:'inicio', pathMatch:"full"},
  {path:'inicio', component:InicioComponent},
  {path:'navbarAdmin', component:NavbarAdminComponent},
  {path:'listaProducto', component:ListaProductoComponent},
  {path:'pedido', component:PedidoComponent},
  {path:'listaPedidos', component:ListaPedidosComponent},
  
  //Martin
  {path:'agregarPedido', component:AgregarPedidoComponent},
  {path:'editarPedido/:id', component:AgregarPedidoComponent},


  //Alexandra



  //Ana
  {path:'preguntasSeleccionadas', component:PreguntasSeleccionadasComponent},



  //Norma


  
  {path:'**', redirectTo:'inicio', pathMatch:"full"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
