import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { NavbarComponent } from './components/navbar/navbar.component';


import { NavbarAdminComponent } from './components/navbar-admin/navbar-admin.component';
import { PedidoComponent } from './components/pedido/pedido.component';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import{HttpClientModule }from '@angular/common/http';
import { ListaBancoPreguntasComponent } from './components/lista-banco-preguntas/lista-banco-preguntas.component';
import { AgregarPreguntaComponent } from './components/agregar-pregunta/agregar-pregunta.component';
import { RespuestasEncuestasComponent } from './components/respuestas-encuestas/respuestas-encuestas.component';
import { ListaRespuestasEncuestasComponent } from './components/lista-respuestas-encuestas/lista-respuestas-encuestas.component';
import { AdminIniciarSesionComponent } from './components/admin-iniciar-sesion/admin-iniciar-sesion.component';
import { AdminVistaComponent } from './components/admin-vista/admin-vista.component';
import { AdminEncuestaComponent } from './components/admin-encuesta/admin-encuesta.component';
import { EstadisticasComponent } from './components/estadisticas/estadisticas.component';
import { UserIniciarSesionComponent } from './components/user-iniciar-sesion/user-iniciar-sesion.component';
import { UserRegistroComponent } from './components/user-registro/user-registro.component';
import { UserVistaComponent } from './components/user-vista/user-vista.component';
import { UserResultadoEncuestaComponent } from './components/user-resultado-encuesta/user-resultado-encuesta.component';
import { NabvarUserComponent } from './components/nabvar-user/nabvar-user.component';
import { VerificarCorreoComponent } from './components/verificar-correo/verificar-correo.component';
import { RecuperarPasswordComponent } from './components/recuperar-password/recuperar-password.component';
import { SpinnerComponent } from './shared/spinner/spinner.component';
import {AngularFireModule} from '@angular/fire/compat';
import { environment } from 'src/environments/environment';
import { EncuestasUserComponent } from './components/encuestas-user/encuestas-user.component';
import { SolicitudesEncuestasComponent } from './components/solicitudes-encuestas/solicitudes-encuestas.component';
import { ListaSolicitudesComponent } from './components/lista-solicitudes/lista-solicitudes.component';
import { ListaEncuestasAdminComponent } from './components/lista-encuestas-admin/lista-encuestas-admin.component';
import { PruebaComponent } from './components/prueba/prueba.component';
import { EncuestasAdminComponent } from './components/encuestas-admin/encuestas-admin.component';
import { ListaEncuestasUserComponent } from './components/lista-encuestas-user/lista-encuestas-user.component';
import { SolicitudesEncuestasAdminComponent } from './components/solicitudes-encuestas-admin/solicitudes-encuestas-admin.component';
import { EstadisticasAdminComponent } from './components/estadisticas-admin/estadisticas-admin.component';

import { ChatbotPopupComponent } from './components/chatbot-popup/chatbot-popup.component';
import { ChatBotComponent } from './components/chat-bot/chat-bot.component';


@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    NavbarComponent,
    NavbarAdminComponent,
    PedidoComponent,
    ListaBancoPreguntasComponent,
    AgregarPreguntaComponent,
    RespuestasEncuestasComponent,
    ListaRespuestasEncuestasComponent,
    AdminIniciarSesionComponent,
    AdminVistaComponent,
    AdminEncuestaComponent,
    EstadisticasComponent,
    UserIniciarSesionComponent,
    UserRegistroComponent,
    UserVistaComponent,
    UserResultadoEncuestaComponent,
    NabvarUserComponent,
    VerificarCorreoComponent,
    RecuperarPasswordComponent,
    SpinnerComponent,
    EncuestasUserComponent,

    SolicitudesEncuestasComponent,
    ListaSolicitudesComponent,
    ListaEncuestasAdminComponent,
    PruebaComponent,
    EncuestasAdminComponent,
    ListaEncuestasUserComponent,
    SolicitudesEncuestasAdminComponent,
    EstadisticasAdminComponent,
    ChatbotPopupComponent,
    ChatBotComponent,
   





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
 