import { EditGastoComponent } from './components/pages/edit-gasto/edit-gasto.component';
import { NewGastoComponent } from './components/pages/new-gasto/new-gasto.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AssinaturasComponent } from './components/pages/assinaturas/assinaturas.component';
import { GastosComponent } from './components/pages/gastos/gastos.component';
import { LoginComponent } from './components/pages/login/login.component';
import { LoginGuard } from "./core/guard/login.guard";

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'login' },
  { path: 'login', component: LoginComponent },
  { path: 'assinaturas', component: AssinaturasComponent, canActivate: [LoginGuard] },
  { path: 'gastos', component: GastosComponent, canActivate: [LoginGuard] },
  { path: 'gastos/new', component: NewGastoComponent , canActivate: [LoginGuard] },
  { path: 'gastos/edit/:id', component: EditGastoComponent, canActivate: [LoginGuard] },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
