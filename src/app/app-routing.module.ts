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
import { ListaBancoPreguntasComponent } from './components/lista-banco-preguntas/lista-banco-preguntas.component';
import { ListaRespuestasEncuestasComponent } from './components/lista-respuestas-encuestas/lista-respuestas-encuestas.component';
import { RespuestasEncuestasComponent } from './components/respuestas-encuestas/respuestas-encuestas.component';
import { UserIniciarSesionComponent } from './components/user-iniciar-sesion/user-iniciar-sesion.component';
import { UserRegistroComponent } from './components/user-registro/user-registro.component';
import { AdminIniciarSesionComponent } from './components/admin-iniciar-sesion/admin-iniciar-sesion.component';
import { RecuperarPasswordComponent } from './components/recuperar-password/recuperar-password.component';
import { VerificarCorreoComponent } from './components/verificar-correo/verificar-correo.component';
import { UserVistaComponent } from './components/user-vista/user-vista.component';
import { AdminEncuestaComponent } from './components/admin-encuesta/admin-encuesta.component';
import { AdminVistaComponent } from './components/admin-vista/admin-vista.component';
import { ChatDialogComponent } from './components/chat-dialog/chat-dialog.component';
import { SolicitudUserComponent } from './components/solicitud-user/solicitud-user.component';
import { ConfiguracionEncuestaUsuarioComponent } from './components/configuracion-encuesta-usuario/configuracion-encuesta-usuario.component';
import { ListaPreguntasSeleccionadasComponent } from './components/lista-preguntas-seleccionadas/lista-preguntas-seleccionadas.component';
import { PreguntasSeleccionadasUserComponent } from './components/preguntas-seleccionadas-user/preguntas-seleccionadas-user.component';
import { ListaPreguntasUserComponent } from './components/lista-preguntas-user/lista-preguntas-user.component';
import { EncuestasUserComponent } from './components/encuestas-user/encuestas-user.component';
import { SolicitudesEncuestasComponent } from './components/solicitudes-encuestas/solicitudes-encuestas.component';
import { ListaSolicitudesComponent } from './components/lista-solicitudes/lista-solicitudes.component';
import { ListaEncuestasAdminComponent } from './components/lista-encuestas-admin/lista-encuestas-admin.component';




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
  {path:'userVista', component:UserVistaComponent},
  {path:'adminVista', component:AdminVistaComponent},
  {path:'chatbot', component:ChatDialogComponent},
  {path:'agregarsolicitud', component:SolicitudUserComponent},
  {path:'encuestasUser/:id', component:EncuestasUserComponent},



  //Alexandra
  {path:'configuracionEncuesta', component:ConfiguracionEncuestaComponent},
  {path:'listaConfiguracionEncuesta', component:ListaConfiguracionEncuestaComponent},
  {path:'agregarEncuestaConfigurada', component:ConfiguracionEncuestaComponent},
  {path:'agregarConfiguracion', component:AgregarConfiguracionComponent},
  {path:'editarEncuestaConfigurada/:id', component:AgregarConfiguracionComponent},
  {path:'inicioUsiario', component:UserIniciarSesionComponent},
  {path:'registrarUsuario', component:UserRegistroComponent},
  {path:'inicioAdministrador', component:AdminIniciarSesionComponent},
  {path:'recuperarContraseña', component:RecuperarPasswordComponent},
  {path:'verificacionCorreo', component:VerificarCorreoComponent},
  {path:'configuracionUsuario', component:ConfiguracionEncuestaUsuarioComponent},
  {path:'solicitudEncuesta', component:SolicitudesEncuestasComponent},

  //Ana
  {path:'bancoPreguntas', component:AgregarPreguntaComponent},
  {path:'listaBancoPreguntas', component:ListaBancoPreguntasComponent},
  {path:'editarBancoPregu/:id', component:AgregarPreguntaComponent},
  {path:'listaPreguntasUser', component:ListaPreguntasUserComponent},


  {path:'preguntasSeleccionadas', component:PreguntasSeleccionadasComponent},
  {path:'listaPreguntasSeleccionadas', component:ListaPreguntasSeleccionadasComponent},
  {path:'editarPreguntaSelec/:id', component:PreguntasSeleccionadasComponent},
  {path:'listaPreguntasSeleccionadasUser', component:ListaPreguntasUserComponent},
  {path:'preguntasSeleccionadasUser', component:PreguntasSeleccionadasUserComponent},

  //Norma
  {path:'respuestasEncuestas', component:RespuestasEncuestasComponent},
  {path:'listaRespuestasEncuestas', component:ListaRespuestasEncuestasComponent},
  {path:'listaSolicitud', component:ListaSolicitudesComponent},
  {path:'editarSolicitud/:id', component:SolicitudesEncuestasComponent},
  {path:'listaEncuestasAdmin', component:ListaEncuestasAdminComponent},
  {path:'**', redirectTo:'inicio', pathMatch:"full"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
