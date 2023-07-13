import { AgregarConfiguracionComponent } from './components/agregar-configuracion/agregar-configuracion.component';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './components/inicio/inicio.component';
import { NavbarAdminComponent } from './components/navbar-admin/navbar-admin.component';
import { ListaProductoComponent } from './components/lista-producto/lista-producto.component';
import { ConfiguracionEncuestaComponent } from './components/configuracion-encuesta/configuracion-encuesta.component';
import { ListaConfiguracionEncuestaComponent } from './components/lista-configuracion-encuesta/lista-configuracion-encuesta.component';
import { PedidoComponent } from './components/pedido/pedido.component';
import { ListaPedidosComponent } from './components/lista-pedidos/lista-pedidos.component';
import { AgregarPreguntaComponent } from './components/agregar-pregunta/agregar-pregunta.component';

import { AgregarPedidoComponent } from './components/agregar-pedido/agregar-pedido.component';
import { PreguntasSeleccionadasComponent } from './components/preguntas-seleccionadas/preguntas-seleccionadas.component';
import { ListaRespuestasEncuestasComponent } from './components/lista-respuestas-encuestas/lista-respuestas-encuestas.component';
import { RespuestasEncuestasComponent } from './components/respuestas-encuestas/respuestas-encuestas.component';


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
  {path:'configuracionEncuesta', component:ConfiguracionEncuestaComponent},
  {path:'listaConfiguracionEncuesta', component:ListaConfiguracionEncuestaComponent},
  {path:'agregarEncuestaConfigurada', component:ConfiguracionEncuestaComponent},
  {path:'agregarConfiguracion', component:AgregarConfiguracionComponent},
  {path: 'editarEncuestaConfigurada/:id', component:AgregarConfiguracionComponent},

  //Ana
  {path:'preguntasSeleccionadas', component:PreguntasSeleccionadasComponent},



  //Norma
  {path:'respuestasEncuestas', component:RespuestasEncuestasComponent},
  {path:'listaRespuestasEncuestas', component:ListaRespuestasEncuestasComponent},






  {path:'**', redirectTo:'inicio', pathMatch:"full"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
