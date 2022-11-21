import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AssinaturasComponent } from './components/pages/assinaturas/assinaturas.component';
import { EditAssinaturaComponent } from './components/pages/edit-assinatura/edit-assinatura.component';
import { EditGastoComponent } from './components/pages/edit-gasto/edit-gasto.component';
import { GastosComponent } from './components/pages/gastos/gastos.component';
import { LoginComponent } from './components/pages/login/login.component';
import { NewGastoComponent } from './components/pages/new-gasto/new-gasto.component';
import { LoginGuard } from "./core/guard/login.guard";
import {HomeComponent} from "./components/pages/home/home.component";

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'home' },
  { path: 'login', component: LoginComponent },
  { path: 'home', component: HomeComponent, canActivate: [LoginGuard] },
  { path: 'assinaturas', component: AssinaturasComponent, canActivate: [LoginGuard] },
  { path: 'assinaturas/edit/:id', component: EditAssinaturaComponent, canActivate: [LoginGuard] },
  { path: 'gastos', component: GastosComponent, canActivate: [LoginGuard] },
  { path: 'gastos/new', component: NewGastoComponent, canActivate: [LoginGuard] },
  { path: 'gastos/edit/:id', component: EditGastoComponent, canActivate: [LoginGuard] },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
