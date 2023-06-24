import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { CaracteristicasComponent } from './components/caracteristicas/caracteristicas.component';
import { AcercaComponent } from './components/acerca/acerca.component';
import { ServiciosComponent } from './components/servicios/servicios.component';
import { ContactoComponent } from './components/contacto/contacto.component';
import { FooterComponent } from './components/footer/footer.component';
import { NavbarAdminComponent } from './components/navbar-admin/navbar-admin.component';
import { ListaProductoComponent } from './components/lista-producto/lista-producto.component';
import { EncuestaConfiguradaComponent } from './components/encuesta-configurada/encuesta-configurada.component';



@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    NavbarComponent,
    CaracteristicasComponent,
    AcercaComponent,
    ServiciosComponent,
    ContactoComponent,
    FooterComponent,
    NavbarAdminComponent,
    ListaProductoComponent,
    EncuestaConfiguradaComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
 