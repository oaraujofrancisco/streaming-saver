import { EditGastoComponent } from './components/pages/edit-gasto/edit-gasto.component';
import { NewGastoComponent } from './components/pages/new-gasto/new-gasto.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AssinaturasComponent } from './components/pages/assinaturas/assinaturas.component';
import { GastosComponent } from './components/pages/gastos/gastos.component';
import { LoginComponent } from './components/pages/login/login.component';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'assinaturas', component: AssinaturasComponent },
  { path: 'gastos', component: GastosComponent },
  { path: 'gastos/new', component: NewGastoComponent },
  { path: 'gastos/edit/:id', component: EditGastoComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
