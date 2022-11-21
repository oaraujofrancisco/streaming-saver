import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AssinaturasComponent } from './components/pages/assinaturas/assinaturas.component';
import { LoginComponent } from './components/pages/login/login.component';
import { MaterialModule } from './modules/material/material.module';
import { HeaderComponent } from './components/header/header.component';
import { GastosComponent } from './components/pages/gastos/gastos.component';
import { NewGastoComponent } from './components/pages/new-gasto/new-gasto.component';
import { EditGastoComponent } from './components/pages/edit-gasto/edit-gasto.component';
import { GastoFormComponent } from './components/gasto-form/gasto-form.component';
import { AssinaturaFormComponent } from './components/assinatura-form/assinatura-form.component';
import { EditAssinaturaComponent } from './components/pages/edit-assinatura/edit-assinatura.component';
import {UsuarioService} from "./services/usuario.service";
import { HomeComponent } from './components/pages/home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    AssinaturasComponent,
    HeaderComponent,
    GastosComponent,
    NewGastoComponent,
    EditGastoComponent,
    GastoFormComponent,
    AssinaturaFormComponent,
    EditAssinaturaComponent,
    HomeComponent,

  ],
    imports: [
      BrowserModule,
      AppRoutingModule,
      BrowserAnimationsModule,
      FormsModule,
      ReactiveFormsModule,
      MaterialModule,
      HttpClientModule,

    ],
  providers: [
    UsuarioService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
