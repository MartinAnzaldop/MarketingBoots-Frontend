import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './components/inicio/inicio.component';
import { AcercaComponent } from './components/acerca/acerca.component';
import { NavbarAdminComponent } from './components/navbar-admin/navbar-admin.component';
import { ListaProductoComponent } from './components/lista-producto/lista-producto.component';
import { EncuestaConfiguradaComponent } from './components/encuesta-configurada/encuesta-configurada.component';

const routes: Routes = [
  {path:'', redirectTo:'inicio', pathMatch:"full"},
  {path:'inicio', component:InicioComponent},
  {path:'acerca', component:AcercaComponent},
  {path:'navbarAdmin', component:NavbarAdminComponent},
  {path:'listaProducto', component:ListaProductoComponent},
  {path:'encuestaConfigurada', component:EncuestaConfiguradaComponent},
  {path:'**', redirectTo:'inicio', pathMatch:"full"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
