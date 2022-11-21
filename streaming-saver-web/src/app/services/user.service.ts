import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Usuario} from "../interfaces/usuario";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private readonly urlApi = "api";

  constructor( private http: HttpClient ) { }

  getUser(usuarioLogin: Usuario): Observable<Usuario> {

    const params = {
      email: usuarioLogin.email,
      senha: usuarioLogin.senha
    }

    return this.http.get<Usuario>(`${this.urlApi}/usuario`, {params});
  }

  createUser(usuarioLogin: Usuario): Observable<Usuario> {

    const usuarioSalvar = {
      email: usuarioLogin.email,
      senha: usuarioLogin.senha
    }


    return this.http.post<Usuario>(`${this.urlApi}/usuario`, usuarioSalvar);
  }
}
