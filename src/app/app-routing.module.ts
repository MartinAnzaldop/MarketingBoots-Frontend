import { AgregarPreguntaUsuarioComponent } from './components/agregar-pregunta-usuario/agregar-pregunta-usuario.component';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './components/inicio/inicio.component';
import { NavbarAdminComponent } from './components/navbar-admin/navbar-admin.component';
import { PedidoComponent } from './components/pedido/pedido.component';
import { AgregarPreguntaComponent } from './components/agregar-pregunta/agregar-pregunta.component';
import { ListaBancoPreguntasComponent } from './components/lista-banco-preguntas/lista-banco-preguntas.component';
import { ListaRespuestasEncuestasComponent } from './components/lista-respuestas-encuestas/lista-respuestas-encuestas.component';
import { RespuestasEncuestasComponent } from './components/respuestas-encuestas/respuestas-encuestas.component';

import { UserResultadoEncuestaComponent } from './components/user-resultado-encuesta/user-resultado-encuesta.component';
import { EstadisticasComponent } from './components/estadisticas/estadisticas.component';

import { UserIniciarSesionComponent } from './components/user-iniciar-sesion/user-iniciar-sesion.component';
import { UserRegistroComponent } from './components/user-registro/user-registro.component';
import { AdminIniciarSesionComponent } from './components/admin-iniciar-sesion/admin-iniciar-sesion.component';
import { RecuperarPasswordComponent } from './components/recuperar-password/recuperar-password.component';
import { VerificarCorreoComponent } from './components/verificar-correo/verificar-correo.component';
import { UserVistaComponent } from './components/user-vista/user-vista.component';
import { AdminVistaComponent } from './components/admin-vista/admin-vista.component';
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






const routes: Routes = [
  {path:'', redirectTo:'inicio', pathMatch:"full"},
  {path:'inicio', component:InicioComponent},
  {path:'navbarAdmin', component:NavbarAdminComponent},
  {path:'pedido', component:PedidoComponent},


  {path:'chart', component:UserResultadoEncuestaComponent},


  //Martin

  {path:'userVista', component:UserVistaComponent},
  {path:'adminVista', component:AdminVistaComponent},
  {path:'encuestasUser/:id', component:EncuestasUserComponent},
  {path:'encuestasAdmin/:id', component:EncuestasAdminComponent},
  {path:'prueba/:id', component:PruebaComponent},
  {path:'estadisticasUser/:id', component:EstadisticasComponent},
  {path:'estadisticasAdmin/:id', component:EstadisticasAdminComponent},



  //Alexandra

  {path:'inicioUsuario', component:UserIniciarSesionComponent},
  {path:'registrarUsuario', component:UserRegistroComponent},
  {path:'inicioAdministrador', component:AdminIniciarSesionComponent},
  {path:'recuperarContraseña', component:RecuperarPasswordComponent},
  {path:'verificacionCorreo', component:VerificarCorreoComponent},
  {path:'solicitudEncuesta', component:SolicitudesEncuestasComponent},
  {path:'solicitudEncuestaAdmin', component:SolicitudesEncuestasAdminComponent},
  {path:'agregarPreguntaUsuario', component:AgregarPreguntaUsuarioComponent},

  //Ana
  {path:'bancoPreguntas', component:AgregarPreguntaComponent},
  {path:'listaBancoPreguntas', component:ListaBancoPreguntasComponent},
  {path:'editarBancoPregu/:id', component:AgregarPreguntaComponent},

<<<<<<< HEAD

=======
  



 
>>>>>>> produccion

  //Norma
  {path:'respuestasEncuestas', component:RespuestasEncuestasComponent},
  {path:'listaRespuestasEncuestas', component:ListaRespuestasEncuestasComponent},

  {path:'listaSolicitud', component:ListaSolicitudesComponent},
  {path:'editarSolicitud/:id', component:SolicitudesEncuestasComponent},
  {path:'listaEncuestasAdmin', component:ListaEncuestasAdminComponent},
  {path:'listaEncuestasUser', component:ListaEncuestasUserComponent},

  {path:'ChatbotFlotante', component:ChatbotPopupComponent},
  {path:'userResultadoEncuesta', component:UserResultadoEncuestaComponent},
  {path:'estadisticas', component:EstadisticasComponent},




  {path:'**', redirectTo:'inicio', pathMatch:"full"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
