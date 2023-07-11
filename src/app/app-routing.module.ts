import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './components/inicio/inicio.component';
import { NavbarAdminComponent } from './components/navbar-admin/navbar-admin.component';
import { ListaProductoComponent } from './components/lista-producto/lista-producto.component';
import { PedidoComponent } from './components/pedido/pedido.component';
import { ListaPedidosComponent } from './components/lista-pedidos/lista-pedidos.component';
import { PreguntasSeleccionadasComponent } from './components/preguntas-seleccionadas/preguntas-seleccionadas.component';
import { AgregarPreguntaComponent } from './components/agregar-pregunta/agregar-pregunta.component';
import { ListaBancoPreguntasComponent } from './components/lista-banco-preguntas/lista-banco-preguntas.component';


const routes: Routes = [
  {path:'', redirectTo:'inicio', pathMatch:"full"},
  {path:'inicio', component:InicioComponent},
  {path:'navbarAdmin', component:NavbarAdminComponent},
  {path:'listaProducto', component:ListaProductoComponent},
  {path:'pedido', component:PedidoComponent},
  {path:'listaPedidos', component:ListaPedidosComponent},
  
  //Martin



  //Alexandra


  //Ana
  {path:'preguntasSeleccionadas', component:PreguntasSeleccionadasComponent},
  {path:'bancoPreguntas', component:AgregarPreguntaComponent},
  {path:'listaBancoPreguntas', component:ListaBancoPreguntasComponent},
  {path:'editarBancoPregu/:id', component:AgregarPreguntaComponent},

  
  //Norma


  
  {path:'**', redirectTo:'inicio', pathMatch:"full"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
