import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { HomeComponent } from './pages/home/home.component';
import { EmpresasComponent } from './pages/empresas/empresas.component';
import { PropiedadesComponent } from './pages/propiedades/propiedades.component';
import { LoginComponent } from './pages/login/login.component';
import { HeaderComponent } from './pages/header/header.component';
import { HttpClientModule } from '@angular/common/http';
import { RegistroComponent } from './pages/registro/registro.component';
import { FormsModule } from '@angular/forms';
import { OportunidadesDeNegocioComponent } from './pages/oportunidades-de-negocio/oportunidades-de-negocio.component';





@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    HomeComponent,
    EmpresasComponent,
    PropiedadesComponent,
    LoginComponent,
    HeaderComponent,
    RegistroComponent,
    OportunidadesDeNegocioComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
