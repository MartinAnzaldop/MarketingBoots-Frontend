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
import { AgregarPedidoComponent } from './components/agregar-pedido/agregar-pedido.component';
import { AgregarConfiguracionComponent } from './components/agregar-configuracion/agregar-configuracion.component';
import { ListaPreguntasSeleccionadasComponent } from './components/lista-preguntas-seleccionadas/lista-preguntas-seleccionadas.component';
import { AdminIniciarSesionComponent } from './components/admin-iniciar-sesion/admin-iniciar-sesion.component';
import { AdminVistaComponent } from './components/admin-vista/admin-vista.component';
import { AdminEncuestaComponent } from './components/admin-encuesta/admin-encuesta.component';
import { EstadisticasComponent } from './components/estadisticas/estadisticas.component';
import { UserIniciarSesionComponent } from './components/user-iniciar-sesion/user-iniciar-sesion.component';
import { UserRegistroComponent } from './components/user-registro/user-registro.component';
import { UserVistaComponent } from './components/user-vista/user-vista.component';
import { UserResultadoEncuestaComponent } from './components/user-resultado-encuesta/user-resultado-encuesta.component';
import { ChatDialogComponent } from './components/chat-dialog/chat-dialog.component';
import { NabvarUserComponent } from './components/nabvar-user/nabvar-user.component';
import { SolicitudUserComponent } from './components/solicitud-user/solicitud-user.component';
import { VerificarCorreoComponent } from './components/verificar-correo/verificar-correo.component';
import { RecuperarPasswordComponent } from './components/recuperar-password/recuperar-password.component';
import { SpinnerComponent } from './shared/spinner/spinner.component';
import {AngularFireModule} from '@angular/fire/compat';
import { environment } from 'src/environments/environment';
import { ConfiguracionEncuestaUsuarioComponent } from './components/configuracion-encuesta-usuario/configuracion-encuesta-usuario.component';

import { PreguntasSeleccionadasUserComponent } from './components/preguntas-seleccionadas-user/preguntas-seleccionadas-user.component';
import { ListaPreguntasUserComponent } from './components/lista-preguntas-user/lista-preguntas-user.component';
import { EncuestasUserComponent } from './components/encuestas-user/encuestas-user.component';


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
    AgregarPedidoComponent,
    AgregarConfiguracionComponent,
    ListaPreguntasSeleccionadasComponent,
    AdminIniciarSesionComponent,
    AdminVistaComponent,
    AdminEncuestaComponent,
    EstadisticasComponent,
    UserIniciarSesionComponent,
    UserRegistroComponent,
    UserVistaComponent,
    UserResultadoEncuestaComponent,

    ChatDialogComponent,
    NabvarUserComponent,
    SolicitudUserComponent,
    VerificarCorreoComponent,
    RecuperarPasswordComponent,
    SpinnerComponent,
    ConfiguracionEncuestaUsuarioComponent,
    PreguntasSeleccionadasUserComponent,
    ListaPreguntasUserComponent,
    EncuestasUserComponent,




  ],
  imports: [
    BrowserModule,

    AppRoutingModule,
    ReactiveFormsModule,
    BrowserAnimationsModule, // required animations module
    ToastrModule.forRoot(), // ToastrModule added

    HttpClientModule,

    AngularFireModule.initializeApp(environment.firebaseConfig)


  ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
