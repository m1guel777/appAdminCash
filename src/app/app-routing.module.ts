import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { EmpresasComponent } from './pages/empresas/empresas.component';
import { PropiedadesComponent } from './pages/propiedades/propiedades.component';
import { LoginComponent } from './pages/login/login.component';
import { RegistroComponent } from './pages/registro/registro.component';
import { OportunidadesDeNegocioComponent } from './pages/oportunidades-de-negocio/oportunidades-de-negocio.component';

const routes: Routes = [
  { path: 'home/:id', component: HomeComponent },
  { path: 'empresas', component: EmpresasComponent },
  { path: 'propiedades', component: PropiedadesComponent },
  { path: 'login', component: LoginComponent },
  { path: 'registro', component: RegistroComponent },
  { path: 'opNegocio', component: OportunidadesDeNegocioComponent },
  { path: '', redirectTo: 'home/5', pathMatch: 'full' },
  { path: '**', redirectTo: 'home/5' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
