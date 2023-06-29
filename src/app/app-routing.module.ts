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


const routes: Routes = [
  {path:'', redirectTo:'inicio', pathMatch:"full"},
  {path:'inicio', component:InicioComponent},
  {path:'navbarAdmin', component:NavbarAdminComponent},
  {path:'listaProducto', component:ListaProductoComponent},
  {path:'pedido', component:PedidoComponent},
  {path:'listaPedidos', component:ListaPedidosComponent},
  //Martin



  //Alexandra
  {path:'configuracionEncuesta', component:ConfiguracionEncuestaComponent},
  {path:'listaConfiguracionEncuesta', component:ListaConfiguracionEncuestaComponent},
  {path:'agregarEncuestaConfigurada', component:ConfiguracionEncuestaComponent},
  {path:'agregarConfiguracion', component:AgregarConfiguracionComponent},

  //Ana



  //Norma




  {path:'**', redirectTo:'inicio', pathMatch:"full"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
