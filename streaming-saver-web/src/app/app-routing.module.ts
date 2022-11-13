import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AssinaturasComponent } from './components/pages/assinaturas/assinaturas.component';
import { LoginComponent } from './components/pages/login/login.component';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'assinaturas', component: AssinaturasComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
