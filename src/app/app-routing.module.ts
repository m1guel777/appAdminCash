import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { EmpresasComponent } from './pages/empresas/empresas.component';
import { PropiedadesComponent } from './pages/propiedades/propiedades.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'empresas', component: EmpresasComponent },
  { path: 'propiedades', component: PropiedadesComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '**', redirectTo: '/home' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
