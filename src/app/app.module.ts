import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ServiciosComponent } from './components/servicios/servicios.component';
import { FooterComponent } from './components/footer/footer.component';
import { NavbarAdminComponent } from './components/navbar-admin/navbar-admin.component';
import { ListaProductoComponent } from './components/lista-producto/lista-producto.component';
import { PedidoComponent } from './components/pedido/pedido.component';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import{HttpClientModule }from '@angular/common/http';
import { ListaPedidosComponent } from './components/lista-pedidos/lista-pedidos.component';



@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    NavbarComponent,
    ServiciosComponent,
    FooterComponent,
    NavbarAdminComponent,
    ListaProductoComponent,
    PedidoComponent,
    ListaPedidosComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    BrowserAnimationsModule, // required animations module
    ToastrModule.forRoot(), // ToastrModule added
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
 