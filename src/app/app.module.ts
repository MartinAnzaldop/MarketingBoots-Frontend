import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { NavbarComponent } from './components/navbar/navbar.component';


import { NavbarAdminComponent } from './components/navbar-admin/navbar-admin.component';
import { ListaProductoComponent } from './components/lista-producto/lista-producto.component';


import { PedidoComponent } from './components/pedido/pedido.component';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import{HttpClientModule }from '@angular/common/http';
import { ListaPedidosComponent } from './components/lista-pedidos/lista-pedidos.component';
import { ListaBancoPreguntasComponent } from './components/lista-banco-preguntas/lista-banco-preguntas.component';
import { AgregarPreguntaComponent } from './components/agregar-pregunta/agregar-pregunta.component';
import { PreguntasSeleccionadasComponent } from './components/preguntas-seleccionadas/preguntas-seleccionadas.component';
import { ConfiguracionEncuestaComponent } from './components/configuracion-encuesta/configuracion-encuesta.component';
import { ListaConfiguracionEncuestaComponent } from './components/lista-configuracion-encuesta/lista-configuracion-encuesta.component';
import { EditarConfiguracionEncuestaComponent } from './components/editar-configuracion-encuesta/editar-configuracion-encuesta.component';
import { RespuestasEncuestasComponent } from './components/respuestas-encuestas/respuestas-encuestas.component';
import { ListaRespuestasEncuestasComponent } from './components/lista-respuestas-encuestas/lista-respuestas-encuestas.component';




@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    NavbarComponent,
    NavbarAdminComponent,
    ListaProductoComponent,
    PedidoComponent,
    ListaPedidosComponent,
    ListaBancoPreguntasComponent,
    AgregarPreguntaComponent,
    PreguntasSeleccionadasComponent,
    ConfiguracionEncuestaComponent,
    ListaConfiguracionEncuestaComponent,
    EditarConfiguracionEncuestaComponent,
    RespuestasEncuestasComponent,
    ListaRespuestasEncuestasComponent,

    
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
 